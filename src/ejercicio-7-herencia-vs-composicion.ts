// COMPOSICIÓN
export class Persona {
  constructor(public nombre: string, private edad: number) {}

  saludar(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }

  getEdad(): number {
    return this.edad;
  }
}

export class Ingeniero {
  static profesion = "Ingeniero";
  costoPorHora = 45;

  constructor(
    public matricula: number,
    private horasTrabajadas: number,
    public persona: Persona
  ) {}

  saludar(): string {
    return `Hola, soy el ${Ingeniero.profesion} ${
      this.persona.nombre // PIEZA CLAVE DE LA COMPOSICION
    } y tengo ${this.persona.getEdad()} años. Mi numero de matricula es ${
      this.matricula
    }`;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.costoPorHora;
  }
}

export class Youtuber {
  profesion = "Youtuber";
  gananciaPorSeguidor = 5;

  constructor(
    public canalYoutube: string,
    public seguidores: number,
    public persona: Persona
  ) {}

  saludar(): string {
    return `Hola, soy el ${this.profesion} ${
      this.persona.nombre
    } y tengo ${this.persona.getEdad()} años. Mi canal de YouTube es ${
      this.canalYoutube
    }`;
  }

  calcularSueldo(): number {
    return this.seguidores * this.gananciaPorSeguidor;
  }
}

const persona = new Persona("Yari", 30);
const persona2 = new Persona("Ariel", 31);
const ingeniero = new Ingeniero(3344, 40, persona);
const youtuber = new Youtuber("Yari", 30, persona);

// Reasignacion de persona
console.log(ingeniero.saludar());
// Reasignacion de persona
ingeniero.persona = persona2;
console.log(ingeniero.saludar());
