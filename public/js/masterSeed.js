var db = require("../../models");

function buildSeeds(category, feClass, anName, URL, dlName, srcName, wepName, still, gif) {

    db.Weapon.findOne({
        where: {
            name: wepName
        }
    }).then(function (weapon) {
        //console.log(JSON.parse(JSON.stringify(weapon)));

        db.Anim.create({
            category: category,
            feClass: feClass,
            anName: anName,
            URL: URL,
            dlName: dlName,
            srcName: srcName,
        }).then(function (anim) {

            //console.log(JSON.parse(JSON.stringify(anim)));
            anim.addWeapon(weapon, {
                through: {
                    still: still,
                    gif: gif,
                    name: feClass
                }
            });
        });
    });
};

function altWep(anName, wepName, still, gif) {
    db.Weapon.findOne({
        where: {
            name: wepName
        }
    }).then(function (weapon) {
        //console.log(JSON.parse(JSON.stringify(weapon)));

        db.Anim.findOne({
            where: {
                anName: anName
            }
        }).then(function (anim) {

            anim.addWeapon(weapon, {
                through: {
                    still: still,
                    gif: gif
                }
            });
        });
    });

};

// Assassins
buildSeeds("sword", "Assassin", "Assassin F", "img/sin/f_gt.7z", "Assassin_F_GRT.7z", "Greentea, DerTheVaporeon", "sword", "img/sin/f_gt.png", "img/sin/f_gt.gif");
buildSeeds("sword", "Assassin", "Assassin F Hoodless Skirt", "img/sin/f_hl_pony.7z", "Assassin_F_Skirt.7z", "Moocavo, Riku", "sword", "img/sin/f_hl_pony.png", "img/sin/f_hl_pony.gif");
buildSeeds("sword", "Assassin", "Assassin F Pants Ponytail", "img/sin/f_pants_pony.7z", "Assassin_F_Pants.7z", "Keks_Krebs", "sword", "img/sin/f_pants_pony.png", "img/sin/f_pants_pony.gif");
buildSeeds("sword", "Assassin", "Assassin M Hoodless", "img/sin/m_hl_b.7z", "Assassin_M_HL.7z", "Keks_Krebs, Peerless", "sword", "img/sin/m_hl_b.png", "img/sin/m_hl_b.gif");
buildSeeds("sword", "Assassin", "Assassin Jaffar", "img/sin/m_jaf_gt.7z", "Assassin_Jaff_GRT.7z", "Greentea, Nuramon", "sword", "img/sin/m_jaf_gt.png", "img/sin/m_jaf_gt.gif");
buildSeeds("sword", "Assassin", "Assassin Jaffar Shirt", "img/sin/m_jaf_sh_b.7z", "Assassin_Jaff_Shirt_Bow.7z", "", "sword", "img/sin/m_jaf_sh_b.png", "img/sin/m_jaf_sh_b.gif");
buildSeeds("sword", "Assassin", "Assassin Jaffar CSAFix", "img/sin/m_jaf_csa_b.7z", "Assassin_Jaff_CSAfix_Bow.7z", "SD9k", "sword", "img/sin/m_jaf_csa_b.png", "img/sin/m_jaf_csa_b.gif");
buildSeeds("sword", "Assassin", "Assassin Jojaffar", "img/sin/m_jaf_jojo.7z", "Assassin Jojaffar.7z", "DerTheVaporeon, SD9k", "sword", "img/sin/m_jaf_jojo.png", "img/sin/m_jaf_jojo.gif");
buildSeeds("sword", "Assassin", "Assassin Jaffar Rip", "img/sin/m_jaf_og_b.7z", "Assassin_Jaff_Rip_Bow.7z", "IS, SD9k", "sword", "img/sin/m_jaf_og_b.png", "img/sin/m_jaf_og_b.gif");
buildSeeds("sword", "Assassin", "Assassin Legault", "img/sin/m_leg.7z", "Assassin_Legault.7z", "IS", "sword", "img/sin/m_leg.png", "img/sin/m_leg.gif");
buildSeeds("sword", "Assassin", "Assassin Matthew", "img/sin/m_mat_gt.7z", "Assassin_Matt_GRT.7z", "Greentea, Pikmin", "sword", "img/sin/m_mat_gt.png", "img/sin/m_mat_gt.gif");

