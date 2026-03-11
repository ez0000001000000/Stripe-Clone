export class Gradient {
  constructor(options?: { shaderFiles?: { vertex: string; noise: string; blend: string; fragment: string } });
  initGradient(canvas: HTMLCanvasElement | string): void;
}
