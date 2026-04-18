import { LibraryItemDef } from '../../../types';

export const OUTCOMES_GROUP_B: LibraryItemDef[] = [
    // ============================================================
    // GROUP B. 凝固的图腾 (The Frozen Totem) - 19 Items
    // 结局落点：那个扣住三界的东西，凝固成了一个具体的符号——
    // 一种感觉、一件物品、一句话、一个地点。你忘不掉它。
    // ============================================================
    {
        id: "res_sensory_anchor",
        name: "感官锚定", nameEn: "Sensory Anchoring",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，整段经历浓缩进了一种感觉——某种气味、某段旋律、某束光线。它出现的时候，一切都回来了。",
        defEn: "After the dust settles, the entire experience condensed into one sensation — a smell, a melody, a beam of light. When it appears, everything returns.",
        core: "A面：气味是最诚实的时间机器——它不经过大脑直接触发。你的身体比你更忠诚于那段记忆。/ B面：但你被一个感官细节绑架了。整个世界变成了地雷阵——任何相似的气味都可能把你炸回去。关键张力：那个感官是通道还是陷阱？ | 圣状余痕(Σ): 你闻到了那个味道。腿软了一秒。然后假装什么都没发生。",
        coreEn: "A-side: Your body kept the most precise archive — a scent can transport you back in a fraction of a second, faster than any photo. You don't need to try; the feeling comes to find you. / B-side: But you can't control when it comes. In a taxi, a supermarket speaker — you can't lock out a smell. You're tracked by something omnipresent. Key tension: Is that feeling your safe for memories — or a gun anyone can fire? | Residuum: You just walked into a shop. Then that feeling came. Then you couldn't leave.",
        topology: "整段经历坍缩进一个感官奇点——一缕气味成为折叠了全部时空的虫洞入口。",
        topologyEn: "The entire experience collapses into a sensory singularity — a wisp of scent becomes a wormhole entrance folding all of spacetime.",
        directive: {
            bright: "他走进一家陌生的咖啡馆。某种气味击中了他。整个世界退后了一步，他被轻轻地送回了那个下午——阳光、笑声、桌上的水渍。让读者感到温暖和心疼同时涌上来。他的身体比他更忠诚，替他保管了他以为早就丢掉的东西。那一秒钟，失去的一切都还在。",
            dark: "他在超市货架前闻到了那个味道。腿软了。视线模糊了。他被一条看不见的绳子拖回了他不想回去的地方。他无法屏蔽自己的鼻子。整个城市变成了一片雷区——任何一个角落都可能埋着那个味道，随时把他炸回原点。他的身体是叛徒，替他记住了他拼命想忘的东西。",
            tension: "他闻到了。他停下来了。脸上什么表情都没有。让读者看不出他是被治愈了还是被击溃了——也许两件事在同一秒发生。那个味道是时光机还是地雷？他自己也不知道。他站在原地多待了三秒。然后走了。像什么都没发生。但什么都发生了。"
        },
        reference: "《追忆似水年华》一块玛德莱娜蛋糕的气味打开了整座记忆宫殿；《美丽心灵的永恒阳光》即使记忆被擦除，某种感官残留仍在潜意识中召唤他。",
        referenceEn: "A madeleine's scent unlocking an entire palace of memory in In Search of Lost Time; even with memory erased, a sensory residue still summoning him from the subconscious in Eternal Sunshine of the Spotless Mind."
    },
    {
        id: "res_object_sacred",
        name: "物件圣化", nameEn: "Object Sanctification",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一件普通的东西变成了圣物——因为它属于那个人，属于那段时光。你不敢丢、不敢碰、不敢让别人动。",
        defEn: "After the dust settles, an ordinary thing became sacred — because it belonged to that person, that time. You dare not discard, touch, or let anyone handle it.",
        core: "A面：你把一个普通物件升格成了圣物——它是你和那段经历之间最后的物理连接。/ B面：但那个东西本身什么都不是。你的全部感情被投射到了一个不会回应的物体上。关键张力：你在保存记忆——还是在崇拜一个替代品？ | 圣状余痕(Σ): 那个东西掉地上了。你的心跳停了一拍。它只是个东西。但不是。",
        coreEn: "A-side: This thing is physical proof that person existed — memories fade, but it's tangible, you can touch it. Every recollection can deceive you, but this thing won't. / B-side: But part of your life is tied to a dead thing. It's decaying too — scent dissipating, fabric going brittle. One day nothing will be left on it. Key tension: Are you guarding that person — or have you transferred all feeling onto a thing? | Residuum: Deepest drawer. Nobody touches it.",
        topology: "全部情感投射坍缩到一个物件上——物件成为承载整段关系的拓扑不动点。",
        topologyEn: "All emotional projection collapses onto a single object — the object becomes the topological fixed point bearing the entire relationship.",
        directive: {
            bright: "她打开抽屉最深处。拿出那条围巾。没有展开，只是握着。整个房间安静了下来。让读者感到那个东西不是布——是一扇还能推开的门。她握着它就等于握着那个人还在的证据。记忆会骗人，照片会褪色，但这个东西还在这里，还有重量，还有温度。它是最后一根线。",
            dark: "她不让任何人碰那个东西。有人不小心动了一下，她的反应像被烫了。她把全部的爱锁进了一件不会回应的物体里。那个东西在慢慢腐朽——气味在散，布料在脆化——但她不敢承认。有一天它会变成灰。然后她什么都没有了。她不是在保管遗物，她是在给一件死物做人工呼吸。",
            tension: "她又把它拿出来了。又放回去了。没打开。让读者分不清这是她在守护最后的连接，还是她在崇拜一个替代品。那个东西到底是那个人——还是只是一个东西？也许两者之间的区别，她已经分不清了。也许分不清本身就是答案。"
        },
        reference: "《断背山》恩尼斯衣柜里杰克的旧衬衫——不允许任何人碰它；《索拉里斯》空间站里保存的妻子遗物——在一个连记忆都能被复制的世界里，唯一真实的只剩那件旧东西。",
        referenceEn: "Jack's old shirt in Ennis's closet — nobody allowed to touch it in Brokeback Mountain; the wife's belongings kept aboard the station — in a world where even memories can be replicated, only the old thing remains real in Solaris."
    },
    {
        id: "res_language_crystal",
        name: "语言凝核", nameEn: "Language Nucleation",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，整段经历浓缩成了一句话。这句话刻在主体脑子里，反复播放，怎么也甩不掉。",
        defEn: "After the dust settles, the entire experience condensed into one sentence. It's carved in the subject's mind, replaying endlessly, impossible to shake.",
        core: "A面：一句话浓缩了一切——你不需要讲完整个故事，这句话就够了。语言的最高效率。/ B面：但那句话也冻住了你。你用一句话封存了一段经历，但封存也是一种逃避展开。关键张力：那句话是你的结晶——还是你的封印？ | 圣状余痕(Σ): 你又说了那句话。每次说的时候你以为自己在解释。其实你在躲。",
        coreEn: "A-side: You distilled chaotic pain into a crystal — one sentence carrying all the weight. You conquered the experience with language, contained it. / B-side: But that sentence may be a prison. No matter how far you go, it's a thorn lodged in memory. The more you try to forget, the clearer it gets. Key tension: Is that sentence proof you tamed the experience — or the experience's brand on you? | Residuum: A hundred years from now you may forget all the details. But that sentence you'll carry to the grave.",
        topology: "混乱经验在语言维度上被强制降维——整段拓扑折叠进一句话的晶格结构中。",
        topologyEn: "Chaotic experience is force-reduced in the linguistic dimension — the entire topology folds into the lattice structure of a single sentence.",
        directive: {
            bright: "他用一句话装下了全部。那句话精准得像一把手术刀。让读者感到一种语言的胜利——混乱的、撕裂的、不可言说的经历，被他用七个字钉死了。他不需要讲完整个故事。这句话就够了。它是他给自己颁发的勋章，证明他活了下来，而且还能说话。",
            dark: "他又说了那句话。第一百遍。每次说的时候他以为自己在解释。其实他在用那句话挡住身后所有他不敢展开的东西。那句话是一道封印——看起来是结晶，其实是封条。他永远停在那句话里出不来。真相在封条底下腐烂。",
            tension: "他说出那句话的时候很平静。太平静了。让读者分不清这是掌控还是麻木。那句话到底是他驯服了痛苦的证据——还是痛苦烙在他身上的编号？他自己可能也分不清了。但他会一直说下去。因为不说就要展开。展开就要重新活一遍。"
        },
        reference: "《教父》'我会给他一个无法拒绝的条件'——一句话凝缩了整个权力拓扑；《银翼杀手》罗伊临死前'雨中的泪水'——所有记忆凝缩成一句遗言。",
        referenceEn: "'I'll make him an offer he can't refuse' — one sentence condensing the entire power topology in The Godfather; Roy's 'tears in rain' — all memories condensed into a dying sentence in Blade Runner."
    },
    {
        id: "res_spatial_imprint",
        name: "空间烙印", nameEn: "Spatial Imprint",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一个地点不再是普通的地方了——一棵树下、一个路口、一间房间——它变成了纪念碑，或者禁区。",
        defEn: "After the dust settles, a place is no longer ordinary — under a tree, at an intersection, a room — it became a monument, or an exclusion zone.",
        core: "A面：每次经过那里都是一次无声的朝圣。那个地方因为你的经历获得了神圣性——从地图上普通的一点，变成了内心地图的中心。/ B面：但你也被那个地点困住了。你不敢走那条路。你可以扔掉遗物、关掉歌曲——但你不能从地球上删掉一个地方。关键张力：那个地点是你的圣地——还是你的禁区？ | 圣状余痕(Σ): 你绕了三条街。就是为了不经过那个路口。",
        coreEn: "A-side: Every time you pass there is a silent pilgrimage. That place gained sanctity through your experience — from an ordinary map point to the center of your inner map. / B-side: But you're trapped by it too. You dare not take that road. You can discard relics, turn off songs — but you can't delete a location from earth. Key tension: Is that place your holy site — or your exclusion zone? | Residuum: You took a three-block detour. Just to avoid that intersection.",
        topology: "主观经验将客观空间的一个点永久弯曲——该坐标成为内心地图的引力中心或排斥奇点。",
        topologyEn: "Subjective experience permanently warps a point in objective space — that coordinate becomes the gravitational center or repulsive singularity of the inner map.",
        directive: {
            bright: "他每次经过那里都会放慢脚步。不是刻意的，是身体自己做的决定。那个路口、那棵树、那扇窗——对全世界来说什么都不是，对他来说是一整段人生的纪念碑。让读者感到一种无声的朝圣感。他不需要鲜花和蜡烛。他只需要在那里站一秒钟。那一秒钟里，一切都还在。",
            dark: "他绕了三条街。就是不走那条路。他可以扔掉照片、删掉聊天记录、换掉手机号——但他不能从地球上删掉一个地方。那个地点像一颗钉在地图上的钉子，他的整个生活路线都要围绕它弯曲。他的城市在缩小。有些路他再也不走了。有些区他再也不去了。",
            tension: "他站在那个路口。没有进去。也没有走开。让读者看到他的脚在犹豫——一步之内是圣地，一步之外是禁区。这个地方到底是他的根——还是他的牢？也许答案取决于他今天的状态。也许永远不会有答案。他最终走了。但他明天可能又会来。"
        },
        reference: "《请以你的名字呼唤我》那个意大利小镇广场——对以利奥来说那里是一整个夏天凝固的琥珀；《潜行者》禁区中心那个'房间'——据说能实现愿望，但没有人敢真正走进去。",
        referenceEn: "The Italian town square — an entire summer frozen in amber for Elio in Call Me by Your Name; the 'Room' at the Zone's center — said to fulfill wishes, but no one dares truly enter in Stalker."
    },
    {
        id: "res_temporal_rift",
        name: "时间裂口", nameEn: "Temporal Rift",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一个日期把时间切成了'之前'和'之后'。从此每年到了这一天，它就不再是普通的日子。",
        defEn: "After the dust settles, a date sliced time into 'before' and 'after.' Every year when this day comes, it's no longer ordinary.",
        core: "A面：你的生命被那个日期切成了两个人——之前的你和之后的你。这种分裂本身证明你经历过足够重大的事件。/ B面：但日期每年都会回来。你无法删掉它、无法跳过它。每一次它到来，你都要重新经历一次那个切口。关键张力：每年的那一天你是在纪念——还是在重新受伤？ | 圣状余痕(Σ): 日历翻到了那一页。你假装没注意到。但你的身体知道。",
        coreEn: "A-side: Your life was cut into two people by that date — the you before and the you after. The split itself proves you lived through something momentous. / B-side: But the date returns every year. You can't delete it, can't skip it. Each time it comes, you re-experience the cut. Key tension: Each year on that day, are you commemorating — or re-wounding? | Residuum: The calendar turned to that page. You pretended not to notice. But your body knew.",
        topology: "时间轴被一个日期切断——形成不可修复的拓扑断裂，线性时间变成两段永远无法重新缝合的碎片。",
        topologyEn: "The timeline is severed by a single date — forming an irreparable topological rupture, linear time splitting into two fragments that can never be restitched.",
        directive: {
            bright: "日历翻到了那一天。她什么都没说。但她的呼吸变了。那个日期把她的人生切成了两半——之前的她和之后的她。让读者感到这种断裂本身是一种勋章：她经历过足够重大的事，大到能把时间劈开。那个日期是她的分水岭，也是她真正活过的证据。",
            dark: "又到了那一天。她以为今年会好一些。没有。日期是最精准的刀——它每年同一天回来，在同一个位置切她一刀。她不能跳过它，不能删除它。日历是一个她永远无法卸载的程序。每年到了那个日期，她的身体自己就知道了——在她看日历之前。",
            tension: "她看了一眼日历。放下了。倒了一杯水。什么都没做。让读者分不清她是在平静地纪念，还是在用平静掩盖正在裂开的东西。那个日期每年回来，到底是给她一次哀悼的机会——还是强迫她重新受一次伤？她自己也说不清楚。也许两件事是同一件事。"
        },
        reference: "《海边的曼彻斯特》每年大火周年日的沉默崩溃；《降临》路易斯明知女儿的死亡日期却依然选择了那个未来——每年那一天都是预知的刀口。",
        referenceEn: "The silent collapse every fire anniversary in Manchester by the Sea; Louise knowing her daughter's death date yet choosing that future — each year that day is a foreseen blade in Arrival."
    },
    {
        id: "res_body_inscription",
        name: "身体铭刻", nameEn: "Body Inscription",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，身体上留下了永久的痕迹——一条疤、一根白发、一种再也恢复不了的姿态。整段经历写在了皮肤上。",
        defEn: "After the dust settles, the body carries a permanent mark — a scar, white hair, a posture that never recovered. The entire experience is written on the skin.",
        core: "A面：你的身体忠实地记住了那段经历——一个疤、一个姿势、一种痛。身体不撒谎。/ B面：但铭刻也意味着你的身体不让你忘记。你的肉身变成了一份你无法销毁的档案。关键张力：那是你活过的证据——还是一份你被迫随身携带的判决书？ | 圣状余痕(Σ): 你换衣服时看到了那个疤。你已经不记得疼了。但它还在。",
        coreEn: "A-side: Your body remembered what your mind refused to admit — it won't fade, can't be falsified. Every time you see it, you reread proof you lived. / B-side: But you can't not see it. Changing clothes, bathing, being intimate — it's there, silently telling a story you may not want to retell. Key tension: Is that mark proof you lived — or a narrator you can't turn off? | Residuum: You touched that spot. Your fingers know exactly where it is.",
        topology: "经验直接刻入身体表面——拓扑形变绕过了符号系统，在肉身上留下不可擦除的物理褶皱。",
        topologyEn: "Experience inscribes directly onto the body's surface — the topological deformation bypasses the symbolic system, leaving an inerasable physical fold in the flesh.",
        directive: {
            bright: "他换衣服的时候看到了那条疤。手指自动摸了上去。身体不会撒谎——记忆可以改编，照片可以删除，但这条疤不行。它是他活过的收据，盖了章的、不可撤销的。让读者感到一种粗粝的真实感。他的身体比他的大脑更诚实。那道疤不漂亮，但它是他的。",
            dark: "他没办法不看到它。洗澡的时候、亲密的时候、夏天穿短袖的时候——它一直在那里，一个沉默的叙述者，不停地讲一个他不想再听的故事。他的身体变成了一份他无法销毁的档案。别人问起来他就说'小时候摔的'。但他自己知道。他的皮肤知道。",
            tension: "他看着那个疤。没有表情。让读者猜不透他是在骄傲还是在厌恶。那道痕迹是他活过的证据——还是一份他被判了终身的判决书？他的手指抚过那里。轻轻的。像在跟一个不会说话的证人对话。他没有得出结论。他只是穿上了衣服。"
        },
        reference: "《辛德勒的名单》幸存者手臂上烙印的编号——一辈子洗不掉的身份铭文；《攻壳机动队》义体化后唯一保留的那道旧伤疤——在全身都可以替换的世界里，疤痕是最后的身份证。",
        referenceEn: "The number branded on survivors' arms — identity inscriptions that never wash off in Schindler's List; the one old scar kept after full cyborg conversion — in a world where everything is replaceable, the scar is the last ID in Ghost in the Shell."
    },
    {
        id: "res_ritual_lock",
        name: "仪式锁定", nameEn: "Ritual Lock",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一套曾经有意义的日常被升格成了不可更改的神圣程序——每一步都必须一模一样，改一个细节就等于亵渎。",
        defEn: "After the dust settles, a once-meaningful routine was elevated into an unalterable sacred program — every step must be identical, changing one detail equals desecration.",
        core: "A面：你把一套日常升格成了圣礼——固定的时间、固定的顺序、固定的器物。它是你在混乱世界中唯一还能控制的秩序，你的最后堡垒。/ B面：但仪式的每一步都被锁死了。你不敢换一个杯子、不敢改一秒钟。有人不小心动了那个位置，你的反应像被侵犯。关键张力：你在维持秩序——还是你已经变成了仪式的零件？ | 圣状余痕(Σ): 到了那个时间。你做了那件事。你已经不记得为什么了。但不做不行。",
        coreEn: "A-side: You elevated a routine into a sacrament — fixed time, fixed sequence, fixed vessels. It is the only order you can still control in a chaotic world, your last fortress. / B-side: But every step is locked. You dare not swap a cup, dare not shift a second. Someone accidentally moved that object and your reaction was as if violated. Key tension: Are you maintaining order — or have you become a component of the ritual? | Residuum: It's that time. You did that thing. You no longer remember why. But not doing it is not an option.",
        topology: "日常行为序列被锁死成闭合环路——仪式的拓扑结构不允许任何形变，主体成为环路上的一个节点。",
        topologyEn: "The sequence of daily actions is locked into a closed loop — the ritual's topology permits no deformation, and the subject becomes a node on the circuit.",
        directive: {
            bright: "每天早上七点。同一个杯子。同一个位置。同一个顺序。她在一个失控的世界里维持着最后一块秩序。让读者感到那套仪式不是强迫症——是她的堡垒。外面天翻地覆，但这套程序还在。它是她能控制的最后的东西。每一步都是她对混乱世界的一次小小的反抗。",
            dark: "有人不小心换了那个杯子的位置。她的反应像被侵犯了一样。她已经不记得这套仪式是怎么开始的、为谁开始的。但她停不下来。改一个细节等于拆一面墙。她不是在维持秩序——她已经变成了仪式的零件。仪式才是主人。她是它的执行器。",
            tension: "到了那个时间。她做了那件事。脸上很平静。让读者分不清这是她在掌控自己的世界，还是她在被一套程序驱动。那套仪式是她的最后堡垒——还是她最精致的牢笼？也许堡垒和牢笼用的是同一种砖。她做完了。喝了一口。一切照常。"
        },
        reference: "《寻梦环游记》每年亡灵节供台上的照片和万寿菊必须精确摆放——仪式一旦中断，亡者就在另一个世界消失；《土拨鼠之日》菲尔被困在永远重复的同一天——仪式本身变成了不可逃脱的时间牢笼。",
        referenceEn: "The altar photos and marigolds that must be placed precisely every Day of the Dead — break the ritual and the dead truly vanish in Coco; Phil trapped in the same repeating day — the ritual itself becoming an inescapable time-prison in Groundhog Day."
    },
    {
        id: "res_face_overwrite",
        name: "面容覆写", nameEn: "Face Overwrite",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，你见到那个人的最后一面凝固在了记忆里——那张脸的表情覆盖了你对那个人所有其他的印象。",
        defEn: "After the dust settles, the last time you saw that person froze in memory — that expression overwrote every other impression of them.",
        core: "A面：那张脸覆盖了你记忆中的原版——你用最后的印象替换了所有印象。这说明最后那一刻对你最重。/ B面：但你也失去了那个人的全部。你只留下了一帧——其他所有帧都被覆盖了。关键张力：你记住了最重要的——还是你丢掉了全部只留了一个碎片？ | 圣状余痕(Σ): 你想起他的笑。想不起来。只有最后那个表情。",
        coreEn: "A-side: That face is something only you saw — in that instant, that person's appearance belonged only to you. This image became your most intimate farewell. / B-side: But the last face replaces all previous faces. You knew them twenty years — but now only the final expression remains. Twenty years overwritten by one second. Key tension: Is the last face that person's truth — or your memory's unjust edit? | Residuum: You try to remember them smiling. But memory only gives you that last face.",
        topology: "记忆中的全部面部帧被最后一帧覆写——原始数据被单一时间切片永久替换，形成不可逆的信息塌缩。",
        topologyEn: "All facial frames in memory are overwritten by the final frame — original data is permanently replaced by a single time-slice, forming irreversible information collapse.",
        directive: {
            bright: "他想起她的笑。用力想。但记忆只给他那张最后的脸。那不是遗忘——是他的记忆做了一次编辑：最后那一秒比二十年加起来都重。让读者感到那种残酷的忠诚：他的大脑选择了最重要的一帧，然后把其他的全删了。也许那张脸才是她最真实的样子——不是她想让他看到的，而是他不得不看到的。",
            dark: "他闭上眼睛想她。笑容想不起来了。只有那张脸。最后那个表情。它像一层贴纸，覆盖了他记忆中她的每一张照片。二十年的笑声、眼泪、争吵——全被一秒钟替代了。让读者感到那种记忆的暴力：大脑不是忘了，是执行了一次不可逆的覆写。她所有的表情都死在了那最后一帧里。",
            tension: "他想起她笑的样子。但那个笑被另一张脸挤出去了——最后一次见面的那张。也许那张脸才是真相——也许他的记忆只是做了一次不公正的剪辑。让读者和他一起挣扎：他记住的是那个人的真实——还是时间最后的偏见？那张被定格的脸，到底是遗产还是绑架？"
        },
        reference: "《霸王别姬》程蝶衣记住的段小楼最后那张脸——不是戏台上的英武，是批斗会上的怯懦；《索拉里斯》科学家记忆中妻子的脸永远停在死前的表情——空间站的幻影只能重复那一张脸。",
        referenceEn: "Cheng Dieyi's memory of Xiaolou's last face — not the stage hero, but the coward at the denunciation in Farewell My Concubine; the scientist's memory of his wife's face frozen at her dying expression — the station's phantom can only repeat that one face in Solaris."
    },
    {
        id: "res_vow_remains",
        name: "誓言遗骸", nameEn: "Vow Remains",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一句曾经说出口的承诺还活着。它指涉的一切都已改变或消失，但那句话还在绑着你。",
        defEn: "After the dust settles, a promise once spoken is still alive. Everything it referred to has changed or vanished, but the sentence is still binding you.",
        core: "A面：誓言已经脱离了语境——但你还在执行。你的忠诚超越了时间和条件。/ B面：但你忠诚的对象已经不在了。你在为一个幽灵守约。你的守信变成了一种自我绑架。关键张力：你在信守承诺——还是你在用承诺逃避面对它已经失效了？ | 圣状余痕(Σ): 你答应了他的事，你还在做。他早就不在了。但你停不下来。",
        coreEn: "A-side: That vow is your last gravity — even as the world changed, your loyalty proves you keep your word. It keeps you from drifting. / B-side: But reality changed. Clinging to a sentence may not be loyalty — it may be fear of facing the vow expired. Key tension: Are you still keeping that vow because it's valid, or because abandoning it means everything was for nothing? | Residuum: That person is gone. But you promised. So you keep doing it.",
        topology: "语言行为在指涉对象消失后继续运行——誓言作为符号结构获得了独立于所指的自主存在，成为不可解除的拓扑绑定。",
        topologyEn: "The speech act continues running after its referent vanishes — the vow as symbolic structure gains autonomous existence independent of signified, becoming an irrevocable topological binding.",
        directive: {
            bright: "他答应了她的事，他还在做。她已经不在了。但他每个周三下午三点都会去那个地方。不是为了谁——是因为他答应了。让读者感到那种超越时间的重量：他的忠诚不需要接收者。那句承诺本身就是他的锚——只要他还在做，她就没有完全消失。",
            dark: "他还在守着那个约定。她不知道他在守。她可能已经忘了。但他停不下来——不是忠诚，是如果停了，那就意味着一切都白费了。那个誓言变成了他的牢房。他不是在守信——他是在用一句话绑架自己。让读者感到那种承诺的毒性：它比说出它的人活得更久。",
            tension: "他还在做那件事。她不在了。也许他在信守承诺——也许他只是不敢面对那个承诺已经过期了。让读者看着他重复那个动作，分不清那是忠诚还是惯性。那句话到底还有没有效力？让那个问题悬着。让他继续做。不要替他决定什么时候停。"
        },
        reference: "《卧虎藏龙》李慕白一生被一句未兑现的誓言绑住至死；《星际穿越》库珀对女儿说的'我会回来的'——这句话穿越了时空，变成了比物理法则更坚硬的东西。",
        referenceEn: "Li Mu Bai bound his entire life by an unfulfilled vow until death in Crouching Tiger, Hidden Dragon; Cooper's 'I will come back' — a sentence that crossed spacetime, becoming harder than physics in Interstellar."
    },
    {
        id: "res_dream_circuit",
        name: "梦的回路", nameEn: "Dream Circuit",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，同一个梦反复出现。细节每次不同，但核心场景永远是那一个。醒来就忘，但它总会回来。",
        defEn: "After the dust settles, the same dream keeps returning. Details shift, but the core scene is always the same. Forgotten upon waking, but it always comes back.",
        core: "A面：梦是你意识不愿面对、但潜意识坚持重播的东西——那个反复出现的梦说明有什么真相你还没消化。/ B面：但这个梦你做了几百遍了。它不在帮你消化——它在让你重复。你醒来是疲惫的，因为睡眠中仍在经历那件事。关键张力：那个梦是在帮你处理——还是潜意识陷进了死循环？ | 圣状余痕(Σ): 你又做了那个梦。你在梦里想叫醒自己。但你做不到。",
        coreEn: "A-side: Your subconscious is doing homework for you — what day couldn't process, it repairs at night. The dream is an inner craftsman patching cracks in the dark. It's still working, meaning you haven't given up. / B-side: But the same dream returning may mean repair failed — the same problem attempted a thousand times, still unsolved. Your subconscious is stuck. Key tension: Is that dream inner self-healing — or a broken record skipping at the same groove? | Residuum: You had that dream again. Couldn't describe it when you woke. But the pillow was wet.",
        topology: "潜意识层形成了闭合的重放回路——同一个场景被反复渲染，每次细节变异但核心拓扑不变，形成无法退出的递归环。",
        topologyEn: "The subconscious layer forms a closed replay circuit — the same scene is rendered repeatedly, details mutating each time but core topology unchanged, forming an inescapable recursive loop.",
        directive: {
            bright: "他又做了那个梦。细节不一样了——这次是在海边，上次是在走廊。但核心场景永远是那一个。也许他的潜意识还在替他工作——在白天够不到的地方修补裂缝。让读者感到那个反复出现的梦是一种内部的修复机制：他的深层意识还没放弃。它还在试。",
            dark: "同一个梦。第三百次了。他在梦里知道这是梦。他试图叫醒自己。做不到。他的潜意识陷进了一个死循环——同一个问题尝试了一千次，还是解不出来。他的睡眠不是休息——是又一轮审讯。让读者感到那种夜晚的恐怖：他连在睡觉的时候都逃不掉。",
            tension: "他又做了那个梦。醒来说不清具体内容。但枕头是湿的。让读者和他一起停在那个清醒与梦境的交界处——那个梦在帮他消化，还是在消耗他？他的潜意识是工匠还是困兽？不要给诊断。让那个反复出现的梦像潮水一样：退了又来，来了又退。"
        },
        reference: "《老无所依》老警长最后讲的那个关于父亲在雪中举着火的梦——整部电影的意义凝缩在一个梦里；《盗梦空间》柯布在每一层梦境中都看到妻子——那个反复出现的身影既是他的圣状也是他的症状。",
        referenceEn: "The old sheriff's final dream of his father carrying fire through snow — the entire film's meaning condensed into one dream in No Country for Old Men; Cobb seeing his wife in every dream layer — that recurring figure both his sinthome and symptom in Inception."
    },
    {
        id: "res_narrative_version",
        name: "叙事版本", nameEn: "Narrative Version",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，混乱的、矛盾的真实经历被压缩成了一个干净的、可以讲给别人听的'版本'。真相被封存在了叙事之下。",
        defEn: "After the dust settles, chaotic, contradictory real experience was compressed into a clean, tellable 'version.' The truth is sealed beneath the narrative.",
        core: "A面：你把不可承受的混乱整理成了一个有因果的故事——语言成了你的盔甲。/ B面：但那个'版本'已经不是真的了。你讲了太多遍，连自己都信了简化版。关键张力：你讲给别人的版本——是你对经历的掌控，还是对真相的逃避？ | 圣状余痕(Σ): 你又讲了一遍那个故事。每次都更流畅。每次都离真相更远。",
        coreEn: "A-side: You organized the unbearable chaos into a story with causes and an ending. This lets you discuss it without collapsing. Language became your armor — you can finally say 'that thing' without trembling. / B-side: But that 'version' is no longer true. You told it so many times, even you began believing the simplified edition. The shameful, contradictory, illogical parts — buried by your narrative. Key tension: Is the version you tell others mastery of the experience — or escape from truth? | Residuum: You told that story again. Each time more fluent. Each time further from the truth.",
        topology: "混沌的原始经验被强制降维为线性叙事——真实的多维拓扑被压缩成一维故事线，压缩过程中丢弃了不可叙述的分量。",
        topologyEn: "Chaotic raw experience is forcibly reduced to linear narrative — the real multi-dimensional topology is compressed into a one-dimensional storyline, discarding unnarratable mass during compression.",
        directive: {
            bright: "她终于可以讲这件事了。她把那段不可承受的混乱整理成了一个有开头有结尾的故事。它有因果了。它可以被说出来了。让读者感到那种叙事的力量：语言成了她的盔甲。她不再是被经历淹没的人——她是讲述者。她站在故事的外面了。掌控本身就是治愈的一种。",
            dark: "他又讲了一遍那个故事。比上次更流畅了。每一个停顿都恰到好处。但他讲的已经不是真的了——他把矛盾的、羞耻的、不合逻辑的部分全删了。他住在一个自己编辑过的版本里。让读者感到那种干净叙事的恐怖：真相被封存在故事底下。他讲得越好，离真相越远。有一天他会彻底忘记真正发生了什么。",
            tension: "他讲了那个故事。讲得很好。太好了。让读者怀疑：一个讲得这么流畅的故事，真的是真的吗？他是在掌控那段经历——还是在用叙事把自己封印在一个安全的假象里？让那种流畅本身成为可疑的东西。真相应该是磕绊的、矛盾的、讲不顺的。太顺了，就不对了。"
        },
        reference: "《赎罪》布莱奥尼用一生写出的那个版本——她在小说里给了恋人们一个团圆结局，但真相是他们都死了；《大鱼》父亲用传奇故事包裹的一生——儿子至死才明白哪些是真的哪些是编的。",
        referenceEn: "Briony's lifelong written version — she gave the lovers a reunion in her novel, but the truth is they both died in Atonement; the father's life wrapped in tall tales — the son only at death understanding what was real and what was invented in Big Fish."
    },
    {
        id: "res_substitute",
        name: "替代转嫁", nameEn: "Substitute Transfer",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，对那个人的全部感情被不自觉地转移到了一个替代物上——另一个人、一项事业、一个习惯。原件不在了，但欲望还在运转。",
        defEn: "After the dust settles, all feelings for that person were unconsciously transferred onto a substitute — another person, a cause, a habit. The original is gone, but desire still runs.",
        core: "A面：你的欲望需要出口，旧的关闭了，你自动找了新的。你没有停下来。/ B面：但替代物永远不是原件。你在新的人身上寻找旧的影子，读着同一个故事。关键张力：你真的爱上了新的人——还是在用他们填那个旧的洞？ | 圣状余痕(Σ): 你抱着新的人。但你闭上眼睛的时候想的是谁？",
        coreEn: "A-side: Your desire needs an outlet; the old one closed, you automatically found a new one. This flexibility lets you keep living, not permanently locked by a lost object. You didn't stop — you switched roads. / B-side: But the substitute is never the original. You seek old shadows in the new person, repeat old patterns in new ventures. You think you turned the page — but you're reading the same story in a different book. Key tension: Did you truly love the new person — or are you just using them to fill the old hole? | Residuum: You're holding someone new. But when you close your eyes, who are you thinking of?",
        topology: "欲望的拓扑轨道在原始对象消失后保持不变——新对象被嵌入旧轨道，沿用同一条路径运行。表面换了终点，深层路线未改。",
        topologyEn: "Desire's topological orbit remains unchanged after the original object vanishes — a new object is embedded in the old orbit, running along the same path. The surface destination changed; the deep route did not.",
        directive: {
            bright: "他有了新的人。新的工作。新的城市。他的欲望没有停——它自动找到了新的出口。让读者感到那种韧性：旧的路关了，他的脚自动找到了新的。他没有在原地等死。他走了。也许新的人不是替代——也许他只是学会了用另一种方式去爱。",
            dark: "他抱着新的人。闭上眼睛。想的是谁？让读者看到那种替代的残忍——新的人是一件衣服，穿在旧的模具上。他不是在爱一个新的人——他是在用新的皮肤包裹旧的欲望。新的人越像她，他就越清楚：他从来没有离开过那个洞。他只是换了一种方式往里面掉。",
            tension: "他有了新的人。他们很好。真的很好。但有时候他会在新的人身上看到旧的影子。也许那只是巧合——也许他的欲望从来没有换过方向。让读者悬在那个问题上：他爱上了新的人，还是他在新的人身上继续爱着旧的人？让那个问题没有答案。让两种可能性同时成立。"
        },
        reference: "《迷失东京》两个在异乡用彼此替代各自缺失的人——他们都知道对方是替代品，但假装不知道；《飞向太空》空间站制造出来的妻子幻影——一个完美的替代品，但它越完美就越提醒你原件已经不在了。",
        referenceEn: "Two people in a foreign city using each other to substitute what they each lacked — both knowing, both pretending not to in Lost in Translation; the wife-phantom manufactured by the station — a perfect substitute, but the more perfect it is, the more it reminds you the original is gone in Solaris."
    },
    {
        id: "res_taboo_trigger",
        name: "禁忌触点", nameEn: "Taboo Trigger",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，某个本来无害的东西——一个词、一种天气、一个动作——因为与那段经历关联而被永久充电，变成了碰不得的开关。",
        defEn: "After the dust settles, something originally harmless — a word, a type of weather, a gesture — was permanently charged through association, becoming an untouchable switch.",
        core: "A面：你的神经系统比意识更诚实——它替你记住了你不愿承认的连接。身体替你拉响了警报。/ B面：但禁忌触点会扩散。最初一个场景，然后一切相关的都变成禁区。你的世界在缩小。关键张力：那些禁忌在保护你——还是在把你的世界缩成越来越小的房间？ | 圣状余痕(Σ): 你避开了那个东西。然后避开相关的。然后发现需要避开的越来越多。",
        coreEn: "A-side: Your nervous system is more honest than your consciousness — it remembers connections you refuse to acknowledge. Before your reason reacts, the body has already sounded the alarm. That trigger proves everything you experienced was real. / B-side: But taboo triggers spread. First one scene, then everything related becomes forbidden. Your world slowly shrinks, more and more things becoming 'no.' Key tension: Are those taboos protecting you — or slowly shrinking your world into an ever-smaller room? | Residuum: You avoided that thing. Then things related to it. Then you found there was more and more to avoid.",
        topology: "中性符号因一次性关联被永久赋予负价态——禁忌从单一触点向相邻语义区域扩散，不断缩小主体可通行的符号空间。",
        topologyEn: "A neutral symbol is permanently assigned negative valence through a one-time association — the taboo spreads from a single trigger to adjacent semantic regions, continuously shrinking the subject's traversable symbolic space.",
        directive: {
            bright: "她不再走那条路了。不是因为危险——是因为那条路通向一个她不想回去的记忆。但让读者看到：她绕路的方式说明她的身体在保护她。她的神经系统比意识更快、更诚实。它替她拉了警报。也许有一天她会重新走那条路。但今天绕路不是软弱——是智慧。",
            dark: "他避开了那个词。然后避开了包含那个词的句子。然后避开了可能让人说出那个词的话题。然后避开了可能聊到那个话题的人。他的世界在缩小。每一次回避都在他的地图上涂掉一个区域。让读者感到那种缩水的恐怖：再这样下去，他能去的地方比一间牢房还小。",
            tension: "她避开了那件事。也许是在保护自己——也许是在喂养一个越来越大的恐惧。每次回避都让下一次面对更难。让读者看着她的世界慢慢缩小，分不清那是自我保护还是自我囚禁。那些被涂掉的区域到底是安全措施——还是一间正在建造中的牢房？"
        },
        reference: "《钢琴家》战后多年听到雷声仍然蹲下的斯皮尔曼——雷声变成了永久的触发器；《美丽心灵的永恒阳光》擦除记忆后仍然莫名回避蒙托克海滩——身体记得意识已经删掉的东西。",
        referenceEn: "Szpilman still crouching at thunder years after the war — thunder became a permanent trigger in The Pianist; the protagonist inexplicably avoiding Montauk beach after memory erasure — the body remembers what consciousness deleted in Eternal Sunshine of the Spotless Mind."
    },
    {
        id: "res_departing_seal",
        name: "背影封存", nameEn: "Departing Seal",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，某人离开时的最后一个画面——那个越来越小的轮廓——成了关于那个人的永久封印。你再也想不起别的了。",
        defEn: "After the dust settles, the last image of someone leaving — that shrinking silhouette — became the permanent seal on that person. You can't recall anything else.",
        core: "A面：背影是最不设防的告别——一个人转身走掉的方式比面对你的方式更真实。/ B面：但背影也是最残忍的画面——你看不到那个人的脸。他走时是什么表情？你永远不会知道。关键张力：你记住的背影是离开的真相——还是你永远无法验证的猜测？ | 圣状余痕(Σ): 他走了。你想叫住他。但你没有。然后他就不见了。",
        coreEn: "A-side: A departing back is the most honest farewell — no managed expression, no dignified last words. How someone turns away is more real than how they face you. You saw their most unguarded second. / B-side: But a departing back is the cruelest image — you can't see their face. Crying? Relieved? You'll never know. Key tension: Is the back you remember the truth of leaving — or a guess you can never verify? | Residuum: They left. You wanted to call out. You didn't. Then they were gone.",
        topology: "离开的运动学图像被凝固为永久定格帧——那个逐渐缩小的轮廓成为记忆中不可替换的封印图案。",
        topologyEn: "The kinematic image of departure is frozen into a permanent still frame — that gradually shrinking silhouette becomes the irreplaceable seal pattern in memory.",
        directive: {
            bright: "他转身走了。她看着他的背影越来越小。那是她见到的他最不设防的样子——没有管理过的表情，没有体面的告别词。只是一个人走掉的方式。让读者感到那种背影的真实：一个人转身的动作比他面对你的全部表演都更诚实。她看到了他最后的、最真实的一秒。",
            dark: "他走了。她想叫住他。但她没有。然后他就不见了。她想起他的脸——想不起来。只有那个背影。越来越小。最后消失在转角。她不知道他走的时候什么表情——哭了？笑了？松了口气？她永远不会知道。让读者感到那种背影的残忍：你看不到脸。你能猜的只有背影里的姿态。而姿态是会骗人的。",
            tension: "他走了。她看着那个背影。他的步子是快还是慢？让读者跟她一起分析那个背影——他走得决绝吗？还是有犹豫？她永远不知道他转身那一秒的表情。背影是最不完整的告别——它给你一个画面，但藏起了最重要的信息。让那个背影停在那里。不要让他回头。"
        },
        reference: "《背影》朱自清看父亲翻过月台买橘子的背影——一辈子最深的泪点是那个笨拙的、努力翻越的背影；《银翼杀手》罗伊在雨中松开手、身体向后倾倒——一个人造人比人类更人类的最后一秒。",
        referenceEn: "Zhu Ziqing watching his father's back climbing the platform to buy oranges — life's deepest tears from that clumsy, effortful back in The Sight of Father's Back; Roy releasing the dove, body tilting backward in rain — a replicant more human than human in his final second in Blade Runner."
    },
    {
        id: "res_lie_architecture",
        name: "谎言建筑", nameEn: "Architecture of Lies",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一个谎言生根发芽，需要更多的谎来维护，最终长成了一栋你住在里面的建筑。你不敢拆任何一面墙。",
        defEn: "After the dust settles, a lie took root, needing more lies to sustain it, eventually growing into a building you live inside. You dare not remove any wall.",
        core: "A面：有些谎言是建筑材料——你用它撑住了一段关系。你的不诚实拯救了你不忍心看倒塌的东西。/ B面：但谎言会生长。一个小谎需要十个来维护。你住在一座谎言建筑里，每面墙都是秘密。关键张力：那个谎言保护了什么——但它永远改变了你和真相的关系。 | 圣状余痕(Σ): 你说了一句不是真的话。那句话活了下来。真相死了。",
        coreEn: "A-side: Some lies are building materials — you used it to hold up a relationship, someone's confidence, or a family. That lie wasn't deception; it was doing the right thing the wrong way. Your dishonesty saved things you couldn't bear to watch fall. / B-side: But lies grow. One small lie needs ten to maintain, then each ten needs ten more. You built a building of lies; now you live inside, every wall a secret no one can know. Key tension: That lie protected something — but it permanently altered your relationship with truth. | Residuum: You said something untrue. That sentence survived. The truth died. And you live in the house that sentence built.",
        topology: "单一虚构节点自我复制并相互依赖——形成递归增长的拓扑结构，每个新节点的存在以前序节点的稳定为前提。拆除任一节点将导致级联坍塌。",
        topologyEn: "A single fictional node self-replicates and creates mutual dependencies — forming a recursively growing topological structure where each new node's existence depends on the stability of predecessors. Removing any single node triggers cascading collapse.",
        directive: {
            bright: "她说了一句不是真的话。为了保护一个人。那句话活了下来——需要第二句来维护，第二句需要第三句。但每一面墙都是她手工砌的，为了挡住一个更残忍的真相。让读者感到那种谎言建筑的温度：她不是骗子——她是一个用不诚实拯救别人的建筑师。那栋房子是爱的形状，虽然材料是谎言。",
            dark: "他说了第一句谎。然后第二句。第十句。现在他住在一栋谎言建筑里——每面墙都是秘密，每扇窗都是伪装。他不敢拆任何一面墙，因为整栋楼会塌。他不是骗子——他是被自己的第一句谎话困住的囚徒。让读者感到那种建筑的窒息感：他建了一座漂亮的房子，但里面没有空气。真相死在了地基里。",
            tension: "她说了一句假话。那句话活了下来。长出了房间、走廊、楼层。她现在住在里面了。让读者看着那栋建筑——它保护了什么？它埋葬了什么？如果她打开最底下的那扇门，会看到什么？让那个问题悬在建筑的地基里。不要替她开门。让她住在里面。让读者从外面看着那栋房子，知道它是用什么建的。"
        },
        reference: "《赎罪》布莱奥尼一个童年的谎言毁掉了两个人的一生——那个谎言比她活得更久；《美丽人生》父亲在集中营里为儿子编造的'这是一场游戏'——史上最温柔的欺骗，也是最精密的谎言建筑。",
        referenceEn: "Briony's childhood lie destroying two lives — that lie outlived her in Atonement; the father's 'this is a game' for his son in the camp — history's most tender deception, and most elaborate architecture of lies in Life Is Beautiful."
    },
    {
        id: "res_voice_residue",
        name: "声音残留", nameEn: "Voice Residue",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，那个人的声音还活在你耳朵里——不是你主动去想，而是它自己来找你。语音信箱、旧视频、或者只是你脑子里的回声。",
        defEn: "After the dust settles, that person's voice is still alive in your ears — not recalled deliberately, but coming to find you on its own. Voicemail, old videos, or just echoes in your head.",
        core: "A面：声音比面孔更难伪造——你可以看错一张脸，但你认错一个声音的概率很低。那个声音是你和那个人之间最后的活物。你的耳朵替你保存了一个还会呼吸的证据。/ B面：但声音也是最残忍的幽灵——它太真了。你在超市听到了类似的声调，整个人僵在了货架前面。你的手机里还存着那条语音，你一年听八十遍。关键张力：你保存那个声音是为了记住——还是因为你还没准备好接受那个声音的主人已经不在了？ | 圣状余痕(Σ): 你在街上听到了一个声音。你转过头。不是那个人。从来不是。",
        coreEn: "A-side: A voice is harder to fake than a face — you rarely misidentify a voice. That voice is the last living thing between you and that person. Your ears preserved a piece of evidence that still breathes. / B-side: But a voice is the cruelest ghost — it's too real. You heard a similar intonation in a supermarket and froze by the shelves. Your phone still holds that voicemail; you've played it eighty times this year. Key tension: Do you keep that voice to remember — or because you haven't accepted its owner is gone? | Residuum: You heard a voice on the street. You turned around. It wasn't them. It never is.",
        topology: "声波印记在听觉空间中形成持久残像——声源已消失，但其频率特征在主体的听觉皮层中保持激活态。",
        topologyEn: "Sound-wave imprints form persistent afterimages in auditory space — the source has vanished, but its frequency signature remains active in the subject's auditory cortex.",
        directive: {
            bright: "她的声音还在他耳朵里。不是他主动想的——它自己来的。在地铁里，在下雨的时候。那个声音是他和她之间最后的活物。记忆会骗人，照片会褪色——但声音有一种不可伪造的真实。让读者感到那种听觉忠诚的温度：他的耳朵替他保存了一个还在呼吸的证据。",
            dark: "他在街上听到了那个声音。转过头。不是她。从来不是。但他每次都转。他的手机里还存着那条语音。他一年听了八十遍。每听一次都像在给一个伤口撒盐。让读者感到那种声音幽灵的残忍：它太真了。比任何照片都真。你可以不看照片——但你无法堵住自己的耳朵。",
            tension: "他听到了一个声音。像她的。他停了一秒。没转头。让读者分不清他是在练习放手，还是他知道转头也没用。那个声音是他手里最后的线——还是一个每次都会失望的陷阱？让那个声音在空气中消散。让他站在原地。不要让他转头。也不要让他走掉。"
        },
        reference: "《她》西奥多与人工智能萨曼莎的关系终结后，她的声音从无处不在变成了无处可寻；《入殓师》妻子反复播放丈夫留下的大提琴录音——声音是唯一没有衰败的遗产。",
        referenceEn: "After Theodore's relationship with AI Samantha ends, her voice goes from omnipresent to nowhere in Her; the wife replaying her husband's cello recordings — sound as the only inheritance that doesn't decay in Departures."
    },
    {
        id: "res_taste_fossil",
        name: "食物凝固", nameEn: "Taste Fossil",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一道菜、一种味道或者一张餐桌变成了那段关系的凝固物——你再也没法正常吃那道菜了。",
        defEn: "After the dust settles, a dish, a flavor, or a dining table became the fossilized form of that relationship — you can never eat that dish normally again.",
        core: "A面：食物是最日常的仪式——一起吃饭比一起睡觉更像家人。那道菜凝缩了一整段关系的温度：谁做的、怎么做的、在哪张桌子上吃的。你吃的不是食物，是时间。/ B面：但味觉化石也是最精准的定时炸弹——你在一家陌生餐厅吃到了同样的味道，眼泪在第三口的时候掉下来了。你控制不了你的舌头。关键张力：你是在吃饭——还是在用舌头做考古？ | 圣状余痕(Σ): 你尝到了那个味道。筷子停在了半空。然后你放下了碗。",
        coreEn: "A-side: Food is the most everyday ritual — eating together is more like family than sleeping together. That dish condensed an entire relationship's warmth: who cooked it, how, at which table. You're not eating food; you're eating time. / B-side: But a taste fossil is also the most precise time bomb — you tasted the same flavor in an unfamiliar restaurant, and tears fell at the third bite. You can't control your tongue. Key tension: Are you eating — or doing archaeology with your taste buds? | Residuum: You tasted that flavor. Your chopsticks froze mid-air. Then you set down the bowl.",
        topology: "味觉通道将时间信息编码为化学信号——一道菜的分子结构成为折叠了整段关系的压缩包，每次咀嚼都执行一次解压。",
        topologyEn: "The gustatory channel encodes temporal information as chemical signal — a dish's molecular structure becomes a compressed archive folding an entire relationship, each bite executing a decompression.",
        directive: {
            bright: "她在一家陌生的餐厅吃到了那个味道。筷子停了。不是悲伤——是一整段时光瞬间涌回来了。谁做的、怎么做的、在哪张桌子上吃的。让读者感到味觉的时间旅行：她吃的不是食物，是时间。那个味道是一封用分子写的信。她的舌头收到了一封她以为丢了的信。",
            dark: "他坐在餐桌前。吃到了第三口的时候，眼泪掉下来了。他控制不了。他的舌头记得他不想记得的东西。他再也没法正常吃那道菜了——它被永久充了电。每一口都是一颗小型定时炸弹。让读者感到那种日常被入侵的无助：连吃饭都不安全。他的味蕾是叛徒。",
            tension: "她尝到了那个味道。停了一秒。继续吃了。表情没变。让读者分不清她是在消化食物还是在消化一段往事。那个味道是纪念还是伏击？她放下碗了。也许她吃饱了——也许她被一口食物击穿了但选择不让任何人看到。让那双筷子安静地放在碗上。"
        },
        reference: "《饮食男女》老朱每周日做的那桌菜——当女儿们都离开后，那桌菜变成了空巢的纪念碑；《小森林》主角回到乡下复刻母亲的食谱——每一道菜都是一次无声的对话。",
        referenceEn: "Old Zhu's Sunday feast in Eat Drink Man Woman — after all daughters leave, the table becomes a monument to the empty nest; the protagonist returning to the countryside to recreate her mother's recipes in Little Forest — each dish a silent conversation."
    },
    {
        id: "res_gesture_inheritance",
        name: "手势遗传", nameEn: "Gesture Inheritance",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，你发现自己不知不觉地继承了那个人的某个小动作——一种笑法、一个口头禅、一种走路的姿势。那个人活在了你的身体里。",
        defEn: "After the dust settles, you discover you've unknowingly inherited one of that person's gestures — a way of laughing, a verbal tic, a walking posture. That person lives on inside your body.",
        core: "A面：那个人最深的遗产不是物件、不是照片——是你身体里的一个动作。你无意识地继承了他的手势，这比任何遗嘱都更真实。你见到镜子里自己做了那个动作的时候，你会愣两秒。/ B面：但你的身体不是你自己的了。每次做那个动作，你都在无意间扮演一个不在场的人。你不知道这是爱，还是一种无法驱散的附身。关键张力：那个手势是他留给你的礼物——还是你变成了他的复制品？ | 圣状余痕(Σ): 有人说你笑起来跟他很像。你愣了一秒。然后你再也不知道那个笑是你的，还是他的。",
        coreEn: "A-side: That person's deepest legacy isn't objects or photos — it's a movement inside your body. You unconsciously inherited their gesture; it's more real than any will. When you catch yourself making that gesture in the mirror, you freeze for two seconds. / B-side: But your body is no longer solely yours. Each time you make that gesture, you're unconsciously performing someone absent. You don't know if this is love, or an exorcism you can't complete. Key tension: Is that gesture a gift they left you — or have you become their copy? | Residuum: Someone said you look just like them when you smile. You froze for a second. Then you never knew whether that smile was yours, or theirs.",
        topology: "另一主体的动作模式通过长期共存被移植到自身的运动系统中——身体层面的拓扑复制，不经由意识中介。",
        topologyEn: "Another subject's motor patterns are transplanted into one's own kinetic system through prolonged coexistence — a body-level topological replication that bypasses conscious mediation.",
        directive: {
            bright: "有人说她笑起来跟她妈妈一模一样。她愣了一秒。然后笑了。那个动作不是学来的——是住在她身体里的。让读者感到那种遗传的温暖：那个人最深的遗产不在遗嘱里，在她的肌肉里。她在镜子前做了那个动作的时候，那个人就在她体内重新活了一次。身体比记忆更忠诚。",
            dark: "他花了一辈子想摆脱父亲。他成功了。新的城市，新的名字，新的生活。然后有一天他在镜子里看到自己抚摸下巴的方式——和父亲一模一样。他的身体背叛了他。让读者感到那种逃不掉的恐怖：你可以离开一个人、忘掉一个人、恨一个人——但你无法把他从你的肌肉里删除。",
            tension: "有人说他走路的样子跟他父亲越来越像了。他不知道该高兴还是害怕。也许那是爱的遗产——也许那是一种他不想要的附身。让读者看着他走路的方式，分不清那个姿态是遗产还是诅咒。他的身体到底是在纪念那个人——还是在无意识地变成那个人？"
        },
        reference: "《教父》迈克尔·柯里昂到了第三部做出了和父亲一模一样的'抚摸下巴'的手势——他花了一辈子逃离父亲，但他的身体背叛了他；《东京物语》儿媳在丧礼后无意识地做出婆婆生前擦桌子的动作。",
        referenceEn: "Michael Corleone making the exact same 'chin-stroking' gesture as his father in The Godfather Part III — spending a lifetime fleeing the father, but betrayed by his own body; the daughter-in-law unconsciously mimicking her late mother-in-law's table-wiping gesture after the funeral in Tokyo Story."
    },
    {
        id: "res_silence_nucleus",
        name: "沉默凝核", nameEn: "Silence Nucleus",
        group: "B. 凝固的图腾", groupEn: "The Frozen Totem",
        def: "尘埃落定后，一段永远没有被说出来的话凝固成了两个人之间最重的东西——不是遗忘，是一种双方都心知肚明但绝不提起的空白。",
        defEn: "After the dust settles, something that was never spoken aloud solidified into the heaviest thing between two people — not forgetfulness, but a blank both sides know yet never mention.",
        core: "A面：有些东西不说出来反而更重——沉默可以承载比语言更多的内容。你们之间有一段空白，但那段空白不是虚无，它是一整栋被压缩了的建筑。不说，是因为一说就要全部倒塌。/ B面：但不说也是一种暴力——沉默可以变成一道永久的隔墙。你们坐在同一张桌子前，但中间隔了一整条河。关键张力：那个沉默保护了你们的关系——还是杀死了它？ | 圣状余痕(Σ): 你们又见面了。你们聊了很多。但你们真正要说的那句话——一如既往地——没有说。",
        coreEn: "A-side: Some things weigh more unspoken — silence can carry more than language. That blank between you isn't void; it's an entire compressed building. You don't speak because speaking means total collapse. / B-side: But silence is also a form of violence — it can become a permanent wall. You sit at the same table, but a whole river runs between you. Key tension: Did that silence protect your relationship — or kill it? | Residuum: You met again. You talked about many things. But the one thing you truly needed to say — as always — remained unsaid.",
        topology: "未言说的内容在两个主体之间凝结为高密度节点——沉默并非空白而是被压缩到极限的信息块，占据了关系拓扑中最大的质量。",
        topologyEn: "Unspoken content crystallizes between two subjects as a high-density node — silence is not void but an information block compressed to its limit, occupying the greatest mass in the relationship's topology.",
        directive: {
            bright: "他们又见了面。聊了很多。聊工作、聊天气、聊共同的朋友。但那句话——那句他们真正想说的——一如既往地没有说。让读者感到那种沉默的重量：它比所有说出来的话加起来都重。不说不是遗忘——是因为那句话太大了，一旦说出来，整个关系的地基都要重建。沉默是他们给彼此的最后保护。",
            dark: "他们坐在同一张桌子前。中间隔了一条河——那条河的名字叫'从来不提的那件事'。他们聊得很开心。但那个沉默在桌子底下长大了。它比桌子还大。比房间还大。有一天它会大到把他们之间所有的空气都挤走。让读者感到那种沉默的毒性：不说出来不是智慧——是一种慢性的互相杀害。",
            tension: "他们又聊了。又没说那句话。也许是因为太懂了不需要说——也许是因为太脆了不敢说。让读者悬在两种沉默之间：一种是信任的最高形态，一种是恐惧的最深表现。他们的沉默到底是默契——还是一堵正在硬化的墙？让那句没说出口的话停在空气里。让它重着。"
        },
        reference: "《花样年华》周慕云和苏丽珍之间那句从头到尾没有说出来的'我爱你'——沉默比对白更震耳欲聋；《海边的曼彻斯特》李和前妻在街头的最后一次对话——他们说了很多，但最重要的那句话在两个人的眼睛里，从来没到嘴上。",
        referenceEn: "The 'I love you' that was never spoken between Chow Mo-wan and Su Li-zhen — silence more deafening than dialogue in In the Mood for Love; Lee and his ex-wife's last conversation on the street in Manchester by the Sea — they said many things, but the most important sentence stayed in their eyes, never reaching their lips."
    },
];
