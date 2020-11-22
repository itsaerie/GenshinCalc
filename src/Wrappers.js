// This file is for sharing all of the wrappers used for stats
// - This is because JS passes objects by reference

const ALL_STATS = [
    'ELEMENT', 'WEAPON_TYPE',
    'HP_BASE', 'HP_PERC', 'HP_TOTAL',
    'ATK_BASE', 'ATK_PERC', 'ATK_TOTAL',
    'DEF_BASE', 'DEF_PERC', 'DEF_TOTAL',
    'ELEMENTAL_MASTERY',
    'STAMINA', // this shit is useless
    'CRIT_RATE', 'CRIT_DAMAGE',
    'HEAL_BONUS', 'HEAL_RECEIVED',
    'ENERGY_RECHARGE',
    'COOLDOWN_REDUCTION',
    'POWERFUL_SHIELD',
    'PYRO_DAMAGE', 'PYRO_BONUS', 'PYRO_RESISTANCE',
    'HYDRO_DAMAGE', 'HYDRO_BONUS', 'HYDRO_RESISTANCE',
    'DENDRO_DAMAGE', 'DENDRO_BONUS', 'DENDRO_RESISTANCE',
    'ELECTRO_DAMAGE', 'ELECTRO_BONUS', 'ELECTRO_RESISTANCE',
    'ANEMO_DAMAGE', 'ANEMO_BONUS', 'ANEMO_RESISTANCE',
    'CRYO_DAMAGE', 'CRYO_BONUS', 'CRYO_RESISTANCE',
    'GEO_DAMAGE', 'GEO_BONUS', 'GEO_RESISTANCE',
    'PHYSICAL_DAMAGE', 'PHYSICAL_BONUS', 'PHYSICAL_RESISTANCE',
]

const STATS = [
    'HP_BASE', 'HP_PERC', 'HP_TOTAL',
    'ATK_BASE', 'ATK_PERC', 'ATK_TOTAL',
    'DEF_BASE', 'DEF_PERC', 'DEF_TOTAL',
    'ELEMENTAL_MASTERY',
    'STAMINA', // this shit is useless
    'CRIT_RATE', 'CRIT_DAMAGE',
    'HEAL_BONUS', 'HEAL_RECEIVED',
    'ENERGY_RECHARGE',
    'COOLDOWN_REDUCTION',
    'POWERFUL_SHIELD',
    'PYRO_DAMAGE', 'PYRO_BONUS', 'PYRO_RESISTANCE',
    'HYDRO_DAMAGE', 'HYDRO_BONUS', 'HYDRO_RESISTANCE',
    'DENDRO_DAMAGE', 'DENDRO_BONUS', 'DENDRO_RESISTANCE',
    'ELECTRO_DAMAGE', 'ELECTRO_BONUS', 'ELECTRO_RESISTANCE',
    'ANEMO_DAMAGE', 'ANEMO_BONUS', 'ANEMO_RESISTANCE',
    'CRYO_DAMAGE', 'CRYO_BONUS', 'CRYO_RESISTANCE',
    'GEO_DAMAGE', 'GEO_BONUS', 'GEO_RESISTANCE',
    'PHYSICAL_DAMAGE', 'PHYSICAL_BONUS', 'PHYSICAL_RESISTANCE',
]

// For Dropdown
class Character {
    constructor() {
        this.name = "Amber";
        this.level = 0;
        this.ascension = 0;
    }
    /**
     * Getting name
     */
    name() {
        return this.name;
    }
    /**
     * Getting level
     */
    level() {
        return this.level;
    }
    /**
     * Getting ascension
     */
    ascension() {
        return this.ascension;
    }
    /**
     * Sets the name of the character
     * @param {string} name - Name of character (assumed to be validated)
     */
    setName(name) {
        this.name = name;
    }
    /**
     * Attempt to set level without updating ascension
     * @param {Number} level - Expected level
     */
    setLevel(level) {
        this.level = level;
        // enforce ascension
        // lvl 90 -> 90-0-20=70/10 => asc 7 -1 => asc 6
        // lvl 89 -> 89-9-20=60/10 => asc 6
        // lvl 80 -> 80-0-20=60/10 => asc 6
        // lvl 39 -> 39-9-20=10/10 => asc 1
        // lvl 29 -> 29-9-20=0/10  => asc 0 +1 => asc 1
        // lvl 19 -> 19-9-20=-10/10=> asc-1 => asc 0
        // lvl 9  -> 9-9-20=-20/10 => asc-2 => asc 0
        this.ascension = (level-(level%10)-20)/10;
        if (this.ascension === 7)
            this.ascension --;
        if (this.ascension === 0)
            this.ascension = 1;
        if (this.ascension < 0)
            this.ascension = 0;
    }
    /**
     * Attempt to set level and ascension
     * @param {Number} ascension - Expected Ascension
     */
    setAscension(ascension) {
        this.ascension = ascension;
    }
}

