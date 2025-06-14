
// let startTime = new Date().getTime();
// let totalElapsedTime = 0;
// const token=localStorage.getItem('token');
// // 设置定时器，每隔一定时间发送请求记录用户浏览时长
// const timer = setInterval(function () {
//     // 计算当前累计的浏览时长
//     const currentTime = new Date().getTime();
//     const elapsedTime = Math.round((currentTime - startTime) / 1000);

//     // 发送记录请求
//     axios({
//         url: 'http://49.234.190.148:8888/course/record_courseView/',
//         headers: { 'token': `${token}` },
//         method: 'POST',
//         data: {
//             exam_id: 1,
//             view_time: elapsedTime,
//         }
//     }).then(function (response) {
//             console.log('成功记录浏览时长:', response.data);
//         })
//         .catch(function (error) {
//             console.error('记录浏览时长出错:', error);
//         });

//     // 更新累计的浏览时长
//     totalElapsedTime += elapsedTime;
// }, 5000); // 每隔5秒发送一次记录请求

// // 当页面即将关闭时清除定时器并发送最后一次记录请求
// window.onbeforeunload = function () {
//     clearInterval(timer); // 清除定时器
//     const endTime = new Date().getTime();
//     const elapsedTime = Math.round((endTime - startTime) / 1000);
//     totalElapsedTime += elapsedTime;

