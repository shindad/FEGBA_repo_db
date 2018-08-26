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

function buildfSeeds(category, feClass, anName, URL, dlName, wepName, srcName) {

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
            URL: URL + ".7z",
            dlName: dlName,
            srcName: srcName,
        }).then(function (anim) {

            //console.log(JSON.parse(JSON.stringify(anim)));
            anim.addWeapon(weapon, {
                through: {
                    still: URL + ".png",
                    gif: URL + ".gif",
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

function altfWep(anName, wepName, urlstr) {
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
                    still: urlstr + ".png",
                    gif: urlstr + ".gif"
                }
            });
        });
    });
};

function magAlt(anName, still, gif) {
    var magic = ["fire", "light", "dark"];
    for (var i = 0; i < 3; i++) {
        altWep(anName, magic[i], still, gif);
    };
};

function magfAlt(anName, urlstr) {
    var magic = ["fire", "light", "dark"];
    for (var i = 0; i < 3; i++) {
        altfWep(anName, magic[i], urlstr);
    };
}

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

// Heroes
buildSeeds("sword", "Hero", "Hero F FE6", "img/hero/f_echi.7z", "Hero_F_Echidna.7z", "IS", "sword", "img/hero/f_echi.png", "img/hero/f_echi.gif");
buildSeeds("sword", "Hero", "Hero F Alt", "img/hero/f_jap_alt.7z", "Hero_F_Alt.7z", "St jack", "sword", "img/hero/f_jap_alt.png", "img/hero/f_jap_alt.gif");
buildSeeds("sword", "Hero", "Hero M Armor", "img/hero/m_arm.7z", "Hero_M_Armor.7z", "", "sword", "img/hero/m_arm.png", "img/hero/m_arm.gif");
buildSeeds("sword", "Hero", "Hero M Coat", "img/hero/m_coat.7z", "Hero_M_Coat.7z", "IS", "sword", "img/hero/m_coat.png", "img/hero/m_coat.gif");
buildSeeds("sword", "Hero", "Hero M", "img/hero/m_l.7z", "Hero_M_Lance.7z", "IS, Pushwall", "sword", "img/hero/m_l.png", "img/hero/m_l.gif");

// Mercenaries
buildSeeds("sword", "Mercenary", "Mercenary F Beta Eirika", "img/merc/f_be_eir.7z", "Merc_F_Eir.7z", "Eldritch Abomination", "sword", "img/merc/f_be_eir.png", "img/merc/f_be_eir.gif");
buildSeeds("sword", "Mercenary", "Mercenary F", "img/merc/f_blindei.7z", "Merc_F_TBADei.7z", "TheBlindArcher, Dei", "sword", "img/merc/f_blindei.png", "img/merc/f_blindei.gif");
buildSeeds("sword", "Mercenary", "Mercenary F Thin", "img/merc/f_russ.7z", "Merc_F_Clark.7z", "Russel Clark", "sword", "img/merc/f_russ.png", "img/merc/f_russ.gif");
buildSeeds("sword", "Mercenary", "Mercenary M Armored", "img/merc/m_arm_al.7z", "Merc_M_Arm.7z", "Alusq", "sword", "img/merc/m_arm_al.png", "img/merc/m_arm_al.gif");
buildSeeds("sword", "Mercenary", "Mercenary M Repalette", "img/merc/m_eld_pal.7z", "Merc_M_Eld.7z", "Eldritch Abomination", "sword", "img/merc/m_eld_pal.png", "img/merc/m_eld_pal.gif");
buildSeeds("sword", "Mercenary", "Mercenary M FE6", "img/merc/m_fe6.7z", "Merc_M_FE6.7z", "IS", "sword", "img/merc/m_fe6.png", "img/merc/m_fe6.gif");
buildSeeds("sword", "Mercenary", "Mercenary M Greatsword", "img/merc/m_gs.7z", "Merc_M_GS.7z", "SD9k", "sword", "img/merc/m_gs.png", "img/merc/m_gs.gif");
buildSeeds("sword", "Mercenary", "Mercenary M Repalette", "img/merc/m_pal.7z", "Merc_M_Pal.7z", "", "sword", "img/merc/m_pal.png", "img/merc/m_pal.gif");
buildSeeds("sword", "Mercenary", "Mercenary M", "img/merc/m_pk_a.7z", "Merc_M_Axe.7z", "IS, Princess Kilvas", "sword", "img/merc/m_pk_a.png", "img/merc/m_pk_a.gif");
buildSeeds("sword", "Mercenary", "Squire M", "img/merc/m_sq.7z", "Squire.7z", "Russel Clark, A Random Player, Kobazco", "sword", "img/merc/m_sq.png", "img/merc/m_sq.gif");

