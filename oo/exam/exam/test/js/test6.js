let startTime = new Date().getTime();
let totalElapsedTime = 0;
const token = localStorage.getItem('token');
// 设置定时器，每隔一定时间发送请求记录用户浏览时长
const timer = setInterval(function () {
    // 计算当前累计的浏览时长
    const currentTime = new Date().getTime();
    const elapsedTime = Math.round((currentTime - startTime) / 1000);

    // 发送记录请求
    axios({
        url: 'http://49.234.190.148:8888/course/record_courseView/',
        headers: { 'token': `${token}` },
        method: 'POST',
        data: {
            exam_id: 6,
            view_time: elapsedTime,
        }
    }).then(function (response) {
        console.log('成功记录浏览时长:', response.data);
    })
        .catch(function (error) {
            console.error('记录浏览时长出错:', error);
        });

    // 更新累计的浏览时长
    totalElapsedTime += elapsedTime;
}, 5000); // 每隔5秒发送一次记录请求

// 当页面即将关闭时清除定时器并发送最后一次记录请求
window.onbeforeunload = function () {
    clearInterval(timer); // 清除定时器
    const endTime = new Date().getTime();
    const elapsedTime = Math.round((endTime - startTime) / 1000);
    totalElapsedTime += elapsedTime;

    // 发送最后一次记录请求
    axios({
        url: 'http://49.234.190.148:8888/course/record_courseView/',
        headers: { 'token': `${token}` },
        method: 'POST',
        data: {
            exam_id: 6,
            view_time: elapsedTime,
        }
    }).then(function (response) {
        console.log('成功记录最终浏览时长:', response.data);
    })
        .catch(function (error) {
            console.error('记录最终浏览时长出错:', error);
        });
};
var data = {
    "title": "纯在线学分班考试（第四次）",
    "exam": [
        {
            "title": "单项选择题",
            "infos": null,
            "values": [
                {
                    "type": 1,
                    "questionStem": "慈母有败子，严家无悍虏”是哪一家的观点（   ）",
                    "options": [
                        "道",
                        "儒",
                        "法",
                        "墨"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "陈子昂与“四杰”等对“______“的追求，使大唐诗歌走向振奋，成为盛唐诗歌的序曲。",
                    "options": [
                        "壮丽",
                        "风骨",
                        "雄浑",
                        "清丽"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "“新沐者必弹冠，新浴者必振衣”的原始主人公是谁（   ）",
                    "options": [
                        "宋玉",
                        "渔父",
                        "屈原",
                        "陶渊明"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },

                {
                    "type": 1,
                    "questionStem": "杜甫讴歌自己偶像的诗歌是（    ）",
                    "options": [
                        "自京至奉先县咏怀",
                        "闻官军收河南河北",
                        "望岳",
                        "蜀相"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "以下句子是“有我之境”还是“无我之境”？寒波澹澹起，白鸟悠悠下。",
                    "options": [
                        "无我之境",
                        "有我之境"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "陆游的《卜算子·咏梅》中，“以扛鼎之力，振起全篇”的句子是:驿外断桥边，寂寞开无主。已是黄昏独自愁，更著风和雨。无意苦争春，一任群芳妒。零落成泥碾作尘，只有香如故。",
                    "options": [
                        "寂寞开无主",
                        "只有香如故",
                        "零落成泥碾作尘",
                        "无意苦争春"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "白先勇先生认为，中华民族的“雅乐”是_______",
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
                    "questionStem": "依孔子看来，以下最高境界是（     ）",
                    "options": [
                        "知之",
                        "哂之",
                        "好之",
                        "乐之"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "您认为“逍遥自在   过化存神”应是先秦（      ）家中提炼出的主题?",
                    "options": [
                        "儒",
                        "农",
                        "名",
                        "道",
                        "墨"
                    ],
                    "answer": [
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "先秦诸子中，“浩然之气”，“大丈夫”风格是哪一位?",
                    "options": [
                        "孔子",
                        "曾子",
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
                    "questionStem": "按照我国先秦兵家孙武的观点:（                 ），善之善者也。",
                    "options": [
                        "百战百胜",
                        "不战而屈人之兵。"
                    ],
                    "answer": [
                        "B"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "按照钱钟书的说法，宋代诗歌以（      ）风格见长？",
                    "options": [
                        "风神情韵",
                        "筋骨肌理"
                    ],
                    "answer": [
                        "B"
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
                    "questionStem": "如果想读魏晋风度，从哪些材料中可以看到（  ）",
                    "options": [
                        "《世说新语》",
                        "《富春山居图》",
                        "《清明上河图》",
                        "《兰亭集序",
                    ],
                    "answer": [
                        "A",
                        "D"
                    ],
                    "analysis": null
                },
                {
                    "type": 2,
                    "questionStem": "史学大家钱穆、许倬云皆推重的四部中华原典，“新四书”是哪四部（        ）我们多次讨论“重视原典”，在此诚恳地希望大家重视原典精读。这应比这门课本身使大家更深受益。每天只读一点，日积月累，这或许是课程最后最有价值的寄语。",
                    "options": [
                        "《大学》",
                        "《论语》",
                        "《孟子》",
                        "《中庸》",
                        "《老子》",
                        "《庄子》"
                    ],
                    "answer": [
                        "B",
                        "C",
                        "E",
                        "F"
                    ],
                    "analysis": null
                }
            ]
        },
        //         {
        //             "type": 2,
        //             "questionStem": "《老子·第十章》：“我有三宝，持而保之，一曰______，二曰___________，三曰________________”",
        //             "options": [
        //                 "慈",
        //                 "俭",
        //                 "敢为天下先",
        //                 "不敢为天下先"
        //             ],
        //             "answer": [
        //                 "A",
        //                 "B",
        //                 "D"
        //             ],
        //             "analysis": null
        //         },
        //         {
        //             "type": 2,
        //             "questionStem": "孟子三乐（   ）",
        //             "options": [
        //                 "父母俱存，兄弟无故。",
        //                 "仰不愧于天，俯不怍于人",
        //                 "得天下之英才而教育之。",
        //                 "老者安之，朋友信之，少者怀之。",
        //             ],
        //             "answer": [
        //                 "A",
        //                 "B",
        //                 "C"
        //             ],
        //             "analysis": null
        //         },
        //         {
        //             "type": 2,
        //             "questionStem": `&quot;文艺复兴&quot;画坛三杰________________________`,
        //             "options": [
        //                 "达 ·  芬奇（代表智慧）",
        //                 "拉斐尔（代表理性）",
        //                 "菲狄亚斯（代表神明）",
        //                 "米开朗琪罗（代表力量）",
        //             ],
        //             "answer": [
        //                 "A",
        //                 "B",
        //                 "D"
        //             ],
        //             "analysis": null
        //         }
        //     ]
        // },
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
                    "questionStem": "各美其美，美人之美，美美与共，天下_____________。（费孝通）",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "大同"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "子贡问曰：“有一言而可以终身行之者乎？”子曰：“其___乎？己所不欲，勿施於人。”《论语·卫灵公》提示：答案为一个字。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "恕"
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
    if (test_id != "") {
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

        $.each(exam, function (h, exam) {
            var title = exam.title;
            var info = exam.infos != null ? '<h4 class="jxz-title">' + exam.infos + '</h4>' : '';
            var test = exam.values;
            var topic_box = '';

            $.each(test, function (i, topic) {//1单选2多选3判断4填空5问答8论述题6完型填空7阅读理解
                var type = topic.type;
                var options = topic.options;
                var answer = topic.answer;
                var analysis = topic.analysis == null || topic.analysis == "" ? "无" : topic.analysis;
                var option_box = '';//题目

                if (type == 1) {
                    //answer_op = '';
                    $.each(options, function (j, option) {
                        var op = convert(j);
                        option_box += `
                                    <div class="jxz-option radio">
                                        <label>
                                            <input name="test`+ h + '' + i + `" type="radio" value="` + op + `"> ` + op + `：` + option + `
                                        </label>
                                    </div>
                                    `;
                    });

                } else if (type == 2) {
                    //answer_op = '';
                    $.each(options, function (j, option) {
                        var op = convert(j);
                        option_box += `
                                    <div class="jxz-option checkbox">
                                        <label>
                                            <input name="test`+ h + '' + i + `" type="checkbox" value="` + op + `"> ` + op + `：` + option + `
                                        </label>
                                    </div>
                                    `;
                    });


                } else if (type == 3) {

                    option_box = `
                                <div class="jxz-option radio">
                                    <label>
                                        <input name="test`+ h + '' + i + `" type="radio" value="1"> 正确
                                    </label>
                                </div>
                                <div class="jxz-option radio">
                                    <label>
                                        <input name="test`+ h + '' + i + `" type="radio" value="0"> 错误
                                    </label>
                                </div>
                                `;
                } else if (type == 4) {

                    option_box += `
                                <div class="jxz-option">
                                    <textarea name="test`+ h + '' + i + `" class="form-control" style="width: 50%" rows="5" placeholder="答案以空格隔开"></textarea>
                                </div>
                                `;
                } else if (type == 5 || type == 8) {

                    option_box += `
                                <div class="jxz-option">
                                    <textarea name="test5" class="form-control" style="width: 50%" rows="5" placeholder=""></textarea>
                                </div>
                                `;
                } else if (type == 6) {

                    $.each(options, function (j, option) {
                        var op = convert(j);
                        option_box += `
                                    <div class="jxz-option radio-inline">
                                        <label>
                                            `+ op + `：` + option + `
                                        </label>
                                    </div>
                                    `;
                    });
                    option_box += `
                                <div class="jxz-option">
                                    <textarea name="test`+ h + '' + i + `" class="form-control" style="width: 50%" rows="5" placeholder="答案以空格隔开"></textarea>
                                </div>`;
                } else if (type == 7) {

                    $.each(options, function (j, option) {
                        var op = convert(j);
                        option_box += `
                                    <div class="jxz-option radio">
                                        <label>
                                            <input name="test`+ h + '' + i + `" type="radio" value="` + op + `"> ` + op + `：` + option + `
                                        </label>
                                    </div>
                                    `;
                    });
                }

                var answer_op = '';//答案
                if (type == 3) {
                    $.each(answer, function (i, aw) {
                        answer_op += aw == 1 ? "正确" : "错误";
                    });
                } else {
                    $.each(answer, function (i, aw) {
                        answer_op += answer.length == (i + 1) ? aw : aw + " ";
                    });
                }
                topic_box += `
                            <div class="testCon" data-type="`+ type + `" data-answer="` + answer_op + `">
                                <h4 class="jxz-title">`+ topic.questionStem + `</h4>
                                `+ option_box + `
                                <div class="topic-answer">
                                   <p>您的答案：<span class="userAnswer"></span></p>
                                   <p>正确答案：`+ answer_op + `</p>
                                   <p>解析：`+ analysis + `</p>
                                </div>
                            </div>
                            `;

            });
            test_box += `
                            <div class="jxz-box col-md-12">
                            <h4 class="tesTitle">`+ title + `</h4>
                            `+ info + `
                            `+ topic_box + `
                        </div>
                        `;
        });

        var test_html = `
                    <div class="page-header">
                        <h3 class="text-center">`+ titleB + `</h3>
                    </div>
                    <form class="" id="testForm">
                        <div class="test-form-box">
                            `+ test_box + `
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
    } else {
        alert("试题获取失败！");
    }
}
//交卷
function assignment() {
    $(".testCon h4").css("color", "#555");
    var _temp_tip = "yes";
    var tall = 0;
    $(".testCon").each(function (i) {
        var type = $(this).attr("data-type");
        if (type == 2) {
            if ($(this).find('input[type="checkbox"]:checked').val() == undefined) {
                _temp_tip = "no";
                $(this).find("h4").css("color", "#00B895");
            }
        } else if (type == 1 || type == 3 || type == 7) {
            if ($(this).find('input[type="radio"]:checked').val() == undefined) {
                _temp_tip = "no";
                $(this).find("h4").css("color", "#00B895");
            }
        } else if (type == 4 || type == 5 || type == 8 || type == 6) {
            if ($.trim($(this).find('textarea').val()) == '') {
                _temp_tip = "no";
                $(this).find("h4").css("color", "#00B895");
            }
        }
        tall++;
    });

    if (_temp_tip == "no") {
        alert("还有题目没做完");
        return;
    }

    var err = 0;
    $(".testCon").each(function (i) {
        var type = $(this).attr("data-type");
        var aw = $(this).attr("data-answer");
        var set_answer = '';

        if (type == 2) {

            var ckAarray = $(this).find('input[type="checkbox"]:checked');
            var ans = '';
            ckAarray.each(function (i, item) {
                ans += ckAarray.length == i + 1 ? item.value : item.value + " ";
            });
            if (ans != aw) {
                $(this).find("h4").css("color", "red");
                err++;
            }
            set_answer = ans;

        } else if (type == 1 || type == 7) {

            var rd = $(this).find('input[type="radio"]:checked').val();
            if (rd != aw) {
                $(this).find("h4").css("color", "red");
                err++;
            }
            set_answer = rd;

        } else if (type == 3) {

            var rpd = $(this).find('input[type="radio"]:checked').val();
            rpd = rpd == 0 ? "错误" : (rpd == 1 ? "正确" : "");
            if (rpd != aw) {
                $(this).find("h4").css("color", "red");
                err++;
            }
            set_answer = rpd;

        } else if (type == 4 || type == 5 || type == 8 || type == 6) {

            var textVal = $.trim($(this).find('textarea').val());
            if (textVal != aw) {
                $(this).find("h4").css("color", "red");
                err++;
            }
            set_answer = textVal;
        }

        $(this).find("span.userAnswer").text(set_answer);

    });
    $(".topic-answer").show();
}
//数字转换成大写字母
function convert(num) {
    num = num + 1;
    return num <= 26 ? String.fromCharCode(num + 64) : convert(~~((num - 1) / 26)) + convert(num % 26 || 26);
}