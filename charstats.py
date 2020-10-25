'''
# For holding character stats and everything
'''

poss_stats = [
    'ELEMENT', 'WEAPON_TYPE',
    'HP_BASE', 'HP_PERC', 'HP_TOTAL',
    'ATK_BASE', 'ATK_PERC', 'ATK_TOTAL',
    'DEF_BASE', 'DEF_PERC', 'DEF_TOTAL',
    'ELEMENTAL_MASTERY',
    'STAMINA', # this shit is useless
    'CRIT_PERC', 'CRIT_DAMAGE',
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

class Character:
    def __init__(self, char_name, level, ascension, weapon, artifacts, field_buff):
        # TODO FETCH CHAR FROM DB
        character = {} # assume this is the character's stats fetched from DB
        self.character = character
        self.char_name = char_name
        self.level = level
        self.ascension = ascension
        self.weapon = weapon
        self.artifacts = artifacts
        self.field_buff = field_buff

    # calculate all main stats and update self
    def calculate(self):
        gear_calculate(self)
        char_calculate(self)
        totals_calculate(self)

    # calculations per-skill (max three damaging abilities)
    def skill_calculation(self, skill, skill_level):
        # skill 1,2,3
        # 1- basic attack
        # 2- special
        # 3- ultomato
        char_name = self.char_name
        skill = {}
        ''' FIGURE OUT FORMAT EVENTUALLY
            "1st desc": []
            "2-hit": %
        '''
    
    # adding main stats from gear and everything
    def gear_calculate(self):
        for stat in poss_stats:
            # iterate through weapons and artifacts
            self.character[stat] += self.weapon[stat]
            for artifact in self.artifacts:
                self.character[stat] += artifact[stat]
            self.character[stat] += self.field_buff[stat]
    
    # adding in stats from talents
    def char_calculate(self, weapon, artifacts):
        # TODO find all characters and their basic bitch bonuses
        if self.char_name == "Mona" and self.ascension > 3:
            self.character['HYDRO_DAMAGE'] += self.character['ENERGY_RECHARGE']/5

    def totals_calculate(self):
        # calculate all the totals
        # TODO C3POrtillo make this in one line
        self.character['HP_TOTAL'] = self.character['HP_BASE'] * 1+self.character['HP_PERC']
        self.character['ATK_TOTAL'] = self.character['ATK_BASE'] * 1+self.character['ATK_PERC']
        self.character['DEF_TOTAL'] = self.character['DEF_BASE'] * 1+self.character['DEF_PERC']
        self.character['PYRO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['PYRO_BONUS']
        self.character['HYDRO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['HYDRO_BONUS']
        self.character['DENDRO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['DENDRO_BONUS']
        self.character['ELECTRO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['ELECTRO_BONUS']
        self.character['ANEMO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['ANEMO_BONUS']
        self.character['CRYO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['CRYO_BONUS']
        self.character['GEO_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['GEO_BONUS']
        self.character['PHYSICAL_DAMAGE'] = self.character['ATK_TOTAL'] * 1+self.character['PHYSICAL_BONUS']

class Skill:
    def __init__(self, char, char_name, skill_name, skill_level):
        # TODO FETCH SKILL FROM DB
        # format from db is as:
        #  "line 1 desc";"line 1 formula"
        #  "line 2 desc";"line 2 formula""
        #  ...etc
        # formulas will be like "character['ATK_TOTAL']*.55+1283"
        skill = {}
        self.numSkills = len(skill)
        for i in range(self.numSkills):
            self.name[i] = skill['NAME'][i]
            self.desc[i] = skill['DESCRIPTION'][i]
            # Load in the character stats for the formulas
            character = char.character # this is an array
            self.stat[i] = eval(skill['FORMULA'][i]) # this returns a value

class Weapon:
    def __init__(self, weapon_type, weapon_name, level):
        # TODO FETCH WEAPON FROM DB
        weapon = {}
        self.weapon = weapon

class Artifact:
    def __init__(self, slot, set):
        # TODO tell them to input these themselves those little lazy-ass shits
        artifact = {}