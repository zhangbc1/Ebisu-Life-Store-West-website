(function () {
    const I18N = {
        // ==========================================================
        // 中文配置 (CHINESE)
        // ==========================================================
        zh: {
            // ----- 全局导航 -----
            nav_home: "首页",
            nav_products: "产品一览",
            nav_stores: "门店地址",
            nav_social: "社交媒体",
            nav_contact: "加入我们",
            footer_copy: "© 2025 Ebisu Life Store West. 保留所有权利。",

            // ----- 1. 首页 (Index) -----
            hero_tag: "日本生活方式 · 线下集合店",
            hero_title_1: "WELCOME TO",
            hero_title_2: "一起把好玩的日本生活带进日常。",
            hero_subtitle: "我们专注日式生活方式与潮玩（手办、盲盒等）精选。\n选品以日本直采进口为核心，尤其是限定零食与独特新品，打造“精品、稀缺、好逛”的体验。",
            hero_btn_store: "查看门店地址",
            hero_btn_products: "看看我们都卖什么",
            hero_badge_1: "日系零食 & 饮料",
            hero_badge_2: "文具杂货 & 生活小物",
            hero_badge_3: "轻松好逛的线下空间",

            about_title_main: "ABOUT EBISU",
            about_card_1_title: "发展历程",
            about_card_1_text: "Ebisu Life Store 由热爱日本生活方式与零售行业的团队创立。随着年轻客群需求的增加，我们逐步完善供应链与选品体系。",
            about_card_2_title: "合作政策",
            about_card_2_text: "Ebisu 采用「直营门店 + 多元合作」模式。欢迎优质供应商与品牌方以长期合作、联名企划、活动共创等形式加入。",
            about_card_3_title: "品牌介绍",
            about_card_3_text: "专注「日本生活方式」。关键词：轻松、实用、好逛。我们希望顾客在日常生活中，随时可以找到一点小小的快乐与灵感。",

            inside_title: "WHAT'S INSIDE?",
            inside_subtitle: "这是 Ebisu 里 4 个主要的产品世界。",
            inside_cn_1: "潮流玩具",
            inside_desc_1: "从动漫角色到可爱动物，每一次拆盒都是心跳。",
            inside_cn_2: "流行药妆",
            inside_desc_2: "精选日本护肤与美妆好物，注重实用效果。",
            inside_cn_3: "生活好物",
            inside_desc_3: "文具、杂货、小摆件，好用又好看。",
            inside_cn_4: "零食饮料",
            inside_desc_4: "来自日本及亚洲的零食世界，从经典到限定。",
            inside_link: "了解更多品类 →",

            vibe_title_1: "CATCH THE",
            vibe_btn_ig: "Instagram",
            vibe_btn_tt: "TikTok",

            // ----- 2. 产品页 (Products) -----
            products_tag: "Products · 品类一览",
            products_hero_title_prefix: "Ebisu 的",
            products_hero_title_highlight: "Product World",
            products_hero_subtitle: "这里是 Ebisu 的主要品类介绍页。内容用于帮助你快速理解“我们卖什么”。",
            products_hero_btn_store: "查看门店地址",
            products_hero_btn_social: "去社交媒体看看",

            bb_sub: "潮玩盲盒 · IP 周边 · 收藏玩具",
            bb_chip_1: "潮流玩具",
            bb_chip_2: "手办",
            bb_chip_3: "毛绒",
            bb_chip_4: "扭蛋",
            bb_intro: "适合“来店里随手淘一个快乐”。设计感与收藏属性兼备。",
            bb_p1_title: "系列盲盒",
            bb_p1_desc: "季节限定 / 热门 IP / 主题系列。",
            bb_p2_title: "毛绒与小挂件",
            bb_p2_desc: "可爱、轻量、适合作为小礼物。",
            bb_p3_title: "手办 / 摆件",
            bb_p3_desc: "收藏向。",

            ac_sub: "娃娃机 · 扭蛋 · 一番赏 · 娱乐体验",
            ac_chip_1: "UFO 娃娃机",
            ac_chip_2: "扭蛋",
            ac_chip_3: "一番赏",
            ac_chip_4: "限定周边",
            ac_intro: "不仅仅是购物，更是娱乐。体验“抓取”的成就感，带走日本直输限定景品。",
            ac_p1_title: "娃娃机限定",
            ac_p1_desc: "日本直输景品公仔 / 限量手办。",
            ac_p2_title: "扭蛋天堂",
            ac_p2_desc: "数百款最新扭蛋，每周更新。",
            ac_p3_title: "一番赏 / 抽奖",
            ac_p3_desc: "以小博大的快乐，赢取最终赏。",

            jb_sub: "流行药妆 · 护肤 · 美妆",
            jb_chip_1: "护肤",
            jb_chip_2: "防晒",
            jb_chip_3: "面膜",
            jb_chip_4: "护理小物",
            jb_intro: "“好用、实用、回购”",
            jb_p1_title: "基础护肤",
            jb_p1_desc: "洁面、化妆水、乳液、精华等",
            jb_p2_title: "防晒与护理",
            jb_p2_desc: "日常必需品类。",
            jb_p3_title: "美妆工具",
            jb_p3_desc: "“礼盒搭配”",

            ls_sub: "文具 · 生活杂货 · 家居",
            ls_chip_1: "文具",
            ls_chip_2: "贴纸",
            ls_chip_3: "收纳",
            ls_chip_4: "礼品",
            ls_intro: "主题陈列（开学季 / 节日 / 旅行 / 手帐角等）。",
            ls_p1_title: "手帐与文具",
            ls_p1_desc: "笔、笔袋、手帐本、便签等",
            ls_p2_title: "贴纸与小周边",
            ls_p2_desc: "社媒内容展示。",
            ls_p3_title: "生活与收纳",
            ls_p3_desc: "小收纳、小工具、小家居",

            sn_sub: "零食 · 饮料 · 季节限定",
            sn_chip_1: "饼干糖果",
            sn_chip_2: "饮料",
            sn_chip_3: "限定款",
            sn_chip_4: "礼盒",
            sn_intro: "以“新鲜感”和“可分享”为核心。",
            sn_p1_title: "经典零食",
            sn_p1_desc: "饼干、巧克力、软糖等",
            sn_p2_title: "饮料与茶饮",
            sn_p2_desc: "汽水、果汁、茶饮与咖啡。",
            sn_p3_title: "季节限定 & 礼盒",
            sn_p3_desc: "期间限定与节日礼盒",

            products_more_title: "想了解更多？",
            products_more_text: "查看社交媒体获取上新资讯；品牌合作请前往合作页面。",
            products_more_btn_store: "查看门店地址",
            products_more_btn_social: "去社交媒体",
            products_more_btn_partner: "品牌合作 / 招商",

            // ----- 3. 门店页 (Stores) [🔥重点更新] -----
            stores_tag: "Stores · 门店信息",
            stores_title: "门店地址",
            stores_subtitle: "在这里你可以快速找到 Ebisu 的门店位置、营业时间与到店方式。",
            
            // 列表部分
            tag_cs: "筹备中",
            lbl_addr: "地址",
            lbl_hours: "营业时间",
            btn_maps: "Google Maps 导航",
            common_hours: "周一至周日: 10:00 AM – 9:00 PM",

            // 地区标签
            reg_il: "伊利诺伊州",
            reg_la: "洛杉矶县",
            reg_oc: "橙县",
            reg_ie: "内陆帝国",
            reg_sd: "圣地亚哥",
            reg_bay: "湾区",

            // 门店具体信息 (1-8)
            st_1_name: "Schaumburg · Woodfield 店",
            st_1_addr: "5 Woodfield Mall #F117, Schaumburg, IL 60173",
            
            st_2_name: "Alhambra · Main St 店",
            st_2_addr: "300 W Main St, Alhambra, CA 91801",

            st_3_name: "Anaheim · Euclid St 店",
            st_3_addr: "410 N Euclid St, Anaheim, CA 92703",

            st_4_name: "Rancho Cucamonga 店",
            st_4_addr: "11098 Foothill Blvd, STE 110, Rancho Cucamonga, CA 91730",

            st_5_name: "Irvine · Walnut Ave 店",
            st_5_addr: "5404 Walnut Ave #E, Irvine, CA",

            st_6_name: "San Diego · La Jolla 店",
            st_6_addr: "8657 Villa La Jolla Dr, La Jolla, CA 92037",

            st_7_name: "San Diego · Clairemont 店",
            st_7_addr: "8334 Clairemont Mesa Blvd, San Diego, CA 92111",

            st_8_name: "San Jose · Saratoga Ave 店",
            st_8_addr: "1600 Saratoga Avenue, San Jose, CA 95129",

            // ----- 4. 社交与合作 -----
            social_title: "关注 Ebisu Life Store",
            social_subtitle: "获取门店上新与活动的一手资讯。",
            social_tab_1: "Alhambra",
            social_tab_1_sub: "总店",
            social_tab_2: "Anaheim",
            social_tab_2_sub: "分店",
            social_desc_1: "关注 Alhambra 店，获取最新到货与活动信息。",
            social_desc_2: "关注 Anaheim 店，获取最新到货与活动信息。",
            social_gallery_title: "门店活动回顾",
            social_gallery_subtitle: "更多内容可在 Instagram / TikTok 查看。",

            partner_tag: "Join Us · 招商与招聘",
            partner_hero_title: "Ebisu Life Store West",
            partner_hero_subtitle: "Ebisu Life Store West 是加州、亚利桑那州和德克萨斯州的独家运营商。",
            partner_pill_1: "西部独家运营",
            partner_pill_2: "CA · AZ · TX",
            partner_pill_3: "门店运营",
            partner_pill_4: "商务合作",
            partner_corp_statement: "Ebisu West Holding, Inc. 是 Ebisu 品牌在美国西岸地区的独家运营与管理公司。",
            partner_biz_title: "商务合作",
            partner_biz_step_1: "阅读合作手册 PDF",
            partner_biz_step_2: "了解合作架构与要求",
            partner_biz_step_3: "填写申请表 / 准备资料",
            partner_biz_step_4: "邮件提交完整材料以供审核",
            partner_btn_pdf: "下载合作手册 PDF",
            partner_btn_email: "邮件联系商务团队",
            partner_careers_title: "人才招聘",
            partner_careers_sub: "我们在加州、亚利桑那州和德克萨斯州招聘门店及区域管理岗位。",
            partner_btn_resume: "投递简历",
            partner_btn_view_stores: "查看门店"
        },

        // ==========================================================
        // 英文配置 (ENGLISH)
        // ==========================================================
        en: {
            nav_home: "HOME",
            nav_products: "OUR PRODUCT",
            nav_stores: "FIND A STORE",
            nav_social: "SOCIAL MEDIA",
            nav_contact: "JOIN US",
            footer_copy: "© 2025 Ebisu Life Store West. All rights reserved.",

            hero_tag: "Japanese Lifestyle · Offline Select Store",
            hero_title_1: "WELCOME TO",
            hero_title_2: "Bring fun Japanese lifestyle into everyday life.",
            hero_subtitle: "We curate Japanese lifestyle essentials and designer toys (figures, blind boxes, and more).\nWith a strong focus on direct imports from Japan—especially limited snacks and exclusive finds.",
            hero_btn_store: "Find a Store",
            hero_btn_products: "Explore Products",
            hero_badge_1: "Japanese Snacks & Drinks",
            hero_badge_2: "Stationery & Lifestyle Goods",
            hero_badge_3: "A Cozy Offline Experience",

            about_title_main: "ABOUT EBISU",
            about_card_1_title: "OUR HISTORY",
            about_card_1_text: "Ebisu Life Store was founded by a team passionate about Japanese lifestyle and retail. As demand grew, we improved our supply chain to serve local shoppers better.",
            about_card_2_title: "PARTNERSHIP",
            about_card_2_text: "Ebisu operates with a 'direct-store + multi-partnership' model. We welcome quality suppliers and brands to collaborate through long-term partnerships.",
            about_card_3_title: "BRAND PHILOSOPHY",
            about_card_3_text: "Focus on 'Japanese Lifestyle'. Keywords: Relaxed, Practical, Fun. We hope customers find a small moment of joy and inspiration here.",

            inside_title: "WHAT'S INSIDE?",
            inside_subtitle: "These are the 4 main product worlds inside Ebisu.",
            inside_cn_1: "Art Toy",
            inside_desc_1: "From anime characters to cute creatures—every unboxing is a thrill.",
            inside_cn_2: "J-Beauty",
            inside_desc_2: "Curated Japanese skincare and beauty essentials.",
            inside_cn_3: "Lifestyle",
            inside_desc_3: "Stationery, small goods, and decor—practical and cute.",
            inside_cn_4: "Snacks & Drinks",
            inside_desc_4: "A snack universe from Japan and Asia.",
            inside_link: "Explore categories →",

            vibe_title_1: "CATCH THE",
            vibe_btn_ig: "Instagram",
            vibe_btn_tt: "TikTok",

            products_tag: "Products",
            products_hero_title_prefix: "Ebisu",
            products_hero_title_highlight: "Product World",
            products_hero_subtitle: "This page highlights Ebisu’s core categories. We continuously refresh our assortment based on seasons, trends, and customer feedback.",
            products_hero_btn_store: "Find a Store",
            products_hero_btn_social: "See Our Social Media",

            bb_sub: "Blind Boxes · IP Merch · Collectibles",
            bb_chip_1: "Art Toy",
            bb_chip_2: "Figures",
            bb_chip_3: "Plush",
            bb_chip_4: "Gachapon",
            bb_intro: "Perfect for a quick “grab a little joy” moment in-store.",
            bb_p1_title: "Series Blind Boxes",
            bb_p1_desc: "Seasonal / Popular IP / Themed series.",
            bb_p2_title: "Plush & Keychains",
            bb_p2_desc: "Cute, lightweight, and gift-friendly.",
            bb_p3_title: "Figures",
            bb_p3_desc: "Collectible-oriented.",

            ac_sub: "Claw Machines · Gachapon · Fun",
            ac_chip_1: "UFO Catcher",
            ac_chip_2: "Gachapon",
            ac_chip_3: "Ichiban Kuji",
            ac_chip_4: "Exclusives",
            ac_intro: "More than just shopping—it's entertainment. Authentic Japanese claw machines and gachapon.",
            ac_p1_title: "Claw Machine Prizes",
            ac_p1_desc: "Japan-imported plushies & figures.",
            ac_p2_title: "Gachapon Heaven",
            ac_p2_desc: "Hundreds of machines, updated weekly.",
            ac_p3_title: "Ichiban Kuji",
            ac_p3_desc: "Try your luck for the Last One prize.",

            jb_sub: "Drugstore Beauty · Skincare",
            jb_chip_1: "Skincare",
            jb_chip_2: "Suncare",
            jb_chip_3: "Masks",
            jb_chip_4: "Tools",
            jb_intro: "Reliable, practical, and repurchase-worthy.",
            jb_p1_title: "Skincare Basics",
            jb_p1_desc: "Cleansers, toners, lotions, serums.",
            jb_p2_title: "Suncare",
            jb_p2_desc: "Everyday essentials.",
            jb_p3_title: "Beauty Tools",
            jb_p3_desc: "Great for gift sets.",

            ls_sub: "Stationery · Lifestyle · Home",
            ls_chip_1: "Stationery",
            ls_chip_2: "Stickers",
            ls_chip_3: "Storage",
            ls_chip_4: "Gifts",
            ls_intro: "Themed displays (Back-to-school / Holidays).",
            ls_p1_title: "Journals & Stationery",
            ls_p1_desc: "Pens, pouches, notebooks.",
            ls_p2_title: "Stickers",
            ls_p2_desc: "Perfect for decorating.",
            ls_p3_title: "Home & Storage",
            ls_p3_desc: "Smart organizers and daily tools.",

            sn_sub: "Snacks · Drinks · Seasonal",
            sn_chip_1: "Sweets",
            sn_chip_2: "Beverages",
            sn_chip_3: "Limited",
            sn_chip_4: "Gifts",
            sn_intro: "Freshness and shareability: classics and limited editions.",
            sn_p1_title: "Classic Snacks",
            sn_p1_desc: "Cookies, chocolate, gummies.",
            sn_p2_title: "Drinks & Tea",
            sn_p2_desc: "Soda, juice, tea, coffee.",
            sn_p3_title: "Seasonal & Gifts",
            sn_p3_desc: "Limited editions and holiday sets.",

            products_more_title: "Want to learn more?",
            products_more_text: "For new arrivals, check our social media. For partnerships, please visit the contact page.",
            products_more_btn_store: "Find a Store",
            products_more_btn_social: "Social Media",
            products_more_btn_partner: "Partnership / Contact",

            // ----- Stores (English Values matching HTML) -----
            stores_tag: "Locations · Store List",
            stores_title: "Store Locations",
            stores_subtitle: "Visit our locations across California and Illinois.",
            
            tag_cs: "COMING SOON",
            lbl_addr: "Address",
            lbl_hours: "Hours",
            btn_maps: "Google Maps",
            common_hours: "Mon – Sun: 10:00 AM – 9:00 PM",

            reg_il: "IL",
            reg_la: "LA County",
            reg_oc: "OC",
            reg_ie: "Inland Empire",
            reg_sd: "SD",
            reg_bay: "Bay Area",

            st_1_name: "Schaumburg · Woodfield",
            st_1_addr: "5 Woodfield Mall #F117, Schaumburg, IL 60173",
            
            st_2_name: "Alhambra · Main St",
            st_2_addr: "300 W Main St, Alhambra, CA 91801",

            st_3_name: "Anaheim · Euclid St",
            st_3_addr: "410 N Euclid St, Anaheim, CA 92703",

            st_4_name: "Rancho Cucamonga",
            st_4_addr: "11098 Foothill Blvd, STE 110, Rancho Cucamonga, CA 91730",

            st_5_name: "Irvine · Walnut Ave",
            st_5_addr: "5404 Walnut Ave #E, Irvine, CA",

            st_6_name: "San Diego · La Jolla",
            st_6_addr: "8657 Villa La Jolla Dr, La Jolla, CA 92037",

            st_7_name: "San Diego · Clairemont",
            st_7_addr: "8334 Clairemont Mesa Blvd, San Diego, CA 92111",

            st_8_name: "San Jose · Saratoga Ave",
            st_8_addr: "1600 Saratoga Avenue, San Jose, CA 95129",

            social_title: "Follow Our Stores",
            social_subtitle: "Get the latest updates on new arrivals and events.",
            social_tab_1: "Alhambra",
            social_tab_1_sub: "Store",
            social_tab_2: "Anaheim",
            social_tab_2_sub: "Store",
            social_desc_1: "Follow Alhambra Store for new arrivals & events.",
            social_desc_2: "Follow Anaheim Store for new arrivals & events.",
            social_gallery_title: "In-store Highlights",
            social_gallery_subtitle: "See more on Instagram / TikTok.",

            partner_tag: "Join Us · Partnership & Careers",
            partner_hero_title: "Ebisu Life Store West",
            partner_hero_subtitle: "Ebisu Life Store West is the exclusive operator for California, Arizona, and Texas.",
            partner_pill_1: "Exclusive West Region Operator",
            partner_pill_2: "CA · AZ · TX",
            partner_pill_3: "Store Operations",
            partner_pill_4: "Business Partnership",
            partner_corp_statement: "Ebisu West Holding, Inc. is the exclusive operator of the Ebisu brand in the U.S. West Coast.",
            partner_biz_title: "Business Partnership",
            partner_biz_step_1: "Review Partnership PDF",
            partner_biz_step_2: "Understand cooperation structure",
            partner_biz_step_3: "Complete application form",
            partner_biz_step_4: "Email materials for review",
            partner_btn_pdf: "Download Partnership PDF",
            partner_btn_email: "Email Business Team",
            partner_careers_title: "Careers",
            partner_careers_sub: "We are hiring store-level and regional roles across California, Arizona, and Texas.",
            partner_btn_resume: "Submit Resume",
            partner_btn_view_stores: "View Stores"
        }
    };

    const getDefaultLang = () => {
        // 1. 如果本地存了语言，优先使用
        const saved = localStorage.getItem("ebisu_lang");
        if (saved === "zh" || saved === "en") return saved;
        
        // 2. 如果没存，默认优先使用英文 (en)，除非浏览器强行是中文
        // (您希望面向英文用户，所以这里即使浏览器是中文，也可以考虑默认 en，看您需求)
        // 这里保持逻辑：如果浏览器是中文 -> 中文，否则 -> 英文
        const nav = (navigator.language || "").toLowerCase();
        return nav.startsWith("zh") ? "zh" : "en";
    };

    const setLang = (lang) => {
        if (!I18N[lang]) return;
        localStorage.setItem("ebisu_lang", lang);
        document.documentElement.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");

        const nodes = document.querySelectorAll("[data-i18n]");
        nodes.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const val = I18N[lang][key];
            if (val == null) return;
            
            if (el.getAttribute("data-i18n-attr")) {
                el.setAttribute(el.getAttribute("data-i18n-attr"), val);
            } else if (el.getAttribute("data-i18n-html") === "true") {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        });

        const btn = document.querySelector("[data-lang-toggle]");
        if (btn) btn.textContent = lang === "zh" ? "EN" : "中文";

        document.dispatchEvent(new CustomEvent("lang-change", { detail: { lang } }));
    };

    const toggleLang = () => {
        const cur = localStorage.getItem("ebisu_lang") || getDefaultLang();
        setLang(cur === "zh" ? "en" : "zh");
    };

    window.getI18nText = (key) => {
        const lang = localStorage.getItem("ebisu_lang") || getDefaultLang();
        return I18N[lang][key] || "";
    };

    // 暴露给全局，方便 HTML onclick 调用
    window.toggleLanguage = toggleLang;

    document.addEventListener("DOMContentLoaded", () => {
        // 绑定所有带 data-lang-toggle 的按钮
        const btns = document.querySelectorAll("[data-lang-toggle]");
        btns.forEach(btn => btn.addEventListener("click", toggleLang));
        
        setLang(getDefaultLang());
    });
})();