// Myrmidons
buildSeeds("sword", "Myrmidon", "Myrmidon F", "img/myrm/f.7z", "Myrmidon F", "IS", "sword", "img/myrm/f.png", "img/myrm/f.gif");
buildSeeds("sword", "Myrmidon", "Myrmidon F Lyn/Merc", "img/myrm/f_max.7z", "Myrm_F_Max.7z", "Max", "sword", "img/myrm/f_max.png", "img/myrm/f_max.gif");
buildSeeds("sword", "Myrmidon", "Myrmidon M", "img/myrm/m.7z", "img/myrm/f_max.7z", "IS", "sword", "img/myrm/m.png", "img/myrm/m.gif");
buildSeeds("sword", "Myrmidon", "Myrmidon Guy", "img/myrm/m_guy.7z", "Myrm_Guy.7z", "IS", "sword", "img/myrm/m_guy.png", "img/myrm/m_guy.gif");
buildSeeds("sword", "Myrmidon", "Myrmidon M Jacket", "img/myrm/m_jack.7z", "Myrm_Jacket.7z", "Myrm_Jacket.7z", "sword", "img/myrm/m_jack.png", "img/myrm/m_jack.gif");
buildSeeds("sword", "Myrmidon", "Myrmidon Joshua", "img/myrm/m_joshua.7z", "Myrm_Joshua.7z", "SD9K", "sword", "img/myrm/m_joshua.png", "img/myrm/m_joshua.gif");

// Rogue 
buildSeeds("sword", "Rogue", "Rogue F", "img/rogu/f.7z", "Rogue_F.7z", "eCut, Skitty", "sword", "img/rogu/f.png", "img/rogu/f.gif");
buildSeeds("sword", "Rogue", "Rogue F Ponytail", "img/rogu/f_p.7z", "Rogue_F_PT.7z", "TempMael", "sword", "img/rogu/f_p.png", "img/rogu/f_p.gif");
buildSeeds("sword", "Rogue", "Rogue M", "img/rogu/m_st.7z", "Rogue_M_Staff.7z", "IS, ukulelej", "sword", "img/rogu/m_st.png", "img/rogu/m_st.gif");
buildSeeds("sword", "Rogue", "Rogue M Repalette", "img/rogu/m_p.7z", "Rogue_M_Repal.7z", "Feaw", "sword", "img/rogu/m_p.png", "img/rogu/m_p.gif");

// Swordmaster
var s = "img/swdm/";
buildSeeds("sword", "Swordmaster", "Swordmaster F", s + "f.7z", "SwM_F.7z", "IS", "sword", s + "f.png", s + "f.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster F FE6", s + "f_fe6.7z", "SwM_F_FE6.7z", "IS", "sword", s + "f_fe6.png", s + "f_fe6.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster F Long Hair", s + "f_lh_cl.7z", "SwM_F_LH.7z", "Russel Clark", "sword", s + "f_lh_cl.png", s + "f_lh_cl.gif")
buildSeeds("sword", "Swordmaster", "Swordmaster F Short Hair", s + "f_sh_cl.7z", "SwM_F_SH.7z", "Russel Clark", "sword", s + "f_sh_cl.png", s + "f_sh_cl.gif")
buildSeeds("sword", "Swordmaster", "Swordmaster M", s + "m.7z", "SwM_M.7z", "IS", "sword", s + "m.png", s + "m.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster M FE6", s + "m_fe6.7z", "SwM_M_FE6.7z", "IS", "sword", s + "m_fe6.png", s + "m_fe6.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster M FE10", s + "m_fex.7z", "SwM_M_FEX.7z", "The Blind Archer", "sword", s + "m_fex.png", s + "m_fex.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster Guy", s + "m_guy.7z", "SwM_Guy.7z", "IS", "sword", s + "m_guy.png", s + "m_guy.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster Guy Alt", s + "m_guy_eld.7z", "SwM_Guy_Eldritch.7z", "Eldritch Abomination", "sword", s + "m_guy_eld.png", s + "m_guy_eld.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster Joshua", s + "m_js_halt.7z", "SwM_Joshua_SD.7z", "SD9K", "sword", s + "m_js_halt.png", s + "m_js_halt.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster Joshua Alt", s + "m_js_hat.7z", "SwM_Joshua.7z", "SD9K", "sword", s + "m_js_hat.png", s + "m_js_hat.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster Lloyd", s + "m_ll.7z", "SwM_Lloyd.7z", "IS, Glenn", "sword", s + "m_ll.png", s + "m_ll.gif");
buildSeeds("sword", "Swordmaster", "Swordmaster Lloyd Alt", s + "m_ll_gt.7z", "SwM_Lloyd_GrT.7z", "Greentea, DerTheVaporeon", "sword", s + "m_ll_gt.png", s + "m_ll_gt.gif");
buildSeeds("sword", "Swordmaster", "TrueBlade M", s + "m_tb.7z", "Trueblade.7z", "Cybaster", "sword", s + "m_tb.png", s + "m_tb.gif");

