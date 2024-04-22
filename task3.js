export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}

// Crear un objeto Player
const player1 = new Player("Tara", 6);
player1.info(); // Salida: Tara has reached Level 6!
