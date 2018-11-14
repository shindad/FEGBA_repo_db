var animRow = [];

function rowMaker(aRowID, disp, catHeader, cat, classes) {
    animRow.push({
        aRowID: aRowID,
        disp: disp,
        catHeader: catHeader,
        cat: cat
    });
};

rowMaker("SWDFill", "false", "Sword Infantry", "Sword");
rowMaker("LNCFill", "false", "Lance Infantry", "Lance");
rowMaker("AXEFill", "false", "Axe Infantry", "Axe");
rowMaker("BOWFill", "false", "Bow Units", "Bow");
rowMaker("ARMFill", "false", "Armored Units", "Knight");
rowMaker("CAVFill", "false", "Cavalry Units", "Cavalry");
rowMaker("FLYFill", "false", "Flying Units", "Flyer");
rowMaker("LRDFill", "false", "Lord Units", "Lord");
rowMaker("MAGFill", "false", "Magic Users", "Mage");
rowMaker("MONFill", "false", "Creatures", "Creature");
rowMaker("MISCFill", "false", "Dancers, Bards, & More", "Dancer");
rowMaker("SPLFill", "false", "Spells", "Spell");

module.exports = animRow;