#!/usr/bin/env python3
import os
import sys
import json
import subprocess
import urllib.request
import urllib.error

# ══════════════════════════════════════════════════════════════
#  FILL THESE IN BEFORE RUNNING
# ══════════════════════════════════════════════════════════════
GITHUB_USERNAME = ""        # e.g.  "rajkumar"
GITHUB_TOKEN    = ""  # from github.com/settings/tokens
REPO_NAME       = ""           # name for the new private repo
# ══════════════════════════════════════════════════════════════


# ── HELPERS ───────────────────────────────────────────────────

def banner(msg):
    print(f"\n{'─' * 50}")
    print(f"  {msg}")
    print('─' * 50)

def run(cmd, cwd=None):
    """Run a shell command, print stderr only on real errors."""
    result = subprocess.run(
        cmd, shell=True, cwd=cwd,
        capture_output=True, text=True
    )
    if result.returncode != 0:
        err = result.stderr.strip()
        # git warnings (remote already set, etc.) are non-fatal
        if err and "warning" not in err.lower() and "already exists" not in err.lower():
            print(f"    ⚠️  {err}")
    return result.returncode == 0


# ── STEP 1: VALIDATE ──────────────────────────────────────────

def validate():
    banner("Checking requirements")

    if GITHUB_USERNAME == "your_github_username":
        print("❌  Please open setup.py and fill in GITHUB_USERNAME, GITHUB_TOKEN.")
        sys.exit(1)

    # Check Git
    try:
        subprocess.run(["git", "--version"], capture_output=True, check=True)
        print("✅  Git found.")
    except FileNotFoundError:
        print("❌  Git is not installed. Download it from: https://git-scm.com/")
        sys.exit(1)

    print("✅  All checks passed.")


# ── STEP 2: CREATE PRIVATE REPO VIA GITHUB API ────────────────

def create_repo():
    banner(f"Creating private repo '{REPO_NAME}' on GitHub")

    payload = json.dumps({
        "name":        REPO_NAME,
        "private":     True,
        "description": "🎂 A birthday surprise website",
        "auto_init":   False,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.github.com/user/repos",
        data=payload,
        method="POST",
    )
    req.add_header("Authorization",  f"token {GITHUB_TOKEN}")
    req.add_header("Accept",         "application/vnd.github.v3+json")
    req.add_header("Content-Type",   "application/json")

    try:
        with urllib.request.urlopen(req) as resp:
            if resp.status == 201:
                print(f"✅  Repo '{REPO_NAME}' created.")
                return True
    except urllib.error.HTTPError as e:
        body    = json.loads(e.read().decode())
        message = body.get("message", "Unknown error")

        if "already exists" in message:
            print(f"⚠️   Repo '{REPO_NAME}' already exists — continuing with push.")
            return True

        print(f"❌  GitHub API error ({e.code}): {message}")
        if e.code == 401:
            print("    → Your GITHUB_TOKEN is invalid or missing 'repo' scope.")
        if e.code == 422:
            print("    → Repo name may be invalid. Try a different REPO_NAME.")
        return False


# ── STEP 3: PUSH FILES ────────────────────────────────────────

def push_files():
    banner("Pushing files to GitHub")

    project_dir = os.path.dirname(os.path.abspath(__file__))
    remote_url  = f"https://{GITHUB_TOKEN}@github.com/{GITHUB_USERNAME}/{REPO_NAME}.git"

    # Write .gitignore
    gitignore = os.path.join(project_dir, ".gitignore")
    if not os.path.exists(gitignore):
        with open(gitignore, "w") as f:
            f.write(".DS_Store\nThumbs.db\n*.env\n__pycache__/\n")

    steps = [
        ("git init",                              "Initialising git"),
        ("git checkout -b main",                  "Switching to main branch"),
        ("git add .",                             "Staging all files"),
        ('git commit -m "🎂 Birthday website"',   "Committing"),
        ("git remote remove origin",              "Removing old remote (if any)"),
        (f"git remote add origin {remote_url}",  "Adding remote"),
        ("git push -u origin main --force",      "Pushing to GitHub"),
    ]

    for cmd, label in steps:
        print(f"  › {label}...")
        run(cmd, cwd=project_dir)

    print()
    print("✅  Done!")
    print()
    print(f"   📦  Repo URL  : https://github.com/{GITHUB_USERNAME}/{REPO_NAME}")
    print()
    print("   📋  NEXT STEPS")
    print("   ─────────────────────────────────────────────────")
    print("   1. Edit config.js — fill in her name, your messages,")
    print("      image filenames, and any animation tweaks.")
    print()
    print("   2. Add your images to the /images/ and /images/gallery/")
    print("      folders (see images/IMAGES_README.txt for naming guide).")
    print()
    print("   3. Push your changes:")
    print("        git add .")
    print('        git commit -m "my updates"')
    print("        git push")
    print()
    print("   4. To host it FREE on GitHub Pages:")
    print("      Repo → Settings → Pages → Source: main branch → Save")
    print(f"      Your live URL: https://{GITHUB_USERNAME}.github.io/{REPO_NAME}/")
    print()


# ── MAIN ──────────────────────────────────────────────────────

if __name__ == "__main__":
    print()
    print("══════════════════════════════════════════════════")
    print("         BIRTHDAY WEBSITE — GITHUB SETUP         ")
    print("══════════════════════════════════════════════════")

    validate()
    if create_repo():
        push_files()
