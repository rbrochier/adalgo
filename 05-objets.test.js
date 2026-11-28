import { fullName, filtrerParAge, trierParNom, grouperParVille, statistiques, prixTotal, plusCher } from "./05-objets.js"

// Les fonctions retournent des objets et des tableaux d'objets.
// Utilise .toBe() pour une string, .toEqual() pour un objet ou un tableau.
// Plus d'indications sur les cas — choisis toi-même ce qui est pertinent à tester.


describe("fullName", () => {
  it("retourne le prénom et le nom de la personne", () => {
    const personne = { prenom: "Richard", nom: "Brochier" };
    const resultat = fullName(personne);
    expect(resultat).toBe("Richard Brochier");
  });

});




describe("filtrerParAge", () => {
  it("retourne la personne dont l'age est supérieur à 18 ans", () => {
    const personnes = [{ nom: "Ada", age: 28 }, { nom: "Alan", age: 17 }];
    const resultat = filtrerParAge(personnes, 18);
    expect(resultat).toEqual([{ nom: "Ada", age: 28 }]);
  })

    it("retourne personne n'a plus de 18 ans", () => {
    const personnes = [{ nom: "Ada", age: 17 }, { nom: "Alan", age: 16 }];
    const resultat = filtrerParAge(personnes, 18);
    expect(resultat).toEqual([]);
  })

    it("retourne la personne qui a pile 18 ans", () => {
    const personnes = [{ nom: "Ada", age: 18 }, { nom: "Alan", age: 16 }];
    const resultat = filtrerParAge(personnes, 18);
    expect(resultat).toEqual([{ nom: "Ada", age: 18 }]);
  })

});


describe("trierParNom", () => {
  it("retourne le tableau trié par ordre alphabetique", ()=> {
    const personnes = ([{ nom: "Turing" }, { nom: "Lovelace" }, { nom: "Hopper" }]);
    const resultat = trierParNom(personnes);
    expect(resultat).toEqual([{ nom: "Hopper" }, { nom: "Lovelace" }, { nom: "Turing" }]);

})

})

// [FACULTATIF]
describe("grouperParVille", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("statistiques", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("prixTotal", () => {
  it.todo("à compléter")
})

// [FACULTATIF]
describe("plusCher", () => {
  it.todo("à compléter")
})
