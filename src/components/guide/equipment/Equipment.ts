declare class EquipmentElement {
    name: string;
    description: string;
    image: string;
    damage: string;
    damageType: string;
    range: string;
}

export default class Equipment {
    name: string = "";
    element: EquipmentElement[] = [];
};