//     // 发送最后一次记录请求
//     axios({
//         url: 'http://49.234.190.148:8888/course/record_courseView/',
//         headers: { 'token': `${token}` },
//         method: 'POST',
//         data: {
//             exam_id: 1,
//             view_time: elapsedTime,
//         }
//     }).then(function (response) {
//             console.log('成功记录最终浏览时长:', response.data);
//         })
//         .catch(function (error) {
//             console.error('记录最终浏览时长出错:', error);
//         });
// };
var data = {
    "title": "2019普通试验班混合式考试线上部分",
    "exam": [
        {
            "title": "单项选择题",
            "infos": null,
            "values": [
                {
                    "type": 1,
                    "questionStem": "儒家最核心的概念是（   ）",
                    "options": [
                        "道",
                        "德",
                        "仁",
                        "义"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "六经之首是_________。",
                    "options": [
                        "《论语》",
                        "《大学》",
                        "《礼记》",
                        "《周易》"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "我国第一部纪传体通史是________。",
                    "options": [
                        "《史记》",
                        "《汉书》",
                        "《左传》",
                        "《春秋》"
                    ],
                    "answer": [
                        "A"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "王国维的观点：“词以______为上”——《人间词话》",
                    "options": [
                        "辞藻",
                        "情致 ",
                        "境界",
                        "趣味"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "被闻一多先生誉为“诗中的诗，顶峰中的顶峰”的诗篇是________",
                    "options": [
                        "《春江花月夜》",
                        "《茅屋为秋风所破歌》",
                        "《将进酒》",
                        "《古剑篇》"
                    ],
                    "answer": [
                        "A"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "《蜀相》是杜甫歌颂他的偶像________的诗篇。杜甫一生的理想就是“致君尧舜上，再使风俗淳”，做贤臣，遇明君，造福天下苍生。他是一代“诗史”，也是真正的醇儒，他的诗歌充满着忧国忧民的忧患意识与热爱天地万物的仁爱精神，是儒家积极入世精神的艺术表现。",
                    "options": [
                        "张良",
                        "诸葛亮",
                        "魏征",
                        "房玄龄"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "“凡有井水饮处，即能歌柳词！”柳词是谁的词?",
                    "options": [
                        "柳宗元",
                        "柳永",
                        "柳公权",
                        "柳如是"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "沈从文的作品，最突出典型的意象是_______________",
                    "options": [
                        "火",
                        "山",
                        "夜",
                        "水"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "白先勇先生认为，中华民族的“雅乐”是_________",
                    "options": [
                        "京剧",
                        "黄梅戏",
                        "昆曲",
                        "越剧"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "王国维：“吾国人之精神，世间的也，乐天的也，故代表其精神之戏曲小说，无往而不着此乐天之色彩。始于悲者终于欢，始于离者终于合，始于困者终于亨”，超越了这种精神的小说戏剧是",
                    "options": [
                        "《红楼梦》、《水浒传》",
                        "《红楼梦》、《牡丹亭》",
                        "《红楼梦》、《桃花扇》",
                        "《牡丹亭》、《金瓶梅》"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "被称为“亚圣”的先秦哲人是_____________",
                    "options": [
                        "老子",
                        "孔子",
                        "孟子",
                        "荀子"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "他的山水田园诗塑造了空明境界与宁静之美。他被称为“诗佛”。他也是杰出的画家，对自然的观察、感受、觉知非常敏锐。有赞云：“诗中有画，画中有诗”。又有赞云：“诗中有画，诗中有乐，诗中有禅”。他是(       )",
                    "options": [
                        "苏东坡",
                        "黄庭坚",
                        "孟浩然",
                        "王维"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem":"“梅妻鹤子”的宋代隐士林逋，有一句梅花诗，千古传诵，被誉为咏梅诗歌的千古绝唱。_________ ",
                    "options": [
                        "何方可化身千亿，一树梅花一放翁。",
                        "疏影横斜水清浅，暗香浮动月黄昏。",
                        "寻常一样窗前月，才有梅花便不同。",
                        "冰雪林中著此身，不同桃李混芳尘。"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "出新意于_______之中，寄妙理于豪放之外。(苏轼)",
                    "options": [
                        "灵感",
                        "法度",
                        "气度",
                        "奇崛"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "习近平：__________________正是中国传统文化中的精华。",
                    "options": [
                        "王阳明心学",
                        "程朱理学",
                        "清代朴学",
                        "王安石新学"
                    ],
                    "answer": [
                        "A"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "《饮冰室合集》是谁的代表作？",
                    "options": [
                        "王国维",
                        "钱玄同",
                        "蔡元培",
                        "梁启超"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "《孙子兵法》：“_________________，善之善者也。”",
                    "options": [
                        "百战百胜",
                        "不战而屈人之兵",
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "明清小说的最高峰_______",
                    "options": [
                        "《三国演义》",
                        "《官场现形记》",
                        "《红楼梦》",
                        "《金瓶梅》"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "王羲之的代表作____________，不仅文字优美，更是我国书法艺术的瑰宝。",
                    "options": [
                        "《你来看此花时》",
                        "《世说新语》",
                        "《兰亭集序》",
                        "《钴母潭西小丘记》"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                }
            ]
        },
        {
            "title": "多项选择题",
            "infos": null,
            "values": [
                {
                    "type": 2,
                    "questionStem": "古希腊三大哲学家______________________",
                    "options": [
                        "苏格拉底",
                        "奥勒留",
                        "柏拉图",
                        "亚里士多德",
                    ],
                    "answer": [
                        "A",
                        "C",
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 2,
                    "questionStem": "《乡愁四韵》中炽热的思乡爱国之情如一根红线，将富有民族特色的________________________一组意象有机地融合在一起。意以象言，情以象抒，联想自然，环环相扣，音韵和谐，感人至深。",
                    "options": [
                        "长江水",
                        "海棠红",
                        "雪花白",
                        "腊梅香"
                    ],
                    "answer": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ],
                    "analysis": null
                },
                            {
                    "type": 2,
                    "questionStem": "孟子三乐（   ）",
                    "options": [
                        "父母俱存，兄弟无故。",
                        "仰不愧于天，俯不怍于人",
                        "得天下之英才而教育之。",
                        "老者安之，朋友信之，少者怀之。",
                    ],
                    "answer": [
                        "A",
                        "B",
                        "C"
                    ],
                    "analysis": null
                }
            ]
        },
        // {
        //     "title": "判断题",
        //     "infos": null,
        //     "values": [
        //         {
        //             "type": 3,
        //             "questionStem": "科学管理研究的核心是提高员工的满意度",
        //             "options": [
        //                 ""
        //             ],
        //             "answer": [
        //                 "0"
        //             ],
        //             "analysis": "科学管理研究的核心是如何提高劳动生产率"
        //         },
        //         {
        //             "type": 3,
        //             "questionStem": "组织文化反映一个组织的精神风貌，决定羞镪织荫在凝聚力的大小",
        //             "options": [
        //                 ""
        //             ],
        //             "answer": [
        //                 "1"
        //             ],
        //             "analysis": null
        //         }
        //     ]
        // },
        {
            "title": "填空题",
            "infos": null,
            "values": [
                {
                    "type": 4,
                    "questionStem": "人文通识教育从________导读出发。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "经典"
                    ],
                    "analysis": null
                },
                 {
                    "type": 4,
                     "questionStem": "道常________而无不为。《老子》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "无为"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "用五个字概括老子的辩证法：（       ）。小注：钱钟书先生认为这五个字抵得上黑格尔的千言万语。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "反者道之动"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "观乎天文，以察时变。观乎________，以化成天下。《周易·贲卦·彖辞》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "人文"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "子不语____、力、乱、神。《论语·述而》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "怪"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "《周易》三才：古人认为周易八卦的下画象征“____”，中画象征“人”，上画象征“____”。《系辞下》说：“三才之道也。”",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "地",
                        "天"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "离娄之明，公输子之巧，不以______，不能成方圆。《孟子·离娄上》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "规矩"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "它山之石，可以为错。它山之石，___________。《诗经·小雅·鹤鸣》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "可以攻玉"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "人法地，地法天，天法道，道法______。（《老子》第25章)",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "自然"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "中国传统学术的两大纲:_________之学、___________之学。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "心性",
                        "心性"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "盈盈一水间，______________________。《古诗十九首》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "脉脉不得语"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "陈子昂与“四杰”等对“______“的追求，使大唐诗歌走向振奋，成为盛唐诗歌的序曲。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "风骨"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "梁漱溟：中国文化最大之偏失，在_______永不被发现。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "个人"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "孙思邈的《__________》是一篇专论医德的旷世名文。作者以赤诚的济世救人之心，对医家提出了应当志成“大医”的殷切期望，着重论述了欲成大医必须解决的两大问题：一是专就医书而言的“精”，二是专就德行而言的“诚”，即医术要精、德行要诚。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "大医精诚"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "史怀泽的《___________》是一部论文集，系统阐述了史怀泽的生命伦理思想。他的伟大在于他把作为人道主义的爱和悲悯，敞开给了我们周围生存着的所有生命。这与中国儒家的“民胞物与”“仁民爱物”，释家的“无缘大慈”、“同体大悲”之心是相通的。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "敬畏生命"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "《我怎样做起小说来》体现了鲁迅的“创作论”，更可贵的是他“_________”、“________”的深厚的热忱，使他的小说蕴藏着巨大的情感力量和深刻的人生内涵与社会内涵。这是民族的，也是世界的。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "启蒙主义"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "人之气质由于天生，本难改变，惟______则可变化气质。——《曾国藩家书》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "读书"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许？为有源头______来。——朱熹《观书有感》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "活水"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "陶渊明千古名句：“____________，悠然见南山。”",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "采菊东篱下"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "盖士人读书，第一要______，第二要_______，第三要________。——《曾国藩家书》",
                    "options": [
                        
                    ],
                    "answer": [
                        "有志",
                        "有识",
                        "有恒"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "兴于诗，立于礼，成于（  ）——《论语·泰伯》",
                    "options": [
                    ],
                    "answer": [
                        "乐"
                    ],
                    "analysis": null
                },
            ]
        },
        // {
        //     "title": "解答题",
        //     "infos": null,
        //     "values": [
        //         {
        //             "type": 5,
        //             "questionStem": "简述企业社会责任的具体体现",
        //             "options": [
        //                 ""
        //             ],
        //             "answer": [
        //                 "（1）对雇员的责任；\n（2）对顾客的责任；\n（3）对竞争对手的责任；\n（4）对环境的责任；\n（5）对社会发展的责任。"
        //             ],
        //             "analysis": null
        //         }
        //     ]
        // },
        // {
        //     "title": "论述题",
        //     "infos": null,
        //     "values": [
        //         {
        //             "type": "8",
        //             "questionStem": "试述社会革命是社会基本矛盾的必然产物。",
        //             "options": null,
        //             "answer": [
        //                 "社会革命是社会基本矛盾的必然产物。社会革命的最深刻的根源，就在于生产力和生产关系之间的矛盾以及生产力的发展就要求革命的进步的阶级消灭经济基础和上层建筑之间的矛盾。当生产关系成为生产力发展的桎梏时，生产力的发展就要求革命的进步的阶级消灭过时的旧生产关系,建立适合生产力发展的新生产关系，以解放被束缚的生产力。但旧的上层建筑，特别是国家家政权，总是要维护旧的生产关系。要解决生产力和生产关系之间的矛盾，就必须首先解决经济基础和上层建筑之间的矛盾，即改变旧的上层建筑，最主要的是消灭旧的国家政权，建立新的国家政权。"
        //             ],
        //             "analysis": null
        //         },
        //         {
        //             "type": "8",
        //             "questionStem": "为什么要把共产主义远大理想和中国特色社会主义共同理想结合起来?",
        //             "options": null,
        //             "answer": [
        //                 "(1)共产主义是历史发展的必然趋势，体现了社会发展规律的客观要求，\n是人类最美好最崇高的社会制度，因而我们要顺应历史发展的潮流，树立共产主\n义的远大社会理想。共产主义远大理想的树立，可以为人们从事各种社会实践活动提供强大的精神支柱和思想动力。共产主义远大理想是我们实现人生价值的基\n础和归宿，是凝聚一切进步社会力量、推动社会不断前进的精神航标。\n(2)我国当前正处于社会市义初级阶段，建设中国特色社会主义是我国人民的历史使命和共同理想。中国特色社会主义开创了我国社会主义发展的崭新道路，是\n科学社公主义理论与中国国情相结合的产物。\n(3)共产主义远大理想和中国特色社会主义共同理想，二者相铺相成，相互促进，\n有机联系和统一。一方面，远大理想是现阶段共同理想的奋斗目标。另一方面，\n现阶段的共同理想是远大理想的坚实基础。实现共产主义远大理想，要经过社会\n主义历史阶段的长足发展，实现中国特色社公主义的共同理想，是为实现共产主\n义远大理想而服务的。中国特色社会主义共同理想在我国的成功实践，必然为实\n现共产主义远大理想奠定坚实的基础。 "
        //             ],
        //             "analysis": null
        //         }
        //     ]
        // },
        // {
        //     "title": "完形填空",
        //     "infos": null,
        //     "values": [
        //         {
        //             "type": 6,
        //             "questionStem": "The following paragraphs are taken from the textbooks，followed by a list of words or expressions marked A to Y.  Choose the one that best completes each of the sentences and write the corresponding letter on your Answer Sheet. One word or expression for each blank only．(25 points，1 point for each)\nWhen I was graduating from college，my generation also found the world in a   32  ．The economic machinery had broken   33   almost everywhere：In this country nearly a quarter of the   34   was out of work. A major war seemed all   35   likely．As a college newspaper editor at that time，I protested against this   36   as vehemently as student activists are protesting today．\nI wonder if this blandness of our diet doesn’t explain   37   so many of  us are  overweight and even dangerously so．When things had flavor, we knew what we were eating all the  38  \n— and it satisfied us．A   39   of my mother-in-law’s wild strawberry jam will entirely satisfy your j am desire．But，of the  40   tinned or glass-packed strawberry jam，you need half a cupful to get the   41   of what you're eating\n\n",
        //             "options": [
        //                 "why",
        //                 "while",
        //                 "too",
        //                 "at",
        //                 "up",
        //                 "one"
        //             ],
        //             "answer": [
        //                 "C",
        //                 "D",
        //                 "A",
        //                 "B",
        //                 "F"
        //             ],
        //             "analysis": null
        //         }
        //     ]
        // },
        // {
        //     "title": "阅读理解",
        //     "infos": "Capital punishment has been in effect since the 1600’s．However, in 1972 the U．S．Supreme Court ruled that the death penalty was cruel and unusual punishment，which was unconstitutional according to the Eighth Amendment． It was public opinion that the current methods of execution，hanging， electrocution，and facing a firing squad，were too slow and painful upon the person to be executed．The U．S．Supreme Court reversed this decision when a cleaner way to bring about death was found in 1976．This cleaner way is death by lethal injection，which is quick and painless if administered right．",
        //     "values": [
        //         {
        //             "type": 7,
        //             "questionStem": "The death sentence was instituted some ______ years ago",
        //             "options": [
        //                 "200",
        //                 "400",
        //                 "300",
        //                 "500"
        //             ],
        //             "answer": [
        //                 "B"
        //             ],
        //             "analysis": null
        //         }
        //     ]
        // }
    ]
};
function test(test_id) {
    if(test_id!=""){
        //$.ajax({
            //type : 'POST',
            //url : 'data/exam.json',
            //data : {'testId':test_id},
            //dataType : "json",
            //success : function(data){
            console.log(data);
            var titleB = data.title;
            var exam = data.exam;
            var test_box = '';

            $.each(exam, function(h, exam) {
                var title = exam.title;
                var info = exam.infos!=null?'<h4 class="jxz-title">'+exam.infos+'</h4>':'';
                var test = exam.values;
                var topic_box = '';

                $.each(test, function(i, topic) {//1单选2多选3判断4填空5问答8论述题6完型填空7阅读理解
                    var type = topic.type;
                    var options = topic.options;
                    var answer = topic.answer;
                    var analysis = topic.analysis==null||topic.analysis==""?"无":topic.analysis;
                    var option_box = '';//题目

                    if(type==1){
                        //answer_op = '';
                        $.each(options, function(j, option) {
                            var op = convert(j);
                            option_box += `
                                    <div class="jxz-option radio">
                                        <label>
                                            <input name="test`+h+''+i+`" type="radio" value="`+op+`"> `+op+`：`+option+`
                                        </label>
                                    </div>
                                    `;
                        });

                    }else if(type==2){
                        //answer_op = '';
                        $.each(options, function(j, option) {
                            var op = convert(j);
                            option_box += `
                                    <div class="jxz-option checkbox">
                                        <label>
                                            <input name="test`+h+''+i+`" type="checkbox" value="`+op+`"> `+op+`：`+option+`
                                        </label>
                                    </div>
                                    `;
                        });


                    }else if(type==3){

                        option_box = `
                                <div class="jxz-option radio">
                                    <label>
                                        <input name="test`+h+''+i+`" type="radio" value="1"> 正确
                                    </label>
                                </div>
                                <div class="jxz-option radio">
                                    <label>
                                        <input name="test`+h+''+i+`" type="radio" value="0"> 错误
                                    </label>
                                </div>
                                `;
                    }else if(type==4){

                        option_box += `
                                <div class="jxz-option">
                                    <textarea name="test`+h+''+i+`" class="form-control" style="width: 50%" rows="5" placeholder="答案以空格隔开"></textarea>
                                </div>
                                `;
                    }else if(type==5||type==8){

                        option_box += `
                                <div class="jxz-option">
                                    <textarea name="test5" class="form-control" style="width: 50%" rows="5" placeholder=""></textarea>
                                </div>
                                `;
                    }else if(type==6){

                        $.each(options, function(j, option) {
                            var op = convert(j);
                            option_box += `
                                    <div class="jxz-option radio-inline">
                                        <label>
                                            `+op+`：`+option+`
                                        </label>
                                    </div>
                                    `;
                        });
                        option_box += `
                                <div class="jxz-option">
                                    <textarea name="test`+h+''+i+`" class="form-control" style="width: 50%" rows="5" placeholder="答案以空格隔开"></textarea>
                                </div>`;
                    }else if(type==7){

                        $.each(options, function(j, option) {
                            var op = convert(j);
                            option_box += `
                                    <div class="jxz-option radio">
                                        <label>
                                            <input name="test`+h+''+i+`" type="radio" value="`+op+`"> `+op+`：`+option+`
                                        </label>
                                    </div>
                                    `;
                        });
                    }

                    var answer_op = '';//答案
                    if(type==3){
                        $.each(answer, function(i, aw) {
                            answer_op += aw==1 ? "正确" : "错误";
                        });
                    }else{
                        $.each(answer, function(i, aw) {
                            answer_op += answer.length==(i+1) ? aw : aw+" ";
                        });
                    }
                    topic_box += `
                            <div class="testCon" data-type="`+type+`" data-answer="`+answer_op+`">
                                <h4 class="jxz-title">`+topic.questionStem+`</h4>
                                `+option_box+`
                                <div class="topic-answer">
                                   <p>您的答案：<span class="userAnswer"></span></p>
                                   <p>正确答案：`+answer_op+`</p>
                                   <p>解析：`+analysis+`</p>
                                </div>
                            </div>
                            `;

                });
                test_box += `
                            <div class="jxz-box col-md-12">
                            <h4 class="tesTitle">`+title+`</h4>
                            `+info+`
                            `+topic_box+`
                        </div>
                        `;
            });

            var test_html = `
                    <div class="page-header">
                        <h3 class="text-center">`+titleB+`</h3>
                    </div>
                    <form class="" id="testForm">
                        <div class="test-form-box">
                            `+test_box+`
                        </div>
                        <div class="form-group assignment">
                            <button type="button" class="btn btn-primary" onclick="assignment()">交卷</button>
                        </div>
                    </form>`;
            $('#testArea').html(test_html)
            //},
            //error:function(data){
                //alert("网络异常，请稍后重试");
            //}
        //});
    }else{
        alert("试题获取失败！");
    }
}
//交卷
function assignment(){
    $(".testCon h4").css("color","#555");
    var _temp_tip = "yes";
    var tall = 0;
    $(".testCon").each(function(i){
        var type = $(this).attr("data-type");
        if(type==2){
            if($(this).find('input[type="checkbox"]:checked').val() == undefined){
                _temp_tip = "no";
                $(this).find("h4").css("color","#00B895");
            }
        }else if(type==1||type==3||type==7){
            if($(this).find('input[type="radio"]:checked').val() == undefined){
                _temp_tip = "no";
                $(this).find("h4").css("color","#00B895");
            }
        }else if(type==4||type==5||type==8||type==6){
            if($.trim($(this).find('textarea').val()) == ''){
                _temp_tip = "no";
                $(this).find("h4").css("color","#00B895");
            }
        }
        tall++;
    });

    if(_temp_tip == "no"){
        alert("还有题目没做完");
        return;
    }

    var err = 0;
    $(".testCon").each(function(i){
        var type = $(this).attr("data-type");
        var aw = $(this).attr("data-answer");
        var set_answer = '';

        if(type==2){

            var ckAarray = $(this).find('input[type="checkbox"]:checked');
            var ans = '';
            ckAarray.each(function (i,item) {
                ans += ckAarray.length==i+1?item.value:item.value+" ";
            });
            if(ans != aw){
                $(this).find("h4").css("color","red");
                err++;
            }
            set_answer = ans;

        }else if(type==1||type==7){

            var rd = $(this).find('input[type="radio"]:checked').val();
            if(rd != aw){
                $(this).find("h4").css("color","red");
                err++;
            }
            set_answer = rd;

        }else if(type==3){

            var rpd = $(this).find('input[type="radio"]:checked').val();
            rpd = rpd==0 ? "错误" : (rpd==1 ? "正确" : "");
            if(rpd != aw){
                $(this).find("h4").css("color","red");
                err++;
            }
            set_answer = rpd;

        }else if(type==4||type==5||type==8||type==6){

            var textVal = $.trim($(this).find('textarea').val());
            if(textVal!= aw){
                $(this).find("h4").css("color","red");
                err++;
            }
            set_answer = textVal;
        }

        $(this).find("span.userAnswer").text(set_answer);
    });
    $(".topic-answer").show();
}
//数字转换成大写字母
function convert(num){
    num = num + 1;
    return num <= 26 ? String.fromCharCode(num + 64) : convert(~~((num - 1) / 26)) + convert(num % 26 || 26);
}
