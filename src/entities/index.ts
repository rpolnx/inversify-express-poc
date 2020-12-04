import { inject, injectable, named } from 'inversify'
import 'reflect-metadata'
import { Armor, RangeWeapon, Warrior, Weapon } from '../interfaces'
import { TYPES } from '../types'

@injectable()
class Katana implements Weapon {
    public hit() {
        return 'cut!'
    }
}

@injectable()
class Sword implements Weapon {
    public hit() {
        return 'double hands cut!'
    }
}

@injectable()
class Shuriken implements RangeWeapon {
    public throw() {
        return 'hit!'
    }
}

@injectable()
class Bow implements RangeWeapon {
    public throw() {
        return 'shot!'
    }
}

@injectable()
class PlateChest implements Armor {
    async create(): Promise<Armor> {
        console.log('Creating PlateChest')
        return new Promise<Armor>((res) => {
            setTimeout(() => {
                console.log('Executing setimeout')
                res(this)
            }, 10)
        })
    }
}

@injectable()
class Ninja implements Warrior {
    private _katana: Weapon
    private _shuriken: RangeWeapon

    public constructor(
        @inject(TYPES.Weapon) @named('katana') katana: Weapon,
        @inject(TYPES.RangeWeapon) @named('shuriken') shuriken: RangeWeapon
    ) {
        this._katana = katana
        this._shuriken = shuriken
    }

    public fight() {
        return this._katana.hit()
    }
    public sneak() {
        return this._shuriken.throw()
    }
}

@injectable()
class Knight implements Warrior {
    @inject(TYPES.Weapon) @named('sword') private _sword: Weapon
    @inject(TYPES.RangeWeapon) @named('bow') private _bow: RangeWeapon
    public fight() {
        return this._sword.hit()
    }
    public sneak() {
        return this._bow.throw()
    }
}

@injectable()
class Soldier implements Warrior {
    private _armor: Armor

    public equipArmor(armor: Armor) {
        this._armor = armor
    }

    public sneak() {
        return `Fighting with ${this._armor}`
    }
    fight(): string {
        return `Fighting with ${this._armor}`
    }
}

export { Ninja, Katana, Shuriken, Knight, Sword, Bow, Soldier, PlateChest }

