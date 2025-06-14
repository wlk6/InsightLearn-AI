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
            exam_id: 10,
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
            exam_id: 10,
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
    "title": "外语班诗歌背诵考试-副本",
    "exam": [

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
                    "questionStem": "蒹葭苍苍，白露为霜。所谓伊人，（         ）。溯洄从之，道阻且长。溯游从之，宛在水中央。——《诗经·秦风》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "在水一方"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "青青子衿，（           ）。纵我不往，子宁不嗣音？——《诗经·郑风》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "悠悠我心"
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
                    "questionStem": "山不厌高，海不厌深，周公吐哺，（                ）。——曹操《短歌行》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "天下归心"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "采菊东篱下，（               ）。——陶渊明《饮酒》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "悠然见南山"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "（                           ），举杯消愁愁更愁。——李白",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "抽刀断水水更流"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "彼黍离离，彼稷之苗。行迈靡靡，中心摇摇。知我者，谓我心忧；不知我者，（            ）。悠悠苍天，彼何人哉！《诗经·王风》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "谓我何求"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "举世皆浊我独清，众人皆醉（       ）。新沐者必弹冠，新浴者必（        ）。沧浪之水清兮，可以濯我缨。沧浪之水浊兮，可以濯我（   ）。——《楚辞》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "我独醒",
                        "振衣",
                        "足"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "在天愿做比翼鸟，（                         ），天长地久有时尽，此恨绵绵无绝期。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "在地愿为连理枝"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "昆山玉碎凤凰叫，（                         ）。——李贺《李凭箜篌引》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "芙蓉泣露香兰笑"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "（                          ），望帝春心托杜鹃。——李商隐《锦瑟》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "庄生晓梦迷蝴蝶"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "疏影横斜水清浅，（                         ）。——林逋《山园小梅》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "暗香浮动月黄昏"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "不忍登高临远，望故乡渺邈，（               ）——柳永《八声甘州》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "归思难收"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "人生到处知何似，应似（                   ）。泥上偶然留指爪，鸿飞那复计东西？——苏轼《和子由渑池怀旧》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "飞鸿踏雪泥"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "疏影横斜水清浅，（                         ）。——林逋《山园小梅》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "暗香浮动月黄昏"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "花自飘零水自流，一种相思，（                ）。此情无计可消除，才下眉头，却上心头。——李清照《一剪梅》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "两处闲愁"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "江流宛转绕芳甸，月照花林皆似霰。空里流霜不觉飞，（                        ）——《春江花月夜》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "汀上白沙看不见"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "木末芙蓉花，山中发红萼。（                ），纷纷开且落。——王维《辛夷坞》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "涧户寂无人"
                    ],
                    "analysis": null
                }, {
                    "type": 4,
                    "questionStem": "前不见古人，（                ），念天地之悠悠，独怆然而涕下！——陈子昂《登幽州台歌》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "后不见来者"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "山无陵，江水为竭，冬雷震震，（       ），天地合，乃敢与君绝！——《汉乐府民歌》",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "夏雨雪"
                    ],
                    "analysis": null
                }
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