altWep("Assassin M Hoodless", "bow", "img/sin/m_hl_bow.png", "img/sin/m_hl_bow.gif");
altWep("Assassin Jaffar Shirt", "bow", "img/sin/m_jaf_sh_bow.png", "img/sin/m_jaf_sh_bow.gif");
altWep("Assassin Jaffar CSAFix", "bow", "img/sin/m_jaf_csa_bow.png", "img/sin/m_jaf_csa_bow.gif");
altWep("Assassin Jojaffar", "bow", "img/sin/m_jaf_jojo_bow.png", "img/sin/m_jaf_jojo_bow.gif");
altWep("Assassin Jaffar Rip", "bow", "img/sin/m_jaf_og_bow.png", "img/sin/m_jaf_og_bow.gif");

// Heroes

//     var heroes = [
//         heroFE = new Anim("Hero F FE6", herPath + "f_echi", "Hero_F_Echidna.7z", ["sword", "axe"], "IS"),
//         heroFA = new Anim("Hero F Alt", herPath + "f_jap_alt", "Hero_F_Alt.7z", ["sword", "axe"], "St jack"),
//         heroMA = new Anim("Hero M Armor", herPath + "m_arm", "Hero_M_Armor.7z", ["sword", "axe"]),
//         heroMC = new Anim("Hero M Coat", herPath + "m_coat", "Hero_M_Coat.7z", ["sword", "axe"], "IS"),
//         heroML = new Anim("Hero M", herPath + "m_l", "Hero_M_Lance.7z", ["sword", "lance", "axe"], "IS, Pushwall")
//     ];

//     fillerTail("Heroes", "heroRow", heroes, "#swordFill");
// };

// function mercFiller() {
//     var mercPath = imgPath + "swords/mercenary/";

//     var mercenaries = [
//         mercFEir = new Anim("Mercenary F Beta Eirika", mercPath + "f_be_eir", "Merc_F_Eir.7z", ["sword"], "Eldritch Abomination"),
//         mercFBEi = new Anim("Mercenary F", mercPath + "f_blindei", "Merc_F_TBADei.7z", ["sword"], "TheBlindArcher, Dei"),
//         mercFRus = new Anim("Mercenary F Thin", mercPath + "f_russ", "Merc_F_Clark.7z", ["sword"], "Russel Clark"),
//         mercMArm = new Anim("Mercenary M Armored", mercPath + "m_arm_al", "Merc_M_Arm.7z", ["sword"], "Alusq"),
//         mercMEld = new Anim("Mercenary M Repalette", mercPath + "m_eld_pal", "Merc_M_Eld.7z", ["sword"], "Eldritch Abomination"),
//         mercMFE6 = new Anim("Mercenary M FE6", mercPath + "m_fe6", "Merc_M_FE6.7z", ["sword"], "IS"),
//         mercMGrS = new Anim("Mercenary M Greatsword", mercPath + "m_gs", "Merc_M_GS.7z", ["sword"], "SD9k"),
//         mercMPal = new Anim("Mercenary M Repalette", mercPath + "m_pal", "Merc_M_Pal.7z", ["sword"]),
//         mercMPKA = new Anim("Mercenary M", mercPath + "m_pk_a", "Merc_M_Axe.7z", ["sword", "axe"], "IS, Princess Kilvas"),
//         mercMSqr = new Anim("Squire M", mercPath + "m_sq", "Squire.7z", ["sword"], "Russel Clark, A Random Player, Kobazco")
//     ];
//     fillerTail("Mercenaries", "mercRow", mercenaries, "#swordFill");
// };