// For Dropdown
class Weapon {
    constructor() {
        this.name = "Amber";
        this.level = 0;
        this.ascension = 0;
    }
    /**
     * Getting name
     */
    name() {
        return this.name;
    }
    /**
     * Getting level
     */
    level() {
        return this.level;
    }
    /**
     * Getting ascension
     */
    ascension() {
        return this.ascension;
    }
    /**
     * Sets the name of the character
     * @param {string} name - Name of character (assumed to be validated)
     */
    setName(name) {
        this.name = name;
    }
    /**
     * Attempt to set level without updating ascension
     * @param {Number} level - Expected level
     */
    setLevel(level) {
        this.level = level;
        // enforce ascension
        // lvl 90 -> 90-0-20=70/10 => asc 7 -1 => asc 6
        // lvl 89 -> 89-9-20=60/10 => asc 6
        // lvl 80 -> 80-0-20=60/10 => asc 6
        // lvl 39 -> 39-9-20=10/10 => asc 1
        // lvl 29 -> 29-9-20=0/10  => asc 0 +1 => asc 1
        // lvl 19 -> 19-9-20=-10/10=> asc-1 => asc 0
        // lvl 9  -> 9-9-20=-20/10 => asc-2 => asc 0
        this.ascension = (level-(level%10)-20)/10;
        if (this.ascension === 7)
            this.ascension --;
        if (this.ascension === 0)
            this.ascension = 1;
        if (this.ascension < 0)
            this.ascension = 0;
    }
    /**
     * Attempt to set level and ascension
     * @param {Number} ascension - Expected Ascension
     */
    setAscension(ascension) {
        this.ascension = ascension;
    }
}

// For Artifacts
class Artifacts{
    constructor(slot) {
        // Flower, Feather, Time, Cup, Hat
        //  will not change
        this.slot = slot;
        this.set = null; // Which set bonus is in effect?
        // primary stat
        this.mainStat = null;
        this.mainVal = null;
        // all them extra stats
        this.sub1 = null;
        this.val1 = null;
        this.sub2 = null;
        this.val2 = null;
        this.sub3 = null;
        this.val3 = null;
        this.sub4 = null;
        this.val4 = null;
    }
    // Basic getters
    getStats() {
        var dict = {};
        dict[this.mainStat] = this.mainVal;
        dict[this.sub1] = this.val1;
        // add if nonnull
        if (this.sub2 != null)
            dict[this.sub2] = this.val2;
        if (this.sub3 != null)
            dict[this.sub3] = this.val3;
        if (this.sub4 != null)
            dict[this.sub4] = this.val4;
        return dict;
    }
    getSet() { // GO!
        return this.set;
    }
    // Basic setter
    setStat(substatNum, statName, statValue) {
        // Format: subStat number, stat name, stat value
        // TODO validate statName from pool of valid stats if main stat
        switch (substatNum) {
            case 1: // substat 1
                this.sub1 = statName;
                this.val1 = statValue;
                break;
            case 2: // substat 2
                this.sub2 = statName;
                this.val2 = statValue;
                break;
            case 3: // substat 3
                this.sub3 = statName;
                this.val3 = statValue;
                break;
            case 4: // substat 4
                this.sub4 = statName;
                this.val4 = statValue;
                break;
            default: // main stat
                this.mainStat = statName;
                this.mainVal = statValue;
        }
    }
    setSet(setName) {
        // TODO validate set name
        this.set = setName;
    }
}

// For Stats
class CalcStats {
    // todo: get stats from char_data, weap_data, all artifacts
    constructor() {
        // begins by mapping all stats to 0
        this.stats = Object.assign({}, ...STATS.map((STAT) => ({[STAT]:0.0})));
        this.char = {};
        this.weap = {};
        this.florafact = {};
        this.featherfact = {};
        this.timefact = {};
        this.cupfact = {};
        this.hatifact = {};
    }
}

export {
    Character,
    Weapon,
    Artifacts,
    CalcStats
};