// Thieves
let t = "img/thief/";
buildSeeds("sword", "Thief", "Thief Cath", t + "f_fe6.7z", "Th_F_E6.7z", "IS", "sword", t + "f_fe6.png", t + "f_fe6.gif");
buildSeeds("sword", "Thief", "Thief Cath Repalette", t + "f_p.7z", "Th_F_Pony.7z", "Eldritch Abomination", "sword", t + "f_p.png", t + "f_p.gif");
buildSeeds("sword", "Thief", "Thief Leila", t + "f_lei.7z", "Th_F_Leila.7z", "IS", "sword", t + "f_lei.png", t + "f_lei.gif");
buildSeeds("sword", "Thief", "Thief Matthew", t + "m_at.7z", "Th_M_Matthew.7z", "IS", "sword", t + "m_at.png", t + "m_at.gif");
buildSeeds("sword", "Thief", "Thief Chad", t + "m_chad.7z", "Th_M_Chad.7z", "IS", "sword", t + "m_chad.png", t + "m_chad.gif");
buildSeeds("sword", "Thief", "Thief Legault", t + "m_leg.7z", "Th_Legault.7z", "IS", "sword", t + "m_leg.png", t + "m_leg.gif");
buildSeeds("sword", "Thief", "Thief FEDS", t + "m_feds.7z", "Th_M_FEDS.7z", "DerTheVaporeon", "sword", t + "m_feds.png", t + "m_feds.gif");

// Recruit
buildSeeds("lance", "Recruit", "Recruit Amelia", "img/rec/f.7z", "Recruit_F.7z", "IS", "lance", "img/rec/f.png", "img/rec/f.gif");

// Soldiers
let so = "img/soldier/";
buildSeeds("lance", "Soldier", "Soldier F", so + "f.7z", "Soldier_F.7z", "Dr0zz", "lance", so + "f.png", so + "f.gif");
buildSeeds("lance", "Soldier", "Soldier F", so + "f_alu.7z", "Soldier_F_Alusq.7z", "Alusq", "lance", so + "f_alu.png", so + "f_alu.gif");
buildSeeds("lance", "Soldier", "Soldier Amelia", so + "f_am.7z", "Soldier_Amelia.7z", "Spud", "lance", so + "f_am.png", so + "f_am.gif");
buildSeeds("lance", "Soldier", "Soldier M", so + "m.7z", "Soldier_M.7z", "IS", "lance", so + "m.png", so + "m.gif");
buildSeeds("lance", "Soldier", "Soldier M", so + "m_alu.7z", "Soldier_M_Alusq.7z", "Alusq", "lance", so + "m_alu.png", so + "m_alu.gif");

