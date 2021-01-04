const ARTIFACT_SETS = {
    // Group 5 (**** - *****)
    'Noblesse Oblige': {
        2: {'': 'Elemental Burst DMG +20%'}, // Skill TODO
        4: {'': 'Using an Elemental Burst increases all party members\' ATK by 20% for 12s. This effect cannot stack.'} // Toggle TODO
    },
    'Maiden Beloved': {
        2: {'HEAL_BONUS': 15},
        4: {'': 'Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.'} // Toggle TODO
    },
    'Retracing Bolide': {
        2: {'POWERFUL_SHIELD': 35},
        4: {'': 'Gain an additional 40% Normal and Charged Attack DMG while under the protection of a shield.'} // Toggle TODO
    },
    'Crimson Witch of Flames': {
        2: {'PYRO_BONUS': 15},
        4: {'': 'Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.'} // React Toggle TODO
    },
    'Lavawalker': {
        2: {'PYRO_RESISTANCE': 40},
        4: {'': 'Increases DMG against enemies that are Burning or affected by Pyro by 35%.'} // Toggle TODO
    },
    'Heart of Depth': {
        2: {'HYDRO_BONUS': 15},
        4: {'': 'After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.'} // Toggle TODO
    },
    'Thundering Fury': {
        2: {'ELECTRO_BONUS': 15},
        4: {'EXTRA_TEXT': 'Increases damage caused by Overloaded, Electro-Charged, and Superconduct DMG by 40%. Triggering such effects decreases Elemental Skill CD by 1s. Can only occur once every 0.8s.'} // React TODO
    },
    'Thundersoother': {
        2: {'ELECTRO_RESISTANCE': 40},
        4: {'EXTRA_TEXT': 'Increases DMG against enemies affected by Electro by 35%.'}
    },
    'Viridescent Venerer': {
        2: {'ANEMO_BONUS': 15},
        4: {'EXTRA_TEXT': 'Increases Swirl DMG by 60%. Decreases opponent\'s Elemental RES to the element infused in the Swirl by 40% for 10s.'} // React TODO
    },
    'Blizzard Strayer': {
        2: {'CRYO_BONUS': 15},
        4: {'': 'When a character attacks an enemy affected by Cryo, their CRIT Rate is increased by 20%. If the enemy is Frozen, CRIT Rate is increased by an additional 20%.'} // Toggle TODO
    },
    'Archaic Petra': {
        2: {'GEO_BONUS': 15},
        4: {'': 'Upon obtaining a crystal created through a Geo Elemental Reaction, all party members gain 35% Elemental DMG Bonus to that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.'} // Toggle TODO
    },
    'Bloodstained Chivalry': {
        2: {'PHYSICAL_BONUS': 25},
        4: {'': 'After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.'} // Toggle TODO
    },
    // Group 4 (**** - *****)
    'Gladiator\'s Finale': {
        2: { 'ATK_PERC': 18 },
        4: { '': 'If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.' } // Skill TODO
    },
    'Wanderer\'s Troupe': {
        2: { 'ELEMENTAL_MASTERY': 80 },
        4: { '': 'Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.' } // Skill TODO
    },
    // Group 3 (*** - ****)
    'Brave Heart': {
        2: { 'ATK_PERC': 18 },
        4: { '': 'Increases DMG by 30% against opponents with more than 50% HP.' } // Toggle TODO
    },
    'Resolution of Sojourner': {
        2: { 'ATK_PERC': 18 },
        4: { '': 'Increases Charged Attack CRIT Rate by 30%.' } // Skill TODO
    },
    'Martial Artist': {
        2: { '': 'Increases Normal Attack and Charged Attack DMG by 15%.' }, // Skill TODO
        4: { '': 'After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.' } // Toggle TODO
    },
    'Gambler': {
        2: { '': 'Increases Elemental Skill DMG by 20%.' }, // Skill TODO
        4: { 'EXTRA_TEXT': 'Defeating an opponent has 100% chance to remove Elemental Skill CD. Can only occur once every 15s.' }
    },
    'Defender\'s Will': {
        2: { 'DEF_PERC': 30 },
        4: { 'EXTRA_TEXT': 'For each different element present in your own party, the wearer\'s Elemental RES to that corresponding element is increased by 30%.' }
    },
    'Scholar': {
        2: { 'ENERGY_RECHARGE': 20 },
        4: { 'EXTRA_TEXT': 'Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.' }
    },
    'Tiny Miracle': {
        2: {
            'PYRO_RESISTANCE': 20,
            'HYDRO_RESISTANCE': 20,
            'DENDRO_RESISTANCE': 20,
            'ELECTRO_RESISTANCE': 20,
            'ANEMO_RESISTANCE': 20,
            'CRYO_RESISTANCE': 20,
            'GEO_RESISTANCE': 20,
        },
        4: { 'EXTRA_TEXT': 'Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.' }
    },
    // Group 2 (*** - ****)
    'Instructor': {
        2: { 'ELEMENTAL_MASTERY': 80 },
        4: { '': 'Upon triggering an Elemental Reaction, increases all party members\' Elemental Mastery by 120 for 8s.' } // Toggle TODO
    },
    'Berserker': {
        2: { 'CRIT_RATE': 12 },
        4: { '': 'When HP is below 70%, CRIT Rate increases by an additional 24%.' } // Toggle TODO
    },
    'The Exile': {
        2: { 'ENERGY_RECHARGE': 20 },
        4: { '': 'Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack.' }
    },
    // Group 1 (* - ***)
    'Adventurer': {
        2: { 'HP_BONUS': 100 },
        4: { 'EXTRA_TEXT': 'Opening a chest regenerates 30% Max HP over 5s' }
    },
    'Lucky Dog': {
        2: { 'DEF_BONUS': 100 },
        4: { 'EXTRA_TEXT': 'Picking up Mora restores 300 HP' }
    },
    'Traveling Doctor': {
        2: { 'HEAL_RECEIVED': .20 },
        4: { 'EXTRA_TEXT': 'Using Elemental Burst restores 20% HP' }
    },
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

export { ARTIFACT_SETS, ART_SUBSTATS, ART_MAIN_HOURGLASS, ART_MAIN_GOBLET, ART_MAIN_HAT }