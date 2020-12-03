import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { RangeWeapon, Warrior, Weapon } from '../interfaces'
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
class Ninja implements Warrior {
    private _katana: Weapon
    private _shuriken: RangeWeapon

    public constructor(@inject(TYPES.Katana) katana: Weapon, @inject(TYPES.Shuriken) shuriken: RangeWeapon) {
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
    @inject(TYPES.Sword) private _sword: Weapon
    @inject(TYPES.Bow) private _bow: RangeWeapon
    public fight() {
        return this._sword.hit()
    }
    public sneak() {
        return this._bow.throw()
    }
}

export { Ninja, Katana, Shuriken, Knight, Sword, Bow }

