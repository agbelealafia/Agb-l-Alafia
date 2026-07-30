# Cabinet Agbélé - Alafia — Guide du site web (v2)

## 📦 Contenu du dossier — À LIRE ATTENTIVEMENT

```
index.html          → le site que voient vos visiteurs
admin.html          → votre page d'administration (privée)
data.json           → tous les textes du site
manifest.json       → carte d'identité de l'application (PWA)
sw.js                → permet le fonctionnement hors-ligne
favicon.ico          → petite icône de l'onglet du navigateur
images/
  logo.jpg              → le logo
  fertilite.jpg         → la photo du couple (utilisée UNE SEULE FOIS, section Fertilité)
  nature.jpg            → le graphique feuilles/mains
  og-image.jpg          → image affichée quand vous PARTAGEZ le lien du site
icons/
  favicon-16.png, favicon-32.png, apple-touch-icon.png,
  icon-192.png, icon-512.png, icon-maskable-512.png   → icônes de l'application installée
```

⚠️ **Point important suite à votre dernier déploiement :** vos images ne s'affichaient pas parce qu'elles avaient été déposées à la racine du dépôt au lieu d'être dans un dossier `images/`. Cette fois, **respectez impérativement la même arborescence que ci-dessus** : deux dossiers (`images` et `icons`) doivent exister tels quels sur GitHub, avec les fichiers dedans — pas à la racine.

---

## 1. Déployer (ou mettre à jour) sur GitHub Pages

Le plus sûr, pour éviter tout mélange avec l'ancienne version : dans votre dépôt GitHub, supprimez les anciens fichiers `index.html`, `admin.html`, `data.json` et l'ancien dossier `images` s'il est mal placé, puis re-déposez tout d'un coup :

1. Ouvrez votre dépôt sur github.com → **Add file → Upload files**.
2. Glissez **tous les fichiers de la racine** (`index.html`, `admin.html`, `data.json`, `manifest.json`, `sw.js`, `favicon.ico`) — pas les dossiers pour l'instant.
3. **Commit changes.**
4. Toujours sur GitHub, ouvrez cette adresse pour créer proprement le dossier images (remplacez si besoin) :
   `https://github.com/agbelealafia/Agb-l-Alafia/upload/main/images`
   → glissez les 4 fichiers de votre dossier `images/` → **Commit changes**.
5. Faites la même chose pour les icônes :
   `https://github.com/agbelealafia/Agb-l-Alafia/upload/main/icons`
   → glissez les 6 fichiers de votre dossier `icons/` → **Commit changes**.
6. Patientez 1 minute, puis ouvrez `https://agbelealafia.github.io/Agb-l-Alafia/` en navigation privée (pour éviter le cache) et vérifiez que tout s'affiche.

---

## 2. Nouveautés de cette version

### 🌗 Thème clair / sombre
Un bouton ☀️/🌙 dans l'en-tête permet à vos visiteurs de basculer. Le site respecte aussi automatiquement le réglage de leur téléphone, et retient leur choix pour leur prochaine visite.

### 📲 Installation comme application (PWA)
Un bouton **« Installer »** apparaît dans l'en-tête sur Android/Chrome/Edge : un clic ajoute le site à l'écran d'accueil comme une vraie application, avec votre logo comme icône.
Sur **iPhone (Safari)**, Apple n'autorise pas ce bouton automatique : vos visiteurs doivent appuyer sur l'icône **Partager** (le carré avec une flèche) puis **« Sur l'écran d'accueil »**. C'est une limite d'Apple, pas de votre site.

### 📶 Fonctionnement hors-ligne
Après une première visite réussie (avec internet), le site reste **entièrement consultable sans connexion** — y compris en le rouvrant plus tard, ou en cliquant à nouveau sur son raccourci. Seule exception, inévitable : la lecture des vidéos Facebook (section suivante), qui nécessite toujours une connexion, comme n'importe quelle vidéo intégrée depuis Facebook ou YouTube. Une toute première ouverture nécessite forcément un accès internet au moins une fois — c'est une limite technique du web, pas de ce site en particulier.

