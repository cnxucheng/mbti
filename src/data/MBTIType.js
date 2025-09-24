const MBTITypeArray = [
    {
        "type": "INTJ",
        "nickname": "战略家",
        "description": "独立、理性，擅长制定长远计划与战略。",
        "strengths": ["逻辑性强", "有远见", "高效率", "果断"],
        "weaknesses": ["过于挑剔", "情感表达困难", "容易孤立"],
        "famous_examples": ["埃隆·马斯克", "甘道夫"]
    },
    {
        "type": "INTP",
        "nickname": "哲学家",
        "description": "热衷探索理论和理念，追求知识与逻辑真理。",
        "strengths": ["创造性思维", "好奇心强", "逻辑分析能力强"],
        "weaknesses": ["缺乏执行力", "拖延", "容易脱离现实"],
        "famous_examples": ["阿尔伯特·爱因斯坦", "新兰的工藤新一"]
    },
    {
        "type": "ENTJ",
        "nickname": "指挥官",
        "description": "天生的领导者，善于组织和管理资源。",
        "strengths": ["领导力强", "高效执行", "自信果断"],
        "weaknesses": ["不耐烦", "过于控制", "忽视他人情感"],
        "famous_examples": ["史蒂夫·乔布斯", "米兰达·普利斯特"]
    },
    {
        "type": "ENTP",
        "nickname": "辩论家",
        "description": "思维敏捷，充满创意，喜欢挑战与辩论。",
        "strengths": ["反应快", "善于说服", "创新能力强"],
        "weaknesses": ["不专注", "容易好高骛远", "喜欢争辩"],
        "famous_examples": ["托尼·斯塔克", "小罗伯特·唐尼"]
    },
    {
        "type": "INFJ",
        "nickname": "提倡者",
        "description": "理想主义，关怀他人，常为使命感驱动。",
        "strengths": ["有洞察力", "富有同理心", "责任感强"],
        "weaknesses": ["过于理想化", "容易受伤", "追求完美"],
        "famous_examples": ["甘地", "伊丽莎白女王一世"]
    },
    {
        "type": "INFP",
        "nickname": "调停者",
        "description": "内心充满善意与创造力，注重个人价值。",
        "strengths": ["理想主义", "艺术气质", "忠于自我"],
        "weaknesses": ["逃避冲突", "优柔寡断", "容易迷失"],
        "famous_examples": ["J.R.R.托尔金", "哈利·波特"]
    },
    {
        "type": "ENFJ",
        "nickname": "主人公",
        "description": "有魅力的领导者，善于激励和团结他人。",
        "strengths": ["沟通能力强", "富有魅力", "有组织力"],
        "weaknesses": ["过度付出", "忽视自我需求", "过于理想主义"],
        "famous_examples": ["奥普拉", "莫菲斯"]
    },
    {
        "type": "ENFP",
        "nickname": "竞选者",
        "description": "热情奔放，富有感染力，充满好奇心与创造力。",
        "strengths": ["活力无限", "善于鼓励他人", "适应力强"],
        "weaknesses": ["不专注", "情绪化", "缺乏规划"],
        "famous_examples": ["罗宾·威廉姆斯", "蜘蛛侠"]
    },
    {
        "type": "ISTJ",
        "nickname": "物流师",
        "description": "严谨、可靠，注重规则和秩序。",
        "strengths": ["责任心强", "踏实可靠", "执行力强"],
        "weaknesses": ["固执", "缺乏灵活性", "情感表达弱"],
        "famous_examples": ["乔治·华盛顿", "赫敏·格兰杰"]
    },
    {
        "type": "ISFJ",
        "nickname": "守护者",
        "description": "体贴入微，关注他人，追求和谐与安全。",
        "strengths": ["关怀他人", "忠诚", "耐心细致"],
        "weaknesses": ["自我忽视", "害怕冲突", "容易过度劳累"],
        "famous_examples": ["伊丽莎白二世", "山姆·詹吉"]
    },
    {
        "type": "ESTJ",
        "nickname": "管理者",
        "description": "务实可靠，喜欢制定规则和组织团队。",
        "strengths": ["领导力强", "踏实可靠", "高度责任感"],
        "weaknesses": ["固执", "不够灵活", "过于控制"],
        "famous_examples": ["米歇尔·奥巴马", "达斯·维德"]
    },
    {
        "type": "ESFJ",
        "nickname": "执政官",
        "description": "社交能力强，乐于帮助他人，维系团队和谐。",
        "strengths": ["热情", "社交能力强", "忠诚"],
        "weaknesses": ["过度依赖他人评价", "害怕冲突", "过于敏感"],
        "famous_examples": ["泰勒·斯威夫特", "莫莉·韦斯莱"]
    },
    {
        "type": "ISTP",
        "nickname": "鉴赏家",
        "description": "动手能力强，喜欢探索事物的运作方式。",
        "strengths": ["冷静", "适应力强", "实践能力强"],
        "weaknesses": ["冲动", "情感表达差", "不喜欢规则"],
        "famous_examples": ["印第安纳·琼斯", "艾莉亚·史塔克"]
    },
    {
        "type": "ISFP",
        "nickname": "探险家",
        "description": "富有艺术感，注重体验当下与自由。",
        "strengths": ["艺术性强", "温和", "感性丰富"],
        "weaknesses": ["容易逃避", "优柔寡断", "抗压能力弱"],
        "famous_examples": ["迈克尔·杰克逊", "比尔博·巴金斯"]
    },
    {
        "type": "ESTP",
        "nickname": "企业家",
        "description": "勇敢直接，喜欢冒险，充满活力与行动力。",
        "strengths": ["果断", "冒险精神", "适应力强"],
        "weaknesses": ["冲动", "缺乏耐心", "不重视长期规划"],
        "famous_examples": ["欧内斯特·海明威", "詹姆斯·邦德"]
    },
    {
        "type": "ESFP",
        "nickname": "表演者",
        "description": "乐观外向，享受生活，喜欢成为人群焦点。",
        "strengths": ["热情", "善于社交", "适应力强"],
        "weaknesses": ["容易分心", "不够规划", "害怕孤独"],
        "famous_examples": ["玛丽莲·梦露", "菲尼克斯·奥尔德"]
    }
];

export { MBTITypeArray };