// Halberdiers
let h = "img/halb/";
buildSeeds("lance", "Halberdier", "Halberdier F v2", h + "f_2.7z", "Halb_F_v2.7z", "The Blind Archer", "lance", h + "f_2.png", h + "f_2.gif");
buildSeeds("lance", "Halberdier", "Halberdier M v2", h + "m_2.7z", "Halb_M_v2.7z", "The Blind Archer", "lance", h + "m_2.png", h + "m_2.gif");
buildSeeds("lance", "Halberdier", "Halberdier M", h + "m_bone.7z", "Halb_M_Bone.7z", "Bonestorm", "lance", h + "m_bone.png", h + "m_bone.gif");
buildSeeds("lance", "Halberdier", "Halberdier M", h + "m_old.7z", "Halb_M_Old.7z", "The Blind Archer", "lance", h + "m_old.png", h + "m_old.gif");
buildSeeds("lance", "Halberdier", "Dragoon M", h + "m_drag.7z", "Dragoon.7z", "Mercenary Lord", "lance", h + "m_drag.png", h + "m_drag.gif");

// Berserkers
let b = "img/bers/";
buildSeeds("axe", "Berserker", "Berserker M", b + 'm.7z', 'Bers_M.7z', "IS", "axe", b + "m.png", b + "m.gif");
buildSeeds("axe", "Berserker", "Berserker F", b + "f_skit_e.7z", "Bers_F_Skitty.7z", "eCut, Skitty", "axe", b + "f_skit_e.png", b + "f_skit_e.gif");
buildSeeds("axe", "Berserker", "Swordzerker M", b + 'm_sw.7z', 'Bers_Swd.7z', "Assassin Leila", "sword", b + "m_sw.png", b + "m_sw.gif");
buildSeeds("axe", "Berserker", "Berserker Dart", b + "m_dart.7z", "Bers_Dart.7z", "Greentea, DerTheVaporeon", "axe", b + "m_dart.png", b + "m_dart.gif");
buildSeeds("axe", "Berserker", "Berserker Hawkeye", b + "m_hk.7z", "Bers_Hawkeye.7z", "IS", "axe", b + "m_hk.png", b + "m_hk.gif");
buildSeeds("axe", "Berserker", "Berserker M Hawkzerker", b + "m_hz.7z", "Bers_M_HZ.7z", "The Blind Archer", "axe", b + "m_hz.png", b + "m_hz.gif");
buildSeeds("axe", "Berserker", "Berserker Repalette", b + "m_pal.7z", "Bers_M_Pal.7z", "Blue Druid", "axe", b + "m_pal.png", b + "m_pal.gif");
buildSeeds("axe", "Berserker", "Berserker M Yeti", b + 'm_yeti.7z', 'Bers_Yeti.7z', "BwdYeti, Shadow of Chaos", "axe", b + "m_yeti.png", b + "m_yeti.gif");
buildSeeds("axe", "Berserker", "Mounted Brigand M", b + "m_brig_bow.7z", "Mtd_Brig_M.7z", "Spud", "axe", b + "m_brig_b.png", b + "m_brig_b.gif");

// Brigands
let br = "img/brig/";
buildSeeds("axe", "Brigand", "Brigand F", br + "f.7z", "Brig_F.7z", "eCut, Skitty", "axe", br + "f.png", br + "f.gif");
buildSeeds("axe", "Brigand", "Brigand M Armored", br + "m_arm.7z", "Brig_M_Armored.7z", "The Blind Archer", "axe", br + "m_arm.png", br + "m_arm.gif");
buildSeeds("axe", "Brigand", "Brigand M Hairy", br + "m_eld.7z", "Brig_M_Eld.7z", "Eldritch Abomination", "axe", br + "m_eld.png", br + "m_eld.gif");
buildSeeds("axe", "Brigand", "Brigand M", br + "m_mag.7z", "Brig_M_Magic.7z", "IS, Blue Druid", "axe", br + "m.png", br + "m.gif");

