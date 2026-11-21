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


// exo 2 // 

VARIABLES
    chaine, resultat : CHAINE
    i : ENTIER

DEBUT
LIRE chaine
resultat <- ""
    POUR i ← longueur(chaine)-1 à 0  PAR PAS DE -1
        resultat ← resultat + chaine [i]
    FIN POUR
        SI resultat == chaine ALORS
        RETOURNE true
    SINON
         RETOURNE false
    FIN SI
   
    FIN

// exo 3 // 

VARIABLES
    chaine, voyelles : CHAINE
    resultat, i : ENTIER

DEBUT
    LIRE chaine
    voyelles <- "aeiouy"
    resultat <- 0
    POUR i <- 0 à longueur(chaine) -1 PAR PAS DE 1
        SI contient (voyelles, chaines[i] ) ALORS
            resultat <- resultat + 1
        FIN SI
       
    FIN POUR    
    AFFICHER resultat
FIN    
