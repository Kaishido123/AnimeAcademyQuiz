/* ===========================================
   Anime Academy Quiz
   Question Bank
=========================================== */

const QUESTION_BANK = {

    Math: [

        {
            question: "12 × 8 は？",
            choices: ["86", "96", "88", "108"],
            answer: 1
        },

        {
            question: "15% の 200 は？",
            choices: ["20", "25", "30", "35"],
            answer: 2
        },

        {
            question: "3x + 5 = 20 のとき、x は？",
            choices: ["3", "5", "7", "10"],
            answer: 1
        },

        {
            question: "144 の平方根は？",
            choices: ["10", "11", "12", "13"],
            answer: 2
        },

        {
            question: "6cm × 9cm の長方形の面積は？",
            choices: ["45cm²", "54cm²", "60cm²", "36cm²"],
            answer: 1
        },

        {
            question: "素数はどれ？",
            choices: ["21", "27", "29", "33"],
            answer: 2
        },

        {
            question: "100 ÷ 4 + 6 = ?",
            choices: ["25", "29", "31", "106"],
            answer: 2
        },

        {
            question: "0.75 と等しい分数は？",
            choices: ["1/2", "2/3", "3/4", "4/5"],
            answer: 2
        },

        {
            question: "45° と 65° の三角形の残りの角度は？",
            choices: ["60°", "70°", "80°", "90°"],
            answer: 1
        },

        {
            question: "7² − 5² = ?",
            choices: ["12", "24", "36", "49"],
            answer: 1
        },

        {
            question: "円周率（π）の近似値は？",
            choices: ["3.14", "3.41", "3.04", "3.24"],
            answer: 0
        },

        {
            question: "2 + 5 × 3 = ?",
            choices: ["21", "17", "15", "9"],
            answer: 1
        },

        {
            question: "50 の20%は？",
            choices: ["5", "10", "15", "20"],
            answer: 1
        },

        {
            question: "9² は？",
            choices: ["18", "72", "81", "99"],
            answer: 2
        },

        {
            question: "1km は何m？",
            choices: ["10", "100", "1000", "10000"],
            answer: 2
        },

        {
            question: "5 + 7 × 2 = ?",
            choices: ["19", "24", "17", "14"],
            answer: 0
        },

        {
            question: "偶数はどれ？",
            choices: ["15", "21", "26", "33"],
            answer: 2
        },

        {
            question: "3/5 を小数で表すと？",
            choices: ["0.3", "0.5", "0.6", "0.8"],
            answer: 2
        },

        {
            question: "8 × 7 = ?",
            choices: ["54", "56", "58", "64"],
            answer: 1
        },

        {
            question: "180° の半分は？",
            choices: ["45°", "60°", "90°", "120°"],
            answer: 2
        }

    ],
        Science: [

        {
            question: "赤い惑星と呼ばれる惑星は？",
            choices: ["金星", "火星", "木星", "水星"],
            answer: 1
        },

        {
            question: "植物が光合成で吸収する気体は？",
            choices: ["酸素", "窒素", "二酸化炭素", "水素"],
            answer: 2
        },

        {
            question: "H₂Oは何を表す？",
            choices: ["酸素", "水", "水素", "塩"],
            answer: 1
        },

        {
            question: "光合成を主に行う植物の部分は？",
            choices: ["根", "茎", "葉", "花"],
            answer: 2
        },

        {
            question: "物体を地球に引き寄せる力は？",
            choices: ["摩擦力", "重力", "磁力", "電気"],
            answer: 1
        },

        {
            question: "血液を全身に送る臓器は？",
            choices: ["肺", "脳", "心臓", "肝臓"],
            answer: 2
        },

        {
            question: "水は標準気圧で何℃で沸騰する？",
            choices: ["0℃", "50℃", "100℃", "150℃"],
            answer: 2
        },

        {
            question: "人体で最も大きい器官は？",
            choices: ["皮膚", "肝臓", "肺", "心臓"],
            answer: 0
        },

        {
            question: "再生可能エネルギーはどれ？",
            choices: ["石油", "石炭", "太陽光", "天然ガス"],
            answer: 2
        },

        {
            question: "原子の中心部分を何という？",
            choices: ["電子", "中性子", "原子核", "分子"],
            answer: 2
        },

        {
            question: "音が最も速く伝わるのは？",
            choices: ["気体", "液体", "固体", "真空"],
            answer: 2
        },

        {
            question: "日光を浴びることで体内で作られるビタミンは？",
            choices: ["ビタミンA", "ビタミンB", "ビタミンC", "ビタミンD"],
            answer: 3
        },

        {
            question: "人間は何本の永久歯を持つ？",
            choices: ["28本", "30本", "32本", "36本"],
            answer: 2
        },

        {
            question: "空気中で最も多い気体は？",
            choices: ["酸素", "窒素", "二酸化炭素", "アルゴン"],
            answer: 1
        },

        {
            question: "月は地球の何？",
            choices: ["恒星", "衛星", "惑星", "彗星"],
            answer: 1
        },

        {
            question: "人間が呼吸で吸う気体は？",
            choices: ["二酸化炭素", "酸素", "窒素", "水素"],
            answer: 1
        },

        {
            question: "磁石に引き寄せられる金属は？",
            choices: ["アルミニウム", "鉄", "銅", "金"],
            answer: 1
        },

        {
            question: "植物が水を吸収する部分は？",
            choices: ["葉", "花", "根", "茎"],
            answer: 2
        },

        {
            question: "地球は太陽系で太陽から何番目？",
            choices: ["2番目", "3番目", "4番目", "5番目"],
            answer: 1
        },

        {
            question: "人間の骨は約何本ある？",
            choices: ["106本", "206本", "306本", "406本"],
            answer: 1
        }

    ],

        English: [

        {
            question: "「happy」の意味として正しいものは？",
            choices: ["悲しい", "嬉しい", "怒っている", "眠い"],
            answer: 1
        },

        {
            question: "「go」の過去形は？",
            choices: ["goed", "gone", "went", "going"],
            answer: 2
        },

        {
            question: "「apple」の意味は？",
            choices: ["ぶどう", "りんご", "みかん", "なし"],
            answer: 1
        },

        {
            question: "『私はサッカーが好きです。』を英語で表すと？",
            choices: [
                "I like soccer.",
                "I likes soccer.",
                "Me like soccer.",
                "I am like soccer."
            ],
            answer: 0
        },

        {
            question: "「beautiful」の意味は？",
            choices: ["速い", "美しい", "難しい", "静かな"],
            answer: 1
        },

        {
            question: "「child」の複数形は？",
            choices: [
                "childs",
                "childes",
                "children",
                "childrens"
            ],
            answer: 2
        },

        {
            question: "疑問文の最後につける記号は？",
            choices: [
                "。",
                "!",
                "?",
                ","
            ],
            answer: 2
        },

        {
            question: "「blue」の意味は？",
            choices: [
                "赤",
                "青",
                "黄",
                "白"
            ],
            answer: 1
        },

        {
            question: "『私は学生です。』を英語で表すと？",
            choices: [
                "I student.",
                "I am student.",
                "I am a student.",
                "Me am student."
            ],
            answer: 2
        },

        {
            question: "「dog」の意味は？",
            choices: [
                "猫",
                "犬",
                "鳥",
                "魚"
            ],
            answer: 1
        },

        {
            question: "「Sunday」の意味は？",
            choices: [
                "月曜日",
                "金曜日",
                "日曜日",
                "土曜日"
            ],
            answer: 2
        },

        {
            question: "「book」の意味は？",
            choices: [
                "本",
                "机",
                "学校",
                "鉛筆"
            ],
            answer: 0
        },

        {
            question: "「small」の反対語は？",
            choices: [
                "little",
                "big",
                "short",
                "low"
            ],
            answer: 1
        },

        {
            question: "『彼は野球をします。』を英語で表すと？",
            choices: [
                "He play baseball.",
                "He plays baseball.",
                "He playing baseball.",
                "He is play baseball."
            ],
            answer: 1
        },

        {
            question: "「school」の意味は？",
            choices: [
                "病院",
                "学校",
                "駅",
                "図書館"
            ],
            answer: 1
        },

        {
            question: "「water」の意味は？",
            choices: [
                "牛乳",
                "水",
                "ジュース",
                "お茶"
            ],
            answer: 1
        },

        {
            question: "「friend」の意味は？",
            choices: [
                "先生",
                "家族",
                "友達",
                "兄弟"
            ],
            answer: 2
        },

        {
            question: "『ありがとう』を英語で言うと？",
            choices: [
                "Sorry",
                "Hello",
                "Thank you",
                "Goodbye"
            ],
            answer: 2
        },

        {
            question: "「morning」の意味は？",
            choices: [
                "朝",
                "昼",
                "夕方",
                "夜"
            ],
            answer: 0
        },

        {
            question: "「cat」の意味は？",
            choices: [
                "犬",
                "猫",
                "鳥",
                "馬"
            ],
            answer: 1
        }

    ],
        History: [

        {
            question: "日本で江戸幕府を開いた人物は？",
            choices: [
                "織田信長",
                "豊臣秀吉",
                "徳川家康",
                "坂本龍馬"
            ],
            answer: 2
        },

        {
            question: "日本の初代内閣総理大臣は？",
            choices: [
                "伊藤博文",
                "大久保利通",
                "西郷隆盛",
                "板垣退助"
            ],
            answer: 0
        },

        {
            question: "ピラミッドを建設した文明は？",
            choices: [
                "ローマ文明",
                "古代エジプト文明",
                "ギリシャ文明",
                "マヤ文明"
            ],
            answer: 1
        },

        {
            question: "世界で最初のオリンピックが行われた国は？",
            choices: [
                "イタリア",
                "ギリシャ",
                "フランス",
                "イギリス"
            ],
            answer: 1
        },

        {
            question: "明治維新が始まった年は？",
            choices: [
                "1603年",
                "1776年",
                "1868年",
                "1945年"
            ],
            answer: 2
        },

        {
            question: "アメリカ合衆国の初代大統領は？",
            choices: [
                "リンカーン",
                "ワシントン",
                "ジェファーソン",
                "ルーズベルト"
            ],
            answer: 1
        },

        {
            question: "万里の長城がある国は？",
            choices: [
                "韓国",
                "中国",
                "日本",
                "モンゴル"
            ],
            answer: 1
        },

        {
            question: "ルネサンスが始まった国は？",
            choices: [
                "フランス",
                "ドイツ",
                "イタリア",
                "スペイン"
            ],
            answer: 2
        },

        {
            question: "フランス革命が始まった年は？",
            choices: [
                "1492年",
                "1600年",
                "1789年",
                "1914年"
            ],
            answer: 2
        },

        {
            question: "日本の戦国時代に活躍した武将は？",
            choices: [
                "徳川吉宗",
                "織田信長",
                "聖徳太子",
                "源頼朝"
            ],
            answer: 1
        },

        {
            question: "鎌倉幕府を開いた人物は？",
            choices: [
                "源頼朝",
                "徳川家康",
                "足利尊氏",
                "平清盛"
            ],
            answer: 0
        },

        {
            question: "日本の現在の元号は？",
            choices: [
                "平成",
                "昭和",
                "令和",
                "大正"
            ],
            answer: 2
        },

        {
            question: "聖徳太子が制定したものは？",
            choices: [
                "五箇条の御誓文",
                "十七条の憲法",
                "大日本帝国憲法",
                "日本国憲法"
            ],
            answer: 1
        },

        {
            question: "日本国憲法が施行された年は？",
            choices: [
                "1945年",
                "1946年",
                "1947年",
                "1950年"
            ],
            answer: 2
        },

        {
            question: "第二次世界大戦が終わった年は？",
            choices: [
                "1939年",
                "1941年",
                "1945年",
                "1952年"
            ],
            answer: 2
        },

        {
            question: "大化の改新が行われた年は？",
            choices: [
                "645年",
                "710年",
                "794年",
                "1192年"
            ],
            answer: 0
        },

        {
            question: "平安京に都が移された年は？",
            choices: [
                "645年",
                "710年",
                "794年",
                "1192年"
            ],
            answer: 2
        },

        {
            question: "コロンブスが到達した大陸は？",
            choices: [
                "アジア",
                "ヨーロッパ",
                "アメリカ大陸",
                "アフリカ"
            ],
            answer: 2
        },

        {
            question: "ローマ帝国で有名な皇帝は？",
            choices: [
                "ナポレオン",
                "ユリウス・カエサル",
                "リンカーン",
                "ニュートン"
            ],
            answer: 1
        },

        {
            question: "江戸時代は約何年間続いた？",
            choices: [
                "約100年",
                "約150年",
                "約260年",
                "約400年"
            ],
            answer: 2
        }

    ]

};
