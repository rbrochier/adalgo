import { estPositif, estPair, max, mention, fizzbuzz } from "./01-conditions.js"

// Pattern : expect(fonction(argument)).toBe(valeur_attendue)
// On te montre estPositif en entier. Pour estPair, c'est le même pattern — à toi.

describe("estPositif", () => {
  it("retourne true pour un nombre positif", () => {
    expect(estPositif(5)).toBe(true)
  })
  it("retourne false pour un nombre négatif", () => {
    expect(estPositif(-3)).toBe(false)
  })
  it("retourne true pour zéro", () => {
    expect(estPositif(0)).toBe(true)
  })
})

// Même pattern qu'estPositif — écris les 3 tests toi-même.
// Cas à couvrir : un nombre pair, un nombre impair, zéro.
describe("estPair", () => {
  it("retourne true quand le nombre est pair", () => {
    expect(estPair(4)).toBe(true)
  })
  it("retourne false quand le nombre est impair",() => {
    expect(estPair(5)).toBe(false)
  })
  it("retourn true quand le nombre est pair",() => {
    expect(estPair(0)).toBe(true)
  })
})

// Nouveau pattern : deux paramètres, cas d'égalité.
// On te montre max en entier.
describe("max", () => {
  it("retourne le plus grand quand a > b", () => {
    expect(max(7, 3)).toBe(7)
  })
  it("retourne le plus grand quand b > a", () => {
    expect(max(3, 7)).toBe(7)
  })
  it("retourne la valeur si les deux sont égaux", () => {
    expect(max(5, 5)).toBe(5)
  })
})

// Même pattern que max — écris les tests pour chaque mention.
// Cas à couvrir : une note dans chaque tranche, et la valeur frontière 16.
describe("mention", () => {
  it("retourne la mention Très bien",() =>{
    expect(mention(17)).toBe("Très Bien")
  })
    it("retourne la mention Bien",() =>{
    expect(mention(14)).toBe("Bien")
  })
    it("retourne la mention Assez Bien",() =>{
    expect(mention(13)).toBe("Assez Bien")
  })
    it("retourne la mention Passable",() =>{
    expect(mention(11)).toBe("Passable")
  })
  it("retourne la mension Insuffisant", () => {
    expect(mention(7)).toBe("Insuffisant")
  })
})

// [FACULTATIF] Même pattern — à toi.
// Cas à couvrir : multiple de 3, multiple de 5, multiple des deux, autre.
describe("fizzbuzz", () => {
  // à compléter
})