// function myrmFiller() {
//     var myrmPath = imgPath + "swords/myrmidon/";

//     var myrmidons = [
//         myrmF = new Anim("Myrmidon F", myrmPath + "f", "Myrm_F.7z", ["sword"], "IS"),
//         myrmFM = new Anim("Myrmidon F Lyn/Merc", myrmPath + "f_max", "Myrm_F_Max.7z", ["sword"], "Max"),
//         myrmM = new Anim("Myrmidon M", myrmPath + "m", "Myrm_M.7z", ["sword"], "IS"),
//         myrmGuy = new Anim("Myrmidon Guy", myrmPath + "m_guy", "Myrm_Guy.7z", ["sword"], "IS"),
//         myrmMJk = new Anim("Myrmidon M Jacket", myrmPath + "m_jack", "Myrm_Jacket.7z", ["sword"], "Juby, Fuzz94, Pikimin"),
//         myrmJosh = new Anim("Myrmidon Joshua", myrmPath + "m_joshua", "Myrm_Joshua.7z", ["sword"], "SD9K")
//     ];
//     fillerTail("Myrmidons", "myrmRow", myrmidons, "#swordFill");
// };

// function rogueFiller() {
//     var roguePath = imgPath + "swords/rogue/";

//     var rogues = [
//         rogF = new Anim("Rogue F", roguePath + "f", "Rogue_F.7z", ["sword"], "eCut, Skitty"),
//         rogFP = new Anim("Rogue F Ponytail", roguePath + "f_p", "Rogue_F_PT.7z", ["sword"], "TempMael"),
//         rogM = new Anim("Rogue M", roguePath + "m_st", "Rogue_M_Staff.7z", ["sword", "staff"], "IS, ukulelej"),
//         rogMP = new Anim("Rogue M Repalette", roguePath + "m_p", "Rogue_M_Repal.7z", ["sword"], "Feaw")
//     ];
//     fillerTail("Rogues", "rogueRow", rogues, "#swordFill");
// };

// function swMasterFiller() {
//     var swdMPath = imgPath + "swords/swordmaster/";

//     var swordmasters = [
//         swmF = new Anim("Swordmaster F", swdMPath + "f", "SwM_F.7z", ["sword"], "IS"),
//         swmF6 = new Anim("Swordmaster F FE6", swdMPath + "f_fe6", "SwM_F_FE6.7z", ["sword"], "IS"),
//         swmFLH = new Anim("Swordmaster F Long Hair", swdMPath + "f_lh_cl", "SwM_F_LH.7z", ["sword"], "Russel Clark"),
//         swmFSH = new Anim("Swordmaster F Short Hair", swdMPath + "f_sh_cl", "SwM_F_SH.7z", ["sword"], "Russell Clark"),
//         swmM = new Anim("Swordmaster M", swdMPath + "m", "SwM_M.7z", ["sword"], "IS"),
//         swmM6 = new Anim("Swordmaster M FE6", swdMPath + "m_fe6", "SwM_M_FE6.7z", ["sword"], "IS"),
//         swmMX = new Anim("Swordmaster M FE10", swdMPath + "m_fex", "SwM_M_FEX.7z", ["sword"], "The Blind Archer"),
//         swmGy = new Anim("Swordmaster Guy", swdMPath + "m_guy", "SwM_Guy.7z", ["sword"], "IS"),
//         swmGyE = new Anim("Swordmaster Guy Alt", swdMPath + "m_guy_eld", "SwM_Guy_Eldritch.7z", ["sword"], "Eldritch Abomination"),
//         swmJS0 = new Anim("Swordmaster Joshua", swdMPath + "m_js_halt", "SwM_Joshua_SD.7z", ["sword"], "SD9K"),
//         swmJS1 = new Anim("Swordmaster Joshua", swdMPath + "m_js_hat", "SwM_Joshua.7z", ["sword"], "SD9K"),
//         swmLL = new Anim("Swordmaster Lloyd", swdMPath + "m_ll", "SwM_Lloyd.7z", ["sword"], "IS, Glenn"),
//         swmLGT = new Anim("Swordmaster Lloyd Alt", swdMPath + "m_ll_gt", "SwM_Lloyd_GrT.7z", ["sword"], "Greentea, DerTheVaporeon"),
//         swmTB = new Anim("TrueBlade M", swdMPath + "m_tb", "Trueblade.7z", ["sword"], "Cybaster")
//     ];
//     fillerTail("Swordmasters", "swordMRow", swordmasters, "#swordFill");
// };

