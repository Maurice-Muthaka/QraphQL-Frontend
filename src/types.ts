export interface People {
    next: boolean;
    previous: boolean;
    people: Person[];
}
export interface Person {
    name : string;
    height : string;
    mass : string;
    gender : string;
    homeworld : string;
    url : string;
}

export interface Request {
    search?: string;
    page?: string;
}

export interface Person {
    name: string;
    gender: string;
    mass: string;
    homeworld: string;
}