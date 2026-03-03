
import { LibraryItemDef } from '../../types';

// AES_OCCUPATION (Cinema Characters)
// Total: 120 Items (6 Groups x 20 Items)

export const AES_OCCUPATION: LibraryItemDef[] = [
  // ==========================================
  // Group A: 暴力与执法 (Action & Law - 20)
  // ==========================================
  { id: "char_law_hitman", name: "职业杀手 (Hitman)", group: "A. 暴力执法", def: "Black suit, leather gloves, holding a silenced pistol, cold expression.", core: "原型: John Wick" },
  { id: "char_law_detective", name: "私家侦探 (Private Detective)", group: "A. 暴力执法", def: "Trench coat, fedora hat, smoking in rain, neon reflection on face.", core: "原型: Noir Detective" },
  { id: "char_law_cop", name: "坏警察 (Corrupt Cop)", group: "A. 暴力执法", def: "Messy uniform, sweat, holding a donut and a gun, gritty urban background.", core: "原型: Training Day" },
  { id: "char_law_spy", name: "特工 (Secret Agent)", group: "A. 暴力执法", def: "Tuxedo, adjusting cufflinks, holding a martini, casino background.", core: "原型: James Bond" },
  { id: "char_law_sniper", name: "狙击手 (Sniper)", group: "A. 暴力执法", def: "Gillie suit, looking through scope, rooftop edge, tense atmosphere.", core: "原型: Shooter" },
  { id: "char_law_swat", name: "特警 (SWAT Officer)", group: "A. 暴力执法", def: "Full tactical gear, helmet, shield, breaching a door.", core: "原型: SWAT" },
  { id: "char_law_gangster", name: "黑帮老大 (Mob Boss)", group: "A. 暴力执法", def: "Expensive suit, ring on finger, sitting in leather chair, shadowy room.", core: "原型: The Godfather" },
  { id: "char_law_yakuza", name: "极道成员 (Yakuza)", group: "A. 暴力执法", def: "Full back tattoo, suit jacket off, holding katana, missing finger.", core: "原型: Yakuza films" },
  { id: "char_law_thug", name: "街头暴徒 (Street Thug)", group: "A. 暴力执法", def: "Bandana, tank top, holding baseball bat, graffiti alley background.", core: "原型: GTA NPC" },
  { id: "char_law_bounty", name: "赏金猎人 (Bounty Hunter)", group: "A. 暴力执法", def: "Space western gear, helmet, holding blaster rifle, desert background.", core: "原型: The Mandalorian" },
  { id: "char_law_ronin", name: "浪人武士 (Ronin)", group: "A. 暴力执法", def: "Worn kimono, straw hat covering eyes, hand on sword hilt, wind blowing.", core: "原型: Yojimbo" },
  { id: "char_law_knight", name: "流浪骑士 (Wandering Knight)", group: "A. 暴力执法", def: "Rusted plate armor, dirty cape, holding greatsword, muddy battlefield.", core: "原型: Dark Souls" },
  { id: "char_law_viking", name: "维京战士 (Viking Berserker)", group: "A. 暴力执法", def: "Fur cloak, war paint, holding two axes, screaming, snow background.", core: "原型: The Northman" },
  { id: "char_law_cowboy", name: "牛仔 (Gunslinger)", group: "A. 暴力执法", def: "Poncho, cowboy hat, chewing cigar, hand hovering over revolver.", core: "原型: Clint Eastwood" },
  { id: "char_law_pirate", name: "海盗船长 (Pirate Captain)", group: "A. 暴力执法", def: "Tricorn hat, long coat, hook hand, parrot on shoulder, ship deck.", core: "原型: Jack Sparrow" },
  { id: "char_law_bodyguard", name: "保镖 (Bodyguard)", group: "A. 暴力执法", def: "Sunglasses, earpiece, black suit, stoic expression, arms crossed.", core: "原型: The Bodyguard" },
  { id: "char_law_prison", name: "囚犯 (Prisoner)", group: "A. 暴力执法", def: "Orange jumpsuit, handcuffs, tattoos, sitting on bunk bed.", core: "原型: Prison Break" },
  { id: "char_law_executioner", name: "刽子手 (Executioner)", group: "A. 暴力执法", def: "Black hood, holding giant axe, dungeon background.", core: "原型: Medieval Fantasy" },
  { id: "char_law_ninja", name: "忍者 (Ninja)", group: "A. 暴力执法", def: "Black ninja suit, mask, holding kunai, perched on roof beam.", core: "原型: Ninja Assassin" },
  { id: "char_law_soldier", name: "特种兵 (Soldier)", group: "A. 暴力执法", def: "Camouflage, face paint, holding assault rifle, jungle background.", core: "原型: Rambo" },

  // ==========================================
  // Group B: 科幻与奇幻 (Sci-Fi & Fantasy - 20)
  // ==========================================
  { id: "char_sf_astronaut", name: "宇航员 (Astronaut)", group: "B. 科幻奇幻", def: "White space suit, gold visor reflection, floating in zero gravity.", core: "原型: Interstellar" },
  { id: "char_sf_cyborg", name: "赛博格 (Cyborg)", group: "B. 科幻奇幻", def: "Half face metal, glowing red eye, exposed wires, futuristic city.", core: "原型: Terminator" },
  { id: "char_sf_hacker", name: "黑客 (Netrunner)", group: "B. 科幻奇幻", def: "VR goggles, hood up, typing on holographic keyboard, dark room.", core: "原型: Cyberpunk 2077" },
  { id: "char_sf_alien", name: "外星人 (Alien)", group: "B. 科幻奇幻", def: "Grey skin, large black eyes, slender limbs, laboratory background.", core: "原型: X-Files" },
  { id: "char_sf_wizard", name: "巫师 (Wizard)", group: "B. 科幻奇幻", def: "Pointy hat, long white beard, holding glowing staff, star robe.", core: "原型: Gandalf" },
  { id: "char_sf_witch", name: "女巫 (Witch)", group: "B. 科幻奇幻", def: "Black gothic dress, holding potion bottle, black cat nearby, forest.", core: "原型: The Witcher" },
  { id: "char_sf_elf", name: "精灵游侠 (Elf Ranger)", group: "B. 科幻奇幻", def: "Pointed ears, green tunic, holding bow, tree branch.", core: "原型: Legolas" },
  { id: "char_sf_vampire", name: "吸血鬼 (Vampire)", group: "B. 科幻奇幻", def: "Pale skin, fangs, victorian suit, glass of red wine.", core: "原型: Dracula" },
  { id: "char_sf_zombie", name: "丧尸 (Zombie)", group: "B. 科幻奇幻", def: "Rotting flesh, torn clothes, empty white eyes, reaching out.", core: "原型: Walking Dead" },
  { id: "char_sf_robot", name: "机器人 (Robot)", group: "B. 科幻奇幻", def: "Rusty metal body, glowing lens eyes, stiff pose, junkyard.", core: "原型: Wall-E" },
  { id: "char_sf_superhero", name: "超级英雄 (Superhero)", group: "B. 科幻奇幻", def: "Spandex suit, cape blowing in wind, standing on skyscraper edge.", core: "原型: Superman" },
  { id: "char_sf_villain", name: "超级反派 (Super Villain)", group: "B. 科幻奇幻", def: "Dark armor, helmet, laughing maniacally, destruction background.", core: "原型: Dr. Doom" },
  { id: "char_sf_pilot", name: "机甲驾驶员 (Mecha Pilot)", group: "B. 科幻奇幻", def: "Plug suit, helmet, sitting in cockpit, HUD overlay.", core: "原型: Evangelion" },
  { id: "char_sf_post_apoc", name: "废土幸存者 (Wasteland Survivor)", group: "B. 科幻奇幻", def: "Gas mask, goggles, leather armor, holding shotgun, desert.", core: "原型: Mad Max" },
  { id: "char_sf_demon", name: "恶魔 (Demon)", group: "B. 科幻奇幻", def: "Red skin, horns, tail, suit, holding contract.", core: "原型: Lucifer" },
  { id: "char_sf_angel", name: "天使 (Angel)", group: "B. 科幻奇幻", def: "White wings, halo, glowing aura, floating.", core: "原型: Constantine" },
  { id: "char_sf_ghost", name: "幽灵 (Ghost)", group: "B. 科幻奇幻", def: "Translucent body, white dress, sad face, old hallway.", core: "原型: The Ring" },
  { id: "char_sf_werewolf", name: "狼人 (Werewolf)", group: "B. 科幻奇幻", def: "Mid-transformation, fur, claws, full moon background.", core: "原型: The Wolfman" },
  { id: "char_sf_time_traveler", name: "时间旅行者 (Time Traveler)", group: "B. 科幻奇幻", def: "Steampunk goggles, pocket watch, victorian coat, clock gears.", core: "原型: Time Machine" },
  { id: "char_sf_mermaid", name: "人鱼 (Mermaid)", group: "B. 科幻奇幻", def: "Fish tail, wet hair, underwater bubbles, coral reef.", core: "原型: The Little Mermaid" },

  // ==========================================
  // Group C: 专业职场 (Professional - 20)
  // ==========================================
  { id: "char_job_doctor", name: "医生 (Doctor)", group: "C. 专业职场", def: "White coat, stethoscope, serious expression, hospital corridor.", core: "原型: House M.D." },
  { id: "char_job_nurse", name: "护士 (Nurse)", group: "C. 专业职场", def: "Scrubs, holding clipboard, tired eyes, busy ER background.", core: "原型: Grey's Anatomy" },
  { id: "char_job_scientist", name: "科学家 (Scientist)", group: "C. 专业职场", def: "Lab coat, safety glasses, holding test tube, laboratory.", core: "原型: Breaking Bad" },
  { id: "char_job_ceo", name: "霸道总裁 (CEO)", group: "C. 专业职场", def: "Expensive suit, tie, office with city view, talking on phone.", core: "原型: Succession" },
  { id: "char_job_lawyer", name: "律师 (Lawyer)", group: "C. 专业职场", def: "Sharp suit, holding briefcase, court house steps.", core: "原型: Better Call Saul" },
  { id: "char_job_chef", name: "主厨 (Chef)", group: "C. 专业职场", def: "Chef whites, apron, holding knife, steam, angry shouting.", core: "原型: The Bear" },
  { id: "char_job_teacher", name: "老师 (Teacher)", group: "C. 专业职场", def: "Cardigan, glasses, standing at blackboard, holding chalk.", core: "原型: Dead Poets Society" },
  { id: "char_job_engineer", name: "工程师 (Engineer)", group: "C. 专业职场", def: "Hard hat, high vis vest, holding blueprints, construction site.", core: "原型: Construction" },
  { id: "char_job_programmer", name: "程序员 (Programmer)", group: "C. 专业职场", def: "Hoodie, headphones, dark room, multiple monitors with code.", core: "原型: Mr. Robot" },
  { id: "char_job_artist", name: "画家 (Artist)", group: "C. 专业职场", def: "Paint stained clothes, beret, holding brush, chaotic studio.", core: "原型: Pollock" },
  { id: "char_job_musician", name: "摇滚乐手 (Musician)", group: "C. 专业职场", def: "Leather jacket, long hair, holding electric guitar, stage lights.", core: "原型: Rock Star" },
  { id: "char_job_detective", name: "法医 (Forensic)", group: "C. 专业职场", def: "Blue latex gloves, protective suit, examining evidence, crime scene.", core: "原型: CSI" },
  { id: "char_job_pilot", name: "飞行员 (Pilot)", group: "C. 专业职场", def: "Pilot uniform, aviators, cockpit, blue sky.", core: "原型: Catch Me If You Can" },
  { id: "char_job_priest", name: "牧师 (Priest)", group: "C. 专业职场", def: "Black shirt with white collar, holding bible, church interior.", core: "原型: The Exorcist" },
  { id: "char_job_reporter", name: "记者 (Reporter)", group: "C. 专业职场", def: "Holding microphone, press pass, trench coat, war zone.", core: "原型: Spotlight" },
  { id: "char_job_mechanic", name: "修理工 (Mechanic)", group: "C. 专业职场", def: "Grease on face, overalls, holding wrench, under car.", core: "原型: Ford v Ferrari" },
  { id: "char_job_butcher", name: "屠夫 (Butcher)", group: "C. 专业职场", def: "Bloodied apron, holding cleaver, meat locker.", core: "原型: Gangs of New York" },
  { id: "char_job_firefighter", name: "消防员 (Firefighter)", group: "C. 专业职场", def: "Soot on face, heavy gear, holding axe, burning building.", core: "原型: Ladder 49" },
  { id: "char_job_maid", name: "女佣 (Maid)", group: "C. 专业职场", def: "Maid uniform, holding duster, looking down, mansion hallway.", core: "原型: Downton Abbey" },
  { id: "char_job_driver", name: "司机 (Driver)", group: "C. 专业职场", def: "Leather driving gloves, toothpick, eyes in rear view mirror.", core: "原型: Drive" },

  // ==========================================
  // Group D: 权贵与上流 (High Society - 20)
  // ==========================================
  { id: "char_high_king", name: "国王 (King)", group: "D. 权贵上流", def: "Crown, fur cloak, sitting on throne, holding scepter.", core: "原型: The King" },
  { id: "char_high_queen", name: "女王 (Queen)", group: "D. 权贵上流", def: "Complex gown, high wig, jewels, standing on balcony.", core: "原型: Marie Antoinette" },
  { id: "char_high_prince", name: "王子 (Prince)", group: "D. 权贵上流", def: "Military dress uniform, sash, sword, palace garden.", core: "原型: Cinderella" },
  { id: "char_high_princess", name: "公主 (Princess)", group: "D. 权贵上流", def: "Ball gown, tiara, running down stairs, glass slipper.", core: "原型: Roman Holiday" },
  { id: "char_high_socialite", name: "名媛 (Socialite)", group: "D. 权贵上流", def: "Cocktail dress, holding champagne, laughing, party background.", core: "原型: Gossip Girl" },
  { id: "char_high_tycoon", name: "大亨 (Tycoon)", group: "D. 权贵上流", def: "Smoking cigar, tuxedo, top hat, monocle.", core: "原型: Monopoly Man" },
  { id: "char_high_diva", name: "歌剧名伶 (Opera Diva)", group: "D. 权贵上流", def: "Dramatic makeup, feathers, singing, stage spotlight.", core: "原型: Callas" },
  { id: "char_high_heir", name: "继承人 (Heir)", group: "D. 权贵上流", def: "Polo shirt, sweater over shoulders, tennis racket, country club.", core: "原型: Old Money" },
  { id: "char_high_dictator", name: "独裁者 (Dictator)", group: "D. 权贵上流", def: "Military uniform with many medals, balcony, waving to crowd.", core: "原型: The Dictator" },
  { id: "char_high_emperor", name: "皇帝 (Emperor)", group: "D. 权贵上流", def: "Golden robes, dragon embroidery, forbidden city.", core: "原型: Last Emperor" },
  { id: "char_high_general", name: "将军 (General)", group: "D. 权贵上流", def: "Green uniform, stars on shoulder, looking at map, war room.", core: "原型: Dr. Strangelove" },
  { id: "char_high_senator", name: "参议员 (Senator)", group: "D. 权贵上流", def: "Suit, american flag pin, shaking hands, fake smile.", core: "原型: House of Cards" },
  { id: "char_high_bishop", name: "红衣主教 (Bishop)", group: "D. 权贵上流", def: "Red robes, large cross, cathedral altar.", core: "原型: The Borgias" },
  { id: "char_high_judge", name: "大法官 (High Judge)", group: "D. 权贵上流", def: "Black robe, white wig, holding gavel, court.", core: "原型: The Judge" },
  { id: "char_high_pharaoh", name: "法老 (Pharaoh)", group: "D. 权贵上流", def: "Gold headdress, eyeliner, sitting on stone throne.", core: "原型: The Mummy" },
  { id: "char_high_vamp_lord", name: "吸血鬼领主 (Vampire Lord)", group: "D. 权贵上流", def: "Velvet coat, cravat, goblet of blood, castle.", core: "原型: Interview with the Vampire" },
  { id: "char_high_cult_leader", name: "教主 (Cult Leader)", group: "D. 权贵上流", def: "White robes, flower crown, open arms, followers.", core: "原型: Midsommar" },
  { id: "char_high_fashion", name: "时尚女魔头 (Fashion Editor)", group: "D. 权贵上流", def: "Sunglasses indoors, bob cut, fur coat, judging.", core: "原型: Devil Wears Prada" },
  { id: "char_high_gambler", name: "赌神 (High Roller)", group: "D. 权贵上流", def: "Tuxedo, poker chips, casino table, poker face.", core: "原型: Casino Royale" },
  { id: "char_high_celebrity", name: "电影明星 (Movie Star)", group: "D. 权贵上流", def: "Gown, red carpet, flashing cameras, waving.", core: "原型: Marilyn Monroe" },

  // ==========================================
  // Group E: 边缘与怪人 (Marginal & Misfit - 20)
  // ==========================================
  { id: "char_out_clown", name: "小丑 (Clown)", group: "E. 边缘怪人", def: "Messy face paint, colorful suit, sad eyes, balloon.", core: "原型: Joker" },
  { id: "char_out_punk", name: "朋克 (Punk)", group: "E. 边缘怪人", def: "Mohawk, leather jacket with studs, safety pin piercing.", core: "原型: Sid Vicious" },
  { id: "char_out_hobo", name: "流浪汉 (Hobo)", group: "E. 边缘怪人", def: "Tattered coat, fingerless gloves, bindle stick, train tracks.", core: "原型: Charlie Chaplin" },
  { id: "char_out_goth", name: "哥特少女 (Goth Girl)", group: "E. 边缘怪人", def: "Black lace, pale makeup, umbrella, cemetery.", core: "原型: Wednesday Addams" },
  { id: "char_out_nerd", name: "书呆子 (Nerd)", group: "E. 边缘怪人", def: "Thick glasses, suspenders, pocket protector, books.", core: "原型: Napoleon Dynamite" },
  { id: "char_out_junkie", name: "瘾君子 (Junkie)", group: "E. 边缘怪人", def: "Pale skin, dark circles, shivering, dirty hoodie.", core: "原型: Trainspotting" },
  { id: "char_out_hiker", name: "流浪行者 (Drifter)", group: "E. 边缘怪人", def: "Big backpack, beard, walking stick, highway.", core: "原型: Into the Wild" },
  { id: "char_out_patient", name: "精神病人 (Mental Patient)", group: "E. 边缘怪人", def: "Hospital gown, messy hair, vacant stare, padded room.", core: "原型: One Flew Over the Cuckoo's Nest" },
  { id: "char_out_loner", name: "孤独者 (Loner)", group: "E. 边缘怪人", def: "Hoodie up, headphones, sitting alone on subway.", core: "原型: Mr. Robot" },
  { id: "char_out_rebel", name: "反叛少年 (Rebel)", group: "E. 边缘怪人", def: "Red jacket, pompadour hair, leaning on motorcycle.", core: "原型: Rebel Without a Cause" },
  { id: "char_out_freak", name: "怪胎 (Freak)", group: "E. 边缘怪人", def: "Mask, unusual clothes, circus tent background.", core: "原型: American Horror Story" },
  { id: "char_out_hippie", name: "嬉皮士 (Hippie)", group: "E. 边缘怪人", def: "Tie-dye shirt, long hair, peace sign, flower van.", core: "原型: Forrest Gump" },
  { id: "char_out_survivor", name: "幸存者 (Sole Survivor)", group: "E. 边缘怪人", def: "Dirty face, thousand yard stare, blanket, ruins.", core: "原型: The Road" },
  { id: "char_out_otaku", name: "御宅族 (Otaku)", group: "E. 边缘怪人", def: "Bandana, anime shirt, backpack, computer room.", core: "原型: Densha Otoko" },
  { id: "char_out_skater", name: "滑板少年 (Skater)", group: "E. 边缘怪人", def: "Baggy pants, beanie, holding skateboard, bruised knees.", core: "原型: Mid90s" },
  { id: "char_out_artist", name: "行为艺术家 (Performance Artist)", group: "E. 边缘怪人", def: "Naked, covered in paint, staring at audience.", core: "原型: The Square" },
  { id: "char_out_fortune", name: "吉普赛占卜师 (Fortune Teller)", group: "E. 边缘怪人", def: "Headscarf, gold coins, crystal ball, tent.", core: "原型: Peaky Blinders" },
  { id: "char_out_activist", name: "激进分子 (Activist)", group: "E. 边缘怪人", def: "Megaphone, sign, shouting, protest crowd.", core: "原型: Trial of the Chicago 7" },
  { id: "char_out_conspiracy", name: "阴谋论者 (Conspiracy Theorist)", group: "E. 边缘怪人", def: "Tin foil hat, wall of red string, basement.", core: "原型: X-Files" },
  { id: "char_out_raver", name: "锐舞客 (Raver)", group: "E. 边缘怪人", def: "Neon clothes, glow sticks, sunglasses, sweating.", core: "原型: Human Traffic" },

  // ==========================================
  // Group F: 服务与劳工 (Service & Labor - 20)
  // ==========================================
  { id: "char_ser_waiter", name: "服务员 (Waiter)", group: "F. 服务劳工", def: "Vest, bow tie, holding tray, towel on arm.", core: "原型: The Grand Budapest Hotel" },
  { id: "char_ser_maid", name: "女佣 (Maid)", group: "F. 服务劳工", def: "Black dress, white apron, feather duster.", core: "原型: The Help" },
  { id: "char_ser_taxi", name: "出租司机 (Taxi Driver)", group: "F. 服务劳工", def: "Flannel shirt, driving cap, looking in rearview mirror.", core: "原型: Taxi Driver" },
  { id: "char_ser_delivery", name: "外卖员 (Delivery Guy)", group: "F. 服务劳工", def: "Helmet, large backpack, riding scooter, rain.", core: "原型: Premium Rush" },
  { id: "char_ser_construction", name: "建筑工 (Construction Worker)", group: "F. 服务劳工", def: "Hard hat, high vis vest, holding jackhammer.", core: "原型: Total Recall" },
  { id: "char_ser_farmer", name: "农夫 (Farmer)", group: "F. 服务劳工", def: "Overalls, straw hat, holding pitchfork, barn.", core: "原型: Interstellar" },
  { id: "char_ser_miner", name: "矿工 (Miner)", group: "F. 服务劳工", def: "Face covered in coal dust, headlamp, pickaxe.", core: "原型: Zoolander" },
  { id: "char_ser_janitor", name: "清洁工 (Janitor)", group: "F. 服务劳工", def: "Blue jumpsuit, mopping floor, keys on belt.", core: "原型: Good Will Hunting" },
  { id: "char_ser_mechanic", name: "修车工 (Mechanic)", group: "F. 服务劳工", def: "Grease stained rag, wrench, under car hood.", core: "原型: Transformers" },
  { id: "char_ser_secretary", name: "秘书 (Secretary)", group: "F. 服务劳工", def: "Glasses, blouse, typing, answering phone.", core: "原型: Mad Men" },
  { id: "char_ser_trucker", name: "卡车司机 (Trucker)", group: "F. 服务劳工", def: "Trucker hat, flannel, driving big rig, diner.", core: "原型: Duel" },
  { id: "char_ser_butcher", name: "屠夫 (Butcher)", group: "F. 服务劳工", def: "Bloodied white apron, cleaver, meat locker.", core: "原型: Delicatessen" },
  { id: "char_ser_sailor", name: "水手 (Sailor)", group: "F. 服务劳工", def: "Striped shirt, pipe, tattoos, deck.", core: "原型: Popeye" },
  { id: "char_ser_soldier_grunt", name: "大兵 (Grunt)", group: "F. 服务劳工", def: "Dirty fatigues, helmet, smoking, trench.", core: "原型: Platoon" },
  { id: "char_ser_fisherman", name: "渔夫 (Fisherman)", group: "F. 服务劳工", def: "Yellow raincoat, beard, hauling net, storm.", core: "原型: The Perfect Storm" },
  { id: "char_ser_clerk", name: "店员 (Clerk)", group: "F. 服务劳工", def: "Polo shirt, name tag, bored expression, counter.", core: "原型: Clerks" },
  { id: "char_ser_nanny", name: "保姆 (Nanny)", group: "F. 服务劳工", def: "Holding baby, umbrella, carpet bag.", core: "原型: Mary Poppins" },
  { id: "char_ser_gardener", name: "园丁 (Gardener)", group: "F. 服务劳工", def: "Straw hat, shears, green apron.", core: "原型: Being There" },
  { id: "char_ser_bartender", name: "酒保 (Bartender)", group: "F. 服务劳工", def: "Polishing glass, vest, bar counter.", core: "原型: Passengers" },
  { id: "char_ser_street_cleaner", name: "扫街人 (Street Sweeper)", group: "F. 服务劳工", def: "Orange vest, broom, early morning fog.", core: "原型: Chungking Express" }
];
