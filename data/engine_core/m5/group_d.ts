import { LibraryItemDef } from '../../../types';

export const DRIVES_GROUP_D: LibraryItemDef[] = [
    // ============================================================
    // GROUP D. 凝固的驱力 (The Crystallization) — 20 Items
    // 能量不撞击、不环绕、不穿透，而是停下来、固定、保存、定型。
    // 凝固不等于死亡。建造是凝固，记忆是凝固，坚守也是凝固。
    // 光谱：建设性凝固(1-7) → 防御性凝固(8-13) → 病理性凝固(14-20)
    // ============================================================

    // ---- 建设性凝固：用劳动、记忆和仪式把流动的世界固定下来 ----

    {
        id: "drv_building",
        name: "建造", nameEn: "Building",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "用双手在世界上留下一个不会消失的东西。房子、桥梁、堤坝、城市。",
        defEn: "Making something with your hands that won't vanish from the world. Houses, bridges, dams, cities.",
        core: "A面：建造是抗拒时间最古老的方式——你终将逝去，但作品会留下。每块砖都在对虚无说不。/ B面：但建造也常是逃避——精力全投入外在，因不敢直视内在空虚。你建的只是挡住虚无的墙。关键张力：为世界留下痕迹，还是因为停下来就会崩溃？ | 驱力回路 (Trieb): 砌筑——手必须忙着，空闲会发抖。",
        coreEn: "A-side: Building defies time — you will perish, but your work remains. Every brick says 'no' to the void. / B-side: But it's also an escape — pouring energy externally to avoid inner emptiness. You are building walls against the void, not monuments. Key tension: Building to leave a trace, or because stopping means collapse? | Drive Circuit (Trieb): Laying bricks — hands must keep busy to avoid trembling.",
        reference: "《陆上行舟》赫尔佐格拖着轮船翻越山脊只为建一座歌剧院；《天堂电影院》老放映员用一生守护和建造一间小镇电影院。",
        referenceEn: "Herzog dragging a ship over a mountain ridge just to build an opera house in Fitzcarraldo; an old projectionist spending his life building and guarding a small-town cinema in Cinema Paradiso."
    },
    {
        id: "drv_recording",
        name: "记录", nameEn: "Recording",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把正在消逝的东西固定下来。写下来、拍下来、画下来、唱下来。",
        defEn: "Fixing what's vanishing. Writing, filming, painting, singing it down.",
        core: "A面：记录是对抗遗忘最温柔的反叛——拒绝让消逝的瞬间化为乌有。它宣告了'这曾存在过'。/ B面：但极端记录者常活在镜头后——太忙于保存生活，却忘了去真正体验。硬盘虽满，人生却空。关键张力：保留生活，还是用记录替代了真实的在场？ | 驱力回路 (Trieb): 铭刻——必须留下痕迹，遗忘比死亡更怕。",
        coreEn: "A-side: Recording is a gentle rebellion against forgetting — declaring 'this once existed' against vanishing moments. / B-side: Yet obsessive recorders live behind the lens — documenting life but forgetting to experience it. Full hard drives, empty lives. Key tension: Preserving life, or replacing real experience with documentation? | Drive Circuit (Trieb): Inscribing — must leave traces; forgetting is worse than death.",
        reference: "《辛德勒的名单》用名单把一千多条生命固定在纸上的工厂主；《安妮日记》在密室中用日记凝固了一段即将被消灭的青春。",
        referenceEn: "A factory owner fixing over a thousand lives onto paper with a list in Schindler's List; fixing a youth about to be destroyed in a diary written in hiding in The Diary of Anne Frank."
    },
    {
        id: "drv_collecting",
        name: "收藏", nameEn: "Collecting",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把分散在世界各处的碎片聚拢在一起，赋予它们秩序和意义。",
        defEn: "Gathering fragments scattered across the world, giving them order and meaning.",
        core: "A面：收藏是在混乱中重建秩序——按自己的逻辑拼凑碎片，在这微缩宇宙里找回可控感。/ B面：但极端收藏将人异化为囚徒——你不再拥有藏品，而是被它们拥有，为下一次占有夜不能寐。关键张力：你出于热爱，还是对失控的深深恐惧？ | 驱力回路 (Trieb): 聚拢——世界太乱，至少此处的碎片各归其位。",
        coreEn: "A-side: Collecting builds order from chaos — arranging fragments to form a controllable micro-universe. / B-side: But extreme collecting makes you a prisoner — possessed by your possessions, anxious for the next acquisition. Key tension: Do you collect out of pure love, or a deep fear of losing control? | Drive Circuit (Trieb): Gathering — the world is chaotic; at least here things have their place.",
        reference: "《公民凯恩》在巨大的仓库里堆满了一生的收藏却始终找不到'玫瑰花蕾'的报业大亨；《头号玩家》在虚拟世界中收藏流行文化碎片以对抗遗忘的玩家。",
        referenceEn: "A press magnate filling vast warehouses with a lifetime's collection yet never finding 'Rosebud' in Citizen Kane; players collecting pop culture fragments in virtual worlds to fight forgetting in Ready Player One."
    },
    {
        id: "drv_inheritance",
        name: "传承", nameEn: "Inheritance",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "把你知道的、拥有的、相信的传给下一代。让它在你死后继续活着。",
        defEn: "Passing what you know, own, and believe to the next generation. Keeping it alive after you die.",
        core: "A面：传承是最深远的凝固——化作桥梁接通过去与未来，使知识跨越个体死亡。/ B面：但它也常是结构性绑架——让下一代背负你的期望与未竟野心，衣钵成了枷锁。关键张力：你传下的是自由，还是未竟之梦的沉重锁链？ | 驱力回路 (Trieb): 延续——我终将消失，但'这'绝不能消失。",
        coreEn: "A-side: Inheritance is profound crystallization — becoming a bridge connecting past and future, letting knowledge outlive the individual. / B-side: It can also be structural bonding — forcing the next generation to bear your unfulfilled expectations. The mantle becomes a shackle. Key tension: Passing down freedom, or the heavy chains of unfinished dreams? | Drive Circuit (Trieb): Continuing — I will vanish, but 'this' must remain.",
        reference: "《教父》维托把整个家族的权力和罪恶一起传给了迈克尔；《星球大战》绝地武士通过师徒制把原力信仰一代代传下去。",
        referenceEn: "Vito passing the family's entire power and sin to Michael in The Godfather; Jedi transmitting Force-faith through generations of master-apprentice bonds in Star Wars."
    },
    {
        id: "drv_memorial",
        name: "纪念", nameEn: "Memorial",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "为已经消失的人或事建一座不会被遗忘的标记。",
        defEn: "Building an unforgettable marker for people or things that have vanished.",
        core: "A面：纪念是对遗忘最决绝的反抗——坚决不让失去的人和事被虚无抹杀。墓碑是时空中抗拒潮流的锚。/ B面：但这可化为无法前行的执念——建起纪念碑，自己却被永远钉死在原地。关键张力：是为了让逝者存续，还是因为你根本无法接受失去现实？ | 驱力回路 (Trieb): 立碑——哪怕被全世界遗忘，此石仍会铭记。",
        coreEn: "A-side: Memorializing is the most stubborn denial of forgetting — refusing to let lost ones be erased by the void. Tombstones are anchors against time's flow. / B-side: But it can become a paralyzing obsession — erecting a monument that nails you permanently to the spot. Key tension: Ensuring the dead persist in the future, or an inability to accept loss? | Drive Circuit (Trieb): Erecting a stone — even if the world forgets, this stone remembers.",
        reference: "《寻梦环游记》在亡灵节用万寿菊桥把逝者的记忆凝固在花瓣上；《钢琴家》在战后废墟中弹奏的那首肖邦——用音乐纪念一切被摧毁的东西。",
        referenceEn: "Fixing the dead's memory onto marigold petals on the Day of the Dead in Coco; a Chopin piece played in postwar ruins — music memorializing everything destroyed in The Pianist."
    },
    {
        id: "drv_ritual",
        name: "仪式", nameEn: "Ritual",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "用重复的动作和固定的程序给混乱的世界施加秩序。",
        defEn: "Imposing order on a chaotic world through repeated actions and fixed procedures.",
        core: "A面：仪式是对混乱最原始的回应——不知所措时，至少能按步骤行事。葬礼不仅为死者，更给生者结构，把不可承受的轻化为可操作的重。/ B面：但失去内在意义的仪式只是空壳——动作正确，心已不在。不是祈祷，只是动嘴唇。关键张力：你的仪式还有灵魂，还是只剩惯性？ | 驱力回路 (Trieb): 重复——做同样的事，改变比重复更可怕。",
        coreEn: "A-side: Ritual is the primal response to chaos — following fixed steps when lost. Funerals give the living structure, turning unbearable lightness into manageable weight. / B-side: But rituals without meaning are empty shells — right motions, absentee hearts. Merely moving lips, not praying. Key tension: Does your ritual have a soul, or just inertia? | Drive Circuit (Trieb): Repeating — doing the same, as change is terrifying.",
        reference: "《教父》每一次家族聚餐和洗礼仪式都同时进行着谋杀的对位结构；《入殓师》为遗体整理仪容的仪式——用固定程序恢复逝者尊严。",
        referenceEn: "Every family feast and baptism running parallel to murder in The Godfather; the ritual of preparing bodies — restoring dignity through fixed procedures in Departures."
    },
    {
        id: "drv_guarding_legacy",
        name: "守护遗产", nameEn: "Guarding Legacy",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "终身看守一件你没有创造但不能让它消失的东西。",
        defEn: "Spending a lifetime guarding something you didn't create but cannot let vanish.",
        core: "A面：守护者并非创造者——没建这座图书馆，但保证任期内一书不失。这种忠诚承认自己只是链条上一环，平淡却深沉。/ B面：但守护可变成囚禁——和守护之物一起被锁死。留下非因自由选择，离开即是背叛。关键张力：你守护的是事物本身，还是'守护者'身份给的存在感？ | 驱力回路 (Trieb): 看守——我走了，就没人看着它了。",
        coreEn: "A-side: Guardians aren't creators — assuring no book vanishes though they didn't build the library. A deep loyalty admitting one's place as a link in the chain. / B-side: But guarding becomes imprisonment — locked in with the guarded. Staying isn't a free choice; leaving means betrayal. Key tension: Guarding the object, or the existence the 'guardian' role grants? | Drive Circuit (Trieb): Standing watch — if I leave, no one watches.",
        reference: "《天堂电影院》阿尔弗雷多终身守护在放映室里直到失明；《指环王》阿拉贡的祖先世世代代守护着碎裂的纳西尔圣剑。",
        referenceEn: "Alfredo guarding the projection room his entire life until going blind in Cinema Paradiso; Aragorn's ancestors guarding the shards of Narsil generation after generation in LOTR."
    },

    // ---- 防御性凝固：用坚持、原则和克制抵抗改变的力量 ----

    {
        id: "drv_holding_ground",
        name: "固守", nameEn: "Holding Ground",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "所有人都在撤退，你留在原地。不是因为勇敢，而是因为这里就是你的位置。",
        defEn: "Everyone retreats; you stay. Not from bravery, but because this is your place.",
        core: "A面：固守是凝固最壮烈的形态——你的存在本身就是防线。不求赢，只求不退。/ B面：但固守者常分不清勇敢与固执——留下是因为阵地值得，还是太骄傲无法撤退？有时撤退更需大勇。关键张力：阵地还有价值吗？还是用'不退'证明存在？ | 驱力回路 (Trieb): 扎根——我就在这，谁也别想让我挪步。",
        coreEn: "A-side: Holding ground is heroic crystallization — your presence is the wall. It's not about winning, but refusing to retreat. / B-side: But it blends courage with stubbornness — staying because it's worth defending, or too proud to leave? Retreat sometimes takes more courage. Key tension: Is the ground worth it, or are you proving existence by staying? | Drive Circuit (Trieb): Taking root — I am here, none shall move me.",
        reference: "《拯救大兵瑞恩》在桥上用手枪对坦克说'你不许过去'的米勒上尉；《斯巴达三百勇士》温泉关三百人挡住百万大军的固守。",
        referenceEn: "Captain Miller firing a pistol at a tank saying 'you shall not pass' on the bridge in Saving Private Ryan; three hundred Spartans holding Thermopylae against a million in 300."
    },
    {
        id: "drv_principle",
        name: "坚持原则", nameEn: "Principle",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "世界在变，你的标准不变。'我不管别人怎么做，我只知道这是不对的。'",
        defEn: "The world changes; your standards don't. 'I don't care what others do; I know this is wrong.'",
        core: "A面：原则是人格的骨骼——无它虽灵活但如软泥。有原则者在变幻中总有清晰的内在参照。/ B面：但原则易变僵化——拒绝适应非因坚定，而是恐惧。世界变了，原则或许该更新。关键张力：在坚守真理，还是用原则回避适应的痛苦？ | 驱力回路 (Trieb): 不动——所有人都弯了，我的脊梁不能弯。",
        coreEn: "A-side: Principles are character's skeleton — without them you are flexible but spineless. They offer clear inner reference amid change. / B-side: But principles breed rigidity — refusing adaptation out of fear, not conviction. When the world changes, update may be needed. Key tension: Defending truth, or dodging the pain of adaptation? | Drive Circuit (Trieb): Unmoved — everyone bends, but my spine remains straight.",
        reference: "《十二怒汉》在所有人都要快速定罪时坚持合理怀疑的陪审员；《永不妥协》不管律所和大公司怎么施压都不放弃诉讼的艾琳。",
        referenceEn: "A juror insisting on reasonable doubt when everyone wants a quick conviction in 12 Angry Men; Erin refusing to drop the case no matter how the firm and corporations pressure in Erin Brockovich."
    },
    {
        id: "drv_endurance",
        name: "忍耐", nameEn: "Endurance",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "承受住痛苦、屈辱或等待，不崩溃，不反击，只是'撑下去'。",
        defEn: "Bearing pain, humiliation, or waiting without collapsing or striking back. Simply 'enduring.'",
        core: "A面：忍耐是最沉默的力量——不反击不逃跑，只求'还在'。有些战役不是打赢的，是熬赢的。/ B面：但忍耐与麻木边界模糊——以为在忍，实则已麻木；以为等转机，实则忘了还有别路可走。关键张力：是在选择等待，还是已不信有别的路？ | 驱力回路 (Trieb): 硬扛——咬紧牙，再撑一会儿。",
        coreEn: "A-side: Endurance is silent strength — not fighting or fleeing, just 'remaining.' Some wars are won by outlasting, not combating. / B-side: But the line with numbness is thin — thinking you endure while truly numb; hoping for a turn, forgetting other paths exist. Key tension: Choosing to wait, or no longer believing in alternatives? | Drive Circuit (Trieb): Gritting — clenching teeth, hold on a bit longer.",
        reference: "《为奴十二年》所罗门在十二年的奴役中保持尊严等待被解救；《肖申克的救赎》安迪用十九年的忍耐等到了那个雷雨夜。",
        referenceEn: "Solomon maintaining dignity through twelve years of slavery waiting for rescue in 12 Years a Slave; Andy enduring nineteen years until that stormy night in Shawshank Redemption."
    },
    {
        id: "drv_restraint",
        name: "克制", nameEn: "Restraint",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你完全有能力出手，但你选择不动。把冲动冻结在体内。",
        defEn: "You are entirely capable of acting, but choose not to. Freezing the impulse inside.",
        core: "A面：克制是力量的最高形式——不是做不到，是做得到但选择不做。每次咽下那句话、收回拳头、压下冲动，都是意志对本能的胜利。/ B面：但克制过度会变成压抑——情绪只是被压到更深的地方，早晚会以无法预料的方式爆发。关键张力：你在管理情绪，还是在制造定时炸弹？ | 驱力回路 (Trieb): 冻结——让那个冲动死在嘴边。",
        coreEn: "A-side: Restraint is strength's highest form — not because you can't but because you can yet choose not to. Every swallowed word, retracted fist, suppressed impulse is will's victory over instinct. / B-side: But excessive restraint becomes repression — you think you've controlled those emotions, but they're just pushed deeper. Someday they'll erupt unpredictably. Key tension: Are you managing emotions, or manufacturing a time bomb? | Drive Circuit (Trieb): Freezing — letting the impulse die on the tip of your tongue.",
        reference: "《老无所依》安东·齐格面对无辜者掷硬币——他有能力杀但给了命运选择的机会；《卧虎藏龙》李慕白对俞秀莲一生的克制——能说但始终没说出口的那句话。",
        referenceEn: "Anton Chigurh flipping a coin for the innocent — able to kill but giving fate a chance in No Country for Old Men; Li Mu Bai's lifelong restraint toward Yu Shu Lien — the words he could but never did say in Crouching Tiger."
    },
    {
        id: "drv_faith",
        name: "信仰", nameEn: "Faith",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "在没有证据的情况下相信某件事是真的，并以此为基石活下去。",
        defEn: "Believing something is true without evidence, and living upon that cornerstone.",
        core: "A面：信仰是凝固的极致——什么都不确定的世界里，你选了一个锚然后死死抓住。不需要被证明，只需要被相信。对有信仰的人，怀疑比死亡更可怕。/ B面：但信仰也能让你对真相免疫——你相信的变成唯一滤镜，不符合的证据自动被过滤。你不是在信真理，是用信仰回避真理。关键张力：信仰是出发点还是终点？它让你更自由，还是关进了看不见墙的房间？ | 驱力回路 (Trieb): 相信——不信的话，一切都会坍塌。",
        coreEn: "A-side: Faith is crystallization's ultimate — in a world where nothing is certain, you choose an anchor and hold fast. It needn't be proven, only believed. For the faithful, doubt is more terrifying than death. / B-side: But faith can immunize you against truth — what you believe becomes the sole filter, all contrary evidence automatically screened out. You're not believing truth; you're using belief to dodge it. Key tension: Is your faith a starting point or an endpoint? Does it make you freer, or lock you in a room with invisible walls? | Drive Circuit (Trieb): Believing — because if you don't, everything collapses.",
        reference: "《沉默》在上帝始终沉默的困境中仍然选择相信的神父；《少年派的奇幻漂流》'你更喜欢哪个故事？'——选择相信的权利。",
        referenceEn: "A priest choosing to believe despite God's perpetual silence in Silence; 'Which story do you prefer?' — the right to choose belief in Life of Pi."
    },
    {
        id: "drv_refusal_to_change",
        name: "拒变", nameEn: "Refusal to Change",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "世界已经不同了，但你拒绝承认。'我不管外面发生了什么。'",
        defEn: "The world has changed, but you refuse to acknowledge it. 'I don't care what's happening outside.'",
        core: "A面：拒变有时是清醒——不是所有变化都是进步。所有人随波逐流时，你站在原地本身就是判断：'这个方向是错的，我不去。'/ B面：但拒变更常见的面目是恐惧——你不是不同意新世界，是害怕无法在其中生存。'坚守'只是对适应能力缺乏的体面包装。关键张力：你拒绝改变是因为看到了别人没看到的，还是因为闭上了眼睛？ | 驱力回路 (Trieb): 拒绝——外面爱怎样怎样，我不出去。",
        coreEn: "A-side: Refusal to change is sometimes lucidity — not all change is progress. When everyone drifts with the current, standing still is itself a judgment: 'This direction is wrong; I won't go.' / B-side: But more often, refusal is fear — you don't disagree with the new world's direction; you fear you can't survive it. Your 'holding firm' is just respectful packaging for inability to adapt. Key tension: Do you refuse to change because you see what others don't, or because you've closed your eyes? | Drive Circuit (Trieb): Refusing — let the outside be what it will; I'm not going out.",
        reference: "《都灵之马》在风暴吞噬一切后仍然试图过日常生活的农夫；《日落大道》诺玛·德斯蒙德拒绝承认默片时代已经结束。",
        referenceEn: "A farmer still trying to live normally after storms devour everything in The Turin Horse; Norma Desmond refusing to admit the silent film era is over in Sunset Boulevard."
    },

    // ---- 病理性凝固：当保存变成执念，固定变成囚禁 ----

    {
        id: "drv_obsession",
        name: "执念", nameEn: "Obsession",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "一个想法占据了你全部的精神空间。你无法停止想它。",
        defEn: "A single thought occupying your entire mental space. You cannot stop thinking about it.",
        core: "A面：执念是凝固最纯粹的形式——全部能量集中在一个点上。这种极度专注有时能创造奇迹：世界上最伟大的作品往往来自执念者。/ B面：但执念的代价是除了那个点之外的一切都枯萎了——健康、关系、生活，全被那个想法吸干。不是你追它，是它追你。关键张力：执念是创造力的源泉，还是把你吃掉的怪物？ | 驱力回路 (Trieb): 定住——这个想法长在脑子里了，拔不掉。",
        coreEn: "A-side: Obsession is crystallization's purest form — all energy concentrated on a single point. This extreme focus sometimes works miracles: the world's greatest works often come from the obsessed. / B-side: But obsession's cost is everything else withering — your health, relationships, life, all drained by that one idea. You don't chase it; it chases you. Key tension: Is your obsession the source of creativity, or a monster eating you? Can you tell the difference? | Drive Circuit (Trieb): Fixed — this thought has grown into my brain; it can't be pulled out.",
        reference: "《鸟人》一个过气演员对百老汇成功的执念吞噬了他的家庭和理智；《爆裂鼓手》弗莱彻对完美演奏的执念摧毁了一个又一个学生。",
        referenceEn: "A washed-up actor's obsession with Broadway success consuming his family and sanity in Birdman; Fletcher's obsession with the perfect performance destroying student after student in Whiplash."
    },
    {
        id: "drv_hoarding",
        name: "囤积", nameEn: "Hoarding",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "无法丢弃任何东西。每一件物品都是一段记忆的物证，扔掉它们等于扔掉自己。",
        defEn: "Unable to discard anything. Every object is evidence of a memory; throwing them away means throwing away yourself.",
        core: "A面：囤积的起源是一种深层的珍惜——你觉得每样东西都有灵魂，扔掉它就是抛弃了一段关系。在物资匮乏年代长大的人囤积食物，在感情匮乏中长大的人囤积关系。这是一种对'失去'的先验恐惧。/ B面：但囤积最终会把你活埋——你被你保存的东西淹没了。房间里没有空间留给新的东西，你的人生也是。关键张力：你是在保存记忆，还是在用物品堵住你害怕面对的空虚？ | 驱力回路 (Trieb): 积攒——不能扔，扔掉了万一哪天需要呢。",
        coreEn: "A-side: Hoarding originates in deep cherishing — you feel everything has a soul; discarding means abandoning a relationship. Those raised in material scarcity hoard food; those raised in emotional scarcity hoard relationships. A priori fear of 'loss.' / B-side: But hoarding eventually buries you alive — drowned by what you've saved. No room for anything new in your space, or your life. Key tension: Are you preserving memory, or using objects to plug the emptiness you're afraid to face? | Drive Circuit (Trieb): Stockpiling — can't throw it away; what if you need it someday.",
        reference: "《公民凯恩》装满仓库的收藏品和那个永远找不到的'玫瑰花蕾'；《海上钢琴师》1900拒绝离开那艘船——船本身变成了他囤积的全部世界。",
        referenceEn: "Warehouse-filling collections and the eternally elusive 'Rosebud' in Citizen Kane; 1900 refusing to leave the ship — the vessel itself becoming his entire hoarded world in The Legend of 1900."
    },
    {
        id: "drv_rigidity",
        name: "僵化", nameEn: "Rigidity",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "I. 征服者叙事", altGroupEn: "The Master",
        def: "你的判断、习惯和方法已经固化成了不可改变的模式。",
        defEn: "Your judgments, habits, and methods have solidified into unchangeable patterns.",
        core: "A面：僵化是秩序的代价——你可靠、可预测、值得信任，正因为你从不改变。混乱世界里，僵化的人是可以依靠的柱子。/ B面：但柱子不能移动——环境剧变、旧规则失效时，你的可靠就变成了阻碍。你不是在坚持正确，只是没有能力改变了。关键张力：你的一致性是美德还是残疾？你选择不变，还是失去了改变的能力？ | 驱力回路 (Trieb): 硬化——做了太久同样的事，不知道还有别的方式了。",
        coreEn: "A-side: Rigidity is the cost of order — you're reliable, predictable, trustworthy precisely because you never change. In a chaotic world, a rigid person is a dependable pillar. / B-side: But pillars can't move — when environments shift and old rules fail, your reliability becomes obstruction. You're not holding onto the right thing; you've lost the ability to change. Key tension: Is your consistency a virtue or a disability? Do you choose not to change, or have you lost the capacity? | Drive Circuit (Trieb): Hardening — done the same thing for so long, you've forgotten there are other ways.",
        reference: "《日落大道》诺玛活在默片时代的规则里无法适应有声电影；《浮生一日》日复一日重复同样的动作直到动作本身替代了生活。",
        referenceEn: "Norma living by silent film rules unable to adapt to talkies in Sunset Boulevard; repeating the same actions day after day until the actions replace life itself in Life in a Day."
    },
    {
        id: "drv_living_in_past",
        name: "活在过去", nameEn: "Living in the Past",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "你的精神停留在某个已经结束的时刻。身体在现在，心在过去。",
        defEn: "Your spirit remains at a moment that has ended. Body in the present, heart in the past.",
        core: "A面：活在过去有时是忠诚——你拒绝放弃一段记忆，因为它定义了你是谁。'曾经的好日子'也许是生命中唯一完整的时候，你不愿接受它结束了。/ B面：但过去是无法更新的房间——你锁在了不再存在的世界里。身边的人在老去、成长、改变，你像定格的照片，微笑着但不属于任何时间线。关键张力：你在珍惜回忆，还是用回忆逃避不想面对的现在？ | 驱力回路 (Trieb): 回放——那时候多好啊，为什么不能永远是那时候。",
        coreEn: "A-side: Living in the past is sometimes loyalty — refusing to release a memory because it defines who you are. Those 'good old days' may be the only time you felt whole, and you won't accept it's over. / B-side: But the past is a room that can't be updated — you locked yourself in a world that no longer exists. People around you age, grow, change, while you're a frozen photograph: smiling but belonging to no timeline. Key tension: Are you cherishing memory, or using it to escape a present you don't want to face? | Drive Circuit (Trieb): Replay — those times were so good; why can't it always be then.",
        reference: "《了不起的盖茨比》盖茨比用全部财富试图重建五年前和黛西的那个夜晚；《海边的曼彻斯特》李永远活在火灾那天，无法向前走一步。",
        referenceEn: "Gatsby spending his entire fortune trying to recreate one night with Daisy five years ago in The Great Gatsby; Lee forever living on the day of the fire, unable to take a single step forward in Manchester by the Sea."
    },
    {
        id: "drv_fetishism",
        name: "恋物", nameEn: "Fetishism",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "把全部的情感投射到一个特定的物品上。那个东西变得比它本身重要一万倍。",
        defEn: "Projecting all emotion onto a specific object. That thing becomes ten thousand times more important than itself.",
        core: "A面：恋物是爱的凝缩——你把一段关系、记忆、感觉全部压缩进一个具体的东西里。死者的戒指、旧情人的围巾、童年的玩偶——微型纪念碑，全部世界藏在里面。/ B面：但恋物的危险是你爱物品胜过爱它代表的人——你抱着围巾哭，不是想念她，是怕放下围巾就彻底忘了她。物品变成了记忆的人质。关键张力：你爱的是这个东西，还是它帮你逃避的事实——她已经走了？ | 驱力回路 (Trieb): 抓紧——只要这个东西还在，一切就都在。",
        coreEn: "A-side: Fetishism is love condensed — you compress an entire relationship, memory, feeling into one concrete thing. A dead person's ring, an ex's scarf, a childhood doll — miniature monuments containing your whole world. / B-side: But fetishism's danger is loving the object more than what it represents — you cry into the scarf not because you miss her but because you fear releasing it means forgetting her entirely. The object becomes memory's hostage. Key tension: Do you love this thing, or the fact it helps you escape — that she's gone? | Drive Circuit (Trieb): Gripping — as long as this thing remains, everything remains.",
        reference: "《公民凯恩》'玫瑰花蕾'——一个雪橇承载了一个帝国创始人全部的童年和失落；《星际穿越》库珀留给女儿的那块手表变成了跨越时空的爱的载体。",
        referenceEn: "'Rosebud' — a sled bearing the entirety of a mogul's childhood and loss in Citizen Kane; Cooper's watch left for his daughter becoming a vessel of love across spacetime in Interstellar."
    },
    {
        id: "drv_petrification",
        name: "石化", nameEn: "Petrification",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "IV. 观照者叙事", altGroupEn: "The Observer",
        def: "在极度恐惧或创伤面前完全冻住。无法思考、无法行动、无法逃跑。",
        defEn: "Completely freezing before extreme fear or trauma. Unable to think, act, or flee.",
        core: "A面：石化是身体对不可承受之重的保护——恐惧大到神经系统无法处理时，它选择关机而不是崩溃。不是懦弱，是生物学层面的紧急制动。/ B面：但石化成为常态就是活死人状态——身体在但你不在了。像困在石头里的雕像，看得到外面却无法互动。关键张力：石化保护了你，但如果永远不解冻——保护和毁灭有什么区别？ | 驱力回路 (Trieb): 僵死——被恐惧钉在原地，连呼吸都忘了。",
        coreEn: "A-side: Petrification is the body's protection against the unbearable — when fear exceeds what the nervous system can process, it chooses shutdown over breakdown. Not cowardice but biological emergency braking. / B-side: But when petrification becomes permanent, it's a living death — your body is present but you are not. Like a statue trapped in stone, you can see the world outside but can't interact. Key tension: Petrification protected you, but if you never thaw — what's the difference between protection and destruction? | Drive Circuit (Trieb): Frozen stiff — pinned in place by fear, forgetting even to breathe.",
        reference: "《钢琴家》在被发现的瞬间完全冻住、无法移动的犹太音乐家；《房间》从囚室中被解救出来后面对真实世界完全石化的母亲。",
        referenceEn: "A Jewish pianist completely freezing upon being discovered, unable to move in The Pianist; a mother entirely petrified facing the real world after being rescued from captivity in Room."
    },
    {
        id: "drv_time_capsule",
        name: "时间胶囊", nameEn: "Time Capsule",
        group: "D. 凝固的驱力", groupEn: "The Crystallization",
        altGroup: "II. 探秘者叙事", altGroupEn: "The Investigator",
        def: "把一个时刻完封不动地密封起来。拒绝让时间触碰它。",
        defEn: "Sealing a moment completely intact. Refusing to let time touch it.",
        core: "A面：时间胶囊是对完美瞬间最极端的守护——你知道美好的东西会腐朽，所以在最完美的时刻把它冻住。每件艺术品都是时间胶囊：一首诗把一个瞬间的感受永远保存下来。/ B面：但被密封的东西停止了生长——你保存的不是活物，是标本。拒绝让它改变，也就拒绝了让它活。关键张力：保存一个完美的瞬间——和杀死它——是同一个动作吗？ | 驱力回路 (Trieb): 封存——不能让这一刻永远持续，至少不让它腐烂。",
        coreEn: "A-side: The time capsule is the most extreme guard of a perfect instant — you know all beautiful things decay, so you freeze it at its most perfect moment. In a way, every artwork is a time capsule: a poem preserving one instant's feeling forever. / B-side: But what's sealed stops growing — you've preserved not a living thing but a specimen. By refusing it change, you refused it life. Key tension: Is preserving a perfect moment and killing it the same act? | Drive Circuit (Trieb): Sealing — if I can't make this moment last forever, at least I can keep it from rotting.",
        reference: "《盗梦空间》柯布在潜意识深处完美保存了已故妻子的影像但它已经不是她了；《了不起的盖茨比》盖茨比要求的不是黛西，而是五年前那个完美夜晚的精确复刻。",
        referenceEn: "Cobb perfectly preserving his dead wife's image deep in his subconscious but it's no longer her in Inception; Gatsby demanding not Daisy but an exact replica of that perfect night five years ago in The Great Gatsby."
    }
];
