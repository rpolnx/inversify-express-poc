export interface Warrior {
    fight(): string
    sneak(): string
}

export interface Weapon {
    hit(): string
}

export interface RangeWeapon {
    throw(): string
}

export interface Armor {
    create(): Promise<Armor>
}
