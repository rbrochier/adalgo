import {
  maximum,
  minimum,
  moyenne,
  contient,
  compter,
  inverser,
  sansDoublons,
} from "./03-tableaux.js";

// Tu connais maintenant .toBe() et .toEqual().
// Nouveau cas ici : tester avec des négatifs et des tableaux vides.
// On te montre maximum en entier.
describe("afficherMaximum", () => {
  it("retourne le maximum", () => {
    expect(maximum([3, 7, 2, 9, 1])).toBe(9);
  });
  it("fonctionne avec un seul élément", () => {
    expect(maximum([5])).toBe(5);
  });
  it("fonctionne avec des négatifs", () => {
    expect(maximum([-3, -1, -7])).toBe(-1);
  });
});

// Même pattern qu'maximum — à toi.
// Cas à couvrir : cas normal, négatifs.
describe("afficherMinimum", () => {
  it("retourne le minimum", () => {
    expect(minimum([3, 7, 2, 9, 1])).toBe(1);
  });
  it("fonctionne avec un seul élément", () => {
    expect(minimum([5])).toBe(5);
  });
  it("fonctionne avec des négatifs", () => {
    expect(minimum([-3, -1, -7])).toBe(-7);
  });
});

// Nouveau cas : retourner null. On te montre moyenne en entier.
describe("moyenne", () => {
  it("retourne la moyenne", () => {
    expect(moyenne([2, 4, 6])).toBe(4);
  });
  it("retourne null pour un tableau vide", () => {
    expect(moyenne([])).toBe(null);
  });
  it("fonctionne avec un seul élément", () => {
    expect(moyenne([10])).toBe(10);
  });
});

// Même pattern — à toi.
// Cas à couvrir : valeur présente, valeur absente, tableau vide.
describe("contient", () => {
  it("retourne true si la valeur est présente", () => {
    /// Arrange
    const tableau = [8, 12, 6, 0];
    const valeur = 12;
    /// Act
    const presente = contient(tableau, valeur);
    /// Assert
    expect(presente).toBe(true);
  });

  it("retourne false si la valeur est absente", () => {
    /// Arrange
    const tableau = [8, 12, 6, 0];
    const valeur = 155;
    /// Act
    const absence = contient(tableau, valeur);
    /// Assert
    expect(absence).toBe(false);
  });

  it("retourne false si le tableau est vide", () => {
    /// Arrange
    const tableau = [];
    const valeur = 12;

    /// Act
    const vide = contient(tableau, valeur);
    /// Assert
    expect(vide).toBe(false);
  });
});

// Même pattern — à toi.
// Cas à couvrir : plusieurs occurrences, valeur absente (retourne 0).
describe("compter", () => {
  // à compléter
});

// [FACULTATIF] Nouveau cas : vérifier que le tableau original n'est pas modifié.
// On te montre inverser en entier.
describe("inverser", () => {
  it("inverse un tableau", () => {
    expect(inverser([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("ne modifie pas le tableau original", () => {
    const t = [1, 2, 3];
    inverser(t);
    expect(t).toEqual([1, 2, 3]);
  });
});

// [FACULTATIF] Même pattern qu'inverser — à toi.
// Cas à couvrir : doublons retirés, ordre d'apparition conservé.
describe("sansDoublons", () => {
  // à compléter
});