// function thiefFiller() {
//     var thiefPath = imgPath + "swords/thief/";

//     var thieves = [
//         thF6 = new Anim("Thief Cath", thiefPath + "f_fe6", "Th_F_E6.7z", ["sword"], "IS"),
//         thFP = new Anim("Thief Cath Repalette", thiefPath + "f_p", "Th_F_Pony.7z", ["sword"], "Eldritch Abomination"),
//         thFL = new Anim("Thief Leila", thiefPath + "f_lei", "Th_F_Leila.7z", ["sword"], "IS"),
//         thMM = new Anim("Thief Matthew", thiefPath + "m_at", "Th_M_Matthew.7z", ["sword"], "IS"),
//         thMC = new Anim("Thief Chad", thiefPath + "m_chad", "Th_M_Chad.7z", ["sword"], "IS"),
//         thML = new Anim("Thief Legault", thiefPath + "m_leg", "Th_Legault.7z", ["sword"], "IS"),
//         thMDS = new Anim("Thief FEDS", thiefPath + "m_feds", "Th_M_FEDS.7z", ["sword"], "DerTheVaporeon")
//     ];
//     fillerTail("Thieves", "thiefRow", thieves, "#swordFill");
// };

// //Lance Fillers

// function recFiller() {
//     var recPath = imgPath + "lances/recruit/";

//     var recruits = [
//         reF8 = new Anim("Recruit Amelia", recPath + "f", "Recruit_F.7z", ["lance"], "IS")
//     ];
//     fillerTail("Recruits", "recRow", recruits, "#lanceFill");
// };

// function soldFiller() {
//     var soldPath = imgPath + "lances/soldier/";

//     var soldiers = [
//         solF = new Anim("Soldier F", soldPath + "f", "Soldier_F.7z", ["lance"], "Dr0zz"),
//         solFU = new Anim("Soldier F", soldPath + "f_alu", "Soldier_F_Alusq.7z", ["lance"], "Alusq"),
//         solFA = new Anim("Soldier Amelia", soldPath + "f_am", "Soldier_Amelia.7z", ["lance"], "Spud"),
//         solM = new Anim("Soldier M", soldPath + "m", "Soldier_M.7z", ["lance"], "IS"),
//         solMU = new Anim("Soldier M", soldPath + "m_alu", "Soldier_M_Alusq.7z", ["lance"], "Alusq")
//     ];
//     fillerTail("Soldiers", "solRow", soldiers, "#lanceFill");
// };

// function halbFiller() {
//     var halbPath = imgPath + "lances/halberdier/";

//     var halberdiers = [
//         halF2 = new Anim("Halberdier F v2", halbPath + "f_2", "Halb_F_v2.7z", ["lance"], "The Blind Archer"),
//         halM2 = new Anim("Halberdier M v2", halbPath + "m_2", "Halb_M_v2.7z", ["lance"], "The Blind Archer"),
//         halMB = new Anim("Halberdier M", halbPath + "m_bone", "Halb_M_Bone.7z", ["lance"], "Bonestorm"),
//         halMO = new Anim("Halberdier M", halbPath + "m_old", "Halb_M_Old.7z", ["lance"], "The Blind Archer"),
//         dragM = new Anim("Dragoon M", halbPath + "m_drag", "Dragoon.7z", ["lance"], "Mercenary Lord")
//     ];
//     fillerTail("Halberdiers", "halRow", halberdiers, "#lanceFill");
// };

