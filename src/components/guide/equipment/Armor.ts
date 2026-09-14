declare class ArmorElement {
    name: string;
    description: string;
    image: string;
    resistance: string;
    armorClass: string;
}

export default class Armor {
    name: string = "";
    element: ArmorElement[] = [];
};