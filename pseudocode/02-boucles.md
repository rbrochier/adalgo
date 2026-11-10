 * Affiche les nombres de 1 à n dans la console.
VARIABLES
  n : ENTIER
  i : ENTIER
DEBUT
  LIRE n
  POUR i DE 1 À n FAIRE
    AFFICHER i
  FIN POUR
FIN



 * Affiche uniquement les nombres pairs de 1 à n dans la console.
VARIABLES
  n : ENTIER
  i : ENTIER
DEBUT
  LIRE n
  i ← 1
  TANT QUE i <= n FAIRE
    SI i MOD 2 = 0 ALORS
      AFFICHER i
    FIN SI
    i ← i + 1
  FIN TANT QUE
FIN

* Retourne la somme de tous les entiers de 1 à n.
VARIABLES
n : ENTIER
somme : ENTIER
compteur : ENTIER


DEBUT
somme <- 0
TANT QUE compteur <= n FAIRE
somme <- somme + n
FIN TANT QUE
FIN

