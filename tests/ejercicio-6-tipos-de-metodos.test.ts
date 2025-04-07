import { Ingeniero } from "../src/ejercicio-6-tipos-de-metodos";
// Ingeniero.test.ts

describe("Clase Ingeniero", () => {
  it("debería crear una instancia correctamente", () => {
    const ing = new Ingeniero("Yari", 30, 3334, 40);
    expect(ing).toBeInstanceOf(Ingeniero);
    expect(ing.nombre).toBe("Yari");
    expect(ing.matricula).toBe(3334);
  });

  it("debería saludar con override de método", () => {
    const ing = new Ingeniero("Ana", 28, 5555, 30);
    expect(ing.saludar()).toBe(
      "Hola, soy el Ingeniero Ana y tengo 28 años. Mi numero de matricula es 5555"
    );
  });

  it("debería calcular correctamente el sueldo", () => {
    const ing = new Ingeniero("Luis", 35, 1234, 10); // 10 horas
    expect(ing.calcularSueldo()).toBe(10 * 45);
  });

  it("debería exponer edad mediante getEdad()", () => {
    const ing = new Ingeniero("Rosa", 40, 7777, 20);
    expect(ing.getEdad()).toBe(40);
  });

  it("debería exponer propiedad y método estático", () => {
    expect(Ingeniero.profesion).toBe("Ingeniero");
    expect(Ingeniero.getProfesion()).toBe("Ingeniero");
  });
});
