var animRow = [];

function rowMaker(aRowID, disp, catHeader, cat, classes) {
    animRow.push({
        aRowID: aRowID,
        disp: disp,
        catHeader: catHeader,
        cat: cat,
        classes: classes
    });
};

rowMaker("swordFill", "false", "Sword Infantry", "Sword", [
    "Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue"
]);
rowMaker("lanceFill", "false", "Lance Infantry", "Lance", [
    "Recruit", "Soldier", "Halberdier"
]);
rowMaker("axeFill", "false", "Axe Infantry", "Axe", [
    "Journeyman", "Brigand", "Pirate", "Berserker", "Fighter", "Warrior"
]);
rowMaker("bowFill", "false", "Bow Units", "Bow", [
    "Archer", "Ballistae", "Nomad", "Nomad Trooper", "Ranger", "Sniper"
]);
rowMaker("knightFill", "false", "Armored Units", "Knight", [
    "Knight", "General", "King"
]);
rowMaker("cavFill", "false", "Cavalry Units", "Cavalry", [
    "Cavalier", "Paladin", "Great Knight", "Master Knight"
]);
rowMaker("flierFill", "false", "Flying Units", "Flyer", [
    "Pegasus Knight", "Falcoknight", "Griffon Knight", "Wyvern Rider", "Wyvern Lord", "Wyvern Knight"
]);
rowMaker("lordFill", "false", "Lord Units", "Lord", [
    "Eirika", "Eirika Great Lord", "Ephraim", "Ephraim Great Lord",
    "Eliwood", "Eliwood Knight Lord", "Hector", "Hector Great Lord",
    "Lyn", "Lyn Blade Lord", "Roy",
    "Ike Ranger", "Ike Vanguard", "Greil", "Marth"
]);
rowMaker("magicFill", "false", "Magic Users", "Mage", [
    "Pupil", "Mage", "Sage", "Archsage",
    "Priest", "Cleric", "Monk", "Bishop", "Patriarch",
    "Shaman", "Druid", "Dark Knight", "Summoner", "Dark Druid", "Necromancer",
    "Troubadour", "Mage Knight", "Valkyrie"
]);
rowMaker("monsterFill", "false", "Creatures", "Creature", [
    "Dragon", "Manakete", "Ghost", "Bael", "Centaur", "Cyclops", "Gargoyle",
    "Mogall", "Gorgon", "Skeleton", "Zombie", "Succubus"
]);
rowMaker("dancerFill", "false", "Dancers, Bards, & More", "Dancer", [
    "Bard", "Dancer", "Magic Seal", "Merlinus"
]);
rowMaker("spellFill", "false", "Spells", "Spell", [
    "Aircalibur", "Aqua", "Aqua Edge", "Arcthunder", "Artemis", "Aura", "Crimson Eye", "Donbettyr", "Bolganone"
]);

module.exports = animRow;