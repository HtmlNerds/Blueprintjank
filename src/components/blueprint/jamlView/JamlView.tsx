import { useState } from "react";
import {
    JamlIde,
    JamlSpeedometer,
    JamlAestheticSelector,
    JamlSeedInput,
    useSearch,
    type JamlAestheticOption,
} from "jaml-ui";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import motelyWasmUrl from "motely-wasm?url";

const DEFAULT_JAML = `name: Blueprint Copy Engine
author: jammy
description: Blueprint rare joker with Brainstorm for joker copying synergy
deck: Red
stake: White
must:
  - rareJoker: Blueprint
    antes: [1, 2, 3, 4]
should:
  - rareJoker: Brainstorm
    score: 80
  - rareJoker: Baron
    score: 55
  - legendaryJoker: Triboulet
    score: 55
  - uncommonJoker: OopsAll6s
    score: 50
  - legendaryJoker: Perkeo
    score: 50
  - uncommonJoker: Showman
    score: 35
  - spectral: Hex
    score: 35
  - mixedJoker: Any
    edition: Negative
    score: 40
  - tag: NegativeTag
    score: 35
`;

export default function JamlView() {
    const [jaml, setJaml] = useState(DEFAULT_JAML);
    const [aesthetic, setAesthetic] = useState<JamlAestheticOption | null>(null);
    const [aestheticValue, setAestheticValue] = useState(0);
    const search = useSearch(motelyWasmUrl);

    const isSearching = search.status === "running" || search.status === "booting";

    const handleSearch = () => {
        if (isSearching) {
            search.cancel();
        } else if (aesthetic) {
            search.startAesthetic(jaml, aestheticValue);
        } else {
            search.start(jaml, 10_000);
        }
    };

    const sidebar = (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <JamlSpeedometer
                seedsPerSecond={search.seedsPerSecond}
                totalSearched={search.totalSearched}
                matchingSeeds={search.matchingSeeds}
                status={search.status}
            />
            <JamlSeedInput />
            <JamlAestheticSelector
                value={aesthetic}
                onChange={(a, v) => { setAesthetic(a); setAestheticValue(v); }}
            />
        </div>
    );

    return (
        <div style={{ display: "flex", gap: 16, padding: 16 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
                <JamlIde
                    jaml={jaml}
                    onChange={setJaml}
                    onSearch={handleSearch}
                    isSearching={isSearching}
                    searchResults={search.results}
                    title="JAML Seed Search"
                />
            </div>
            <div style={{ width: 200, flexShrink: 0 }}>
                {sidebar}
            </div>
        </div>
    );
}
