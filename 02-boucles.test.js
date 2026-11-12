import {
  compterJusqua,
  afficherPairs,
  somme,
  produit,
  compterPairs,
  table,
  multiplesJusqua,
  puissance,
  estDivisibleParTous,
  fibonacci,
} from "./02-boucles.js";

// Pattern 1 : boucle + console.log (pas de valeur de retour à tester)
// On vérifie juste que la fonction s'exécute sans erreur.
describe("compterJusqua", () => {
  it("s'exécute sans erreur pour n=5", () => {
    ``;
    /// Arrange
    const n = 5;
    /// Act
    const comptage = () => compterJusqua(n);
    /// Assert
    expect(comptage).not.toThrow();
  });
});

// Même pattern que compterJusqua — à toi.
// Cas à couvrir : s'exécute sans erreur pour n=8, s'exécute sans erreur pour n=0.
describe("afficherPairs", () => {
  it("s'exécute sans erreur pour n=8", () => {
    /// Arrange
    const n = 8;
    /// Act
    const affichage = () => afficherPairs(n);
    /// Assert
    expect(affichage).not.toThrow();
  });
});

// Pattern 2 : boucle + accumulateur numérique → .toBe() sur un nombre.
// On te montre somme en entier.
describe("somme", () => {
  it("retourne 15 pour n=5", () => {
    /// Arrange
    const n = 5;
    const attendu = 15;
    /// Act
    const resultat = somme(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });
  it("retourne 1 pour n=1", () => {
    /// Arrange
    const n = 1;
    const attendu = 1;
    /// Act
    const resultat = somme(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });
});
it("retourne 0 pour n=0", () => {
  /// Arrange
  const n = 0;
  const attendu = 0;
  /// Act
  const resultat = somme(n);
  /// Assert
  expect(resultat).toBe(attendu);
});

// Même pattern que somme — à toi.
// Cas à couvrir : produit(5) → 120, produit(1) → 1, produit(0) → 1.
describe("produit", () => {
  it("retourne 120 pour n=5", () => {
    /// Arrange
    const n = 5;
    const attendu = 120;
    ``;
    /// Act
    const resultat = produit(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });

  it("retourne 1 pour n=1", () => {
    const n = 1;
    const attendu = 1;
    /// Act
    const resultat = produit(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });
  it("retourne 1 pour n=0", () => {
    const n = 0;
    const attendu = 1;
    /// Act
    const resultat = produit(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });
});

// Même pattern que somme — à toi.
// Cas à couvrir : compterPairs(10) → 5, compterPairs(7) → 3, compterPairs(1) → 0.
describe("compterPairs", () => {
  it("retourne 5 pour n=10", () => {
    /// Arrange
    const n = 10;
    const attendu = 5;
    /// Act
    const resultat = compterPairs(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });
  it("retourne 3 pour n=7", () => {
    /// Arrange
    const n = 7;
    const attendu = 3;
    /// Act
    const resultat = compterPairs(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });

  it("retourne 0 pour n=1", () => {
    /// Arrange
    const n = 1;
    const attendu = 0;
    /// Act
    const resultat = compterPairs(n);
    /// Assert
    expect(resultat).toBe(attendu);
  });
});

// Pattern 3 : boucle + construction de tableau → .toEqual() sur un tableau.
// On te montre table en entier — c'est le premier .toEqual().
describe("table", () => {
  it("retourne les 3 premiers multiples de 3", () => {
    /// Arrange
    const n = 3;
    const attendu = [3, 6, 9];
    /// Act
    const resultat = table(n);
    /// Assert
    expect(resultat).toEqual(attendu);
  });
  it("retourne les 5 premiers multiples de 5", () => {
    /// Arrange
    const n = 5;
    const attendu = [5, 10, 15, 20, 25];
    /// Act
    const resultat = table(n);
    /// Assert
    expect(resultat).toEqual(attendu);
  });

  it("retourne un tableau vide pour n=0", () => {
    /// Arrange
    const n = 0;
    const attendu = [];
    /// Act
    const resultat = table(n);
    /// Assert
    expect(resultat).toEqual(attendu);
  });
});

// Même pattern que table — à toi.
// Cas à couvrir : multiplesJusqua(3, 12) → [3, 6, 9, 12], multiplesJusqua(7, 20) → [7, 14].
describe("multiplesJusqua", () => {
  it("retourne les multiples jusqu'à 12 pour n=3", () => {
    /// Arrange
    const n = 3;
    const limite = 12;
    const attendu = [3, 6, 9, 12];
    /// Act
    const resultat = multiplesJusqua(n, limite);
    
    /// Assert
    expect(resultat).toEqual(attendu);

  });
  it("retourne les multiples jusqu'à 14 pour n=7", () => {
    /// Arrange
    const n = 7;
    const limite = 20;
    const attendu = [7,14];
    /// Act
    const resultat = multiplesJusqua(n, limite);
    
    /// Assert
    expect(resultat).toEqual(attendu);

  });
});

// [FACULTATIF] Même pattern que somme/produit — à toi.
// Cas à couvrir : puissance(2, 10) → 1024, puissance(3, 3) → 27, puissance(5, 0) → 1.
describe("puissance", () => {
  // à compléter
});

// [FACULTATIF] Même pattern que table avec .toEqual() — à toi.
// Cas à couvrir : estDivisibleParTous(12, [2, 3, 4]) → true, estDivisibleParTous(10, [2, 3]) → false.
describe("estDivisibleParTous", () => {
  // à compléter
});

// [FACULTATIF] Même pattern que table — à toi.
// Cas à couvrir : fibonacci(6) → [0, 1, 1, 2, 3, 5], fibonacci(1) → [0].
describe("fibonacci", () => {
  // à compléter
});
