import { Persona } from "../src/ejercicio-1-primera-clase";

describe("Persona", () => {
  it("debería crear una persona con nombre y edad correctos", () => {
    const persona = new Persona("Yari", 30);

    expect(persona.nombre).toBe("Yari");
    expect(persona.edad).toBe(30);
  });

  it("debería saludar correctamente", () => {
    const persona = new Persona("Yari", 30);
    expect(persona.saludar()).toBe("Hola, soy Yari y tengo 30 años.");
  });
});
