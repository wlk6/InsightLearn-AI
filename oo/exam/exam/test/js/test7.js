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
            exam_id: 7,
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
            exam_id: 7,
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
    "title": "湖工大15级毕业生考试开卷（提前批）",
    "exam": [
        {
            "title": "单项选择题",
            "infos": null,
            "values": [
                {
                    "type": 1,
                    "questionStem": "“微言大义”_________笔法。",
                    "options": [
                        "《春秋》",
                        "《左传》",
                        "《国策》",
                        "《国语》"
                    ],
                    "answer": [
                        "A"
                    ],
                    "analysis": null
                },
                {
                    "type": 1,
                    "questionStem": "明代大思想家________是心学的集大成者，被誉为“三不朽”（立德、立言、立功）的圣人。",
                    "options": [
                        "朱熹",
                        "王夫之",
                        "陆九渊",
                        "王阳明"
                    ],
                    "answer": [
                        "D"
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
                    "questionStem": "以下哪种不属于儒家的“仁爱”思想的内在意涵的是_______",
                    "options": [
                        "由近及远 推己及人",
                        "内及心性 外及万物",
                        "兼爱尚同 节葬节用",
                        "立己达人 兼善天下"
                    ],
                    "answer": [
                        "C"
                    ],
                    "analysis": null
                },
             
                {
                    "type": 1,
                    "questionStem": "“东厢坦腹”的主人公是____________。",
                    "options": [
                        "陶渊明",
                        "王羲之",
                        "谢灵运",
                        "嵇康"
                    ],
                    "answer": [
                        "B"
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
                    "questionStem": "我国顶级学府清华大学的校训“_______，__________”出自《周易》的“象辞”——“天行健，君子以自强不息；地势坤，君子以厚德载物。”《易传》认为，宇宙、自然和人类社会的法则，即天道、地道、人道是一致的，体现了“依天道以立于人道”的大道智慧和人文精神。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "自强不息",
                        "厚德载物"
                    ],
                    "analysis": null
                },
                {
                    "type": 4,
                    "questionStem": "曾子曰：“士不可以不______，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎?”《论语·泰伯》【注释】曾子说：“士人不可以不弘大刚毅，责任重大，路途遥远，将行仁，将生命的大道作为自己的责任，这不是责任重大么？到死才停止，这不是路途遥远么？”",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "弘毅"
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
                    "questionStem": "花中四君子：梅、兰、竹、____",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "菊"
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
                }
             

            ]
        },
        {
            "title": "解答题",
            "infos": null,
            "values": [
                {
                    "type": 5,
                    "questionStem": "没有原典阅读的通识课程是空洞的。我们这门课程最重要的一项要求是：必读一部中华原典，比如《论语》、《老子》、《诗经》、《孟子》、《庄子》、《楚辞》、《唐诗三百首》、《红楼梦》等等……因您马上面临繁忙的工作，不要求您快速读完。请考虑您打算读哪本，查阅相关材料，简要介绍这部原典。",
                    "options": [
                        ""
                    ],
                    "answer": [
                        "无"
                    ],
                    "analysis": null
                }
            ]
        },
        {
            "title": "论述题",
            "infos": null,
            "values": [
                {
                    "type": "8",
                    "questionStem": `任选一道题作答阅读·思考·评论<br /> 1.阅读以下片段 子曰：“富与贵，是人之所欲也，不以其道得之，不处也。贫与贱，是人之所恶也，不以其道得之，不去也。”《论语·里仁》 子曰：“贤哉，回也！一箪食，一瓢饮，在陋巷，人不堪其忧，回也不改其乐，贤哉，回也！”《论语·雍也》 子曰：“饭疏食，饮水，曲肱而枕之，乐亦在其中矣。不义而富且贵，于我如浮云。” 《论语·述而》 您如何看待“孔颜之乐”？（您有“衣敝缊袍，与衣狐貉者立”穿着破旧粗糙的衣服，与衣着华美的人站在一起的经历么？请真诚地谈一谈您对于贫富的看法，不要拘束，不说假话，也谈谈“孔颜之乐”对您的启示。）<br /> 2.阅读以下片段 俺曾见金陵玉殿莺啼晓，秦淮水榭花开早， 谁知容易冰消。 眼看他起高楼，眼看他宴宾客， 眼看他楼塌了。 这青苔碧瓦堆，俺曾睡风流觉， 将五十年兴亡看饱。 以上是《桃花扇·哀江南》的一段唱词，您读后有何思考？<br />   3. 阅读以下片段 盖西伯拘而演《周易》；仲尼厄而作《春秋》；屈原放逐，乃赋《离骚》；左丘失明，厥有《国语》；孙子膑脚，《兵法》修列；不韦迁蜀，世传《吕览》；韩非囚秦，《说难》、《孤愤》；《诗》三百篇，大底圣贤发愤之所为作也。 以上选自司马迁《报任安书》，即著名的“发愤著书”说，可结合历史或现实社会生活谈谈自己的启发。 <br /> 4.联合国秘书长潘基文获得第二届连任发表演说时，援引老子“天之道，利而不害，为而不争”,强调应将这不朽的智慧应用到今天的工作中。对此，您有何感想或启发？  `,
                    "options": null,
                    "answer": [
                        "无"
                    ],
                    "analysis": null
                },
            ]
        },
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