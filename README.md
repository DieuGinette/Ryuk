# Ryuk Discord Bot

Ryuk est un bot Discord conçu pour apporter du fun et de l'utilité à votre serveur.

## Fonctionnalités

- **/meme**: Obtenir un mème aléatoire à partir de diverses sources.
- **/avatar**: Obtenir l'avatar d'un utilisateur.
- **/weather**: Consulter la météo d'une ville française.
- **/say**: Faire répéter au robot ce que vous lui dites.
- **/akinator**: Jouez à Akinator directement sur votre serveur Discord.
- Et plus encore!

## Pour commencer

Pour ajouter Ryuk à votre serveur, utilisez le lien suivant: [Invite Ryuk](https://discord.com/api/oauth2/authorize?client_id=1040585754981711972&permissions=8&scope=bot)

## Commands

- `/meme`: Obtenir un mème aléatoire à partir de diverses sources.
- `/avatar <user>`: Obtenir l'avatar d'un utilisateur.
- `/meteo <city>`: Consulter la météo d'une ville française.
- `/say <message>`: Faire répéter au robot ce que vous lui dites.
- `/akinator`: Jouez à Akinator directement sur votre serveur Discord.

## Mise en place

1. Cloner le dépôt :

    ```bash
    git clone https://github.com/DieuGinette/Ryuk.git
    ```

2. Créez un fichier `.env` dans le répertoire racine et ajoutez ce qui suit :

    ```env
    TOKEN=your_discord_bot_token
    PENWEATHERMAP_TOKEN=your_openweathermap_api_key
    ```

3. Exécuter le bott:

    ```bash
    node index.js
    ```
