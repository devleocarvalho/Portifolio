#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
========================================================================================
DEVSECOPS QUALITY GATE EVALUATOR - PORTFÓLIO LEONARDO DE CARVALHO
Módulo: scripts/quality_gate.py
========================================================================================
Analisa os relatórios JSON gerados pelo pipeline CI/CD (Semgrep SAST, Trivy SCA e
Trivy IaC) no GitHub Actions e aplica a política de bloqueio (Zero Critical / Zero High).
========================================================================================
"""

import os
import sys
import json
import argparse
from typing import Dict, Optional


def parse_semgrep_report(filepath: str) -> Dict[str, int]:
    counts = {"CRITICAL": 0, "HIGH": 0, "MEDIUM": 0, "LOW": 0, "INFO": 0}
    if not filepath or not os.path.exists(filepath):
        return counts
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            for result in data.get("results", []):
                extra = result.get("extra", {})
                sev = extra.get("severity", "WARNING").upper()
                metadata = extra.get("metadata", {}) or {}
                impact = str(metadata.get("impact", "LOW")).upper()
                confidence = str(metadata.get("confidence", "LOW")).upper()
                check_id = result.get("check_id", "")

                if sev == "ERROR" and impact == "HIGH" and confidence == "HIGH":
                    counts["HIGH"] += 1
                    print(f"    [Semgrep HIGH] {check_id} em {result.get('path')}:{result.get('start', {}).get('line')}")
                elif sev in ("ERROR", "WARNING"):
                    counts["MEDIUM"] += 1
                else:
                    counts["LOW"] += 1
    except Exception as e:
        print(f"[-] Aviso ao analisar Semgrep ({filepath}): {e}")
    return counts


def parse_trivy_report(filepath: str) -> Dict[str, int]:
    counts = {"CRITICAL": 0, "HIGH": 0, "MEDIUM": 0, "LOW": 0, "INFO": 0}
    if not filepath or not os.path.exists(filepath):
        return counts
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
            results = (
                data.get("Results", [])
                if isinstance(data, dict)
                else (data if isinstance(data, list) else [])
            )
            for res in results:
                for vuln in res.get("Vulnerabilities", []) or []:
                    sev = vuln.get("Severity", "UNKNOWN").upper()
                    if sev in counts:
                        counts[sev] += 1
                        if sev in ("CRITICAL", "HIGH"):
                            print(f"    [Trivy SCA {sev}] {vuln.get('VulnerabilityID')} ({vuln.get('PkgName')})")
                for misconf in res.get("Misconfigurations", []) or []:
                    sev = misconf.get("Severity", "UNKNOWN").upper()
                    if sev in counts:
                        counts[sev] += 1
                        if sev in ("CRITICAL", "HIGH"):
                            print(f"    [Trivy IaC {sev}] {misconf.get('ID')}: {misconf.get('Title')}")
    except Exception as e:
        print(f"[-] Aviso ao analisar Trivy ({filepath}): {e}")
    return counts


def evaluate_quality_gate(
    semgrep_file: str,
    trivy_sca_file: str,
    trivy_iac_file: str,
    mode: str,
    threshold_critical: int = 0,
    threshold_high: int = 0,
    threshold_medium: Optional[int] = None,
) -> bool:
    print("=" * 80)
    print("      PORTFÓLIO DEVSECOPS - MOTOR DE AVALIAÇÃO DE QUALITY GATES           ")
    print("=" * 80)

    sast = parse_semgrep_report(semgrep_file)
    sca = parse_trivy_report(trivy_sca_file)
    iac = parse_trivy_report(trivy_iac_file)

    totals = {
        "CRITICAL": sast["CRITICAL"] + sca["CRITICAL"] + iac["CRITICAL"],
        "HIGH": sast["HIGH"] + sca["HIGH"] + iac["HIGH"],
        "MEDIUM": sast["MEDIUM"] + sca["MEDIUM"] + iac["MEDIUM"],
        "LOW": sast["LOW"] + sca["LOW"] + iac["LOW"],
    }

    print(f"\n[+] MODO DE EXECUÇÃO DO GATE: {mode.upper()}")
    print("-" * 80)
    print(f"{'FERRAMENTA / ETAPA':<28} | {'CRITICAL':<8} | {'HIGH':<6} | {'MEDIUM':<8} | {'LOW':<6}")
    print("-" * 80)
    print(f"{'SAST (Semgrep)':<28} | {sast['CRITICAL']:<8} | {sast['HIGH']:<6} | {sast['MEDIUM']:<8} | {sast['LOW']:<6}")
    print(f"{'SCA (Trivy Dependencies)':<28} | {sca['CRITICAL']:<8} | {sca['HIGH']:<6} | {sca['MEDIUM']:<8} | {sca['LOW']:<6}")
    print(f"{'IaC (Trivy Config/Vercel)':<28} | {iac['CRITICAL']:<8} | {iac['HIGH']:<6} | {iac['MEDIUM']:<8} | {iac['LOW']:<6}")
    print("-" * 80)
    print(f"{'TOTAL CONSOLIDADO':<28} | {totals['CRITICAL']:<8} | {totals['HIGH']:<6} | {totals['MEDIUM']:<8} | {totals['LOW']:<6}")
    print("=" * 80)

    breaches = []
    if totals["CRITICAL"] > threshold_critical:
        breaches.append(f"Vulnerabilidades CRÍTICAS ({totals['CRITICAL']}) excedem o limite ({threshold_critical})")
    if totals["HIGH"] > threshold_high:
        breaches.append(f"Vulnerabilidades ALTAS ({totals['HIGH']}) excedem o limite ({threshold_high})")
    if threshold_medium is not None and totals["MEDIUM"] > threshold_medium:
        breaches.append(f"Vulnerabilidades MÉDIAS ({totals['MEDIUM']}) excedem o limite ({threshold_medium})")

    if mode.lower() == "advisory":
        if breaches:
            for b in breaches:
                print(f"    [!] AVISO: {b}")
        print("\n[RESULTADO] Quality Gate (Advisory) -> APROVADO (Exit Code 0)\n")
        return True

    if breaches:
        print("\n[X] BLOQUEIO DE SEGURANÇA ATIVADO:")
        for b in breaches:
            print(f"    -> [BLOQUEADO] {b}")
        print("\n[RESULTADO] Quality Gate (Blocking) -> REPROVADO (Exit Code 1)\n")
        return False

    print("\n[+] Postura de segurança verificada. Zero vulnerabilidades críticas ou altas.")
    print("[RESULTADO] Quality Gate (Blocking) -> APROVADO (Exit Code 0)\n")
    return True


def main():
    parser = argparse.ArgumentParser(description="DevSecOps Quality Gate Evaluator")
    parser.add_argument("--mode", choices=["advisory", "blocking"], required=True)
    parser.add_argument("--semgrep", default="")
    parser.add_argument("--trivy-sca", default="")
    parser.add_argument("--trivy-iac", default="")
    parser.add_argument("--critical", type=int, default=0)
    parser.add_argument("--high", type=int, default=0)
    parser.add_argument("--medium", type=int, default=None)

    args = parser.parse_args()
    ok = evaluate_quality_gate(
        semgrep_file=args.semgrep,
        trivy_sca_file=args.trivy_sca,
        trivy_iac_file=args.trivy_iac,
        mode=args.mode,
        threshold_critical=args.critical,
        threshold_high=args.high,
        threshold_medium=args.medium,
    )
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
