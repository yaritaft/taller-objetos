export class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

export class Ingeniero extends Persona {
  matricula: number;

  constructor(nombre: string, edad: number, matricula: number) {
    super(nombre, edad);
    this.matricula = matricula;
  }

  saludarProfesionalmente(): string {
    return `Hola, soy el Ingeniero ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }
}

export class IngenieroSobreescrito extends Persona {
  profesion = "Ingeniero";
  matricula: number;

  constructor(nombre: string, edad: number, matricula: number) {
    super(nombre, edad);
    this.matricula = matricula;
  }

  // Method override
  saludar(): string {
    return `Hola, soy el ${this.profesion} ${this.nombre} y tengo ${this.edad} años. Mi numero de matricula es ${this.matricula}`;
  }
}
