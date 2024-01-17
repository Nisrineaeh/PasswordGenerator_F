export interface Password {
    id: number;
    userId: number;
    name: string;
    value: string;
    url: string;
    category: string;
    createdAt: Date;
    lastModified: Date;
    strength: string;
    securityQuestion: string;
    securityAnswer: string;
}
