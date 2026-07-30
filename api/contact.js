const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  // Apenas aceita método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  try {
    // Se o body for string (dependendo de como o fetch enviou), fazemos o parse
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltam campos obrigatórios.' });
    }

    // 1. Email que VAI PARA VOCÊ (notificação do lead)
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <h2 style="color: #6366f1; text-align: center;">Novo Contato via Portfólio</h2>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px; white-space: pre-wrap;">${message}</div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="font-size: 12px; color: #999; text-align: center;">Sistema de Mensagens - Portfólio Leo Carvalho</p>
        </div>
      </div>
    `;

    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: 'Portfólio <onboarding@resend.dev>', // Ou use um domínio verificado se tiver (ex: contato@seusite.com)
      to: ['dev.leocarvalho@gmail.com'],
      subject: `[Portfólio] Novo Contato de: ${name}`,
      html: notificationHtml
    });

    if (notificationError) {
      console.error("Erro ao notificar dono:", notificationError);
      return res.status(400).json({ error: notificationError.message });
    }

    // 2. Email de RESPOSTA AUTOMÁTICA para o cliente
    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f5; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
          <h2 style="color: #6366f1;">Olá, ${name}!</h2>
          <p style="font-size: 16px; line-height: 1.5; color: #555;">Muito obrigado por entrar em contato através do meu portfólio. Recebi sua mensagem com sucesso e já estou avaliando.</p>
          <p style="font-size: 16px; line-height: 1.5; color: #555;">Em breve retornarei o seu contato para conversarmos melhor sobre o seu projeto ou ideia.</p>
          <br/>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="font-size: 14px; color: #666; text-align: left;">Atenciosamente,<br/><strong>Leonardo de Carvalho</strong><br/>Desenvolvedor Full Stack & Analista de Sistemas<br/>dev.leocarvalho@gmail.com</p>
        </div>
      </div>
    `;

    // Tenta enviar a resposta automática. 
    // NOTA: Se você estiver usando o plano gratuito do Resend e NÃO tiver um domínio verificado,
    // o Resend só permite enviar emails para o seu próprio email (dev.leocarvalho@gmail.com).
    // Por isso, colocamos em um bloco try-catch separado, para não quebrar o endpoint caso falhe.
    try {
      await resend.emails.send({
        from: 'Leo Carvalho <onboarding@resend.dev>', // Substitua por 'contato@seudominio.com' quando verificar um domínio na Resend
        to: [email],
        subject: 'Recebi sua mensagem! - Leo Carvalho',
        html: autoReplyHtml
      });
    } catch (autoReplyErr) {
      console.error("Não foi possível enviar a resposta automática:", autoReplyErr);
      // Ignora o erro para não falhar o envio principal
    }

    return res.status(200).json({ success: true, message: 'Emails enviados com sucesso.' });
  } catch (error) {
    console.error("Erro interno:", error);
    return res.status(500).json({ error: 'Ocorreu um erro interno no servidor.' });
  }
};
