- Retourne true si n est positif ou nul, false sinon.

VARIABLES

n : ENTIER
estPositif : BOOLEEN

DEBUT
    SI n > = 0 ALORS
        AFFICHER estPositif : TRUE
    SINON
        AFFICHER estPositif : FALSE
    FIN SI
FIN

- Retourne true si n est pair.

VARIABLES

n: ENTIER
estPair : BOOLEEN

DEBUT
    SI n MOD 2 = 0 ALORS
        AFFICHER true
    SINON
        AFFICHER false  
    FIN SI
FIN

- Retourne le plus grand des deux nombres. Sans Math.max().
  VARIABLES

a, b : ENTIER
max : ENTIER

DEBUT
    SI a > = b ALORS
        AFFICHER a
    SINON SI b > = a ALORS
        AFFICHER b 
    FIN SI
FIN


 * Retourne la mention correspondant à la note.

 VARIABLES 
 note : ENTIER
 mention : CHAINE

 DEBUT
    SI note >=16 ALORS
        AFFICHER "Très Bien"
    SINON SI note >=14 ALORS
        AFFICHER "Bien"
    SINON SI note >=12 ALORS
        AFFICHER "Assez Bien"
    SINON SI note >=10 ALORS
        AFFICHER "Passable"
    SINON 
        AFFICHER "Insuffisant"
FIN SI
FIN

 * Retourne "Fizz" si divisible par 3, "Buzz" par 5,
 * "FizzBuzz" si les deux, sinon le nombre en string.

 VARIABLES 
 