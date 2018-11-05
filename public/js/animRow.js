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

rowMaker("SWDFill", "false", "Sword Infantry", "Sword", [
    "Squire", "Mercenary", "Hero", "Myrmidon", "Swordmaster", "Thief", "Assassin", "Rogue"
]);
rowMaker("LNCFill", "false", "Lance Infantry", "Lance", [
    "Recruit", "Soldier", "Halberdier"
]);
rowMaker("AXEFill", "false", "Axe Infantry", "Axe", [
    "Journeyman", "Brigand", "Pirate", "Berserker", "Fighter", "Warrior"
]);
rowMaker("BOWFill", "false", "Bow Units", "Bow", [
    "Archer", "Ballista", "Nomad", "Nomad Trooper", "Ranger", "Sniper"
]);
rowMaker("ARMFill", "false", "Armored Units", "Knight", [
    "Knight", "General", "King"
]);
rowMaker("CAVFill", "false", "Cavalry Units", "Cavalry", [
    "Cavalier", "Paladin", "Great Knight"
]);
rowMaker("FLYFill", "false", "Flying Units", "Flyer", [
    "Pegasus Knight", "Falcoknight", "Griffon Knight", "Wyvern Rider", "Wyvern Lord", "Wyvern Knight"
]);
rowMaker("LRDFill", "false", "Lord Units", "Lord", [
    "Eirika Lord", "Eirika Great Lord", "Ephraim Lord", "Ephraim Great Lord",
    "Eliwood Lord", "Eliwood Knight Lord", "Hector Lord", "Hector Great Lord",
    "Lyn Lord", "Lyn Blade Lord", "Roy", "Custom"
]);
rowMaker("MAGFill", "false", "Magic Users", "Mage", [
    "Pupil", "Mage", "Sage", "Archsage",
    "Priest", "Cleric", "Monk", "Bishop", "Saint",
    "Shaman", "Druid", "Dark Knight", "Summoner", "Dark Druid", "Necromancer",
    "Troubadour", "Mage Knight", "Valkyrie"
]);
rowMaker("MONFill", "false", "Creatures", "Creature", [
    "Dragon", "Manakete", "Ghost", "Bael", "Centaur", "Cyclops", "Gargoyle",
    "Mogall", "Gorgon", "Skeleton", "Zombie", "Succubus"
]);
rowMaker("MISCFill", "false", "Dancers, Bards, & More", "Dancer", [
    "Bard", "Dancer", "Magic Seal", "Merlinus"
]);
rowMaker("SPLFill", "false", "Spells", "Spell", [
    "Aircalibur", "Aqua", "Aqua Edge", "Arcthunder", "Artemis", "Aura", "Crimson Eye", "Donbettyr", "Bolganone"
]);

module.exports = animRow;