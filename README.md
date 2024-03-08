# TP Web services Julien GUILET

N'étant pas un expert en Node.js, j'ai démarré avec la structure présentée lors de votre cours. 
Le fichier questions.md est inclus. 
Le fichier TP web services.postman_collection.json contient tout pour Postman. 
Un fichier nommé RedisDocker.txt contient la commande docker pour lancer le redis. 

Pour lancer l'api "npm start", l'api se lance sur le port 3000.

## Réalisation
 - Les routes des trois modèles suivants : utilisateurs, projets et capacités.
 - Un système d'authentification avec token fonctionnel, largement inspiré de votre cours étant donné que le système est identique.
 - Les requêtes sont opérationnelles pour la récupération des projets et des utilisateurs. On peut spécifier n'importe quel champ tant que le schéma le permet.
 - Un début de mise en cache (avec redis) a été entamé pour la requête de récupération des projets, mais n'a pas été achevé malheureusement.

## Réalisation non complète
 - Pas de travail sur les code erreurs
 - La gestion des rôles est absente.
 - La mise en cache ne fonctionne pas, seul un début de travail est là

## Explication du model de données 
Les projets contiennent une "team" qui est une liste de référence d'users.
Les users contiennent des "capacibilities" qui est une liste de référence de capacibilities.



