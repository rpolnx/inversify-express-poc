import { container, PlateChestProvider } from './config/inversify.config';
import { Warrior } from './interfaces';
import { TYPES } from './types';
(async () => {
    const warriors: Warrior[] = container.getAll<Warrior>(TYPES.Warrior)

    let provider = await container.get<PlateChestProvider>('PlateChestProvider')

    const soldierProvider = await provider()

    console.log(`Main page: `, warriors)
    console.log(`Main page: `, soldierProvider)
})()
