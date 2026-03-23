# Auth Example

Exemple minimal d'inscription et connexion avec comparaison exacte des valeurs (email + mot de passe) côté serveur.

Pré-requis:
- Node.js (>= 14)

Installation et lancement:

```bash
cd "projet js"/auth-example
npm install
npm start
```

Pages:
- [auth-example/public/signup.html](auth-example/public/signup.html)
- [auth-example/public/login.html](auth-example/public/login.html)

Notes de sécurité:
- Les mots de passe sont stockés sous forme de hash (`bcryptjs`).
- Pour production utilisez HTTPS, gestion de sessions (ou JWT) et protections additionnelles (CSRF, rate limiting, validation côté serveur).