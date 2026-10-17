# GRM Garage Rezgui Mohamed — Site vitrine

Site statique trilingue **français / العربية / English**. Aucun framework et aucun build nécessaires.

## Publication Netlify (méthode simple)

1. Ouvrir https://app.netlify.com/drop
2. Glisser-déposer le fichier ZIP `GRM_Garage_Website_Netlify.zip` (ou le dossier extrait).
3. Netlify publie directement le fichier `index.html` situé à la racine du ZIP.
4. Pour un nom de domaine personnalisé : Netlify → Domain management.

## Fichiers

- `index.html` : structure du site, contact, données SEO (schema.org)
- `styles.css` : mise en page responsive, couleurs, animations
- `app.js` : menu mobile, traduction français/arabe, prise de rendez-vous via WhatsApp
- `assets/*.svg` : illustrations originales intégrées au ZIP, logo et aperçu social
- `netlify.toml` : en-têtes de sécurité, configuration Netlify

## Informations affichées — à confirmer avec le propriétaire

- Téléphone / WhatsApp : **+216 23 740 708**
- Adresse : **9 Rue Farj Gaâloul, Tunis 1005, Tunisie**
- Email : **grm.automobiles@gmail.com** (repris du site d'exemple ; à confirmer)
- Horaires : lundi-samedi **08h00–18h00**, dimanche **08h00–13h00** (à confirmer avant publication)
- Note Google Maps : **5.0 / 5, 76 avis** au moment de la création, donnée susceptible d'évoluer
- Avis : extraits de commentaires publics ; ils restent en français pour préserver leurs propos.

Liens officiels fournis :
- Facebook : https://www.facebook.com/garage.rezgui.mohamed/
- LinkedIn : https://tn.linkedin.com/in/rezgui-mohamed-230041242
- Google Maps : https://maps.app.goo.gl/XvG1W4b2zNwUf4cM6

Le formulaire de réservation **n'envoie pas d'e-mail et n'enregistre aucune donnée** : il prépare un message WhatsApp à envoyer au numéro ci-dessus. Il ne constitue pas une réservation confirmée.

Les 3 visuels du site sont des **illustrations techniques créées pour cette maquette**, pas des photographies du garage. Une image de moteur Unsplash chargée en fond de page d'accueil est purement décorative (le site fonctionne également sans elle). Les polices Google Fonts nécessitent une connexion ; une police de remplacement est prévue.

## Personnaliser

- Téléphone : recherchez `21623740708` dans `index.html` et `app.js`.
- Adresse : recherchez `Farj` dans `index.html` et `app.js`.
- Couleur accent : modifiez `--lime` dans `styles.css`.
- Textes : modifiez le HTML français et les dictionnaires `fr` / `ar` dans `app.js`.
- Photo réelle : remplacez les illustrations `assets/*.svg` par vos photos locales ; conservez les noms ou modifiez leurs chemins.

## Confidentialité

Aucun tracker, cookie publicitaire, service d'analyse ni serveur de stockage de formulaire. La carte Google, la police Google et l'image Unsplash sont des ressources tierces externes. Ajoutez des mentions légales et une politique de confidentialité adaptées avant la publication officielle si nécessaire.
