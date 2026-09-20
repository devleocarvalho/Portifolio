import { createServer } from 'vite';
import assert from 'node:assert/strict';

async function runTest() {
  const server = await createServer({
    configFile: './vite.config.js',
    server: { port: 5199 }
  });
  await server.listen();

  const baseUrl = 'http://localhost:5199';
  console.log('\n🛡️ [PROVA TÉCNICA] Testando servidor com middleware defensivo ativo...');

  try {
    // 1. Testar bloqueio de /.env
    const resEnv = await fetch(`${baseUrl}/.env`);
    assert.equal(resEnv.status, 404, 'Falha: /.env deve retornar 404');
    assert.notEqual(resEnv.status, 403, 'Falha: /.env NUNCA deve responder 403');
    assert.equal(resEnv.headers.get('x-content-type-options'), 'nosniff', 'Falha: cabeçalho nosniff ausente');
    console.log('  ✔️ [PASS] /.env -> 404 Not Found com nosniff (Zero Trust: sem confirmação 403)');

    // 2. Testar bloqueio de /credentials.json
    const resCred = await fetch(`${baseUrl}/credentials.json`);
    assert.equal(resCred.status, 404, 'Falha: /credentials.json deve retornar 404');
    console.log('  ✔️ [PASS] /credentials.json -> 404 Not Found');

    // 3. Testar bloqueio de /serviceAccount.json
    const resSA = await fetch(`${baseUrl}/serviceAccount.json`);
    assert.equal(resSA.status, 404, 'Falha: /serviceAccount.json deve retornar 404');
    console.log('  ✔️ [PASS] /serviceAccount.json -> 404 Not Found');

    // 4. Testar bloqueio de /id_rsa.pem
    const resKey = await fetch(`${baseUrl}/id_rsa.pem`);
    assert.equal(resKey.status, 404, 'Falha: /id_rsa.pem deve retornar 404');
    console.log('  ✔️ [PASS] /id_rsa.pem -> 404 Not Found');

    // 5. Testar que rota pública legítima permanece 100% funcional (Não quebra o produto)
    const resIndex = await fetch(`${baseUrl}/index.html`);
    assert.equal(resIndex.status, 200, 'Falha: /index.html deve retornar 200');
    assert.equal(resIndex.headers.get('x-content-type-options'), 'nosniff', 'Falha: nosniff ausente em asset público');
    console.log('  ✔️ [PASS] /index.html -> 200 OK com nosniff ativo (Aplicação Pública Preservada)');

    console.log('\n✅ [SUCESSO] Todos os testes de validação defensiva passaram sem falhas!\n');
  } finally {
    await server.close();
  }
}

runTest().catch((err) => {
  console.error('❌ Erro no teste:', err);
  process.exit(1);
});