// function bersFiller() {
//     var bersPath = imgPath + "axes/berserker/";

//     var berserkers = [
//         beFSK = new Anim("Berserker F", bersPath + "f_skit_e", "Bers_F_Skitty.7z", ["axe"], "eCut, Skitty"),
//         bersk = new Anim('Berserker M', bersPath + 'm', 'Bers_M.7z', ["axe"], "IS"),
//         beSwd = new Anim('Berserker M', bersPath + 'm_sw', 'Bers_Swd.7z', ["sword"], "Assassin Leila"),
//         beDar = new Anim("Berserker Dart", bersPath + "m_dart", "Bers_Dart.7z", ["axe"], "Greentea, DerTheVaporeon"),
//         beHKY = new Anim("Berserker Hawkeye", bersPath + "m_hk", "Bers_Hawkeye.7z", ["axe"], "IS"),
//         beHKZ = new Anim("Berserker M Hawkzerker", bersPath + "m_hz", "Bers_M_HZ.7z", ["axe"], "The Blind Archer"),
//         bePal = new Anim("Berserker Repalette", bersPath + "m_pal", "Bers_M_Pal.7z", ["axe"], "Blue Druid"),
//         beYet = new Anim('Berserker M Yeti', bersPath + 'm_yeti', 'Bers_Yeti.7z', ["axe"], "BwdYeti, Shadow of Chaos"),
//         beBrg = new Anim("Mounted Brigand M", bersPath + "m_brig_bow", "Mtd_Brig_M.7z", ["axe", "bow"], "Spud")
//     ];
//     fillerTail("Berserkers", "bersRow", berserkers, "#axeFill");
// };

// function brigFiller() {
//     var brigPath = imgPath + "axes/brigand/";

//     var brigands = [
//         brigF = new Anim("Brigand F", brigPath + "f", "Brig_F.7z", ["axe"], "eCut, Skitty"),
//         brgMA = new Anim("Brigand M Armored", brigPath + "m_arm", "Brig_M_Armored.7z", ["axe"], "The Blind Archer"),
//         brgME = new Anim("Brigand M Hairy", brigPath + "m_eld", "Brig_M_Eld.7z", ["axe"], "Eldritch Abomination"),
//         brgMM = new Anim("Brigand M", brigPath + "m_mag", "Brig_M_Magic.7z", ["axe", "fire", "light", "dark"], "IS, Blue Druid")
//     ];
//     fillerTail("Brigands", "brigRow", brigands, "#axeFill");
// };

// function fgtrFiller() {
//     var fgtrPath = imgPath + "axes/fighter/";

//     var fighters = [
//         ftFLH = new Anim("Fighter F Long Hair", fgtrPath + "f_lh_bm", "Fighter_F_LH.7z", ["axe"], "Black Mage, Temp, Eliwan"),
//         ftFSH = new Anim("Fighter F Short Hair", fgtrPath + "f_sh_bm", "Fighter_F_SH.7z", ["axe"], "Black Mage, Temp, Eliwan"),
//         ftMe9 = new Anim("Fighter M FE10", fgtrPath + "m_fe9", "Fighter_M_FE9.7z", ["axe"], "Mageknight404"),
//         ftM9P = new Anim("Fighter M FE10 Palette Fix", fgtrPath + "m_fe9p", "Fighter_M_FE9P.7z", ["axe"], "Mageknight404, Glenwing"),
//         ftMer = new Anim("Fighter M Merc", fgtrPath + "m_merc", "Fighter_M_Merc.7z", ["axe"], "Maiser6"),
//         ftSwd = new Anim("Fighter M", fgtrPath + "m_sw", "Fighter_M_Sw.7z", ["sword", "axe"], "IS, Vilk")
//     ];
//     fillerTail("Fighters", "fgtrRow", fighters, "#axeFill");
// };