let f = "img/fighter/";
buildSeeds("axe", "Fighter", "Fighter F Long Hair", f + "f_lh_bm.7z", "Fighter_F_LH.7z", "Black Mage, Temp, Eliwan", "axe", f + "f_lh_bm.png", f + "f_lh_bm.gif");
buildSeeds("axe", "Fighter", "Fighter F Short Hair", f + "f_sh_bm.7z", "Fighter_F_SH.7z", "Black Mage, Temp, Eliwan", "axe", f + "f_sh_bm.png", f + "f_sh_bm.gif");
buildSeeds("axe", "Fighter", "Fighter M FE10", f + "m_fe9.7z", "Fighter_M_FE9.7z", "Mageknight404", "axe", f + "m_fe9.png", f + "m_fe9.gif");
buildSeeds("axe", "Fighter", "Fighter M FE10 Palette Fix", f + "m_fe9p.7z", "Fighter_M_FE9P.7z", "Mageknight404, Glenwing", "axe", f + "m_fe9p.png", f + "m_fe9p.gif");
buildSeeds("axe", "Fighter", "Fighter M Merc", f + "m_merc.7z", "Fighter_M_Merc.7z", "Maiser6", "axe", f + "m_merc.png", f + "m_merc.gif");
buildSeeds("axe", "Fighter", "Fighter M", f + "m_sw.7z", "Fighter_M_Sw.7z", "IS, Vilk", "axe", f + "m_sw.png", f + "m_sw.gif");

// Journeyman
buildSeeds("axe", "Journeyman", "Journeyman M", "img/jman/m.7z", "Journeyman.7z", "IS", "axe", "img/jman/m.png", "img/jman/m.gif");

//Pirates
let p = "img/pirate/";
buildfSeeds("axe", "Pirate", "Pirate M", p + "m", "Pirate.7z", "axe", "IS");
buildfSeeds("axe", "Pirate", "Pirate M S Repalette", p + "m_p", "Pirate_Pal.7z", "axe", "Skitty");
buildfSeeds("axe", "Pirate", "Pirate M E Repalette", p + "m_pwan", "Pirate_PWAN.7z", "axe", "Eliwan");
buildfSeeds("axe", "Pirate", "Pirate M Sword", p + "m_sw", "Pirate_Sw.7z", "sword", "Pimpstick");

// Warrior
buildfSeeds("axe", "Warrior", "Warrior F", "img/war/f_t", "Warrior_F.7z", "axe", "bow", "TempMael");
buildfSeeds("axe", "Warrior", "Warrior M", "img/war/m", "Warrior.7z", "axe", "bow", "IS");

// Archer
let a = "img/archer/";
buildfSeeds("bow", "Archer", "Archer F FE6", a + "f_e6", "Archer_F_FE6.7z", "bow", "IS");
buildfSeeds("bow", "Archer", "Archer F", a + "f", "Archer_F.7z", "bow", "IS");
buildfSeeds("bow", "Archer", "Archer Neimi", a + "f_nei", "Archer_Neimi.7z", "bow", "Feaw");
buildfSeeds("bow", "Archer", "Archer Rebecca", a + "f_reb", "Archer_Rebecca.7z", "bow", "IS");
buildfSeeds("bow", "Archer", "Archer F Skirt", a + "f_skt", "Archer_F_Skirt.7z", "bow", "George Reds");
buildfSeeds("bow", "Archer", "Archer M", a + "m", "Archer_M.7z", "bow", "IS");
buildfSeeds("bow", "Archer", "Archer M Cape", a + "m_cape", "Archer_M_Cape.7z", "bow", "Yangfly Master");
buildfSeeds("bow", "Archer", "Archer M FE5", a + "m_fe5", "Archer_M_FE5.7z", "bow", "Pushwall");
buildfSeeds("bow", "Archer", 'Archer M FE6', a + 'm_fe6', 'Archer_M_FE6.7z', "bow", "IS")

// Ballistae
let ballPath = "img/ball/";
buildfSeeds("bow", "Ballistae", "Ballista Louise", ballPath + "f_l", "Ballista_Louise.7z", "bow", "St Jack");
buildfSeeds("bow", "Ballistae", "Ballista F Long-Hair", ballPath + "f_lh", "Ballista_F_LH.7z", "bow", "IS");
buildfSeeds("bow", "Ballistae", "Ballista Rebecca", ballPath + "f_r", "Ballista_Rebecca.7z", "bow", "St Jack");
buildfSeeds("bow", "Ballistae", "Ballista Wil", ballPath + "m_w", "Ballista_Wil.7z", "bow", "Greentea, qiuzf007");
buildfSeeds("bow", "Ballistae", "Ballista Wolt Armored", ballPath + "m_wo_arm", "Ballista_Wolt_Arm.7z", "bow", "St Jack");
buildfSeeds("bow", "Ballistae", "Ballista Wolt", ballPath + "m_wo", "Ballista_Wolt.7z", "bow", "IS")

