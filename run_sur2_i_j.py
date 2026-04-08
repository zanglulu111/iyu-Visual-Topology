import os
import re

def process_file(filepath, replacements):
    with open(filepath, 'r') as f:
        content = f.read()
    
    for core_en_target, ref_cn, ref_en in replacements:
        replacement = f'{core_en_target}\n      reference: "{ref_cn}",\n      referenceEn: "{ref_en}",'
        content = content.replace(core_en_target, replacement)
        
    with open(filepath, 'w') as f:
        f.write(content)

reps_i = [
    ('coreEn: "Illusion & cost of girl power. Beautiful sacrifice under commercial packaging. | Anchor ($): M3 Broken_Star_Wand",',
     '《魔法少女小圆》(2011, 新房昭之) / 《美少女战士》(1992, 动漫)',
     '\\"Puella Magi Madoka Magica\\" (2011, Akiyuki Shinbo) / \\"Sailor Moon\\" (1992, Anime)'),
    ('coreEn: "Will vs Physics. Refusing compromise, forcibly rewriting sys-settings by burning lifeforce. | Anchor ($): M1 Bloody_Bandana",',
     '《天元突破》(2007, 今石洋之) / 《新世纪福音战士剧场版：破》(2009, 庵野秀明)',
     '\\"Gurren Lagann\\" (2007, Hiroyuki Imaishi) / \\"Evangelion: 2.0 You Can (Not) Advance\\" (2009, Hideaki Anno)'),
    ('coreEn: "Phys projection of giant phallus & return to maternal womb. Hyper-violent machine vs hyper-fragile pilot. | Anchor ($): M6 LCL_Fluid",',
     '《新世纪福音战士》(1995, 庵野秀明) / 《机动战士高达：逆袭的夏亚》(1988, 富野由悠季)',
     '\\"Neon Genesis Evangelion\\" (1995, Hideaki Anno) / \\"Mobile Suit Gundam: Char\'s Counterattack\\" (1988, Yoshiyuki Tomino)'),
    ('coreEn: "Modern loser\'s reset request. Other provides cheat body & world flattened by stats. | Anchor ($): M2 Status_Menu_Glow",',
     '《Re:从零开始的异世界生活》(2016, 动漫) / 《无职转生》(2021, 动漫)',
     '\\"Re:Zero - Starting Life in Another World\\" (2016, Anime) / \\"Mushoku Tensei\\" (2021, Anime)'),
    ('coreEn: "Morbid dread of loss. Building abs-stable interpersonal model by stripping partner\'s freedom. | Anchor ($): M5 Bloody_Pink_Phone",',
     '《未来日记》(2011, 动漫) / 《日在校园》(2007, 动漫)',
     '\\"Future Diary\\" (Mirai Nikki) (2011, Anime) / \\"School Days\\" (2007, Anime)'),
    ('coreEn: "Safety asymmetry. U need her but she relies more on u. Bio-components designed purely to be loved. | Anchor ($): M1 Furry_Bell",',
     '《巧克力与香子兰》(OVA) / 《传颂之物》(第一季, 动漫)',
     '\\"Nekopara\\" (OVA) / \\"Utawarerumono\\" (Anime)'),
    ('coreEn: "Abs-allergy to mediocrity. Using self-made myth vocab to resist the coming dead-end adult life. | Anchor ($): M4 Seal_Bandage",',
     '《中二病也要谈恋爱！》(2012, 京都动画) / 《命运石之门》(2011, 动漫)',
     '\\"Love, Chunibyo & Other Delusions\\" (2012, Kyoto Animation) / \\"Steins;Gate\\" (2011, Anime)'),
    ('coreEn: "Emotion in vacuum tube. Wrapping a tired real human in 2D shell, peddling committment-less company. | Anchor ($): M6 Holo_Avatar",',
     '《未麻的部屋》(1997, 今敏) / 现代Vtuber文化直播',
     '\\"Perfect Blue\\" (1997, Satoshi Kon) / Modern Vtuber Streams'),
    ('coreEn: "Hoodlum honor. Other refuses them diplomas, they issue own via fists on street. | Anchor ($): M3 Bloody_Bokken",',
     '《热血高校》(2007, 三池崇史) / 《头文字D》(2005, 刘伟强/麦兆辉)',
     '\\"Crows Zero\\" (2007, Takashi Miike) / \\"Initial D\\" (2005, Andrew Lau/Alan Mak)'),
    ('coreEn: "Ult-peace w/ Nihilism. If doom comes & can\'t be changed, might as well brew coffee first. | Anchor ($): M2 Empty_Can_Helmet",',
     '《少女终末旅行》(2017, 动漫) / 《横滨购物纪行》(OVA)',
     '\\"Girls\' Last Tour\\" (2017, Anime) / \\"Yokohama Kaidashi Kikou\\" (OVA)')
]

