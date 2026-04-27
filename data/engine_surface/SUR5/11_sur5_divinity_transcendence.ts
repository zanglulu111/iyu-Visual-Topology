import { LibraryCategoryDef } from '../../../types';
import { objectAnchorItem } from './_shared';

export const SUR5_DIVINITY_TRANSCENDENCE: LibraryCategoryDef = {
  id: "sur5_divinity_transcendence",
  name: "11. 变形装置 (Transformation Apparatus)",
  nameEn: "Transformation Apparatus",
  desc: "上传冠、药瓶、外骨壳、神经刺、静滞座、义体肺、蜕变舱或环形线路等能改变机体、意识、形态或运行状态的装置。",
  descEn: "Devices such as upload crowns, vials, exoshells, neural spikes, stasis seats, prosthetic lungs, metamorphosis pods, or halo circuits that alter organism, mind, form, or operating state.",
  items: [
    objectAnchorItem("sur5_upload_crown", "上传冠", "Upload Crown", "一顶接满细线的金属冠，内圈排列着接口针。", "A wired metal crown lined with connector pins inside.", "赛博宗教", "Cyber religion"),
    objectAnchorItem("sur5_elixir_vial", "冷银药瓶", "Cold-Silver Vial", "一只装着银色液体的小瓶，瓶身没有标签。", "A small vial of silver liquid with no label.", "炼金叙事", "Alchemy narratives"),
    objectAnchorItem("sur5_exoshell", "外骨壳", "Exoshell", "一具打开的外骨壳，内部固定带仍有体温感应灯。", "An opened exoshell whose inner straps still show body-heat sensor lights.", "机甲科幻", "Mecha sci-fi"),
    objectAnchorItem("sur5_neural_spike", "神经接驳刺", "Neural Spike", "一根带有螺旋纹的神经接驳刺，尾端连接数据缆。", "A spiral-grooved neural spike with a data cable attached to its tail.", "生物朋克", "Biopunk"),
    objectAnchorItem("sur5_stasis_seat", "静滞座", "Stasis Seat", "一张嵌入环形冷却管的静滞座椅。", "A stasis chair embedded with circular cooling tubes.", "硬科幻", "Hard sci-fi"),
    objectAnchorItem("sur5_prosthetic_lung", "义体肺", "Prosthetic Lung", "一对透明义体肺叶，边缘带着微型阀门。", "A pair of transparent prosthetic lung lobes edged with micro-valves.", "医疗科幻", "Medical sci-fi"),
    objectAnchorItem("sur5_metamorphosis_pod", "蜕变舱", "Metamorphosis Pod", "一只竖立舱体，舱壁内侧布满注射口。", "A vertical pod whose inner walls are covered with injection ports.", "形态科幻", "Morphology sci-fi"),
    objectAnchorItem("sur5_halo_circuit", "环形线路", "Halo Circuit", "一圈可套在头颈周围的发光线路环。", "A glowing circuit ring designed to fit around head and neck.", "奇幻科幻", "Science fantasy")
  ]
};
