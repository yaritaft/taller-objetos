export abstract class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  abstract calcularSueldo(): number;
}

export class Ingeniero extends Persona {
  profesion = "Ingeniero";
  costoPorHora = 45;
  matricula: number;
  horasTrabajadas: number;

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
}

export class Youtuber extends Persona {
  profesion = "Youtuber";
  gananciaPorSeguidor = 5;
  canalYoutube: string;
  seguidores: number;

  constructor(
    nombre: string,
    edad: number,
    canalYoutube: string,
    seguidores: number
  ) {
    super(nombre, edad);
    this.canalYoutube = canalYoutube;
    this.seguidores = seguidores;
  }

  // Method override
  saludar(): string {
    return `Hola, soy el ${this.profesion} ${this.nombre} y tengo ${this.edad} años. Mi canal de youtube es ${this.canalYoutube}`;
  }

  calcularSueldo(): number {
    return this.seguidores * this.gananciaPorSeguidor;
  }
}
