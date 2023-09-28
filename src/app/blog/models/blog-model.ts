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
  export class Post {
    id!: number;
    title!: string;
    body!: string;
    userId!: number;
    tags!: string[];
    reactions: number=0;
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
export interface PageEvent {
  first: number;
  rows: number;
}
export interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}
export interface ExportColumn {
  title: string;
  dataKey: string;
}
