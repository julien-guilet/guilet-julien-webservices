# QUESTIONS

Merci de répondre librement et le plus clairement possible aux questions suivantes:

## PUT & PATCH
Quelle est la différence entre un PUT un PATCH
Pour moi, un PUT viens "écraser" toutes les données d'un objet par ces nouvelles doonées. Alors qu'un PATCH viens uniquement modifier une seule partie des données.
D'ailleurs dans le body du PUT on met généralement tout le body, alors que pour le PATCH on viens mettre seulement un ou plusieurs champs.

## FETCH/AXIOS
Pourquoi un call vers mon api depuis Postman fonctionne mais semble bloqué lorsque le même call est exécuté par Firefox?
Dans la plupart des cas cela est dû au CORS. Postman n'a pas les mêmes règles de sécurités que les navigateurs. Un moyen pour éviter cela est de configurer le serveur de tel sorte à ce qu'il accepte les requêtes cross-origin.

## NGINX/APACHE
Qu'est ce qui justifie d'avoir en plus de notre api node un serveur web comme Apache ou Nginx?
Avec cette architecture, ce serveur web devient le point d'entrée de notre système. Tous passe par lui, cela permet de gérer par exemple des certificats, les logs, un reverse proxy, de pouvoir faire de la répartition de charge et de mettre du cache côté server. En plus, cela ajoute une couche d'absaction supplémentaire pour les utilisateurs de notre système.


## PERFORMANCES
Citez 3 axes vus en cours pour améliorer les performance d'une api Rest
 - Cache : mettre en place du cache sur les ressources les plus demandées pour éviter un maximum d'appels à la BDD
 - Index en bdd : Gérer au mieu les index au sein de la bdd afin de réduire les temps de recherche 
 - Requêtes vers la bdd : Optimiser nos requêtes en faisant en sorte d'exploiter au maximum les index pour récupèrer un minimum d'information à chaque requête