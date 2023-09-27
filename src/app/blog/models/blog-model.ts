export interface ProfileInfo {
    name?: string;
    image?: string;
}

export class user {
    id!: number;
    firstName!: string;
    lastName!: string;
    maidenName!: string;
    age!: number;
    gender!: string;
    email!: string;
    phone!: number;
    userName!: string;
    password!: string;
    birthDate!: string | Date;
    image!: string;
    company!: Company;
}

export class Company {
    address!: Address;
    department!: string;
    name!: string;
    title!: string;
}
export class Address {
    address!: string;
    city!: string;
    postalCode!: string;
    state!: string;
}
