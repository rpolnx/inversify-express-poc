import { Container } from 'inversify'
import { Bow, Katana, Knight, Ninja, Shuriken, Sword } from '../entities'
import { RangeWeapon, Warrior, Weapon } from '../interfaces'
import { TYPES } from '../types'

const myContainer = new Container()
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja)
myContainer.bind<Weapon>(TYPES.Katana).to(Katana)
myContainer.bind<RangeWeapon>(TYPES.Shuriken).to(Shuriken)

myContainer.bind<Warrior>(TYPES.Warrior).to(Knight)
myContainer.bind<Weapon>(TYPES.Sword).to(Sword)
myContainer.bind<RangeWeapon>(TYPES.Bow).to(Bow)
export { myContainer }

