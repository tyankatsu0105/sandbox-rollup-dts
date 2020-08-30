export class User {
    constructor(name) {
        this.name = name;
    }
    /**
     * Print log that greeting message
     */
    greet() {
        console.log(`Hello ${this.name}-san :)`);
    }
}