// function journeyFiller() {
//     var jPath = imgPath + "axes/journeyman/";

//     var jmen = [
//         jman = new Anim("Journeyman M", jPath + "m", "Journeyman.7z", ["axe"], "IS")
//     ];
//     fillerTail("Journeymen", "journeyRow", jmen, "#axeFill");
// };

// function pirateFiller() {
//     var pPath = imgPath + "axes/pirate/";

//     var pirates = [
//         pim = new Anim("Pirate M", pPath + "m", "Pirate.7z", ["axe"], "IS"),
//         pimp = new Anim("Pirate M Repalette", pPath + "m_p", "Pirate_Pal.7z", ["axe"], "Skitty"),
//         pimpw = new Anim("Pirate M Repalette", pPath + "m_pwan", "Pirate_PWAN.7z", ["axe"], "Eliwan"),
//         pimSw = new Anim("Pirate M", pPath + "m_sw", "Pirate_Sw.7z", ["sword"], "Pimpstick")
//     ];
//     fillerTail("Pirates", "pirRow", pirates, "#axeFill");
// };

// function warFiller() {
//     var wPath = imgPath + "axes/warrior/";

//     var warriors = [
//         warF = new Anim("Warrior F", wPath + "f_t", "Warrior_F.7z", ["axe", "bow"], "TempMael"),
//         warM = new Anim("Warrior M", wPath + "m", "Warrior.7z", ["axe", "bow"], "IS")
//     ];
//     fillerTail("Warriors", "warRow", warriors, "#axeFill");
// };

// //Bows

// function archerFiller() {
//     var archPath = imgPath + "bows/archer/";

//     var archers = [
//         arcFe6 = new Anim("Archer F FE6", archPath + "f_e6", "Archer_F_FE6.7z", ["bow"], "IS"),
//         ArcFOG = new Anim("Archer F", archPath + "f", "Archer_F.7z", ["bow"], "IS"),
//         arcFNe = new Anim("Archer Neimi", archPath + "f_nei", "Archer_Neimi.7z", ["bow"], "Feaw"),
//         arcFRe = new Anim("Archer Rebecca", archPath + "f_reb", "Archer_Rebecca.7z", ["bow"], "IS"),
//         arcFSk = new Anim("Archer F Skirt", archPath + "f_skt", "Archer_F_Skirt.7z", ["bow"], "George Reds"),
//         ArcMOG = new Anim("Archer M", archPath + "m", "Archer_M.7z", ["bow"], "IS"),
//         arcMCa = new Anim("Archer M Cape", archPath + "m_cape", "Archer_M_Cape.7z", ["bow"], "Yangfly Master"),
//         arcMe5 = new Anim("Archer M FE5", archPath + "m_fe5", "Archer_M_FE5.7z", ["bow"], "Pushwall"),
//         arcMe6 = new Anim('Archer M FE6', archPath + 'm_fe6', 'Archer_M_FE6.7z', ["bow"], "IS")
//     ];
//     fillerTail("Archers", "archRow", archers, "#bowFill");
// };

// function ballFiller() {
//     var ballPath = imgPath + "bows/ballistae/";

//     var ballistae = [
//         BF_Lo = new Anim("Ballista Louise", ballPath + "f_l", "Ballista_Louise.7z", ["bow"], "St Jack"),
//         BF_LH = new Anim("Ballista F Long-Hair", ballPath + "f_lh", "Ballista_F_LH.7z", ["bow"], "IS"),
//         BF_Re = new Anim("Ballista Rebecca", ballPath + "f_r", "Ballista_Rebecca.7z", ["bow"], "St Jack"),
//         BM_Wi = new Anim("Ballista Wil", ballPath + "m_w", "Ballista_Wil.7z", ["bow"], "Greentea, qiuzf007"),
//         BM_WoA = new Anim("Ballista Wolt Armored", ballPath + "m_wo_arm", "Ballista_Wolt_Arm.7z", ["bow"], "St Jack"),
//         BM_Wo = new Anim("Ballista Wolt", ballPath + "m_wo", "Ballista_Wolt.7z", ["bow"], "IS")
//     ];
//     fillerTail("Ballistae", "ballRow", ballistae, "#bowFill");
// };

