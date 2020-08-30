export interface IUser {
  greet: (name: string) => void
}

export class User implements IUser {
  constructor(private name: string){}

  /**
   * Print log that greeting message
   */
  greet() {
    console.log(`Hello ${this.name}-san :)`);
  }
}