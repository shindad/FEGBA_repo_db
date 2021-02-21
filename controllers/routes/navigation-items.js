var navigationItems = []

/**
 * constructor-like function that sets up navigation item data in a uniform format
 * 
 * @param {string} displayText 
 * @param {string} icon 
 * @param {string} isOpen
 * @param {string} feClasses
 * @param {string} dropdownDirection 
 */
function formatItems(displayText, icon, isOpen, feClasses, dropdownDirection) {
	navigationItems.push({
		displayText,
		icon,
		isOpen,
		feClasses,
		dropdownDirection
	})
}

// Build the navItem array with relevant menu options
formatItems("Swords", "img/myrm.gif", "false", [
	"Squire", "Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue", "Custom Sword"
])
formatItems("Lances", "img/soldier.gif", "false", [
	"Recruit", "Soldier", "Halberdier"
])
formatItems("Axes", "img/fighter.gif", "false", [
	"Journeyman", "Brigand", "Pirate", "Berserker", "Fighter", "Warrior", "Custom Axe"
])
formatItems("Bows", "img/archer.gif", "false", [
	"Archer", "Sniper", "Ballista", "Nomad", "Ranger"
])
formatItems("Armor", "img/knight.gif", "false", [
	"Knight", "General", "Marshall"
])
formatItems("Cavalry", "img/cav.gif", "false", [
	"Cavalier", "Paladin", "Great Knight", "Master Knight", "Custom Cavalry"
])
formatItems("Fliers", "img/peg.gif", "false", [
	"Pegasus Knight", "Falcoknight", "Griffon Knight", "Wyvern Rider", "Wyvern Lord", "Wyvern Knight", "Custom Flier"
])
formatItems("Unique", "img/lord.gif", "false", [
	"Eirika-Base", "Eliwood-Base", "Ephraim-Base", "Lyn-Base", "Hector-Base", "Roy-Base",
	"Refresh", "Miscellaneous", "Crossover"
], "right")
formatItems("Magi", "img/mage.gif", "false", [
	"Pupil", "Mage", "Sage", "Archsage",
	"Clergy", "Monk", "Bishop", "Saint",
	"Shaman", "Druid", "Summoner", "Necromancer",
	"Troubadour", "Mage Knight", "Valkyrie", "Dark Knight", "Custom Magi"
], "right")
formatItems("Creatures", "img/rev.gif", "false", [
	"Undead", "Demon", "Mauthe Doog", "Manakete", "Dragon", "Shapeshifter", "Custom Monster"
], "right")
formatItems("Spells", "img/tome.gif", "false", [
	"Anima", "Dark", "Light", "Skill", "Other"
], "right")

module.exports = navigationItems