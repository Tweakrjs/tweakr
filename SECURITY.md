# Security Policy for Tweakr

## 🛡 Supported Versions

We actively maintain security fixes for the **latest stable version** of Tweakr. Older versions may not receive security updates.

---

## ⚠️ Reporting a Vulnerability

If you discover a security vulnerability:

1. **Do not open a public issue.**
   Instead, send a confidential report to: **[coxleehubilla@gmail.com](mailto:coxleehubilla@gmail.com)** (or your preferred secure email).

2. Include the following details:

   - Version of Tweakr affected
   - Steps to reproduce the vulnerability
   - Impact and potential risks
   - Any suggested mitigation if possible

3. **Response Time**
   We aim to respond within **3 business days**. Critical vulnerabilities will be prioritized.

---

## 🔒 Security Practices

- All code is **reviewed** before merging
- **TypeScript typings** reduce runtime type errors
- Functions are designed to be **pure and modular** to minimize side effects
- All async and browser helpers handle **fallbacks and errors gracefully**
- Dependencies are reviewed and **kept minimal** to reduce attack surface

---

## 💡 Best Practices for Users

- Always **update to the latest Tweakr version** for security patches
- Validate and sanitize any **user input** before passing to Tweakr utilities
- Avoid executing untrusted scripts with `eval` or similar approaches
- For browser utilities, ensure **secure contexts (HTTPS)** when copying or reading from the clipboard

---

## 🔄 Security Fix Process

1. Receive and validate vulnerability report
2. Patch the issue in a minor or patch release (`v0.x.y`)
3. Update **CHANGELOG.md** with the security fix
4. Notify users if the vulnerability affects previous versions

---

## 📞 Contact

- Security reports: **[coxleehubilla@gmail.com](mailto:coxleehubilla@gmail.com)**
- For general issues: [GitHub Issues](https://github.com/coxxanthony/tweakr/issues)
