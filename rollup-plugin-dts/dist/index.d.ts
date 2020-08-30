interface IUser {
    greet: (name: string) => void;
}
/**
 * This is some example documentation.
 * @public
 */
declare class User implements IUser {
    private name;
    constructor(name: string);
    /**
     * Print log that greeting message
     */
    greet(): void;
}

declare const NAME = "tyankatsu";

export { IUser, NAME, User };
