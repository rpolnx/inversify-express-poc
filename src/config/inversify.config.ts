import { Container } from 'inversify'
import { Bow, Katana, Knight, Ninja, PlateChest, Shuriken, Soldier, Sword } from '../entities'
import { Armor, RangeWeapon, Warrior, Weapon } from '../interfaces'
import { TYPES } from '../types'

const container = new Container()
container.bind<Warrior>(TYPES.Warrior).to(Ninja).whenTargetNamed('ninja')
container.bind<Weapon>(TYPES.Weapon).to(Katana).whenTargetNamed('katana')
container.bind<RangeWeapon>(TYPES.RangeWeapon).to(Shuriken).whenTargetNamed('shuriken')

container.bind<Warrior>(TYPES.Warrior).to(Knight).whenTargetNamed('knight')
container.bind<Weapon>(TYPES.Weapon).to(Sword).whenTargetNamed('sword')
container.bind<RangeWeapon>(TYPES.RangeWeapon).to(Bow).whenTargetNamed('bow')

container.bind<Warrior>(TYPES.Warrior).to(Soldier).whenTargetNamed('soldier')

type PlateChestProvider = () => Promise<Warrior>

container.bind<Armor>(TYPES.Armor).to(PlateChest)

container.bind<PlateChestProvider>('PlateChestProvider').toProvider<Warrior>((context) => {
    return async () => {
        console.log('binding to platechest')
        const soldier = context.container.getNamed<Soldier>(TYPES.Warrior, 'soldier')
        const armor = await context.container.get<Armor>(TYPES.Armor).create()

        soldier.equipArmor(armor)

        return soldier
    }
})

export { container, PlateChestProvider }

