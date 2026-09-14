declare class Consequence {
    dice: number;
    name: string;
    gravity: string;
    effects: string[]
}

export default class Consequences {
    consequences: Consequence[] | undefined;
};