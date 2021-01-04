const STATS = [
    '', // this is a filler for blank and unused stats
    'HP_BASE', 'HP_BONUS', 'HP_PERC', 'HP_TOTAL',
    'ATK_BASE', 'ATK_BONUS', 'ATK_PERC', 'ATK_TOTAL',
    'DEF_BASE', 'DEF_BONUS', 'DEF_PERC', 'DEF_TOTAL',
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
const ARTIFACT_SETS = {
    'Adventurer':{},
    'Lucky Dog':{},
    'Traveling Doctor':{},
    'Instructor':{},
    'Berserker':{},
    'The Exilt':{},
    'Resolution of Sojourner':{},
    'Martial Artist':{},
    'Defender\'s Will':{},
    'Tiny Miracle':{},
    'Brave Heart':{},
    'Gambler':{},
    'Scholar':{},
    'Gladiator\'s Finale':{},
    'Wanderer\'s Troupe':{},
    'Viridescent Venerer':{},
    'Thundering Fury':{},
    'Thundersoother':{},
    'Crimson Witch of Flames':{},
    'Lavawalker':{},
    'Archaic Petra':{},
    'Retracing Bolide':{},
    'Maiden Beloved':{},
    'Noblesse Oblige':{},
    'Bloodstained Chivalry':{},
    'Icebreaker':{},
    'Ocean Conqueror':{}
}
const ART_SUBSTATS = [
    'HP_BONUS', 'HP_PERC',
    'ATK_BONUS', 'ATK_PERC',
    'DEF_BONUS', 'DEF_PERC',
    'ELEMENTAL_MASTERY',
    'CRIT_RATE', 'CRIT_DAMAGE',
    'ENERGY_RECHARGE'
]
const ART_MAIN_HOURGLASS = [
    'HP_PERC',
    'DEF_PERC',
    'ATK_PERC',
    'ELEMENTAL_MASTERY',
    'ENERGY_RECHARGE'
]
const ART_MAIN_GOBLET = [
    'HP_PERC',
    'DEF_PERC',
    'ATK_PERC',
    'ELEMENTAL_MASTERY',
    'PYRO_BONUS',
    'HYDRO_BONUS',
    'DENDRO_BONUS',
    'ELECTRO_BONUS',
    'ANEMO_BONUS',
    'CRYO_BONUS',
    'GEO_BONUS',
    'PHYSICAL_BONUS',
]
const ART_MAIN_HAT = [
    'HP_PERC',
    'DEF_PERC',
    'ATK_PERC',
    'ELEMENTAL_MASTERY',
    'CRIT_RATE', 'CRIT_DAMAGE',
    'HEAL_BONUS'
]

export { STATS, ARTIFACT_SETS, ART_SUBSTATS, ART_MAIN_HOURGLASS, ART_MAIN_GOBLET, ART_MAIN_HAT }