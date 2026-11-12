 * Affiche les nombres de 1 à n dans la console.
VARIABLES
  n, i : ENTIER

DEBUT
  LIRE n
  POUR i DE 1 À n FAIRE
    AFFICHER i
  FIN POUR
FIN



 * Affiche uniquement les nombres pairs de 1 à n dans la console.
VARIABLES

  i, n : ENTIER
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
i, n, total : ENTIER

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
i,n, total: ENTIER

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
i,n  : ENTIER
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
i,n : ENTIER
multiples :TABLEAU

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


* Retourne un tableau contenant tous les multiples de n inférieurs ou égaux à limite.

VARIABLES
i,n, limite : ENTIER
multiples :TABLEAU

DEBUT
LIRE n
LIRE limite
i <- 1
multiples <- []

  TANT QUE i * n <= limite 
    AJOUTER i *n à multiples
FIN TANT QUE
  AFFICHER multiples
FIN



