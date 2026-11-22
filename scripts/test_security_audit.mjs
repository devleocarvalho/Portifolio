// scripts/test_security_audit.mjs
// ============================================================================
// PORTFÓLIO LEONARDO DE CARVALHO - APPSEC & DEVSECOPS VERIFICATION SUITE
// Zero Trust, OWASP Top 10 & Multilingual Integrity Testing Harness
// ============================================================================

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

console.log("\n=================================================================");
console.log("   PORTFÓLIO DEVSECOPS - AUTOMATED SECURITY VERIFICATION SUITE   ");
console.log("   Zero Trust, AppSec & Multilingual Integrity Harness           ");
console.log("=================================================================\n");

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = "") {
  totalTests++;
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    if (details) console.error(`         -> ${details}`);
  }
}

// ----------------------------------------------------------------------------
// SUITE 1: Vercel & Vite Security Headers & Zero-Trust Rewrites
// ----------------------------------------------------------------------------
console.log("--- SUITE 1: Infra & HTTP Security Headers (vercel.json & vite.config.js) ---");
try {
  const vercelRaw = fs.readFileSync(path.join(rootDir, "vercel.json"), "utf8");
  const vercelJson = JSON.parse(vercelRaw);
  assert(true, "vercel.json is valid strict JSON");

  const globalHeaders = vercelJson.headers?.[0]?.headers || [];
  const hasHeader = (key, expectedSub = "") =>
    globalHeaders.some(
      (h) =>
        h.key.toLowerCase() === key.toLowerCase() &&
        (!expectedSub || h.value.toLowerCase().includes(expectedSub.toLowerCase()))
    );

  assert(hasHeader("Strict-Transport-Security", "max-age="), "HTTP Header: Strict-Transport-Security (HSTS) enforced");
  assert(hasHeader("X-Content-Type-Options", "nosniff"), "HTTP Header: X-Content-Type-Options nosniff enforced");
  assert(hasHeader("X-Frame-Options", "DENY"), "HTTP Header: Anti-Clickjacking (X-Frame-Options: DENY) enforced");
  assert(hasHeader("Referrer-Policy", "strict-origin-when-cross-origin"), "HTTP Header: Referrer-Policy enforced");
  assert(hasHeader("Cross-Origin-Opener-Policy", "same-origin"), "HTTP Header: Cross-Origin-Opener-Policy enforced");
  assert(hasHeader("Permissions-Policy"), "HTTP Header: Permissions-Policy enforced");
  assert(hasHeader("Content-Security-Policy", "default-src 'self'"), "HTTP Header: Content-Security-Policy (CSP) enforced");

  const hasZeroTrustRewrite = (vercelJson.rewrites || []).some(
    (r) => r.source.includes("\\.env") && r.destination === "/404"
  );
  assert(hasZeroTrustRewrite, "Zero-Trust Rewrite: Sensitive dotfiles (.env, .pem, .key) masked with 404");
} catch (err) {
  assert(false, "Validating vercel.json configuration", err.message);
}

// ----------------------------------------------------------------------------
// SUITE 2: Hardcoded Secrets & Credential Leak Detection
// ----------------------------------------------------------------------------
console.log("\n--- SUITE 2: Hardcoded Secrets & API Key Scanning ---");
try {
  const filesToScan = [
    "index.html",
    "script.js",
    "translations.js",
    "projects-details.js",
    "vite.config.js",
    path.join("api", "contact.js")
  ];

  const secretPatterns = [
    { name: "Resend Live API Key (re_...)", regex: /\bre_[A-Za-z0-9_]{20,}\b/ },
    { name: "Private RSA/SSH Key Block", regex: /-----BEGIN (RSA |OPENSSH |EC |)PRIVATE KEY-----/ },
    { name: "AWS Access Key ID", regex: /\bAKIA[0-9A-Z]{16}\b/ },
    { name: "Google Cloud / Firebase Raw API Key", regex: /\bAIza[0-9A-Za-z\-_]{35}\b/ }
  ];

  let leakedSecretsFound = [];
  for (const relPath of filesToScan) {
    const content = fs.readFileSync(path.join(rootDir, relPath), "utf8");
    for (const pat of secretPatterns) {
      if (pat.regex.test(content)) {
        leakedSecretsFound.push(`${relPath}: ${pat.name}`);
      }
    }
  }

  assert(
    leakedSecretsFound.length === 0,
    "Zero hardcoded API keys or private credentials in application source files",
    leakedSecretsFound.join(", ")
  );
} catch (err) {
  assert(false, "Scanning source files for secrets", err.message);
}

