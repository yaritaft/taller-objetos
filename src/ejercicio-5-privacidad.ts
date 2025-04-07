export class Persona {
  nombre: string;
  protected edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

export class Ingeniero extends Persona {
  profesion = "Ingeniero";
  costoPorHora = 45;
  matricula: number;
  private horasTrabajadas: number;

  constructor(
    nombre: string,
    edad: number,
    matricula: number,
    horasTrabajadas: number
  ) {
    super(nombre, edad);
    this.matricula = matricula;
    this.horasTrabajadas = horasTrabajadas;
  }

  // Method override
  saludar(): string {
    return `Hola, soy el ${this.profesion} ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.costoPorHora;
  }

  getEdad(): number {
    return this.edad;
  }
}

const profesional = new Ingeniero("Yari", 30, 3334, 40);
console.log(profesional.getEdad());
// console.log(profesional.);
