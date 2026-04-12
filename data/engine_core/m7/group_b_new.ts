import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 凝固为符号 (Crystallized Into Symbol) - 16 Items
    // 结局落点：那个扣住三界的东西，凝固成了一个具体的符号——
    // 一种感觉、一件物品、一句话、一个地点。你忘不掉它。
    // ============================================================
    {
        id: "res_sensory_anchor",
        name: "感官锚定", nameEn: "Sensory Anchoring",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，整段经历浓缩进了一种感觉——某种气味、某段旋律、某束光线。它出现的时候，一切都回来了。",
        defEn: "After the dust settles, the entire experience condensed into one sensation — a smell, a melody, a beam of light. When it appears, everything returns.",
        core: "A面：你的身体替你保存了一份最精确的档案——某种气味能在零点几秒内把你送回那个场景，比任何照片都快。你不需要刻意去想，感觉自己会来找你。/ B面：但你控制不了它什么时候来。出租车里、超市广播里——你无法给一种气味设防。你被一种无处不在的东西追踪着。关键张力：那个感觉是你保管记忆的保险箱——还是一把别人随时能触发的枪？ | 结局回路 (Residuum): 你只是走进一家店。然后那种感觉来了。然后你出不来了。",
        coreEn: "A-side: Your body kept the most precise archive — a scent can transport you back in a fraction of a second, faster than any photo. You don't need to try; the feeling comes to find you. / B-side: But you can't control when it comes. In a taxi, a supermarket speaker — you can't lock out a smell. You're tracked by something omnipresent. Key tension: Is that feeling your safe for memories — or a gun anyone can fire? | Residuum: You just walked into a shop. Then that feeling came. Then you couldn't leave.",
        reference: "《追忆似水年华》一块玛德莱娜蛋糕的气味打开了整座记忆宫殿；《美丽心灵的永恒阳光》即使记忆被擦除，某种感官残留仍在潜意识中召唤他。",
        referenceEn: "A madeleine's scent unlocking an entire palace of memory in In Search of Lost Time; even with memory erased, a sensory residue still summoning him from the subconscious in Eternal Sunshine of the Spotless Mind."
    },
    {
        id: "res_object_sacred",
        name: "物件圣化", nameEn: "Object Sanctification",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一件普通的东西变成了圣物——因为它属于那个人，属于那段时光。你不敢丢、不敢碰、不敢让别人动。",
        defEn: "After the dust settles, an ordinary thing became sacred — because it belonged to that person, that time. You dare not discard, touch, or let anyone handle it.",
        core: "A面：这件东西是那个人曾经存在过的物理证明——记忆会褪色，但它是实在的，你可以摸到它。所有的回忆都会骗你，但这件东西不会。/ B面：但你活着的一部分被绑在了一件死物上。它也在衰败——气味消散，布料发脆。有一天它上面什么都没有了。关键张力：你守护的是那个人——还是你已经把全部感情转移到了一件东西上？ | 结局回路 (Residuum): 抽屉最里面。谁都不准动。",
        coreEn: "A-side: This thing is physical proof that person existed — memories fade, but it's tangible, you can touch it. Every recollection can deceive you, but this thing won't. / B-side: But part of your life is tied to a dead thing. It's decaying too — scent dissipating, fabric going brittle. One day nothing will be left on it. Key tension: Are you guarding that person — or have you transferred all feeling onto a thing? | Residuum: Deepest drawer. Nobody touches it.",
        reference: "《断背山》恩尼斯衣柜里杰克的旧衬衫——不允许任何人碰它；《索拉里斯》空间站里保存的妻子遗物——在一个连记忆都能被复制的世界里，唯一真实的只剩那件旧东西。",
        referenceEn: "Jack's old shirt in Ennis's closet — nobody allowed to touch it in Brokeback Mountain; the wife's belongings kept aboard the station — in a world where even memories can be replicated, only the old thing remains real in Solaris."
    },
    {
        id: "res_language_crystal",
        name: "语言凝核", nameEn: "Language Nucleation",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，整段经历浓缩成了一句话。这句话刻在主体脑子里，反复播放，怎么也甩不掉。",
        defEn: "After the dust settles, the entire experience condensed into one sentence. It's carved in the subject's mind, replaying endlessly, impossible to shake.",
        core: "A面：你把混沌的痛苦提炼成了一颗结晶——一句话扛住了全部重量。你用语言征服了那段经历，把它装进了容器。/ B面：但那句话也可能是一座监狱。不管你走多远，它像一根刺卡在记忆里拔不出来。你越想忘，它越清楚。关键张力：那句话是你驯服经历的证据——还是经历在你身上烙下的印？ | 结局回路 (Residuum): 一百年后你可能忘记所有细节。但那句话你会带进棺材。",
        coreEn: "A-side: You distilled chaotic pain into a crystal — one sentence carrying all the weight. You conquered the experience with language, contained it. / B-side: But that sentence may be a prison. No matter how far you go, it's a thorn lodged in memory. The more you try to forget, the clearer it gets. Key tension: Is that sentence proof you tamed the experience — or the experience's brand on you? | Residuum: A hundred years from now you may forget all the details. But that sentence you'll carry to the grave.",
        reference: "《教父》'我会给他一个无法拒绝的条件'——一句话凝缩了整个权力拓扑；《银翼杀手》罗伊临死前'雨中的泪水'——所有记忆凝缩成一句遗言。",
        referenceEn: "'I'll make him an offer he can't refuse' — one sentence condensing the entire power topology in The Godfather; Roy's 'tears in rain' — all memories condensed into a dying sentence in Blade Runner."
    },
    {
        id: "res_spatial_imprint",
        name: "空间烙印", nameEn: "Spatial Imprint",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一个地点不再是普通的地方了——一棵树下、一个路口、一间房间——它变成了纪念碑，或者禁区。",
        defEn: "After the dust settles, a place is no longer ordinary — under a tree, at an intersection, a room — it became a monument, or an exclusion zone.",
        core: "A面：每次经过那里都是一次无声的朝圣。那个地方因为你的经历获得了神圣性——从地图上普通的一点，变成了内心地图的中心。/ B面：但你也被那个地点困住了。你不敢走那条路。你可以扔掉遗物、关掉歌曲——但你不能从地球上删掉一个地方。关键张力：那个地点是你的圣地——还是你的禁区？ | 结局回路 (Residuum): 你绕了三条街。就是为了不经过那个路口。",
        coreEn: "A-side: Every time you pass there is a silent pilgrimage. That place gained sanctity through your experience — from an ordinary map point to the center of your inner map. / B-side: But you're trapped by it too. You dare not take that road. You can discard relics, turn off songs — but you can't delete a location from earth. Key tension: Is that place your holy site — or your exclusion zone? | Residuum: You took a three-block detour. Just to avoid that intersection.",
        reference: "《请以你的名字呼唤我》那个意大利小镇广场——对以利奥来说那里是一整个夏天凝固的琥珀；《潜行者》禁区中心那个'房间'——据说能实现愿望，但没有人敢真正走进去。",
        referenceEn: "The Italian town square — an entire summer frozen in amber for Elio in Call Me by Your Name; the 'Room' at the Zone's center — said to fulfill wishes, but no one dares truly enter in Stalker."
    },
    {
        id: "res_temporal_rift",
        name: "时间裂口", nameEn: "Temporal Rift",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一个日期把时间切成了'之前'和'之后'。从此每年到了这一天，它就不再是普通的日子。",
        defEn: "After the dust settles, a date sliced time into 'before' and 'after.' Every year when this day comes, it's no longer ordinary.",
        core: "A面：你的生命被那个日期切成了两个人——之前的你和之后的你。这种分裂本身证明你经历过足够重大的事件。/ B面：但日期每年都会回来。你无法删掉它、无法跳过它。每一次它到来，你都要重新经历一次那个切口。关键张力：每年的那一天你是在纪念——还是在重新受伤？ | 结局回路 (Residuum): 日历翻到了那一页。你假装没注意到。但你的身体知道。",
        coreEn: "A-side: Your life was cut into two people by that date — the you before and the you after. The split itself proves you lived through something momentous. / B-side: But the date returns every year. You can't delete it, can't skip it. Each time it comes, you re-experience the cut. Key tension: Each year on that day, are you commemorating — or re-wounding? | Residuum: The calendar turned to that page. You pretended not to notice. But your body knew.",
        reference: "《海边的曼彻斯特》每年大火周年日的沉默崩溃；《降临》路易斯明知女儿的死亡日期却依然选择了那个未来——每年那一天都是预知的刀口。",
        referenceEn: "The silent collapse every fire anniversary in Manchester by the Sea; Louise knowing her daughter's death date yet choosing that future — each year that day is a foreseen blade in Arrival."
    },
    {
        id: "res_body_inscription",
        name: "身体铭刻", nameEn: "Body Inscription",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，身体上留下了永久的痕迹——一条疤、一根白发、一种再也恢复不了的姿态。整段经历写在了皮肤上。",
        defEn: "After the dust settles, the body carries a permanent mark — a scar, white hair, a posture that never recovered. The entire experience is written on the skin.",
        core: "A面：你的身体替你记住了你理智不愿承认的东西——它不会褪色、不会被篡改。每次你看到它，就是在重读你活过的证据。/ B面：但你没办法不看到它。换衣服、洗澡、和新的人亲密——它就在那里，无声地讲述一个你也许不想再讲的故事。关键张力：那个印记是你活过的凭证——还是一个你关不掉的叙述者？ | 结局回路 (Residuum): 你摸了一下那个位置。你的手指知道它在哪里。",
        coreEn: "A-side: Your body remembered what your mind refused to admit — it won't fade, can't be falsified. Every time you see it, you reread proof you lived. / B-side: But you can't not see it. Changing clothes, bathing, being intimate — it's there, silently telling a story you may not want to retell. Key tension: Is that mark proof you lived — or a narrator you can't turn off? | Residuum: You touched that spot. Your fingers know exactly where it is.",
        reference: "《辛德勒的名单》幸存者手臂上烙印的编号——一辈子洗不掉的身份铭文；《攻壳机动队》义体化后唯一保留的那道旧伤疤——在全身都可以替换的世界里，疤痕是最后的身份证。",
        referenceEn: "The number branded on survivors' arms — identity inscriptions that never wash off in Schindler's List; the one old scar kept after full cyborg conversion — in a world where everything is replaceable, the scar is the last ID in Ghost in the Shell."
    },
    {
        id: "res_ritual_lock",
        name: "仪式锁定", nameEn: "Ritual Lock",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一个与那个人有关的日常动作变成了每天不可打破的仪式。停下来就等于承认一切真的结束了。",
        defEn: "After the dust settles, a daily action tied to that person became an unbreakable ritual. Stopping would mean admitting it's truly over.",
        core: "A面：你的双手在替你的心守灵——每重复一次那个动作，你就在确认那个人曾经存在过。你不需要语言，身体每天都在替你纪念。/ B面：但仪式会慢慢变成囚笼。你不知道自己是在纪念还是在困住自己——你不敢停下来，因为停下来的那天太难面对。关键张力：你还在重复那个动作是因为爱——还是因为停下来的那天你承受不住？ | 结局回路 (Residuum): 你倒了两杯水。然后把第二杯倒掉。然后第二天又倒了两杯。",
        coreEn: "A-side: Your hands are keeping vigil for your heart — each repetition confirms that person once existed. You don't need language; your body remembers daily. / B-side: But the ritual slowly becomes a cage. You don't know if you're remembering or trapping yourself — you don't dare stop because the day you stop is too hard to face. Key tension: Are you still repeating from love — or because the day you stop is more than you can bear? | Residuum: You poured two cups. Then poured the second away. Then poured two again the next day.",
        reference: "《飞屋环游记》卡尔每天重复和妻子建立的全部生活仪式；《步履不停》母亲每年忌日都做同一桌菜，仿佛儿子还会回来吃。",
        referenceEn: "Carl repeating every life ritual built with his wife in Up; the mother setting the same table every anniversary as if her son will return to eat in Still Walking."
    },
    {
        id: "res_face_overwrite",
        name: "面容覆写", nameEn: "Face Overwrite",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，你见到那个人的最后一面凝固在了记忆里——那张脸的表情覆盖了你对那个人所有其他的印象。",
        defEn: "After the dust settles, the last time you saw that person froze in memory — that expression overwrote every other impression of them.",
        core: "A面：那张脸是全世界只有你看到的——在那个瞬间，那个人的样子只属于你。这份画面变成了你们之间最私密的告别。/ B面：但最后那张脸会替换掉之前所有的脸。你认识那个人二十年——但现在只记得最后那个表情。二十年被一秒覆盖了。关键张力：最后那张脸是那个人的真相——还是你记忆的不公正剪辑？ | 结局回路 (Residuum): 你想起他在笑。但记忆只给你那张最后的脸。",
        coreEn: "A-side: That face is something only you saw — in that instant, that person's appearance belonged only to you. This image became your most intimate farewell. / B-side: But the last face replaces all previous faces. You knew them twenty years — but now only the final expression remains. Twenty years overwritten by one second. Key tension: Is the last face that person's truth — or your memory's unjust edit? | Residuum: You try to remember them smiling. But memory only gives you that last face.",
        reference: "《霸王别姬》程蝶衣记住的段小楼最后那张脸——不是戏台上的英武，是批斗会上的怯懦；《索拉里斯》科学家记忆中妻子的脸永远停在死前的表情——空间站的幻影只能重复那一张脸。",
        referenceEn: "Cheng Dieyi's memory of Xiaolou's last face — not the stage hero, but the coward at the denunciation in Farewell My Concubine; the scientist's memory of his wife's face frozen at her dying expression — the station's phantom can only repeat that one face in Solaris."
    },
    {
        id: "res_vow_remains",
        name: "誓言遗骸", nameEn: "Vow Remains",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一句曾经说出口的承诺还活着。它指涉的一切都已改变或消失，但那句话还在绑着你。",
        defEn: "After the dust settles, a promise once spoken is still alive. Everything it referred to has changed or vanished, but the sentence is still binding you.",
        core: "A面：那句誓言是你最后的重力——即使世界已经变了，你对那句话的忠诚证明你说到做到。它让你不至于在混乱中飘走。/ B面：但现实已经变了。你守着一句话不放，可能不是忠诚——是害怕承认那个誓言已经作废。关键张力：你还在守那句话——是因为它还有效，还是因为放弃它等于承认一切都白费了？ | 结局回路 (Residuum): 那个人已经不在了。但你答应过。所以你还在做。",
        coreEn: "A-side: That vow is your last gravity — even as the world changed, your loyalty proves you keep your word. It keeps you from drifting. / B-side: But reality changed. Clinging to a sentence may not be loyalty — it may be fear of facing the vow expired. Key tension: Are you still keeping that vow because it's valid, or because abandoning it means everything was for nothing? | Residuum: That person is gone. But you promised. So you keep doing it.",
        reference: "《卧虎藏龙》李慕白一生被一句未兑现的誓言绑住至死；《星际穿越》库珀对女儿说的'我会回来的'——这句话穿越了时空，变成了比物理法则更坚硬的东西。",
        referenceEn: "Li Mu Bai bound his entire life by an unfulfilled vow until death in Crouching Tiger, Hidden Dragon; Cooper's 'I will come back' — a sentence that crossed spacetime, becoming harder than physics in Interstellar."
    },
    {
        id: "res_dream_circuit",
        name: "梦的回路", nameEn: "Dream Circuit",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，同一个梦反复出现。细节每次不同，但核心场景永远是那一个。醒来就忘，但它总会回来。",
        defEn: "After the dust settles, the same dream keeps returning. Details shift, but the core scene is always the same. Forgotten upon waking, but it always comes back.",
        core: "A面：梦是你意识不愿面对、但潜意识坚持重播的东西——那个反复出现的梦说明有什么真相你还没消化。/ B面：但这个梦你做了几百遍了。它不在帮你消化——它在让你重复。你醒来是疲惫的，因为睡眠中仍在经历那件事。关键张力：那个梦是在帮你处理——还是潜意识陷进了死循环？ | 结局回路 (Residuum): 你又做了那个梦。你在梦里想叫醒自己。但你做不到。",
        coreEn: "A-side: Your subconscious is doing homework for you — what day couldn't process, it repairs at night. The dream is an inner craftsman patching cracks in the dark. It's still working, meaning you haven't given up. / B-side: But the same dream returning may mean repair failed — the same problem attempted a thousand times, still unsolved. Your subconscious is stuck. Key tension: Is that dream inner self-healing — or a broken record skipping at the same groove? | Residuum: You had that dream again. Couldn't describe it when you woke. But the pillow was wet.",
        reference: "《老无所依》老警长最后讲的那个关于父亲在雪中举着火的梦——整部电影的意义凝缩在一个梦里；《盗梦空间》柯布在每一层梦境中都看到妻子——那个反复出现的身影既是他的圣状也是他的症状。",
        referenceEn: "The old sheriff's final dream of his father carrying fire through snow — the entire film's meaning condensed into one dream in No Country for Old Men; Cobb seeing his wife in every dream layer — that recurring figure both his sinthome and symptom in Inception."
    },
    {
        id: "res_name_alienation",
        name: "名字异化", nameEn: "Name Alienation",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一个曾经让主体心跳加速的名字，现在听到它的时候心里的味道完全不同了。",
        defEn: "After the dust settles, a name that once made the subject's heart race now tastes entirely different when heard.",
        core: "A面：你不再是那个听到这个名字就紧张的人了——你对那个人的感情完成了化学反应。你从那段关系里毕业了。/ B面：但毕业不是解脱。那个名字没有变成中性的——它变成了一种你说不清的复杂味道。不是恨也不是想念，是你每次听到都要停顿一秒的东西。关键张力：那个名字对你还有意义——还是只是一个让身体微微发紧的条件反射？ | 结局回路 (Residuum): 有人提到了那个名字。你假装没听到。但你的呼吸停了一拍。",
        coreEn: "A-side: You're no longer the person who tensed at this name — your feelings completed a chemical reaction. You graduated from that bond. / B-side: But graduation isn't relief. The name didn't become neutral — it became a flavor you can't identify. Not hatred, not longing. Something that makes you pause internally each time. Key tension: Does the name still mean something — or is it just a conditioned reflex? | Residuum: Someone mentioned that name. You pretended not to hear. But your breathing stopped for one beat.",
        reference: "《请以你的名字呼唤我》'以利奥'三个字在分别后从甜变成了一种说不出的酸；《东邪西毒》欧阳锋再也无法正常说出'大嫂'两个字。",
        referenceEn: "'Elio' turning from sweet to an indefinable sourness after parting in Call Me by Your Name; Ouyang Feng never again able to normally say 'sister-in-law' in Ashes of Time."
    },
    {
        id: "res_narrative_version",
        name: "叙事版本", nameEn: "Narrative Version",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，混乱的、矛盾的真实经历被压缩成了一个干净的、可以讲给别人听的'版本'。真相被封存在了叙事之下。",
        defEn: "After the dust settles, chaotic, contradictory real experience was compressed into a clean, tellable 'version.' The truth is sealed beneath the narrative.",
        core: "A面：你把不可承受的混乱整理成了一个有因果的故事——语言成了你的盔甲，你终于可以说出'那件事'而不颤抖了。/ B面：但那个'版本'已经不是真的了。你讲了太多遍，连自己都开始相信简化版。那些羞耻的、矛盾的部分——被你的叙事埋葬了。关键张力：你讲给别人的那个版本——是你对经历的掌控，还是对真相的逃避？ | 结局回路 (Residuum): 你又讲了一遍那个故事。每次都更流畅。每次都离真相更远。",
        coreEn: "A-side: You organized the unbearable chaos into a story with causes and an ending. This lets you discuss it without collapsing. Language became your armor — you can finally say 'that thing' without trembling. / B-side: But that 'version' is no longer true. You told it so many times, even you began believing the simplified edition. The shameful, contradictory, illogical parts — buried by your narrative. Key tension: Is the version you tell others mastery of the experience — or escape from truth? | Residuum: You told that story again. Each time more fluent. Each time further from the truth.",
        reference: "《赎罪》布莱奥尼用一生写出的那个版本——她在小说里给了恋人们一个团圆结局，但真相是他们都死了；《大鱼》父亲用传奇故事包裹的一生——儿子至死才明白哪些是真的哪些是编的。",
        referenceEn: "Briony's lifelong written version — she gave the lovers a reunion in her novel, but the truth is they both died in Atonement; the father's life wrapped in tall tales — the son only at death understanding what was real and what was invented in Big Fish."
    },
    {
        id: "res_substitute",
        name: "替代转嫁", nameEn: "Substitute Transfer",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，对那个人的全部感情被不自觉地转移到了一个替代物上——另一个人、一项事业、一个习惯。原件不在了，但欲望还在运转。",
        defEn: "After the dust settles, all feelings for that person were unconsciously transferred onto a substitute — another person, a cause, a habit. The original is gone, but desire still runs.",
        core: "A面：你的欲望需要出口，旧的关闭了，你自动找了新的。这种灵活性让你能继续活下去，不被失去的对象永远锁死。/ B面：但替代物永远不是原件。你在新的人身上寻找旧的影子，在新的事业里重复旧的模式。你以为翻过了那一页——其实在另一本书里读同一个故事。关键张力：你真的爱上了新的人——还是只是在用他们填那个旧的洞？ | 结局回路 (Residuum): 你抱着新的人。但你闭上眼睛的时候想的是谁？",
        coreEn: "A-side: Your desire needs an outlet; the old one closed, you automatically found a new one. This flexibility lets you keep living, not permanently locked by a lost object. You didn't stop — you switched roads. / B-side: But the substitute is never the original. You seek old shadows in the new person, repeat old patterns in new ventures. You think you turned the page — but you're reading the same story in a different book. Key tension: Did you truly love the new person — or are you just using them to fill the old hole? | Residuum: You're holding someone new. But when you close your eyes, who are you thinking of?",
        reference: "《迷失东京》两个在异乡用彼此替代各自缺失的人——他们都知道对方是替代品，但假装不知道；《飞向太空》空间站制造出来的妻子幻影——一个完美的替代品，但它越完美就越提醒你原件已经不在了。",
        referenceEn: "Two people in a foreign city using each other to substitute what they each lacked — both knowing, both pretending not to in Lost in Translation; the wife-phantom manufactured by the station — a perfect substitute, but the more perfect it is, the more it reminds you the original is gone in Solaris."
    },
    {
        id: "res_taboo_trigger",
        name: "禁忌触点", nameEn: "Taboo Trigger",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，某个本来无害的东西——一个词、一种天气、一个动作——因为与那段经历关联而被永久充电，变成了碰不得的开关。",
        defEn: "After the dust settles, something originally harmless — a word, a type of weather, a gesture — was permanently charged through association, becoming an untouchable switch.",
        core: "A面：你的神经系统比意识更诚实——它替你记住了你不愿承认的连接。在理智来不及反应之前，身体已经拉响了警报。/ B面：但禁忌触点会扩散。最初只是一个场景，然后和它相关的一切都变成禁区。你的世界在慢慢缩小'不行'。关键张力：那些禁忌是在保护你——还是在把你的世界缩成一间越来越小的房间？ | 结局回路 (Residuum): 你避开了那个东西。然后避开和它相关的东西。然后发现需要避开的越来越多。",
        coreEn: "A-side: Your nervous system is more honest than your consciousness — it remembers connections you refuse to acknowledge. Before your reason reacts, the body has already sounded the alarm. That trigger proves everything you experienced was real. / B-side: But taboo triggers spread. First one scene, then everything related becomes forbidden. Your world slowly shrinks, more and more things becoming 'no.' Key tension: Are those taboos protecting you — or slowly shrinking your world into an ever-smaller room? | Residuum: You avoided that thing. Then things related to it. Then you found there was more and more to avoid.",
        reference: "《钢琴家》战后多年听到雷声仍然蹲下的斯皮尔曼——雷声变成了永久的触发器；《美丽心灵的永恒阳光》擦除记忆后仍然莫名回避蒙托克海滩——身体记得意识已经删掉的东西。",
        referenceEn: "Szpilman still crouching at thunder years after the war — thunder became a permanent trigger in The Pianist; the protagonist inexplicably avoiding Montauk beach after memory erasure — the body remembers what consciousness deleted in Eternal Sunshine of the Spotless Mind."
    },
    {
        id: "res_departing_seal",
        name: "背影封存", nameEn: "Departing Seal",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，某人离开时的最后一个画面——那个越来越小的轮廓——成了关于那个人的永久封印。你再也想不起别的了。",
        defEn: "After the dust settles, the last image of someone leaving — that shrinking silhouette — became the permanent seal on that person. You can't recall anything else.",
        core: "A面：背影是最诚实的告别——不需要表情管理，不需要最后一句体面的话。一个人转身走掉的方式比他面对你的方式更真实。你看到了他最不设防的那一秒。/ B面：但背影也是最残忍的画面——你看不到那个人的脸。他走的时候是什么表情？在哭吗？松了口气吗？你永远不会知道。关键张力：你记住的背影是离开的真相——还是你永远无法验证的猜测？ | 结局回路 (Residuum): 他走了。你想叫住他。但你没有。然后他就不见了。",
        coreEn: "A-side: A departing back is the most honest farewell — no managed expression, no dignified last words. How someone turns away is more real than how they face you. You saw their most unguarded second. / B-side: But a departing back is the cruelest image — you can't see their face. Crying? Relieved? You'll never know. Key tension: Is the back you remember the truth of leaving — or a guess you can never verify? | Residuum: They left. You wanted to call out. You didn't. Then they were gone.",
        reference: "《背影》朱自清看父亲翻过月台买橘子的背影——一辈子最深的泪点是那个笨拙的、努力翻越的背影；《银翼杀手》罗伊在雨中松开手、身体向后倾倒——一个人造人比人类更人类的最后一秒。",
        referenceEn: "Zhu Ziqing watching his father's back climbing the platform to buy oranges — life's deepest tears from that clumsy, effortful back in The Sight of Father's Back; Roy releasing the dove, body tilting backward in rain — a replicant more human than human in his final second in Blade Runner."
    },
    {
        id: "res_lie_architecture",
        name: "谎言建筑", nameEn: "Architecture of Lies",
        group: "B. 凝固为符号", groupEn: "Crystallized Into Symbol",
        def: "尘埃落定后，一个谎言生根发芽，需要更多的谎来维护，最终长成了一栋你住在里面的建筑。你不敢拆任何一面墙。",
        defEn: "After the dust settles, a lie took root, needing more lies to sustain it, eventually growing into a building you live inside. You dare not remove any wall.",
        core: "A面：有些谎言是建筑材料——你用它撑住了一段关系、一个人的信心、或者一个家庭。你的不诚实拯救了你不忍心看倒塌的东西。/ B面：但谎言会生长。一个小谎需要十个来维护，再各自需要十个。你建了一座谎言建筑，每一面墙都是一个秘密。关键张力：那个谎言保护了什么——但它也永远改变了你和真相之间的关系。 | 结局回路 (Residuum): 你说了一句不是真的话。那句话活了下来。真相死了。而你住在那句话盖的房子里。",
        coreEn: "A-side: Some lies are building materials — you used it to hold up a relationship, someone's confidence, or a family. That lie wasn't deception; it was doing the right thing the wrong way. Your dishonesty saved things you couldn't bear to watch fall. / B-side: But lies grow. One small lie needs ten to maintain, then each ten needs ten more. You built a building of lies; now you live inside, every wall a secret no one can know. Key tension: That lie protected something — but it permanently altered your relationship with truth. | Residuum: You said something untrue. That sentence survived. The truth died. And you live in the house that sentence built.",
        reference: "《赎罪》布莱奥尼一个童年的谎言毁掉了两个人的一生——那个谎言比她活得更久；《美丽人生》父亲在集中营里为儿子编造的'这是一场游戏'——史上最温柔的欺骗，也是最精密的谎言建筑。",
        referenceEn: "Briony's childhood lie destroying two lives — that lie outlived her in Atonement; the father's 'this is a game' for his son in the camp — history's most tender deception, and most elaborate architecture of lies in Life Is Beautiful."
    },
];
