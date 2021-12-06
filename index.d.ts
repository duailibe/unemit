/* eslint-disable no-unused-vars */
declare module "unemit" {
  type Handler = (event: any) => void;

  interface IUnemit {
    on(name: string, handler: Handler): () => void;
    once(name: string, handler: Handler): () => void;
    off(name: string, handler: Handler): void;
    emit(name: string, event: any): void;
  }

  const Unemit: IUnemit;

  export default Unemit;
}
