export enum Color {
  rojo,
  negro,
  verde,
  azul,
  //    0     1      2     3
}

export interface Heroe {
  nombre: string;
  vuela: boolean;
  color: Color;
}
