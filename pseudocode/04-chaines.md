// exo 1 // 

VARIABLES
    chaine, resultat : CHAINE
    i : ENTIER

DEBUT
    LIRE chaine
    resultat ← ""
    POUR i ← longueur(chaine)-1 à 0  PAR PAS DE -1
        resultat ← resultat + chaine [i]
    FIN POUR
    RETOURNE resultat
FIN