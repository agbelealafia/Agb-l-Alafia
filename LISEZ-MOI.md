# Cabinet Agbélé - Alafia — Guide du site web

## 📦 Contenu du dossier

```
index.html      → le site que voient vos visiteurs
admin.html      → votre page d'administration (à garder pour vous, pas pour les clients)
data.json       → tous les textes du site (c'est ce fichier que vous mettrez à jour)
images/
  logo.jpg        → le logo
  fertilite.jpg   → la photo du couple
  nature.jpg      → le graphique feuilles/mains
```

**Comment ça marche :** `index.html` va toujours chercher ses textes dans `data.json` au moment où un visiteur ouvre la page. Pour changer un texte, un numéro de téléphone, etc., vous n'ouvrez **jamais** `index.html`. Vous ouvrez `admin.html`, vous modifiez, vous téléchargez un nouveau `data.json`, et vous le déposez sur GitHub à la place de l'ancien. C'est tout — aucune ligne de code à toucher.

---

## 1. Mettre le site en ligne sur GitHub Pages (à faire une seule fois)

1. Allez sur [github.com](https://github.com) et connectez-vous (ou créez un compte gratuit).
2. En haut à droite, cliquez sur **+** puis **New repository**.
3. Donnez un nom, par exemple `agbele-alafia` → **Create repository**.
4. Sur la page du dépôt vide, cliquez sur **uploading an existing file**.
5. Glissez-déposez **tous** les fichiers de ce dossier : `index.html`, `admin.html`, `data.json`, et le dossier `images` (glissez le dossier entier, GitHub garde l'organisation).
6. En bas de page, cliquez sur **Commit changes**.
7. Allez dans l'onglet **Settings** du dépôt → menu **Pages** (à gauche).
8. Sous « Build and deployment », choisissez **Branch: main**, dossier **/ (root)** → **Save**.
9. Patientez 1 à 2 minutes, puis rafraîchissez la page : GitHub affiche l'adresse de votre site, du type :
   `https://votre-nom-utilisateur.github.io/agbele-alafia/`

C'est cette adresse que vous partagerez à vos clients (sur Facebook, WhatsApp, vos cartes de visite, etc.).

---

## 2. Modifier les textes du site (à chaque fois que vous voulez changer quelque chose)

1. Ouvrez le fichier **`admin.html`** directement sur votre ordinateur ou téléphone (double-cliquez dessus, il s'ouvre dans votre navigateur — pas besoin d'internet).
2. En haut, cliquez sur **📂 Charger mon data.json** et sélectionnez votre `data.json` actuel (celui déjà en ligne, ou celui fourni ici si c'est votre première modification).
3. Modifiez les champs que vous voulez changer. L'**aperçu à droite** se met à jour immédiatement pendant que vous tapez.
4. Cliquez sur **📥 Télécharger data.json**. Le fichier arrive dans votre dossier *Téléchargements*.
5. Retournez sur votre dépôt GitHub, cliquez sur le fichier **`data.json`** existant.
6. Cliquez sur l'icône ✏️ (crayon, « Edit this file ») **ou** utilisez **Add file → Upload files** et déposez le nouveau `data.json` téléchargé (il remplacera automatiquement l'ancien s'il porte le même nom).
7. En bas de page, cliquez sur **Commit changes**.

➡️ En quelques secondes, **tous** vos visiteurs, sur **tous** les appareils, verront le nouveau contenu — sans rien réinstaller, sans mise à jour d'application.

---

## 3. Changer une image (logo, photo, etc.)

Le contenu texte passe par `data.json`, mais une photo doit être déposée comme fichier. C'est simple et ne demande toujours aucun code :

1. Préparez votre nouvelle image et **donnez-lui exactement le même nom** que celle à remplacer (`logo.jpg`, `fertilite.jpg` ou `nature.jpg`).
2. Sur GitHub, ouvrez le dossier `images` → **Add file → Upload files** → déposez la nouvelle image → **Commit changes**. Elle remplace l'ancienne automatiquement.

*(Astuce : si le nom de fichier est différent, GitHub l'ajoutera comme une image en plus sans remplacer l'ancienne — le site continuera d'afficher l'ancienne image tant que le nom ne correspond pas exactement.)*

---

## 4. Bon à savoir

- **`admin.html` ne doit pas être partagé aux clients** — c'est votre outil personnel. Il n'est protégé par aucun mot de passe : n'importe qui connaissant son adresse pourrait générer un `data.json`, mais **personne ne peut modifier votre site réel** sans avoir accès à votre compte GitHub. Vous seul décidez quel `data.json` est réellement mis en ligne.
- Si vous ouvrez `index.html` directement depuis votre ordinateur (sans passer par GitHub), certains navigateurs bloquent la lecture locale de `data.json` : le site affiche alors un contenu de secours identique à celui d'aujourd'hui. Ce n'est pas un bug — une fois en ligne sur GitHub Pages, tout fonctionne normalement.
- Le site est déjà pensé pour bien s'afficher sur téléphone (menu ☰ en haut à droite sur petit écran).

---

## 5. Une remarque en passant

En reprenant vos publications Facebook, j'ai remarqué d'autres gammes que vous proposez (Dégraisseur, Hémorroïdes, Assurance Foyer) qui ne sont pas encore reprises sur ce site — je suis resté fidèle au plan de site que vous aviez défini. Si vous voulez que je leur ajoute une section plus tard, dites-le-moi.
