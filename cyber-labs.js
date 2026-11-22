// ============================================================================
// Laboratórios, Demonstrações & Fluxogramas Explicativos Animados
// Portfólio de Cibersegurança, Criptografia & DevSecOps (11 Projetos)
// ============================================================================

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ----------------------------------------------------------------------------
// Banco de Dados Estruturado dos Fluxogramas dos 11 Projetos
// ----------------------------------------------------------------------------
export const cyberFlowchartData = {
  // 1. Insegus Pipeline — DevSecOps & Software Supply Chain Security
  'cyber-pai4': {
    id: 'cyber-pai4',
    code: 'DEVSECOPS-01',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Fluxo CI/CD Aprovado', en: 'Approved CI/CD Flow', es: 'Flujo CI/CD Aprobado' },
        banner: {
          'pt-br': 'Cenário Seguro: Código limpo, sem segredos expostos, dependências auditadas e Quality Gate aprovando deploy.',
          en: 'Safe Scenario: Clean code, zero exposed secrets, audited dependencies, and Quality Gate approving deployment.',
          es: 'Escenario Seguro: Código limpio, sin secretos expuestos, dependencias auditadas y Quality Gate aprobando despliegue.'
        },
        badge: { 'pt-br': 'Deploy Aprovado para Produção', en: 'Deploy Approved for Production', es: 'Despliegue Aprobado para Producción' }
      },
      threat: {
        label: { 'pt-br': 'Simulação de Bloqueio (Falha / CVE)', en: 'Block Simulation (Critical CVE)', es: 'Simulación de Bloqueo (Fallo / CVE)' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Pull Request com API Key hardcoded e imagem Docker vulnerável interceptado pelo Quality Gate.',
          en: 'Threat Scenario: Pull Request with hardcoded API key and vulnerable Docker image intercepted by the Quality Gate.',
          es: 'Escenario Ofensivo: Pull Request con API Key hardcoded e imagen Docker vulnerable interceptado por el Quality Gate.'
        },
        badge: { 'pt-br': 'Quality Gate Abortou o Deploy', en: 'Quality Gate Aborted Deployment', es: 'Quality Gate Abortó el Despliegue' }
      }
    },
    nodes: [
      {
        id: 'commit',
        icon: 'fab fa-git-alt',
        title: { 'pt-br': 'Git Commit / PR', en: 'Git Commit / PR', es: 'Git Commit / PR' },
        tech: 'GitHub Actions / Git',
        what: {
          'pt-br': 'Desenvolvedor abre Pull Request ou submete commit na branch principal, acionando o webhook da esteira CI/CD.',
          en: 'Developer opens a Pull Request or pushes commit to main branch, triggering CI/CD webhook.',
          es: 'Desarrollador abre Pull Request o envía commit a la rama principal, activando el webhook de CI/CD.'
        },
        mechanism: {
          'pt-br': 'Execução efêmera em runner isolado (Kali/Ubuntu) com verificação de integridade e assinatura de commits GPG.',
          en: 'Ephemeral execution in isolated runner (Kali/Ubuntu) with integrity checks and GPG commit signatures.',
          es: 'Ejecución efímera en runner aislado (Kali/Ubuntu) con verificación de integridad y firmas GPG.'
        },
        safeResult: {
          'pt-br': 'Trigger aceito • Commit assinado e branch protegida validada',
          en: 'Trigger accepted • Signed commit and protected branch validated',
          es: 'Disparador aceptado • Commit firmado y rama protegida validada'
        },
        threatResult: {
          'pt-br': 'Trigger aceito • PR suspeito contendo credencial hardcoded na branch',
          en: 'Trigger accepted • Suspicious PR containing hardcoded credential on branch',
          es: 'Disparador aceptado • PR sospechoso conteniendo credencial hardcoded en la rama'
        },
        threatBlocked: false
      },
      {
        id: 'sast',
        icon: 'fas fa-code',
        title: { 'pt-br': 'SAST (Semgrep)', en: 'SAST (Semgrep)', es: 'SAST (Semgrep)' },
        tech: 'Semgrep v1.68 AST',
        what: {
          'pt-br': 'Análise estática de código-fonte inspecionando a Árvore de Sintaxe Abstrata (AST) sem executar a aplicação.',
          en: 'Static application security testing inspecting the Abstract Syntax Tree (AST) without executing code.',
          es: 'Análisis estático de código fuente inspeccionando el Árbol de Sintaxis Abstracta (AST) sin ejecutar código.'
        },
        mechanism: {
          'pt-br': 'Varredura com regras Semgrep customizadas contra OWASP Top 10 (SQLi, XSS, SSRF e Hardcoded API Secrets).',
          en: 'Rule-based scanning matching AST patterns for OWASP Top 10 (SQLi, XSS, SSRF, Hardcoded Secrets).',
          es: 'Escaneo basado en reglas Semgrep contra OWASP Top 10 (SQLi, XSS, SSRF y Secretos Hardcoded).'
        },
        safeResult: {
          'pt-br': '0 vulnerabilidades críticas ou segredos expostos no código',
          en: '0 critical vulnerabilities or exposed secrets in source code',
          es: '0 vulnerabilidades críticas o secretos expuestos en código fuente'
        },
        threatResult: {
          'pt-br': 'Alerta SAST: Regra `generic-api-key` identificou secret hardcoded na linha 42',
          en: 'SAST Alert: Rule `generic-api-key` detected hardcoded secret on line 42',
          es: 'Alerta SAST: Regla `generic-api-key` detectó secreto hardcoded en la línea 42'
        },
        threatBlocked: false
      },
      {
        id: 'sca',
        icon: 'fas fa-box',
        title: { 'pt-br': 'SCA & Contêiner', en: 'SCA & Container', es: 'SCA y Contenedor' },
        tech: 'Trivy Scanner (OCI)',
        what: {
          'pt-br': 'Auditoria de composição de software (SCA) e varredura das camadas da imagem Docker contra bases NVD e GitHub Advisory.',
          en: 'Software composition analysis (SCA) and container layer audit against NVD and GitHub Advisory.',
          es: 'Auditoría de composición de software (SCA) y escaneo de capas Docker contra NVD y GitHub Advisory.'
        },
        mechanism: {
          'pt-br': 'Geração de SBOM (Software Bill of Materials) e inspeção profunda de pacotes npm/pip e camadas do SO Linux.',
          en: 'SBOM generation and deep inspection of npm/pip packages and OS layer binaries.',
          es: 'Generación de SBOM e inspección profunda de paquetes npm/pip y capas de sistema operativo.'
        },
        safeResult: {
          'pt-br': 'Imagem Docker certificada sem CVEs High/Critical abertas',
          en: 'Docker image certified with 0 unmitigated High/Critical CVEs',
          es: 'Imagen Docker certificada sin CVEs High/Critical abiertas'
        },
        threatResult: {
          'pt-br': 'Alerta SCA: CVE-2024-XXXX Crítica detectada em dependência transitiva legada',
          en: 'SCA Alert: Critical CVE-2024-XXXX detected in legacy transitive dependency',
          es: 'Alerta SCA: Alerta SCA: CVE-2024-XXXX Crítica detectada en dependencia transitiva'
        },
        threatBlocked: false
      },
      {
        id: 'dast',
        icon: 'fas fa-spider',
        title: { 'pt-br': 'DAST (OWASP ZAP)', en: 'DAST (OWASP ZAP)', es: 'DAST (OWASP ZAP)' },
        tech: 'OWASP ZAP 2.17',
        what: {
          'pt-br': 'A aplicação é instanciada em contêiner efêmero e submetida a spidering e testes de intrusão automatizados de caixa-preta.',
          en: 'Application launched in ephemeral container and subjected to automated black-box dynamic fuzzing.',
          es: 'La aplicación se ejecuta en contenedor efímero y se somete a spidering y fuzzing dinámico.'
        },
        mechanism: {
          'pt-br': 'Injeção de payloads HTTP, verificação de cabeçalhos HSTS/CSP, cookies Secure e validação contra Cross-Site Scripting.',
          en: 'Active HTTP payload injection, HSTS/CSP validation, Secure cookies and XSS defense checks.',
          es: 'Inyección de payloads HTTP, verificación de cabeceras HSTS/CSP, cookies Secure y defensa XSS.'
        },
        safeResult: {
          'pt-br': 'Superfície HTTP segura: Cabeçalhos defensivos ativos e rotas blindadas',
          en: 'HTTP surface secure: Defensive headers active and endpoints protected',
          es: 'Superficie HTTP segura: Cabeceras defensivas activas y rutas blindadas'
        },
        threatResult: {
          'pt-br': 'DAST Alert: Rota sensível respondeu com cabeçalho de depuração exposto',
          en: 'DAST Alert: Sensitive route responded with exposed debug headers',
          es: 'DAST Alert: Ruta sensible respondió con cabecera de depuración expuesta'
        },
        threatBlocked: false
      },
      {
        id: 'triagem',
        icon: 'fas fa-clipboard-check',
        title: { 'pt-br': 'Triagem Centralizada', en: 'Centralized Triage', es: 'Triaje Centralizado' },
        tech: 'DefectDojo v2 API',
        what: {
          'pt-br': 'Consolidação e desduplicação automática dos relatórios SAST, SCA e DAST em um único painel de segurança corporativo.',
          en: 'Automated deduplication and consolidation of SAST, SCA, and DAST reports in unified dashboard.',
          es: 'Consolidación y desduplicación automática de informes SAST, SCA y DAST en panel unificado.'
        },
        mechanism: {
          'pt-br': 'Cálculo de risco composto, rastreamento de SLA por severidade e supressão controlada de falsos positivos.',
          en: 'Composite risk scoring, severity SLA tracking, and controlled false-positive suppression.',
          es: 'Cálculo de riesgo compuesto, seguimiento de SLA por severidad y supresión de falsos positivos.'
        },
        safeResult: {
          'pt-br': '123 achados triados e normalizados • 0 violações de SLA de segurança',
          en: '123 findings triaged and normalized • 0 security SLA breaches',
          es: '123 hallazgos clasificados y normalizados • 0 violaciones de SLA de seguridad'
        },
        threatResult: {
          'pt-br': 'DefectDojo: Identificadas 2 violações críticas de severidade bloqueante',
          en: 'DefectDojo: 2 critical severity blocking violations identified',
          es: 'DefectDojo: Identificadas 2 violaciones críticas de severidad bloqueante'
        },
        threatBlocked: false
      },
      {
        id: 'gate',
        icon: 'fas fa-shield-halved',
        title: { 'pt-br': 'Quality Gate & Deploy', en: 'Quality Gate & Deploy', es: 'Quality Gate y Despliegue' },
        tech: 'Policy-as-Code (Python)',
        what: {
          'pt-br': 'Script `quality_gate.py` avalia os SLAs declarados em `quality_gate_policy.json` antes de autorizar o deploy.',
          en: 'Script `quality_gate.py` evaluates SLAs in `quality_gate_policy.json` before deployment.',
          es: 'Script `quality_gate.py` evalúa los SLAs de `quality_gate_policy.json` antes del despliegue.'
        },
        mechanism: {
          'pt-br': 'Regra estrita: Se houver qualquer vulnerabilidade Crítica ou Alta não mitigada, o exit code 1 aborta a esteira.',
          en: 'Strict policy: Any Critical or High unmitigated issue exits with code 1, aborting pipeline.',
          es: 'Regla estricta: Si existe vulnerabilidad Crítica o Alta sin mitigar, exit code 1 aborta la tubería.'
        },
        safeResult: {
          'pt-br': 'Quality Gate APROVADO! Deploy autorizado para o cluster Kubernetes.',
          en: 'Quality Gate PASSED! Deployment authorized to Kubernetes cluster.',
          es: '¡Quality Gate APROBADO! Despliegue autorizado al clúster Kubernetes.'
        },
        threatResult: {
          'pt-br': 'Quality Gate BLOQUEOU O DEPLOY! Pipeline abortado para proteger a produção.',
          en: 'Quality Gate ABORTED DEPLOYMENT! Pipeline halted to protect production.',
          es: '¡Quality Gate BLOQUEÓ EL DESPLIEGUE! Tubería abortada para proteger producción.'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'O Quality Gate declarativo detectou as violações críticas enviadas pelo DefectDojo e abortou a esteira imediatamente (exit code 1). Nenhum código comprometido chegou ao ambiente de produção!',
          en: 'The declarative Quality Gate detected the critical violations reported by DefectDojo and aborted the pipeline immediately (exit code 1). No vulnerable code reached production!',
          es: '¡El Quality Gate declarativo detectó las violaciones críticas reportadas por DefectDojo y abortó la tubería inmediatamente (exit code 1)! ¡Ningún código comprometido llegó a producción!'
        }
      }
    ]
  },

  // 2. BYODSEC — Zero Trust TLS 1.3 Road Warrior VPN com mTLS
  'cyber-pai2': {
    id: 'cyber-pai2',
    code: 'VPN-MTLS-02',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Conexão mTLS Autorizada', en: 'Authorized mTLS Connection', es: 'Conexión mTLS Autorizada' },
        banner: {
          'pt-br': 'Cenário Seguro: Dispositivo corporativo com certificado emitido pela CA Raiz e sessão restrita TLS 1.3 com PFS.',
          en: 'Safe Scenario: Corporate device with Root CA certificate and strict TLS 1.3 session with Forward Secrecy.',
          es: 'Escenario Seguro: Dispositivo corporativo con certificado de CA Raíz y sesión estricta TLS 1.3 con PFS.'
        },
        badge: { 'pt-br': 'Túnel Zero Trust Estabelecido', en: 'Zero Trust Tunnel Established', es: 'Túnel Zero Trust Establecido' }
      },
      threat: {
        label: { 'pt-br': 'Tentativa Não Autorizada (Rogue)', en: 'Rogue Device Simulation', es: 'Intento No Autorizado (Rogue)' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Dispositivo invasor sem certificado emitido pela CA Raiz tenta acessar o gateway da VPN.',
          en: 'Threat Scenario: Rogue device without trusted Root CA certificate attempts to breach VPN gateway.',
          es: 'Escenario Ofensivo: Dispositivo invasor sin certificado de la CA Raíz intenta acceder a la VPN.'
        },
        badge: { 'pt-br': 'Handshake Rejeitado na Camada TLS', en: 'Handshake Aborted at TLS Layer', es: 'Handshake Rechazado en Capa TLS' }
      }
    },
    nodes: [
      {
        id: 'byod_client',
        icon: 'fas fa-laptop',
        title: { 'pt-br': 'Cliente BYOD', en: 'BYOD Client', es: 'Cliente BYOD' },
        tech: 'Client Hello (TLS 1.3)',
        what: {
          'pt-br': 'Dispositivo remoto do colaborador inicia solicitação de acesso seguro à infraestrutura interna da empresa.',
          en: 'Employee remote laptop initiates secure connection request to corporate network.',
          es: 'Dispositivo remoto del colaborador inicia solicitud de acceso seguro a la infraestructura interna.'
        },
        mechanism: {
          'pt-br': 'Envio do TLS Client Hello restringindo cifras apenas a algoritmos com Perfect Forward Secrecy (ECDHE).',
          en: 'Sends TLS Client Hello restricting cipher suites strictly to Perfect Forward Secrecy (ECDHE).',
          es: 'Envío de TLS Client Hello restringiendo cifrados únicamente a algoritmos con Perfect Forward Secrecy.'
        },
        safeResult: {
          'pt-br': 'Sessão iniciada • Cifras modernas apresentadas ao gateway',
          en: 'Session initiated • Modern ciphers presented to gateway',
          es: 'Sesión iniciada • Cifrados modernos presentados al gateway'
        },
        threatResult: {
          'pt-br': 'Dispositivo não gerenciado inicia conexão externa sem credencial institucional',
          en: 'Unmanaged rogue device starts external connection without institutional cert',
          es: 'Dispositivo no administrado inicia conexión externa sin credencial institucional'
        },
        threatBlocked: false
      },
      {
        id: 'mtls_auth',
        icon: 'fas fa-certificate',
        title: { 'pt-br': 'Validação mTLS X.509', en: 'mTLS X.509 Validation', es: 'Validación mTLS X.509' },
        tech: 'PKI Root CA Própria',
        what: {
          'pt-br': 'O gateway exige autenticação mútua (mTLS): tanto o servidor quanto o cliente devem provar sua identidade criptográfica.',
          en: 'Gateway enforces mutual TLS (mTLS): both server and client must prove cryptographic identity.',
          es: 'El gateway exige autenticación mutua (mTLS): tanto el servidor como el cliente deben probar su identidad.'
        },
        mechanism: {
          'pt-br': 'Verificação da cadeia de certificados contra a Chave Pública da CA Raiz institucional (X.509 v3 com CN e SAN validados).',
          en: 'Certificate chain validation against institutional Root CA Public Key (X.509 v3 with CN & SAN).',
          es: 'Verificación de la cadena de certificados contra la Clave Pública de la CA Raíz institucional.'
        },
        safeResult: {
          'pt-br': 'Certificado do cliente validado com sucesso pela Autoridade Certificadora',
          en: 'Client certificate successfully verified by institutional Root CA',
          es: 'Certificado del cliente validado con éxito por la Autoridad Certificadora'
        },
        threatResult: {
          'pt-br': 'FALHA DE CERTIFICADO: Dispositivo não possui certificado assinado pela CA Raiz!',
          en: 'CERTIFICATE FAILURE: Device lacks certificate signed by Root CA!',
          es: '¡FALLA DE CERTIFICADO: El dispositivo no posee certificado firmado por la CA Raíz!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Autenticação Mútua Rejeitada! O gateway Zero Trust exige certificado digital emitido exclusivamente pela CA Raiz institucional. Sem a chave privada correspondente, a conexão é encerrada imediatamente antes de qualquer negociação de rede.',
          en: 'Mutual Authentication Rejected! The Zero Trust gateway requires a client certificate signed by the Root CA. Without the corresponding private key, the handshake is terminated instantly!',
          es: '¡Autenticación Mutua Rechazada! El gateway Zero Trust exige certificado emitido exclusivamente por la CA Raíz institucional. ¡La conexión se cierra de inmediato!'
        }
      },
      {
        id: 'tls_handshake',
        icon: 'fas fa-lock',
        title: { 'pt-br': 'Handshake TLS 1.3', en: 'TLS 1.3 Handshake', es: 'Handshake TLS 1.3' },
        tech: 'RFC 8446 Strict',
        what: {
          'pt-br': 'Estabelecimento do canal criptografado de alta performance com troca de chaves Diffie-Hellman em curva elíptica.',
          en: 'Establishment of high-performance encrypted channel with elliptic curve Diffie-Hellman key exchange.',
          es: 'Establecimiento del canal cifrado de alto rendimiento con intercambio de claves Diffie-Hellman.'
        },
        mechanism: {
          'pt-br': 'Uso exclusivo de TLS_AES_256_GCM_SHA384 / ChaCha20 e 0-RTT desativado para imunidade contra Replay Attacks.',
          en: 'Strict TLS_AES_256_GCM_SHA384 / ChaCha20; 0-RTT disabled for immunity against Replay Attacks.',
          es: 'Uso exclusivo de TLS_AES_256_GCM_SHA384 / ChaCha20 y 0-RTT desactivado contra Replay Attacks.'
        },
        safeResult: {
          'pt-br': 'Canal TLS 1.3 ativo com Perfect Forward Secrecy garantido',
          en: 'TLS 1.3 channel active with Perfect Forward Secrecy guaranteed',
          es: 'Canal TLS 1.3 activo con Perfect Forward Secrecy garantizado'
        },
        threatResult: {
          'pt-br': 'Conexão abortada antes do estabelecimento da cifra de sessão',
          en: 'Connection terminated before session cipher setup',
          es: 'Conexión abortada antes del establecimiento de la cifra de sesión'
        },
        threatBlocked: false
      },
      {
        id: 'pbkdf2_kdf',
        icon: 'fas fa-key',
        title: { 'pt-br': 'KDF PBKDF2 (600k)', en: 'PBKDF2 KDF (600k)', es: 'KDF PBKDF2 (600k)' },
        tech: 'PBKDF2-HMAC-SHA256',
        what: {
          'pt-br': 'Derivação de chave e validação de credencial secundária do usuário com fator de trabalho computacionalmente robusto.',
          en: 'Key derivation and secondary user credential verification with computationally heavy work factor.',
          es: 'Derivación de clave y validación de credencial de usuario con factor de trabajo computacionalmente robusto.'
        },
        mechanism: {
          'pt-br': '600.000 iterações de HMAC-SHA256 e salt criptográfico único, tornando inviável qualquer ataque de dicionário por GPU.',
          en: '600,000 iterations of HMAC-SHA256 with unique salt, making GPU dictionary attacks impractical.',
          es: '600.000 iteraciones de HMAC-SHA256 con salt criptográfico único contra ataques GPU.'
        },
        safeResult: {
          'pt-br': 'Chave mestre de sessão derivada e credencial de usuário autenticada',
          en: 'Master session key derived and user credential authenticated',
          es: 'Clave maestra de sesión derivada y credencial autenticada'
        },
        threatResult: {
          'pt-br': 'Etapa não alcançada por falta de autenticação mTLS prévia',
          en: 'Step not reached due to lack of prior mTLS authentication',
          es: 'Etapa no alcanzada por falta de autenticación mTLS previa'
        },
        threatBlocked: false
      },
      {
        id: 'vpn_gateway',
        icon: 'fas fa-network-wired',
        title: { 'pt-br': 'Gateway Zero Trust', en: 'Zero Trust Gateway', es: 'Gateway Zero Trust' },
        tech: 'VPN Gateway (300 sessões)',
        what: {
          'pt-br': 'Acesso liberado apenas aos microsserviços estritamente autorizados, aplicando princípio do menor privilégio.',
          en: 'Access granted only to strictly authorized microservices under principle of least privilege.',
          es: 'Acceso liberado solo a microservicios estrictamente autorizados bajo menor privilegio.'
        },
        mechanism: {
          'pt-br': 'Regras de iptables/Netfilter isolam o tráfego do túnel sem permitir movimentação lateral na rede interna.',
          en: 'Netfilter/iptables rules isolate tunnel traffic preventing lateral movement within intranet.',
          es: 'Reglas de iptables aíslan el tráfico del túnel sin permitir movimiento lateral en la red.'
        },
        safeResult: {
          'pt-br': 'Túnel seguro ativo! Acesso granular concedido a 300 sessões simultâneas.',
          en: 'Secure tunnel active! Granular access granted for 300 concurrent sessions.',
          es: '¡Túnel seguro activo! Acceso granular concedido para 300 sesiones simultáneas.'
        },
        threatResult: {
          'pt-br': 'Rede interna completamente blindada contra acessos não autorizados.',
          en: 'Internal intranet completely shielded against unauthorized access.',
          es: 'Red interna completamente blindada contra accesos no autorizados.'
        },
        threatBlocked: false
      }
    ]
  },

  // 3. VULNAWEB — Auditoria, Hardening Linux/Mobile & DAST
  'cyber-pai3': {
    id: 'cyber-pai3',
    code: 'HARDENING-03',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Auditoria & Hardening Concluído', en: 'Hardening & Audit Complete', es: 'Hardening y Auditoría Completado' },
        banner: {
          'pt-br': 'Cenário Fortificado: Sistemas Linux auditados via Lynis (>70), políticas Firefox ESR ativas e DAST sem falhas.',
          en: 'Hardened Scenario: Linux systems audited via Lynis (>70), Firefox ESR policies active, and clean DAST scan.',
          es: 'Escenario Fortificado: Sistemas Linux auditados vía Lynis (>70), políticas Firefox ESR activas y DAST sin fallos.'
        },
        badge: { 'pt-br': 'Hardening Index > 70 Alcançado', en: 'Hardening Index > 70 Achieved', es: 'Hardening Index > 70 Alcanzado' }
      },
      threat: {
        label: { 'pt-br': 'Detecção de Fragilidades Pré-Hardening', en: 'Pre-Hardening Weakness Detection', es: 'Detección de Fragilidades Previas' },
        banner: {
          'pt-br': 'Cenário de Diagnóstico: Lynis identifica parâmetros de rede inseguros no kernel e permissões excessivas.',
          en: 'Diagnostic Scenario: Lynis identifies insecure kernel parameters and excessive permissions before hardening.',
          es: 'Escenario de Diagnóstico: Lynis identifica parámetros de red inseguros en kernel antes del hardening.'
        },
        badge: { 'pt-br': 'Remediação Automatizada Acionada', en: 'Automated Remediation Triggered', es: 'Remediación Automatizada Activada' }
      }
    },
    nodes: [
      {
        id: 'target_scan',
        icon: 'fas fa-server',
        title: { 'pt-br': 'Superfície de Ativos', en: 'Asset Attack Surface', es: 'Superficie de Activos' },
        tech: 'Kali / Ubuntu / Debian',
        what: {
          'pt-br': 'Mapeamento de servidores Linux e dispositivos móveis BYOD conectados ao ecossistema corporativo.',
          en: 'Mapping of Linux servers and mobile BYOD devices connected to corporate network.',
          es: 'Mapeo de servidores Linux y dispositivos móviles BYOD conectados a la red corporativa.'
        },
        mechanism: {
          'pt-br': 'Inventário de serviços escutando em portas de rede, versões de pacotes e perfil de segurança móvel (Knox/ADB).',
          en: 'Inventory of listening network services, package versions, and mobile security profiles (Knox/ADB).',
          es: 'Inventario de servicios en puertos de red, versiones de paquetes y perfiles móviles (Knox/ADB).'
        },
        safeResult: {
          'pt-br': 'Topologia de hosts e serviços mapeada para auditoria',
          en: 'Host topology and listening services mapped for audit',
          es: 'Topología de hosts y servicios mapeada para auditoría'
        },
        threatResult: {
          'pt-br': 'Identificados serviços com configurações padrão e portas expostas',
          en: 'Default configurations and exposed ports detected across targets',
          es: 'Identificados servicios con configuraciones por defecto y puertos expuestos'
        },
        threatBlocked: false
      },
      {
        id: 'lynis_audit',
        icon: 'fas fa-magnifying-glass-chart',
        title: { 'pt-br': 'Auditoria Lynis 3.1.7', en: 'Lynis 3.1.7 Audit', es: 'Auditoría Lynis 3.1.7' },
        tech: 'Lynis Security Engine',
        what: {
          'pt-br': 'Varredura automatizada com centenas de testes avaliando autenticação PAM, permissões de arquivo e parâmetros de rede.',
          en: 'Automated scan with hundreds of tests evaluating PAM auth, permissions, and network params.',
          es: 'Escaneo automatizado con cientos de pruebas evaluando PAM, permisos y parámetros de red.'
        },
        mechanism: {
          'pt-br': 'Cálculo algorítmico do Hardening Index (0 a 100) e geração de matriz de recomendações prioritárias.',
          en: 'Algorithmic calculation of Hardening Index (0-100) and priority recommendation matrix generation.',
          es: 'Cálculo algorítmico de Hardening Index (0 a 100) y matriz de recomendaciones prioritarias.'
        },
        safeResult: {
          'pt-br': 'Índice de Hardening calculado: Linha de base avaliada',
          en: 'Hardening Index calculated: Baseline evaluated',
          es: 'Índice de Hardening calculado: Línea de base evaluada'
        },
        threatResult: {
          'pt-br': 'Lynis identificou Hardening Index inicial baixo (< 55) com 14 recomendações críticas',
          en: 'Lynis flagged low initial Hardening Index (< 55) with 14 critical recommendations',
          es: 'Lynis identificó Hardening Index inicial bajo (< 55) con 14 recomendaciones críticas'
        },
        threatBlocked: false
      },
      {
        id: 'kernel_hardening',
        icon: 'fas fa-wrench',
        title: { 'pt-br': 'Hardening de Kernel & SO', en: 'Kernel & OS Hardening', es: 'Hardening de Kernel y SO' },
        tech: 'Sysctl / UFW / PAM',
        what: {
          'pt-br': 'Aplicação de ajustes no `/etc/sysctl.conf`, restrição de módulos de kernel não utilizados e firewall restritivo.',
          en: 'Enforcement of `/etc/sysctl.conf` tweaks, disabling unused kernel modules, and strict firewall.',
          es: 'Aplicación de ajustes en `/etc/sysctl.conf`, restricción de módulos de kernel y firewall restrictivo.'
        },
        mechanism: {
          'pt-br': 'Desativação de IP Forwarding, ICMP Redirects, ativação de SYN Cookies e enforcement de políticas de senha no PAM.',
          en: 'Disabling IP forwarding, ICMP redirects, enabling TCP SYN cookies, and strict PAM rules.',
          es: 'Desactivación de reenvío IP, redirecciones ICMP, activación de SYN Cookies y PAM estricto.'
        },
        safeResult: {
          'pt-br': 'Parâmetros de kernel reforçados e serviços desnecessários desativados',
          en: 'Kernel parameters hardened and unnecessary services disabled',
          es: 'Parámetros de kernel reforzados y servicios innecesarios desactivados'
        },
        threatResult: {
          'pt-br': 'Ajustes automáticos de hardening aplicados para neutralizar as fragilidades encontradas',
          en: 'Automated hardening patches applied to remediate all identified weaknesses',
          es: 'Ajustes automáticos de hardening aplicados para neutralizar las fragilidades encontradas'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'As fragilidades do sistema foram neutralizadas! O script de hardening aplicou proteção contra SYN flood, desativou redirects ICMP e corrigiu permissões de binários SUID sensíveis.',
          en: 'System weaknesses neutralized! Hardening script enforced SYN flood defense, disabled ICMP redirects, and fixed SUID binary permissions.',
          es: '¡Fragilidades neutralizadas! El script de hardening aplicó protección contra SYN flood, desactivó redirecciones ICMP y corrigió permisos SUID.'
        }
      },
      {
        id: 'enterprise_policies',
        icon: 'fas fa-shield-virus',
        title: { 'pt-br': 'Políticas Corporativas', en: 'Enterprise Policies', es: 'Políticas Corporativas' },
        tech: 'Firefox ESR & Mobile Knox',
        what: {
          'pt-br': 'Aplicação de `policies.json` enterprise no Firefox ESR e auditoria de perfis em dispositivos móveis.',
          en: 'Enforcement of enterprise `policies.json` in Firefox ESR and mobile profile auditing.',
          es: 'Aplicación de `policies.json` enterprise en Firefox ESR y auditoría de perfiles móviles.'
        },
        mechanism: {
          'pt-br': 'Bloqueio de telemetria indesejada, desativação de senhas salvas locais e isolamento de contêineres móveis.',
          en: 'Disabling unwanted telemetry, blocking saved local credentials, and mobile container isolation.',
          es: 'Bloqueo de telemetría no deseada, desactivación de contraseñas guardadas y aislamiento móvil.'
        },
        safeResult: {
          'pt-br': 'Navegador corporativo e dispositivos móveis blindados contra exfiltração',
          en: 'Enterprise browsers and mobile devices protected against exfiltration',
          es: 'Navegador corporativo y dispositivos móviles blindados contra exfiltración'
        },
        threatResult: {
          'pt-br': 'Tentativa de desvio de política bloqueada pela configuração enterprise',
          en: 'Policy bypass attempt blocked by enterprise configuration',
          es: 'Intento de desvío de política bloqueado por configuración enterprise'
        },
        threatBlocked: false
      },
      {
        id: 'dast_validation',
        icon: 'fas fa-check-double',
        title: { 'pt-br': 'Validação DAST (ZAP)', en: 'DAST Validation (ZAP)', es: 'Validación DAST (ZAP)' },
        tech: 'OWASP ZAP 2.17',
        what: {
          'pt-br': 'Bateria final de pentest automatizado comprovando elevação do Hardening Index e fechamento de brechas.',
          en: 'Final automated pentest proving elevated Hardening Index and closed vulnerabilities.',
          es: 'Batería final de pentest automatizado comprobando elevación del Hardening Index.'
        },
        mechanism: {
          'pt-br': 'Spidering e fuzzing ativo confirmando imunidade a injeções e notas elevadas de conformidade.',
          en: 'Active spidering and fuzzing confirming injection immunity and high compliance scores.',
          es: 'Spidering y fuzzing activo confirmando inmunidad a inyecciones y alta conformidad.'
        },
        safeResult: {
          'pt-br': 'Hardening Index > 70 validado! Infraestrutura e aplicações corporativas em conformidade.',
          en: 'Hardening Index > 70 validated! Corporate infrastructure and apps fully compliant.',
          es: '¡Hardening Index > 70 validado! Infraestructura y aplicaciones en total conformidad.'
        },
        threatResult: {
          'pt-br': 'Re-auditoria concluiu que todos os vetores de ataque foram mitigados.',
          en: 'Re-audit confirmed all identified attack vectors were successfully mitigated.',
          es: 'La re-auditoría confirmó que todos los vectores de ataque fueron mitigados.'
        },
        threatBlocked: false
      }
    ]
  },

  // 4. IntegriDos — Integridade de Transações Financeiras & Anti-Replay
  'cyber-pai1': {
    id: 'cyber-pai1',
    code: 'INTEGRITY-01',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Transferência Legítima (HMAC Válido)', en: 'Legitimate Transfer (Valid HMAC)', es: 'Transferencia Legítima (HMAC Válido)' },
        banner: {
          'pt-br': 'Cenário Seguro: Transação bancária com assinatura HMAC-SHA256 íntegra e Nonce criptográfico inédito aprovada.',
          en: 'Safe Scenario: Banking transaction with authentic HMAC-SHA256 signature and fresh cryptographic Nonce approved.',
          es: 'Escenario Seguro: Transacción bancaria con firma HMAC-SHA256 auténtica y Nonce criptográfico inédito aprobada.'
        },
        badge: { 'pt-br': 'Transação Bancária Liquidada com Sucesso', en: 'Banking Transaction Cleared', es: 'Transacción Bancaria Liquidada' }
      },
      threat: {
        label: { 'pt-br': 'Simulação de Replay Attack (Ataque de Repetição)', en: 'Replay Attack Simulation', es: 'Simulación de Replay Attack' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Invasor intercepta pacote válido de R$ 5.000 e tenta reenviá-lo para duplicar o débito.',
          en: 'Threat Scenario: Attacker intercepts valid $5,000 transaction payload and replays it to duplicate debit.',
          es: 'Escenario Ofensivo: Invasor intercepta paquete válido y lo reenvía para duplicar el débito en la cuenta.'
        },
        badge: { 'pt-br': 'Replay Attack Bloqueado pelo Filtro de Nonces', en: 'Replay Attack Blocked by Nonce Filter', es: 'Replay Attack Bloqueado por Filtro de Nonces' }
      }
    },
    nodes: [
      {
        id: 'tx_build',
        icon: 'fas fa-receipt',
        title: { 'pt-br': 'Montagem do Payload', en: 'Payload Assembly', es: 'Montaje del Payload' },
        tech: 'JSON Estruturado',
        what: {
          'pt-br': 'Cliente bancário gera payload da transação com Conta Origem, Destino, Valor, Timestamp UTC e Nonce aleatório.',
          en: 'Client generates transaction payload with Source, Destination, Amount, UTC Timestamp, and random Nonce.',
          es: 'Cliente genera payload con Cuenta Origen, Destino, Monto, Timestamp UTC y Nonce aleatorio.'
        },
        mechanism: {
          'pt-br': 'Nonce criptográfico de 64 bytes gerado via CSPRNG garantindo entropia única para cada requisição.',
          en: '64-byte cryptographic Nonce generated via CSPRNG ensuring unique entropy per request.',
          es: 'Nonce criptográfico de 64 bytes generado vía CSPRNG asegurando entropía única por petición.'
        },
        safeResult: {
          'pt-br': 'Payload gerado: R$ 5.000,00 | Nonce: a8f9...4b12 | Timestamp UTC válido',
          en: 'Payload generated: $5,000.00 | Nonce: a8f9...4b12 | Valid UTC timestamp',
          es: 'Payload generado: R$ 5.000,00 | Nonce: a8f9...4b12 | Timestamp UTC válido'
        },
        threatResult: {
          'pt-br': 'Invasor captura payload idêntico de transação anterior e o retransmite na rede',
          en: 'Attacker captures identical prior transaction payload and replays it over wire',
          es: 'Invasor captura payload idéntico de transacción anterior y lo retransmite en red'
        },
        threatBlocked: false
      },
      {
        id: 'hmac_sign',
        icon: 'fas fa-fingerprint',
        title: { 'pt-br': 'Assinatura HMAC-SHA256', en: 'HMAC-SHA256 Signature', es: 'Firma HMAC-SHA256' },
        tech: 'RFC 2104 / SHA-256',
        what: {
          'pt-br': 'O cliente calcula a assinatura criptográfica do payload usando uma chave simétrica secreta compartilhada com o banco.',
          en: 'Client computes cryptographic signature of payload using shared secret symmetric key with bank.',
          es: 'Cliente calcula la firma criptográfica usando una clave simétrica secreta compartida con el banco.'
        },
        mechanism: {
          'pt-br': 'Função hash com chave: `HMAC(K, M) = H((K ^ opad) || H((K ^ ipad) || M))` tornando impossível alterar qualquer valor sem a chave.',
          en: 'Keyed-hash function: `HMAC(K, M) = H((K ^ opad) || H((K ^ ipad) || M))`, preventing any payload tampering.',
          es: 'Función hash con clave: `HMAC(K, M)` haciendo imposible alterar cualquier dato sin la clave.'
        },
        safeResult: {
          'pt-br': 'Assinatura HMAC gerada: `7f8c2b9a...` anexada ao cabeçalho `X-Transaction-HMAC`',
          en: 'HMAC signature generated: `7f8c2b9a...` attached to `X-Transaction-HMAC` header',
          es: 'Firma HMAC generada: `7f8c2b9a...` adjuntada en cabecera `X-Transaction-HMAC`'
        },
        threatResult: {
          'pt-br': 'Pacote duplicado carrega a mesma assinatura HMAC original válida para o payload capturado',
          en: 'Replayed packet carries original HMAC signature valid for that captured payload',
          es: 'Paquete duplicado porta la firma HMAC original válida para el payload capturado'
        },
        threatBlocked: false
      },
      {
        id: 'network_transit',
        icon: 'fas fa-arrow-right-arrow-left',
        title: { 'pt-br': 'Trânsito em Rede & MITM', en: 'Network Transit & MITM', es: 'Tránsito en Red y MITM' },
        tech: 'Canal TLS Seguro',
        what: {
          'pt-br': 'A transação trafega pela rede pública. Se um atacante interceptar e alterar R$ 5.000 para R$ 50.000, o HMAC quebrará.',
          en: 'Transaction travels across wire. If attacker tampers amount from $5k to $50k, HMAC fails instantly.',
          es: 'La transacción viaja por la red. Si el atacante altera el valor, el HMAC se invalida.'
        },
        mechanism: {
          'pt-br': 'Propriedade de avalanche: Alteração de 1 bit no payload gera hash completamente diferente.',
          en: 'Avalanche effect: Changing a single bit in the payload alters more than 50% of the hash output.',
          es: 'Efecto avalancha: Alterar 1 bit en el payload genera un hash completamente diferente.'
        },
        safeResult: {
          'pt-br': 'Pacote recebido pelo servidor bancário sem corrupção ou adulteração de bits',
          en: 'Packet received by banking server without bit tampering or corruption',
          es: 'Paquete recibido por el servidor bancario sin corrupción ni alteración de bits'
        },
        threatResult: {
          'pt-br': 'Pacote de replay chega intacto ao gateway bancário para processamento',
          en: 'Replay packet arrives intact at the banking gateway for processing',
          es: 'Paquete de replay llega intacto al gateway bancario para procesamiento'
        },
        threatBlocked: false
      },
      {
        id: 'anti_replay_check',
        icon: 'fas fa-history',
        title: { 'pt-br': 'Filtro Anti-Replay (Nonce)', en: 'Anti-Replay Filter (Nonce)', es: 'Filtro Anti-Replay (Nonce)' },
        tech: 'Nonce Cache & Timestamp Window',
        what: {
          'pt-br': 'O servidor bancário consulta sua tabela de estados em memória para verificar se este Nonce já foi utilizado antes.',
          en: 'Banking server inspects in-memory state table to verify whether this Nonce was ever seen.',
          es: 'Servidor bancario consulta su tabla en memoria para verificar si este Nonce ya fue utilizado.'
        },
        mechanism: {
          'pt-br': 'Janela temporal estrita (máx 120s) e armazenamento do hash do Nonce com expiração controlada.',
          en: 'Strict sliding timestamp window (max 120s) and cache of seen Nonce hashes.',
          es: 'Ventana temporal estricta (máx 120s) y almacenamiento de hashes de Nonces con expiración.'
        },
        safeResult: {
          'pt-br': 'Nonce a8f9...4b12 é INÉDITO! Registrado no cache de transações ativas.',
          en: 'Nonce a8f9...4b12 is FRESH! Stored in active transaction cache.',
          es: '¡Nonce a8f9...4b12 es INÉDITO! Registrado en caché de transacciones activas.'
        },
        threatResult: {
          'pt-br': 'REPLAY ATTACK DETECTADO! Nonce a8f9...4b12 já consta no cache de transações!',
          en: 'REPLAY ATTACK DETECTED! Nonce a8f9...4b12 already exists in transaction cache!',
          es: '¡REPLAY ATTACK DETECTADO! ¡Nonce a8f9...4b12 ya existe en caché de transacciones!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Ataque de Repetição Neutralizado! Embora a assinatura HMAC do pacote interceptado fosse matematicamente válida, o motor Anti-Replay identificou que o Nonce já havia sido liquidado há 45 segundos. A transação duplicada foi descartada e o IP do atacante sinalizado!',
          en: 'Replay Attack Neutralized! Although the HMAC signature of the intercepted packet was mathematically valid, the Anti-Replay engine detected that the Nonce was already spent 45 seconds ago. The duplicated transaction was dropped immediately!',
          es: '¡Ataque de Repetición Neutralizado! Aunque la firma HMAC era matemáticamente válida, el motor Anti-Replay detectó que el Nonce ya había sido liquidado. ¡La transacción duplicada fue descartada inmediatamente!'
        }
      },
      {
        id: 'hmac_verification',
        icon: 'fas fa-scale-balanced',
        title: { 'pt-br': 'Conferência HMAC Constante', en: 'Constant-Time Verification', es: 'Verificación en Tiempo Constante' },
        tech: 'crypto.timingSafeEqual',
        what: {
          'pt-br': 'O servidor recalcula o HMAC sobre o payload recebido e compara com o valor enviado no cabeçalho.',
          en: 'Server recalculates HMAC over received payload and compares against header signature.',
          es: 'Servidor recalcula el HMAC sobre el payload y compara con el valor de la cabecera.'
        },
        mechanism: {
          'pt-br': 'Comparação em tempo constante para eliminar vulnerabilidade a Timing Attacks (ataques de canal lateral).',
          en: 'Constant-time comparison algorithm preventing timing-based side-channel attacks.',
          es: 'Comparación en tiempo constante para eliminar vulnerabilidades de ataques de canal lateral (Timing).'
        },
        safeResult: {
          'pt-br': 'HMAC conferido em 0.14ms: Assinatura 100% idêntica e autêntica',
          en: 'HMAC verified in 0.14ms: Signature 100% authentic and matching',
          es: 'HMAC verificado en 0.14ms: Firma 100% idéntica y auténtica'
        },
        threatResult: {
          'pt-br': 'Etapa abortada: Transação rejeitada na etapa de validação de Nonce',
          en: 'Step aborted: Transaction rejected during Nonce state verification',
          es: 'Etapa abortada: Transacción rechazada en verificación de Nonce'
        },
        threatBlocked: false
      },
      {
        id: 'ledger_commit',
        icon: 'fas fa-building-columns',
        title: { 'pt-br': 'Liquidação no Livro-Razão', en: 'Ledger Settlement', es: 'Liquidación en el Libro Mayor' },
        tech: 'Core Banking Ledger',
        what: {
          'pt-br': 'Transação com integridade matemática e autenticidade comprovada é persistida e debitada/creditada.',
          en: 'Cryptographically proven transaction is finalized, committed, and logged in core banking ledger.',
          es: 'Transacción matemáticamente íntegra es asentada y debitada en el sistema bancario.'
        },
        safeResult: {
          'pt-br': 'Sucesso! Saldo transferido com segurança e trilha de auditoria inviolável gravada.',
          en: 'Success! Funds transferred securely with tamper-proof audit trail recorded.',
          es: '¡Éxito! Saldo transferido con seguridad y pista de auditoría grabada.'
        },
        threatResult: {
          'pt-br': 'Conta do cliente protegida contra débito indevido ou duplicidade.',
          en: 'Client account protected against unauthorized duplicate debits.',
          es: 'Cuenta del cliente protegida contra débitos indebidos o duplicados.'
        },
        threatBlocked: false
      }
    ]
  },

  // 5. MedAuth ZeroTrust — Red/Blue Team IAM, OAuth 2.0 PKCE, BFF & 2FA TOTP
  'cyber-cai3': {
    id: 'cyber-cai3',
    code: 'IAM-ZEROTRUST-03',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Fluxo Médico Legítimo (PKCE + 2FA)', en: 'Legitimate Auth (PKCE + 2FA)', es: 'Flujo Médico Legítimo (PKCE + 2FA)' },
        banner: {
          'pt-br': 'Cenário Seguro: Médico autentica via OAuth 2.0 PKCE, valida código TOTP de 6 dígitos e consome prontuários via BFF.',
          en: 'Safe Scenario: Doctor logs in via OAuth 2.0 PKCE, validates 6-digit TOTP, and accesses EHR via BFF.',
          es: 'Escenario Seguro: Médico se autentica vía OAuth 2.0 PKCE, valida código TOTP y consulta historias clínicas vía BFF.'
        },
        badge: { 'pt-br': 'Acesso Seguro ao Prontuário Médico', en: 'Secure Access to Patient EHR', es: 'Acceso Seguro a Historia Clínica' }
      },
      threat: {
        label: { 'pt-br': 'Tentativa de Interceptação Red Team', en: 'Red Team Code Interception', es: 'Interceptación Red Team' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Atacante intercepta Authorization Code no redirect mas falha ao não possuir o code_verifier.',
          en: 'Threat Scenario: Attacker intercepts Authorization Code in redirect URI but lacks the secret code_verifier.',
          es: 'Escenario Ofensivo: Atacante intercepta el Authorization Code en el redirect pero carece del code_verifier.'
        },
        badge: { 'pt-br': 'Ataque PKCE Bloqueado no IdP', en: 'PKCE Attack Blocked at IdP', es: 'Ataque PKCE Bloqueado en el IdP' }
      }
    },
    nodes: [
      {
        id: 'pkce_init',
        icon: 'fas fa-mobile-screen',
        title: { 'pt-br': 'Geração de PKCE', en: 'PKCE Challenge Setup', es: 'Generación de PKCE' },
        tech: 'RFC 7636 (PKCE)',
        what: {
          'pt-br': 'App hospitalar gera um segredo criptográfico aleatório (`code_verifier`) e deriva seu hash SHA-256 (`code_challenge`).',
          en: 'Healthcare app generates high-entropy random secret (`code_verifier`) and SHA-256 hash (`code_challenge`).',
          es: 'App hospitalaria genera un secreto criptográfico aleatorio (`code_verifier`) y su hash SHA-256 (`code_challenge`).'
        },
        mechanism: {
          'pt-br': 'O hash `code_challenge` viaja no parâmetro de autorização; o `code_verifier` original permanece sigiloso na memória do app.',
          en: 'Only the hashed challenge travels over URL; the original verifier stays isolated in app memory.',
          es: 'Solo el hash challenge viaja en URL; el verifier original permanece seguro en la memoria.'
        },
        safeResult: {
          'pt-br': 'Desafio PKCE gerado: `code_challenge = BASE64URL(SHA256(verifier))`',
          en: 'PKCE challenge ready: `code_challenge = BASE64URL(SHA256(verifier))`',
          es: 'Desafío PKCE generado: `code_challenge = BASE64URL(SHA256(verifier))`'
        },
        threatResult: {
          'pt-br': 'Red Team monitora tráfego de rede para tentar roubar parâmetros de autorização',
          en: 'Red Team sniffs network traffic attempting to capture authorization parameters',
          es: 'Red Team monitoriza el tráfico para intentar capturar parámetros de autorización'
        },
        threatBlocked: false
      },
      {
        id: 'totp_2fa',
        icon: 'fas fa-key',
        title: { 'pt-br': '2FA TOTP (FreeOTP)', en: '2FA TOTP (FreeOTP)', es: '2FA TOTP (FreeOTP)' },
        tech: 'RFC 6238 / HMAC-SHA1',
        what: {
          'pt-br': 'Após login com senha forte, médico insere o código dinâmico de 6 dígitos gerado em seu app autenticador.',
          en: 'After password entry, doctor inputs 6-digit dynamic code generated by authenticator app.',
          es: 'Tras contraseña, médico introduce el código dinámico de 6 dígitos generado en su autenticador.'
        },
        mechanism: {
          'pt-br': 'Geração baseada em tempo: `TOTP = Truncate(HMAC-SHA1(K, Floor(UnixTime / 30)))` com janela de tolerância de 30s.',
          en: 'Time-based algorithm: `TOTP = Truncate(HMAC-SHA1(K, Floor(UnixTime / 30)))` with 30s window.',
          es: 'Algoritmo temporal: `TOTP = Truncate(HMAC-SHA1(K, Floor(UnixTime / 30)))` con ventana de 30s.'
        },
        safeResult: {
          'pt-br': 'Código 2FA validado com sucesso • Authorization Code emitido para redirect',
          en: '2FA token verified successfully • Authorization Code issued for redirect',
          es: 'Código 2FA validado con éxito • Authorization Code emitido para redirect'
        },
        threatResult: {
          'pt-br': 'Atacante intercepta o Authorization Code temporário interceptando a URI de retorno',
          en: 'Attacker intercepts the ephemeral Authorization Code from redirect URI',
          es: 'Atacante intercepta el Authorization Code temporal en la URI de retorno'
        },
        threatBlocked: false
      },
      {
        id: 'token_exchange',
        icon: 'fas fa-shield-halved',
        title: { 'pt-br': 'Troca de Token no IdP', en: 'IdP Token Exchange', es: 'Canje de Token en IdP' },
        tech: 'OAuth 2.0 PKCE Verification',
        what: {
          'pt-br': 'O cliente envia o `code` e o segredo `code_verifier` original via POST HTTPS seguro para obter os tokens.',
          en: 'Client submits `code` along with original `code_verifier` via HTTPS POST to get tokens.',
          es: 'Cliente envía `code` junto al `code_verifier` original vía HTTPS POST para obtener tokens.'
        },
        mechanism: {
          'pt-br': 'O IdP calcula `SHA256(verifier_recebido)` e compara com o `code_challenge` original. Se não coincidir, rejeita!',
          en: 'IdP calculates `SHA256(received_verifier)` and checks match against original challenge.',
          es: 'El IdP calcula `SHA256(verifier_recibido)` y compara con el challenge original.'
        },
        safeResult: {
          'pt-br': 'PKCE conferido! JWT assinado com chave assimétrica RS256 emitido com sucesso.',
          en: 'PKCE matched! Asymmetric RS256 signed JWT token issued successfully.',
          es: '¡PKCE verificado! JWT firmado con clave asimétrica RS256 emitido con éxito.'
        },
        threatResult: {
          'pt-br': 'ATAQUE BLOQUEADO! Atacante tem o Code mas NÃO TEM o code_verifier original!',
          en: 'ATTACK BLOCKED! Attacker holds the Code but LACKS original code_verifier!',
          es: '¡ATAQUE BLOQUEADO! ¡El atacante tiene el Code pero NO el code_verifier original!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Tentativa de Sequestro de Código Abortada! Graças ao RFC 7636 (PKCE), o Authorization Code é inútil para o atacante sem o segredo original `code_verifier` que nunca saiu do dispositivo do médico. O IdP recusou a emissão do JWT e revogou a sessão!',
          en: 'Authorization Code Interception Foiled! Thanks to RFC 7636 (PKCE), the stolen code is completely useless without the ephemeral `code_verifier` kept solely in client memory. The IdP denied token exchange and revoked the session!',
          es: '¡Secuestro de Código Frustrado! Gracias a RFC 7636 (PKCE), el código interceptado es inútil sin el secreto original `code_verifier`. ¡El IdP rechazó la emisión del JWT!'
        }
      },
      {
        id: 'bff_gateway',
        icon: 'fas fa-layer-group',
        title: { 'pt-br': 'Padrão BFF Gateway', en: 'Backend For Frontend (BFF)', es: 'Patrón BFF Gateway' },
        tech: 'HttpOnly Secure SameSite Cookie',
        what: {
          'pt-br': 'O Access Token JWT nunca é entregue ao código JavaScript do navegador para eliminar qualquer risco de furto via XSS.',
          en: 'JWT Access Token is never exposed to browser JavaScript, eliminating XSS token theft risk.',
          es: 'El JWT Access Token nunca se expone a JavaScript en el navegador, eliminando riesgo XSS.'
        },
        mechanism: {
          'pt-br': 'BFF armazena o token na sessão segura do servidor e injeta cookie cifrado `SameSite=Strict`, `HttpOnly` e `Secure`.',
          en: 'BFF stores JWT in server-side session and proxies requests with encrypted HttpOnly cookie.',
          es: 'BFF almacena JWT en sesión de servidor e inyecta cookie cifrada HttpOnly y Secure.'
        },
        safeResult: {
          'pt-br': 'Camada BFF blindada contra XSS: Tokens corporativos mantidos em segredo',
          en: 'BFF layer immune to XSS: Corporate access tokens kept confidential',
          es: 'Capa BFF blindada contra XSS: Tokens corporativos bajo estricto sigilo'
        },
        threatResult: {
          'pt-br': 'Etapa não alcançada: Invasor bloqueado na etapa anterior',
          en: 'Step not reached: Adversary stopped at previous token exchange',
          es: 'Etapa no alcanzada: Invasor bloqueado en el paso anterior'
        },
        threatBlocked: false
      },
      {
        id: 'ehr_microservices',
        icon: 'fas fa-heart-pulse',
        title: { 'pt-br': 'Microsserviços Hospitalares', en: 'Hospital EHR Services', es: 'Microservicios Hospitalarios' },
        tech: 'JWKS & Zero Trust APIs',
        what: {
          'pt-br': 'APIs hospitalares validam a assinatura do JWT contra as chaves públicas do endpoint JWKS e liberam prontuários.',
          en: 'Healthcare microservices validate JWT signature via JWKS public keys and release clinical records.',
          es: 'APIs hospitalarias validan firma del JWT vía JWKS y liberan historias clínicas.'
        },
        safeResult: {
          'pt-br': 'Prontuário médico acessado com auditoria completa de perfil e especialidade clínica!',
          en: 'Medical record accessed with complete audit trail and clinical role permissions!',
          es: '¡Historia clínica consultada con trazabilidad completa y permisos verificados!'
        },
        threatResult: {
          'pt-br': 'Dados de pacientes 100% protegidos contra acesso não autorizado.',
          en: 'Patient health information 100% protected against unauthorized access.',
          es: 'Datos de pacientes 100% protegidos contra accesos no autorizados.'
        },
        threatBlocked: false
      }
    ]
  },

  // 6. MedCrypt Forensics — Criptografia Médica & VeraCrypt Forensics
  'cyber-cai1b': {
    id: 'cyber-cai1b',
    code: 'FORENSICS-01B',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Cifragem CBC / ChaCha20', en: 'CBC / ChaCha20 Mode', es: 'Modo CBC / ChaCha20' },
        banner: {
          'pt-br': 'Cenário Seguro: Raio-X médico criptografado com difusão completa (ruído branco perfeito sem vazamento de silhueta).',
          en: 'Safe Scenario: Medical X-ray encrypted with full block diffusion (perfect white noise, zero silhouette leak).',
          es: 'Escenario Seguro: Rayos X cifrado con difusión completa de bloques (ruido blanco perfecto sin fugas).'
        },
        badge: { 'pt-br': 'Confidencialidade DICOM Garantida', en: 'DICOM Confidentiality Guaranteed', es: 'Confidencialidad DICOM Garantizada' }
      },
      threat: {
        label: { 'pt-br': 'Simulação de Vazamento ECB (Tux Leak)', en: 'ECB Visual Leak Simulation', es: 'Fuga Visual en Modo ECB' },
        banner: {
          'pt-br': 'Cenário de Falha Criptográfica: Modo ECB criptografa blocos idênticos no mesmo texto-cifrado, vazando a anatomia.',
          en: 'Cryptographic Flaw Scenario: ECB mode encrypts identical plaintext blocks into identical cipher blocks, leaking anatomy.',
          es: 'Escenario de Falla Criptográfica: Modo ECB cifra bloques idénticos en idéntica cifra, filtrando la anatomía.'
        },
        badge: { 'pt-br': 'Vazamento Estrutural Identificado', en: 'Structural Information Leak Found', es: 'Fuga Estructural Identificada' }
      }
    },
    nodes: [
      {
        id: 'dicom_raw',
        icon: 'fas fa-x-ray',
        title: { 'pt-br': 'Imagem de Raio-X', en: 'Medical X-Ray Image', es: 'Imagen de Rayos X' },
        tech: 'DICOM / BMP 24-bit',
        what: {
          'pt-br': 'Exame radiológico digital de alta resolução contendo estruturas ósseas e patologias confidenciais do paciente.',
          en: 'High-resolution digital radiology scan containing confidential skeletal anatomy.',
          es: 'Examen radiológico digital de alta resolución con estructuras óseas confidenciales.'
        },
        mechanism: {
          'pt-br': 'Matriz de pixels contendo regiões com valores repetidos (fundo preto puro e tecidos de densidade uniforme).',
          en: 'Pixel matrix featuring repeating color values (pure black background and uniform tissue density).',
          es: 'Matriz de píxeles con valores de color repetidos (fondo negro puro y tejidos homogéneos).'
        },
        safeResult: {
          'pt-br': 'Imagem médica bruta carregada para processamento criptográfico seguro',
          en: 'Raw medical image loaded for secure cryptographic encryption benchmark',
          es: 'Imagen médica cargada para procesamiento criptográfico seguro'
        },
        threatResult: {
          'pt-br': 'Imagem carregada para teste de vulnerabilidade de modo de operação ECB',
          en: 'Image loaded to demonstrate operational ECB mode vulnerability',
          es: 'Imagen cargada para prueba de vulnerabilidad del modo ECB'
        },
        threatBlocked: false
      },
      {
        id: 'mode_selection',
        icon: 'fas fa-sliders',
        title: { 'pt-br': 'Modo de Cifra', en: 'Cipher Mode Selection', es: 'Selección de Modo de Cifra' },
        tech: 'ECB vs CBC vs ChaCha20',
        what: {
          'pt-br': 'Escolha do algoritmo e modo de operação: AES-256 em modo ECB (eletrônico), CBC (encadeado) ou ChaCha20.',
          en: 'Selection of cipher mode: AES-256 in ECB (electronic codebook), CBC (chained), or ChaCha20.',
          es: 'Selección del modo: AES-256 en modo ECB (codebook), CBC (encadenado) o ChaCha20.'
        },
        mechanism: {
          'pt-br': 'No modo CBC, cada bloco é submetido a XOR com o bloco cifrado anterior antes de cifrar, usando IV aleatório.',
          en: 'In CBC mode, each block is XORed with previous cipher block before encryption using fresh IV.',
          es: 'En modo CBC, cada bloque se procesa con XOR del bloque anterior usando un IV aleatorio.'
        },
        safeResult: {
          'pt-br': 'Modo selecionado: AES-256-CBC com Vetor de Inicialização (IV) aleatório de 16 bytes',
          en: 'Selected mode: AES-256-CBC with fresh 16-byte random Initialization Vector (IV)',
          es: 'Modo seleccionado: AES-256-CBC con Vector de Inicialización (IV) aleatorio de 16 bytes'
        },
        threatResult: {
          'pt-br': 'ALERTA: Modo AES-ECB selecionado (sem vetor de inicialização nem encadeamento)',
          en: 'WARNING: AES-ECB mode selected (lacks initialization vector and block chaining)',
          es: 'ALERTA: Modo AES-ECB seleccionado (sin vector de inicialización ni encadenamiento)'
        },
        threatBlocked: false
      },
      {
        id: 'diffusion_test',
        icon: 'fas fa-chart-line',
        title: { 'pt-br': 'Difusão & Entropia', en: 'Diffusion & Entropy', es: 'Difusión y Entropía' },
        tech: 'Entropia de Shannon (H)',
        what: {
          'pt-br': 'Medição matemática da aleatoriedade dos bytes resultantes no arquivo cifrado para atestar difusão.',
          en: 'Mathematical measurement of byte randomness in resulting ciphertext to verify diffusion.',
          es: 'Medición matemática de la aleatoriedad de bytes en el archivo cifrado (difusión).'
        },
        mechanism: {
          'pt-br': 'Cálculo de Entropia: `H = - sum(P(i) * log2(P(i)))`. Cifras seguras devem apresentar valor próximo ao teto teórico de 8.000.',
          en: 'Entropy calculation: `H = - sum(P(i) * log2(P(i)))`. Secure ciphers must achieve near 8.000 bits.',
          es: 'Cálculo de Entropía: Cifras seguras deben aproximarse al límite teórico de 8.000 bits.'
        },
        safeResult: {
          'pt-br': 'Entropia: 7.998 bits/byte (Ruído pseudoaleatório perfeito, difusão máxima)',
          en: 'Entropy: 7.998 bits/byte (Perfect pseudorandom noise, maximum diffusion)',
          es: 'Entropía: 7.998 bits/byte (Ruido pseudoaleatorio perfecto, máxima difusión)'
        },
        threatResult: {
          'pt-br': 'VAZAMENTO DETECTADO: Entropia anormal e padrões repetidos no modo ECB!',
          en: 'LEAK DETECTED: Anomaly in entropy and repetitive patterns in ECB mode!',
          es: '¡FUGA DETECTADA: Entropía anómala y patrones repetitivos en modo ECB!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Vazamento de Informação Visual Comprovado! No modo ECB, blocos de pixels idênticos no raio-X geram blocos cifrados exatamente iguais. O perito consegue reconstruir o contorno anatômico completo da imagem médica sem quebrar a chave criptográfica!',
          en: 'Visual Information Leakage Proven! In ECB mode, identical plaintext pixel blocks generate identical ciphertext blocks. An investigator can visually reconstruct the patient skeletal outline without knowing the key!',
          es: '¡Fuga de Información Visual Comprobada! En modo ECB, bloques idénticos generan cifras idénticas. ¡El perito puede reconstruir el contorno anatómico completo sin conocer la clave!'
        }
      },
      {
        id: 'forensic_analysis',
        icon: 'fas fa-microscope',
        title: { 'pt-br': 'Análise Pericial', en: 'Forensic Reconstruction', es: 'Análisis Pericial' },
        tech: 'Forensics & Cryptanalysis',
        what: {
          'pt-br': 'Inspeção pericial comparando o histograma do arquivo original versus o arquivo cifrado para emissão de laudo.',
          en: 'Forensic inspection comparing plaintext histogram vs ciphertext for legal reporting.',
          es: 'Inspección pericial comparando histogramas para la emisión del dictamen forense.'
        },
        safeResult: {
          'pt-br': 'Laudo Pericial: Cifra AES-CBC/ChaCha20 aprovada sem vazamento estrutural',
          en: 'Forensic Report: AES-CBC/ChaCha20 certified with zero structural leakage',
          es: 'Dictamen Pericial: Cifra AES-CBC/ChaCha20 aprobada sin fugas estructurales'
        },
        threatResult: {
          'pt-br': 'Laudo Pericial: Modo ECB classificado como CRÍTICO por não garantir confidencialidade',
          en: 'Forensic Report: ECB classified as CRITICAL flaw failing confidentiality',
          es: 'Dictamen Pericial: Modo ECB clasificado como CRÍTICO por no garantizar confidencialidad'
        },
        threatBlocked: false
      },
      {
        id: 'veracrypt_vault',
        icon: 'fas fa-hard-drive',
        title: { 'pt-br': 'Perícia em VeraCrypt', en: 'VeraCrypt Forensics', es: 'Peritaje en VeraCrypt' },
        tech: 'VeraCrypt Volume Header',
        what: {
          'pt-br': 'Auditoria de contêiner cifrado VeraCrypt apreendido, análise forense de cabeçalhos ocultos e quebra controlada.',
          en: 'Seized VeraCrypt encrypted container audit, hidden header parsing, and controlled recovery.',
          es: 'Auditoría de contenedor VeraCrypt incautado, análisis de cabeceras y recuperación controlada.'
        },
        safeResult: {
          'pt-br': 'Integridade forense comprovada e artefatos de custódia preservados com hash SHA-256.',
          en: 'Forensic chain of custody maintained with SHA-256 image hashes.',
          es: 'Cadena de custodia forense preservada con hashes SHA-256 certificados.'
        },
        threatResult: {
          'pt-br': 'Auditoria forense documentou a vulnerabilidade e recomendou migração para CBC/GCM.',
          en: 'Forensic audit documented flaw and enforced migration to CBC/GCM.',
          es: 'Auditoría forense documentó la falla y recomendó migración a CBC/GCM.'
        },
        threatBlocked: false
      }
    ]
  },

  // 7. StegoMed Audit — Esteganografia LSB & ECB Forensic Leak
  'cyber-cai2b': {
    id: 'cyber-cai2b',
    code: 'STEGO-AUDIT-02B',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Injeção Esteganográfica LSB', en: 'LSB Steganography Injection', es: 'Inyección Esteganográfica LSB' },
        banner: {
          'pt-br': 'Cenário Sigiloso: Dados médicos confidenciais embutidos no Bit Menos Significante (LSB) dos pixels com Delta-E indetectável.',
          en: 'Covert Scenario: Confidential medical payload embedded in pixel Least Significant Bit (LSB) with imperceptible Delta-E.',
          es: 'Escenario Sigiloso: Datos médicos confidenciales incrustados en el LSB de los píxeles con Delta-E imperceptible.'
        },
        badge: { 'pt-br': 'Carga Oculta sem Degradação Visual', en: 'Covert Payload with Zero Visual Degradation', es: 'Carga Oculta sin Degradación Visual' }
      },
      threat: {
        label: { 'pt-br': 'Detecção por Esteganálise (zsteg)', en: 'Steganalysis Detection (zsteg)', es: 'Detección por Esteganálisis (zsteg)' },
        banner: {
          'pt-br': 'Cenário Pericial: Investigador forense roda ferramenta `zsteg` e teste Chi-Quadrado, revelando a carga oculta.',
          en: 'Forensic Scenario: Digital investigator executes `zsteg` and Chi-Square test, discovering hidden payload.',
          es: 'Escenario Pericial: Investigador forense ejecuta `zsteg` y Chi-Cuadrado, revelando la carga oculta.'
        },
        badge: { 'pt-br': 'Esteganografia Revelada por Análise de Bits', en: 'Steganography Exposed by Bit Analysis', es: 'Esteganografía Revelada por Análisis de Bits' }
      }
    },
    nodes: [
      {
        id: 'stego_payload',
        icon: 'fas fa-file-medical',
        title: { 'pt-br': 'Prontuário Médico', en: 'Confidential Payload', es: 'Expediente Confidencial' },
        tech: 'Payload Binário ASCII',
        what: {
          'pt-br': 'Texto com identificação e diagnóstico sigiloso do paciente (`PRONTUARIO_SIGILOSO_4029`) convertido em bits.',
          en: 'Confidential patient diagnostics converted into binary sequence ready for hiding.',
          es: 'Texto con diagnóstico confidencial del paciente convertido en bits.'
        },
        mechanism: {
          'pt-br': 'Conversão de cada caractere ASCII em 8 bits binários (ex: letra "P" = 01010000).',
          en: 'Conversion of each character into 8-bit binary stream (e.g. char "P" = 01010000).',
          es: 'Conversión de cada carácter en flujo binario de 8 bits.'
        },
        safeResult: {
          'pt-br': 'Payload preparado: 36 bytes codificados em 288 bits binários',
          en: 'Payload prepared: 36 bytes encoded into 288 binary bits',
          es: 'Payload preparado: 36 bytes codificados en 288 bits binarios'
        },
        threatResult: {
          'pt-br': 'Perito forense inicia varredura de imagens suspeitas apreendidas',
          en: 'Forensic examiner begins inspecting seized suspicious medical images',
          es: 'Perito forense inicia escaneo de imágenes sospechosas incautadas'
        },
        threatBlocked: false
      },
      {
        id: 'lsb_embedding',
        icon: 'fas fa-wand-magic-sparkles',
        title: { 'pt-br': 'Injeção Espacial LSB', en: 'Spatial LSB Embedding', es: 'Inyección Espacial LSB' },
        tech: 'Least Significant Bit (b0)',
        what: {
          'pt-br': 'O bit menos significativo de cada canal de cor (R, G, B) de cada pixel da imagem médica é substituído pelo bit secreto.',
          en: 'Least significant bit (bit 0) of RGB color channels is replaced by payload bits.',
          es: 'El bit menos significativo de los canales RGB de los píxeles se reemplaza con bits secretos.'
        },
        mechanism: {
          'pt-br': 'Modificação de valor numérico máxima de 1 unidade em 255 (variação < 0.39%), imperceptível aos olhos humanos.',
          en: 'Color value alteration capped at 1 unit in 255 (<0.39%), invisible to human perception.',
          es: 'Modificación de color máxima de 1 unidad en 255 (<0.39%), imperceptible al ojo humano.'
        },
        safeResult: {
          'pt-br': 'Delta-E de cor: 0.07 (Limiar de percepção humana: 2.30) &rarr; 100% invisível!',
          en: 'Color Delta-E: 0.07 (Human eye threshold: 2.30) &rarr; 100% invisible!',
          es: 'Delta-E de color: 0.07 (Umbral humano: 2.30) &rarr; ¡100% invisible!'
        },
        threatResult: {
          'pt-br': 'A imagem transporta bits secretos embutidos no plano b0',
          en: 'Image carries covert bits embedded into spatial bitplane b0',
          es: 'La imagen transporta bits secretos incrustados en plano b0'
        },
        threatBlocked: false
      },
      {
        id: 'carrier_image',
        icon: 'fas fa-image',
        title: { 'pt-br': 'Imagem Transportadora', en: 'Stego-Carrier Image', es: 'Imagen Transportadora' },
        tech: 'Stego Image BMP/PNG',
        what: {
          'pt-br': 'O exame radiológico parece perfeitamente normal e idêntico ao original em qualquer visualizador de imagens hospitalar.',
          en: 'X-ray image looks perfectly ordinary and identical to original in hospital viewers.',
          es: 'La radiografía parece perfectamente normal en visualizadores hospitalarios.'
        },
        mechanism: {
          'pt-br': 'Canal de comunicação encoberto: tráfego de imagens médicas comuns transportando dados sensíveis sem levantar suspeitas.',
          en: 'Covert communication channel: benign medical image traffic carrying sensitive payload.',
          es: 'Canal de comunicación encubierto: tráfico médico transportando datos confidenciales.'
        },
        safeResult: {
          'pt-br': 'Imagem transmitida pelo canal sem levantar alertas em firewalls de conteúdo',
          en: 'Image transferred across wire without alerting standard content inspection firewalls',
          es: 'Imagen transmitida sin alertar firewalls de inspección de contenido'
        },
        threatResult: {
          'pt-br': 'Imagem é submetida a estação forense com ferramentas especializadas',
          en: 'Image submitted to forensic laboratory with specialized steganalysis tooling',
          es: 'Imagen sometida a laboratorio forense con herramientas de esteganálisis'
        },
        threatBlocked: false
      },
      {
        id: 'zsteg_steganalysis',
        icon: 'fas fa-magnifying-glass',
        title: { 'pt-br': 'Esteganálise (zsteg)', en: 'Steganalysis (zsteg)', es: 'Esteganálisis (zsteg)' },
        tech: 'zsteg & Chi-Square Test',
        what: {
          'pt-br': 'O perito forense analisa a variância estatística dos planos de bits e aplica testes matemáticos de Chi-Quadrado.',
          en: 'Forensic investigator parses bitplanes and runs Chi-Square statistical variance test.',
          es: 'Perito forense analiza varianza estadística de planos de bits y prueba Chi-Cuadrado.'
        },
        mechanism: {
          'pt-br': '`zsteg` testa ordens de bits (b1,lsb,bgr) e detecta anomalias de entropia artificial que quebram a naturalidade do ruído.',
          en: '`zsteg` tests bit combinations (b1,lsb,bgr) uncovering artificial entropy anomalies.',
          es: '`zsteg` prueba combinaciones de bits identificando anomalías artificiales de entropía.'
        },
        safeResult: {
          'pt-br': 'Carga oculta protegida caso combinada com cifra prévia (AES)',
          en: 'Covert payload secure when combined with prior AES encryption layer',
          es: 'Carga oculta protegida si se combina con cifrado previo (AES)'
        },
        threatResult: {
          'pt-br': 'ESTEGANOGRAFIA DETECTADA! String ASCII `PRONTUARIO_SIGILOSO` extraída do plano b1,bgr!',
          en: 'STEGANOGRAPHY UNCOVERED! String `PRONTUARIO_SIGILOSO` extracted from b1,bgr!',
          es: '¡ESTEGANOGRAFÍA REVELADA! String `PRONTUARIO_SIGILOSO` extraída del plano b1,bgr!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'A esteganografia simples foi desmascarada! A ferramenta forense `zsteg` identificou que o Bit Menos Significante (b1,bgr,lsb) apresentava uma distribuição estatística não natural e extraiu com sucesso a mensagem confidencial escondida!',
          en: 'Steganography Uncovered! Forensic tool `zsteg` identified unnatural statistical variance in Least Significant Bits (b1,bgr,lsb) and extracted the hidden confidential record without error!',
          es: '¡Esteganografía Desvelada! La herramienta forense `zsteg` identificó varianza estadística no natural en los bits LSB y extrajo con éxito el expediente confidencial oculto!'
        }
      },
      {
        id: 'ecb_reconstruction_node',
        icon: 'fas fa-eye',
        title: { 'pt-br': 'Reconstrução ECB', en: 'ECB Leak Recovery', es: 'Reconstrucción Fuga ECB' },
        tech: 'Visual Cryptanalysis',
        what: {
          'pt-br': 'Demonstração de reconstrução direta da assinatura do médico caso a mensagem tenha sido previamente cifrada com ECB.',
          en: 'Demonstration of direct visual signature recovery if payload was encrypted using ECB.',
          es: 'Demostración de reconstrucción visual de la firma si el payload fue cifrado con ECB.'
        },
        safeResult: {
          'pt-br': 'Conclusão: Esteganografia médica exige camadas híbridas de criptografia CBC e assinatura digital.',
          en: 'Conclusion: Medical steganography requires hybrid CBC encryption and digital signatures.',
          es: 'Conclusión: La esteganografía médica exige capas híbridas de cifrado CBC y firmas digitales.'
        },
        threatResult: {
          'pt-br': 'Laudo pericial comprova vulnerabilidade de cifras puras de blocos sem IV.',
          en: 'Forensic assessment proves weakness of block ciphers without initialization vectors.',
          es: 'Dictamen forense comprueba vulnerabilidad de cifras de bloques sin IV.'
        },
        threatBlocked: false
      }
    ]
  },

  // 8. SaltBreaker & HMAC-Shield — Criptoanálise SHA-256 & Exaustão
  'cyber-cai1a': {
    id: 'cyber-cai1a',
    code: 'CRYPTOANALYSIS-01A',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Arquitetura Fortificada (256-bit)', en: 'Hardened Architecture (256-bit)', es: 'Arquitectura Fortificada (256-bit)' },
        banner: {
          'pt-br': 'Cenário Seguro: Uso de chave HMAC completa de 256 bits e TLS 1.3 tornando qualquer exaustão computacional impossível.',
          en: 'Safe Scenario: Full 256-bit HMAC key and TLS 1.3 making key exhaustion computationally impossible.',
          es: 'Escenario Seguro: Clave HMAC de 256 bits y TLS 1.3 haciendo imposible cualquier ataque de fuerza bruta.'
        },
        badge: { 'pt-br': 'Blindagem Criptográfica Impenetrável', en: 'Impenetrable Cryptographic Defense', es: 'Blindaje Criptográfico Impenetrable' }
      },
      threat: {
        label: { 'pt-br': 'Exaustão de Chave de 32 bits em 4,2s', en: '32-bit Key Exhaustion in 4.2s', es: 'Exhaustión de Clave 32 bits en 4.2s' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Auditoria prova matematicamente que chave HMAC curta de 32 bits é quebrada em apenas 4,2 segundos.',
          en: 'Threat Scenario: Audit mathematically proves short 32-bit HMAC key is brute-forced in only 4.2 seconds.',
          es: 'Escenario Ofensivo: Auditoría prueba que clave HMAC corta de 32 bits se quiebra en solo 4,2 segundos.'
        },
        badge: { 'pt-br': 'Chave Curta Exaurida por Força Bruta', en: 'Short Key Exhausted by Brute Force', es: 'Clave Corta Quebrada por Fuerza Bruta' }
      }
    },
    nodes: [
      {
        id: 'hash_capture',
        icon: 'fas fa-hashtag',
        title: { 'pt-br': 'Captura do Hash Salgado', en: 'Salted Hash Ingestion', es: 'Captura de Hash Salgado' },
        tech: 'SHA-256 + Static Salt',
        what: {
          'pt-br': 'Auditoria identifica credenciais bancárias legadas armazenadas com SHA-256 e salts estáticos codificados em Base64.',
          en: 'Audit identifies legacy credentials stored with SHA-256 and Base64 encoded static salts.',
          es: 'Auditoría identifica credenciales almacenadas con SHA-256 y salts estáticos en Base64.'
        },
        mechanism: {
          'pt-br': 'Decodificação dos valores Base64/Hex e separação do salt para formular a máscara do ataque.',
          en: 'Base64/Hex decoding and salt separation to formulate attack mask parameters.',
          es: 'Decodificación de Base64/Hex y separación del salt para configurar el ataque.'
        },
        safeResult: {
          'pt-br': 'Sistema migrado para funções de derivação modernas resistentes a GPU',
          en: 'System migrated to modern GPU-resistant key derivation functions',
          es: 'Sistema migrado a funciones de derivación modernas resistentes a GPU'
        },
        threatResult: {
          'pt-br': 'Hash SHA-256 com salt estático de 8 bytes isolado para ataque',
          en: 'SHA-256 hash with 8-byte static salt isolated for targeted cracking',
          es: 'Hash SHA-256 con salt estático de 8 bytes aislado para ataque'
        },
        threatBlocked: false
      },
      {
        id: 'hashcat_rules',
        icon: 'fas fa-microchip',
        title: { 'pt-br': 'Ataque Hashcat (-m 1420)', en: 'Hashcat Cracking (-m 1420)', es: 'Ataque Hashcat (-m 1420)' },
        tech: 'Hashcat GPU Rules Engine',
        what: {
          'pt-br': 'Execução de ataques baseados em dicionário com regras combinatórias (Best64) aceleradas por GPU.',
          en: 'Execution of dictionary attack with combinatorial mutation rules (Best64) on GPU.',
          es: 'Ejecución de ataques por diccionario con reglas combinatorias (Best64) en GPU.'
        },
        mechanism: {
          'pt-br': 'Transformações leetspeak, acréscimo de números e sufixos sobre bases de credenciais conhecidas.',
          en: 'Leetspeak mutations, numeric appends, and rule transformations over leaked passwords.',
          es: 'Transformaciones leetspeak, adición de números y sufijos sobre credenciales conocidas.'
        },
        safeResult: {
          'pt-br': 'Senhas com alta entropia e sem padrões previsíveis resistem às mutações',
          en: 'High-entropy passwords without predictable patterns resist mutation attack',
          es: 'Contraseñas con alta entropía y sin patrones predecibles resisten mutaciones'
        },
        threatResult: {
          'pt-br': 'Hashcat recuperou a senha em menos de 18 segundos devido a salt estático previsível',
          en: 'Hashcat cracked password in under 18 seconds due to predictable static salt',
          es: 'Hashcat recuperó la contraseña en menos de 18 segundos por salt estático predecible'
        },
        threatBlocked: false
      },
      {
        id: 'key_exhaustion',
        icon: 'fas fa-stopwatch',
        title: { 'pt-br': 'Exaustão da Chave (32 bits)', en: '32-bit Key Exhaustion', es: 'Exhaustión de Clave (32 bits)' },
        tech: 'Espaço Amostral 2^32',
        what: {
          'pt-br': 'Auditoria avalia a robustez de uma chave HMAC curta truncada em 32 bits (4.294.967.296 combinações).',
          en: 'Audit evaluates mathematical resilience of a 32-bit truncated HMAC key (2^32 space).',
          es: 'Auditoría evalúa robustez de clave HMAC truncada en 32 bits (2^32 combinaciones).'
        },
        mechanism: {
          'pt-br': 'Com taxa de 1.025 MH/s em GPU moderna, o espaço total de 2^32 chaves é exaurido em apenas 4,19 segundos.',
          en: 'At 1,025 MH/s on modern GPU, entire 2^32 keyspace is exhausted in just 4.19 seconds.',
          es: 'A 1.025 MH/s en GPU moderna, el espacio total de 2^32 se agota en 4,19 segundos.'
        },
        safeResult: {
          'pt-br': 'Chave HMAC de 256 bits (2^256 combinações): Exaustão requer mais tempo que a idade do universo!',
          en: 'Full 256-bit HMAC key (2^256): Exhaustion requires more time than universe age!',
          es: 'Clave HMAC de 256 bits (2^256): ¡Exhaustión requiere más tiempo que la edad del universo!'
        },
        threatResult: {
          'pt-br': 'CHAVE HMAC QUEBRADA EM 4.2 SEGUNDOS! Vulnerabilidade crítica comprovada!',
          en: 'HMAC KEY CRACKED IN 4.2 SECONDS! Critical vulnerability proven!',
          es: '¡CLAVE HMAC QUEBRADA EN 4.2 SEGUNDOS! ¡Vulnerabilidad crítica comprobada!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Comprovação Matemática de Vulnerabilidade! O espaço de 32 bits é absurdamente pequeno para a computação moderna. O invasor obteve a chave secreta HMAC em 4,2 segundos e conseguiu forjar mensagens bancárias arbitrárias!',
          en: 'Mathematical Vulnerability Proven! The 32-bit keyspace is drastically insufficient against modern GPUs. The attacker recovered the HMAC secret key in 4.2 seconds and was able to forge arbitrary banking transfers!',
          es: '¡Vulnerabilidad Matemática Comprobada! El espacio de 32 bits es insuficiente para la computación moderna. ¡El atacante obtuvo la clave secreta HMAC en 4,2 segundos!'
        }
      },
      {
        id: 'impact_assessment',
        icon: 'fas fa-triangle-exclamation',
        title: { 'pt-br': 'Avaliação de Impacto', en: 'Risk & Impact Report', es: 'Evaluación de Impacto' },
        tech: 'Análise de Risco CVSS',
        what: {
          'pt-br': 'Elaboração de laudo demonstrando o risco de falsificação de pacotes bancários e ataques de repetição.',
          en: 'Technical reporting demonstrating banking packet forgery risk and replay vulnerabilities.',
          es: 'Elaboración de informe demostrando riesgo de falsificación de paquetes y repetición.'
        },
        safeResult: {
          'pt-br': 'Risco residual nulo após adoção de chaves criptográficas de tamanho padrão',
          en: 'Zero residual risk following standard-sized cryptographic keys enforcement',
          es: 'Riesgo residual nulo tras adopción de claves criptográficas estándar'
        },
        threatResult: {
          'pt-br': 'Risco classificado como CRÍTICO: Chave curta permitia falsificação completa de transações',
          en: 'Risk graded CRITICAL: Weak key allowed complete forgery of financial transfers',
          es: 'Riesgo clasificado como CRÍTICO: Clave corta permitía falsificación de transacciones'
        },
        threatBlocked: false
      },
      {
        id: 'hardened_defense',
        icon: 'fas fa-shield-halved',
        title: { 'pt-br': 'Redesenho Arquitetural', en: 'Architectural Redesign', es: 'Rediseño Arquitectural' },
        tech: 'HMAC-SHA256 (256-bit) & TLS 1.3',
        what: {
          'pt-br': 'Substituição das chaves legadas por chaves de 256 bits, rotação periódica e transporte exclusivo sob TLS 1.3.',
          en: 'Replacement with full 256-bit keys, automated rotation, and transport over strict TLS 1.3.',
          es: 'Sustitución por claves de 256 bits, rotación periódica y transporte exclusivo TLS 1.3.'
        },
        safeResult: {
          'pt-br': 'Arquitetura bancária fortificada com segurança comprovada contra criptoanálise!',
          en: 'Banking architecture hardened with proven resilience against cryptanalysis!',
          es: '¡Arquitectura bancaria fortificada con seguridad comprobada contra criptoanálisis!'
        },
        threatResult: {
          'pt-br': 'Plano de remediação implementado com sucesso eliminando chaves fracas.',
          en: 'Remediation roadmap deployed successfully eliminating weak keys.',
          es: 'Plan de remediación implementado con éxito eliminando claves débiles.'
        },
        threatBlocked: false
      }
    ]
  },

  // 9. SentinelPass — Auditoria de Senhas Bancárias & CVSS v3.1
  'cyber-cai0a': {
    id: 'cyber-cai0a',
    code: 'PASSWORD-AUDIT-01A',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Política Corporativa Fortificada', en: 'Hardened Password Baseline', es: 'Política Corporativa Fortificada' },
        banner: {
          'pt-br': 'Cenário Seguro: Adoção de Passphrases (>16 chars), derivação Argon2id e bloqueio de senhas comuns vazadas.',
          en: 'Safe Scenario: Passphrase enforcement (>16 chars), Argon2id key derivation, and leaked password list blocks.',
          es: 'Escenario Seguro: Adopción de Passphrases (>16 chars), derivación Argon2id y bloqueo de contraseñas filtradas.'
        },
        badge: { 'pt-br': 'Resiliência a Ataques de Força Bruta', en: 'Immunity to Brute Force Attacks', es: 'Inmunidad a Fuerza Bruta' }
      },
      threat: {
        label: { 'pt-br': 'Simulação Ofensiva de Quebra de Senhas', en: 'Offensive Cracking Simulation', es: 'Simulación Ofensiva de Quiebre' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Auditoria identifica que 68% dos colaboradores utilizam variações previsíveis de senhas.',
          en: 'Threat Scenario: Audit reveals 68% of employees use predictable password mutations easily cracked.',
          es: 'Escenario Ofensivo: Auditoría revela que el 68% de colaboradores usa variaciones predecibles de contraseñas.'
        },
        badge: { 'pt-br': '68% das Senhas Quebradas em 10 Minutos', en: '68% of Passwords Cracked in 10 Min', es: '68% de Contraseñas Quebradas en 10 Min' }
      }
    },
    nodes: [
      {
        id: 'policy_ingest',
        icon: 'fas fa-id-card',
        title: { 'pt-br': 'Ingestão de Credenciais', en: 'Credential Ingestion', es: 'Ingestión de Credenciales' },
        tech: 'Active Directory / LDAP',
        what: {
          'pt-br': 'Coleta de amostras anônimas de credenciais corporativas bancárias e parâmetros da política vigente.',
          en: 'Sanitized sample collection of corporate banking credentials and active domain policy.',
          es: 'Recolección de muestras anónimas de credenciales bancarias y parámetros de política.'
        },
        mechanism: {
          'pt-br': 'Avaliação dos requisitos legados: mínimo de 8 caracteres, maiúsculas, minúsculas e números.',
          en: 'Evaluation of legacy complexity requirements: 8-char minimum, upper, lower, and digits.',
          es: 'Evaluación de requisitos de complejidad: 8 caracteres, mayúsculas, minúsculas y números.'
        },
        safeResult: {
          'pt-br': 'Nova política exige mínimo de 16 caracteres ou passphrases multifator',
          en: 'New baseline enforces 16-character minimum or multi-word passphrases',
          es: 'Nueva política exige mínimo de 16 caracteres o frases de contraseña'
        },
        threatResult: {
          'pt-br': 'Política legada permite senhas curtas previsíveis (ex: `Empresa@2024`)',
          en: 'Legacy policy allows predictable short patterns (e.g. `Company@2024`)',
          es: 'Política obsoleta permite contraseñas cortas predecibles (ej: `Empresa@2024`)'
        },
        threatBlocked: false
      },
      {
        id: 'entropy_eval',
        icon: 'fas fa-gauge-high',
        title: { 'pt-br': 'Medição de Entropia', en: 'Shannon Entropy Check', es: 'Medición de Entropía' },
        tech: 'Shannon Entropy Bits',
        what: {
          'pt-br': 'Cálculo da entropia de informação em bits e cruzamento com a lista HaveIBeenPwned de bilhões de senhas vazadas.',
          en: 'Calculation of information entropy in bits and cross-reference with HaveIBeenPwned breach list.',
          es: 'Cálculo de entropía en bits y cotejo con listas HaveIBeenPwned de brechas conocidas.'
        },
        mechanism: {
          'pt-br': '`H = L * log2(N)`. Senhas previsíveis com substituições triviais (ex: `@` por `a`) oferecem entropia real inferior a 28 bits.',
          en: '`H = L * log2(N)`. Predictable patterns offer actual entropy below 28 bits.',
          es: '`H = L * log2(N)`. Patrones predecibles ofrecen entropía real inferior a 28 bits.'
        },
        safeResult: {
          'pt-br': 'Entropia calculada: > 75 bits (Imune a ataques de dicionário pré-computados)',
          en: 'Calculated entropy: > 75 bits (Immune to pre-computed dictionary attacks)',
          es: 'Entropía calculada: > 75 bits (Inmune a ataques de diccionario)'
        },
        threatResult: {
          'pt-br': 'FALHA DE COMPLEXIDADE: Entropia real de apenas 26 bits identificada na amostra!',
          en: 'COMPLEXITY FAILURE: Real entropy of only 26 bits detected in sample!',
          es: '¡FALLA DE COMPLEJIDAD: Entropía real de apenas 26 bits detectada en la muestra!'
        },
        threatBlocked: false
      },
      {
        id: 'hashcat_rules_pass',
        icon: 'fas fa-skull',
        title: { 'pt-br': 'Ataque de Mutação', en: 'Rule-Based Cracking', es: 'Ataque de Mutación' },
        tech: 'Hashcat Best64 / OneRule',
        what: {
          'pt-br': 'Simulação ofensiva aplicando mutações de regras sobre palavras-chave do dicionário corporativo.',
          en: 'Offensive cracking applying mutation rules over corporate dictionary keywords.',
          es: 'Simulación ofensiva aplicando reglas sobre palabras clave del diccionario corporativo.'
        },
        mechanism: {
          'pt-br': 'Mutações de capitalização, inversão de palavras, sufixos de anos (2023, 2024, 2025) e pontuação padrão.',
          en: 'Capitalization toggles, word reversals, current year appends, and common symbols.',
          es: 'Alternancia de mayúsculas, adición de años (2024, 2025) y símbolos comunes.'
        },
        safeResult: {
          'pt-br': '0 senhas quebradas após bateria intensiva de regras combinatórias',
          en: '0 passwords cracked after intensive combinatorial rule mutations',
          es: '0 contraseñas quebradas tras batería intensiva de mutaciones'
        },
        threatResult: {
          'pt-br': 'VULNERABILIDADE: 68% das credenciais foram quebradas em menos de 10 minutos!',
          en: 'VULNERABILITY: 68% of credentials were recovered in less than 10 minutes!',
          es: '¡VULNERABILIDAD: 68% de las credenciales fueron quebradas en menos de 10 minutos!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Fragilidade Crítica de Senhas Comprovada! A auditoria com o Hashcat demonstrou que a política antiga de 8 caracteres falha miseravelmente contra mutações baseadas em regras. O invasor quebraria a maioria das contas de colaboradores sem esforço computacional elevado!',
          en: 'Critical Password Fragility Proven! Hashcat audit proved legacy 8-character policies fail against rule mutations. An attacker would compromise most employee accounts with trivial compute resources!',
          es: '¡Fragilidad Crítica de Contraseñas Comprobada! La auditoría con Hashcat demostró que la política de 8 caracteres falla contra mutaciones por reglas. ¡El atacante comprometería cuentas con facilidad!'
        }
      },
      {
        id: 'cvss_scoring',
        icon: 'fas fa-calculator',
        title: { 'pt-br': 'Scoring CVSS v3.1', en: 'CVSS v3.1 Scoring', es: 'Scoring CVSS v3.1' },
        tech: 'CVSS v3.1 Score: 8.8 (High)',
        what: {
          'pt-br': 'Cálculo formal da métrica de vulnerabilidade ponderando vetor de ataque em rede, baixa complexidade e alto impacto.',
          en: 'Formal scoring weighting Network attack vector, Low complexity, and High impact.',
          es: 'Cálculo formal de vulnerabilidad ponderando vector de red, baja complejidad y alto impacto.'
        },
        mechanism: {
          'pt-br': 'Vetor: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` classificando a vulnerabilidade como severidade Alta (8.8).',
          en: 'Vector: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` classifying flaw as High (8.8).',
          es: 'Vector: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H` clasificando la falla como Alta (8.8).'
        },
        safeResult: {
          'pt-br': 'Risco CVSS residual mitigado para nível Baixo/Informativo',
          en: 'Residual CVSS risk mitigated to Low/Informational status',
          es: 'Riesgo CVSS residual mitigado a nivel Bajo/Informativo'
        },
        threatResult: {
          'pt-br': 'Laudo oficial emitido com pontuação CVSS 8.8 exigindo remediação urgente',
          en: 'Official report issued with CVSS 8.8 requiring mandatory urgent remediation',
          es: 'Informe oficial emitido con CVSS 8.8 exigiendo remediación urgente'
        },
        threatBlocked: false
      },
      {
        id: 'remediated_baseline',
        icon: 'fas fa-shield-halved',
        title: { 'pt-br': 'Baseline Fortificado', en: 'Hardened Baseline', es: 'Baseline Fortificado' },
        tech: 'Argon2id + FIDO2 WebAuthn',
        what: {
          'pt-br': 'Adoção mandatória de KDF resistente a memória (Argon2id), passphrases longas e autenticação multifator via chaves físicas FIDO2.',
          en: 'Mandatory migration to memory-hard KDF (Argon2id), long passphrases, and FIDO2 MFA.',
          es: 'Migración obligatoria a Argon2id, frases de contraseña largas y MFA vía llaves FIDO2.'
        },
        safeResult: {
          'pt-br': 'Superfície de autenticação corporativa 100% blindada contra ataques de força bruta!',
          en: 'Corporate authentication perimeter 100% shielded against brute force attempts!',
          es: '¡Superficie de autenticación corporativa 100% blindada contra ataques de fuerza bruta!'
        },
        threatResult: {
          'pt-br': 'Diretoria bancária aprovou novo padrão corporativo eliminando senhas curtas.',
          en: 'Bank board approved new security policy standard eliminating short passwords.',
          es: 'Dirección bancaria aprobó nuevo estándar corporativo eliminando contraseñas cortas.'
        },
        threatBlocked: false
      }
    ]
  },

  // 10. MerkleGuard — Árvores de Merkle & Colisão MD5
  'cyber-cai0b': {
    id: 'cyber-cai0b',
    code: 'MERKLE-GUARD-01B',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Integridade O(log N) SHA-256', en: 'O(log N) SHA-256 Integrity', es: 'Integridad O(log N) SHA-256' },
        banner: {
          'pt-br': 'Cenário Seguro: Árvore de Merkle binária calculada via SHA-256 permitindo auditoria criptográfica instantânea.',
          en: 'Safe Scenario: Binary Merkle tree computed via SHA-256 enabling instant cryptographic tamper audit.',
          es: 'Escenario Seguro: Árbol de Merkle binario calculado con SHA-256 permitiendo auditoría criptográfica instantánea.'
        },
        badge: { 'pt-br': 'Raiz de Merkle Válida e Imutável', en: 'Merkle Root Valid & Immutable', es: 'Raíz de Merkle Válida e Inmutable' }
      },
      threat: {
        label: { 'pt-br': 'Detecção de Adulteração & Colisão MD5', en: 'Tamper Detection & MD5 Collision', es: 'Detección de Adulteración y Colisión MD5' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Alteração de 1 bit na transação L2 faz a raiz divergir; demonstração da falha histórica de colisão MD5.',
          en: 'Threat Scenario: 1-bit tampering on transaction L2 causes root mismatch; demo of historical MD5 collision flaw.',
          es: 'Escenario Ofensivo: Alteración de 1 bit en L2 causa divergencia de la raíz; demostración de colisión MD5.'
        },
        badge: { 'pt-br': 'Adulteração Detectada Instantaneamente', en: 'Tampering Detected Instantly', es: 'Adulteración Detectada al Instante' }
      }
    },
    nodes: [
      {
        id: 'data_blocks_node',
        icon: 'fas fa-database',
        title: { 'pt-br': 'Blocos de Transações', en: 'Transaction Blocks', es: 'Bloques de Transacciones' },
        tech: 'L1, L2, L3, L4 Records',
        what: {
          'pt-br': 'Quatro transações contábeis brutas de transferências bancárias divididas em blocos de dados ordenados.',
          en: 'Four raw financial transaction records partitioned into ordered data blocks.',
          es: 'Cuatro transacciones contables bancarias divididas en bloques de datos ordenados.'
        },
        mechanism: {
          'pt-br': 'Cada registro possui identificador único, emissor, destinatário e montante financeiro em formato canônico.',
          en: 'Each record contains unique ID, sender, recipient, and financial amount in canonical format.',
          es: 'Cada registro posee identificador único, emisor, receptor y monto en formato canónico.'
        },
        safeResult: {
          'pt-br': '4 blocos válidos carregados: L1 (R$ 100), L2 (R$ 250), L3 (R$ 500), L4 (R$ 1.000)',
          en: '4 valid blocks loaded: L1 ($100), L2 ($250), L3 ($500), L4 ($1,000)',
          es: '4 bloques válidos cargados: L1 (R$ 100), L2 (R$ 250), L3 (R$ 500), L4 (R$ 1.000)'
        },
        threatResult: {
          'pt-br': 'Invasor altera o valor do bloco L2 de R$ 250 para R$ 25.000 na base de dados',
          en: 'Attacker alters transaction L2 amount from $250 to $25,000 in database',
          es: 'Invasor altera el monto del bloque L2 de R$ 250 a R$ 25.000 en la base de datos'
        },
        threatBlocked: false
      },
      {
        id: 'leaf_hashing_node',
        icon: 'fas fa-leaf',
        title: { 'pt-br': 'Hashes Folha (H1..H4)', en: 'Leaf Hashes (H1..H4)', es: 'Hashes Hoja (H1..H4)' },
        tech: 'SHA-256 Leaf Nodes',
        what: {
          'pt-br': 'Geração dos nós folha da árvore criptográfica: cada transação é resumida individualmente com SHA-256.',
          en: 'Generation of tree leaf nodes: each transaction is individually hashed using SHA-256.',
          es: 'Generación de nodos hoja: cada transacción se procesa individualmente con SHA-256.'
        },
        mechanism: {
          'pt-br': '`H1 = SHA256(L1)`, `H2 = SHA256(L2)`, `H3 = SHA256(L3)`, `H4 = SHA256(L4)`. Imutabilidade garantida por folha.',
          en: '`H1 = SHA256(L1)`, `H2 = SHA256(L2)`, etc. Guaranteed leaf-level immutability.',
          es: '`H1 = SHA256(L1)`, `H2 = SHA256(L2)`, etc. Inmutabilidad garantizada por hoja.'
        },
        safeResult: {
          'pt-br': 'Folhas calculadas com sucesso: Hashes criptográficos de 256 bits gerados',
          en: 'Leaves computed successfully: 256-bit cryptographic hashes generated',
          es: 'Hojas calculadas con éxito: Hashes criptográficos de 256 bits generados'
        },
        threatResult: {
          'pt-br': 'Hash H2 recalculado sobre a transação adulterada gera valor divergente!',
          en: 'Hash H2 recomputed on tampered transaction produces divergent hash value!',
          es: '¡Hash H2 recalculado sobre la transacción adulterada genera valor divergente!'
        },
        threatBlocked: false
      },
      {
        id: 'branch_hashing_node',
        icon: 'fas fa-code-fork',
        title: { 'pt-br': 'Nós Intermediários', en: 'Intermediate Branches', es: 'Nodos Intermedios' },
        tech: 'Pairwise Concatenation',
        what: {
          'pt-br': 'Agregação dos hashes em pares: o nó H12 resume H1 e H2; o nó H34 resume H3 e H4.',
          en: 'Pairwise hash aggregation: node H12 summarizes H1 & H2; node H34 summarizes H3 & H4.',
          es: 'Agregación de hashes en pares: el nodo H12 resume H1 y H2; el nodo H34 resume H3 y H4.'
        },
        mechanism: {
          'pt-br': '`H12 = SHA256(H1 || H2)` e `H34 = SHA256(H3 || H4)`. Permite provar a inclusão de qualquer dado com apenas O(log N) hashes.',
          en: '`H12 = SHA256(H1 || H2)` and `H34 = SHA256(H3 || H4)`. Enables O(log N) inclusion proofs.',
          es: '`H12 = SHA256(H1 || H2)` y `H34 = SHA256(H3 || H4)`. Permite auditoría en O(log N).'
        },
        safeResult: {
          'pt-br': 'Ramos intermediários H12 e H34 derivados com sucesso',
          en: 'Intermediate branches H12 and H34 derived successfully',
          es: 'Ramas intermedias H12 y H34 derivadas con éxito'
        },
        threatResult: {
          'pt-br': 'O ramo H12 é imediatamente corrompido pela alteração propagada da folha H2',
          en: 'Branch H12 is immediately corrupted by the propagated alteration from leaf H2',
          es: 'La rama H12 se corrompe de inmediato por la alteración propagada de H2'
        },
        threatBlocked: false
      },
      {
        id: 'merkle_root_node',
        icon: 'fas fa-tree',
        title: { 'pt-br': 'Raiz de Merkle (Root)', en: 'Merkle Root Hash', es: 'Raíz de Merkle (Root)' },
        tech: 'Root = SHA256(H12 || H34)',
        what: {
          'pt-br': 'A Raiz de Merkle resume toda a base em um único hash de 32 bytes publicado publicamente para ancoragem.',
          en: 'The Merkle Root summarizes the entire dataset into a single 32-byte master hash.',
          es: 'La Raíz de Merkle resume toda la base en un único hash maestro de 32 bytes.'
        },
        mechanism: {
          'pt-br': 'Propriedade criptográfica: Qualquer alteração em qualquer transação altera a raiz final irreversivelmente.',
          en: 'Cryptographic property: Any single bit change in any transaction irreversibly changes root.',
          es: 'Propiedad criptográfica: Cualquier cambio en cualquier bloque altera la raíz final.'
        },
        safeResult: {
          'pt-br': 'Raiz Mestre calculada: `8e4d2a1b...` (Base 100% íntegra e verificada)',
          en: 'Master Root computed: `8e4d2a1b...` (Dataset 100% integral and verified)',
          es: 'Raíz Maestra calculada: `8e4d2a1b...` (Base 100% íntegra y verificada)'
        },
        threatResult: {
          'pt-br': 'RAIZ DIVERGENTE! Raiz recalculada `4c1b9f...` não coincide com a âncora `8e4d2a...`!',
          en: 'ROOT MISMATCH! Recomputed root `4c1b9f...` differs from anchored root `8e4d2a...`!',
          es: '¡RAÍZ DIVERGENTE! La raíz recalculada no coincide con la raíz anclada oficial.'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Tentativa de Fraude Detectada pela Árvore de Merkle! A alteração do valor na transação L2 propagou-se pela árvore e alterou a Raiz de Merkle final. A auditoria O(log N) identificou exatamente o bloco fraudado em milissegundos!',
          en: 'Fraud Attempt Caught by Merkle Tree! Tampering with transaction L2 propagated up the tree and invalidated the Merkle Root. The O(log N) audit precisely pinpointed the tampered block in milliseconds!',
          es: '¡Fraude Detectado por el Árbol de Merkle! La alteración del monto en L2 se propagó por el árbol e invalidó la Raíz. ¡La auditoría O(log N) identificó el bloque fraudulento al instante!'
        }
      },
      {
        id: 'collision_md5_node',
        icon: 'fas fa-bug',
        title: { 'pt-br': 'Análise de Colisão MD5', en: 'MD5 Collision Audit', es: 'Análisis Colisión MD5' },
        tech: 'Chosen-Prefix Collision (Rogue CA)',
        what: {
          'pt-br': 'Demonstração teórica e prática do ataque de colisão de prefixo escolhido em MD5 (ataque Rogue CA).',
          en: 'Theoretical and practical demo of MD5 chosen-prefix collision attack (Rogue CA attack).',
          es: 'Demostración del ataque de colisión de prefijo elegido en MD5 (ataque Rogue CA).'
        },
        safeResult: {
          'pt-br': 'Auditoria confirma descarte total de MD5 e adoção estrita de SHA-256 e SHA-3.',
          en: 'Audit confirms complete deprecation of MD5 in favor of strict SHA-256 / SHA-3.',
          es: 'Auditoría confirma descarte total de MD5 y adopción de SHA-256 / SHA-3.'
        },
        threatResult: {
          'pt-br': 'Prova técnica de que MD5 permite gerar dois certificados distintos com o mesmo hash.',
          en: 'Technical proof showing MD5 allows forging two different certificates with identical hash.',
          es: 'Prueba técnica demostrando que MD5 permite forjar certificados con el mismo hash.'
        },
        threatBlocked: false
      }
    ]
  },

  // 11. PGP-TrustChannel — Criptografia Híbrida & Assinatura OpenPGP
  'cyber-cai2a': {
    id: 'cyber-cai2a',
    code: 'PGP-TRUST-02A',
    scenarios: {
      safe: {
        label: { 'pt-br': 'Comunicação Híbrida Aprovada', en: 'Hybrid Communication Approved', es: 'Comunicación Híbrida Aprobada' },
        banner: {
          'pt-br': 'Cenário Seguro: Mensagem cifrada com AES-256, chave simétrica encapsulada com RSA e assinada digitalmente.',
          en: 'Safe Scenario: Message encrypted with AES-256, symmetric key encapsulated with RSA, and digitally signed.',
          es: 'Escenario Seguro: Mensaje cifrado con AES-256, clave simétrica encapsulada con RSA y firmada digitalmente.'
        },
        badge: { 'pt-br': 'Confidencialidade & Não-Repúdio Garantidos', en: 'Confidentiality & Non-repudiation Proven', es: 'Confidencialidad y No-Repudio Garantizados' }
      },
      threat: {
        label: { 'pt-br': 'Tentativa de Adulteração MITM', en: 'MITM Tamper Attempt', es: 'Intento de Adulteración MITM' },
        banner: {
          'pt-br': 'Cenário Ofensivo: Invasor altera 1 caractere no texto em trânsito; a verificação da assinatura digital falha imediatamente.',
          en: 'Threat Scenario: Man-in-the-middle modifies 1 byte in ciphertext; digital signature verification fails instantly.',
          es: 'Escenario Ofensivo: Invasor altera 1 byte en el texto cifrado; la firma digital falla de inmediato.'
        },
        badge: { 'pt-br': 'Assinatura Inválida! Fraude Detectada', en: 'Invalid Signature! Tampering Caught', es: '¡Firma Inválida! Fraude Detectado' }
      }
    },
    nodes: [
      {
        id: 'pgp_message',
        icon: 'fas fa-envelope-open-text',
        title: { 'pt-br': 'Mensagem Confidencial', en: 'Confidential Message', es: 'Mensaje Confidencial' },
        tech: 'Texto Claro + Keyring OpenPGP',
        what: {
          'pt-br': 'Remetente redige mensagem sigilosa e carrega a Chave Pública do Destinatário e sua própria Chave Privada.',
          en: 'Sender writes confidential message and loads Recipient Public Key along with Sender Private Key.',
          es: 'Remitente redacta mensaje confidencial y carga la Clave Pública del Destinatario y su Clave Privada.'
        },
        mechanism: {
          'pt-br': 'Padrão OpenPGP (RFC 4880): Gestão de confiança e integridade baseada em pares de chaves assimétricas.',
          en: 'OpenPGP (RFC 4880) standard: Trust model and integrity based on asymmetric keypairs.',
          es: 'Estándar OpenPGP (RFC 4880): Modelo de confianza basado en pares de claves asimétricas.'
        },
        safeResult: {
          'pt-br': 'Mensagem preparada e chave pública do destinatário verificada no chaveiro',
          en: 'Message prepared and recipient public key verified on trusted keyring',
          es: 'Mensaje preparado y clave pública del destinatario verificada'
        },
        threatResult: {
          'pt-br': 'Mensagem original preparada para envio por canal potencialmente hostil',
          en: 'Original message ready for dispatch over potentially hostile network wire',
          es: 'Mensaje original preparado para envío por canal potencialmente hostil'
        },
        threatBlocked: false
      },
      {
        id: 'session_key_gen',
        icon: 'fas fa-key',
        title: { 'pt-br': 'Chave de Sessão AES', en: 'AES Session Key Generation', es: 'Clave de Sesión AES' },
        tech: 'CSPRNG (AES-256-GCM)',
        what: {
          'pt-br': 'O sistema gera uma chave simétrica efêmera de 256 bits exclusivamente para cifrar o corpo desta mensagem.',
          en: 'System generates an ephemeral 256-bit symmetric session key exclusively for this message payload.',
          es: 'El sistema genera una clave simétrica efímera de 256 bits exclusivamente para este mensaje.'
        },
        mechanism: {
          'pt-br': 'Geração pseudoaleatória criptograficamente segura garantindo que nenhuma chave de sessão se repita.',
          en: 'Cryptographically secure pseudorandom generation ensuring zero session key reuse.',
          es: 'Generación pseudoaleatoria criptográficamente segura asegurando que ninguna clave se repita.'
        },
        safeResult: {
          'pt-br': 'Chave simétrica efêmera de 256 bits gerada na memória volátil',
          en: '256-bit ephemeral symmetric key generated in volatile memory',
          es: 'Clave simétrica efímera de 256 bits generada en memoria volátil'
        },
        threatResult: {
          'pt-br': 'Chave de sessão descartável criada para o transporte seguro',
          en: 'Disposable session key created for secure transport layer',
          es: 'Clave de sesión desechable creada para el transporte seguro'
        },
        threatBlocked: false
      },
      {
        id: 'symmetric_body_encrypt',
        icon: 'fas fa-file-shield',
        title: { 'pt-br': 'Cifragem do Conteúdo', en: 'Payload Encryption', es: 'Cifrado del Contenido' },
        tech: 'AES-256 Simétrico',
        what: {
          'pt-br': 'O texto confidencial é criptografado com a chave de sessão AES-256, oferecendo máxima velocidade.',
          en: 'Confidential payload is encrypted using the AES-256 session key, delivering maximum throughput.',
          es: 'El texto confidencial se cifra con la clave de sesión AES-256 con máxima velocidad.'
        },
        mechanism: {
          'pt-br': 'A criptografia simétrica é milhares de vezes mais rápida que a assimétrica para volumes grandes de dados.',
          en: 'Symmetric encryption is thousands of times faster than asymmetric ciphers for large payloads.',
          es: 'La criptografía simétrica es miles de veces más rápida que la asimétrica para datos grandes.'
        },
        safeResult: {
          'pt-br': 'Corpo da mensagem transformado em blocos ilegíveis cifrados',
          en: 'Message body converted into unreadable ciphertext blocks',
          es: 'Cuerpo del mensaje transformado en bloques ilegibles cifrados'
        },
        threatResult: {
          'pt-br': 'Invasor em posição MITM intercepta o pacote cifrado e corrompe bytes em trânsito',
          en: 'MITM adversary intercepts ciphertext packet and tampers payload bits in transit',
          es: 'Invasor MITM intercepta el paquete cifrado y altera bytes en tránsito'
        },
        threatBlocked: false
      },
      {
        id: 'asymmetric_key_wrap',
        icon: 'fas fa-lock',
        title: { 'pt-br': 'Envoltório Assimétrico', en: 'Asymmetric Key Wrapping', es: 'Envoltorio Asimétrico' },
        tech: 'RSA-4096 / ECC Recipient PubKey',
        what: {
          'pt-br': 'Apenas a chave de sessão AES de 256 bits é cifrada com a Chave Pública assimétrica do destinatário.',
          en: 'Only the 256-bit AES session key is encrypted with the Recipient Asymmetric Public Key.',
          es: 'Solo la clave de sesión AES de 256 bits se cifra con la Clave Pública del destinatario.'
        },
        mechanism: {
          'pt-br': 'Solução do problema de distribuição de chaves: somente a Chave Privada do destinatário poderá decifrar a chave AES.',
          en: 'Resolves key distribution: only the matching Recipient Private Key can open the session key.',
          es: 'Resuelve la distribución de claves: solo la Clave Privada del destinatario puede abrir la clave AES.'
        },
        safeResult: {
          'pt-br': 'Chave de sessão encapsulada com a chave pública do destinatário',
          en: 'Session key securely wrapped using recipient asymmetric public key',
          es: 'Clave de sesión encapsulada con la clave pública del destinatario'
        },
        threatResult: {
          'pt-br': 'Invasor não consegue decifrar a chave de sessão pois não possui a chave privada',
          en: 'Attacker cannot decrypt session key as they lack the recipient private key',
          es: 'Invasor no puede descifrar la clave de sesión por carecer de la clave privada'
        },
        threatBlocked: false
      },
      {
        id: 'digital_signature_step',
        icon: 'fas fa-signature',
        title: { 'pt-br': 'Assinatura Digital', en: 'Digital Signature', es: 'Firma Digital' },
        tech: 'SHA-512 + Sender PrivKey',
        what: {
          'pt-br': 'O remetente calcula o hash SHA-512 da mensagem e o assina com sua própria Chave Privada.',
          en: 'Sender calculates SHA-512 message hash and signs it with their own Private Key.',
          es: 'Remitente calcula hash SHA-512 del mensaje y lo firma con su propia Clave Privada.'
        },
        mechanism: {
          'pt-br': 'Garantia de Autenticidade e Não-Repúdio: Qualquer um pode verificar com a chave pública quem foi o autor legítimo.',
          en: 'Authenticity & Non-repudiation: Anyone can verify using public key who authored the document.',
          es: 'Autenticidad y No-Repudio: Cualquiera puede verificar con la clave pública quién es el autor.'
        },
        safeResult: {
          'pt-br': 'Assinatura OpenPGP gerada: Prova matemática irrefutável de autoria',
          en: 'OpenPGP signature generated: Irrefutable mathematical proof of authorship',
          es: 'Firma OpenPGP generada: Prueba matemática irrefutable de autoría'
        },
        threatResult: {
          'pt-br': 'ASSINATURA DIGITAL FALHOU! O texto recebido diverge do hash assinado pelo autor!',
          en: 'DIGITAL SIGNATURE FAILED! Received plaintext diverges from signed hash!',
          es: '¡FIRMA DIGITAL FALLÓ! ¡El texto recibido diverge del hash firmado por el autor!'
        },
        threatBlocked: true,
        threatExplanation: {
          'pt-br': 'Adulteração Neutralizada pela Assinatura Digital! O atacante alterou bytes na mensagem cifrada em trânsito. Ao decifrar, o hash SHA-512 recalculado divergiu completamente da assinatura feita com a chave privada do autor. O destinatário rejeitou o pacote como falso!',
          en: 'Tampering Foil by Digital Signature! The attacker modified bytes in transit. Upon decryption, the recomputed SHA-512 hash failed verification against the author digital signature. The recipient dropped the packet as forged!',
          es: '¡Adulteración Neutralizada por la Firma Digital! El atacante alteró bytes en tránsito. Al descifrar, el hash SHA-512 recalculado divergió de la firma del autor. ¡El paquete fue rechazado como falso!'
        }
      },
      {
        id: 'recipient_decrypt_node',
        icon: 'fas fa-unlock-keyhole',
        title: { 'pt-br': 'Decifração & Não-Repúdio', en: 'Decryption & Verification', es: 'Descifrado y Verificación' },
        tech: 'OpenPGP Verification Engine',
        what: {
          'pt-br': 'Destinatário usa sua chave privada para obter a chave AES, decifra o texto e valida a assinatura com a chave pública do autor.',
          en: 'Recipient uses private key to unlock AES key, decrypts body, and validates author signature.',
          es: 'Destinatario usa su clave privada para abrir la clave AES, descifra el texto y valida la firma.'
        },
        safeResult: {
          'pt-br': 'Sucesso total! Canal 100% confidencial, íntegro e com não-repúdio legal assegurado.',
          en: 'Complete success! 100% confidential, integral, and legally non-repudiated channel.',
          es: '¡Éxito total! Canal 100% confidencial, íntegro y con no-repudio legal asegurado.'
        },
        threatResult: {
          'pt-br': 'Destinatário alertado com aviso de segurança contra manipulação de pacote.',
          en: 'Recipient alerted with security warning against unauthorized packet tampering.',
          es: 'Destinatario alertado con aviso de seguridad contra manipulación del paquete.'
        },
        threatBlocked: false
      }
    ]
  }
};

