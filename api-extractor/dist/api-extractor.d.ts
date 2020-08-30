
export declare interface IUser {
    greet: (name: string) => void;
}

export declare const NAME = "tyankatsu";

export declare class User implements IUser {
    private name;
    constructor(name: string);
    /**
     * Print log that greeting message
     */
    greet(): void;
}

export { }