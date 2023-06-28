// Definimos la interfaz del componente base
export interface Component {
    operation(): string;
  }
  
  // Implementamos el componente concreto
  export class ConcreteComponent implements Component {
    operation(): string {
      return 'Operación del componente';
    }
  }
