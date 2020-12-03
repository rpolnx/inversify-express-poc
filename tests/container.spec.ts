import { myContainer } from '../src/config/inversify.config'
import { Warrior, Weapon } from '../src/interfaces'
import { TYPES } from '../src/types'

const warriors: Warrior[] = myContainer.getAll<Warrior>(TYPES.Warrior)
const sword: Weapon = myContainer.get<Weapon>(TYPES.Sword)

test("When is ninja, should use ninja' weapons", () => {
    const ninja = warriors[0]
    expect(ninja.fight()).toBe('cut!') // true
    expect(ninja.sneak()).toBe('hit!') // true
})

test("When is knight, should use knight' weapons", () => {
    const knight = warriors[1]
    expect(knight.fight()).toBe('double hands cut!') // true
    expect(knight.sneak()).toBe('shot!') // true
})

test('When getting sword instance, should double hands cut', () => {
    expect(sword.hit()).toBe('double hands cut!') // true
})
