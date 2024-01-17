import { Password } from "./password";

export interface User {
    id: number;
    username: string;
    email: string;
    passwordHash: string;
    passwords: Password[];
}
