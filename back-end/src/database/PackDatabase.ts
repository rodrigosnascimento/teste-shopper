import { Pack } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class PackDatabase extends BaseDatabase {
    public async findPackById(packId: number): Promise<Pack[]> {
        const packDB: Pack[] = await BaseDatabase.connection("packs").where({ pack_id: packId })
        return packDB
    }
}