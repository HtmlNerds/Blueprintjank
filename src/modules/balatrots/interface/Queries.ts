import type { CommonQueries } from "./CommonQueries";

export interface Queries extends CommonQueries {
    hasInPack: (ante: number, item: Item) => boolean;
    hasInShop: (ante: number, item: Item, index?: number) => boolean;
    countLegendary: (ante: number) => number;
    hasLegendary: (ante: number, ...jokers: Array<LegendaryJoker>) => boolean;
    hasInSpectral: (ante: number, item: Item) => boolean;
    hasInBuffonPack: (ante: number, item: Item) => boolean;
    hasPack: (ante: number, packType: PackType) => boolean;
    hasVoucher: (ante: number, voucher: Voucher) => boolean;
    hasBoss: ((ante: number, boss: Boss) => boolean) & ((boss: Boss) => boolean);
}