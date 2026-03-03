
import { LacanCategory } from './lacan_dictionary';

export const HEGEL_DICTIONARY: LacanCategory[] = [
  {
    id: "hegel_dialectic",
    name: "辩证法 (Dialectics)",
    enName: "Dialectics",
    desc: "历史与精神的运动逻辑。",
    concepts: [
      {
        id: "master_slave", name: "主奴辩证法", enName: "Master-Slave Dialectic", category: "Spirit",
        shortDef: "主人通过奴隶的承认而存在，但奴隶通过劳动获得了对物质的掌控，最终超越主人。",
        detailed: {
            definition: "自我意识需要另一个自我意识的承认。斗争是必然的。最终，依赖奴隶的主人变得空虚，而改造世界的奴隶获得了自由。",
            analogy: "富二代（主人）依赖管家（奴隶）。最后管家掌握了一切，富二代成了废人。",
            application: "M5 (驱力)：角色关系的动态反转。"
        }
      },
      {
        id: "aufheben", name: "扬弃", enName: "Aufheben (Sublation)", category: "Logic",
        shortDef: "既取消又保留，并提升到更高层次。",
        detailed: {
            definition: "矛盾不是要被消灭，而是要被整合。花朵消失了，但它是果实的一部分。",
            analogy: "青春的结束不是损失，它是成熟的必要条件。",
            application: "M7 (结局)：真正的结局不是回到原点，而是螺旋上升。"
        }
      }
    ]
  }
];
