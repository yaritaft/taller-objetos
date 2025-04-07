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
  static profesion = "Ingeniero"; // variable estatica
  contadorIngenieros = 0; // variable de clase
  costoPorHora = 45;
  matricula: number; // variable de instancia
  private horasTrabajadas: number;

  constructor(
    nombre: string,
    edad: number,
    matricula: number,
    horasTrabajadas: number
  ) {
    super(nombre, edad);
    this.contadorIngenieros = this.contadorIngenieros + 1;
    this.matricula = matricula;
    this.horasTrabajadas = horasTrabajadas;
  }

  // Method override
  saludar(): string {
    return `Hola, soy el ${Ingeniero.profesion} ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.costoPorHora;
  }

  getEdad(): number {
    return this.edad;
  }

  // METODO ESTATICO
  static getProfesion(): string {
    return this.profesion; // una forma de accederlo
  }
}

const profesional = new Ingeniero("Yari", 30, 3334, 40);
console.log(profesional.getEdad());

// LA OTRA FORMA DE ACCEDER A METODOS Y ATRIBUTOS ESTATICOS
console.log(Ingeniero.profesion);
console.log(Ingeniero.getProfesion());
// console.log(profesional.);
