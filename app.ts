import { Component, ConcreteComponent } from './component';
import { Decorator, ConcreteDecoratorA, ConcreteDecoratorB } from './decorator';

//Convertir los metodos de la clase en objetos 
// Creamos una instancia del componente concreto
const component: Component = new ConcreteComponent();

// Creamos instancias de los decoradores y los asignamos al componente
const decoratorA: Decorator = new ConcreteDecoratorA(component);
const decoratorB: Decorator = new ConcreteDecoratorB(component);

// Llamamos a los métodos decorados
console.log(decoratorA.operation());
console.log(decoratorB.operation());

