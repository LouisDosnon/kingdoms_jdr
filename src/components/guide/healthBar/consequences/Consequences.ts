declare class Consequence {
    dice: string;
    name: string;
    gravity: string;
    effects: string[]
}

export default class Consequences {
    consequences: Consequence[] | undefined;
};