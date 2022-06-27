export interface Dog {
    name: string;
    age: number;
    breed?: string;
}

export function getGoodDogs(): Array<Dog>{
    return [
        { name: 'Sammy', age: 3 },
        { name: 'Sammy', age: 15, breed: 'hudai' },
    ]
}