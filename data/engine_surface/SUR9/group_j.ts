import { LibraryCategoryDef } from '../../../types';
import { roleIdentityItem } from './_shared';

export const SUR9_GROUP_J: LibraryCategoryDef = {
  id: "role_capital_media",
  name: "10. 资本与媒体身份 (Capital & Media)",
  nameEn: "Capital & Media Roles",
  desc: "通过投资、平台、品牌、曝光、舆论和消费符号获得行动权限的身份。只给资源接口。",
  descEn: "Roles whose access comes through investment, platforms, brands, exposure, opinion, and consumer symbols. Provides resource interfaces only.",
  items: [
    roleIdentityItem("sur9_tech_founder", "科技创业者", "Tech Founder", "围绕融资、产品发布、代码仓库、用户数据和董事会工作的创业者。", "A founder working through funding, launches, code repositories, user data, and boards.", "创业剧", "Startup drama"),
    roleIdentityItem("sur9_investor", "投资人", "Investor", "通过股权、基金、尽调、路演和退出方案调动资源的人。", "A resource-holder working through equity, funds, due diligence, roadshows, and exit plans.", "金融叙事", "Finance stories"),
    roleIdentityItem("sur9_fund_manager", "基金经理", "Fund Manager", "管理组合、风控、交易指令、客户报告和市场窗口的金融从业者。", "A finance worker managing portfolios, risk, trade orders, client reports, and market windows.", "金融惊悚", "Finance thriller"),
    roleIdentityItem("sur9_influencer", "流量博主", "Influencer", "依靠账号、直播、短视频、粉丝群和广告合同工作的公众账号经营者。", "A public account operator working through channels, livestreams, short videos, fan groups, and ad contracts.", "网络名利场", "Online fame"),
    roleIdentityItem("sur9_media_mogul", "传媒老板", "Media Mogul", "控制频道、报刊、平台、主持人合同和新闻排期的媒体经营者。", "A media owner controlling channels, papers, platforms, host contracts, and news schedules.", "传媒剧", "Media drama"),
    roleIdentityItem("sur9_art_patron", "艺术赞助人", "Art Patron", "通过收藏、捐赠、基金会、驻留项目和开幕名单影响艺术流通的人。", "A patron influencing art circulation through collections, donations, foundations, residencies, and opening lists.", "艺术圈", "Art world"),
    roleIdentityItem("sur9_luxury_icon", "奢侈品牌偶像", "Luxury Brand Icon", "以造型、代言、秀场座位、街拍和品牌合同维持曝光的人。", "A public figure whose exposure depends on styling, endorsements, runway seats, street photos, and brand contracts.", "时尚名利场", "Fashion fame"),
    roleIdentityItem("sur9_crypto_exchange_founder", "加密交易所创始人", "Crypto Exchange Founder", "运营钱包、撮合引擎、用户资产、合规文件和跨境服务器的人。", "An operator of wallets, matching engines, user assets, compliance papers, and cross-border servers.", "加密金融", "Crypto finance")
  ]
};