// Nomads
let nomPath = "img/nomad/";
buildfSeeds("bow", "Nomad", "Nomad F", nomPath + "f", "Nomad_F.7z", "bow", "IS");
buildfSeeds("bow", "Nomad", "Nomad M", nomPath + "m", "Nomad_M.7z", "bow", "IS");
buildfSeeds("bow", "Nomad", "Nomad M Generic", nomPath + "m_gen", "Nomad_M_Gen.7z", "bow", "eCut")

// Nomad Troopers
let nomTPath = "img/nomt/";
buildfSeeds("bow", "Nomad Trooper", "Nmd Trooper F", nomTPath + "f", "Nmd_Tpr_F.7z", "bow", "IS");
buildfSeeds("bow", "Nomad Trooper", "Nmd Trooper F Fix", nomTPath + "f_fix", "Nmd_Tpr_F_Fix.7z", "bow");
buildfSeeds("bow", "Nomad Trooper", "Nmd Trooper M FE6", nomTPath + "m_e6", "Nmd_Tpr_M_FE6.7z", "bow", "IS");
buildfSeeds("bow", "Nomad Trooper", "Nmd Trooper M", nomTPath + "m", "Nmd_Tpr_M.7z", "bow", "IS");
buildfSeeds("bow", "Nomad Trooper", "Nmd Trooper M BowFix", nomTPath + "m_fix_b", "Nmd_Tpr_M_BowFix.7z", "bow")

// Ranger
let ranPath = "img/ranger/";
buildfSeeds("bow", "Ranger", "Ranger F", ranPath + "f_l", "Ranger_F_Lnc.7z", "bow");
buildfSeeds("bow", "Ranger", "Ranger Rebecca", ranPath + "f_reb", "Ranger_Rebecca.7z", "bow", "Teraspark");
buildfSeeds("bow", "Ranger", "Ranger F Twintails", ranPath + "f_tt", "Ranger_F_TT.7z", "bow", "GoofyfanG56");
buildfSeeds("bow", "Ranger", "Ranger M", ranPath + "m_l", "Ranger_M_Lnc.7z", "bow", "Skitty, Feaw");

// Assassins + weps
altWep("Assassin M Hoodless", "bow", "img/sin/m_hl_bow.png", "img/sin/m_hl_bow.gif");
altWep("Assassin Jaffar Shirt", "bow", "img/sin/m_jaf_sh_bow.png", "img/sin/m_jaf_sh_bow.gif");
altWep("Assassin Jaffar CSAFix", "bow", "img/sin/m_jaf_csa_bow.png", "img/sin/m_jaf_csa_bow.gif");
altWep("Assassin Jojaffar", "bow", "img/sin/m_jaf_jojo_bow.png", "img/sin/m_jaf_jojo_bow.gif");
altWep("Assassin Jaffar Rip", "bow", "img/sin/m_jaf_og_bow.png", "img/sin/m_jaf_og_bow.gif");

// Heroes + weps
altWep("Hero F FE6", "axe", "img/hero/f_echi_axe.png", "img/hero/f_echi_axe.gif");
altWep("Hero F FE6", "handaxe", "img/hero/f_echi_ha.png", "img/hero/f_echi_ha.gif");
altWep("Hero F Alt", "axe", "img/hero/f_jap_alt_axe.png", "img/hero/f_jap_alt_axe.gif");
altWep("Hero F Alt", "handaxe", "img/hero/f_jap_alt_ha.png", "img/hero/f_jap_alt_ha.gif");
altWep("Hero M Armor", "axe", "img/hero/m_arm_axe.png", "img/hero/m_arm_axe.gif");
altWep("Hero M Armor", "handaxe", "img/hero/m_arm_ha.png", "img/hero/m_arm_ha.gif");
altWep("Hero M Coat", "axe", "img/hero/m_coat_axe.png", "img/hero/m_coat_axe.gif");
altWep("Hero M Coat", "handaxe", "img/hero/m_coat_ha.png", "img/hero/m_coat_ha.gif");
altWep("Hero M", "lance", "img/hero/m_l_lance.png", "img/hero/m_l_lance.gif");
altWep("Hero M", "axe", "img/hero/m_l_axe.png", "img/hero/m_l_axe.gif");
altWep("Hero M", "handaxe", "img/hero/m_l_ha.png", "img/hero/m_l_ha.gif");

