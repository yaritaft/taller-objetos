import { Ingeniero, IngenieroSobreescrito } from "../src/ejercicio-3-herencia";

describe("Ingeniero", () => {
  it("debería crear una persona con nombre y edad correctos", () => {
    const ingeniero = new Ingeniero("Yari", 30, 3344);

    expect(ingeniero.nombre).toBe("Yari");
  });

  it("debería saludar profesionalmente y comunmente", () => {
    const datosIngeniero = {
      nombre: "Yari",
      edad: 30,
      matricula: 3344,
    };
    const persona = new Ingeniero(
      datosIngeniero.nombre,
      datosIngeniero.edad,
      datosIngeniero.matricula
    );
    expect(persona.saludar()).toBe(
      `Hola, soy ${datosIngeniero.nombre} y tengo ${datosIngeniero.edad} años.`
    );
    expect(persona.saludarProfesionalmente()).toBe(
      `Hola, soy el Ingeniero ${datosIngeniero.nombre} y tengo ${datosIngeniero.edad} años. Mi numero de matricula es ${datosIngeniero.matricula}`
    );
  });
});

describe("Ingeniero Sobreescrito", () => {
  it("debería crear una persona con nombre y edad correctos", () => {
    const ingeniero = new IngenieroSobreescrito("Yari", 30, 3344);

    expect(ingeniero.nombre).toBe("Yari");
    expect(ingeniero.matricula).toBe(3344);
  });

  it("debería saludar profesionalmente y comunmente", () => {
    const datosIngeniero = {
      nombre: "Yari",
      edad: 30,
      matricula: 3344,
    };
    const persona = new Ingeniero(
      datosIngeniero.nombre,
      datosIngeniero.edad,
      datosIngeniero.matricula
    );
    expect(persona.saludar()).toBe(
      `Hola, soy ${datosIngeniero.nombre} y tengo ${datosIngeniero.edad} años.`
    );
    expect(persona.saludarProfesionalmente()).toBe(
      `Hola, soy el Ingeniero ${datosIngeniero.nombre} y tengo ${datosIngeniero.edad} años. Mi numero de matricula es ${datosIngeniero.matricula}`
    );
  });
});