reps_j = [
    ('coreEn: "Violent reject of fake elegance. Asserting self-existence via ugly & noise. | Anchor ($): M4 Torn_Leather",',
     '《控制》(2007, 安东·柯本) / 《席德与南茜》(1986, 亚力克斯·考克斯)',
     '\\"Control\\" (2007, Anton Corbijn) / \\"Sid and Nancy\\" (1986, Alex Cox)'),
    ('coreEn: "Building pride from void. Redrawing turf w/ rhythm against systemic poverty. | Anchor ($): M5 Street_Graffiti_Wall",',
     '《街区男孩》(1991, 约翰·辛格顿) / 《狂野的风格》(1983, 查理·阿贺恩)',
     '\\"Boyz n the Hood\\" (1991, John Singleton) / \\"Wild Style\\" (1983, Charlie Ahearn)'),
    ('coreEn: "Melancholic dignity. Finding beauty in dark, defending vs mediocrity via aesthetics of death. | Anchor ($): M1 Black_Lace_Parasol",',
     '《剪刀手爱德华》(1990, 蒂姆·伯顿) / 《乌鸦》(1994, 亚历克斯·普罗亚斯)',
     '\\"Edward Scissorhands\\" (1990, Tim Burton) / \\"The Crow\\" (1994, Alex Proyas)'),
    ('coreEn: "Dissolving subject. Using extreme beats & chems to temp reach Imaginary climax of oneness. | Anchor ($): M2 Smiley_Pill",',
     '《猜火车》(1996, 丹尼·博伊尔) / 《派对狂人》(2002, 迈克尔·温特伯顿)',
     '\\"Trainspotting\\" (1996, Danny Boyle) / \\"24 Hour Party People\\" (2002, Michael Winterbottom)'),
    ('coreEn: "Dilemma of authenticity. When rebel is commodified to fashion, how to bear the disgust of being co-opted. | Anchor ($): M4 Torn_Flannel",',
     '《单身贵族》(1992, 卡梅伦·克罗) / 《最后一日》(2005, 加斯·范·桑特)',
     '\\"Singles\\" (1992, Cameron Crowe) / \\"Last Days\\" (2005, Gus Van Sant)'),
    ('coreEn: "Disguise as rebel. Building tiny shell via bizarre outfits in hyper-repressed collectivist society. | Anchor ($): M6 Plastic_Hair_Clip",',
     '《下妻物语》(2004, 中岛哲也) / 《娜娜》(2005, 大谷健太郎)',
     '\\"Kamikaze Girls\\" (2004, Tetsuya Nakashima) / \\"NANA\\" (2005, Kentarō Ōtani)'),
    ('coreEn: "Body\'s conquer of space. Turning cold city facilities to playthings, resisting private property. | Anchor ($): M3 Worn_Skate_Wheel",',
     '《狗镇和滑板少年》(2001, 斯泰西·佩拉尔塔) / 《滑板少年》(2018, 宾·刘)',
     '\\"Dogtown and Z-Boys\\" (2001, Stacy Peralta) / \\"Minding the Gap\\" (2018, Bing Liu)'),
    ('coreEn: "Performative fragility. Seeking Other\'s attention & validate by showing wounds. | Anchor ($): M5 Black_Tear",',
     '《詹妮弗的肉体》(2009, 卡瑞恩·库萨马) / 《十三岁》(2003, 凯瑟琳·哈德威克)',
     '\\"Jennifer\'s Body\\" (2009, Karyn Kusama) / \\"Thirteen\\" (2003, Catherine Hardwick)'),
    ('coreEn: "Dark side of brotherhood. Peak belonging paired w/ peak violence & exclusivity. Fallen modern knights. | Anchor ($): M1 Patched_Cut",',
     '《逍遥骑士》(1969, 丹尼斯·霍珀) / 《无政府之子》(2008-2014, 剧集)',
     '\\"Easy Rider\\" (1969, Dennis Hopper) / \\"Sons of Anarchy\\" (2008-2014, Series)'),
    ('coreEn: "Tech-fear romanticized. Wearing doomsday, mocking final dance in mech noise. | Anchor ($): M6 Neon_Gas_Mask",',
     '《黑客帝国2：重装上阵》(2003, 锡安地下狂欢片段) / 《黑夜传说》(2003, 伦·怀斯曼)',
     '\\"The Matrix Reloaded\\" (2003, Zion Rave Scene) / \\"Underworld\\" (2003, Len Wiseman)'),
]

process_file('/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR2/group_i.ts', reps_i)
process_file('/Users/lujiaqi/Desktop/【迷雾学派】爱欲视觉拓扑学 2-24版/data/engine_surface/SUR2/group_j.ts', reps_j)