// Mercenaries + weps
altWep("Mercenary M", "axe", "img/merc/m_pk_a_axe.png", "img/merc/m_pk_a_axe.gif");

// Rogue + weps
altWep("Rogue M", "staff", "img/rogu/m_staff.png", "img/rogu/m_staff.gif");

// Berserker + weps
altWep("Berserker M", "handaxe", b + 'm_ha.png', b + 'm_ha.gif');
altWep("Berserker F", "handaxe", b + "f_skit_e_ha.png", b + "f_skit_e_ha.gif");
altWep("Berserker Dart", "handaxe", b + "m_dart_ha.png", b + "m_dart_ha.gif");
altWep("Berserker Hawkeye", "handaxe", b + "m_hk_ha.png", b + "m_hk_ha.gif");
altWep("Berserker M Hawkzerker", "handaxe", b + "m_hz_ha.png", b + "m_hz_ha.gif");
altWep("Berserker Repalette", "handaxe", b + "m_pal_ha.png", b + "m_pal_ha.gif");
altWep("Berserker M Yeti", "handaxe", b + 'm_yeti_ha.png', b + 'm_yeti_ha.gif');
altWep("Mounted Brigand M", "handaxe", b + "m_brig_b_ha.png", b + "m_brig_b_ha.gif");
altWep("Mounted Brigand M", "bow", b + "m_brig_bow.png", b + "m_brig_bow.gif");

// Brigand + weps
altWep("Brigand F", "handaxe", br + "f_ha.png", br + "f_ha.gif");
altWep("Brigand M Armored", "handaxe", br + "m_arm_ha.png", br + "m_arm_ha.gif");
altWep("Brigand M Hairy", "handaxe", br + "m_eld_ha.png", br + "m_eld_ha.gif");
altWep("Brigand M", "handaxe", br + "m_ha.png", br + "m_ha.gif");
magAlt("Brigand M", br + "m_mag.png", br + "m_mag.gif");

// Fighter + weps
altWep("Fighter F Long Hair", "handaxe", f + "f_lh_bm_ha.png", f + "f_lh_bm_ha.gif");
altWep("Fighter F Short Hair", "handaxe", f + "f_sh_bm_ha.png", f + "f_sh_bm_ha.gif");
altWep("Fighter M FE10", "handaxe", f + "m_fe9_ha.png", f + "m_fe9_ha.gif");
altWep("Fighter M FE10 Palette Fix", "handaxe", f + "m_fe9p_ha.png", f + "m_fe9p_ha.gif");
altWep("Fighter M Merc", "handaxe", f + "m_merc_ha.png", f + "m_merc_ha.gif");
altWep("Fighter M", "handaxe", f + "m_sw_ha.png", f + "m_sw_ha.gif");
altWep("Fighter M", "sword", f + "m_sword.png", f + "m_sword.gif");
// altWep("Fighter M", "sword", f + "m_sw_2.png", f + "m_sw_2.gif");

//Journeyman + weps
altWep("Journeyman M", "handaxe", "img/jman/m_ha.png", "img/jman/m_ha.gif");

// Pirate + weps
altfWep("Pirate M", "handaxe", p + "m_ha");
altfWep("Pirate M S Repalette", "handaxe", p + "m_p_ha");
altfWep("Pirate M E Repalette", "handaxe", "m_pwan_ha");

// Warrior + weps
altfWep("Warrior F", "handaxe", "img/war/f_t_ha");
altfWep("Warrior F", "bow", "img/war/f_t_bow");
altfWep("Warrior M", "handaxe", "img/war/m_ha");
altfWep("Warrior M", "bow", "img/war/m_bow");

// Nomad Trooper + weps
altfWep("Nmd Trooper F", "sword", nomTPath + "f_sw");
altfWep("Nmd Trooper F Fix", "sword", nomTPath + "f_fix_sw");
altfWep("Nmd Trooper M FE6", "sword", nomTPath + "m_e6_sw");
altfWep("Nmd Trooper M", "sword", nomTPath + "m_sw");

