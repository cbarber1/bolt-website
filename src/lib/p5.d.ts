declare module 'p5' {
  export default class p5 {
    constructor(sketch: (p: any) => void, node: HTMLElement | null);
    remove(): void;
  }
}