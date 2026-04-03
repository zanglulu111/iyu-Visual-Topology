import { LibraryItemDef } from '../../../types';

export const STAKES_GROUP_D: LibraryItemDef[] = [
    {
        id: "stake_death",
        name: "绝对肉身断电（物理死亡）", nameEn: "Absolute Somatic Death",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "碳基生物学功能的绝对终止，灵魂失去承载物而溃散。",
        defEn: "Absolute termination of carbon-based biological functions, the soul dispersing as its vessel fails.",
        core: "一切符号与隐喻的物理底板被抽走。 | The Castration: 生物学底座（Biological Substrate）的拔除。",
        coreEn: "The physical baseplate of all symbols and metaphors is pulled away. | The Castration: Uprooting of the Biological Substrate.",
        logic: "在精神分析中，死本能（Thanatos）的最终胜利。肉体是象征界运作的基底画布，画布被焚毁，其上再华丽的创伤与爱恨情仇也随之失去了拓扑学坐标。",
        logicEn: "The final victory of the Death Drive (Thanatos). The flesh is the canvas of the Symbolic order; once burned, all grand traumas and loves lose their topological coordinates.",
        patch: {
            mechanics: "Base_SOMATIC_TERMINATION + [Vital_Signs = 0; Reboot_Protocol = Null]",
            mechanicsEn: "Base_SOMATIC_TERMINATION + [Vital_Signs = 0; Reboot_Protocol = Null]",
            aesthetic: "聚焦：瞳孔在几秒内完全失去折射光芒变得如死灰般浑浊 + 身体重重砸在地上发出只有死肉才能发出的沉闷‘噗通’声。",
            aestheticEn: "Focus: Pupils losing light-refraction in seconds, becoming ash-murky + Body hitting ground with a heavy, dull thud only dead meat produces.",
            runtime: "IF (生前的死敌对着他的尸体疯狂辱骂并踢打) THEN (尸体只会像一个破布口袋一样随着踢打无意义地翻滚，彻底失去了反馈任何尊严的物理接口)。",
            runtimeEn: "IF (Lifelong_Archnemesis_Kicks_and_Curses_the_Corpse) THEN (The corpse merely rolls meaninglessly like a torn rucksack, fully devoid of physical interfaces to feedback dignity)."
        }
    },
    {
        id: "stake_extinction",
        name: "基因锁死（种族灭绝）", nameEn: "Genetic Extinction",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "不仅是个体的被杀，而是整个生物族谱、DNA序列或文明火种的被彻底抹除，走向绝对绝嗣。",
        defEn: "Not just individual murder, but the complete erasure of the entire biological lineage, DNA sequence, or civilization spark, leading to absolute barrenness.",
        core: "向未来进发的生物学锚点被彻底炸毁。 | The Castration: 演化链条（Evolutionary Chain）的斩断。",
        coreEn: "The biological anchor reaching into the future is totally blown up. | The Castration: Severing of the Evolutionary Chain.",
        logic: "个体死亡尚可通过‘基因延续’在象征界中获得永生幻象。种族灭绝则是大他者降下的终极物理制裁：你不准在这个宇宙留下一丝痕迹。",
        logicEn: "Individual death retains an illusion of immortality via 'gene continuation'. Extinction is the Big Other's ultimate physical sanction: leaving zero trace in this universe.",
        patch: {
            mechanics: "Base_GENOCIDE_WIPE + [Reproductive_Capacity = 0; Heritage_Tags = Erased_From_Database]",
            mechanicsEn: "Base_GENOCIDE_WIPE + [Reproductive_Capacity = 0; Heritage_Tags = Erased_From_Database]",
            aesthetic: "聚焦：看着最后一个有着相似生理特征的同族在眼前化为血水 + 本族谱系的生命树分支被一团黑火烧成了焦炭。",
            aestheticEn: "Focus: Watching the last kin with similar physiological traits turn into bloody water + The tribal life-tree branch burned to char by black fire.",
            runtime: "IF (试图挖出自己的血肉藏在地下以冀望亿万年后的克隆复苏) THEN (那股诅咒般的歼灭力会深入地幔，将包含其DNA的每一粒土壤烧到原子解体)。",
            runtimeEn: "IF (Buries_Own_Flesh_to_Hope_for_Cloning_Eons_Later) THEN (The annihilating curse penetrates the mantle, burning every DNA-containing soil particle to atomic disintegration)."
        }
    },
    {
        id: "stake_apocalypse",
        name: "舞台坍塌（世界末日）", nameEn: "Collapse of the Grand Stage (Apocalypse)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "赖以生存的物理空间本身迎来了熵增的终局，被核爆、瘟疫或极渊撕裂，化作无法呼吸的废土。",
        defEn: "The physical survival space meets entropic endgame, torn by nukes, plague, or abysses into an unbreathable wasteland.",
        core: "连可以埋葬自己的泥土都没有了。 | The Castration: 物理实在界（The Physical Real）的内爆。",
        coreEn: "Not even dirt remains to bury oneself. | The Castration: Implosion of the Physical Real.",
        logic: "当承载一切爱恨的坐标系（地球/城市）被抹除，一切伦理冲突立刻显得极其滑稽。在大自然/宇宙的极度残酷面前，人的骄傲被降维成宇宙灰尘。",
        logicEn: "When the coordinate system (Earth/City) carrying all love/hate is erased, ethical conflicts become ridiculous. Before cosmic cruelty, human pride downgrades to dust.",
        patch: {
            mechanics: "Base_DOOMSDAY_TRIGGER + [Environment_Toxicity = Lethal; Global_Nav_Mesh = Destroyed]",
            mechanicsEn: "Base_DOOMSDAY_TRIGGER + [Environment_Toxicity = Lethal; Global_Nav_Mesh = Destroyed]",
            aesthetic: "聚焦：原本美丽的蔚蓝天空裂开犹如地狱般的暗红缝隙源源不断地下着焦油雨 + 在满是核废料的废墟中捧起一把曾经是‘家’的放射性灰烬。",
            aestheticEn: "Focus: Beautiful blue sky splitting into hellish crimson rifts raining tar + Scooping radioactive ash that used to be 'home' in atomic ruins.",
            runtime: "IF (拿着一箱黄金和世界上所有的权力契约书) THEN (在末日肺部吸入致命辐射粉尘的痉挛中，这些曾经至高无上的符号连一张擦血的纸巾都不如)。",
            runtimeEn: "IF (Holding_Box_of_Gold_and_Supreme_Power_Contracts) THEN (Amidst spasms inhaling lethal radioactive dust, these supreme symbols aren't even worth a blood-wiping tissue)."
        }
    },
    {
        id: "stake_torture",
        name: "肉身磔刑（无尽受虐）", nameEn: "Flesh Jouissance Overload (Eternal Torture)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "肉体被当作承压极限测试的皮囊，承受连续不断的、挑战生物阀值的极致撕裂与切割，且不允许昏迷。",
        defEn: "Flesh treated as stress-test sac, enduring continuous extreme tearing and cutting pushing biological thresholds, without allowing unconsciousness.",
        core: "死亡变成了一种可望不可即的至高奢求。 | The Castration: 疼痛屏蔽系统（Pain Buffer）的瘫痪。",
        coreEn: "Death becomes an unreachable supreme luxury. | The Castration: Paralysis of the Pain Buffer.",
        logic: "当痛觉（Pain）超越了度量，它就转化为一种邪恶的躯体享乐（Jouissance of the Flesh）。主体被钉死在纯粹受创的反应堆上，退化成除了尖叫没有任何功能的器官。",
        logicEn: "When Pain transcends measurement, it turns into evil Jouissance of the Flesh. Subject is nailed to a pure trauma reactor, degrading into an organ functional only for screaming.",
        patch: {
            mechanics: "Base_HELLRAISER_RACK + [Pain_Receptors = Overloaded; Fainting_Mechanism = Disabled]",
            mechanicsEn: "Base_HELLRAISER_RACK + [Pain_Receptors = Overloaded; Fainting_Mechanism = Disabled]",
            aesthetic: "聚焦：注射过量肾上腺素后如同死鱼般圆睁的血丝眼球 + 神经丛被一点点挑起时引发的不受控的肌肉抽搐痉挛。",
            aestheticEn: "Focus: Bloodshot eyes wide like dead fish after adrenaline overdose + Uncontrollable muscle spasms when nerve plexuses are hooked and pulled.",
            runtime: "IF (主体试图咬断舌头来终结生命) THEN (刑具会自动生成软体模具撑开其口腔，迫使其眼睁睁看着自己的肠子被挂在起重机上拉出体外)。",
            runtimeEn: "IF (Attempts_to_Bite_Tongue_to_End_Life) THEN (Torture device auto-generates soft mold prying mouth open, forcing them to watch their intestines pulled out by an engine hoist)."
        }
    },
    {
        id: "stake_loss_love",
        name: "镜像的粉碎（丧失挚爱）", nameEn: "Severing of the Mirror Object",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "自己存活，但那个承载了自己对世界所有羁绊和温暖倒影的肉体至亲/挚爱，在眼前被不可逆地摧毁。",
        defEn: "Surviving while the physical kin/true love, carrying all one's bonds and warm reflections of the world, is irreversibly destroyed before one's eyes.",
        core: "自己没有死，但活着的意义坐标全军覆没。 | The Castration: 外部他者（The External Mirror）的暴毙。",
        coreEn: "Not dead, but the coordinate of living meaning is annihilated. | The Castration: Sudden death of The External Mirror.",
        logic: "在镜像阶段（Mirror Stage），我们通过所爱之人的眼睛确认自己的存在。瞎了这双眼睛，主体就像漂浮在太空的断线风筝，物理幸存等同于流放。",
        logicEn: "In the Mirror Stage, we confirm existence through the beloved's eyes. Blinding these eyes leaves the subject a severed kite in space; physical survival equals exile.",
        patch: {
            mechanics: "Base_MIRROR_SHATTER + [Attachment_Anchor = Slain; Survivor_Guilt_Multiplier = 10x]",
            mechanicsEn: "Base_MIRROR_SHATTER + [Attachment_Anchor = Slain; Survivor_Guilt_Multiplier = 10x]",
            aesthetic: "聚焦：脸庞上溅满了最爱之人的温热颅血，表情呆滞地凝固 + 试图用颤抖的手去拼凑地上那堆根本不可能拼回去的碎块。",
            aestheticEn: "Focus: Face splashed with the warm cranial blood of the beloved, expression frozen blankly + Shaking hands trying to piece together impossible chunks on the floor.",
            runtime: "IF (幸存后试图接受他人新的关爱) THEN (任何温暖的触碰都会引发剧烈的创伤应激（PTSD），仿佛那只手上沾满了亡妻/亡子的血迹)。",
            runtimeEn: "IF (Attempts_to_Accept_New_Care_After_Survival) THEN (Any warm touch triggers severe PTSD, as if the hand is coated with the dead wife/child's blood)."
        }
    },
    {
        id: "stake_infestation",
        name: "肉体殖民（异种狂生）", nameEn: "Somatic Colonization",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "身体不再属于自己，变成被虫卵、孢子或外星生物疯狂吸收养分并破胸而出的异星血肉工厂。",
        defEn: "Body no longer one's own, becoming an alien flesh factory frantically absorbed by eggs, spores, or xenomorphs bursting from the chest.",
        core: "看着自己成为恶心之物的羊水。绝对的生理战栗。 | The Castration: 躯体边界（Somatic Boundary）的穿孔与寄生。",
        coreEn: "Watching oneself serve as amniotic fluid for disgust. Absolute physiological shiver. | The Castration: Perforation and parasitism of Somatic Boundary.",
        logic: "身体是被严格划定的‘我’的领土（Ego Boundary）。肉体殖民是实在界以最下流的方式入侵了这个神圣领土，将高贵的人贬低为蠕虫的排泄物。",
        logicEn: "The body is the strictly demarcated territory of 'I'. Infestation is the Real invading this sacred land in the filthiest way, reducing noble human to worm excrement.",
        patch: {
            mechanics: "Base_XENO_INCUBATOR + [Inner_Integrity = Compromised; Toxin_Upload = 100%]",
            mechanicsEn: "Base_XENO_INCUBATOR + [Inner_Integrity = Compromised; Toxin_Upload = 100%]",
            aesthetic: "聚焦：眼帘下方的皮肤时不时隆起一个指头大小的虫子爬行轨迹 + 猛烈咳嗽时喷出一口带有剧烈腐蚀性的诡异绿色黏液。",
            aestheticEn: "Focus: Skin under eyelid occasionally bulging with a finger-sized worm crawling track + Violent coughing spitting highly corrosive eerie green slime.",
            runtime: "IF (试图用烧红的铁块烙印皮肤以杀死皮下寄生物) THEN (这种剧痛只会加速虫卵的孵化，数以万计的幼虫伴随着烧焦的烤肉味从裂口如喷泉般涌出)。",
            runtimeEn: "IF (Tries_to_Brand_Skin_with_Red-hot_Iron_to_Kill_Subcutaneous_Parasite) THEN (The extreme pain only accelerates egg hatching; tens of thousands of larvae fountain from the burn slit amidst scorched meat scent)."
        }
    },
    {
        id: "stake_poverty",
        name: "绝对赤贫（物理剥削）", nameEn: "Absolute Material Strip",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "失去了一切庇护所、衣物和财产，在冻馁交加中被社会彻底抛弃，沦为街头的腐肉。",
        defEn: "Stripped of all shelter, clothes, and property, utterly abandoned by society amidst freezing starvation, regressing to street carrion.",
        core: "系统性死亡。被大他者的经济账本强制出局。 | The Castration: 社会生存资料（Material Subsistence）的剥夺。",
        coreEn: "Systemic death. Forced out by the Big Other's economic ledger. | The Castration: Deprivation of Material Subsistence.",
        logic: "在资本主义语境下，财产等于尊严与社会属性。赤贫不仅是饿肚子，而是被摘掉了‘文明人’的标签，降维为一只随时可能被城管处理的害兽。",
        logicEn: "In capitalism, property equals dignity and social attribute. Destitution isn't just hunger; it's tearing off the 'civilized' label, degrading into a pest pending disposal.",
        patch: {
            mechanics: "Base_RESOURCE_BANKRUPTCY + [Social_Welfare = 0; Exposure_Damage = Heavy]",
            mechanicsEn: "Base_RESOURCE_BANKRUPTCY + [Social_Welfare = 0; Exposure_Damage = Heavy]",
            aesthetic: "聚焦：在大雪天光着冻得发黑甚至露出部分趾骨的脚丫走在下水道旁边 + 为了争夺一块老鼠吃剩的披萨饼与流浪狗撕咬得满身是血。",
            aestheticEn: "Focus: Walking barefoot near sewers in blizzard, frostbitten black toes showing bone tips + Tearing bloody bites with stray dogs fighting for rat-gnawed pizza.",
            runtime: "IF (曾经的奢华旧友路过时丢下一枚硬币) THEN (主体由于极度饥饿，连羞耻心都无法启动，只会像野兽一样趴在地上疯狂把带泥的硬币吞进胃里以防被抢)。",
            runtimeEn: "IF (Former_Luxurious_Friend_Passes_and_Tosses_Coin) THEN (Due to extreme hunger, subject cannot deploy shame, crawling like beast to violently swallow the muddy coin to prevent it being snatched)."
        }
    },
    {
        id: "stake_disease",
        name: "衰竭深渊（致死绝症）", nameEn: "Terminal Decay",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "肉身机器遭遇了不可逆的内置错误（如癌症、腐败病），眼睁睁看着自己的机能逐日溃烂熄灭。",
        defEn: "The fleshy machine hits an irreversible built-in error (e.g., cancer, rot), helplessly watching one's functions fester and die out day by day.",
        core: "一场带有倒计时的活体处决。 | The Castration: 肉身健康（Somatic Wholeness）的内部解体。",
        coreEn: "A live execution with a countdown. | The Castration: Internal disintegration of Somatic Wholeness.",
        logic: "敌人在外部尚可反击，绝症则是身体细胞的背叛。大他者（命运）给你下达了死刑判决书，而你的身体就是这个残酷法庭里的刑具。",
        logicEn: "External enemies can be fought; terminal illness is cell betrayal. The Big Other (Fate) hands death sentence, and your own body serves as the cruel torture rack.",
        patch: {
            mechanics: "Base_CELLULAR_BETRAYAL + [Vitality_Drain = Exponential; Cure_Probability = 0]",
            mechanicsEn: "Base_CELLULAR_BETRAYAL + [Vitality_Drain = Exponential; Cure_Probability = 0]",
            aesthetic: "聚焦：每一次用力呼吸都会带出肺泡破裂的浓重血腥味 + 看着镜子里那个瘦脱相、头发掉光宛如骷髅般的陌生人。",
            aestheticEn: "Focus: Every strained breath bringing heavy blood stench of rupturing alveoli + Staring at the emaciated, bald, skeletal stranger in the mirror.",
            runtime: "IF (试图参加一场原本期待已久的盛大舞会) THEN (在走上红毯的第一步，剧烈的内脏钻心痛就会迫使他可悲地跪倒在一堆华服贵人的脚边咳血不止)。",
            runtimeEn: "IF (Attempts_to_Attend_Long_Anticipated_Grand_Ball) THEN (On first step down the red carpet, excruciating visceral pain drops him pitifully to his knees, coughing endless blood onto noble dresses)."
        }
    },
    {
        id: "stake_war",
        name: "人间绞肉机（卷入战火）", nameEn: "The Meat Grinder (War)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被抛入绝对的暴力混乱之中，个人的奋斗毫无意义，随时可能变成一枚流弹下无名的残肢。",
        defEn: "Thrown into absolute violent chaos where individual struggles mean nothing, liable anytime to become an unnamed severed limb under stray bullets.",
        core: "将人类社会退化为绝对的黑暗森林。 | The Castration: 文明秩序（Civilized Order）的大规模爆炸。",
        coreEn: "Degrading human society back to absolute dark forest. | The Castration: Mass explosion of Civilized Order.",
        logic: "战争撕毁了一切象征界的契约。你的学历、美貌或善良，在一枚 155mm 榴弹炮面前，产生的物理碰撞参数并不比一头猪高。",
        logicEn: "War shreds all Symbolic contracts. Your degree, beauty, or kindness holds no higher physical collision parameter than a pig before a 155mm howitzer.",
        patch: {
            mechanics: "Base_CHAOTIC_MEAT_GRINDER + [Survival_Logic = RNG_Based; Humanity_Safeguard = Offline]",
            mechanicsEn: "Base_CHAOTIC_MEAT_GRINDER + [Survival_Logic = RNG_Based; Humanity_Safeguard = Offline]",
            aesthetic: "聚焦：被泥土和脑浆糊满的防毒面具镜片 + 轰炸后找不到完整躯体，只能捧起一段带着刺青的手臂放进裹尸袋。",
            aestheticEn: "Focus: Gas mask lenses pasted thick with mud and brain matter + Unable to find intact body post-bombing, only scooping a tattooed severed arm into body bag.",
            runtime: "IF (在废墟里好心为一个濒死敌军士兵包扎) THEN (那个士兵会在弥留之际因为应激反应拉响身上的光荣雷，将两人的血肉在爆炸中彻底混合成一摊泥)。",
            runtimeEn: "IF (Kindly_Bandaging_Dying_Enemy_Soldier_in_Ruins) THEN (The dying soldier, out of shock, pulls his suicide grenade, permanently mixing both flesh pools in the blast)."
        }
    },
    {
        id: "stake_famine",
        name: "噬己循环（绝对饥饿）", nameEn: "Ouroboros Starvation",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "胃酸将胃壁腐蚀，为了获取一丝卡路里，连吃土、啃树皮甚至食子的生物底线都被彻底踏破的炼狱。",
        defEn: "Gastric acid corroding stomach walls. Earning a calorie bridges broken bioloigcal lines: eating dirt, bark, even offspring purgatory.",
        core: "生物发动机因为燃料耗尽而开始切割自身组件。 | The Castration: 能量供给链（Energy Supply Chain）的归零。",
        coreEn: "Biological engine cutting its own parts due to fuel depletion. | The Castration: Zeroing of Energy Supply Chain.",
        logic: "饥饿剥去了人作为精神实体的最后一点外皮，暴露出了我们只是‘需要能量来运转的肉块’这一悲惨的实在界底牌。",
        logicEn: "Starvation peels the last skin of 'spiritual entity', exposing the tragic Real truth: we are just 'meat chunks needing energy to run'.",
        patch: {
            mechanics: "Base_CALORIC_DEFICIT_HELL + [Gastric_Acid = Autophagic; Taboo_Limits = Ignored]",
            mechanicsEn: "Base_CALORIC_DEFICIT_HELL + [Gastric_Acid = Autophagic; Taboo_Limits = Ignored]",
            aesthetic: "聚焦：薄如纸的肚皮上清晰可见蠕动的青色肠管 + 看着皮鞋的皮革边缘开始分泌出疯狂的唾液。",
            aestheticEn: "Focus: Squirming blue intestinal tubes clearly visible through paper-thin belly + Copious frantic saliva secreting while staring at leather shoe edges.",
            runtime: "IF (面对一尊用上等面粉雕刻的敬神祭品) THEN (饥饿的信徒会不顾一切冲上祭坛，不理会后背被宪兵的长矛刺穿，疯狂把神像的脸庞咬碎咽进肚子里死亡)。",
            runtimeEn: "IF (Facing_God_Offering_Sculpted_from_Prime_Flour) THEN (Starving devotees rush the altar, ignoring guards' spears piercing backs, wildly biting off and swallowing the idol's face as they die)."
        }
    },
    {
        id: "stake_drowning",
        name: "幽蓝封喉（深海窒息）", nameEn: "Amniotic Asphyxiation (Drowning)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被密度远远大于空气的水体完全包裹，肺部被冰冷浑浊的液体灌满的绝望撕裂感。",
        defEn: "Completely engulfed by water far denser than air, despairing tear as lungs fill with cold murky liquid.",
        core: "所有挣扎在阻力中消散。向深渊倒行坠落。 | The Castration: 氧气置换通道（Oxygen Exchange）的物理阻断。",
        coreEn: "All struggle dissipates in viscous resistance. Falling backward into the abyss. | The Castration: Physical blockage of Oxygen Exchange.",
        logic: "水是倒错的子宫。溺水不是暴力的切割，而是通过一种虚弱、寒冷的缓慢包裹来剥夺主权。这是弗洛伊德海洋般感觉的暗黑反转——回归死亡的母体。",
        logicEn: "Water is inverted womb. Drowning isn't violent cutting, but slow, weak, cold wrapping stripping sovereignty. The dark flip of Freudian 'oceanic feeling'—return to the death matrix.",
        patch: {
            mechanics: "Base_DEEP_WATER_SUFFOCATION + [Lung_Capacity = Negated; Gravity_Vector = Downward_Abyss]",
            mechanicsEn: "Base_DEEP_WATER_SUFFOCATION + [Lung_Capacity = Negated; Gravity_Vector = Downward_Abyss]",
            aesthetic: "聚焦：向上伸出的手距离水面只有几寸却被脚下的暗流猛烈拉向深黑底部 + 肺部吸入第一口水时剧烈的胸腔痉挛与大量泡沫。",
            aestheticEn: "Focus: Hand reaching upward inches from surface yanked violently to black bottom by undertow + Violent chest spasms and massive bubbles upon inhaling the first gulp of water.",
            runtime: "IF (在水底挣扎时抓到了一根看似救命的绳索) THEN (那只是一根缠满水草的沉船铁锚的绳子，不但不会拉他上去，反而以更快的速度带着他坠向海沟)。",
            runtimeEn: "IF (Grabs_Seemingly_Lifesaving_Rope_While_Struggling_Under) THEN (It's an anchor rope of a weed-choked wreck, dragging him even faster down into the trench)."
        }
    },
    {
        id: "stake_burning",
        name: "绝对碳化（烈火焚身）", nameEn: "Absolute Carbonization (Burning)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "在极端高温的暴虐下，皮肤、脂肪与神经末梢发出滋滋的焦响，被摧毁成黑漆漆的碳化粉末。",
        defEn: "Under tyrannical extreme heat, skin, fat, and nerves crackle and scorch, annihilated into pitch-black carbon powder.",
        core: "最为高亢凄厉的毁灭协奏曲。 | The Castration: 细胞结构（Cellular Structure）的热力学彻底融解。",
        coreEn: "The most high-pitched, shrill concerto of destruction. | The Castration: Thermodynamic absolute meltdown of Cellular Structure.",
        logic: "火是净化也是最不留情面的实在界入侵。它跳跃、嚣张，伴随着极端的爆裂感将人的尊严连同毛发一起烧成灰。这是对肉身存在最猛烈的嘲讽。",
        logicEn: "Fire is purification and the most merciless Real invasion. Jumping and arrogant, it blasts human dignity alongside hair into ash. The fiercest mockery of bodily existence.",
        patch: {
            mechanics: "Base_HELLFIRE_CONSUMPTION + [Pain_MaxOut = True; Tissue_State = Carbonized]",
            mechanicsEn: "Base_HELLFIRE_CONSUMPTION + [Pain_MaxOut = True; Tissue_State = Carbonized]",
            aesthetic: "聚焦：挣扎着爬出火海的手臂上，脂肪像蜡烛一样融化滴落露出惨白的骨头 + 连惨叫的声带都在高温下干瘪断裂发出的嘶嘶漏风声。",
            aestheticEn: "Focus: On arm crawling from flames, fat dripping like candle wax exposing pale bone + Vocal cords shrinking and snapping under heat, emitting hissing airy wheezes instead of screams.",
            runtime: "IF (爱人在火灾外围徒劳地试图洒水扑救) THEN (由于火势过于猛烈，泼过去的水瞬间变成高温水蒸气，反而给大火中心的受苦者增加了极其痛苦的二次烫伤)。",
            runtimeEn: "IF (Lover_Futilely_Splashes_Water_from_Perimeter) THEN (Due to inferno intensity, water snaps to superheated steam, inflicting excruciating secondary scalding to the sufferer inside)."
        }
    },
    {
        id: "stake_freezing",
        name: "热寂的拥抱（极地冻亡）", nameEn: "Thermal Nullification (Freezing)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "在低于临界点的绝对寂寒中，血液流速减缓直至结冰，肉身变成一尊易碎的脆弱冰雕。",
        defEn: "In sub-critical absolute cold, blood slows to ice, flesh turning into a fragile, brittle ice sculpture.",
        core: "宇宙终点‘热寂’在个体身上的预演。 | The Castration: 动能张力（Kinetic Tension）的被动归零。",
        coreEn: "The universe's 'Heat Death' prejudged on an individual. | The Castration: Passive zeroing of Kinetic Tension.",
        logic: "冻死不似烧死那般暴烈，它是诱导性的安眠。在濒死的最后阶段大脑会产生虚假的‘反常热感’，让人带着微笑宽衣解带步入绝对死寂的大他者冰原。",
        logicEn: "Unlike burning, freezing forms inductive sleep. In final stages, 'paradoxical undressing' induces a warm smile as one disrobes stepping into the Big Other's absolute dead-ice field.",
        patch: {
            mechanics: "Base_ABSOLUTE_ZERO_GRIP + [Core_Temp = Falling; Neural_Deception = Warm_Illusion]",
            mechanicsEn: "Base_ABSOLUTE_ZERO_GRIP + [Core_Temp = Falling; Neural_Deception = Warm_Illusion]",
            aesthetic: "聚焦：挂满寒霜的睫毛下那带着诡异解脱微笑的惨蓝嘴唇 + 在被积雪即将掩埋前，僵硬脱下外套双手拥抱冰雪的超现实定格。",
            aestheticEn: "Focus: Pale blue lips forming an eerie smile of relief under frost-heavy lashes + Surreally frozen taking off coat to embrace the ice just before snow burial.",
            runtime: "IF (救援队带着强光和热毯在暴风雪中呼喊他的名字) THEN (他那已经被冻坏的听觉神经会将呼喊声翻译成恶灵的怒吼，逼得他潜意识爬向冰缝更深处送死)。",
            runtimeEn: "IF (Rescue_Team_with_Blankets_and_Lights_Shouts_Name_in_Blizzard) THEN (Frostbitten auditory nerves translate shouts into demonic roars, driving the subconscious to crawl deeper into crevasses to die)."
        }
    },
    {
        id: "stake_buried",
        name: "幽闭棺木（活埋）", nameEn: "Claustrophobic Coffin (Buried Alive)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被封死在只有肩宽、漆黑且氧气一点点稀薄的地底土核或黑暗密室中，等待死神的慢动作降临。",
        defEn: "Sealed in shoulder-width, pitch-black deep dirt core or chamber with thinning oxygen, awaiting grim reaper's slow-motion descent.",
        core: "《活埋》式惊悚。无法施展任何力量的逼仄绝境。 | The Castration: 空间延展性（Spatial Extension）的绝对压缩。",
        coreEn: "'Buried' movie dread. Cramping abyss blocking any exertion. | The Castration: Absolute compression of Spatial Extension.",
        logic: "这剥夺了空间向量，将主体塞入了一个退化的黑暗囊腔。每一次深呼吸带来的废气回流，都在倒数他可怜的存在余量。",
        logicEn: "Vectors stripped, stuffing subject in a regressed dark cyst. Rebreathing exhaust on deep breaths counts down a miserable existence margin.",
        patch: {
            mechanics: "Base_CLAUSTROPHOBIC_TOMB + [Mobility_Vector = 0; O2_Depletion_Rate = High]",
            mechanicsEn: "Base_CLAUSTROPHOBIC_TOMB + [Mobility_Vector = 0; O2_Depletion_Rate = High]",
            aesthetic: "聚焦：十根手指为了去挠抠棺材盖而指甲全部劈裂外翻血肉模糊 + 随着打火机最后一次闪烁熄灭而彻底降临的绝对黑暗。",
            aestheticEn: "Focus: Ten fingers with torn, inverted nails bloody from clawing the coffin lid + Absolute dark descending as the lighter's final flicker dies.",
            runtime: "IF (主体在土层下疯狂敲击SOS求救信号) THEN (这些声音被土壤厚重的土层转化为路过的杀人凶手脚底下踩碎落叶的轻响，完美掩盖了真相)。",
            runtimeEn: "IF (Subject_Frantically_Taps_SOS_Under_Soil) THEN (The heavy soil translates the taps into light rustling of dead leaves under the passing killer's boots, perfectly masking the truth)."
        }
    },
    {
        id: "stake_blindness",
        name: "剥离凝视（绝对盲视）", nameEn: "Excision of the Gaze (Blindness)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "感官核心——眼睛被彻底挖除或强光烧毁，世界永远退缩到只剩声音和气味的残缺象限。",
        defEn: "Sensory core—eyes—gouged out or burnt by blinding light. World forever retracts to crippled quadrants of sound and scent.",
        core: "没有光，就没有镜子，就没有自我的成像。 | The Castration: 视觉捕捉器（Visual Catcher）与大他者投射的毁坏。",
        coreEn: "No light, no mirror, no somatic imaging. | The Castration: Destruction of Visual Catcher and Big Other Projection.",
        logic: "在拉康理论中，眼睛是捕捉客体和形成镜像的唯一中枢。被致盲不仅是看不见，而是被‘剥夺了参与视觉界建构现实的资格’。",
        logicEn: "In Lacanian theory, the eye captures objects and forms the mirror. Being blinded isn't just not seeing, but being 'disqualified from visually constructing reality'.",
        patch: {
            mechanics: "Base_OPTIC_NERVE_SEVER + [Visual_Field = Void; Gaze_Mechanic = Broken]",
            mechanicsEn: "Base_OPTIC_NERVE_SEVER + [Visual_Field = Void; Gaze_Mechanic = Broken]",
            aesthetic: "聚焦：眼眶里只剩下两个流着黑色血泪的骇人空洞 + 用颤抖的手去触摸曾经熟悉爱人如今只能依靠脑补的脸庞。",
            aestheticEn: "Focus: Empty sockets weeping horrific black blood tears + Trembling hands tracing the once-familiar lover's face now forced entirely into imagination.",
            runtime: "IF (仇人故意站在盲人面前不发一言地冷酷嘲笑他) THEN (盲人虽然看不见，但那种皮肤上的恶毒锐利感会被放大十倍，像无数根无形的针扎在他脸上却无处躲闪)。",
            runtimeEn: "IF (Enemy_Stands_Silently_and_Coldly_Mocking_Before_the_Blind) THEN (Blind but feeling skin-pricking malice magnified 10x, like countless invisible needles piercing his face with nowhere to hide)."
        }
    },
    {
        id: "stake_paralysis",
        name: "笼中之脑（全身瘫痪）", nameEn: "Brain in a Cage (Paralysis)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "意识极端清醒，甚至智力超群，但颈部以下的运动神经被彻底切断，连控制一根小指尖都成了神迹。",
        defEn: "Extreme lucidity, even genius intelligence, but motor nerves cut below the neck. Twitching a pinky is a miracle.",
        core: "被装在一个半腐败的肉体硅胶壳内。 | The Castration: 动能执行力（Kinetic Agency）的高位截瘫。",
        coreEn: "Trapped inside a semi-rotting silicone flesh-shell. | The Castration: High-level paraplegia of Kinetic Agency.",
        logic: "灵魂被肉体反向绑架。大他者的惩罚是将你的思维保留至最灵敏的状态，却拔掉了连接鼠标键盘的所有I/O接口。",
        logicEn: "Soul reverse-kidnapped by body. Big Other's punishment: preserving mind at hyper-sensitivity while yanking out all I/O keyboard/mouse interfaces.",
        patch: {
            mechanics: "Base_MOTOR_NEURON_LOCK + [Cognition = Max; Physical_Output = 0]",
            mechanicsEn: "Base_MOTOR_NEURON_LOCK + [Cognition = Max; Physical_Output = 0]",
            aesthetic: "聚焦：那双充满极其复杂情绪的深邃眼睛因为口水不自觉地从嘴角流下而蒙上了一层可鄙的屈辱感 + 飞虫停留在鼻尖却永远无法挥赶的绝望。",
            aestheticEn: "Focus: Deep, complex eyes clouded by despicable humiliation as drool leaks involuntarily from mouth + Despair of a fly resting on the nose you can never swat.",
            runtime: "IF (眼睁睁看着屋内的蜡烛倒下引发大火即将吞没病床) THEN (他的大脑以光速构思了100种逃生路径，但肉体给出的唯一反馈只是眼角极其缓慢地流下一行清泪)。",
            runtimeEn: "IF (Watching_Candle_Fall_Starting_Fire_Nearing_Bed) THEN (Brain plans 100 escape routes at lightspeed, but sole bodily feedback is a clear tear extremely slowly rolling from eye)."
        }
    },
    {
        id: "stake_aging",
        name: "时间的凌迟（极速衰老）", nameEn: "Chronological Atrophy (Rapid Aging)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被施加降维打压，导致细胞端粒疯狂缩短，在短短几天或几小时内，从强壮跨越到皮包骨头的垂暮之年。",
        defEn: "Dimensional suppression shrinking telomeres wildly; transitioning from prime to skeletal twilight in days or hours.",
        core: "《星际穿越》的水之星。时间偷走了所有的荣耀资本。 | The Castration: 时间复原力（Chronological Resilience）的剥削。",
        coreEn: "'Interstellar' Water planet. Time steals all capital of glory. | The Castration: Exploitation of Chronological Resilience.",
        logic: "青春与肉体力是抵抗实在界的最后底牌。极速衰老是强行拖拽进度条，让主体在清醒中被名为“时光”的硫酸迅速腐蚀成渣。",
        logicEn: "Youth/vitality is the final card resisting the Real. Rapid aging forcibly drags the progress bar, watching 'Time' acid corrode you to slag while fully awake.",
        patch: {
            mechanics: "Base_TEMPORAL_CORROSION + [Telomere_Erosion = 50x; Vitality_Regen = Disabled]",
            mechanicsEn: "Base_TEMPORAL_CORROSION + [Telomere_Erosion = 50x; Vitality_Regen = Disabled]",
            aesthetic: "聚焦：刚拔出剑准备怒吼冲锋，却忽然发现拿着剑的手背上布满了老人斑且剧烈颤抖无法握紧 + 头发像枯草一样随风剥落。",
            aestheticEn: "Focus: Drawing sword for roaring charge, suddenly seeing hand covered in liver spots, trembling violently, unable to grip + Hair stripping off in wind like dead grass.",
            runtime: "IF (爱人在其生命最后的三分钟内亲吻他的额头) THEN (他的嘴唇会因为肌肉极度萎缩而无法回应这个吻，只能发出仿佛喉管漏风般衰败的呼气声)。",
            runtimeEn: "IF (Lover_Kisses_Forehead_in_Last_3_Mins_of_Life) THEN (Lips too atrophied to kiss back, only emitting a decayed wheeze like a leaking throat pipe)."
        }
    },
    {
        id: "stake_cannibalism",
        name: "食物链的逆转（被活吃）", nameEn: "Food Chain Inversion (Being Eaten)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "从自诩万物之灵的神坛跌落，成为丧尸、野兽或者食人族疯狂撕咬、吞咽的蛋白块。",
        defEn: "Falling from the altar of 'apex of all', becoming a protein block frantically torn and swallowed by zombies, beasts or cannibals.",
        core: "从‘主体’退化为纯粹的‘卡路里’。 | The Castration: 物种优越感（Species Superiority）的消化道终结。",
        coreEn: "Degrading from 'Subject' to pure 'Calories'. | The Castration: Digestive end of Species Superiority.",
        logic: "在咀嚼声中，大他者的文化外衣被彻底撕碎。人作为一种高等建构被强行拉入动物界的消化道循环，承受了物理和符号的双重溶解。",
        logicEn: "Amid chewing sounds, Big Other's cultural cloak is shredded. Human as high construct dragged into animal digestive loop, suffering dual physical-symbolic dissolution.",
        patch: {
            mechanics: "Base_APEX_INVERSION + [Prey_Status = True; Organic_Substrate = Edible]",
            mechanicsEn: "Base_APEX_INVERSION + [Prey_Status = True; Organic_Substrate = Edible]",
            aesthetic: "聚焦：眼睁睁看着异兽撕扯下自己的大腿并伴随着津津有味的咀嚼声喷出大股动脉血 + 腹腔被破开时温热的肠子滑落在泥地中被哄抢。",
            aestheticEn: "Focus: Watching alien-beast tear off own thigh with relishing chews, spurting arterial blood + Belly ripped, warm intestines slipping into mud to be scrambled for.",
            runtime: "IF (在被恶狼群分食时试图用最恶毒的语言咒骂它们) THEN (野兽根本听不懂任何符号界语言，只会觉得这个猎物挣扎时分泌的激素让肉质略带了一丝发紧的酸味)。",
            runtimeEn: "IF (Attempts_to_Curse_Wolves_with_Vile_Words_While_Being_Eaten) THEN (Beasts understand no Symbolic language, merely sensing the struggling prey's hormones give the meat a slightly acidic tension)."
        }
    },
    {
        id: "stake_home_loss",
        name: "拓扑学流放（家园焚毁）", nameEn: "Topological Exile (Loss of Home)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "最能代表安全感与心理拓扑支点的物理建筑物（房子、故乡）被一把大火夷平或被系统拆机强行抹除。",
        defEn: "The physical architecture (house, hometown) representing security and psych-topological pivot razed by fire or bulldozed by the system.",
        core: "退行（Regression）之路被物理炸毁。无法再‘回家’。 | The Castration: 庇护所（Sanctuary）的爆裂。",
        coreEn: "The path of Regression physically exploded. No more 'going home'. | The Castration: Eruption of Sanctuary.",
        logic: "家不仅是砖头，那是大他者承诺“安全”的物理结界。家的焚毁代表着主体彻底暴露在寒冷荒谬的实在界狂风中，成为游荡的孤魂。",
        logicEn: "Home isn't bricks; it's the Big Other's physical ward promising 'safety'. Its burning exposes the subject entirely to the cold, absurd Real gale as a wandering ghost.",
        patch: {
            mechanics: "Base_SANCTUARY_ERADICATION + [Safe_Zone = Destroyed; Homeless_Buff = Active]",
            mechanicsEn: "Base_SANCTUARY_ERADICATION + [Safe_Zone = Destroyed; Homeless_Buff = Active]",
            aesthetic: "聚焦：倒塌的房梁压碎了合照的相框，玻璃渣刺入相片中笑脸的眼睛里 + 站在一片废墟黑炭前，手里还握着那把永远失去对应门锁的黄铜钥匙。",
            aestheticEn: "Focus: Collapsed beam crushing photo frame, glass shards piercing the smiling eyes inside + Standing before scorched ruins holding a brass key whose lock is forever gone.",
            runtime: "IF (主体凭借肌肉记忆在暴雨中走回那个不再存在的坐标试图躲雨) THEN (只会重重地撞在已经被铁丝网围起来的冰冷施工挡板上，满脸鲜血地跪在雨中)。",
            runtimeEn: "IF (Muscle_Memory_Walks_Back_to_Deleted_Coordinate_to_Hide_from_Storm) THEN (Merely smashes face-first onto cold wire-mesh construction fencing, kneeling bloodied in the rain)."
        }
    },
    {
        id: "stake_enslaved",
        name: "肉体牲畜化（绝对奴役）", nameEn: "Somatic Objectification (Chained)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被套上沉重的脚镣和烙印，当成矿坑和血汗工厂里连牲畜都不如的干电池，榨干每一滴骨髓。",
        defEn: "Shackled and branded, treated as a battery worse than livestock in a mine or sweatshop, draining every drop of marrow.",
        core: "自由意志在物理皮鞭下剥落为纯粹的劳动力。 | The Castration: 身体主权（Somatic Sovereignty）的铁铸交割。",
        coreEn: "Free will peeling under physical whips into pure labor. | The Castration: Iron-forged handover of Somatic Sovereignty.",
        logic: "当大他者（如奴隶主/极权）拒绝承认你的人类符号位时，你仅剩下力学向量和卡路里发热量。你的生命不再是传记，而是资产负债表上划去的消耗品折旧。",
        logicEn: "When the Big Other (slaver/totalitarian) denies your human symbol, you remain only kinetic vectors and calories. Your life is no biography, but depreciating consumables in a ledger.",
        patch: {
            mechanics: "Base_COMMODITY_BINDING + [Labor_Extraction = Maximized; Autonomy_Radius = Chain_Length]",
            mechanicsEn: "Base_COMMODITY_BINDING + [Labor_Extraction = Maximized; Autonomy_Radius = Chain_Length]",
            aesthetic: "聚焦：脖子上的粗糙铁环磨烂了皮肤，苍蝇在化脓的伤口上安家 + 像齿轮一样机械挥舞镐头直到肌肉拉裂的清脆声响。",
            aestheticEn: "Focus: Coarse iron collar grinding neck skin to rot where flies nest in pus + Mechanically swinging pickaxe like a gear until the crisp snap of tearing muscle.",
            runtime: "IF (在矿坑底层因为劳累过度吐血倒下，恳求监工给一口水) THEN (监工只会像看坏掉的拖拉机一样，一脚踢开并大声呼唤工人把这具肉拖去喂狗以节约丧葬费)。",
            runtimeEn: "IF (Collapses_Vomiting_Blood_in_Mine_Pit_Begging_for_Water) THEN (Overseer treats it like a broken tractor, kicks him aside, yelling for workers to drag the meat to dogs to save funeral fees)."
        }
    },
    {
        id: "stake_sacrifice",
        name: "祭坛羔羊（被作为筹码献祭）", nameEn: "Altar Lamb (Sacrificed)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被他人、体制或曾经的同伴五花大绑推上极刑的祭坛，用作获取某项大义或利益的筹金。",
        defEn: "Hogtied and pushed to the altar of extreme penalty by others, system, or ex-comrades, used as a chip for grand cause or profit.",
        core: "被动成全了他者的“英雄剧本”。绝望的牺牲品。 | The Castration: 个体价值（Individual Value）的客体置换。",
        coreEn: "Passively completing the Other's 'Hero Script'. Desperate sacrifice. | The Castration: Object replacement of Individual Value.",
        logic: "在庞大的象征界天平中，某人的存活重于主体的存活。于是主体被迫成为替罪羊（Pharmakon），被社会秩序吞除以换取净化或和平。",
        logicEn: "In the massive Symbolic scale, someone's survival outweighs the subject's. Subject is forced as the scapegoat (Pharmakon), swallowed by social order to buy purification/peace.",
        patch: {
            mechanics: "Base_SCAPEGOAT_PROTOCOL + [Ritual_Victim = Subject; Benefit_to_Other = High]",
            mechanicsEn: "Base_SCAPEGOAT_PROTOCOL + [Ritual_Victim = Subject; Benefit_to_Other = High]",
            aesthetic: "聚焦：祭坛上反射出狂热火光的刀刃正悬在咽喉上空 + 台下那些曾经在酒馆里碰杯的朋友们此刻却带着伪善的肃穆低头狂颂祷文。",
            aestheticEn: "Focus: Blade reflecting fanatical firelight suspended over the throat + Below the altar, tavern friends now hypocritically solemn, chanting prayers with heads bowed.",
            runtime: "IF (在被剖腹之际试图痛骂所谓的‘大局’的虚伪) THEN (刽子手会提前割除其声带，将主体的辱骂变成祭典中被判定为‘神圣受难’的低等哽咽)。",
            runtimeEn: "IF (Tries_to_Curse_the_Hypocrisy_of_'Greater_Good'_During_Disembowelment) THEN (Executioner pre-cuts vocal cords, turning curses into low choking designated as 'sacred suffering' in the ritual)."
        }
    },
    {
        id: "stake_experiment",
        name: "解剖台物件（生体病态实验）", nameEn: "Vivisection Subject",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被变态反派或疯狂机器钉在冰冷的手术台上，在完全清醒状态下被切开、注射、注入机械液改变神经连接。",
        defEn: "Nailed to cold surgery table by perverted villains or mad machines, cut open fully awake, injected, mechanic-fluid infused altering neural links.",
        core: "《电锯惊魂》与《弗兰肯斯坦》的混合极刑。 | The Castration: 肉身崇高（Sublime Form）的完全祛魅。",
        coreEn: "Saw meets Frankenstein extreme execution. | The Castration: Complete disenchantment of Sublime Form.",
        logic: "科学客观性对主观存在的绝对强暴。在实验记录板上，没有姓名也没有灵魂，而只有编号#404和一系列血肉的应力测试曲线。",
        logicEn: "Absolute rape of subjective existence by scientific objectivity. On the clipboard is no name/soul, only #404 and flesh-stress curves.",
        patch: {
            mechanics: "Base_MAD_SCIENCE_VAR + [Anesthesia = Disabled; Body_Modification = Grotesque]",
            mechanicsEn: "Base_MAD_SCIENCE_VAR + [Anesthesia = Disabled; Body_Modification = Grotesque]",
            aesthetic: "聚焦：没有打麻药的情况下听到电锯切开头盖骨极具金属摩擦感的刺耳噪音 + 视线斜上方的一面镜子里倒映出自己已经被掏空的胸腔内部。",
            aestheticEn: "Focus: Unanesthetized hearing the harsh metallic friction noise of a buzzsaw opening skull + Mirror slanted above reflecting one's own hollowed-out chest cavity.",
            runtime: "IF (实验导致的剧痛导致主体心率过高即将休克猝死) THEN (机器臂会瞬间精准注入阻断剂并强行电击心脏复苏，将主体从死神手里拽回来继续接受测试)。",
            runtimeEn: "IF (Intense_Pain_Spikes_Heart_Rate_Toward_Shock_and_Death) THEN (Robot arm instantly injects blocker and electroshocks heart, accurately ripping subject from Reaper's grip to continue testing)."
        }
    },
    {
        id: "stake_devoured_void",
        name: "事件视界（虚空分解）", nameEn: "Event Horizon (Void Consumed)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "跌入黑洞、能量漩涡或高维暗物质网中，以超越物理学原理的方式被撕裂成分子级别的飞灰。",
        defEn: "Falling into black hole, vortex, or high-dimensional dark net, torn to molecular ash defying physical laws.",
        core: "拉普拉斯妖的归档。连一片破损的布料都没能留下。 | The Castration: 物理实在界（Physical Real）的彻底退场。",
        coreEn: "Laplace's demon archive. Not even a torn scrap of cloth remains. | The Castration: Eradication of the Physical Real.",
        logic: "最洁净但也最彻底的摧毁形式。没有坟墓供人凭吊。从大他者的记账本上，这个质量块被物理硬删除（Hard Delete）。",
        logicEn: "Cleanest yet most absolute ruin. No grave for mourning. From the Big Other's ledger, this mass block is physically Hard Deleted.",
        patch: {
            mechanics: "Base_VOID_ANNIHILATION + [Molecular_Bonds = Ripped; Spatial_Presence = Nullified]",
            mechanicsEn: "Base_VOID_ANNIHILATION + [Molecular_Bonds = Ripped; Spatial_Presence = Nullified]",
            aesthetic: "聚焦：手臂进入黑洞视界线的瞬间，在极度拉扯下视觉上化成了无数条血红色的面条状虚影 + 听不到任何惨叫的绝对真空寂静。",
            aestheticEn: "Focus: Instant arm enters event horizon, visually spaghettified into countless blood-red blurry noodles + Absolute vacuum silence without any scream.",
            runtime: "IF (同伴试图扔出钩索来将他拉出吸积盘) THEN (钩索一旦接触到虚空外壁就会如同玻璃般粉碎，同伴只能眼睁睁地看着他像一滴墨水落入深海般隐去)。",
            runtimeEn: "IF (Comrade_Tries_Throwing_Hook_to_Pull_from_Accretion_Disk) THEN (Hook shatters like glass upon void's edge; comrade watches him fade like a drop of ink in deep ocean)."
        }
    },
    {
        id: "stake_lobotomy",
        name: "额叶的钉锤（肉身格式化）", nameEn: "Somatic Wipe (Lobotomy)",
        group: "D. 物理毁灭", groupEn: "Ruin",
        def: "被精神病院的冰锥或极权机器精准破坏了大脑前额叶，拔出了那根用来感知悲伤、愤怒的神经引线。",
        defEn: "Precise destruction of prefrontal lobe via asylum icepick or totalitarian machine, yanking the nerve fuze feeling grief/anger.",
        core: "《飞越疯人院》的悲叹结局。变成在阳光下流口水的痴呆空壳。 | The Castration: 主体火花（Subjective Spark）的物理消杀。",
        coreEn: "One Flew Over the Cuckoo's Nest lament. Becoming a drooling demented husk in the sun. | The Castration: Physical extermination of Subjective Spark.",
        logic: "大他者（如医疗体制/极权）判定主体的疯狂是对秩序的威胁。既然在符号界你无法被规训，那就直接在物理层面用锥子重构你的主板。",
        logicEn: "Big Other judges subject's madness a threat. Since untameable in Symbolic, they simply restructure the motherboard physically with an icepick.",
        patch: {
            mechanics: "Base_LOBOTOMY_PROTOCOL + [Prefrontal_Cortex = Slaved; Emotional_Peak = Flattened]",
            mechanicsEn: "Base_LOBOTOMY_PROTOCOL + [Prefrontal_Cortex = Slaved; Emotional_Peak = Flattened]",
            aesthetic: "聚焦：坚硬的冰锥从眼眶上方被小银锤无情敲碎骨骼楔入脑髓的一声骨裂闷响 + 手术后那一双曾经桀骜不驯的猛兽眼睛变成了温顺且浑浊的金鱼眼。",
            aestheticEn: "Focus: Muffled bone-crack as hard icepick is hammered ruthlessly past eye socket into brain marrow + Post-op, the once untamed beastly eyes turn into docile, murky goldfish eyes.",
            runtime: "IF (仇家后来站到他的轮椅面前向他吐口水并扇耳光) THEN (曾经能咬断敌人喉咙的猛士，现在只会因为感受到脸颊震动而发出一阵不知所谓的呵呵傻笑)。",
            runtimeEn: "IF (Enemy_Later_Spits_and_Slaps_Him_in_Wheelchair) THEN (The fierce warrior who'd bite throats now merely giggles mindlessly at the cheek vibration)."
        }
    }
];