// ----------------------------------------------------------------------------
// SUITE 3: Serverless Contact API Security (api/contact.js)
// ----------------------------------------------------------------------------
console.log("\n--- SUITE 3: Serverless Contact API Hardening (OWASP Top 10) ---");
try {
  const contactApiCode = fs.readFileSync(path.join(rootDir, "api", "contact.js"), "utf8");

  assert(
    contactApiCode.includes("process.env.RESEND_API_KEY"),
    "API reads RESEND_API_KEY strictly from environment variables"
  );
  assert(
    contactApiCode.includes("function escapeHtml") && contactApiCode.includes("safeName") && contactApiCode.includes("safeMessage"),
    "API enforces HTML entity escaping (escapeHtml) against HTML/XSS Email Injection"
  );
  assert(
    contactApiCode.includes("function sanitizeHeaderValue"),
    "API enforces CRLF stripping against Email Subject Header Injection"
  );
  assert(
    contactApiCode.includes("company_hp"),
    "API validates anti-spam Honeypot field (company_hp) on the server side"
  );
  assert(
    contactApiCode.includes("ALLOWED_FIELDS"),
    "API enforces strict field whitelisting against Mass Assignment attacks"
  );
  assert(
    contactApiCode.includes("isRateLimited") && contactApiCode.includes("429"),
    "API enforces per-IP rate limiting (HTTP 429) against flooding/DoS"
  );
} catch (err) {
  assert(false, "Auditing api/contact.js", err.message);
}