// function nomFiller() {
//     var nomPath = imgPath + "bows/nomad/";

//     var nomads = [
//         nomF = new Anim("Nomad F", nomPath + "f", "Nomad_F.7z", ["bow"], "IS"),
//         nomM = new Anim("Nomad M", nomPath + "m", "Nomad_M.7z", ["bow"], "IS"),
//         nomMg = new Anim("Nomad M Generic", nomPath + "m_gen", "Nomad_M_Gen.7z", ["bow"], "eCut")
//     ];
//     fillerTail("Nomads", "nomRow", nomads, "#bowFill");
// };

// function nomTFiller() {
//     var nomTPath = imgPath + "bows/nomad_trooper/";

//     var nom_troopers = [
//         ntFOG = new Anim("Nmd Trooper F", nomTPath + "f", "Nmd_Tpr_F.7z", ["sword", "bow"], "IS"),
//         ntFFx = new Anim("Nmd Trooper F Fix", nomTPath + "f_fix", "Nmd_Tpr_F_Fix.7z", ["sword", "bow"]),
//         ntMF6 = new Anim("Nmd Trooper M FE6", nomTPath + "m_e6", "Nmd_Tpr_M_FE6.7z", ["sword", "bow"], "IS"),
//         ntMOG = new Anim("Nmd Trooper M", nomTPath + "m", "Nmd_Tpr_M.7z", ["sword", "bow"], "IS"),
//         NtMFx = new Anim("Nmd Trooper M BowFix", nomTPath + "m_fix_b", "Nmd_Tpr_M_BowFix.7z", ["bow"])
//     ];
//     fillerTail("Nomad Troopers", "nomTRow", nom_troopers, "#bowFill");
// };

// function rangerFiller() {
//     var ranPath = imgPath + "bows/ranger/";

//     var rangers = [
//         ranFL = new Anim("Ranger F + Lance", ranPath + "f_l", "Ranger_F_Lnc.7z", ["sword", "lance", "bow"]),
//         ranFR = new Anim("Ranger Rebecca", ranPath + "f_reb", "Ranger_Rebecca.7z", ["sword", "bow"], "Teraspark"),
//         ranFT = new Anim("Ranger F Twintails", ranPath + "f_tt", "Ranger_F_TT.7z", ["sword", "bow"], "GoofyfanG56"),
//         ranML = new Anim("Ranger M + Lance", ranPath + "m_l", "Ranger_M_Lnc.7z", ["sword", "lance", "bow"], "Skitty, Feaw")
//     ];
//     fillerTail("Rangers", "rangRow", rangers, "#bowFill");
// };

// function sniperFiller() {
//     var snipPath = imgPath + "bows/sniper/";

