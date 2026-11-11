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

  i : ENTIER
  n : ENTIER
  
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

i : ENTIER
n : ENTIER
total : ENTIER


DEBUT
  LIRE n
  i <- 1
  total <- 0
    TANT QUE i <= n FAIRE
    total <- total + i
    FIN TANT QUE
FIN

* Retourne le produit de tous les entiers de 1 à n (factorielle).

VARIABLES

i : ENTIER
n : ENTIER
total : ENTIER

DEBUT
  LIRE n
  total <- 1
  i ← 1
    TANT QUE i <= n FAIRE
    total <- total x i
    i ← i + 1
    FIN TANT QUE
  AFFICHER TOTAL
FIN

 * Retourne le nombre d'entiers pairs entre 1 et n inclus.

 VARIABLES

i : ENTIER
n : ENTIER
total : ENTIER

DEBUT
  LIRE n
  i ← 1
  total ← 0
  TANT QUE i <= n FAIRE
      SI i MOD 2 = 0 ALORS
          total ← total + i
      FIN SI
      i ← i + 1
  FIN TANT QUE
  AFFICHER total
FIN


 * Retourne un tableau contenant les n premiers multiples de n. 

VARIABLES
i : ENTIER
n : ENTIER
multiples :[]


DEBUT
LIRE n
i <- 1
multiples <- []

TANT QUE i <= n FAIRE
AJOUTER n * i à multiples
i <- i + 1
FIN TANT QUE
AFFICHER multiples

FIN






