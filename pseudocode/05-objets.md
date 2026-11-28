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

 * Reçoit un tableau de { nom, ... } et retourne le tableau trié par ordre alphabétique du nom.



VARIABLES
  personnes : TABLEAU
  copie : TABLEAU

DEBUT
  copie ← copie de personnes

  TRIER copie EN COMPARANT les personnes deux à deux :

    pour deux personnes a et b,

    SI nom de a < nom de b ALORS a passe avant b

    SINON SI nom de a > nom de b ALORS b passe avant a

    SINON leur ordre ne change pas

  RETOURNER copie
  
FIN