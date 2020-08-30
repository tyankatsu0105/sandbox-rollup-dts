export interface IUser {
    greet: (name: string) => void;
}
export declare class User implements IUser {
    private name;
    constructor(name: string);
    /**
     * Print log that greeting message
     */
    greet(): void;
}
//# sourceMappingURL=user.d.ts.map