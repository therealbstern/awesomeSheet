var character = (function() {

  return {
    clone: {
      attack_count: 1,
      consumable_count: 3
    },
    input: {
      race_class: "Elf Wizard",
      name: "Nif Amakir",
      level: "6",
      size: "Medium",
      alignment: "Lawful Neutral",
      xp: "23,264",
      height: "6'0",
      weight: "136 lbs",
      age: "120 years",
      gender: "Male",
      speed: "30 feet, 6 squares",
      initiative: "3",
      gold: "1,090",
      hero_points: "2",
      stat_str: "8",
      stat_dex: "17",
      stat_con: "14",
      stat_int: "21",
      stat_wis: "12",
      stat_cha: "10",
      stat_str_temp: "",
      stat_dex_temp: "",
      stat_con_temp: "",
      stat_int_temp: "23",
      stat_wis_temp: "",
      stat_cha_temp: "",
      body_slot_headband: "Headband of Vast Intelligence +2",
      body_slot_neck: "Amulet of Natural Armor +1",
      body_slot_ring_left_hand: "Ring of Sustenance",
      body_slot_shoulders: "Cloak of Resistance +2",
      hp: "42",
      current_hp: "42",
      ac_natural: "1",
      fortitude_base: "2",
      fortitude_misc: "5",
      reflex_base: "2",
      reflex_misc: "2",
      will_base: "5",
      will_misc: "2",
      base_attack: "3",
      concentration: "11",
      skill_appraise_ranks: "4",
      skill_appraise_misc: "3",
      skill_knowledge_arcana_ranks: "3",
      skill_knowledge_arcana_misc: "3",
      skill_knowledge_dungeoneering_ranks: "2",
      skill_knowledge_dungeoneering_misc: "3",
      skill_knowledge_engineering_ranks: "1",
      skill_knowledge_engineering_misc: "3",
      skill_knowledge_geography_ranks: "1",
      skill_knowledge_geography_misc: "3",
      skill_knowledge_history_ranks: "1",
      skill_knowledge_history_misc: "3",
      skill_knowledge_local_ranks: "1",
      skill_knowledge_local_misc: "3",
      skill_knowledge_nature_ranks: "1",
      skill_knowledge_nature_misc: "3",
      skill_knowledge_nobility_ranks: "1",
      skill_knowledge_nobility_misc: "3",
      skill_knowledge_planes_ranks: "3",
      skill_knowledge_planes_misc: "3",
      skill_knowledge_religion_ranks: "3",
      skill_knowledge_religion_misc: "3",
      skill_linguistics_ranks: "3",
      skill_linguistics_misc: "3",
      skill_perception_ranks: "6",
      skill_perception_misc: "4",
      skill_sense_motive_ranks: "6",
      skill_sense_motive_misc: "2",
      skill_spellcraft_ranks: "6",
      skill_spellcraft_misc: "3",
      skill_use_magic_device_ranks: "6",
      weapon_1: "Dagger MW",
      attack_1: "3",
      damage_1: "1d6+1",
      critical_1: "19–20/×2",
      ammo_1: "_",
      range_1: "_",
      consumable_1: "Wand of Infernal Healing",
      consumable_total_1: "50",
      consumable_used_1: "48",
      consumable_2: "Wand of Lightning Bolt",
      consumable_total_2: "50",
      consumable_used_2: "38",
      consumable_3: "Shift",
      consumable_total_3: "9",
      consumable_used_3: "",
      spells_daily_level_0: "4",
      spell_dc_level_0: "16",
      spells_daily_level_1: "5",
      spell_dc_level_1: "17",
      spells_daily_level_2: "4",
      spell_dc_level_2: "18",
      spells_daily_level_3: "3",
      spell_dc_level_3: "19",
      spells_daily_level_4: "",
      spell_dc_level_4: "",
      spells_daily_level_5: "",
      spell_dc_level_5: "",
      spells_daily_level_6: "",
      spell_dc_level_6: "",
      spells_daily_level_7: "",
      spell_dc_level_7: "",
      spells_daily_level_8: "",
      spell_dc_level_8: "",
      spells_daily_level_9: "",
      spell_dc_level_9: ""
    },
    textarea: {
      feats: "Alertness, Augment Summoning, Craft Wondrous Item, Greater Spell Focus (Conjuration), Scribe Scroll, Spell Focus (Conjuration)",
      traits: "<strong>Resilient</strong> (+1 trait bonus on Fortitude saves)\n ",
      languages: "Celestial, Common, Draconic, Dwarven, Elven, Giant, Gnome, Goblin, Orc, Sylvan, Undercommon",
      special_abilities: "<strong>Arcane bond (Su)</strong> Rat (Bower, +2 Fortitude save),\n <strong>Bonus feats</strong>,\n <strong>Cantrips</strong>,\n <strong>Arcane schools</strong> (Conjuration),\n <strong>Teleportation sub school</strong>,\n <strong>Opposition arcane school</strong> (Enchantment, Necromancy),\n <strong>Elven Immunities (Ex)</strong> (+2 against enchantment spells and effects),\n <strong>Elven Magic (Ex)</strong> (+2 caster level checks made to overcome SR. +2 Spellcraft check to identify properties of magic items),\n <strong>Keen Senses (Ex)</strong> (+2 Perception checks),\n <strong>Low_Light Vision (Ex)</strong> (see x2 as far as humans in low illumination),\n <strong>Headband of Intellect Skill</strong> (Use Magic Device),\n <strong>Linguistics Skill</strong> (Dwarven, Giant, Undercommon),\n <strong>Shift (Su)</strong> (Teleport 15 feet 9 times per day),\n <strong>Summoner's Charm (Su)</strong> (+2 rounds duration for Conjuration [summoning] spells),\n <strong>Weapon Familiarity (Ex)</strong> (Proficient with longbows [including composite longbows], longswords, rapiers, and shortbows [including composite shortbows], treat weapon with \"elven\" in name as a martial weapon)\n ",
      gear: "Spell component pouch, Spellbook, Backpack, Flask of Oil x3, Pouch (belt), Sack, Candle, Flint and Steel, Tindertwig, Rations (5 days), Waterskin, Bedroll, Blanket, Bloodblock, Healer's Kik, Rope (silk), Mirror, Compass, Ink, Inkpen, Paper sheets, Case for maps/scrolls, Scroll Case, Combat trained horse",
      magic_gear: "Pearl of Power (1st Level), Potion of CLW x1, Potion of Aid, Vile of Antitoxin, Vile of Holy Water, Scroll of Acid Pit x1, Scroll of Summon Monster III x5, Scroll of Invisibility x2, Scroll of Create Pit x1, Scroll of Web x4, Scroll of Stinking Cloud x2, Scroll of Grease x2, Scroll of Mirror Image x3, Scroll of Spiked Pit x3 Scroll of Fly x2",
      defense_notes: "+2 against enchantment spells and effects"
    },
    spells_known: [
      // level 0
      { name: "Bleed", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Erase", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Daze", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Disrupt Undead", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Touch of Fatigue", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Prestidigitation", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Light", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Ghost Sound", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Spark", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Acid Splash", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Mage Hand", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Flare", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Detect Magic", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Detect Poison", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Dancing Lights", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Mending", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Arcane Mark", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Message", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Ray of Frost", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Read Magic", level: 0, prepared: 1, active: false, cast: 0 },
      { name: "Open Close", level: 0, prepared: 0, active: false, cast: 0 },
      { name: "Resistance", level: 0, prepared: 0, active: false, cast: 0 },
      // level 1
      { name: "Comprehend Languages", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Enlarge Person", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Feather Fall", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Grease", level: 1, prepared: 2, active: false, cast: 0 },
      { name: "Mage Armor", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Mount", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Obscuring Mist", level: 1, prepared: 1, active: false, cast: 0 },
      { name: "Protection from Chaos", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Protection from Evil", level: 1, prepared: 2, active: false, cast: 0 },
      { name: "Shield", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Summon Monster I", level: 1, prepared: 0, active: false, cast: 0 },
      { name: "Unseen Servant", level: 1, prepared: 0, active: false, cast: 0 },
      // level 2
      { name: "Blur", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Create Pit", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Flaming Sphere", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Glitterdust", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Invisibility", level: 2, prepared: 2, active: false, cast: 0 },
      { name: "Levitate", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Mirror Image", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Resist Energy", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Stone Call", level: 2, prepared: 0, active: false, cast: 0 },
      { name: "Summon Monster II", level: 2, prepared: 1, active: false, cast: 0 },
      { name: "Web", level: 2, prepared: 1, active: false, cast: 0 },
      // level 3
      { name: "Stinking Cloud", level: 3, prepared: 0, active: false, cast: 0 },
      { name: "Summon Monster III", level: 3, prepared: 1, active: false, cast: 0 },
      { name: "Spiked Pit", level: 3, prepared: 1, active: false, cast: 0 },
      { name: "Aqueous Orb", level: 3, prepared: 0, active: false, cast: 0 },
      { name: "Fly", level: 3, prepared: 1, active: false, cast: 0 },
      { name: "Sleet Storm", level: 3, prepared: 0, active: false, cast: 0 }
      // level 4
      // level 5
      // level 6
      // level 7
      // level 8
      // level 9
    ]
  };

})();
