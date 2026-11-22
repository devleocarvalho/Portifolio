// Laboratórios e Demonstrações Interativas e Lúdicas dos 11 Projetos de Cibersegurança

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

export function getCyberInteractiveLabHtml(cyberId, lang = 'pt-br') {
  const isEn = lang === 'en';
  const isEs = lang === 'es';

  switch (cyberId) {
    case 'cyber-cai2b': // StegoMed Audit — LSB Steganography & ECB Leak
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Interactive Steganography Lab:</strong> Hide a medical confidential record in the Least Significant Bit (LSB) of image pixels, then extract it using forensic steganalysis or simulate an ECB encryption leak.'
              : isEs
              ? '<strong>Laboratorio Interactivo de Esteganografía:</strong> Oculte un expediente médico confidencial en el Bit Menos Significativo (LSB) de los píxeles y extráigalo mediante esteganálisis forense o simule una fuga ECB.'
              : '<strong>Laboratório Interativo de Esteganografia:</strong> Oculte um prontuário médico confidencial no Bit Menos Significante (LSB) dos pixels da imagem, e depois extraia-o via esteganálise forense ou simule um vazamento ECB.'}
          </p>
          <div class="cyber-lab-controls">
            <label class="cyber-lab-label">
              ${isEn ? 'Confidential Payload:' : isEs ? 'Mensaje Confidencial:' : 'Mensagem Confidencial:'}
            </label>
            <input type="text" id="lab-stego-input" class="cyber-lab-input" value="PRONTUARIO_SIGILOSO_PACIENTE_4029" maxlength="36" />
            <div class="cyber-lab-btn-group">
              <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-stego-inject">
                <i class="fas fa-file-shield"></i> ${isEn ? 'Inject into LSB' : isEs ? 'Inyectar en LSB' : 'Injetar no LSB'}
              </button>
              <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-stego-extract">
                <i class="fas fa-magnifying-glass-chart"></i> ${isEn ? 'Extract via zsteg' : isEs ? 'Extraer con zsteg' : 'Esteganálise zsteg'}
              </button>
              <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-stego-ecb">
                <i class="fas fa-radiation"></i> ${isEn ? 'Simulate ECB Leak' : isEs ? 'Simular Fuga ECB' : 'Simular Vazamento ECB'}
              </button>
            </div>
          </div>
          <div class="cyber-lab-screen" id="lab-stego-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'StegoMed Lab initialized. Click a button above to run simulation.' : isEs ? 'Laboratorio StegoMed iniciado. Haga clic en un botón para simular.' : 'Laboratório StegoMed iniciado. Clique em um dos botões acima para simular.'}
          </div>
        </div>
      `;

    case 'cyber-pai4': // Insegus Pipeline — DevSecOps
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Shift-Left DevSecOps Pipeline Simulator:</strong> Trigger the automated CI/CD security gate combining SAST, container SCA, and DAST triage.'
              : isEs
              ? '<strong>Simulador de Pipeline DevSecOps Shift-Left:</strong> Dispare el Quality Gate automatizado integrando SAST, SCA de contenedores y DAST.'
              : '<strong>Simulador da Esteira DevSecOps Shift-Left:</strong> Dispare a esteira automatizada CI/CD integrando SAST, SCA de contêineres e DAST.'}
          </p>
          <div class="cyber-lab-btn-group">
            <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-run-pipeline">
              <i class="fas fa-play"></i> ${isEn ? 'Trigger CI/CD Pipeline' : isEs ? 'Ejecutar Pipeline CI/CD' : 'Disparar Pipeline CI/CD'}
            </button>
          </div>
          <div class="cyber-lab-screen" id="lab-pipeline-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Pipeline idle. Click above to trigger Shift-Left workflow.' : isEs ? 'Pipeline inactivo. Haga clic arriba para ejecutar el flujo.' : 'Pipeline ocioso. Clique acima para rodar a esteira Shift-Left.'}
          </div>
        </div>
      `;

    case 'cyber-pai2': // BYODSEC — Zero Trust TLS 1.3 com mTLS
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Zero Trust Handshake Simulator:</strong> Test bidirectional mTLS with institutional Root CA certificates vs unauthorized rogue attempts.'
              : isEs
              ? '<strong>Simulador Handshake Zero Trust:</strong> Pruebe autenticación mTLS con CA Raíz vs intentos sin certificado autorizado.'
              : '<strong>Simulador de Handshake Zero Trust:</strong> Teste autenticação mTLS bidirecional com CA Raiz própria vs tentativas sem certificado.'}
          </p>
          <div class="cyber-lab-btn-group">
            <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-tls-valid">
              <i class="fas fa-shield-halved"></i> ${isEn ? 'Connect with mTLS Certificate' : isEs ? 'Conectar con mTLS Válido' : 'Conectar com mTLS Válido'}
            </button>
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-tls-invalid">
              <i class="fas fa-user-xmark"></i> ${isEn ? 'Simulate Rogue Attempt' : isEs ? 'Simular Intento no Autorizado' : 'Simular Tentativa Não Autorizada'}
            </button>
          </div>
          <div class="cyber-lab-screen" id="lab-tls-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Ready to initiate TLS 1.3 handshake.' : isEs ? 'Listo para iniciar el protocolo TLS 1.3.' : 'Pronto para iniciar o handshake TLS 1.3.'}
          </div>
        </div>
      `;

    case 'cyber-pai1': // IntegriDos — HMAC & Anti-Replay
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Banking Transaction Integrity Simulator:</strong> Test cryptographic HMAC-SHA256 signature, Nonce state verification, and replay attack defense.'
              : isEs
              ? '<strong>Simulador de Integridad Bancaria:</strong> Pruebe firma HMAC-SHA256, verificación de Nonces y defensa anti-repetición (Replay).'
              : '<strong>Simulador de Integridade Bancária:</strong> Teste assinatura HMAC-SHA256, verificação de Nonces únicos e defesa contra Replay Attacks.'}
          </p>
          <div class="cyber-lab-controls">
            <label class="cyber-lab-label">
              ${isEn ? 'Transfer Payload:' : isEs ? 'Datos de Transferencia:' : 'Dados da Transferência:'}
            </label>
            <input type="text" id="lab-hmac-amount" class="cyber-lab-input" value="R$ 1.500,00 -> Conta 4829-1" />
            <div class="cyber-lab-btn-group">
              <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-hmac-send">
                <i class="fas fa-signature"></i> ${isEn ? 'Sign & Send Transfer' : isEs ? 'Firmar y Enviar' : 'Assinar & Enviar'}
              </button>
              <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-hmac-replay">
                <i class="fas fa-repeat"></i> ${isEn ? 'Simulate Replay Attack' : isEs ? 'Simular Ataque Replay' : 'Simular Replay Attack'}
              </button>
              <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-hmac-tamper">
                <i class="fas fa-pen-to-square"></i> ${isEn ? 'Simulate MITM Tampering' : isEs ? 'Simular Adulteración MITM' : 'Simular Adulteração MITM'}
              </button>
            </div>
          </div>
          <div class="cyber-lab-screen" id="lab-hmac-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Financial gateway online. Ready to sign transactions.' : isEs ? 'Pasarela financiera en línea. Lista para firmar.' : 'Gateway financeiro online. Pronto para assinar transações.'}
          </div>
        </div>
      `;

    case 'cyber-pai3': // VULNAWEB — Linux Hardening & DAST
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Server Hardening & DAST Audit Simulator:</strong> Compare vulnerable raw SQL queries against hardened PDO prepared statements and Lynis metrics.'
              : isEs
              ? '<strong>Simulador de Bastionado y DAST:</strong> Compare consultas vulnerables frente a sentencias preparadas PDO y métricas Lynis.'
              : '<strong>Simulador de Bastionamento & DAST:</strong> Compare consultas vulneráveis frente a Prepared Statements PDO e métricas do Lynis.'}
          </p>
          <div class="cyber-lab-btn-group">
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-vuln-test">
              <i class="fas fa-bug"></i> ${isEn ? 'Test Vulnerable Server (Lynis 58)' : isEs ? 'Servidor Vulnerable (Lynis 58)' : 'Testar Servidor Vulnerável (Lynis 58)'}
            </button>
            <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-hard-test">
              <i class="fas fa-shield-cat"></i> ${isEn ? 'Test Hardened Server (Lynis 74)' : isEs ? 'Servidor Bastionado (Lynis 74)' : 'Testar Servidor Bastionado (Lynis 74)'}
            </button>
          </div>
          <div class="cyber-lab-screen" id="lab-hardening-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Select server profile to audit.' : isEs ? 'Seleccione el perfil de servidor para auditar.' : 'Selecione o perfil de servidor para auditar.'}
          </div>
        </div>
      `;

    case 'cyber-cai3': // MedAuth ZeroTrust — OAuth 2.0 PKCE & 2FA
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Zero Trust IAM & OAuth 2.0 Simulator:</strong> Generate PKCE cryptographic challenges, TOTP 2FA codes, and signed RS256 JWT tokens.'
              : isEs
              ? '<strong>Simulador IAM y OAuth 2.0:</strong> Genere desafíos criptográficos PKCE, códigos 2FA TOTP y tokens JWT RS256.'
              : '<strong>Simulador de IAM & OAuth 2.0 Zero Trust:</strong> Gere desafios criptográficos PKCE, códigos 2FA TOTP e tokens JWT RS256 assinados.'}
          </p>
          <div class="cyber-lab-btn-group">
            <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-oauth-pkce">
              <i class="fas fa-key"></i> ${isEn ? 'Generate PKCE Challenge' : isEs ? 'Generar PKCE' : 'Gerar PKCE Challenge'}
            </button>
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-oauth-totp">
              <i class="fas fa-mobile-screen"></i> ${isEn ? 'Generate 2FA TOTP' : isEs ? 'Generar 2FA TOTP' : 'Gerar Código 2FA'}
            </button>
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-oauth-jwt">
              <i class="fas fa-stamp"></i> ${isEn ? 'Verify RS256 / JWKS' : isEs ? 'Verificar RS256 / JWKS' : 'Emitir & Validar JWT'}
            </button>
          </div>
          <div class="cyber-lab-screen" id="lab-oauth-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'OAuth 2.0 + PKCE identity provider ready.' : isEs ? 'Proveedor de identidad OAuth 2.0 listo.' : 'Provedor de identidade OAuth 2.0 pronto.'}
          </div>
        </div>
      `;

    case 'cyber-cai1b': // MedCrypt Forensics — Cipher Benchmark
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Medical Cipher Benchmark:</strong> Compare AES-256-ECB (visual leak), AES-256-CBC, and ChaCha20-Poly1305 encryption performance.'
              : isEs
              ? '<strong>Comparativa de Cifrado Médico:</strong> Compare AES-256-ECB (fuga visual), AES-256-CBC y ChaCha20-Poly1305.'
              : '<strong>Benchmarking de Cifras Médicas:</strong> Compare AES-256-ECB (vazamento visual), AES-256-CBC e ChaCha20-Poly1305.'}
          </p>
          <div class="cyber-lab-btn-group">
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-bench-ecb">AES-256-ECB</button>
            <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-bench-cbc">AES-256-CBC</button>
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-bench-chacha">ChaCha20</button>
          </div>
          <div class="cyber-lab-screen" id="lab-cipher-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Select cipher to benchmark throughput and diffusion.' : isEs ? 'Seleccione cifrado para comparar rendimiento y difusión.' : 'Selecione a cifra para comparar taxa de difusão e segurança.'}
          </div>
        </div>
      `;

    case 'cyber-cai1a': // SaltBreaker — Hashcat & Salt
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Cryptanalysis & Hashcat Simulator:</strong> Test dictionary attack speed against unsalted SHA-256 vs salted PBKDF2 (600k iterations).'
              : isEs
              ? '<strong>Simulador de Criptoanálisis:</strong> Pruebe la velocidad de ataque frente a hashes simples vs PBKDF2 con sal (600k iteraciones).'
              : '<strong>Simulador de Criptoanálise & Hashcat:</strong> Teste a velocidade de ataque contra hashes simples sem sal vs PBKDF2 salgado (600k iterações).'}
          </p>
          <div class="cyber-lab-controls">
            <label class="cyber-lab-label">${isEn ? 'Password to test:' : isEs ? 'Contraseña de prueba:' : 'Senha para teste:'}</label>
            <input type="text" id="lab-hash-input" class="cyber-lab-input" value="banco@2024" />
            <div class="cyber-lab-btn-group">
              <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-hash-unsalted">
                <i class="fas fa-unlock"></i> ${isEn ? 'Crack Unsalted Hash' : isEs ? 'Crackear Hash sin Sal' : 'Quebrar Hash sem Sal'}
              </button>
              <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-hash-salted">
                <i class="fas fa-lock"></i> ${isEn ? 'Test Salted PBKDF2 (600k)' : isEs ? 'Probar PBKDF2 con Sal' : 'Testar Salt + PBKDF2 (600k)'}
              </button>
            </div>
          </div>
          <div class="cyber-lab-screen" id="lab-hash-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Hashcat audit engine ready.' : isEs ? 'Motor de auditoría Hashcat listo.' : 'Motor de auditoria Hashcat pronto.'}
          </div>
        </div>
      `;

    case 'cyber-cai0a': // SentinelPass — Password Policy & CVSS
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Entropy & CVSS Risk Auditor:</strong> Analyze password strength, Shannon entropy bits, and calculate CVSS v3.1 impact score.'
              : isEs
              ? '<strong>Auditor de Entropía y CVSS:</strong> Analice la robustez de contraseñas, entropía de Shannon y puntuación CVSS v3.1.'
              : '<strong>Auditor de Entropia & Risco CVSS:</strong> Analise a robustez da credencial, bits de entropia Shannon e pontuação CVSS v3.1.'}
          </p>
          <div class="cyber-lab-controls">
            <label class="cyber-lab-label">${isEn ? 'Analyze Password:' : isEs ? 'Analizar Contraseña:' : 'Analisar Senha:'}</label>
            <input type="text" id="lab-entropy-input" class="cyber-lab-input" value="S3nt1n3l#2026!" />
            <div class="cyber-lab-btn-group">
              <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-eval-entropy">
                <i class="fas fa-calculator"></i> ${isEn ? 'Audit Entropy & CVSS' : isEs ? 'Auditar Entropía y CVSS' : 'Auditar Entropia & CVSS'}
              </button>
            </div>
          </div>
          <div class="cyber-lab-screen" id="lab-entropy-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Type password and click Audit.' : isEs ? 'Escriba una contraseña y haga clic en Auditar.' : 'Digite uma senha e clique em Auditar.'}
          </div>
        </div>
      `;

    case 'cyber-cai0b': // MerkleGuard — Merkle Trees O(log N)
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Merkle Tree Integrity Visualizer:</strong> Modify any data block and watch the root cryptographic hash recalculate in O(log N).'
              : isEs
              ? '<strong>Visualizador de Árbol de Merkle:</strong> Modifique cualquier bloque y observe el recálculo del hash raíz en O(log N).'
              : '<strong>Visualizador de Árvore de Merkle:</strong> Altere qualquer bloco de dados e veja o hash raiz recalcular em tempo real em O(log N).'}
          </p>
          <div class="cyber-lab-controls">
            <div class="cyber-merkle-inputs">
              <input type="text" id="lab-merkle-t1" class="cyber-lab-input" value="Bloco A: $ 50" />
              <input type="text" id="lab-merkle-t2" class="cyber-lab-input" value="Bloco B: $ 120" />
            </div>
            <div class="cyber-lab-btn-group">
              <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-merkle-recalc">
                <i class="fas fa-network-wired"></i> ${isEn ? 'Recalculate Merkle Root' : isEs ? 'Recalcular Raíz Merkle' : 'Recalcular Root Hash'}
              </button>
            </div>
          </div>
          <div class="cyber-lab-screen" id="lab-merkle-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'Merkle tree engine online.' : isEs ? 'Árbol criptográfico listo.' : 'Árvore criptográfica pronta.'}
          </div>
        </div>
      `;

    case 'cyber-cai2a': // PGP-TrustChannel — Hybrid Cryptography
      return `
        <div class="cyber-lab-box">
          <p class="cyber-lab-desc">
            ${isEn
              ? '<strong>Hybrid Cryptography & OpenPGP Simulator:</strong> Encrypt data with session keys (AES-256), wrap via RSA-4096, and verify digital signatures.'
              : isEs
              ? '<strong>Simulador OpenPGP Híbrido:</strong> Cifre datos con clave AES-256, envuélvala con RSA-4096 y verifique firmas digitales.'
              : '<strong>Simulador de Criptografia Híbrida OpenPGP:</strong> Cifre dados com chave de sessão AES-256, envolva com RSA-4096 e valide assinaturas digitais.'}
          </p>
          <div class="cyber-lab-btn-group">
            <button type="button" class="btn btn-primary cyber-lab-btn" id="btn-pgp-encrypt">
              <i class="fas fa-lock"></i> ${isEn ? 'Hybrid Encrypt (AES + RSA)' : isEs ? 'Cifrado Híbrido' : 'Cifrar Mensagem Híbrida'}
            </button>
            <button type="button" class="btn btn-outline cyber-lab-btn" id="btn-pgp-verify">
              <i class="fas fa-certificate"></i> ${isEn ? 'Verify PGP Signature' : isEs ? 'Verificar Firma PGP' : 'Verificar Assinatura GPG'}
            </button>
          </div>
          <div class="cyber-lab-screen" id="lab-pgp-screen">
            <span class="cyber-lab-cursor">&gt; </span>${isEn ? 'GnuPG 2.4 engine ready.' : isEs ? 'Motor GnuPG listo.' : 'Motor GnuPG pronto.'}
          </div>
        </div>
      `;

    default:
      return `<p class="cyber-lab-desc">Simulador interativo ativo para o projeto.</p>`;
  }
}

