class Entity {
  id: number;

  constructor(id: number) {
    this.id = id;
  }

  // Method to display the ID of the entity
  displayId(): void {
    console.log(`The ID of the entity is: ${this.id}`);
  }
}

// Usage
const entity = new Entity(1);
entity.displayId();
