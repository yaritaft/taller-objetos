import {
  Ingeniero,
  Persona,
  Youtuber,
} from "../src/ejercicio-4-abstraccion-polimorfismo";

describe("Ingeniero", () => {
  it("debería crear una persona con nombre y edad correctos", () => {
    const ingeniero = new Ingeniero("Yari", 30, 3344, 40);

    expect(ingeniero.nombre).toBe("Yari");
    expect(ingeniero.matricula).toBe(3344);
  });

  it("debería saludar profesionalmente y comunmente", () => {
    const datosIngeniero = {
      nombre: "Yari",
      edad: 30,
      matricula: 3344,
      horasTrabajadas: 40,
    };

    const valorPorHora = 45;
    const ingeniero = new Ingeniero(
      datosIngeniero.nombre,
      datosIngeniero.edad,
      datosIngeniero.matricula,
      datosIngeniero.horasTrabajadas
    );
    expect(ingeniero.saludar()).toBe(
      `Hola, soy el Ingeniero ${datosIngeniero.nombre} y tengo ${datosIngeniero.edad} años. Mi numero de matricula es ${datosIngeniero.matricula}`
    );
    expect(ingeniero.calcularSueldo()).toBe(
      datosIngeniero.horasTrabajadas * valorPorHora
    );
  });
});

describe("Youtuber", () => {
  it("debería crear una persona con nombre y edad correctos", () => {
    const youtuber = new Youtuber("Yari", 30, "URL_CANAL_YOUTUBE", 4000);

    expect(youtuber.nombre).toBe("Yari");
    expect(youtuber.seguidores).toBe(4000);
  });

  it("debería saludar profesionalmente y comunmente", () => {
    const datosYoutuber = {
      nombre: "Yari",
      edad: 30,
      canalYoutube: "URL_CANAL_YOUTUBE",
      seguidores: 4000,
    };

    const gananciasPorSeguidor = 5;

    const youtuber = new Youtuber(
      datosYoutuber.nombre,
      datosYoutuber.edad,
      datosYoutuber.canalYoutube,
      datosYoutuber.seguidores
    );
    expect(youtuber.saludar()).toBe(
      `Hola, soy el ${youtuber.profesion} ${datosYoutuber.nombre} y tengo ${datosYoutuber.edad} años. Mi canal de youtube es ${datosYoutuber.canalYoutube}`
    );
    expect(youtuber.calcularSueldo()).toBe(
      datosYoutuber.seguidores * gananciasPorSeguidor
    );
  });
});

describe("Salario Total de todas las profesiones", () => {
  it("debería saludar profesionalmente y comunmente", () => {
    const datosIngeniero = {
      nombre: "Yari",
      edad: 30,
      matricula: 3344,
      horasTrabajadas: 40,
    };

    const valorPorHora = 45;
    const ingeniero = new Ingeniero(
      datosIngeniero.nombre,
      datosIngeniero.edad,
      datosIngeniero.matricula,
      datosIngeniero.horasTrabajadas
    );
    const datosYoutuber = {
      nombre: "Yari",
      edad: 30,
      canalYoutube: "URL_CANAL_YOUTUBE",
      seguidores: 4000,
    };

    const gananciasPorSeguidor = 5;

    const youtuber = new Youtuber(
      datosYoutuber.nombre,
      datosYoutuber.edad,
      datosYoutuber.canalYoutube,
      datosYoutuber.seguidores
    );

    const personas: Persona[] = [ingeniero, youtuber];

    const ingresoTotal = personas.reduce((acumulador, rol) => {
      return acumulador + rol.calcularSueldo();
    }, 0);
    expect(ingresoTotal).toBe(21800);
  });
});