export function attachCyberLabEvents(cyberId, lang = 'pt-br') {
  const isEn = lang === 'en';
  const isEs = lang === 'es';

  // 1. StegoMed Lab
  if (cyberId === 'cyber-cai2b') {
    const input = document.getElementById('lab-stego-input');
    const screen = document.getElementById('lab-stego-screen');
    const btnInject = document.getElementById('btn-stego-inject');
    const btnExtract = document.getElementById('btn-stego-extract');
    const btnEcb = document.getElementById('btn-stego-ecb');

    if (btnInject && screen && input) {
      btnInject.addEventListener('click', () => {
        const text = input.value.trim() || 'CONFIDENCIAL_2026';
        const bin = text.split('').map(c => c.charCodeAt(0).toString(2).padStart(8, '0')).slice(0, 4).join(' ');
        screen.innerHTML = `
          <span class="cyber-log-success">[OK] Payload Binário:</span> ${bin}...<br>
          <span class="cyber-log-info">[LSB Injetado]:</span> Bytes do canal R,G,B modificados nos bits 0/1.<br>
          <span class="cyber-log-info">[Análise Visual]:</span> Delta-E: <strong>0.07</strong> (Limiar humano: 2.30) &rarr; <span class="cyber-badge-tag">100% Indetectável a Olho Nu</span>.<br>
          <span class="cyber-log-warn">[Aviso]:</span> Padrão oculto na imagem sem degradação perceptível.
        `;
      });
    }

    if (btnExtract && screen && input) {
      btnExtract.addEventListener('click', () => {
        const text = input.value.trim() || 'CONFIDENCIAL_2026';
        screen.innerHTML = `
          <span class="cyber-log-info">[zsteg 0.2.1-audit]:</span> Varrendo canais de bits (b1,bgr,lsb,xy)...<br>
          <span class="cyber-log-success">[EXTRAÇÃO BEM-SUCEDIDA]:</span> &quot;<strong>${escapeHtml(text)}</strong>&quot;<br>
          <span class="cyber-log-info">[Checksum]:</span> SHA-256 verificado com integridade 100%.<br>
          <span class="cyber-log-warn">[Conclusão Forense]:</span> A esteganografia LSB pura sem cifra prévia é vulnerável a esteganálise estatística!
        `;
      });
    }

    if (btnEcb && screen) {
      btnEcb.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-warn">[SIMULAÇÃO VAZAMENTO ECB]:</span><br>
          Modo: <strong>AES-128-ECB</strong> (Electronic Codebook)<br>
          Bloco 1 [Bytes 00-15]: 0x41414141... &rarr; Cifra: 0x9a4f2b18...<br>
          Bloco 2 [Bytes 16-31]: 0x41414141... &rarr; Cifra: <strong>0x9a4f2b18... (IDÊNTICO!)</strong><br>
          <span class="cyber-log-danger">[FALHA GRAVE]:</span> Blocos repetidos geram a mesma cifra! Os contornos da radiografia permanecem visíveis sem a chave.
        `;
      });
    }
  }

  // 2. DevSecOps Pipeline
  if (cyberId === 'cyber-pai4') {
    const btn = document.getElementById('btn-run-pipeline');
    const screen = document.getElementById('lab-pipeline-screen');
    if (btn && screen) {
      btn.addEventListener('click', () => {
        screen.innerHTML = `<span class="cyber-log-info">&gt; Iniciando Workflow CI/CD Shift-Left...</span><br>`;
        setTimeout(() => {
          screen.innerHTML += `<span class="cyber-log-success">[1/4] SAST (Semgrep):</span> 12 arquivos varridos &rarr; 0 Hardcoded Secrets, 0 Injeções.<br>`;
        }, 300);
        setTimeout(() => {
          screen.innerHTML += `<span class="cyber-log-success">[2/4] SCA & Container (Trivy):</span> Docker layers auditadas &rarr; 0 CVEs Críticas.<br>`;
        }, 650);
        setTimeout(() => {
          screen.innerHTML += `<span class="cyber-log-success">[3/4] DAST (OWASP ZAP):</span> Fuzzing efêmero &rarr; Headers HTTP HSTS & CSP estritos.<br>`;
        }, 1000);
        setTimeout(() => {
          screen.innerHTML += `<span class="cyber-log-warn">[4/4] DefectDojo & Quality Gate:</span> 123 achados triados &rarr; <span class="cyber-badge-tag">STATUS: APROVADO (Grau A)</span>.`;
        }, 1350);
      });
    }
  }

  // 3. BYODSEC TLS 1.3
  if (cyberId === 'cyber-pai2') {
    const btnValid = document.getElementById('btn-tls-valid');
    const btnInvalid = document.getElementById('btn-tls-invalid');
    const screen = document.getElementById('lab-tls-screen');

    if (btnValid && screen) {
      btnValid.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">&gt; ClientHello:</span> Cifras suportadas: TLS_AES_256_GCM_SHA384 | Curva X25519.<br>
          <span class="cyber-log-info">&gt; ServerHello:</span> Selecionado TLS 1.3 estrito + PFS.<br>
          <span class="cyber-log-success">&gt; mTLS Handshake:</span> Certificado de Cliente X.509 v3 validado pela <strong>U-Secure Root CA</strong>.<br>
          <span class="cyber-log-success">[STATUS]:</span> <span class="cyber-badge-tag">TÚNEL VPN SEGURO ATIVO</span> (Zero Trust 100% OK).
        `;
      });
    }

    if (btnInvalid && screen) {
      btnInvalid.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">&gt; ClientHello:</span> Tentativa de conexão sem certificado institucional.<br>
          <span class="cyber-log-danger">&gt; mTLS Verification:</span> Certificado ausente ou não assinado pela CA confiável!<br>
          <span class="cyber-log-danger">[TLS ALERT 42]:</span> Bad Certificate &rarr; <strong>Conexão abortada imediatamente na camada de transporte.</strong>
        `;
      });
    }
  }

  // 4. IntegriDos HMAC
  if (cyberId === 'cyber-pai1') {
    const btnSend = document.getElementById('btn-hmac-send');
    const btnReplay = document.getElementById('btn-hmac-replay');
    const btnTamper = document.getElementById('btn-hmac-tamper');
    const screen = document.getElementById('lab-hmac-screen');
    const input = document.getElementById('lab-hmac-amount');

    let lastNonce = 'a8f49c02d1';

    if (btnSend && screen) {
      btnSend.addEventListener('click', () => {
        lastNonce = Math.random().toString(16).substring(2, 10);
        screen.innerHTML = `
          <span class="cyber-log-info">[Payload]:</span> "${escapeHtml(input?.value || 'Transferência')}"<br>
          <span class="cyber-log-info">[Nonce Gerado]:</span> ${lastNonce} | [Timestamp]: ${Date.now()}<br>
          <span class="cyber-log-success">[HMAC-SHA256]:</span> 8e4c7b2a991f421... (Assinatura válida)<br>
          <span class="cyber-log-success">[Servidor]:</span> 200 OK &rarr; Nonce registrado. Transação aceita!
        `;
      });
    }

    if (btnReplay && screen) {
      btnReplay.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-warn">[Ataque de Replay Detectado]:</span> Reenvio do pacote com Nonce <strong>${lastNonce}</strong>.<br>
          <span class="cyber-log-danger">[Servidor]:</span> 403 FORBIDDEN &rarr; <strong>Nonce duplicado! Pacote rejeitado.</strong>
        `;
      });
    }

    if (btnTamper && screen) {
      btnTamper.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-warn">[Adulteração MITM]:</span> Valor alterado para R$ 15.000,00 mantendo chave antiga.<br>
          <span class="cyber-log-danger">[Recálculo HMAC]:</span> HMAC Recebido &ne; HMAC Calculado.<br>
          <span class="cyber-log-danger">[Servidor]:</span> 400 BAD REQUEST &rarr; <strong>Violação de integridade detectada!</strong>
        `;
      });
    }
  }

  // 5. Hardening VULNAWEB
  if (cyberId === 'cyber-pai3') {
    const btnVuln = document.getElementById('btn-vuln-test');
    const btnHard = document.getElementById('btn-hard-test');
    const screen = document.getElementById('lab-hardening-screen');

    if (btnVuln && screen) {
      btnVuln.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-warn">[Teste SQLi]:</span> SELECT * FROM users WHERE user = 'admin' AND pass = '' OR '1'='1'<br>
          <span class="cyber-log-danger">[VULNERÁVEL]:</span> Query concatenada sem sanitização &rarr; <strong>Login Bypass Concedido!</strong><br>
          <span class="cyber-log-danger">[Índice Lynis]:</span> 58/100 (SSH root permitido, sysctl sem proteção).
        `;
      });
    }

    if (btnHard && screen) {
      btnHard.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">[Teste SQLi]:</span> Consulta com PDO Prepared Statement e Bound Parameters.<br>
          <span class="cyber-log-success">[PROTEGIDO]:</span> O payload foi tratado estritamente como string literal &rarr; Injeção neutralizada!<br>
          <span class="cyber-log-success">[Índice Lynis]:</span> <strong>74/100 (Meta ENS superada, 0 Warnings)</strong>.
        `;
      });
    }
  }

  // 6. MedAuth ZeroTrust OAuth
  if (cyberId === 'cyber-cai3') {
    const btnPkce = document.getElementById('btn-oauth-pkce');
    const btnTotp = document.getElementById('btn-oauth-totp');
    const btnJwt = document.getElementById('btn-oauth-jwt');
    const screen = document.getElementById('lab-oauth-screen');

    if (btnPkce && screen) {
      btnPkce.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">[Code Verifier (High-Entropy)]:</span> dBjftJeZ4CVP-mB92K...<br>
          <span class="cyber-log-success">[Code Challenge (SHA-256)]:</span> E9Melhoa2OwvFrEMTJguCHaoeK...<br>
          <span class="cyber-log-success">[RFC 7636]:</span> Interceptação MITM de authorization code neutralizada sem client secret.
        `;
      });
    }

    if (btnTotp && screen) {
      btnTotp.addEventListener('click', () => {
        const code = Math.floor(100000 + Math.random() * 900000);
        screen.innerHTML = `
          <span class="cyber-log-info">[Algoritmo HMAC-SHA1]:</span> Janela de 30s baseada no Unix epoch.<br>
          <span class="cyber-log-success">[Código 2FA TOTP Gerado]:</span> <span class="cyber-badge-tag">${code}</span><br>
          <span class="cyber-log-info">[Autenticação em Dois Fatores]:</span> Token válido por 28 segundos.
        `;
      });
    }

    if (btnJwt && screen) {
      btnJwt.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">[Header]:</span> {"alg": "RS256", "typ": "JWT", "kid": "medauth-2026-key"}<br>
          <span class="cyber-log-info">[Payload]:</span> {"sub": "hospital-dr-492", "role": "Oncologia", "scope": "read:prontuarios"}<br>
          <span class="cyber-log-success">[Assinatura Assimétrica]:</span> Validada com chave pública RSA-2048 via endpoint JWKS.
        `;
      });
    }
  }

  // 7. MedCrypt Ciphers
  if (cyberId === 'cyber-cai1b') {
    const btnEcb = document.getElementById('btn-bench-ecb');
    const btnCbc = document.getElementById('btn-bench-cbc');
    const btnChacha = document.getElementById('btn-bench-chacha');
    const screen = document.getElementById('lab-cipher-screen');

    if (btnEcb && screen) {
      btnEcb.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-danger">[AES-256-ECB]:</span> Taxa: 1.450 MB/s | <span class="cyber-log-danger">Vazamento Visual: ALTO</span>.<br>
          Causa: Não utiliza IV. Padrões de radiografias BMP permanecem reconhecíveis. Proibido em conformidade médica!
        `;
      });
    }

    if (btnCbc && screen) {
      btnCbc.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-success">[AES-256-CBC]:</span> Taxa: 980 MB/s | <span class="cyber-log-success">Vazamento Visual: ZERO</span>.<br>
          Causa: Vetor de inicialização (IV) aleatório por arquivo garante difusão estocástica perfeita.
        `;
      });
    }

    if (btnChacha && screen) {
      btnChacha.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-success">[ChaCha20-Poly1305]:</span> Taxa: 1.820 MB/s | <span class="cyber-log-success">Segurança: MÁXIMA</span>.<br>
          Cifra de fluxo com autenticação AEAD. Altíssima performance mesmo em dispositivos sem aceleração de hardware AES-NI.
        `;
      });
    }
  }

  // 8. SaltBreaker Hashcat
  if (cyberId === 'cyber-cai1a') {
    const btnUnsalted = document.getElementById('btn-hash-unsalted');
    const btnSalted = document.getElementById('btn-hash-salted');
    const screen = document.getElementById('lab-hash-screen');
    const input = document.getElementById('lab-hash-input');

    if (btnUnsalted && screen) {
      btnUnsalted.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-warn">[Hashcat -m 1400 (SHA-256 Unsalted)]:</span><br>
          Hash auditado: 5e884898da28047...<br>
          <span class="cyber-log-danger">[CRACKEADO]:</span> Senha: "<strong>${escapeHtml(input?.value || 'admin')}</strong>"<br>
          Tempo decorrido: <strong>0.003 segundos</strong> (Lookup em Rainbow Table / Wordlist).
        `;
      });
    }

    if (btnSalted && screen) {
      btnSalted.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">[PBKDF2-HMAC-SHA256 (600.000 iterações)]:</span><br>
          Sal criptográfico único (16 bytes): 0x4f9b2c...<br>
          Velocidade de ataque: reduzida de 15 GH/s para 25 kH/s por GPU.<br>
          <span class="cyber-log-success">[TEMPO ESTIMADO DE QUEBRA]:</span> <strong>~140 anos em cluster RTX 4090</strong> (Inviolável na prática).
        `;
      });
    }
  }

  // 9. SentinelPass Entropy
  if (cyberId === 'cyber-cai0a') {
    const btn = document.getElementById('btn-eval-entropy');
    const input = document.getElementById('lab-entropy-input');
    const screen = document.getElementById('lab-entropy-screen');

    if (btn && screen && input) {
      btn.addEventListener('click', () => {
        const val = input.value || '';
        let pool = 0;
        if (/[a-z]/.test(val)) pool += 26;
        if (/[A-Z]/.test(val)) pool += 26;
        if (/[0-9]/.test(val)) pool += 10;
        if (/[^a-zA-Z0-9]/.test(val)) pool += 33;
        const entropy = pool > 0 ? (val.length * Math.log2(pool)).toFixed(1) : 0;
        const cvss = entropy > 70 ? '0.0 (Segura)' : entropy > 50 ? '3.5 (Baixo)' : '8.8 (Crítico)';

        screen.innerHTML = `
          <span class="cyber-log-info">[Tamanho]:</span> ${val.length} caracteres | [Pool de Símbolos]: ${pool}<br>
          <span class="cyber-log-success">[Entropia de Shannon]:</span> <strong>${entropy} bits</strong><br>
          <span class="cyber-log-info">[Score CVSS v3.1]:</span> <strong>${cvss}</strong><br>
          <span class="cyber-badge-tag">${entropy > 60 ? 'Em conformidade com política bancária' : 'Violação de política mínima'}</span>
        `;
      });
    }
  }

  // 10. MerkleGuard
  if (cyberId === 'cyber-cai0b') {
    const btn = document.getElementById('btn-merkle-recalc');
    const t1 = document.getElementById('lab-merkle-t1');
    const t2 = document.getElementById('lab-merkle-t2');
    const screen = document.getElementById('lab-merkle-screen');

    if (btn && screen) {
      btn.addEventListener('click', () => {
        const hash1 = Math.random().toString(16).substring(2, 8);
        const hash2 = Math.random().toString(16).substring(2, 8);
        const root = Math.random().toString(16).substring(2, 14);

        screen.innerHTML = `
          <span class="cyber-log-info">[Folha L1]:</span> "${escapeHtml(t1?.value || '')}" &rarr; Hash: 0x${hash1}<br>
          <span class="cyber-log-info">[Folha L2]:</span> "${escapeHtml(t2?.value || '')}" &rarr; Hash: 0x${hash2}<br>
          <span class="cyber-log-info">[Nó Intermediário H12]:</span> SHA256(H1 + H2)<br>
          <span class="cyber-log-success">[NOVA ROOT HASH]:</span> <span class="cyber-badge-tag">0x${root}</span><br>
          <span class="cyber-log-success">[Integridade O(log N)]:</span> Qualquer mutação de 1 bit invalida a raiz instantaneamente!
        `;
      });
    }
  }

  // 11. PGP Hybrid
  if (cyberId === 'cyber-cai2a') {
    const btnEnc = document.getElementById('btn-pgp-encrypt');
    const btnVer = document.getElementById('btn-pgp-verify');
    const screen = document.getElementById('lab-pgp-screen');

    if (btnEnc && screen) {
      btnEnc.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">[1] Chave de Sessão Efêmera:</span> Gerada chave simétrica AES-256 descartável.<br>
          <span class="cyber-log-info">[2] Cifragem do Payload:</span> Mensagem cifrada com AES-256.<br>
          <span class="cyber-log-success">[3] Envelopamento Assimétrico:</span> Chave de sessão cifrada com a chave pública RSA-4096 do destinatário.<br>
          <span class="cyber-log-success">[Resultado]:</span> Bloco PGP MESSAGE gerado com sigilo perfeito.
        `;
      });
    }

    if (btnVer && screen) {
      btnVer.addEventListener('click', () => {
        screen.innerHTML = `
          <span class="cyber-log-info">&gt; gpg --verify message.asc...</span><br>
          <span class="cyber-log-success">[ASSINATURA BOA]:</span> Assinado digitalmente por "Leonardo Carvalho &lt;dev.leocarvalho@gmail.com&gt;"<br>
          <span class="cyber-log-success">[Chave RSA ID]:</span> 0x82A4B92C (Válida)<br>
          <span class="cyber-log-info">[Garantias]:</span> Autenticidade, Integridade e Não-Repúdio 100% comprovados!
        `;
      });
    }
  }
}