//     var snipers = [
//         sniF6 = new Anim("Sniper F FE6", snipPath + "f_e6", "Sniper_F_FE6.7z", ["bow"], "IS"),
//         sniF = new Anim("Sniper F", snipPath + "f", "Sniper_F.7z", ["bow"], "IS"),
//         sniFQ = new Anim("Sniper F Quiver", snipPath + "f_quiv_reb", "Sniper_F_Quiv.7z", ["bow"], "Nuramon"),
//         sniFQR = new Anim("Sniper Rebecca Quiver", snipPath + "f_quiv_reb", "Sniper_Reb_Quiv.7z", ["bow"], "Nuramon, Temp"),
//         sniFR = new Anim("Sniper Rebecca", snipPath + "f_reb", "Sniper_Rebecca.7z", ["bow"], "Temp, Wan"),
//         huntM = new Anim("Hunter M", snipPath + "hunt", "Hunter.7z", ["bow"], "Deranger"),
//         sniM6 = new Anim("Sniper M FE6", snipPath + "m_e6", "Sniper_M_FE6.7z", ["bow"], "IS"),
//         sniM = new Anim("Sniper M", snipPath + "m", "Sniper_M.7z", ["bow"], "IS"),
//         sniMH = new Anim("Sniper M Hat", snipPath + "m_hat", "Sniper_M_Hat.7z", ["bow"], "Swain"),
//         sniMQG = new Anim("Sniper M Hat w/ Quiver Nuramon", snipPath + "m_quiv_gen", "Sniper_M_Quiv_Gen.7z", ["bow"], "Nuramon, Swain"),
//         sniMQ = new Anim("Sniper M Quiver", snipPath + "m_quiv", "Sniper_M_Quiv.7z", ["bow"], "Nuramon"),
//         sniMWi = new Anim("Sniper Wil", snipPath + "m_wil", "Sniper_M_Wil.7z", ["bow"], "Greentea, DerTheVaporeon")
//     ];
//     fillerTail("Snipers", "snipRow", snipers, "#bowFill");
// };

// function knightFiller() {
//     var knPath = imgPath + "knights/knight/";

//     var knights = [
//         kniU = new Anim("Knight", knPath + "u", "Knight.7z", ["sword", "lance", "axe", "bow"], "IS, The Blind Archer"),
//         kniUX = new Anim("Knight FE10", knPath + "u_10", "Knight_FEX,7z", ["sword", "lance", "axe", "bow"], "Iscaneus, Nuramon"),
//         kniDS = new Anim("Knight FEDS", knPath + "u_ds", "Knight_DS.7z", ["lance"], "Mageknight404"),
//         kniDSp = new Anim("Knight FEDS Repalette", knPath + "u_ds_p", "Knight_FEDS_Pal.7z", ["lance"])
//     ];
//     fillerTail("Knights", "knRow", knights, "#knightFill");
// };

// function genFiller() {
//     var genPath = imgPath + "knights/general/";

//     var generals = [
//         baru = new Anim("Baron", genPath + "u_bar", "Baron.7z", ["sword", "lance", "axe", "bow", "fire", "light", "dark", "staff"], "St Jack, The Blind Archer"),
//         genu = new Anim("General", genPath + "u_gen", "General.7z", ["sword", "lance", "axe", "bow", "fire", "light", "dark", "staff"], "IS, The Blind Archer, DerTheVaporeon, PrimeFusion"),
//         genup = new Anim("General Repalette", genPath + "u_gen_p", "General_Pal.7z", ["sword", "lance", "axe"], "Skitty"),
//         gens = new Anim("General w/ Shield", genPath + "u_gen_s", "General_Shield.7z", ["sword", "lance", "axe", "fire", "light", "dark"], "Nuramon, The Blind Archer")
//     ];
//     fillerTail("Generals", "genRow", generals, "#knightFill");
// };

// function kingFiller() {
//     var kingPath = imgPath + "knights/king/";

//     var kings = [
//         kgm = new Anim("King Zephiel", kingPath + "m", "King.7z", ["sword"], "IS"),
//         coz = new Anim("Marshal Zelgius", kingPath + "m_z", "Zelgius.7z", ["sword"], "Nuramon, Luerock"),
//         bkz = new Anim("Black Knight", kingPath + "u_bk", "Black_Knight.7z", ["sword"], "Luerock, CanasNiimeHugh"),
//         emp = new Anim("Emperor", kingPath + "u_emp", "Emperor.7z", ["sword", "lance", "axe", "bow", "fire", "light", "dark", "staff"], "St Jack, The Blind Archer")
//     ];
//     fillerTail("Kings", "kingRow", kings, "#knightFill");
// };