// Ranger
altfWep("Ranger F", "sword", ranPath + "f_l_sw")
altfWep("Ranger F", "lance", ranPath + "f_lance")
altfWep("Ranger Rebecca", "sword", ranPath + "f_reb_sw")
altfWep("Ranger F Twintails", "sword", ranPath + "f_tt_sw")
altfWep("Ranger M", "sword", ranPath + "m_l_sw")
altfWep("Ranger M", "lance", ranPath + "m_lance")

// Sniper
snipPath = "img/snip/"
buildfSeeds("bow", "Sniper", "Sniper F FE6", snipPath + "f_e6", "Sniper_F_FE6.7z", "bow", "IS");
buildfSeeds("bow", "Sniper", "Sniper F", snipPath + "f", "Sniper_F.7z", "bow", "IS");
buildfSeeds("bow", "Sniper", "Sniper F Quiver", snipPath + "f_quiv_reb", "Sniper_F_Quiv.7z", "bow", "Nuramon");
buildfSeeds("bow", "Sniper", "Sniper Rebecca Quiver", snipPath + "f_quiv_reb", "Sniper_Reb_Quiv.7z", "bow", "Nuramon, Temp");
buildfSeeds("bow", "Sniper", "Sniper Rebecca", snipPath + "f_reb", "Sniper_Rebecca.7z", "bow", "Temp, Wan");
buildfSeeds("Hunter M", snipPath + "hunt", "Hunter.7z", "bow", "Deranger");
buildfSeeds("bow", "Sniper", "Sniper M FE6", snipPath + "m_e6", "Sniper_M_FE6.7z", "bow", "IS");
buildfSeeds("bow", "Sniper", "Sniper M", snipPath + "m", "Sniper_M.7z", "bow", "IS");
buildfSeeds("bow", "Sniper", "Sniper M Hat", snipPath + "m_hat", "Sniper_M_Hat.7z", "bow", "Swain");
buildfSeeds("bow", "Sniper", "Sniper M Hat w/ Quiver Nuramon", snipPath + "m_quiv_gen", "Sniper_M_Quiv_Gen.7z", "bow", "Nuramon, Swain");
buildfSeeds("bow", "Sniper", "Sniper M Quiver", snipPath + "m_quiv", "Sniper_M_Quiv.7z", "bow", "Nuramon");
buildfSeeds("bow", "Sniper", "Sniper Wil", snipPath + "m_wil", "Sniper_M_Wil.7z", "bow", "Greentea, DerTheVaporeon")

//         kniU = new Anim("Knight", knPath + "u", "Knight.7z", "sword", "lance", "axe", "bow", "IS, The Blind Archer");
//         kniUX = new Anim("Knight FE10", knPath + "u_10", "Knight_FEX,7z", "sword", "lance", "axe", "bow", "Iscaneus, Nuramon");
//         kniDS = new Anim("Knight FEDS", knPath + "u_ds", "Knight_DS.7z", "lance", "Mageknight404");
//         kniDSp = new Anim("Knight FEDS Repalette", knPath + "u_ds_p", "Knight_FEDS_Pal.7z", "lance")

//         baru = new Anim("Baron", genPath + "u_bar", "Baron.7z", "sword", "lance", "axe", "bow", "fire", "light", "dark", "staff", "St Jack, The Blind Archer");
//         genu = new Anim("General", genPath + "u_gen", "General.7z", "sword", "lance", "axe", "bow", "fire", "light", "dark", "staff", "IS, The Blind Archer, DerTheVaporeon, PrimeFusion");
//         genup = new Anim("General Repalette", genPath + "u_gen_p", "General_Pal.7z", "sword", "lance", "axe", "Skitty");
//         gens = new Anim("General w/ Shield", genPath + "u_gen_s", "General_Shield.7z", "sword", "lance", "axe", "fire", "light", "dark", "Nuramon, The Blind Archer")

//         kgm = new Anim("King Zephiel", kingPath + "m", "King.7z", "sword", "IS");
//         coz = new Anim("Marshal Zelgius", kingPath + "m_z", "Zelgius.7z", "sword", "Nuramon, Luerock");
//         bkz = new Anim("Black Knight", kingPath + "u_bk", "Black_Knight.7z", "sword", "Luerock, CanasNiimeHugh");
//         emp = new Anim("Emperor", kingPath + "u_emp", "Emperor.7z", "sword", "lance", "axe", "bow", "fire", "light", "dark", "staff", "St Jack, The Blind Archer")