// ----------------------------------------------------------------------------
// Renderizador HTML do Fluxograma Explicativo Animado
// ----------------------------------------------------------------------------
export function getCyberInteractiveLabHtml(cyberId, lang = 'pt-br') {
  const data = cyberFlowchartData[cyberId];
  if (!data) return '';

  const isEn = lang === 'en';
  const isEs = lang === 'es';

  const tLabels = {
    'pt-br': {
      title: 'Fluxograma Explicativo de Execução & Arquitetura',
      badgeReady: 'Pronto para Executar',
      playBtn: 'Executar Fluxo Animado',
      pauseBtn: 'Pausar',
      nextBtn: 'Próximo Passo',
      resetBtn: 'Reiniciar',
      stepPrefix: 'Etapa',
      stepOf: 'de',
      whatTitle: 'O que acontece nesta etapa',
      mechTitle: 'Mecanismo de Segurança & Criptografia',
      resTitle: 'Resultado & Validação em Tempo Real',
      alertTitle: 'Ameaça Bloqueada pela Arquitetura',
      terminalTitle: 'Telemetria & Eventos em Tempo Real',
      interactiveHint: 'Dica: Clique em qualquer etapa do fluxograma para inspecionar seus detalhes técnicos ou troque de cenário abaixo.'
    },
    'en': {
      title: 'Interactive Explanatory Architecture Flowchart',
      badgeReady: 'Ready to Run',
      playBtn: 'Play Animated Flow',
      pauseBtn: 'Pause',
      nextBtn: 'Next Step',
      resetBtn: 'Reset',
      stepPrefix: 'Step',
      stepOf: 'of',
      whatTitle: 'What happens at this step',
      mechTitle: 'Security Mechanism & Cryptography',
      resTitle: 'Validation Result & Real-Time Telemetry',
      alertTitle: 'Threat Blocked by Security Architecture',
      terminalTitle: 'Real-Time Telemetry & Event Stream',
      interactiveHint: 'Tip: Click any node in the flowchart to inspect technical details or switch simulation scenarios below.'
    },
    'es': {
      title: 'Diagrama Explicativo de Ejecución y Arquitectura',
      badgeReady: 'Listo para Ejecutar',
      playBtn: 'Ejecutar Flujo Animado',
      pauseBtn: 'Pausar',
      nextBtn: 'Paso Siguiente',
      resetBtn: 'Reiniciar',
      stepPrefix: 'Etapa',
      stepOf: 'de',
      whatTitle: 'Qué sucede en esta etapa',
      mechTitle: 'Mecanismo de Seguridad y Criptografía',
      resTitle: 'Resultado y Validación en Tiempo Real',
      alertTitle: 'Amenaza Bloqueada por la Arquitectura',
      terminalTitle: 'Telemetría y Registro de Eventos',
      interactiveHint: 'Consejo: Haga clic en cualquier nodo del diagrama para inspeccionar detalles técnicos o cambie de escenario abajo.'
    }
  }[lang] || {
    title: 'Fluxograma Explicativo de Execução & Arquitetura',
    badgeReady: 'Pronto para Executar',
    playBtn: 'Executar Fluxo Animado',
    pauseBtn: 'Pausar',
    nextBtn: 'Próximo Passo',
    resetBtn: 'Reiniciar',
    stepPrefix: 'Etapa',
    stepOf: 'de',
    whatTitle: 'O que acontece nesta etapa',
    mechTitle: 'Mecanismo de Segurança & Criptografia',
    resTitle: 'Resultado & Validação em Tempo Real',
    alertTitle: 'Ameaça Bloqueada pela Arquitetura',
    terminalTitle: 'Telemetria & Eventos em Tempo Real',
    interactiveHint: 'Dica: Clique em qualquer etapa do fluxograma para inspecionar seus detalhes técnicos ou troque de cenário abaixo.'
  };

  const safeScen = data.scenarios.safe;
  const threatScen = data.scenarios.threat;

  const totalSteps = data.nodes.length;

  // Montagem visual dos nós e conectores
  const nodesHtml = data.nodes.map((node, idx) => {
    const isFirst = idx === 0;
    const isLast = idx === totalSteps - 1;
    const stepNum = String(idx + 1).padStart(2, '0');
    const nodeTitle = escapeHtml(node.title[lang] || node.title['pt-br']);

    const connectorHtml = !isLast ? `
      <div class="cyber-flow-connector" data-connector-idx="${idx}">
        <div class="cyber-flow-connector-track"></div>
        <div class="cyber-flow-connector-fill" id="flow-fill-${cyberId}-${idx}"></div>
        <div class="cyber-flow-packet" id="flow-packet-${cyberId}-${idx}"></div>
      </div>
    ` : '';

    return `
      <div class="cyber-flow-node ${isFirst ? 'active' : 'idle'}" data-node-idx="${idx}" id="flow-node-${cyberId}-${idx}" role="button" tabindex="0" title="${nodeTitle}">
        <div class="cyber-flow-node-badge">${stepNum}</div>
        <div class="cyber-flow-node-icon"><i class="${node.icon}"></i></div>
        <div class="cyber-flow-node-title">${nodeTitle}</div>
        <div class="cyber-flow-node-tech">${escapeHtml(node.tech)}</div>
        <div class="cyber-flow-node-status" id="flow-status-${cyberId}-${idx}">
          <i class="fas fa-circle-dot"></i> <span>${isFirst ? 'Ativo' : 'Aguardando'}</span>
        </div>
      </div>
      ${connectorHtml}
    `;
  }).join('');

  return `
    <div class="cyber-flow-widget" id="cyber-flow-widget-${cyberId}">
      <!-- Barra Superior: Título, Badge de Estado e Alternador de Cenários -->
      <div class="cyber-flow-topbar">
        <div class="cyber-flow-title-box">
          <i class="fas fa-project-diagram"></i>
          <div>
            <h4 class="cyber-flow-heading">${escapeHtml(tLabels.title)}</h4>
            <span class="cyber-flow-subcode">${escapeHtml(data.code)}</span>
          </div>
        </div>
        <div class="cyber-flow-scenarios">
          <button type="button" class="cyber-scenario-btn active" id="btn-scen-safe-${cyberId}" data-scenario="safe">
            <i class="fas fa-shield-halved"></i>
            <span>${escapeHtml(safeScen.label[lang] || safeScen.label['pt-br'])}</span>
          </button>
          <button type="button" class="cyber-scenario-btn" id="btn-scen-threat-${cyberId}" data-scenario="threat">
            <i class="fas fa-radiation"></i>
            <span>${escapeHtml(threatScen.label[lang] || threatScen.label['pt-br'])}</span>
          </button>
        </div>
      </div>

      <!-- Banner de Contexto do Cenário Ativo -->
      <div class="cyber-flow-scenario-banner safe" id="flow-scenario-banner-${cyberId}">
        <i class="fas fa-circle-info"></i>
        <span id="flow-scenario-text-${cyberId}">${escapeHtml(safeScen.banner[lang] || safeScen.banner['pt-br'])}</span>
      </div>

      <!-- Barra de Controle: Play/Pause, Próximo, Reset e Indicador de Etapa -->
      <div class="cyber-flow-controls">
        <div class="cyber-flow-btn-group">
          <button type="button" class="btn btn-primary cyber-flow-btn" id="btn-flow-play-${cyberId}">
            <i class="fas fa-play"></i> <span id="btn-flow-play-label-${cyberId}">${escapeHtml(tLabels.playBtn)}</span>
          </button>
          <button type="button" class="btn btn-outline cyber-flow-btn" id="btn-flow-next-${cyberId}">
            <i class="fas fa-forward-step"></i> <span>${escapeHtml(tLabels.nextBtn)}</span>
          </button>
          <button type="button" class="btn btn-outline cyber-flow-btn" id="btn-flow-reset-${cyberId}">
            <i class="fas fa-rotate-right"></i> <span>${escapeHtml(tLabels.resetBtn)}</span>
          </button>
        </div>
        <div class="cyber-flow-step-counter">
          <span class="cyber-counter-label">${escapeHtml(tLabels.stepPrefix)}</span>
          <strong id="flow-step-num-${cyberId}">01</strong>
          <span class="cyber-counter-total">/ ${String(totalSteps).padStart(2, '0')}</span>
        </div>
      </div>

      <div class="cyber-flow-hint">
        <i class="fas fa-hand-pointer"></i> ${escapeHtml(tLabels.interactiveHint)}
      </div>

      <!-- Pista do Fluxograma Animado (Nós e Conectores Dinâmicos) -->
      <div class="cyber-flow-track-wrapper">
        <div class="cyber-flow-track" id="flow-track-${cyberId}">
          ${nodesHtml}
        </div>
      </div>

      <!-- Card Explicativo do Nó Ativo (Inspector com 3 Pilares e Alerta de Bloqueio) -->
      <div class="cyber-flow-inspector" id="flow-inspector-${cyberId}">
        <div class="cyber-flow-inspector-header">
          <div class="cyber-insp-step-tag" id="flow-insp-tag-${cyberId}">
            ${escapeHtml(tLabels.stepPrefix)} 01 ${escapeHtml(tLabels.stepOf)} ${String(totalSteps).padStart(2, '0')}
          </div>
          <h3 class="cyber-insp-title" id="flow-insp-title-${cyberId}">
            ${escapeHtml(data.nodes[0].title[lang] || data.nodes[0].title['pt-br'])}
          </h3>
          <span class="cyber-insp-tech" id="flow-insp-tech-${cyberId}">${escapeHtml(data.nodes[0].tech)}</span>
        </div>

        <!-- Banner de Bloqueio Ofensivo (Exibido quando a ameaça é interceptada) -->
        <div class="cyber-insp-alert-banner" id="flow-insp-alert-${cyberId}" style="display: none;">
          <div class="cyber-alert-icon"><i class="fas fa-shield-virus"></i></div>
          <div>
            <strong>${escapeHtml(tLabels.alertTitle)}</strong>
            <p id="flow-insp-alert-text-${cyberId}"></p>
          </div>
        </div>

        <div class="cyber-flow-inspector-grid">
          <div class="cyber-insp-col">
            <div class="cyber-insp-col-header">
              <i class="fas fa-circle-question"></i>
              <span>${escapeHtml(tLabels.whatTitle)}</span>
            </div>
            <p class="cyber-insp-col-text" id="flow-insp-what-${cyberId}">
              ${escapeHtml(data.nodes[0].what[lang] || data.nodes[0].what['pt-br'])}
            </p>
          </div>

          <div class="cyber-insp-col">
            <div class="cyber-insp-col-header">
              <i class="fas fa-shield-halved"></i>
              <span>${escapeHtml(tLabels.mechTitle)}</span>
            </div>
            <p class="cyber-insp-col-text" id="flow-insp-mech-${cyberId}">
              ${escapeHtml(data.nodes[0].mechanism[lang] || data.nodes[0].mechanism['pt-br'])}
            </p>
          </div>

          <div class="cyber-insp-col highlight">
            <div class="cyber-insp-col-header">
              <i class="fas fa-square-poll-vertical"></i>
              <span>${escapeHtml(tLabels.resTitle)}</span>
            </div>
            <p class="cyber-insp-col-text" id="flow-insp-res-${cyberId}">
              ${escapeHtml(data.nodes[0].safeResult[lang] || data.nodes[0].safeResult['pt-br'])}
            </p>
          </div>
        </div>
      </div>

      <!-- Terminal de Telemetria e Eventos em Tempo Real -->
      <div class="cyber-flow-terminal">
        <div class="cyber-flow-terminal-header">
          <div class="cyber-terminal-dots">
            <span class="dot red"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="cyber-terminal-title"><i class="fas fa-terminal"></i> ${escapeHtml(tLabels.terminalTitle)}</span>
          <span class="cyber-terminal-badge" id="flow-terminal-badge-${cyberId}">LIVE</span>
        </div>
        <div class="cyber-flow-terminal-logs" id="flow-terminal-logs-${cyberId}">
          <div class="cyber-log-line init">
            <span class="cyber-log-time">[00:00:00]</span>
            <span class="cyber-log-info">&gt; Sistema inicializado. Clique em "${escapeHtml(tLabels.playBtn)}" para assistir à execução interativa.</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// Anexador de Eventos e Máquina de Estado do Fluxograma Animado
// ----------------------------------------------------------------------------
export function attachCyberLabEvents(cyberId, lang = 'pt-br') {
  const data = cyberFlowchartData[cyberId];
  if (!data) return;

  const tLabels = {
    'pt-br': {
      playBtn: 'Executar Fluxo Animado',
      pauseBtn: 'Pausar Fluxo',
      stepPrefix: 'Etapa',
      stepOf: 'de',
      statusWaiting: 'Aguardando',
      statusActive: 'Processando...',
      statusPassed: 'Aprovado ✓',
      statusBlocked: 'Bloqueado ✗'
    },
    'en': {
      playBtn: 'Play Animated Flow',
      pauseBtn: 'Pause Flow',
      stepPrefix: 'Step',
      stepOf: 'of',
      statusWaiting: 'Waiting',
      statusActive: 'Processing...',
      statusPassed: 'Passed ✓',
      statusBlocked: 'Blocked ✗'
    },
    'es': {
      playBtn: 'Ejecutar Flujo Animado',
      pauseBtn: 'Pausar Flujo',
      stepPrefix: 'Etapa',
      stepOf: 'de',
      statusWaiting: 'Esperando',
      statusActive: 'Procesando...',
      statusPassed: 'Aprobado ✓',
      statusBlocked: 'Bloqueado ✗'
    }
  }[lang] || {
    playBtn: 'Executar Fluxo Animado',
    pauseBtn: 'Pausar Fluxo',
    stepPrefix: 'Etapa',
    stepOf: 'de',
    statusWaiting: 'Aguardando',
    statusActive: 'Processando...',
    statusPassed: 'Aprovado ✓',
    statusBlocked: 'Bloqueado ✗'
  };

  let currentStep = 0;
  let activeScenario = 'safe'; // 'safe' | 'threat'
  let isPlaying = false;
  let playTimer = null;
  const totalNodes = data.nodes.length;

  const btnSafe = document.getElementById(`btn-scen-safe-${cyberId}`);
  const btnThreat = document.getElementById(`btn-scen-threat-${cyberId}`);
  const scenarioBanner = document.getElementById(`flow-scenario-banner-${cyberId}`);
  const scenarioText = document.getElementById(`flow-scenario-text-${cyberId}`);

  const btnPlay = document.getElementById(`btn-flow-play-${cyberId}`);
  const btnPlayLabel = document.getElementById(`btn-flow-play-label-${cyberId}`);
  const btnNext = document.getElementById(`btn-flow-next-${cyberId}`);
  const btnReset = document.getElementById(`btn-flow-reset-${cyberId}`);
  const stepCounterEl = document.getElementById(`flow-step-num-${cyberId}`);

  const inspTag = document.getElementById(`flow-insp-tag-${cyberId}`);
  const inspTitle = document.getElementById(`flow-insp-title-${cyberId}`);
  const inspTech = document.getElementById(`flow-insp-tech-${cyberId}`);
  const inspWhat = document.getElementById(`flow-insp-what-${cyberId}`);
  const inspMech = document.getElementById(`flow-insp-mech-${cyberId}`);
  const inspRes = document.getElementById(`flow-insp-res-${cyberId}`);
  const inspAlert = document.getElementById(`flow-insp-alert-${cyberId}`);
  const inspAlertText = document.getElementById(`flow-insp-alert-text-${cyberId}`);

  const terminalLogs = document.getElementById(`flow-terminal-logs-${cyberId}`);
  const terminalBadge = document.getElementById(`flow-terminal-badge-${cyberId}`);

  function getTimestamp() {
    const now = new Date();
    return `[${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}]`;
  }

  function addTerminalLog(type, text) {
    if (!terminalLogs) return;
    const line = document.createElement('div');
    line.className = `cyber-log-line ${type}`;
    line.innerHTML = `<span class="cyber-log-time">${getTimestamp()}</span> <span class="cyber-log-msg">${escapeHtml(text)}</span>`;
    terminalLogs.appendChild(line);
    terminalLogs.scrollTop = terminalLogs.scrollHeight;
  }

  function updateInspector(idx) {
    const node = data.nodes[idx];
    if (!node) return;

    if (stepCounterEl) stepCounterEl.textContent = String(idx + 1).padStart(2, '0');
    if (inspTag) inspTag.textContent = `${tLabels.stepPrefix} ${String(idx + 1).padStart(2, '0')} ${tLabels.stepOf} ${String(totalNodes).padStart(2, '0')}`;
    if (inspTitle) inspTitle.textContent = node.title[lang] || node.title['pt-br'];
    if (inspTech) inspTech.textContent = node.tech;
    if (inspWhat) inspWhat.textContent = node.what[lang] || node.what['pt-br'];
    if (inspMech) inspMech.textContent = node.mechanism[lang] || node.mechanism['pt-br'];

    const isThreat = activeScenario === 'threat';
    const isBlockedHere = isThreat && node.threatBlocked;

    if (inspRes) {
      inspRes.textContent = isThreat
        ? (node.threatResult[lang] || node.threatResult['pt-br'])
        : (node.safeResult[lang] || node.safeResult['pt-br']);
    }

    if (isBlockedHere) {
      if (inspAlert) inspAlert.style.display = 'flex';
      if (inspAlertText) {
        inspAlertText.textContent = node.threatExplanation[lang] || node.threatExplanation['pt-br'];
      }
    } else {
      if (inspAlert) inspAlert.style.display = 'none';
    }
  }

  function renderStep(idx, isTransitioning = false) {
    currentStep = idx;
    const isThreat = activeScenario === 'threat';

    data.nodes.forEach((node, i) => {
      const nodeEl = document.getElementById(`flow-node-${cyberId}-${i}`);
      const statusEl = document.getElementById(`flow-status-${cyberId}-${i}`);
      const fillEl = document.getElementById(`flow-fill-${cyberId}-${i}`);
      const packetEl = document.getElementById(`flow-packet-${cyberId}-${i}`);

      if (!nodeEl) return;

      nodeEl.classList.remove('active', 'passed', 'blocked', 'idle');

      if (i < idx) {
        // Nós anteriores já concluídos
        nodeEl.classList.add('passed');
        if (statusEl) {
          statusEl.innerHTML = `<i class="fas fa-check"></i> <span>${tLabels.statusPassed}</span>`;
        }
        if (fillEl) fillEl.style.width = '100%';
        if (packetEl) packetEl.classList.remove('traveling');
      } else if (i === idx) {
        // Nó atual ativo
        const isBlocked = isThreat && node.threatBlocked;
        if (isBlocked) {
          nodeEl.classList.add('blocked');
          if (statusEl) {
            statusEl.innerHTML = `<i class="fas fa-shield-virus"></i> <span>${tLabels.statusBlocked}</span>`;
          }
        } else {
          nodeEl.classList.add('active');
          if (statusEl) {
            statusEl.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i> <span>${tLabels.statusActive}</span>`;
          }
        }

        // Anima o pacote de dados do conector anterior até este nó
        if (i > 0) {
          const prevFill = document.getElementById(`flow-fill-${cyberId}-${i - 1}`);
          const prevPacket = document.getElementById(`flow-packet-${cyberId}-${i - 1}`);
          if (prevFill) prevFill.style.width = '100%';
          if (prevPacket) {
            prevPacket.classList.add('traveling');
            setTimeout(() => {
              if (prevPacket) prevPacket.classList.remove('traveling');
            }, 600);
          }
        }
      } else {
        // Nós futuros
        nodeEl.classList.add('idle');
        if (statusEl) {
          statusEl.innerHTML = `<i class="fas fa-circle-dot"></i> <span>${tLabels.statusWaiting}</span>`;
        }
        if (fillEl) fillEl.style.width = '0%';
        if (packetEl) packetEl.classList.remove('traveling');
      }
    });

    // Auto-scroll para garantir visibilidade do nó ativo em telas menores
    const activeNodeEl = document.getElementById(`flow-node-${cyberId}-${idx}`);
    if (activeNodeEl) {
      activeNodeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }

    updateInspector(idx);

    // Adiciona log ao terminal
    const currentNode = data.nodes[idx];
    const logText = isThreat
      ? (currentNode.threatResult[lang] || currentNode.threatResult['pt-br'])
      : (currentNode.safeResult[lang] || currentNode.safeResult['pt-br']);

    const logType = (isThreat && currentNode.threatBlocked)
      ? 'danger'
      : (idx === totalNodes - 1 ? 'success' : 'info');

    addTerminalLog(logType, `[Etapa ${idx + 1}/${totalNodes} - ${currentNode.tech}] ${logText}`);
  }

  function pauseFlow() {
    isPlaying = false;
    if (playTimer) {
      clearInterval(playTimer);
      playTimer = null;
    }
    if (btnPlay) {
      btnPlay.innerHTML = `<i class="fas fa-play"></i> <span>${escapeHtml(tLabels.playBtn)}</span>`;
      btnPlay.classList.remove('btn-warn');
      btnPlay.classList.add('btn-primary');
    }
    if (terminalBadge) terminalBadge.textContent = 'PAUSED';
  }

  function playFlow() {
    const isThreat = activeScenario === 'threat';
    const currentNode = data.nodes[currentStep];

    // Se já estiver no fim ou bloqueado, reseta para o começo antes de iniciar
    if (currentStep >= totalNodes - 1 || (isThreat && currentNode.threatBlocked)) {
      renderStep(0);
    }

    isPlaying = true;
    if (btnPlay) {
      btnPlay.innerHTML = `<i class="fas fa-pause"></i> <span>${escapeHtml(tLabels.pauseBtn)}</span>`;
      btnPlay.classList.remove('btn-primary');
      btnPlay.classList.add('btn-warn');
    }
    if (terminalBadge) terminalBadge.textContent = 'RUNNING';

    playTimer = setInterval(() => {
      const nextIdx = currentStep + 1;
      const willBeBlocked = isThreat && data.nodes[nextIdx] && data.nodes[nextIdx].threatBlocked;

      if (nextIdx < totalNodes) {
        renderStep(nextIdx, true);
        if (willBeBlocked) {
          // Se o próximo passo for o de bloqueio defensivo, conclui nele e pausa
          pauseFlow();
          addTerminalLog('danger', `[DEFESA ATIVA] Ameaça neutralizada na etapa ${nextIdx + 1}. Execução interrompida com segurança!`);
        }
      } else {
        pauseFlow();
        addTerminalLog('success', `[SUCESSO] Fluxo completo de execução validado com sucesso!`);
      }
    }, 2200);
  }

  function nextStep() {
    pauseFlow();
    const isThreat = activeScenario === 'threat';
    const currentNode = data.nodes[currentStep];

    if (isThreat && currentNode.threatBlocked) {
      addTerminalLog('danger', `[BLOQUEIO] O fluxo foi interceptado nesta etapa de segurança e não pode prosseguir.`);
      return;
    }

    if (currentStep < totalNodes - 1) {
      renderStep(currentStep + 1, true);
    } else {
      addTerminalLog('success', `[FIM] Você já alcançou a última etapa do fluxograma.`);
    }
  }

  function resetFlow() {
    pauseFlow();
    renderStep(0);
    if (terminalLogs) {
      terminalLogs.innerHTML = `
        <div class="cyber-log-line init">
          <span class="cyber-log-time">${getTimestamp()}</span>
          <span class="cyber-log-info">&gt; Fluxograma reiniciado para a Etapa 01. Pronto para execução.</span>
        </div>
      `;
    }
  }

  function setScenario(scen) {
    if (activeScenario === scen) return;
    activeScenario = scen;
    pauseFlow();

    if (btnSafe && btnThreat) {
      if (scen === 'safe') {
        btnSafe.classList.add('active');
        btnThreat.classList.remove('active');
        if (scenarioBanner) {
          scenarioBanner.className = 'cyber-flow-scenario-banner safe';
          scenarioText.textContent = data.scenarios.safe.banner[lang] || data.scenarios.safe.banner['pt-br'];
        }
      } else {
        btnThreat.classList.add('active');
        btnSafe.classList.remove('active');
        if (scenarioBanner) {
          scenarioBanner.className = 'cyber-flow-scenario-banner threat';
          scenarioText.textContent = data.scenarios.threat.banner[lang] || data.scenarios.threat.banner['pt-br'];
        }
      }
    }

    renderStep(0);
    addTerminalLog('info', `[CENÁRIO ALTERADO] Modo ativo: ${scen === 'safe' ? 'Fluxo de Execução Normal / Aprovado' : 'Simulação de Ataque / Bloqueio Defensivo'}`);
  }

  // Listeners dos botões de controle
  if (btnPlay) {
    btnPlay.addEventListener('click', (e) => {
      e.preventDefault();
      if (isPlaying) pauseFlow();
      else playFlow();
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', (e) => {
      e.preventDefault();
      nextStep();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', (e) => {
      e.preventDefault();
      resetFlow();
    });
  }

  if (btnSafe) {
    btnSafe.addEventListener('click', (e) => {
      e.preventDefault();
      setScenario('safe');
    });
  }

  if (btnThreat) {
    btnThreat.addEventListener('click', (e) => {
      e.preventDefault();
      setScenario('threat');
    });
  }

  // Interação direta com os nós (clique em qualquer nó salta imediatamente para ele)
  data.nodes.forEach((_, idx) => {
    const nodeEl = document.getElementById(`flow-node-${cyberId}-${idx}`);
    if (nodeEl) {
      nodeEl.addEventListener('click', () => {
        pauseFlow();
        renderStep(idx);
      });
      nodeEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          pauseFlow();
          renderStep(idx);
        }
      });
    }
  });

  // Renderiza a etapa inicial
  renderStep(0);
}
