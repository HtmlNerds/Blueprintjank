import type { BossBlindEnum } from '../enum/BossBlind';
import type { LegendaryJoker } from '../enum/cards/LegendaryJoker';
import type { PackType } from '../enum/packs/PackType';
import type { Voucher } from '../enum/Voucher';
import type { Item } from './Item';

export interface CommonQueries {
    hasBoss: (boss: BossBlindEnum) => boolean;
    hasInPack: (item: Item) => boolean;
    hasInShop: (item: Item, index?: number) => boolean;
    countLegendary: () => number;
    countInPack: (item: Item) => number;
    hasLegendary: (...jokers: Array<LegendaryJoker>) => boolean;
    hasPack: (packType: PackType) => boolean;
    hasInBuffonPack: (item: Item) => boolean;
    hasInSpectral: (item: Item) => boolean;
    hasVoucher: (voucher: Voucher) => boolean;
}