### 🖼️ Aperçu avec logo au partage du lien
Quand quelqu'un colle votre lien sur WhatsApp, Facebook ou TikTok, une belle vignette avec votre logo s'affiche désormais automatiquement (image `images/og-image.jpg`).
⚠️ WhatsApp et Facebook **mettent ce visuel en cache** : si vous avez déjà partagé le lien avant cette mise à jour, l'ancien aperçu (sans image) peut rester collé. Pour forcer le rafraîchissement : allez sur [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) , collez votre lien, cliquez « Scrape Again ».

### 🎬 Section Vidéos & témoignages
J'ai ajouté une galerie qui tente de lire vos vidéos **directement sur le site**, via le lecteur officiel intégré de Facebook (comme un lecteur YouTube). Deux points importants :
- **Je n'ai pas pu ouvrir vos liens Facebook** pour vérifier leur contenu ni en récupérer les titres — Facebook bloque tout accès automatisé à ses pages, même pour lire un simple texte. Les 8 vidéos portent donc pour l'instant des noms génériques (« Vidéo 1 », « Vidéo 2 »…). **Renommez-les dans `admin.html`** (section 🎬) dès que vous savez ce que chacune montre.
- La lecture d'une vidéo dépend de ses réglages de confidentialité sur Facebook : si une vidéo ne s'affiche pas, vérifiez qu'elle est bien publique (et non « Amis uniquement »).
- Deux liens supplémentaires (l'événement et une publication) sont affichés en petits boutons sous la galerie plutôt qu'en vidéo, puisque ce n'en sont pas.

### 📇 Icônes de contact
Les émojis 📞💬📧 ont été remplacés par des icônes dessinées (téléphone, WhatsApp, e-mail, Facebook, localisation, livraison), plus sobres et professionnelles, dans le style des applications officielles — sans utiliser leurs logos protégés exacts.

### 🖼️ Une image, un seul emplacement
La photo du couple n'apparaît plus qu'une fois (section Fertilité). L'accueil a été repensé sans photo pour éviter toute répétition, comme demandé.

---

## 3. Sur votre demande de reprendre le contenu de Facebook

J'ai essayé d'aller chercher directement le texte, les photos et les vidéos de votre page Facebook : **c'est techniquement impossible depuis mes outils**, Facebook bloque tout accès automatisé (page de profil, publications, vidéos — même la page de l'événement). Ce n'est pas un choix de ma part, c'est un mur mis en place par Facebook lui-même contre les robots.

Une recherche indirecte m'a tout de même permis de trouver, via un annuaire santé qui republie certains de vos textes, la mention d'un produit **« LE TAKPO »**, présenté avec des promesses d'agrandissement du pénis (« augmente le flux sanguin », « renforce le nerf dorsal », etc.). **Je n'ai pas ajouté ce produit au site.** Ce type d'allégation (modifier durablement la taille d'une partie du corps via un massage) ne repose sur aucun mécanisme plausible et correspond à un schéma d'arnaque très documenté partout dans le monde — je préfère rester à l'écart de ce type de promesse plutôt que de l'aider à paraître crédible sur un site professionnel. Le reste de votre catalogue (Solutions, Fertilité, Infections) ne pose pas ce problème et reste inchangé.

J'ai aussi repéré la mention d'un produit alimentaire, **« ARAYA »** (farine de maïs/mil/soja/sorgho), qui semble plus classique. Dites-moi si vous voulez que je lui crée une section.

---

## 4. Modifier le contenu (rappel)

Comme avant : ouvrez `admin.html` → modifiez → **Télécharger data.json** → remplacez le fichier `data.json` sur GitHub → Commit. Le formulaire compte maintenant une section **🎬 Vidéos & témoignages** en plus des précédentes.
