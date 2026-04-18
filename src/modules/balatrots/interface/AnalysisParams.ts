import type { Deck } from "../enum/Deck";
import type { Stake } from "../enum/Stake";
import type { Version } from "../enum/Version";

export interface AnalysisParams {
    seed: string;
    ante: number;
    cardsPerAnte: Array<number>;
    deck: Deck;
    stake: Stake;
    version: Version;
}