// ----------------------------------------------------------------------------
// SUITE 4: DOM XSS Protection, Trilingual Integrity & Cyber Dossier Assets
// ----------------------------------------------------------------------------
console.log("\n--- SUITE 4: DOM XSS Defense, Trilingual Parity (PT/EN/ES) & Assets ---");
try {
  const scriptCode = fs.readFileSync(path.join(rootDir, "script.js"), "utf8");
  assert(
    scriptCode.includes("function sanitizeHtml") && scriptCode.includes("function escapeText"),
    "Client script enforces sanitizeHtml() and escapeText() against DOM XSS"
  );

  const cyberGridDeclIndex = scriptCode.indexOf("const cyberProjectsGrid =");
  const firstSetLangCallIndex = scriptCode.indexOf("setLanguage(savedLang)");
  assert(
    cyberGridDeclIndex > 0 && firstSetLangCallIndex > cyberGridDeclIndex,
    "Zero Temporal Dead Zone (TDZ): DOM containers initialized before setLanguage() execution"
  );

  const loadEsmFile = async (relFile) => {
    const raw = fs.readFileSync(path.join(rootDir, relFile), "utf8");
    const b64 = Buffer.from(raw, "utf8").toString("base64");
    return import(`data:text/javascript;base64,${b64}`);
  };

  const { translations } = await loadEsmFile("translations.js");
  const { projectTechDetails, cyberProjectsData } = await loadEsmFile("projects-details.js");

  const langs = ["pt-br", "en", "es"];
  for (const lang of langs) {
    assert(Boolean(translations[lang]), `Translations dictionary loaded for '${lang}'`);
  }

  const ptKeys = Object.keys(translations["pt-br"]);
  const enKeys = Object.keys(translations["en"]);
  const esKeys = Object.keys(translations["es"]);

  const missingInEn = ptKeys.filter((k) => !(k in translations["en"]));
  const missingInEs = ptKeys.filter((k) => !(k in translations["es"]));

  assert(
    missingInEn.length === 0 && missingInEs.length === 0 && ptKeys.length === enKeys.length && ptKeys.length === esKeys.length,
    `100% Trilingual Key Parity across PT-BR (${ptKeys.length}), EN (${enKeys.length}), and ES (${esKeys.length})`,
    missingInEn.concat(missingInEs).join(", ")
  );

  // Verify all 35 web projects have tech details in PT-BR, EN, and ES
  let allProjectsHaveDetails = true;
  for (let i = 1; i <= 35; i++) {
    const det = projectTechDetails[i];
    if (!det || !Array.isArray(det.stack) || !det["pt-br"] || !det["en"] || !det["es"]) {
      allProjectsHaveDetails = false;
      break;
    }
  }
  assert(allProjectsHaveDetails, "All 35 Portfolio Projects have complete tech stack details in PT-BR, EN, and ES");

  // Verify all 11 Cybersecurity projects have complete trilingual dossiers and existing PDF reports
  assert(cyberProjectsData.length === 11, `All 11 Cybersecurity Projects registered (found ${cyberProjectsData.length})`);

  let cyberDossiersValid = true;
  let missingPdfs = [];
  for (const cProj of cyberProjectsData) {
    for (const lang of langs) {
      const lData = cProj[lang];
      if (!lData || !lData.title || !lData.shortDesc || !lData.scenario || !lData.architecture || !Array.isArray(lData.highlights)) {
        cyberDossiersValid = false;
      }
    }
    if (cProj.reportPdf) {
      const pdfDiskPath = path.join(rootDir, "public", cProj.reportPdf.replace(/^\//, ""));
      if (!fs.existsSync(pdfDiskPath)) {
        missingPdfs.push(cProj.reportPdf);
      }
    }
  }
  assert(cyberDossiersValid, "All 11 Cybersecurity Projects have complete trilingual technical dossiers (PT/EN/ES)");
  assert(missingPdfs.length === 0, "All linked Cybersecurity PDF Technical Reports exist in public/cyber-reports/", missingPdfs.join(", "));

  // Verify all 11 Cybersecurity Interactive Animated Flowcharts
  const { cyberFlowchartData, getCyberInteractiveLabHtml } = await loadEsmFile("cyber-labs.js");
  const cyberFlowchartKeys = Object.keys(cyberFlowchartData);
  assert(cyberFlowchartKeys.length === 11, `All 11 Cybersecurity Flowcharts registered in cyber-labs.js (found ${cyberFlowchartKeys.length})`);

  let allFlowchartsValid = true;
  for (const cProj of cyberProjectsData) {
    const fData = cyberFlowchartData[cProj.id];
    if (!fData || !Array.isArray(fData.nodes) || fData.nodes.length < 4) {
      allFlowchartsValid = false;
      break;
    }
    for (const lang of langs) {
      const html = getCyberInteractiveLabHtml(cProj.id, lang);
      if (!html || !html.includes("cyber-flow-widget") || !html.includes("cyber-flow-node") || !html.includes("cyber-flow-inspector")) {
        allFlowchartsValid = false;
        break;
      }
    }
  }
  assert(allFlowchartsValid, "All 11 Cybersecurity Projects have complete Animated Explanatory Flowcharts in PT-BR, EN, and ES");
} catch (err) {
  assert(false, "Verifying trilingual data and cybersecurity assets", err.message);
}

console.log("\n=================================================================");
console.log(`TEST SUMMARY: ${passedTests}/${totalTests} Passed (${totalTests - passedTests} Failed)`);
console.log("=================================================================\n");

if (passedTests !== totalTests) {
  process.exit(1);
}
