* Retourne la plus grande valeur d'un tableau de nombres. Sans Math.max().

VARIABLES

n,i, max : ENTIER
tableau : TABLEAU


DEBUT
max <- [Ø]
i <- 1 
TANT QUE i < longueur TABLEAU
    SI tableau[i] > max FAIRE
 max <- tableau[i]
    FIN SI
 AFFICHER max
 i <- i+1
 FIN TANT QUE

FIN




* Retourne la plus petite valeur d'un tableau de nombres. Sans Math.min().

VARIABLES

n,i, min : ENTIER
tableau : TABLEAU


DEBUT
min <- [Ø]
i <- 1 
TANT QUE i < longueur TABLEAU
    SI tableau[i] > min FAIRE
 min <- tableau[i]
    FIN SI
 AFFICHER min
 i <- i+1
 FIN TANT QUE

FIN