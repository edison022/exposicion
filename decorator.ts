import { Component } from './component';

// Definimos la interfaz del decorador
export interface Decorator extends Component {
  // Aquí podrían agregarse métodos adicionales propios del decorador
}

// Implementamos el decorador concreto A
export class ConcreteDecoratorA implements Decorator {
  constructor(private component: Component) {}

  operation(): string {
    // Agregamos funcionalidad antes y después de llamar al componente
    return `Decorador A: ${this.component.operation()}`;
  }
}

// Implementamos el decorador concreto B
export class ConcreteDecoratorB implements Decorator {
  constructor(private component: Component) {}

  operation(): string {
    // Agregamos funcionalidad antes y después de llamar al componente
    return `Decorador B: ${this.component.operation()}`;
  }
}
