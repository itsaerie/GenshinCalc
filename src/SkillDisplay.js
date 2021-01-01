import { CHARINFO } from './CharVals'

// a function which returns skill with given stats
function skillDefault(char, skillLevels, stats) {
    let list = []
    switch (CHARINFO[char.name]["WEAPON_TYPE"]) {
        case "BOW":
            // add normal
            list.push(
                <div id="default-normal">
                    Normal Attack Damage
                        <br />
                    {CHARINFO[char.name]["Default"]["Normal"][skillLevels[0] - 1].map((val) => {
                        return (
                            <div>
                                {val * stats.PHYSICAL_DAMAGE}
                                <br />
                            </div>
                        )
                    })}
                </div>
            )
            // add aimed shot
            list.push(
                <div id="default-aimed">
                    Aimed Shot Damage
                        <br />
                    {CHARINFO[char.name]["Default"]["Aimed Shot"][skillLevels[0] - 1] * stats.PHYSICAL_DAMAGE}
                </div>
            )
            // add fully charged aimed shot
            list.push(
                <div id="default-full-aim">
                    Fully-Charged Aimed Shot
                        <br />
                    {CHARINFO[char.name]["Default"]["Fully-Charged Aimed Shot"][skillLevels[0] - 1] * stats.PHYSICAL_DAMAGE}
                </div>
            )
            // add plunge dmg
            list.push(
                <div id="default-plunge">
                    Plunge DMG
                        <br />
                    {CHARINFO[char.name]["Default"]["Plunge DMG"][skillLevels[0] - 1] * stats.PHYSICAL_DAMAGE}
                </div>
            )
            // add low/high plunge dmg
            list.push(
                <div id="default-range-plunge">
                    Low/High Plunge DMG
                        <br />
                    {CHARINFO[char.name]["Default"]["Low/High Plunge DMG"][skillLevels[0] - 1].map((val) => {
                        return (
                            <div>
                                {val * stats.PHYSICAL_DAMAGE}
                                <br />
                            </div>
                        )
                    })}
                </div>
            )
            break;
        default:
            console.log('unhandled weapon type')
    }
    return (
        <Card> {/** Default */}
            {CHARINFO[char.name]["Default"]["Name"]} Level
            <Form.Control as="select" defaultValue={skillLevels[0]} onChange={(event) => {
                setSkillLevels(skillLevels => ({ ...skillLevels, 0: event.target.value }));
                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
            }}>
                {SKILLLEVELS.map((lvl) => (
                    <option key={lvl}>{lvl}</option>
                ))}
            </Form.Control>
            {list}
        </Card>
    )
}
function skillSkill(char, skillLevels, stats) {
    return (
        <Card> {/** Skill */}
            {CHARINFO[char.name]["Skill"]["Name"]} level
            <Form.Control as="select" defaultValue={skillLevels[1]} onChange={(event) => {
                setSkillLevels(skillLevels => ({ ...skillLevels, 1: event.target.value }));
                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
            }}>
                {SKILLLEVELS.map((lvl) => (
                    <option key={lvl}>{lvl}</option>
                ))}
            </Form.Control>
        </Card>
    )
}
function skillBurst(char, skillLevels, stats) {
    return (
        <Card> {/** Burst */}
            {CHARINFO[char.name]["Burst"]["Name"]} level
            <Form.Control as="select" defaultValue={skillLevels[2]} onChange={(event) => {
                setSkillLevels(skillLevels => ({ ...skillLevels, 2: event.target.value }));
                setStats(calcStats(char, weap, flower, feather, hourglass, goblet, hat));
            }}>
                {SKILLLEVELS.map((lvl) => (
                    <option key={lvl}>{lvl}</option>
                ))}
            </Form.Control>
        </Card>
    )
}