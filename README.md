# 📋 Ma Liste de Tâches

Une application web simple et élégante pour gérer vos tâches quotidiennes. Créée avec HTML, CSS et JavaScript vanilla.

## ✨ Fonctionnalités

- ✅ **Ajouter des tâches** - Créez rapidement vos tâches via un champ de texte
- ✓ **Marquer les tâches comme complétées** - Cochez les tâches pour les marquer comme faites
- 🗑️ **Supprimer des tâches** - Supprimez les tâches indésirables
- 💾 **Persistance des données** - Vos tâches sont sauvegardées dans le localStorage du navigateur
- 📊 **Compteur de progression** - Visualisez combien de tâches vous avez complétées
- 🎨 **Design moderne et intuitif** - Interface élégante avec dégradé de couleur
- 📱 **Responsive** - Fonctionne sur tous les appareils (desktop, tablette, mobile)

## 🚀 Démarrage rapide

### Prérequis

Aucune dépendance externe ! L'application ne nécessite que :
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucune installation serveur requise

### Installation

1. **Clonez ou téléchargez le projet**
   ```bash
   git clone <url-du-repo>
   cd todo-app
   ```

2. **Ouvrez l'application**
   - Ouvrez simplement le fichier `html/index.html` dans votre navigateur
   - Ou utilisez un serveur local (optionnel) :
     ```bash
     # Avec Python 3
     python -m http.server 8000
     
     # Avec Node.js et http-server
     npx http-server
     ```

3. **Accédez à l'application**
   - http://localhost:8000/html/index.html

##  Utilisation

1. **Ajouter une tâche** : Tapez votre tâche dans le champ de texte et cliquez sur "Ajouter" (ou appuyez sur Entrée)
2. **Compléter une tâche** : Cochez la case à côté de la tâche pour la marquer comme complétée
3. **Supprimer une tâche** : Cliquez sur le bouton "Supprimer" pour enlever la tâche
4. **Voir votre progression** : Le compteur en bas affiche combien de tâches vous avez complétées

##  Structure du projet

```
todo-app/
├── index.html          # Le fichier principal HTML
├── css/
│   └── style.css       # Styles de l'application
├── js/
│   └── script.js       # Logique JavaScript
└── README.md           # Ce fichier
```

##  Détails techniques

### Technologies utilisées
- **HTML5** - Structure de la page
- **CSS3** - Styling avec dégradé, flexbox et transitions
- **JavaScript (Vanilla)** - Logique et gestion des tâches

### Stockage des données
Les tâches sont stockées localement dans le **localStorage** du navigateur :
- Format : JSON
- Clé : `tasks`
- Structure : Array d'objets `{ text: string, completed: boolean }`

### Compatibilité navigateur
| Navigateur | Support |
|-----------|---------|
| Chrome | ✅ Oui |
| Firefox | ✅ Oui |
| Safari | ✅ Oui |
| Edge | ✅ Oui |
| IE 11 | ❌ Non |

##  Design

L'application utilise :
- Dégradé de couleur principal : bleu et violet
- Palette de couleurs minimaliste et moderne
- Design responsive pour tous les écrans
- Animations fluides pour une meilleure UX

##  Améliorations futures possibles

- [ ] Ajouter la possibilité de modifier une tâche existante
- [ ] Implémenter des catégories ou des étiquettes pour les tâches
- [ ] Ajouter la suppression en bloc des tâches complétées
- [ ] Implémenter un système de tri (par date, par priorité, etc.)
- [ ] Ajouter un thème sombre
- [ ] Synchroniser les données avec un serveur backend
- [ ] Exporter/importer les tâches (JSON, CSV)
- [ ] Notifications/rappels pour les tâches

##  Signaler un bug

Si vous trouvez un bug, veuillez créer une **issue** dans le repository.

##  Licence

Ce projet est libre d'utilisation. Utilisez-le comme bon vous semble !

## Auteur

Créé avec  - N'hésitez pas à le personnaliser selon vos besoins !

---

**Besoin d'aide ?** Consultez le code source commenté pour mieux comprendre le fonctionnement.