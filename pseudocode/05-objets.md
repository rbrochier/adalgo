* Reçoit un objet { prenom, nom } et retourne le nom complet.

VARIABLES
prenom, nom : CHAINE
personne : OBJET


DEBUT
    LIRE personne

    prenom <- prenom de personne
    nom <- nom de personne

RETOURNE 
    prenom + " " + nom

FIN    


* Reçoit un tableau de { nom, age } et retourne ceux dont l'âge est >= ageMin.

VARIABLES
personnes, personne, resultat: TABLEAU
age, ageMin: ENTIER
nom: CHAINE



DEBUT
    LIRE personnes, ageMin
    resultat <- TABLEAU vide
        SI age de personne >= ageMin ALORS
        ajouter personne à resultat
    RETOURNE resultat

        FIN SI
FIN