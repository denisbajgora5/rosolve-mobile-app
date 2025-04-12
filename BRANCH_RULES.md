# 🚦 Branch Workflow & Contribution Rules – Team Rosolve

To keep our codebase safe, consistent, and high-quality, follow the rules below:

---

## ✅ Main Branch Protection

1. **🚫 No direct pushes to `main`.**  
   All changes must go through a Pull Request (PR).  
   PRs must be reviewed and approved by **Denis** or **Noor** before merging.

2. **✅ Status checks must pass before merging.**  
   CI (Linting, Build, Tests) will automatically run.  
   If your PR fails, fix the errors before asking for review.

---

## 🌿 Branch Pushing Rules

3. **✅ You can push directly to your own branches**, like:
   ```
   feature/login-screen
   bugfix/crash-on-start
   refactor/user-service
   ```

4. **💡 Check CI after each push** (GitHub Actions tab):  
   - Look for a ✅ success badge.  
   - If you see ❌ failure, **check logs and fix issues**.

---

## 🔍 Pull Request Guidelines

5. **Clear PR Titles:**
   - `feat: add user authentication`
   - `fix: null error on dashboard`

6. **Assign reviewers:**
   - Add **Denis** and/or **Noor** as reviewers.

7. **Don’t merge unless:**
   - All checks pass ✅
   - At least one reviewer approves ✅

---

## 🔐 Repo Protections in Place

- **Force pushes are blocked.**
- **Deleting branches is blocked.**
- **Linear history is required** (no merge commits, use squash if needed).

---

## 🧠 Git Hygiene Tips

- 🔴 **REBASING IS MANDATORY before opening a pull request.**  
  > If your branch is behind `main`, run:
  > ```bash
  > git fetch origin
  > git rebase origin/main
  > ```
  > **Do not use `git merge main`** – it breaks history and will be blocked.

- Keep commits small and focused.
- Don’t commit `.env` or sensitive data — they're gitignored.

---

## 👥 Need Help?

- **CI errors / GitHub issues** → Noor  
- **Architecture / logic / flows** → Denis

---

Let’s keep it clean and collaborative 🚀  