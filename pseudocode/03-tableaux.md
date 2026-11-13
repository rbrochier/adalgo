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

* Retourne la moyenne des valeurs. Retourne null si le tableau est vide.

VARIABLES
moyenne: REEL
i,somme  : ENTIER
tableau : TABLEAU


DEBUT
moyenne <- 0
somme <- 0

   SI 
      longueur tableau = 0 ALORS
      AFFICHER null
   SINON
      somme <- 0 
      POUR i <- 0 à longueur tableau -1 
         somme <- somme + tab[i] 
         FIN POUR

      moyenne <- somme / longueur tableau
      AFFICHER moyenne
   FIN SI


FIN







  

FIN