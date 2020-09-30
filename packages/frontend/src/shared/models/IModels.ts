/* eslint-disable @typescript-eslint/interface-name-prefix */
export interface ILogin {
    email: string;
    password: string;
}

export interface IRegister {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    birthday: string;
    country: string;
    province: string;
    city: string;
    address: string;
    phone: string;
    gender: object;
}

export interface IAddPlace {
    name: string;
    openDays: Array<string>;
    openTime: string;
    closeTime: string;
    phone: string;
    state: string;
    city: string;
    street: string;
}

export interface IItem {
    name: string;
    price: string;
    discounts: Array<string>;
    place: string;
    image: string;
}

export interface IListItem {
    image: string;
    name: string;
    price: string;
    place: string;
    status: string;
}

export interface IGroup {
    name: string;
    description: string;
    createdBy: string;
}

export interface IStatusUser {
    name: string;
    description: string;
}

export interface IUserInGroup {
    listUsers: Array<string>;
}
