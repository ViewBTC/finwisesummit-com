(function(win) {
  var opts = {
    element: document,
    lang: (function() {
      var tyLang = localStorage.tyLang;

        if (tyLang && tyLang.length > 0 && tyLang != "undefined") {
        return tyLang;
      }
      return "zh";

    })(), //en | jap,




    i18n: {
      //key编码规则：取前2个中文字符拼音+最后2个中文字符拼音
      //不满4个中文字符用e代表
      zh: {

        webtitle1:"纷智峰会 · 东京",
        webtitle_Hk:"纷智峰会 · 香港",



        webvisa2:"纷智峰会-签证指南",
        webcooperation3:"纷智峰会-赞助合作",
        webabout4:"纷智峰会-关于我们",
        webagenda5:"纷智峰会 · 东京议程",

        seey1: "首页",
        hyyc2: "会议议程",
        zzhz3: "赞助合作",
        wjhg4: "往届回顾",
        gywm5: "关于我们",
        hqmp6: "获取门票",
        qyyj7: "企业参展或演讲",
        wncp8: "为您提供理想平台树立品牌认知度、达成联合主办关系和发布新产品",
        qybm9: "企业报名",
        grbm10: "个人购票报名",
        // xsly11: "限时早鸟票1588元4月21日恢复2800元",
        xsly11: " 点击个人报名，购买峰会门票",
        grbm12: "个人报名",
        chjb13: "参会嘉宾",
        tzjg14: "投资机构",
        mtbd15: "媒体参与报道",
        adviceperson: "金融科技意见领袖",
        perproject: " 国内外顶尖区块链项目",
        chinamacau: " 中国澳门",
        mcaddr: " 地址",
        mcaddrdetail: " 中国澳门 路氹 路氹连贯公路 喜来登金沙城中心大酒店",
        mctime: " 时间",
        mctimedetail: " 2018年1月12日-13日",
        fwmacaudes: " 2018年1月12日，Finwise Summit 纷智区块链峰会将在中国·澳门举办。此次峰会旨在加强全球金融行业从业者们的交流，推动全球金融科技的发展。峰会还将以目前金融科技领域最前沿的区块链技术为主导，集合全球优秀金融科技及区块链企业，对未来科技金融及区块链技术应用发展，进行展望和推进。",
        mcflashbacks: " 精彩回顾",
        contactus: " 联系我们",
        wechatnum: " 微信公众号",
        sponsorshipct: " 赞助联系人",
        citysh: " 上海站",
        citymacaustation: "澳门站",
        cityJapanstation: "日本站",
          cityHongKongstation:'香港站',


        qqgs16: "全球区块链公司",
        gydh17: "关于大会",
        fstj18:
          "Finwise Summit 纷智区块链峰会，旨在加强全球金融行业从业者们的交流，推动全球金融科技的发展，我们将以目前金融科技领域最前沿的区块链技术为主导，集合全球优秀企业内企业，对未来科技金融及区块链技术应用发展，进行展望和推进。",
        ckgd19: "查看更多 ↓",
        lhzb20: "联合主办",
        mtxb21: "媒体协办",
        xbfe22: "协办方",
        pwzx23: "国内合作",
        zzzx24: "商务合作",
        zzzx2444:"合作",
        zzzx24444:'媒体合作',
        canApply:"如需申请新闻通行证，请将申请电邮至【events@el8v.io】。如果您有适当的证件，欢迎您免费参加。",
        gywm25: "媒体合作",
        zzzxMrW:"王先生",
        zzzxMrsZ:"周小姐",

        fzyc26: "2018 纷智区块链峰会 东京站 大会议程  ",
        hdbg28: "获得品牌曝光",
        tghb29:
          "通过现场展览，让您的品牌形象遍布于各媒体网站及大会会场，有助于您提升品牌认知度。 Finwise Summit Tokyo ，预计将覆盖 2500+参会嘉宾、东亚 800万+ 区块链相关人士。此次峰会除了纷智官方的Facebook、twitter 等社交渠道，将在会前、会中、会后全方位传播大会及合作伙伴信息外，相关的区块链行业的企业媒体、个人自媒体，也将全渠道、多维度同步曝光合作伙伴。",
        tzyh30: "拓展潜在用户",

        tgjl31:
          "通过展示您的优秀产品及服务，吸引用户使用，有助您提升品牌关注度。Finwise Summit Tokyo将重点关注、探讨行业的监管、各国对区块链的政策、日本交易所的合规性等热点问题，吸引更多区块链行业最热门、最具代表的行业企业资源到场参与，促进合作交流。",
        scsl32: "输出技术实力",

        devctdes: "通过展示您的优秀产品及服务，吸引用户使用，有助您提升品牌关注度。 Finwise Global Summit 2017 共吸引超过80位行业大咖，2150名参会人员，50家赞助商及数十家媒体参与。Finwise Summit MACAU 2018将重新凝练区块链行业最热门、最具代表的行业企业资源，以全新的内容吸引区块链相关的交易所、矿机厂商、投资机构、海内外圈内自媒体、矿池、项目方等。",
        hdbgdes: "通过现场展览，让您的品牌形象遍布于各媒体网站及大会会场，有助于您提升品牌认知度。 Finwise Summit MACAU 2018将全渠道、多媒体同步曝光合作伙伴，覆盖现场 3000+、全网 100万+ 区块链相关人士。同时社交媒体、SMS、EDM 等自有及合作媒体宣传渠道将于会前、会中、会后全方位传播大会及合作伙伴信息。",
        techsdes: "通过演讲分享您的项目进展，输出企业/团队技术实力，有利于您提升品牌认可度。 Finwise Summit MACAU 2018 特设区块链项目方讲解专场、定制品牌分论坛，期待您推荐优秀讲师分享行业见解、解读项目优势、传播区块链行业技术和创新。",
        sponsorshipcontactp: "赞助请联系",
        mediacontactp: "媒体合作请联系",


        tgcx33:
          "通过演讲分享您的项目进展，输出企业/团队技术实力，有利于您提升品牌认可度。Finwise Summit Tokyo特设区块链项目方讲解专场、定制品牌分论坛，期待您推荐优秀讲师分享行业见解、解读项目优势、传播区块链行业技术和创新。",
        bzzs34: "标准展位招商",
        lhzb35: "联合主办",
        zsxb36: "钻石级协办",
        jpzz37: "金牌赞助",
        ypzz38: "银牌赞助",
        tpzz39: "铜牌赞助",
        gwms40: "官网显示企业Logo及企业描述",
        fhpp41: "峰会展商手册 展示企业品牌",
        fhbf42: "峰会暖场期间企业视频的播放",
        fhgm43: "分会场冠名",
        mtzf44: "媒体专访",
        esyj45: "20分钟独立演讲",
        bzzt46: "标准展台(规格: 3m*3m)",
        wixz47: "VIP通行证",
        jeeg48: "价格",
        bzzws40: "标准展位招商",
        unitzhang: "张",

        dcqd50: "到场嘉宾签到",
        dhks51: "大会开始",
        hyzz52: "大会揭幕致辞",
        bcys53: "BCUA揭幕仪式",
        jgfz54: "监管技术如何推动数字货币行业的发展",
        kxzx55: "跨辖区和金融服务的区块链互操作性",
        jgzy56: "监管机构及其在制定支持性立法和治理方面的作用",
        qkcx49: "区块链如何促进社会生产力的创新",
        rhyy57: "如何实现区块链的广泛应用",
        fxkl58: "风险投资与区块链",
        jmld59: "加密货币价格与股票市场的关联度",
        qkbg60: "区块链技术对未来金融的变革",
        jyhg61: "交易所如何做到自律与合规",
        qkxz62: "区块链应用的技术限制",
        gsyh63: "共识机制的演化",
        qkwl64: "区块链的过去、现在和未来",
        jywl65: "交易所的未来",
        gyjc66: "共赢机制是未来公司的基础",
        qktd67: "区块链的安全问题与痛点",
        qkzn68: "区块链与人工智能",
        qkfz69: "区块链在移动端的全新发展",
        xyqs70: "新一代矿池的发展趋势",

        fhfz71:
          " FINWISE纷智峰会是全球最具影响的科技金融峰会之一，会议旨在汇 集科技金融行业的优秀企业、行业专家、投资机构，共同交流探讨未来科 技金融的发展及区块链技术的应用前景，分享最前沿的科技进展，创建可信的合作平台，同时携手各国的监管机构共同促进科技金融及区块链行业的长期稳健发展。",
        cewl72:
          "2017年-2018年，FINWISE纷智峰会先后在上海、澳门、东京、香 港四地举办。2017年纷智第一场会议，币安交易所、金色财经、波场 TRON等知名项目在会议上首次亮相并迅速发展成为行业领先者，诸多圈内知名大佬也在该会议上展露头角，获得投资、合作机会。纷智会议带动了科技金融行业的会议热，同时也成就了纷智品牌在行业的影响力。",
          fhfz711:'香港是“粤港澳大湾区”发展规划大局中的前沿阵地。2019年5月28日-5月29日，纷智顺应国家新经济发展的政策号召，将峰会再次放在香港。会议主题为“全球科技金融高峰论坛”，致力聚合ABCDI（人工智能、区块链、云计算、大数据、物联网）等领域的先锋企业及金融投资领域的头部企业，紧扣科技金融行业热点，打破技术、投资及生态建设等多方合作壁垒，打造一场具有前瞻性的行业峰会，充分发挥纷智品牌在科技金融领域的影响力，推动行业共赴时艰、健康发展。会议拟邀请150+科技金融领域及传统金融投资领域等企业嘉宾参与',

          zwhe73: "FINWISE组委会",
        hxcy74: "核心团队成员",

        cyqy75: "参与合作，赞助商将获得以下权益",

        lysn76: "刘彦燊",
        lysd77:
          "Colony Capital柯罗尼资本亚太区董事总经理 WE+创始人兼首席执行官CEO",

        nameyd01:"杨东",
        positionyd01:"中国人民大学法学院教授、博导、副院长",

        namechongge:"虫哥",
        positionchongge:"原壹比特联合创始人、爱思社群创始人",

        namemaqianli:"马千里",
        positionmaqianlie:"巴比特副总监、比特链运营总监",

        nameydshentuchunchun:"申屠青春",
        positionydshentuchunchun:"银链科技 CEO",

        nameliuguanhua:"刘关华",
        positionliuguanhua:"澳门贸易投资促进代主席",

        namewbs02:"王彬生",
        positionwbs02:"区块链联合发展组织顾问、中国社会科学院研究生院特聘教授",

        namezyh03:"张银海",
        positionzyh03:"Lighting BTC中国区负责人",

        namezss0333:"张寿松",
        positionzss0333:"比特币交易网CEO",

        namezss03333:"李启元",
        positionzss03333:"比特币中国 联合创始人",

        namelf04:"刘飞",
        positionlf04:"火币Pro运营总监",

        namelj05:"刘劲",
        positionlj05:"日中AI·IoT产业联盟会长",

        namesf06:"宋斐",
        positionsf06:"海朴际诚基金执行合伙人",

        namerjh07:"任锦澔",
        positionrjh07:"国泰君安上海财富中心副总经理",

        namelzh08:"卢志怀",
        positionlzh08:"联合资信评级上海公司副总经理",

        namefj09:"冯晋",
        positionfj09:"高榕资本",

        namewyh10:"王岳华",
        positionwyh10:"德丰杰龙脉创新基金 合伙人",

        nameghc11:"郭宏才",
        positionghc11:"比特币天使投资人",

        namezll12:"张了了",
        positionzll12:"gate.io合伙人",

        namehjy03:"胡竣扬",
        positionhjy03:"高锋创新金融区块链总监",

        namehjl02:"黄俊朗",
        positionhjl02:"Goldford 行政总裁",

        namezbc01:"鍾並成",
        positionzbc01:"高锋创新金融销售和市场总监",


          // name_wujiezhuang04:"吴杰庄",
          // position_wujiezhuang04:"全国政协委员、香港青年联会首席参事、高锋集团董事局主席",




          nameylc13:"杨林科",
          positionylc13:"比特币中国联合创始人、\u000d\u000a比特币钻石中国区顾问",

          namelbj14:"刘炳江",
          positionlbj14:"Digital Asset Co., Ltd 社长",

          namelsf15:"李书沸",
          positionlsf15:"OKEx CEO",

          namety16:"佟扬",
          positionty16:"金色财经合伙人",

          namericoni17:"Riconi You",
          positionriconi17:"纷智联合创始人兼执委会主席",

          namehjp18:"胡杰鹏",
          positionhjp18:"香港区块链金融总会联合发起人&量子金市场顾问",

          namelqw19:"林琪武",
          positionlqw19:"知产链IPChain联合创始人",

          namech20:"陈浩",
          positionch20:"维优 首席技术官",

          namelmz21:"李明肇",
          positionlmz21:"小牛链 CEO",

          nametedlin22:"Ted Lin",
          positiontedlin22:"币安国际市场负责人",

          namedxx23:"段新星",
          positiondxx23:"巴比特执行总裁",

          nameyzy24:"叶祖研",
          positionyzy24:"链向财经联合创始人&CEO",

          nameethanyu25:"鱼文辉",
          positionethanyu25:"CoinVoice创始人",

          namelyl26:"李一灵",
          positionlyl26:"Trinity创始人",

          namejyj27:"蒋宇捷",
          positionjyj27:"信天创投合伙人",

          namesj28:"孙健",
          positionsj28:"九鼎数字资产实验室（J Lab）合伙人",

          nameyxh29:"余晓菡",
          positionyxh29:"DataKYC时链创始人",

          namekr30:"Kilian Rausch",
          positionkr30:"Exchange Union Product Director",

          namekjx31:"區鍵禧",
          positionkjx31:"LUXCHAIN联合创始人 | 区块链及人工智能领域专栏作家",

          namett32:"Talal Tabbaa",
          positiontt32:"Co-Founder Jibrel Network",

          namecyq33:"蔡逸群",
          positioncyq33:"名资金融科技、名资创投、名资股份有限公司创始人、董事长兼首席资本家、元界基金会首席资本家",

          namesxh34:"石晓虹",
          positionsxh34:"UniGame CEO",

          namenr35:"Nenad Rakocevic",
          positionnr35:"Co-Founder of Red",

          namelrj36:"李仁杰",
          positionlrj36:"富士康HCM资本执行合伙人",

          namestg37:"尚币哥",
          positionstg37:"BTC123 董事长",

          nameemil38:"Emil",
          positionemil38:"Penta社区负责人",

          namelxy39:"李翔宇",
          positionlxy39:"NEM中国联合创始人兼COO",

          nameldw40:"李大伟",
          positionldw40:"ZB.COM中币创始人",

          namemark41:"Mark",
          positionmark41:"BlockchainCasnio创始人",

          namedcz42:"董长治",
          positiondcz42:"Basic World 联合创始人",

          namewlj43:"王利杰",
          positionwlj43:"BeeChat Fund 董事",

          namekw44:"Kenzi Wang",
          positionkw44:"Superbloom联合创始人",

          namehyq45:"胡园泉",
          positionhyq45:"BEPAL首席执行官、黑盾区块链安全研究中心联合创始人",

          namezh46:"曾豪",
          positionzh46:"蚂蚁区块链联盟创始人",
          positionzh47:"蚂蚁联盟国际资本董事长",

          namesjl47:"邵建良",
          positionsjl47:"比升资本创始人 浙江省投融资协会常务副秘书长",

          namecf48:"曹锋",
          positioncf48:"PCHAIN发起人、中物联区块链协会首席科学家、区块链联盟ChinaLedger共同发起人",

          namexyq49:"肖永泉",
          positionxyq49:"MeshBox创始人、CEO",

          nameszy50:"孙泽宇",
          positionszy50:"库神联合创始人、库神品牌总监",

          namepl51:"Paul Liu",
          positionpl51:"敏捷区块链基金会（FAB）主席，首席区块链专家",

          namepzx52:"彭宗欣",
          positionpzx52:"国际区块链研究会&量子金创始人",

          namely53:"粱羽",
          positionly53:"星链StarChain投资人、开拍网创始人&CEO、竞创资本合伙人",

          namehm54:"Hassan Miah",
          positionhm54:"CTO and Co-Founder of Robin8",

          namesmw55:"孙明伟",
          positionsmw55:"块讯 创始人",

          namellw56:"凌连伟",
          positionllw56:"GCS游戏链创始人",

          namefwk57:"符文科",
          positionfwk57:"Enjoy chain CEO",

          namelp58:"刘平",
          positionlp58:"Seer数字竞猜负责人",

          namerp59:"Roger Pottier",
          positionrp59:"ATN 产品经理",

          namelyc60:"雷迎春",
          positionlyc60:"九个亿财经CEO",

          namegf61:"高飞",
          positiongf61:"AFC亞太區運營總監",

          nametarmar62:"Tarmar Menteshashvili",
          positiontarmar62:"Expread Co-founder",

          namewbh63:"吴兵华",
          positionwbh63:"UGCHAIN 创始人",

          nameck64:"Cyrus Khajvandi",
          positionck64:"NSF&HHMI Researcher, Stanford Univerisity, Co-founder & CEO of BitBounce.io",

          namehqt65:"何清涛Justin He",
          positionhqt65:"HLWCHAIN社区负责人兼CEO",

          nameybz66:"YangBing Zhan",
          positionybz66:"CEO, CoinBene",

          nametoni67:"Toni",
          positiontoni67:"sgamer ceo",

          nameljl68:"刘嘉陵（巨蟹）",
          positionljl68:"比特股理事会理事、比特创业营创始成员、 YOYOW 联合创始人",

          namegyl69:"高泽龙",
          positiongyl69:"国际区块链与数字货币协会 副会长",

          namesld70:"龙典",
          positionsld70:"火讯财经创始人",

          nameswj71:"无极",
          positionswj71:"华迎控股集团 董事长",

          nameswjz72:"吴杰庄",
          positionwjz72:"高峰集团董事局主席 全国政协委员、香港青年联会首席参事",
          positionwjz72new:"全国政协委员、香港青年联会首席参事、高峰集团董事局主席",




          namehjl73:"黃俊瑯",
          positionhjl73:"Goldford 行政總裁",

          namezhq74:"周宏骐",
          positionzhq74:"新加坡国立大学教授, 香港科技大学管理学院兼任教授, 北京大学国家发展研究院特聘教授",

          namejco75:"JC Oliver",
          positionjco75:"Global Chief Creative Officer at Unlockd",

          nameliuyang76:"刘洋",
          positionliuyang76:"BITKAN 董事长",

          nameAdel77:"Adel",
          positionAdel77:"ATN Co-Founder",

          namedingyuan78:"丁元",
          positiondingyuan78:"火币研究院首席分析师",

          namezhouxun79:"周迅",
          positionzhouxun79:"EKT通用积分CEO",

          namezhaoqianjie80:"赵千捷",
          positionzhaoqianjie80:"BTCC 高级副总裁",

          nameviachesbobok81:"Viacheslav Bobok",
          positionviachesbobok81:"BitRent platform CEO",

          nameczr82:"陈樟荣",
          positionczr82:"沃尔顿首席运营官",

          namezkl83:"郑凯丽",
          positionzkl83:"弗雷尔链 CMO",

          namedc84:"邓柯",
          positiondc84:"BitUN公司执行董事，Higgs Block 集团董事长",

          namestormz85:"Storm Zhang",
          positionstormz85:"InterValue核心架构师",

          namelyq86:"连炜蔃",
          positionlyq86:"Linfinity Singapore CEO",

          namekc87:"Keda Che",
          positionkc87:"Universal Labs的创始人",

          namezz88:"庄重",
          positionzz88:"全球最大矿池BTC.com负责人",

          namecq89:"陈庆",
          positioncq89:"Higgs Block 集团CEO",

          nameDenis90:"Denis",
          positionDenis90:"Ecosystem Developer",

          namesyj91:"孙颖俊",
          positionsyj91:"ONEROOT CEO Tony Sun",

          nameericyao92:"Eric Yao",
          positionericyao92:"CTO of i-House.com (IHT)",

          nameqzl93:"秦中陵",
          positionqzl93:"日中AI·IoT联盟执行委员长/爱立信日本新技术开发部Director",

          namezj94:"周金",
          positionzj94:"人工智能工学博士，華晋国际AI事业部 本部长",

          namedh95:"杜海",
          positiondh95:"火币网区块链研究院数据负责人",

          namehz96:"韩铮",
          positionhz96:"AAC商务总监",

          namepeteyu97:"Peter Yu",
          positionpeteyu97:"CEO 首席执行官",

          namebs97:"沈冰",
          positionbs97:"TBT交易所CEO /三点钟社群西安站长/区块链项目天使投资人",

          namezzh98:"赵子惠",
          positionzzh98:"PUNCPH亚洲区发起人",

          namezll99:"张李楠",
          positionzll99:"知名数字加密货币交易平台OEX 联合创始人＆CEO",

          namesmw100:"孙明伟",
          positionsmw100:"18区联合创始人",

          namejgp101:"姜光璞",
          positionjgp101:"黄金链项目运营经理",

          nameSIMON102:"余駿劻",
          positionSIMON102:"香港国际区块链金融总会创始人",

          nameAlex103:"Alex Isaiev",
          positionAlex103:"业务拓展 联合创始人",

          namenick104:"李珩",
          positionnick104:"Ocean chain联合创始人",

          nameMiao105:"缪可言",
          positionMiao105:"Hyperpay CMO",

          namechenyuming106:"陈玉明",
          positionchenyuming106:"EBC 首席执行官",

          nameARATA107:"ARATA",
          positionARATA107:"AVHのCTO，⽇日本の仮想通貨メディア CRYPTO TIMESもプロデュース",

          nameduboyuan108:"杜博源",
          positionduboyuan108:"OK 资本投资人",

          nameTonyEvans109:"Tony Evans",
          positionTonyEvans109:"亚洲及中东地区的副董事长兼董事总经理、金融科技全球顾问公司创始人",

          nameEric110:"Eric",
          positionEric110:"元界基金会创始人、以太坊天使投资人、比特币基金会终身会员",

          nameEric1100:"赵长鹏",
          positionEric1100:"币安CEO",

          nameChangjia:"长铗",
          positionChangjia:"巴比特CEO",

          nameShunriGuo111:"郭舜日",
          positionShunriGuo111:"ParcelX CEO & 联合创始人",

          nameNicWatson112:"Nic Watson",
          positionNicWatson112:"Naseba董事总经理",

          nameOlivier113:"楚维",
          positionOlivier113:"复旦学生",

          nameEricFang114:"方天叶",
          positionEricFang114:"离子链联合创始人，时点资本合伙人 上海区块链产业联盟国际交流委员会主席",

          nameMarwan115:"Dr. Marwan Al-Zarooni",
          positionMarwan115:"迪拜区块链中心创始人兼首席执行官",

          namescxh116:"初夏虎",
          positioncxh116:"元界基金会创始人、以太坊天使投资人、比特币基金会终身会员",
          nameszh117:"曾豪",
          positionzh117:"中高会区块链产业联盟副理事长、蚂蚁节点联盟创始人、蚂蚁联盟国际资本创始人",
          namesyzw118:"杨志文",
          positionyzw118:"蚂蚁节点联盟联合创始人、蚂蚁联盟国际资本联合创始人",
          namescxh119:"张敬唯",
          positioncxh119:"蚂蚁节点联盟联合创始人、蚂蚁联盟国际资本联合创始人",

          GaHwHz:"港澳及海外合作",



          zzhz01:"赞助合作",
          qdhz02:"渠道合作",
          hwhz03:"海外合作",
          mtsy04:"媒体事宜",
          pwsy05:"票务事宜",

          tkaddr:"日本东京新高轮格兰王子酒店",
          helpnav:"参会指南",
          helpGuides:"参会指南",
          grchEntrance:"个人参会",
          qychEntrance:"企业参会",
          mediacover:"媒体覆盖",
          chqyfw:"参会企业",

          hotelab:"周边酒店",
          hoteltips:"温馨提示：以下是主办方推荐的酒店，离会议中心比较近，不负责预定，如需预定请您直接联系您中意的酒店，请您理解！ 注：如有住宿需求，请尽快联系酒店方，以免人多预定不到您理想的酒店。",
          hotelking01:"新高轮格兰王子大饭店",
          hotelstar4:"四星级酒店",
          hotelstar3:"三星级酒店",
          hoteladdrtl:"地址：",
          hoteladdrgphnt:"108-8612 东京都, Minato-ku, Takanawa 3-13-1",
          hotelfwhome:"大会举办场地酒店",

          hotelstth01:"品川东武酒店",
          hoteladdrsth:"108-0074 东京都, Minato-ku Takanawa 4-7-6",
          hotelsthdistance:"距离会场 0.3 公里，步行 5 分钟到会场",

          hotelkeit02:"高轮京急酒店",
          hoteladdrkeit:"108-0074 东京都, Minato-ku Takanawa 4-10-8",
          hotelkeitdistance:"距离会场 1 公里，步行 5-10 分钟到会场",

          hotelex01:"品川京滨急EX酒店",
          hoteladdrex:"108-0074 东京都, Minato-ku Takanawa 3-13-3",
          hotelexdistance:"距离会场 1.5 公里，步行10 分钟到会场",

          namesupernova14:"曾良",
          positionsupernova14:"Supernova Chain董事长、\u000d\u000a 币快报联合创始人",

          cityshanghai:"上海",
          citymacau:"澳门",
          citytokyo:"东京",
          citylsals:"洛杉矶",
          cityhongkong:"香港",
          citydubai:"迪拜",
          cityBangkok:"曼谷",


          namemeetingdate521:"第一天（2018年5月21日）",
          namemeetingdate522:"第二天（2018年5月22日）",

          namehcA:"会场Ａ",
          namehcB:"会场Ｂ",
          namespeakers:"嘉宾",
          namezbzhc:"转播主会场",
          nametime:"时间",
          namestheme:"演讲主题",
          nameAM:"上午",
          namePM:"下午",
          nameyuanzhou:"圆桌",
          nameqdrc:"签到入场",
          namemeetingopen:"大会开始",
          nameRiconiinfo:"尤立 | FINWISE创始人兼执委会主席",
          namewelSpeech:"大会揭幕致辞",
          nameJCOliverinfo:"JC Oliver | Bankex, Moviecoin & Ai-X首席执行官, 前微软全球创新官",
          nameJCOliverB:"JC Oliver | Unlockd全球首席创意官，前微软全球创新总监",
          namewangbinshenginfo:"王彬生｜区块链联合发展组织顾问、中国社会科学院研究生院特聘教授",
          nameNicWatsoninfo:"主持－Nic Watson | Naseba董事总经理",
          nameAhmedinfo:"柏亚德 | 维优迪拜董事总经理",
          nameHowfinancialdes:"金融科技浪潮如何引领全球企业发展",

          nameAhmedAl:"柏亚德",
          postionAhmedAl:"复旦区块链协会联合创始人&主席",


          nameModeratorRiconi:"主持 - 尤立 | FINWISE创始人兼执委会主席",
          nameliujin:"刘劲 |  日中AI·IoT产业联盟会长",

          nameAllenLiu:"刘彦燊  | Colony Capital柯罗尼资本亚太区董事总经理 WE+创始人兼首席执行官",
          nameFerdiSong:"宋斐 | 海朴际诚执行合伙人、前摩根大通亚太区董事总经理",
          nameRichardWang:"王岳华 | 德丰杰龙脉创新基金 合伙人",
          nameBlockchainsv:"区块链和金融服务的融合",
          namezhouhongqi:"周宏骐 | 新加坡国立大学教授, 北京大学国家发展研究院特聘教授",
          nameLianghongFei:"费良宏 |  亚马逊云首席云计算技术顾问",
          nameAllenZhou:"周迅 |  EKT通用积分CEO",
          nameVincentliang:"梁羽 | 星链StarChain投资人、開拍網創始人&CEO",
          nameAllenZhoupspeakct:"搭建一个可大规模商用的区块链开发平台",
          nameJackieWu:"無極 | 华迎控股集团 董事长",
          nameDennisSarkar:"Dennis Sarkar  |  Genexi生态系统开发者",

          nameblockchaindrive:"解构 区块链+驱动的商业模式创新",

          namezhoujin:"周金 | 人工智能工学博士，華晋国际AI事业部 本部长",
          nameblockchaintech:"人工智能与区块链技术",

          nameKedaChe:"Keda Che | 万能实验室创始人",
          nameModeratorren:"主持 - 任锦澔 | 国泰君安上海财富中心副总经理",
          nameZhonglingQin:"秦中陵 | 日中AI·IoT联盟执行委员长，爱立信日本新技术开发部Director",

          nameYuanDing:"丁元 | 火币研究院首席分析师",
          nameblockchainyinyong:"区块链技术的落地应用",



          nameChenHaocto:"陈浩 | 元界CTO ",
          nameOKEXReserved:"OKEX Reserved",
          nameKarenChen:"陈庆 | Higgs Block 集团CEO",
          nameEricYao:"Eric Yao |  CTO of i-House.com (IHT)",
          nameMonitorChen:"陈樟荣 | 沃尔顿链科技有限公司COO",
          nameKailiZheng:"郑凯丽 | 弗雷尔链 CMO",
          nameDavidYli:"李一灵 | Trinity创始人",
          nameDavidYlisays:"关于B连锁游戏的思考",
          nameAnndyLian:"连炜蔃 | Linfinity 新加坡CEO",
          nameShenBing:"沈冰 |  TBT交易所CEO",
          nameLiufei:"刘飞 | 火币Pro运营总监",
          nameZhangLiaoliao:"张了了 | gate.io合伙人",
          nameBTCCHead:"BTCC交易所负责人",
          namePunchZhao:"Jonna Zhao | Punch Foundation Asia Founder",
          nameLiuHaidong:"刘海东｜TULIPEX CIO",
          nameFutureExchanges:"交易所的未来",
          namePeterYu:"Peter Yu |  CyteCoin首席执行官",
          namecaohuining:"曹辉宁  | Usechain创始人&CEO",
          nameSelfBL:"全球唯一有共识算法革命的实名链",
          namePunchRESERVED:"赵子惠  | Punch Foundation 亚洲区发起人",
          nameJialingLiu:"刘嘉陵（巨蟹） | 比特股理事会理事、比特创业营创始成员",
          nameJackZhang:"张银海 | Lighting BTC中国区负责人, 千家资本创始人",
          nameBlockchainlogic:"区块链投资逻辑",
          nameHowBLAI:"如何利用Basic链培育人工智能（AI）",
          nameAdelATN:"Adel | ATN联合创始人",
          nameStormZhang:"Storm Zhang |  InterValue 核心架构师",
          nameInterValueBL:"InterValue：构建下一代全球价值互联网的区块链4.0基础设施",
          nameJasonzhuang:"庄重 | 全球最大矿池BTC.com负责人",
          nameBTCCHeadZhao:"赵千捷 |  BTCC 高级副总裁  ",
          nameHaiDu:"杜海 |  火币区块链研究院 数据负责人",
          nameblockchainmining:"区块链矿池和挖矿行业的未来",
          nameLeonLiu:"刘洋  |  BITKAN 董事长",
          nameViacheslavBK:"Viacheslav Bobok | BitRent首席执行官",
          nameTonySun:"孙颖俊 | ONEROOT首席执行官",
          namedipuliansp:"德扑链演讲嘉宾",
          nameAVHsp:"AVH演讲嘉宾",
          nameEBCsp:"EBC演讲嘉宾",
          nameHyperPaysp:"HyperPay演讲嘉宾",
          nameXiaohanXu:"余晓菡 | DataKYC时链创始人",

          nameModeratorKennyAu:"主持 - 區鍵禧 | LUXCHAIN联合创始人, 区块链及人工智能领域专栏作家",
          nameCharlesXue:"薛蛮子｜天使投资人",
          nameEricGu:"初夏虎｜ 维优CEO",
          nameKarenChen:"陈庆 | Higgs Block 集团CEO",
          nameDigitalIdentity3:"数字身份和数字资产网络３.0时代",
          nameAngelaTong:"佟扬 | 金色财经合伙人",
          nameLiangZeng:"曾良 |Supernova Chain董事长、币快报天使投资人",
          nameEthanYu:"鱼文辉 | CoinVoice创始人",
          nameYeZuyan:"叶祖研 | 链向财经联合创始人兼CEO",
          nameJohnHan:"韩铮  |  AAC商务总监",
          nameAngelaTongModerator:"主持 - 佟扬 | 金色财经合伙人",
          nameLongdns:"龙典 | 火讯财经创始人",
          nameBlockchainRole:"区块链媒体在数字时代的角色定位",
          nameBlockchain3media:"区块链3.0时代的新媒体 — 智能信息流和数字货币价值发现平台",
          nameKenDean:"邓柯 |  BitUN公司执行董事",
          nameocspeaker:"oc演讲嘉宾",
          nameosaspeaker:"osa演讲嘉宾",
          nameZhangTao:"张涛 | 天使投资人，coinegg.com 创始合伙人",
          nameHugoHu:"胡园泉 | BEPAL首席执行官",
          nameZongxinPeng:"彭宗欣 | 量子金创始人",
          nameSimonJE:"余駿劻  | 行政總裁 富盈金融集團有限公司",
          nameYiqunCai:"蔡逸群 |  名资金融科技、名资股份创始人、董事长、元界基金会首席资本家",
          nameCasparHuang:"黃俊瑯 | 高鋒創新金融行政總裁 香港青年專業聯盟區塊鏈委員會主席",
          nameblockchainchange:"区块链技术对未来金融的变革",
          nameZeroGao:"高泽龙 | 国际区块链应用联合会副主席",
          nameModeratorchangxi:"主持 - 常梓 | FINWEX孵化器执行董事",

          namewangbinshengsay:"区块链市场投资逻辑及演进方向",
          nameVincentliangsay:"区块链革命 让Token走进生活",
          nameLianghongFeisay:"AWS上的区块链",
          nameAVHspk:"AVH形象代言人",
          nameTonychen:"陈玉明  |  帝国区块链代理CEO",
          nameTonychensay:" 关于帝国区块链中心的成立 ",
          nameHansHenrik:"汉斯 亨瑞 克里斯滕森 | 迪拜市政府-金融科技管理局企业家中心主管",
          nameHansHenriksay:"迪拜政府对区块链企业家的支持",
          namePeterYusay:"CyteCoin 分散式AR/VR／360广告平台",
          namewangjianlan:"王建楠 | 资深天使投资人",
          namewangjianlansay:"打造弱中心化的德扑应用生态链 ----THPC",
          nameTonySunsay:"亚太区块链中心",
          nameblockchaindevdt:"区块链的发展趋势",
          nameTonyEvanspk:"Tony Evans | Blockchain Industries Inc亚洲和中东区副主席兼执行董事",
          nameTonyEvanspksay:"帮助投资者通过负责任的渠道获得最好的交易",
          nameSongYang:"宋阳  | “乐块”制作人",
          nameSongYangsay:"链上游戏新形态：乐块，区块链上的虚拟乐高",
          nameduboyuanspk:"杜博源 |  OK 资本 投资人",
          namesunmingwei:"孙明伟 | 新加坡18区联合创始人",
          namesunmingweisay:"高效搭建覆盖全球的区块链社区",
          nameYeZuyansay:"区块链趋势下的思考",
          nameWentaojing:"荆文涛 |  超级支付亚洲市场负责人",
          nameWentaojingsay:"高质量的数字货币世界的工具箱",
          nameJohnHansay:"从端到云，拨云见雾",
          nameNickLee:"李珩 | OC创始合伙人 ",
          nameNickLeesay:"Ocean Chain 在海上链接世界",
          nameAlexIsaiev:"Alex Isaiev |OSA联合创始人 OSA业务拓展主管 ",
          nameAlexIsaievsay:"零售业中的AI和区块链",
          nameblockchainprojects:"区块链项目未来发展的五大建议",
          nameguoshunri:"郭舜日 | ParcelX联合创始人兼CEO",
          nameWilliamJianginfo:"姜光璞  |  ZENGOLD 项目运营经理",
          nameblockchainappfinance:"区块链应用金融展望",

          nameblockchaindrive:"解构区块链+驱动的商业模式创新",
          nameviachesbobokinfo:"Viacheslav Bobok | BitRent首席执行官",
          nameblockchainBiotech:"利用链加速生物技术",
          nameblockchainpast:"过去三年的区块链实践",
          nameAboutBitRent:"关于BitRent",
          nameblockchainrevolution:"区块链时代的物联网革命",
          nameblockchainArts:"艺术品与区块链",
          nameblockchainEvolution:"数字货币的进化",
          nameblockchainIntro:"标记链供应链介绍",
          nameMonaPRM:"Mona | Trinity 国际社区主管",
          nameblockchainGaming:"关于区块链游戏的思考",
          nameEricFanginfo:"方天叶 | 离子链联合创始人，时点资本合伙人 上海区块链产业联盟国际交流委员会主席",
          nameIONChain:"离子链：一种基于区块链和边缘计算的新型物联网基础平台",
          nameblockchainCornerstone:"区块链基石：矿池生态的演进",
          nameBitsharesfuture:"比特股的未来",
          namePunchRedefines:"Punch解放创作生产力，定义文创新生态",
          nameblockchainAI:"人工智能和区块链",
          nameJohnHan:"韩铮  |  锐角云商务总监",
          nameHelpingsource:"如何帮助投资者通过可靠来源完成最佳投资",
          nameOlivierinfo:"楚维 | 复旦区块链协会主席 ",
          nameTobiokaKen:"飞冈 健 | 金泽工业大学客座教授",
          nameblockchainThings:"物联网区块链",
          nameblockchainefficiently:"“区块链+”风口之中的TBT交易所",
          nameblockchainBank:"区块链银行-数字金融市场的基础设施和服务",
          nameParcelXnetworks:"ParcelX：去中心化跨境包裹配送网络",
          nameblockchainindustry:"区块链在黄金行业生态的应用",
          nameZeroGaoModerator:"主持-高泽龙 | 国际区块链应用联合会副主席 ",


          nameBiggerBetter:"更大更好 ",
          nameGarryZhang:"張軍 | Higgs Block 集团CTO ",
          nameZengHaoSPK:"曾豪 | 蚂蚁区块链联盟创始人 ",
          nameBlockchainFuture:"“区块链+”的 趋势与未来 ",
          nameGenadiMan:"企业家，Telesens KSCL AG 创始人 ",
          nameInsuranceRevolution:"连锁经营保险革命 ",
          nameMinchenkoM:"米科拉·明琴科 | Mykola Minchenko 首席执行官 ",
          nameBCcloudplatform:"基于区块链的个人分布式计算机云平台 ",

          hqmprg66: "获取门票",
          HK_addr:"香港荃湾如心海景酒店",
          HK_fwDes:"Finwise Summit 纷智全球峰会，汇集金融科技行业的优秀企业、行业专家、投资机构，共同交流探讨未来金融科技的发展及区块链技术的应用前景，分享最前沿的科技进展，创建可信的合作平台，同时携手各国的监管机构共同促进金融科技及区块链行业的长期稳健发展。",
          HK_fwTime:"2018年8月10-11日",
          HK_chqt:"参会群体",
          Attend_pr:"金融科技行业领袖企业",
          Attend_jg:"金融业风险投资机构",
          Attend_center:"互联网数据中心",
          Attend_websafe:"网络安全",
          Attend_wlw:"物联网",
          Attend_BLC:"知名区块链项目",
          Partner_tl:"支持媒体",
          Partner_tl1:"战略合作",
          Partner_GDtl:"钻石协办",
          Partner_tl111:'赞助单位',
          HK_FWChoose:"FINWISE香港站参会选择",
          HK_FWChooseTK:"赞助条款",
          Price_tips:"注：由于数字货币波动较大，此价格仅限于7月1日之前有效，7月1日官网更新最新价格。",

          FINWISE_Detail:'Finwise组委会由政界、科技金融先锋企业家组成，组委会的职责是着眼科技金融领域，聚合ABCDI（人工智能、区块链、云计算、大数据、物联网）等领域的先锋企业及金融投资领域的头部企业，以专业和发展的眼光，聚焦行业一线资源，打造最具行业影响力的科技金融峰会品牌。',
          namexmz_info:"薛蛮子",
          positionxmz:"天使投资人",


          nameHans:"汉斯 哼瑞",
          positionHans:"迪拜市政府-金融科技管理局企业家中心副总裁",


          nameHanFeng_info:"韩锋",
          positionHanFeng:"哥伦比亚大学访问研究员，亦来云联合创始人",


          nameDujun_info:"杜均",
          positionDujun:"金色财经 CEO",

          nameSyc001:"孙宇晨",
          positionSyc001:"TRON 创始人兼CEO",

          nameCaoNH_info:"曹辉宁",
          positionCaoNH:"曹辉宁 | 中欧商学院教授、Usechain 创始人 &CEO ",

          nameFLH_info:"费良宏",
          positionFLH:"亚马逊云首席云计算技术顾问 ",

          nameWuJi:"無極",
          positionWuJi:"华迎控股集团 董事长",

          nameYangNK:"杨林科",
          positionYangNK:"比特币中国联合创始人",



          nameHanFeng:"韩峰",
          positionHanFengInfo:"哥伦比亚大学访问研究员、华为中央研究院区块链顾问、亚洲区块链DACA协会秘书长、亦来云基金会理事",

          ATFuest_tl:"拟邀嘉宾",
          Agenda_tl:"会议议程",

          organisers:"主办方",
          othersers:"联合主办",
          djiaguanming:"独家冠名赞助商",
          xianbandanwei:"协办单位",


          NameNew01:"Vitalik",
          positionNew01:"以太坊创始人",

          NameNew02:"徐小平",
          positionNew02:"真格基金创始人、著名天使投资人",

          NameNew03:"赵长鹏",
          positionNew03:"币安CEO",

          NameNew04:"赵东",
          positionNew04:"著名天使投资人、DGroup创始人",

          NameNew05:"吴杰庄",
          positionNew05:"全国政协委员、香港青年联会顾问",

          NameNew06:"初夏虎",
          positionNew06:"维优 CEO、元界基金会主席",

          NameNew07:"郭宏才",
          positionNew07:"著名天使投资人",

          NameNew08:"李林",
          positionNew08:"火币创始人兼董事长",

          NameNew09:"杜均",
          positionNew09:"金色财经创始人、节点资本创始合伙人",

          NameNew10:"吴忌寒",
          positionNew10:"比特大陆CEO",

          NameNew11:"达鸿飞",
          positionNew11:"NEO创始人",
          NameNew12:"王岳华",
          positionNew12:"德丰杰龙脉创新基金合伙人",
          NameNew13:"邓迪",
          positionNew13:"太一云 董事长",
          NameNew14:"杨林科",
          positionNew14:"比特币中国创始人兼CEO",
          NameNew15:"于佳宁",
          positionNew15:"火币大学校长",
          NameNew16:"长铗",
          positionNew16:"巴比特 CEO",
          NameNew17:"孙宇晨",
          positionNew17:"TRON创始人兼CEO",
          NameNew18:"薛蛮子",
          positionNew18:"著名天使投资人",
          NameNew19:"虫哥",
          positionNew19:"POC生态布道者、Hpool矿池创始人",
          NameNew20:"安鑫鑫",
          positionNew20:"金色财经合伙人、金色学院创始人",
          NameNew21:"刘嘉陵(巨蟹)",
          positionNew21:"比特股理事会理事、比特创业营联合创始人",
          NameNew22:"帅初",
          positionNew22:"Qtum创始人",
          NameNew23:"Ahmed Al-Balaghi",
          positionNew23:"复旦区块链协会联合创始人&主席",
          NameNew24:"李大伟",
          positionNew24:"ZB联合创始人、引力波动量化创始人",
          NameNew25:"曾豪",
          positionNew25:"蚂蚁节点联盟创始人",
          NameNew26:"申屠青春",
          positionNew26:"银联科技 CEO",
          NameNew27:"王彬生",
          positionNew27:"区块链联合发展组织顾问、中国社会科学院研究生院特聘教授",
          NameNew28:"黄连金",
          positionNew28:"核聚链首席科学家、中国电子学会区块链分会专家委员",
          NameNew29:"兰波",
          positionNew29:"SWFTC 创始人、北美区块链协会(NABA)创始人",
          NameNew30:"卢亮",
          positionNew30:"CyberMiles创始人、手机淘宝首任总经理、兰亭集势联合创始人",
          NameNew31:"黄俊瑯",
          positionNew31:"高锋创新金融行政总裁",
          NameNew32:"蔡栋",
          positionNew32:"麦当劳中国首席数据智能官、INFINVISION深见ABC实验室创始人",
          NameNew33:"赵胜",
          positionNew33:"WBF纽约世界区块链大会纽约Digital USD创始人、硅谷创客资本创始人",
          NameNew34:"Aurora",
          positionNew34:"ZB集团副总裁、加密资本创始人",
          NameNew35:"郑晓军",
          positionNew35:"加勒比区块链研究院院长、世界区块链组织总干事",
          NameNew36:"黄敏强",
          positionNew36:"公信宝创始人",
          NameNew37:"冯发展",
          positionNew37:"IDA资产数字化项目COO、DAppLabs 实验室合伙人",
          NameNew38:"宗华",
          positionNew38:"粤港澳大湾区区块链产业联盟发起人、深圳前海汇潮投资有限公司创始人",
          NameNew39:"林大亮",
          positionNew39:"初链基金会理事",
          NameNew40:"黄胜",
          positionNew40:"优币创投 创始人、YOEX 优网 联合创始人",
          NameNew41:"张建国",
          positionNew41:"币快财经总裁、中国区块链创投联盟主席",
          NameNew42:"高泽龙",
          positionNew42:"国际区块链与数字货币协会 副会长、GVE基金会联合创始人",
          NameNew43:"蔡志川",
          positionNew43:"亚洲区块链学会 会长、香港区块链资产管理有限公司总裁",
          NameNew44:"江标",
          positionNew44:"中国区块链沙盒研究中心专家委员",
          NameNew45:"王峰",
          positionNew45:"火星财经发起人、共识实验室发起人、蓝港互动集团董事长",
          NameNew46:"李广新",
          positionNew46:"德鼎创新基金中国合伙人",
          NameNew47:"唐祥礼",
          positionNew47:"Plair冀建互动游戏平台 CEO",
          NameNew48:"大卫·金",
          positionNew48:"BlueBlock区块链咨询公司 CEO",
          NameNew49:"宾威廉",
          positionNew49:"SOSV合伙人和中国加速董事总经理",
          NameNew50:"肯尼·欧",
          positionNew50:"Elevate区块链咨询和投资公司联合创始人",
          NameNew51:"帕特里克·帕拉休斯",
          positionNew51:"LoyalCoin CEO",
          NameNew52:"汉斯·隆巴多",
          positionNew52:"Blockpass互联身份识别首席营销官",
          NameNew53:"陳家豪",
          positionNew53:"香港智慧城市聯盟金融科技委員會主席",
          NameNew54:"胡一鸣",
          positionNew54:"德鼎创新基金投资经理",
          NameNew55:"宋阳",
          positionNew55:"乐块 CEO",
      },


      en: {
        webtitle1:"FINWISESUMMIT · Tokyo",
          webtitle_Hk:"FINWISESUMMIT · HONGKONG",

        webvisa2:"FINWISESUMMIT · Visa",
        webcooperation3:"FINWISESUMMIT · Cooperation",
        webabout4:"FINWISESUMMIT · About",
        webagenda5:"FINWISESUMMIT · Agenda",

        seey1: "Home",
        hyyc2: "Agenda",
        zzhz3: "Sponsorship",
        wjhg4: "Flashbacks",
        gywm5: "About US",
        hqmp6: "Buy a ticket",
        // hqmp6: "Tickets and Registration",
        hqmprg66: "Tickets and Registration",
        qyyj7: "Exhibitors or Speakers",
        wncp8: "Become a sponsor",
        qybm9: "Exhibitor Registration",
        grbm10: "Individual Tickets",
        xsly11: "Buy a ticket",
        // xsly11: "Tickets and Registration",
        // xsly11: "Early Bird Registration 1588 ¥，2880  ¥ (Up to April 21)",
        grbm12: "Individual Registration",
        chjb13: "Participants",
        tzjg14: "Investmet Institutions",
        mtbd15: "Media and Reports",
        adviceperson: "Industry Experts",
        perproject: "Top Blockchain Projects",

        chinamacau: " China Macau",
        mcaddr: " Address",
        mcaddrdetail: "Sheraton Grand Macao Hotel, Estrada do Istmo. s/n Cotai, Macau",
        mctime: " Time",
        mctimedetail: "2018/01/12-13",
        fwmacaudes: "The Finwise Summit will be held in Macau, China in January 2018. The summit aims to encourage interaction among global fintech industry participants and to advocate global fintech developments. The event will feature the latest blockchain technologies, the best fintech enterprises, future financial blockchain applications, trends and progresses.",
        mcflashbacks: " Flashbacks",
        contactus: " Contact us",
        wechatnum: " Wechat",
        sponsorshipct: "Sponsorship Contact",
        citysh: " ShangHai Station",
        citymacaustation: " Macau Station",
          cityJapanstation: "Japan Station",
          cityHongKongstation: " Hong Kong Station",

        qqgs16: "Global Blockchain Corporation",
        gydh17: "About FINWISE",
        fstj18:
          "FINWISE Summit aims to strengthen the communication among blockchain-related practitioners and promote the development of global financial technology. With a focus on cutting-edge blockchain technology, FINWISE Summit brings together top talents, industry elites and excellent enterprises, provides a reliable collaboration platform and a wide media coverage.",
        ckgd19: "View More ↓",
        lhzb20: "Co-organizer",
        mtxb21: "Media Sponsor",
        xbfe22: "Co-sponsor",
        pwzx23: "Contact us (Mainland China)",
        zzzx24: "Business Cooperation",
        zzzx2444:'Cooperation',
          canApply:'To apply for a press pass, please email requests to 【events@el8v.io】. Provided you have the proper credentials, you are welcome to attend free of charge.',
        zzzx24444:'Media Cooperation',
        gywm25: "Media Cooperation",
        zzzxMrW:"Mr.Wang",
        zzzxMrsZ:"Mrs.Zhou",

        fzyc26: "Agenda for FINWISE Blockchain Summit Tokyo 2018",
        hdbg28: "Gain brand exposure",
        tghb29:
          "Through on-site exhibitions, your brand image will be spread across media sites and conference venues, helping you to increase brand awareness. Finwise Summit Tokyo is expected to be attended by more than 2000 participants and over 8 million blockchain related practitioners in East Asia. The information of the Summit itself, sponsors and partners will be disseminated by Finwise official Facebook, Twitter, etc., before, during and after the conference. Immediate and tracking reports by kinds of news media in multiple dimensions will also be available including blockchain relevant industry’s corporate media and individual media.",
        tzyh30: "Expand Potential Users",
        tgjl31:
          "Users could be attracted by your outstanding products and services; thus, your brand awareness could be strengthened. With a focus on discussions on industry regulation, national policies on blockchain as well as compliance of Japanese exchanges, Finwise Summit Tokyo will attract the most authoritative  and representative industry resources for promoting cooperation and exchanges.",
        scsl32: "Demonstrate Technical Strength",

        devctdes: "The exhibit is a stage to showcase your quality products and service, meet customers and raise brand attention. The Finwise Global Summit 2017 has attracted more than 80 industry experts, 2150 attendees, 50 sponsors and dozens of media partners. The 2018 summit aims to highlight the hottest and latest companies and blockchain developments so that exchanges, miner manufacturers, investment firms, industry media, mining pools and startups can participate.",
        hdbgdes: "Exhibitors will gain brand exposure on extensive media and event on-site, with brand awareness increased. The Finwise Summit Macau 2018 will be covered by multiple media channels,. It will have access to 3000 attendees on-site and 1 million plus blockchain audience online. Social media, SMS/EDM tools will also cover the summit and sponsor news before, during and after the event.",
        techsdes: "Speak to the audience on your project and demonstrate your technical advantages will help raise brand recognition for your company. The Finwise Summit Macau 2018 has special sessions and forums for blockchain projects and brands to share industry insights, project features and blockchain innovations.",
        sponsorshipcontactp: "For sponsorship,please contact",
        mediacontactp: "For media partner,please contact",

        tgcx33:
          "Sharing your project progress through speeches and presentations and demonstrating your company/team technical strengths will help you increase your brand recognition. Finwise Summit Tokyo specializes in blockchain project seminars and custom brand forums. We look forward to recommending excellent lecturers to share industry insights, interpret project advantages, and disseminate blockchain industry technology and innovation.",
        bzzs34: "Standard Booth Investment",
        lhzb35: "Co-host",
        zsxb36: "Top Level Co-organizer",
        jpzz37: "Gold Sponsor",
        ypzz38: "Silver Sponsor",
        tpzz39: "Bronze Sponsor",
        gwms40: "Logo and corporate description shown on the official website",
        fhpp41: "Corporate brand displayed on the Summit Exhibitor Manual",
        fhbf42: "Warm-up video of the corporate played during the summit",
        fhgm43: "Title Sponsorship of Sub-venues",
        mtzf44: "Exclusive Interview",
        esyj45: "20 mins Independent Speech",
        bzzt46: "Standard Booth(3m*3m)",
        wixz47: "VIP Pass",
        jeeg48: "Price",
        bzzws40: "Standard Booth Investment",
        unitzhang: " ",


        dcqd50: "Sign-in",
        dhks51: "Commencement of the Summit ",
        hyzz52: "Opening Ceremony",
        bcys53: "BCUA Unveiling Ceremony",
        jgfz54:
          "How  Regulatory Technology Promotes the Development of the Digital Currency Industry",
        kxzx55:
          "Interoperating Bockchains across Jurisdictions and Financial Services",
        jgzy56:
          "Regulators and Their Role in Develivering Supportive Legislation and Governance",
        qkcx49: "How Blockchains Promotes Productivity Innovation",
        rhyy57: "How to Implement Wide Blockchain Applications",
        fxkl58: "Venture Capital and Blockchain",
        jmld59:
          "The Relationship between the Cryptocurrency Price and the Stock Market",
        qkbg60: "Blockchain Technology for Future Financial Reform",
        jyhg61: "How Exchanges Do Self-Regulation and Compliance",
        qkxz62: "Technical Lmitations of Blockchain Applications",
        gsyh63: "Consensus Mechanism Evolution",
        qkwl64: "The Past, Present and Future of Blockchain",
        jywl65: "The Future of  Exchanges",
        gyjc66: "Win-win Mechanism，the foundation of the Future Company",
        qktd67: "Security Issues and Pain Points of Blockchain",
        qkzn68: "Blockchain and Artificial Intelligence",
        qkfz69: "New Development of Blockchain on the Mobile Devices",
        xyqs70: "The Development Trend of a New Generation of the Minging Pool",
          fhfz711:'Hong Kong has always been at the forefront in The Greater Bay Area Plan (the development plan for the Guangdong-Hong Kong-Macau Greater Bay Area). In May 28th-29th 2019, FINWISE will embrace the national economic development policy and hold the FINWISE Summit in Hong Kong. Join us and embrace the future of financial technology with industry pioneers in the emerging technologies industries (Artificial Intelligence, Blockchain Technology, Cloud Computing, Big Data, and Internet of Things), along with top investment companies that will be in attendance.',
        fhfz71:
          "FINWISE is one of the most influential brands in the blockchain event industry. The FINWISE Summit gathers a group of experienced experts and entrepreneurs from the financial services and blockchain industries, and together we discuss the development of FinTech and blockchain technology for applications in the now and the future. The goals of FINWISE are to share state of the art trends in blockchain technology and to create a trustworthy collaboration platform. We cooperate with national regulatory authorities around the world to ensure the healthy development of FinTech and blockchain industries in the long term.",
        cewl72:
          "From 2017 to 2018, FINWISE held summits in Shanghai, Macau, Tokyo, and Hong Kong. Since the first summit in 2017, well-known projects such as the Binance Exchange, Jinse Finance, and TRON have debuted at FINWISE and quickly developed into industry leaders. Furthermore, many renowned names in the industry have also participated in the Summit, and obtained investment and partnership opportunities as a result. The FINWISE Summit has been at the forefront of developing the community for the blockchain technology industry, and has driven the hosting of conferences trend in the sector. FINWISE has created a robust space to unify projects and blockchain enthusiasts, therefore making it one of the most influential events in the blockchain technology industry.",
        zwhe73: "FINWISE Organizing Committee",
        hxcy74: "Core Team Members",

        cyqy75: "Sponsorship benefits",

        lysn76: "Allen Lau",
        lysd77: "Managing Director of Coloney Capital, Founder and CEO of WE+",

          nameyd01:"Dong Yang",
          positionyd01:"Professor, Doctoral Tutuor and Vice-President of the Law School of Renmin University of China",
          namewbs02:"Binsheng Wang",
          positionwbs02:"Wang Binsheng  Consultant of Organization of Blockchain Associations for Development  Distinguished professor of graduate school at Chinese Academy Social Sciences",
          namezyh03:"Jack Zhang",
          positionzyh03:"Head of Lightning BTC China",
          namelf04:"MIKE Liu",
          positionlf04:"Operations Director of Huobipro",
          namelj05:"Jin liu",
          positionlj05:"President of Japan-China AI.IoT Association",
          namesf06:"Fei Song",
          positionsf06:"Managing Partner, HPJC Fund",


          namerjh07:"Nicolas Ren",
          positionrjh07:"Deputy General Manager of Guotai Junan Shanghai Wealth Management Center",

          namelzh08:"Terd lu",
          positionlzh08:"Deputy General Manager of Lianhe Credit Rating Shanghai ",

          namefj09:"ALEX FENG",
          positionfj09:" Banyan Capital",

          namewyh10:"Yuehua Wang",
          positionwyh10:"Partner of DFJ DragonFund China ",

          nameghc11:"Chandler Guo",
          positionghc11:"Bitcoin Angel Investor",

          namezll12:"Liaoliao Zhang",
          positionzll12:"Partner of gate.io",

          // name_wujiezhuang04:"吴杰庄",
          // position_wujiezhuang04:"全国政协委员、香港青年联会首席参事、高锋集团董事局主席",


          namehjy03:"Alex Wu",
          positionhjy03:"Director of Blockchain, Goldford Fintech",

          namehjl02:"Caspar Wong",
          positionhjl02:"Goldford Chief executive",

          namezbc01:"Bankson Chung ",
          positionzbc01:"Director of Sales and marketing",



          nameylc13:"linke Yang",
          positionylc13:"Consultant of BTC Diamond",

          namelbj14:"Bingjiang Liu",
          positionlbj14:"President of Digital Asset Co., Ltd",

          namelsf15:"Chris Lee",
          positionlsf15:"CEO of OKEx",

          namety16:"Angela Tong",
          positionty16:"Jinse Finance Partner",

          namericoni17:"Riconi You",
          positionriconi17:"Co-founder and Chairman of FINWISE Committee",

          namehjp18:"Jiepeng Hu",
          positionhjp18:"Asian Market Head of QTG",

          namelqw19:"林琪武",
          positionlqw19:"知产链IPChain联合创始人",

          namech20:"Hao Chen",
          positionch20:"CTO of ViewFin",

          namelmz21:"李明肇",
          positionlmz21:"小牛链 CEO",

          nametedlin22:"Ted Lin",
          positiontedlin22:"Head of International Markets at Binance",

          namedxx23:"Xinxin Duan",
          positiondxx23:"CEO of 8BTC.com",

          nameyzy24:"Zuyan Ye",
          positionyzy24:"Co-founder&CEO of Chainfor",

          nameethanyu25:"Ethan Yu",
          positionethanyu25:"Founder  of CoinVoice",

          namelyl26:"David Yiling Li ",
          positionlyl26:"Founder of Trinity",

          namejyj27:"蒋宇捷",
          positionjyj27:"信天创投合伙人",

          namesj28:"Jian Sun",
          positionsj28:"Partner of J Lab",

          nameyxh29:"Xiaohan Xu",
          positionyxh29:"Co-founder of DataKYC",

          namekr30:"Kilian Rausch",
          positionkr30:"Product Director of Exchange Union",

          namekjx31:"Kenny Au",
          positionkjx31:"Co-Founder of LUXCHAIN, Blockchain and AI Columnist",

          namett32:"Talal Tabbaa",
          positiontt32:"Co-Founder Jibrel Network",

          namecyq33:"Yiqun Cai",
          positioncyq33:"Founder, Chairman and Chief Capitalist of MAS Capital,Chief Capitalist of Metaverse Funddation",

          namesxh34:"Sean Shek",
          positionsxh34:"CEO of UniGame",

          namenr35:"Nenad Rakocevic",
          positionnr35:"Co-Founder of Red",

          namelrj36:"Jack Lee",
          positionlrj36:"Managing Partner of HCM Capital of Foxconn Technology Group",

          namestg37:"Xiaopeng Shang",
          positionstg37:"President of BTC123",

          nameemil38:"Emil",
          positionemil38:"Penta Community Leader",

          namelxy39:"Xiangyu LI",
          positionlxy39:"Co-Founder & COO of NEM China",

          nameldw40:"Dawei Li",
          positionldw40:" Co-founder of ZB.com",

          namemark41:"Mark",
          positionmark41:"Founder of BlockchainCasnio ",

          namedcz42:"Changzhi Dong",
          positiondcz42:"Co-Founder of Basic World",

          namewlj43:"leo wang",
          positionwlj43:"Director of BeeChat Fund",

          namekw44:"Kenzi Wang",
          positionkw44:"Co-Founder of Superbloom",

          namehyq45:"Yuanquan Hu",
          positionhyq45:"CEO of BEPAL, Co-Founder of Heydun Chain Security Research Center",

          namezh46:"Hao Zen",
          positionzh46:"Founder of ANT Blockchain Allianceb",
          positionzh47:"Organizer of the Fujian Blockchain Club",

          namesjl47:"Jianliang Shao",
          positionsjl47:"Founder of Bitrise Capital, Deputy Secretary-General of the Investment and Finance Association of Zhejiang Province",

          namecf48:"Feng Cao",
          positioncf48:"Founder of PCHAIN, Chief Scientist of Blockchain Committee in China Federation of Logistics and Purchasing, Co-Founder of ChinaLedger of Blockchain Alliance",

          namexyq49:"Yongquan Xiao",
          positionxyq49:"Founder and CEO of MeshBox",

          nameszy50:"Zeyu Sun",
          positionszy50:"Co-founder and Brand Director of Coldlar",

          namepl51:"Paul Liu",
          positionpl51:"FAB Chairman Chief Blockchain Specialist",

          namepzx52:"Steve Pang",
          positionpzx52:"Convener of International Blockchain Association, Founder of QTG",

          namely53:"Yu liang",
          positionly53:"StarChain Investor, Founder and CEO of Kaipai",

          namehm54:"Hassan Miah",
          positionhm54:"CTO and Co-Founder of Robin8",

          namesmw55:"Mingwei Sun",
          positionsmw55:"Founder of Blocknews",

          namellw56:"Lianwei Sun",
          positionllw56:"CEO of Gamechain System GCS",

          namefwk57:"Kevin Fu ",
          positionfwk57:"CEO of Enjoy Chain",

          namelp58:"Pin Liu",
          positionlp58:"Head of Seer.pro",

          namerp59:"Roger Pottier",
          positionrp59:"ATN 产品经理",

          namelyc60:"Yingchun Lei",
          positionlyc60:"CEO of JGY Finance",

          namegf61:"Fai Gao",
          positiongf61:"Asia Pacific Operations Director of AFC",

          nametarmar62:"Tarmar Menteshashvili",
          positiontarmar62:"Expread Co-founder",

          namewbh63:"Binhua Wu",
          positionwbh63:"Founder of UGCHAIN",

          nameck64:"Cyrus Khajvandi",
          positionck64:"NSF&HHMI Researcher, Stanford Univerisity, Co-founder & CEO of BitBounce.io",

          namehqt65:"Justin He",
          positionhqt65:"CEO of HLWCHAIN",

          nameybz66:"YangBing Zhan",
          positionybz66:"CEO of CoinBene",

          nametoni67:"Toni",
          positiontoni67:"CEO of sgamer",

          nameljl68:" Bitcrab(Liu Jialing)",
          positionljl68:"BitShares Committee member, BitsClub co-founder, YOYOW co-founder",

          namegyl69:"Zack_Gao",
          positiongyl69:"Co-Founder of  International Blockchain Application Federation",


          namesld70:"Longdns",
          positionsld70:"Huoxun.com CEO",

          nameswj71:"Jackie",
          positionswj71:" President of Huaying Holdings Group",

          nameswjz72:"Dr. Johnny Ng",
          positionwjz72:"Chairman of Goldford Group/Member of the national committee of CPPCC/Chief participant in the Youth Federation of Hongkong",
          positionwjz72new:"Member of the national committee of CPPCC",

          namehjl73:"Caspar",
          positionhjl73:"Goldford 行政總裁",

          namezhq74:"Chou Hung Chi",
          positionzhq74:"Adjunct Associate Professor， National University of Singapore",

          namejco75:"JC Oliver",
          positionjco75:"Global Chief Creative Officer at Unlockd",

          nameliuyang76:"Leon",
          positionliuyang76:"BITKAN Chairman",

          nameAdel77:"Adel",
          positionAdel77:"ATN Co-Founder",

          namedingyuan78:"Yuan ding",
          positiondingyuan78:"Chief Analyst of  Huobi",

          namezhouxun79:"Allen Zho",
          positionzhouxun79:"CEO of EKT",

          namezhaoqianjie80:"Denver Zhao",
          positionzhaoqianjie80:"SVP of BTCC",

          nameviachesbobok81:"Viacheslav Bobok",
          positionviachesbobok81:"BitRent platform CEO",

          nameczr82:"Monitor Chen",
          positionczr82:"COO of Walton Chain",

          namezkl83:"Kaili Zheng",
          positionzkl83:"CMO of Freyr",

          namedc84:"Ken Dean",
          positiondc84:"BitUN，Higgs Block Chairman",

          namestormz85:"Storm Zhang",
          positionstormz85:"Core Architect of InterValue",

          namelyq86:"Anndy Lian",
          positionlyq86:"Linfinity Singapore CEO",

          namekc87:"Keda Che",
          positionkc87:"founder of Universal Labs",

          namezz88:"Jason",
          positionzz88:"Director of the No.1 Bitcoin mining pool BTC.com",

          namecq89:"Ms. Karen Chen",
          positioncq89:"CEO of Higgs Block",

          nameDenis90:"Denis",
          positionDenis90:"Ecosystem Developer",

          namesyj91:"Tony Sun ",
          positionsyj91:"ONEROOT CEO",

          nameericyao92:"Eric Yao",
          positionericyao92:"CTO of i-House.com (IHT)",


          nameqzl93:"Zhongling Qin",
          positionqzl93:"President of Japan-China AI.IoT Association/New technology RDC Director of Ericsson",

          namezj94:"Jin Zhou",
          positionzj94:"International AI Minister of Hua jinlu",

          namedh95:"Hai Du",
          positiondh95:"Chief Data Officer of Huobi",

          namehz96:"John Han",
          positionhz96:"Business Development Director",

          namepeteyu97:"Peter Yu",
          positionpeteyu97:"CEO of CyteCoin",

          namebs97:"Bing Shen",
          positionbs97:"CEO of TBT/Blackchain Angel Investor",

          namezzh98:"JONNA ZHAO",
          positionzzh98:"Asia Founder of PUNCPH ",

          namezll99:"Linan Zhang",
          positionzll99:"Well-known digital encrypted currency trading platform OEX co-founder＆CEO ",

          namesmw100:"Mingwei Sun",
          positionsmw100:"Co-Founder of 18",

          namejgp101:"William Jiang ",
          positionjgp101:"Project Operations Manager of Zengold",

          nameSIMON102:"SIMON JE",
          positionSIMON102:"HK international blockchain&financial association",

          nameAlex103:"Alex Isaiev",
          positionAlex103:"OSA Decentralized Co-Founder",

          namenick104:"Nick Lee",
          positionnick104:"co-founder of Ocean chain",

          nameMiao105:"Keyan Miao",
          positionMiao105:"Hyperpay CMO",

          namechenyuming106:"Tony Chen",
          positionchenyuming106:"Agent Chief Executive of EBC",

          nameARATA107:"ARATA",
          positionARATA107:"AVHのCTO，⽇日本の仮想通貨メディア CRYPTO TIMESもプロデュース",

          nameduboyuan108:"Estrella",
          positionduboyuan108:"OK Investor",

          nameTonyEvans109:"Tony Evans",
          positionTonyEvans109:"Vice-Chairman and Managing Director of Asia and the Middle East of Blockchain Industries, Inc.,Co Founder of Fintech Global Consultant’s",

          nameEric110:"Eric Gu",
          positionEric110:"Viewfin CEO",

          nameEric1100:"CZ",
          positionEric1100:"Founder and CEO of Binance",

          namezss0333:"Shousong Zhang",
          positionzss0333:"CEO of BTCtrade",

          nameSyc001:"Justin Sun",
          positionSyc001:"Founder and CEO of TRON",

          nameChangjia:'Jia Chang',
          positionChangjia:"Founder and CEO of 8btc",

          namechongge:'Chong ge',
          positionchongge:'Founder of YiBite.com and Aisi wechat group',

          nameydshentuchunchun:'Qingchun Shentu',
          positionydshentuchunchun:'CEO of Silver Chain Technology',

          namemaqianli:'Qianli Ma',
          positionmaqianlie:'Vice President of 8btc and Bytom(BTM) Operation Director',

          nameAhmedAl:'Ahmed Al-Balaghi',
          postionAhmedAl:'Co-Founder and President of Fudan BLockchain Association (F6S) Qianli Ma Vice President of 8btc and Bytom(BTM) Operation Director',


          nameliuguanhua:'Irene Va Kuan Lau',
          positionliuguanhua:'Acting President of Macau Trade and Investment Promotion Istitute (IPIM)',

          namezss03333:"Qiyuan Li",
          positionzss03333:"CEO of BTCChina",

          nameShunriGuo111:"Shunri Guo",
          positionShunriGuo111:"CEO & Co-Founder at ParcelX",

          nameNicWatson112:"Nic Watson",
          positionNicWatson112:"Managing Director of Naseba",

          nameOlivier113:"Olivier Truquet",
          positionOlivier113:"Student of Fudan University",

          nameEricFang114:"Eric Fang",
          positionEricFang114:"Co-founder of IONChain",

          nameMarwan115:"Dr. Marwan Al-Zarooni",
          positionMarwan115:"Founder and CEO of Dubai Blockchain Centr",

          namescxh116:"Eric Gu",
          positioncxh116:"Founder of the Metaverse foundation",
          nameszh117:"Hao Zeng",
          positionzh117:"Founder of Ant Node Alliance",
          namesyzw118:"ZhiWenYang",
          positionyzw118:"Ant Node Alliance Co-founder",
          namescxh119:"JingWeiZhang",
          positioncxh119:"Ant Node Alliance Co-founder",


          zzhz01:"Sponsorship",
          qdhz02:"Channel Cooperation",
          hwhz03:"Overseas Cooperation",
          mtsy04:"Media Cooperation",
          pwsy05:"Ticket Information",

          tkaddr:"Grand Prince Hotel New Takanawa",
          helpnav:"Guidelines",
          helpGuides:"Guides for participants",
          qychEntrance:"Enterprise",
          grchEntrance:"Individual",
          mediacover:"Media",
          chqyfw:"Enterprise",
          GaHwHz:"Contact us (Outside Mainland China)",

          hotelab:"Peripheral Hotel",
          hoteltips:"Please kindly be noticed that the following hotel list is recommended by summit organizer according to the location convenience.  We do not responsible for accommodation services. Please contact hotel directly if you need make a room reservation.",
          hotelking01:"Grand Prince Hotel New Takanawa",
          hotelstar4:"Four star hotel",
          hotelstar3:"Three star hotel",
          hoteladdrtl:"Address",
          hoteladdrgphnt:"108-8612 东京都, Minato-ku, Takanawa 3-13-1",
          hotelfwhome:"Venue for the conference",

          hotelstth01:"Shinagawa Tobu Hotel",
          hoteladdrsth:"108-0074 东京都, Minato-ku Takanawa 4-7-6",
          hotelsthdistance:"0.3 kilometers from the meeting, 5 minutes to the meeting",

          hotelkeit02:"Keikyu EX Inn Takanawa",
          hoteladdrkeit:"108-0074 东京都, Minato-ku Takanawa 4-10-8",
          hotelkeitdistance:"It's 1 kilometers away from the venue and 5-10 minutes' walk to the venue.",

          hotelex01:"Keikyu EX Inn Shinagawa",
          hoteladdrex:"108-0074 东京都, Minato-ku Takanawa 3-13-3",
          hotelexdistance:"1.5 kilometers from the meeting, 10 minutes to the meeting",

          namesupernova14:"Liang Zeng",
          positionsupernova14:"Supernova Chain Executive Chairman BeeNews CO-founder",

          cityshanghai:"ShangHai",
          citymacau:"Macau",
          citytokyo:"Tokyo",
          citylsals:"Los Angeles",
          cityhongkong:"Hong Kong",
          citydubai:"Dubai",
          cityBangkok:"Bangkok",

          namemeetingdate521:"Day 1 (May 21, 2018)",
          namemeetingdate522:"Day 2 (May 22, 2018)",

          namehcA:"Conference Hall Ａ",

          namehcB:"Conference Hall Ｂ",

          namezbzhc:"Rebroadcast the main venue",

          nametime:"Time",

          namespeakers:"Speaker",

          namestheme:"Topic",

          nameAM:"AM",

          namePM:"PM",

          nameyuanzhou:"Panel",

          nameqdrc:"Registration",

          namemeetingopen:"Opening",

          nameRiconiinfo:"Riconi You | Founder and Executive Chairman of FINWISE",

          namewelSpeech:" Welcome Speech",

          nameJCOliverinfo:"JC Oliver | Executive of Bankex, Moviecoin & Ai-X, Former Global Head of Innovation from Microsoft",

          nameJCOliverB:"JC Oliver | Global Chief Creative Officer at Unlockd, Former Global Head of Innovation from Microsoft",

          namewangbinshenginfo:"Wang Binsheng | Advisor of Blockchain Joint Development Organization, Professor of Graduate School of China Academy of Social Sciences",

          nameNicWatsoninfo:"Moderator: Nic Watson | Managing Director of Naseba",

          nameAhmedinfo:"Ahmed Al-Balaghi | Managing Director of Viewfin Dubai",

          nameHowfinancialdes:"How financial science and technology tide leads the development of global enterprises",

          nameModeratorRiconi:"Moderator - Riconi You | Founder and Executive Chairman of FINWISE",

          nameliujin:"Jin liu  |  President of Japan-China AI.IoT Association ",

          nameAllenLiu:"Allen Lau | Managing Director of Coloney Capital, Founder and CEO of WE+ ",

          nameFerdiSong:"Ferdi Song | Co-founder of Haipujicheng Fund, Former Managing Director of JP Morgan Chase Asia Division",

          nameRichardWang:"Richard Wang | Partner of DFJ DragonFund",

          nameBlockchainsv:"Blockchain and financial services",

          namezhouhongqi:"Chou Hung Chi | Adjunct Associate Professor, National University of Singapore",

          nameLianghongFei:"Lianghong Fei | Chief Technical Evangelist, Amazon Web Services",

          nameVincentliang:"Vincent Leung | StarChain Investor、KAIPAI Founder＆CEO",


          nameAllenZhou:"Allen Zhou | EKT CEO ",

          nameAllenZhoupspeakct:"Creating a scalable, commercial-grade blockchain programming platform ",

          nameJackieWu:"Jackie Wu | Chairman of HuaYing Holding Group",

          nameDennisSarkar:"Dennis Sarkar  |  Genexi Ecosystem Developer",

          nameblockchaindrive:"Business model innovation of deconstructing block chain + drive",

          namezhoujin:"Dr. Zhou Jin | PhD A.I., Director of Hua Jin International A.I. Section",

          nameblockchaintech:"Artificial intelligence and block chain technology",

          nameKedaChe:"Keda Che | Universal Labs Founder",

          nameModeratorren:"Moderator - Nicolas Ren | DGM of Guotai Junan Shanghai Wealth Management Center",

          nameZhonglingQin:"Zhongling Qin | President of Japan-China AI.IoT Association/ New Technology RDC Director of Ericsson",

          nameYuanDing:"Yuan Ding | Chief Analyst of Huobi Researsh Center",

          nameblockchainyinyong:"Ground application of block chain technology",

          nameChenHaocto:"Chen Hao | CTO of Metaverse",

          nameOKEXReserved:"OKEX Reserved",

          nameKarenChen:"Karen Chen | CEO of Higgs Block",

          nameEricYao:"Eric Yao |  CTO of i-House.com (IHT)",

          nameMonitorChen:"Monitor Chen | COO of Waltonchain",

          nameKailiZheng:"Kaili Zheng | CMO of Freyr",

          nameDavidYli:"David Yiling Li | Founder of Trinity",

          nameDavidYlisays:"Thoughts on Blockchain Gaming",

          nameAnndyLian:"Anndy Lian｜CEO of Linfinity Singapore ",

          nameShenBing:"Shen Bing | CEO of TBT Exchange",

          nameLiufei:"Make | COO of Huobi",

          nameZhangLiaoliao:"Zhang Liaoliao | Partner of gate.io",

          nameBTCCHead:"BTCC Head of the exchange",

          nameLiuHaidong:"Liu Haidong | Tulipex CIO",

          nameFutureExchanges:"Future of exchanges",

          namePeterYu:"Peter Yu |  CEO  of CyteCoin",

          namecaohuining:"Founder &CEO of Usechain",


          nameSelfBL:"The First Self-Sovereign Identity Blockchain",


          namePunchRESERVED:"Jonna Zhao | Punch Foundation Asia Founder",



          nameJialingLiu:"Jialing Liu | Director of BTS, Co-Founder of BTC Venture Camp",


          nameJackZhang:"Jack Zhang | Head of Lighting BTC China, Founder of Chain+",

          nameBlockchainlogic:"Blockchain investment logic",

          nameHowBLAI:"How to Nurture Artificial Intelligence (AI) with Blockchain",

          nameAdelATN:"Adel | ATN Co-Founder",

          nameStormZhang:"Storm Zhang | InterValue Core Architect ",

          nameInterValueBL:"InterValue：Building the next generation global value Internet block chain 4 infrastructure",

          nameJasonzhuang:"Jason | Director of the No.1 Bitcoin mining pool BTC.com",

          nameBTCCHeadZhao:"Denver Zhao |  SVP of BTCC ",

          nameHaiDu:"Hai Du  |  Chief Data Officer of Huobi Research",

          nameblockchainmining:"The future of blockchain mining",

          nameLeonLiu:"Leon | BITKAN Chairman",

          nameViacheslavBK:"Viacheslav Bobok | BitRent platform CEO",

          nameTonySun:"Tony Sun | ONEROOT CEO",

          namedipuliansp:"DePuLian Guest speaker",
          nameAVHsp:"AVH Guest speaker",
          nameEBCsp:"EBC Guest speaker",
          nameHyperPaysp:"HyperPay Guest speaker",

          nameXiaohanXu:"Xiaohan Xu | Co-founder of DataKYC",
          nameModeratorKennyAu:"Moderator - Kenny Au | Co-founder LUXCHAIN, Blockchain & AI Journalist",

          nameCharlesXue:"Charles Xue | Angel Investor",
          nameEricGu:"Eric Gu｜CEO of Viewfin",
          nameKarenChen:"Karen Chen | CEO of Higgs Block",
          nameDigitalIdentity3:"Digital Identity and Digital Assets Disruption In Web 3.0",
          nameAngelaTong:"Angela Tong | Partner of Jinse Finance",
          nameLiangZeng :"Tony Zen  | Supernova Chain Chairman, BeeNews Co-founder, Former VP of Microsoft GC, Baidu Nuomi CEO",
          nameEthanYu:"Ethan Yu | Founder  of CoinVoice",
          nameYeZuyan:"Ye Zuyan | Co-founder & CEO of Chainfor",
          nameJohnHan:"John Han  |  Business Development Director",
          nameAngelaTongModerator:"Moderator - Angela Tong | Partner of Jinse Finance",
          nameLongdns:"Longdns | Huoxun.com CEO ",
          nameBlockchainRole:"The Role that Media Plays in Blockchain and Digital Currency Sector",
          nameBlockchain3media:"New media in the era of block chain 3 -- intelligent information flow and digital currency value discovery platform",
          nameKenDean:"Ken Dean | Executive Director of BitUN ",
          nameocspeaker:"oc Guest speaker",
          nameosaspeaker:"osa Guest speaker",
          nameZhangTao:"Zhang Tao | Angel Investor, coinegg.com Co-founder",
          nameHugoHu:"Hugo Hu | BEPAL CEO",
          nameZongxinPeng:"Zongxin Peng | Founder of QTG",
          nameModeratorchangxi:"Moderator - Ted Chang | Managing Director of FINWEXLABS",
          nameZeroGao:"Zero Gao | Vice Chairman of IBAF",
          nameSimonJE:"Simon JE | CEO of Galaxy Treasure Financial Group Holdings Limited",
          nameYiqunCai:"Yiqun Cai | Founder and Chairman of MAS Capital,Chief Capitalist of Metaverse Foundation",
          nameCasparHuang:"Caspar  | Goldford Chief executive",
          nameblockchainchange:"The change of block chain technology to the future finance",
          namewangbinshengsay:"The investment logic and evolution direction of block chain Market",
          nameVincentliangsay:"Blockchain revolution let Token walk into life",
          nameLianghongFeisay:"Blockchain on AWS ",
          nameAVHspk:"AVH spokesperson",
          nameTonychen:"Tony Chen |  Agent CEO of Empire Blockchain Center",
          nameTonychensay:" About Empire Blockchain Center ",
          nameHansHenrik:"Hans Henrik Christensen | Director ‑ DTEC & SOF, Dubai Silicon Oasis Authority, Government of Dubai",
          nameHansHenriksay:"Blockchain-Dubai government entrepreneurial activities",
          namePeterYusay:"CyteCoin Dispersive AR/VR／360 Advertising platform",
          namewangjianlan:"Jiannan Wang | Angel Investor",
          namewangjianlansay:"Building a weak centralization of the applied ecological chain of Germany ----THPC",
          nameTonySunsay:"Asia Pacific blockchain center",
          nameblockchaindevdt:"Development trend of block chain",
          nameTonyEvanspk:"Tony Evans  |  Vice-Chairman and Managing Director of Asia and the Middle East of Blockchain Industries, Inc.,Co Founder of Fintech Global Consultant’s",
          nameTonyEvanspksay:"Helping investors access the best deals through accountable source",
          nameSongYang:"Song Yang | TonArts CEO Leblock Producer, CEO of TonArts",
          nameSongYangsay:"New form of game on Chain: Lok block, virtual Lego on blockchain",
          nameduboyuanspk:"Estrella |  OKBlockchain Capital investor",
          namesunmingwei:"Taro | Co-FounderBlock 18 Singapore",
          namesunmingweisay:"Building block chain communities over the world with high efficiency",
          nameYeZuyansay:"Thinking under the trend of block chain",
          nameWentaojing:"Wentao Jing |   HyperPay Asian Market Director",
          nameWentaojingsay:"A high quality digital currency world toolbox",
          nameJohnHansay:"From the end to the cloud, the cloud sees the fog",
          nameNickLee:"Nick Lee  | OC co-founder ",
          nameNickLeesay:"Ocean Chain Link the world at sea",
          nameAlexIsaiev:" Alex Isaiev | Co-founder, Business Development Lead of OSA",
          nameAlexIsaievsay:"AI & Blockchain in Retail",
          nameblockchainprojects:"Five suggestions for the future development of blockchain projects",
          nameguoshunri:"Guo Shunri | CEO & Co-Founder at ParcelX",
          nameWilliamJianginfo:"William Jiang  |  ZENGOLD Project Operations Manager",
          nameblockchainappfinance:"Prospect of blockchain application finance",



          nameblockchaindrive:"Business model innovation of deconstructing blockchain + drive",
          nameviachesbobokinfo:"Viacheslav Bobok | BitRent platform CEO",
          nameblockchainBiotech:"Accelerating Biotech using Blockchain",
          nameblockchainpast:"Blockchain and Me for the past 3 years ",
          nameAboutBitRent:"About BitRent",
          nameblockchainrevolution:"The revolution of Internet of Things in blockchain era",
          nameblockchainArts:"Arts and Blockchain",
          nameblockchainEvolution:"Evolution of Crypto currency",
          nameblockchainIntro:"Introduction to a tokenized blockchain supply chain",
          nameMonaPRM:"Mona |  PR Manager of Trinity ",
          nameblockchainGaming:"Thoughts on Blockchain Gaming",
          nameEricFanginfo:"Eric Fang | Co-founder of ION Chain, Partner of Ontime Capital",
          nameIONChain:"IONChain - A New IoT Infrastructure Based on Blockchain and Edge Computing",
          nameblockchainCornerstone:"Blockchain's Cornerstone: The Evolution of the Mining Pool Ecosystem",
          nameBitsharesfuture:"The future of Bitshares",
          namePunchRedefines:"Punch Redefines Cultural Ecosystem, Liberating Creative Productivity",
          nameblockchainAI:"How to Nurture Artificial Intelligence (AI) with Blockchain",
          nameJohnHan:"John Han  |  Business Development Director of AAC",
          nameHelpingsource:"Helping investors access the best deals through accountable source",
          nameOlivierinfo:"Olivier Truquet | President and Co-Founder of the Fudan Blockchain Association",
          nameTobiokaKen:"Tobioka Ken | Professor of  Kanazawa Institute of Technology",
          nameblockchainThings:"Blockchain of Things",
          nameblockchainefficiently:"How to build a global blockchain community efficiently",
          nameblockchainBank:"Blockchain Bank-Infrastructure and Service for Digital Financial Market",
          nameParcelXnetworks:"ParcelX：Centralization of cross border parcels and distribution networks",
          nameblockchainindustry:"Blockchain application in Gold industry",
          nameZeroGaoModerator:"Moderator -Zero Gao | Vice Chairman of IBAF",

          nameBiggerBetter:"The Bigger The Better",
          nameGarryZhang:"Garry Zhang | CTO of Higgs Block ",
          nameZengHaoSPK:"Zeng Hao | Founder of ANT Blockchain Alliance ",
          nameBlockchainFuture:"Future of Blockchain+ ",
          nameGenadiMan:"Genadi Man :Entrepreneur, founder of Telesens KSCL AG ",
          nameInsuranceRevolution:"Insurance  revolution with blockchain ",
          nameMinchenkoM:"Mykola Minchenko | SIXA CEO ",
          nameBCcloudplatform:"Personal distributed computer cloud platform based on block chain",
          FINWISE_Detail:"The Finwise committee is composed of pioneer entrepreneurs in the political, TechFin industry fields. The role of the committee is to grasp the TechFin industry trend, and to combine the ABCDI (Artificial Intelligence, Blockchain, Cloud Computing, Big Data, Internet of Things) fields pioneer enterprises with investment field leading companies.The committee integrates and gathers the industry front-line resources to create the most influential TechFin summit brand.",


          // HK i18n begin

          HK_addr:"L'hotel Nina et Convention Centre",
          HK_fwDes:"Finwise Summit aims to strengthen networks among practitioners in the global financial industry and promote the development of global financial technology.  With a focus on cutting-edge blockchain technology, Finwise assembles outstanding fintech and blockchain companies to share and debate the application and development of fintech and blockchain technology.",
          HK_fwTime:"10-11 August , 2018",
          HK_chqt:"WHO SHOULD ATTEND？",
          Attend_pr:"Fintech",
          Attend_jg:"Financial Industry",
          Attend_center:"Data Center",
          Attend_websafe:"Internet Security",
          Attend_wlw:"IOT",
          Attend_BLC:"Blockchain Service provider",
          Partner_tl:"SUPPORT MEDIA",
          Partner_tl1:"STRATEGIC PARTNERS",
          Partner_GDtl:"Diamond Sponsor",
          Partner_tl111:'SPONSORS',
          HK_FWChoose:"Get Involved In",
          HK_FWChooseTK:"Sponsorship clause",
          Price_tips:"Notice: Because of the large fluctuation of digital money, this price is only valid until July 1st, and the official website updates the latest price in July 1st.",


          namexmz_info:"Charles Xue",
          positionxmz:"Angel Investor",

          nameHans:"Hans Henrik Christensen",
          positionHans:"Dubai Silicon Oasis Authortiy, VP - Dtec",


          nameHanFeng_info:"Feng Han",
          positionHanFeng:"Founder of ELA",


          nameDujun_info:"Du Jun",
          positionDujun:" CEO of Jinse Finance",

          nameCaoNH:"Cao Hui Ning",
          positionCaoNH:"Professor of CEIBS, Founder &CEO of Usechain ",

          nameFLH_info:"Lianghong Fei ",
          positionFLH:"Chief Technical Evangelist, Amazon Web Services",

          nameWuJi:"Jackie Wu",
          positionWuJi:"Chairman of HuaYing Holding Group",

          nameYangNK:"linke Yang",
          positionYangNK:"Co-founder of BTCChina",

          ATFuest_tl:"Guests",
          Agenda_tl:"Agenda",


          nameHanFeng:"Feng Han",
          positionHanFengInfo:"Founder of ELA",

          organisers:"Organisers",
          othersers:"Co-hosted",
          djiaguanming:"Premium Title Sponsorship",
          xianbandanwei:"Co-organiser",

          NameNew01:"Vitalik Buterin",
          positionNew01:"Founder of Ethereum",

          NameNew02:"Bob Xu",
          positionNew02:"Angel Investor\n" +
              "Founder of ZhenFund",

          NameNew03:"CZ",
          positionNew03:"CEO of Binance",

          NameNew04:"Zhao Dong",
          positionNew04:"Angel Investor\n" +
              "Founder of DGroup",

          NameNew05:"Dr.Johnny Ng",
          positionNew05:"Member of CPPCC and consultant of Hong Kong United Youth Association" ,

          NameNew06:"Eric Gu",
          positionNew06:"Founder of the\n" +
              "Metaverse foundation\n" +
              "Ethereum Angel Investor",

          NameNew07:"Chandler Guo",
          positionNew07:"Angel Investor",

          NameNew08:"Li Lin",
          positionNew08:"Founder and CEO\n" +
              "of Huobi",

          NameNew09:"Du Jun",
          positionNew09:"Founder and CEO of\n" +
              "Jinse Finance Co-founder\n" +
              "of Node Capital",

          NameNew10:"Wu Jihan",
          positionNew10:"Co-founder of BITMAIN",

          NameNew11:"Da Hongfei",
          positionNew11:"Founder of NEO",
          NameNew12:"Richard Wang",
          positionNew12:"Partner of DFJ\n" +
              "DragonFund China",
          NameNew13:"Deng Di",
          positionNew13:"Chairman of TaiYiYun",
          NameNew14:"Yang Linke",
          positionNew14:"Co-founder of BTCChina",
          NameNew15:"Yu Jianing",
          positionNew15:"President of\n" +
              "Huobi University",
          NameNew16:"Change Jia",
          positionNew16:"Founder and CEO\n" +
              "of 8btc",
          NameNew17:"Justin Sun",
          positionNew17:"Founder and CEO\n" +
              "of TRON",
          NameNew18:"Charle Xue",
          positionNew18:"Angel Investor",
          NameNew19:"Chong ge",
          positionNew19:"POC ecology\n" +
              "advocate, Founder of Hpool",
          NameNew20:"An xinxin",
          positionNew20:"Partner of Jinse Finance\n" +
              "Founder of Jinse Academy",
          NameNew21:"BitCrab(Liu Jialing)",
          positionNew21:"BitShares Committe member\n" +
              "BitsClub co-founder",
          NameNew22:"Patrick Shuai",
          positionNew22:"Founder of QTUM",
          NameNew23:"Ahmed AI-Balaghi",
          positionNew23:"Co-founder and\n" +
              "President of Fudan\n" +
              "Blockchain Association",
          NameNew24:"Li Dawei",
          positionNew24:"Co-founder of zb.com",
          NameNew25:"Zeng Hao",
          positionNew25:"Founder of Ant\n" +
              "Node Alliance",
          NameNew26:"Shentu Qingchun",
          positionNew26:"CEO of Silver Chain Technology",
          NameNew27:"Wang Binsheng",
          positionNew27:"Consultant of Organization of\n" +
              " Blockchain Associations for\n" +
              "development Distinguished\n" +
              "Professor of Chinese\n" +
              "Academy Social Sciences",
          NameNew28:"Ken Huang",
          positionNew28:"Chief blockchain architect\n" +
              "for Nuclear chain\n" +
              "member of Chinese\n" +
              "Electric Academy\n" +
              "Blockchain Expert Committee",
          NameNew29:"Ramble",
          positionNew29:"Founder of SWFTC\n" +
              "Founder of North America\n" +
              "Blockchain Association\n" +
              "(NABA)",
          NameNew30:"Lucas Lu",
          positionNew30:"Founder of CyberMiles\n" +
              "First GM of Alibaba’s Taobao\n" +
              "Mobile platform\n" +
              "Co-founder of LightInTheBox",
          NameNew31:"Caspar WONG",
          positionNew31:"CEO of\n" +
              "Goldford Fintech",
          NameNew32:"Charles Cai",
          positionNew32:"Mcdonald’s China CIO\n" +
              "Co-founder and President \n" +
              "at InfiniVision iABC Labs",
          NameNew33:"Zhao Sheng",
          positionNew33:"CEO and Founder\n" +
              "of GXChain",
          NameNew34:"Aurora Wong",
          positionNew34:"Vice president of ZB Group\n" +
              "Founding Partner of\n" +
              "Crypto Capital",
          NameNew35:"Frank Zheng",
          positionNew35:"Dean of the Caribbean\n" +
              "Blockchain Research Institute\n" +
              "Director of Wolrd\n" +
              "Blockchain Organization",
          NameNew36:"Vincent Huang",
          positionNew36:"CEO and Founder\n" +
              "of GXChain",
          NameNew37:"Feng Fazhan",
          positionNew37:"IDA Digital asset management\n" +
              "PTY, LTD COO\n" +
              "Partner of  DAppLabs",
          NameNew38:"Zong Hua",
          positionNew38:"Initiator of The Greater\n" +
              "bay area blockchain\n" +
              "industry association",
          NameNew39:"Larry Lin",
          positionNew39:"Director of\n" +
              "TrueChain foundation",
          NameNew40:"Podsen Huang",
          positionNew40:"Founder of UB.vc\n" +
              "co-founder of YOEx.com",
          NameNew41:"Zhang Jianguo",
          positionNew41:"President of \n" +
              "Bikuai Finance\n" +
              "Chairman of China\n" +
              "Blockchain VC Association",
          NameNew42:"Raymond GAO",
          positionNew42:"Vice President of International\n" +
              "BlockChain and\n" +
              "CryptoCurrency Assocaition, \n" +
              "Co-founder of\n" +
              "GVE foundation",
          NameNew43:"Cheney Tsoi",
          positionNew43:"Founding President of Asia\n" +
              "Blockchain Society\n" +
              "CEO of Hong Kong\n" +
              "Blockchain Asset\n" +
              "Management Company",
          NameNew44:"Jiang Biao",
          positionNew44:"Expert member of the China blockchain sandbox research center",
          NameNew45:"Fred Wang",
          positionNew45:"Founder of Mars Finance and Consensus Lab Chairman of Linekong Interactive Group",
          NameNew46:"Larry Li ",
          positionNew46:"DFJ\n" +
              "DragonFund China",
          NameNew47:"Pat Tang ",
          positionNew47:"Plair CEO",
          NameNew48:"David Kim",
          positionNew48:"Blue Block CEO",
          NameNew49:"William Bao Bean",
          positionNew49:"SOSV General Partner ",
          NameNew50:"Kenny Au ",
          positionNew50:"Elevate Co-founder",
          NameNew51:"Patrick Palacios ",
          positionNew51:"LoyalCoin CEO",
          NameNew52:"Hans Lomsbardo",
          positionNew52:"Blockpass CMO",
          NameNew53:"Emil Chan ",
          positionNew53:"Hong Kong Smart City Consortium Fintech Chairman",
          NameNew54:"Yiming Hu ",
          positionNew54:"Draper Dragon Associate",
          NameNew55:"Song Yang ",
          positionNew55:"Leblock CEO",


      },
      jap: {
        seey1: "トップページ",
        hyyc2: "アジェンダー",
        zzhz3: "スポンサー",
        wjhg4: "過去のレビュー",
        gywm5: "我々について",
        hqmp6: "チケット取得",
        qyyj7: "企業展示参加或いは講演",
        wncp8:
          "ブランド認知度の樹立のためのプラットフォーム提供、共同主催関係の達成及び新製品の発表。",
        qybm9: "企業参加応募",
        grbm10: "個人参加応募",
        // xsly11: "早期割引価格：1588元、4月21日より通常価格：2800元",
        xsly11: "クリック個人志願し、サミットのチケット購入",
        grbm12: "個人応募",
        chjb13: "ご来賓",
        tzjg14: "投資機構",
        mtbd15: "メディア報道参加",
        qqgs16: "グローバルブロックチェン企業",
        gydh17: "大会について",
        fstj18:
          "FINWISEサミットは業界関係者間のコミュニケーションを強化し、世界的な金融技術の発展を促進することを目指します。我々は現在金融科技領域最も最前線のブロックチェン技術を主体とし、世界的に優秀な業界企業を結集し、未来金融技術及びブロックチェン技術応用発展を展望・推進します。",
        ckgd19: "もっと見る",
        lhzb20: "共同主催",
        mtxb21: "メディア協賛",
        xbfe22: "協賛者",
        pwzx23: "チケットに関する問い合わせ",
        zzzx24: "スポンサーに関する問い合わせ",
        gywm25: "我々をフォローする",

        fzyc26: "FINWISEサミット2018東京大会アジェンダ",
        hdbg28: "ブランドの披露",
        tghb29:
          "現場の展示を通じて、貴社のブランドイメージが各媒体のネットワークおよび大会会場に紹介され、有効的に貴社のブランドの認知度を上げることできます。FINWISEサミット東京は、2500名以上のご来賓の参加、東アジア800万以上のブロックチェン関係者にカバーされる予定です。本大会はサミット公式のFacebook、twitter等のSNSとは別に、大会開催の前後及び開催中、全方面大会及び大会とパートナーの情報を配信する。ブロックチェン業界の企業メディア、個人メディア、すべてのチャネル、多次元的にパートナー情報を披露する。",
        tzyh30: "潜在顧客を開拓する",
        tgjl31:
          "貴社の優秀製品及びサービスの展示を通じて、ユーザーを引き付け、ブランド認知度を高めることができます。FINWISEサミット東京では業界の規制とブロックチェーン上の国の政策について焦点を当て、議論します。より多くのブロックチェーン業界で最も熱い、最も代表的な産業企業リソースを募集し、協力と交流を促進する。",
        scsl32: "技術実力の出力",
        tgcx33:
          "プレゼンテーションを通じてプロジェクトの進捗状況を共有し、会社/チームの技術力を出力することで、ブランド認知度を高めることができます。 FINWISEサミット東京は、ブロックチェーンプロジェクトセミナーの特別セッション、カスタマイズ可能のブランドサブセッション等を提供します。業界見解の共有やプロジェクトの利点の解読等できる、ブロックチェーン業界の技術と革新を普及させる優れた講師の推薦を楽しみにしています。",
        bzzs34: "標準ブース招致",
        lhzb35: "共同主催",
        zsxb36: "ダイヤモンド共催者",
        jpzz37: "ゴールドスポンサー",
        ypzz38: "シルバースポンサー",
        tpzz39: "ブロンズスポンサー",
        gwms40: "公式ウェブサイトに掲載されるロゴと企業の説明",
        fhpp41: "サブミット出展者マニュアルに掲載される企業ブランド",
        fhbf42: "サミット中に再生された企業のウォームアップビデオ",
        fhgm43: "副会場のタイトルスポンサーシップ",
        mtzf44: "独占インタビュー",
        esyj45: "20分間の独立スピーチ",
        bzzt46: "標準ブース",
        wixz47: "VIPパスポート",
        jeeg48: "価格",
        bzzws40: "標準ブースで商人を募集する",
        unitzhang: " ",

        dcqd50: "来賓受付",
        dhks51: "大会開始",
        hyzz52: "大会オープニングスピーチ",
        bcys53: "BCUA披露式",
        jgfz54: "規制技術は仮想通貨産業の発展を促進する仕組み",
        kxzx55: "管轄区域を跨る金融サービスのブロックチェーンの相互運用性",
        jgzy56: "支持政策の確立とガバナンスにおける規制当局の役割",
        qkcx49: "ブロックチェーンが社会生産性の革新を促進する仕組み",
        rhyy57: "ブロックチェン技術の汎用的な応用を促進する仕組み",
        fxkl58: "ベンチャーキャピタルとブロックチェーン",
        jmld59: "暗号化通貨価格と株市場の関連性",
        qkbg60: "ブロックチェン技術は未来金融の変革を起こす",
        jyhg61: "交換所の自律及びコンプライアンスの実現について",
        qkxz62: "ブロックチェーン応用の技術的限界",
        gsyh63: "コンセンサスシステムの進化",
        qkwl64: "ブロックチェンの過去、現在と未来",
        jywl65: "交換所の未来",
        gyjc66: "win-winの仕組みは未来会社の基盤です",
        qktd67: "ブロックチェーンのセキュリティの問題と痛みポイント",
        qkzn68: "ブロックチェンと人工知能",
        qkfz69: "移動端末でのブロックチェンの新展開",
        xyqs70: "次世代マイニングプールの発展動向",

        fhfz71:
          "FINWISEサミットは中国で最も影響力のあるブロックチェンサミットの一つです。チームは金融マーケットプロフェショナル及びブロックチェン業界エリートが構成される。コアメンバーはすべて有名な銀行、ブロックチェン会社、コンサルタント会社、金融会社、インターネット会社のメンバーです。時代の最も強力な頭脳を結集し、優れた企業を結集し、業界関係者間のコミュニケーションを強化し、世界的な金融技術の発展を促進することを目指します。",
        cewl72:
          "2017年以来、FINWISEは上海とマカオで開催され、約1万人が現場参加し、数百万人がンライン参加しました。国内外100以上のメディアの報道が行われました。2018年には、FINWISEが東京、ドバイ、香港各地で開催される予定です。さあ、ぜひこの大会にご参加頂き、より良い未来を一緒にこの目で確かめましょう。",
        zwhe73: "FINWISE組織委員会",
        hxcy74: "コアチームメンバー",

        cyqy75: "参加合作のスポンサーは以下の権益を獲得できます。",
        helpnav:"参会ガイド",
        helpGuides:"参会ガイド",
        tkaddr:"グランドプリンスホテル新高輪",
        grchEntrance:"個人が出席",
        qychEntrance:"企業の参加",
        mediacover:"マスコミに覆われ",
        chqyfw:"参加企業",

        hotelab:"周辺のホテル",
        hoteltips:"こちらは、主催侧が推荐するホテルで、会议の中心から近くて、予定を担当しないようにしてください。予定通り、お気軽にお気軽にご连络下さい。ご理解をお愿いいたします。！注:宿泊の必要がある场合は、なるべく早くホテルの方に连络してください。お客様がご理想のホテルを予约できないようにしましょう。",
        hotelking01:"グランドプリンスホテル新高輪",
        hotelstar4:"4つ星级ホテル。",
        hotelstar3:"3つ星のホテル",
        hoteladdrtl:"住所",
        hoteladdrgphnt:"〒108-8612 東京都, 港区高輪3-13-1 ",
        hotelfwhome:"大会はホテルを開催する。",

        hotelstth01:"品川東武ホテル",
        hoteladdrsth:"〒108-0074 東京都, 港区高輪4-7-6 ",
        hotelsthdistance:"会场から0.3キロ、徒歩5分で会场。",

        hotelkeit02:"京急EXイン 高輪",
        hoteladdrkeit:"〒108-0074 東京都, 港区高輪 4-10-8",
        hotelkeitdistance:"会场から1キロ、徒歩5 ~ 10分で会场。",

        hotelex01:"京急EXイン品川駅前",
        hoteladdrex:"〒108-0074 東京都, ３－１３－３",
        hotelexdistance:"会场から1.5キロ、徒歩10分で会场。",
        sponsorshipct: "連絡先を助ける",

        citysh: "上海駅",
        citymacau: "マカオ駅",

          citymacau:"マカオ",
          citytokyo:"東京",
          citylsals:"ロサンゼルス",
          cityhongkong:"香港",
          citydubai:"ドバイ",
          cityBangkok:"バンコク",


          nameAVHspk:"CTOアラタ",
      }
    },
    dom: {
      domI18n: "dom-i18n"
    }
  };
  var ins = {
    init: function() {
      this.initDom();
      this.render();
      this.addListen();
    },
    initDom: function() {
      ins.utils.each(opts.dom, function(item, key) {
        var doms = opts.element.querySelectorAll("[" + item + "]");
        opts.dom[key] = doms;
      });
    },
    render: function() {
      ins.utils.each(opts.dom.domI18n, function(dom, index) {
        //获取当前dom的文字对应key
        var key = dom.getAttribute("dom-i18n");
        //获取当前语言
        var lang = opts.i18n[opts.lang],
          txt = lang[key];
        if (txt && txt.length > 0) {
          //渲染文字
          dom.innerText = txt;
        }
      });
    },
    setLang: function(v) {
      opts.lang = v;

      // 通过语言区分页面 begin
      //   $('body').addClass('zhlang');
        if(v == 'zh'){
            $('body').addClass('zhlang');
            $('body').removeClass('otherlang');
        }else {
            $('body').addClass('otherlang');
            $('body').removeClass('zhlang');
        }
        // 通过语言区分页面 end

    },


    addListen: function() {
      Object.defineProperty(opts, "lang", {
        get: function() {
          return lang;
        },
        set: function(v) {
          lang = v;
          ins.render();
          localStorage.tyLang = v;
        }
      });

    },
    utils: {
      each: function(obj, callback) {
        //针对ie8
        if (obj == "[object StaticNodeList]") {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
          }
          return;
        }
        //针对正常浏览器
        if (this.isArray(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
          }
        }
        if (this.isNodeList(obj)) {
          for (var i = 0; i < obj.length; i++) {
            callback(obj[i], i);
          }
        }
        if (this.isObject(obj)) {
          for (var key in obj) {
            callback(obj[key], key);
          }
        }
      },
      isString: function(obj) {
        return Object.prototype.toString.call(obj) == "[object String]";
      },
      isArray: function(obj) {
        return Object.prototype.toString.call(obj) == "[object Array]";
      },
      isNodeList: function(obj) {
        return Object.prototype.toString.call(obj) == "[object NodeList]";
      },
      isObject: function(obj) {
        return Object.prototype.toString.call(obj) == "[object Object]";
      },
      isNull: function(obj) {
        return Object.prototype.toString.call(obj) == "[object Null]";
      }
    }
  };

  ins.init();
  win.i18n = ins;

})(window);


// 通过语言区分页面 begin
// $('body').addClass('zhlang');
var tyLang = localStorage.tyLang;
if(tyLang == 'zh'){
    $('body').addClass('zhlang');
    $('body').removeClass('otherlang');
}else {
    $('body').addClass('otherlang');
    $('body').removeClass('zhlang');
}
// 通过语言区分页面 end