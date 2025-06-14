// const { default: axios } = require("axios");

var rg = document.querySelector('.submit')
var ipl = document.querySelector('.ipl')
function altFn(msg) {
    ipl.innerHTML = msg;
    ipl.style.display = 'block';
}
let reg = /^[a-zA-Z0-9_]{6,16}$/
let uname = document.getElementById('yhm')
let pd = document.getElementById('pword')
let vpd = document.getElementById('pword1')
let yx = document.getElementById('email')

function pwordd() {
    if (!reg.test(pd.value) && pd.value != '') {
        altFn('请输入正确的密码格式')
        return false
    }
    return true
}
pd.onblur = function () {
    pwordd()
    setTimeout(() => {
        ipl.style.display = 'none'
    }, 2000)
}
function verpword() {
    if (pd.value != vpd.value && pd.value != '') {
        altFn('两次密码不一致')
        return false
    }
    return true
}
vpd.onblur = function () {
    verpword()
    setTimeout(() => {
        ipl.style.display = 'none'
    }, 2000)
}
function veremal() {
    let regg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,5}$/
    if (!regg.test(yx.value) && yx.value != '') {
        altFn('请输入正确的邮箱格式')
        return false
    }
    return true
}
yx.onblur = function () {
    veremal()
    setTimeout(() => {
        ipl.style.display = 'none'
    }, 2000)
}
let ph = document.getElementById('pho')
function verpho() {

    let rreg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
    if (!rreg.test(ph.value) && ph.value != '') {
        altFn('请输入正确的手机号')
        return false
    }
    return true
}
ph.onblur = function () {
    verpho()
    setTimeout(() => {
        ipl.style.display = 'none'
    }, 2000)
}
let emyzm = document.getElementById('em-yzm')
function veremyzm() {
    let zz = /^\d{6}$/
    if (!zz.test(emyzm.value) && emyzm.value != '') {
        altFn('验证码错误')
        return false
    }
    return true
}
emyzm.onblur = function () {
    veremyzm()
    setTimeout(() => {
        ipl.style.display = 'none'
    }, 2000)
}
var dh, yhm;
rg.onclick = function (e) {
    if (!verpho()) {
        e.preventDefault()
    }
    if (!veremal()) {
        e.preventDefault()
    }
    if (!veremyzm()) {
        e.preventDefault()
    }
    if (!verpword()) {
        e.preventDefault()
    }
    if (!pwordd()) {
        e.preventDefault()
    }
    if (pd.value == '' || vpd.value == '' || yx.value == '' || ph.value == '' || emyzm.value == '') {
        altFn('请完整填写相关内容')
        setTimeout(() => {
            ipl.style.display = 'none'
        }, 2000)
    }
    // {
    //     "username": "嘿嘿",
    //         "password": 123456,
    //             "verify_password": 123456,
    //                 "phone": 13786462924,
    //                     "email": "1547583188@qq.com",
    //                         "code": 792726
    // }
    console.log(verpho() && veremal() && veremyzm() && verpword() && pwordd())
    // 注册请求
    if (verpho() && veremal() && veremyzm() && verpword() && pwordd()) {
        axios({
            url: 'http://49.234.190.148:8888/Login/RegisterView/',
            method: 'POST',
            data: {
                username: uname.value,
                password: pd.value,
                verify_password: vpd.value,
                phone: ph.value,
                email: yx.value,
                code: emyzm.value
            }
        }).then(result => {
            if (result.data.code >= 200 && result.data.code <= "300") {
                console.log(result);
                var motal1 = document.getElementById('motal1');
                motal1.style.display = 'block';
                setTimeout(function () {
                    motal1.style.display = 'none'
                }, 5000);
                yhm = uname.value;
                dh = ph.value;
                let obj = {
                    uname: uname.value,
                    pho: ph.value,
                    eml: yx.value,
                    emyzm: emyzm.value,

                }
                localStorage.setItem('yhzc', JSON.stringify(obj));

            }
            if (result.data.code >= 330) {
                console.log(result)
                var tsk = document.getElementById('mip')
                tsk.style.display = 'block';
                tsk.innerHTML = result.data.msg
                setTimeout(() => {
                    tsk.style.display = 'none'
                }, 2000)
            }
        }).catch(error => {
            var tsk = document.getElementById('mip')
            tsk.style.display = 'block';
            tsk.innerHTML = error.data.msg
            setTimeout(() => {
                tsk.style.display = 'none'
            }, 2000)
        })


    }
}
var n = document.querySelector('.n');
// 登录请求
let signpd = document.getElementById('sign-pd');
let signem = document.getElementById('sign-em');
n.onclick = function () {
    axios({
        url: 'http://49.234.190.148:8888/Login/LoginView/',
        method: 'POST',
        data: {
            email: signem.value,
            password: signpd.value
        }
    }).then(result => {
        localStorage.setItem('token', result.data.token);
        if (result.data.code >= 200 && result.data.code <= "300") {
            localStorage.setItem('isLoggedIn', 'true');
            var userInfo = JSON.parse(localStorage.getItem("yhzc"));
            if (userInfo != null) {
                let obj = {
                    uname: userInfo.uname,
                    pho: userInfo.pho,
                    eml: signem.value,
                    // emyzm: signpd.value,
                }
                localStorage.setItem('yh', JSON.stringify(obj));
            }
            else {
                let obj = {
                    uname: '',
                    pho: '',
                    eml: signem.value,
                }
                localStorage.setItem('yh', JSON.stringify(obj));
            }
            console.log(result);
            var motal2 = document.getElementById("motal2");
            motal2.style.display = 'block';
            let num = 5
            let loc = document.querySelector('.loc')
            let timer = setInterval(function () {
                num--
                loc.innerHTML = `${num}秒后跳转到首页...`
                if (num === 0) {
                    window.location.href = "../../oo/index.html";
                    loc.innerHTML = ''
                    clearInterval(timer)
                }
            }, 1000)
        }
        else if (result.data.code >= 330) {
            var tsk = document.getElementById('mip')
            tsk.style.display = 'block';
            tsk.innerHTML = result.data.msg;
            setTimeout(() => {
                tsk.style.display = 'none'
            }, 2000)
        } else {
            var tsk = document.getElementById('mip')
            tsk.style.display = 'block';
            tsk.innerHTML = error.data.msg;
            setTimeout(() => {
                tsk.style.display = 'none'
            }, 2000)
        }
    }).catch(error => {
        console.error("Error", error);
    })

}
let yzm = document.querySelector('.yzm')
yzm.onclick = function () {
    if (yx.value) {
        axios({
            url: 'http://49.234.190.148:8888/Login/sendCodeView/',
            method: 'POST',
            data: {
                email: yx.value
            }
        }).then(result => {
            yzm.disabled = true;
            let num = 60
            let timer = setInterval(function () {
                num--
                yzm.innerHTML = `${num}秒后重新获取`
                if (num === 0) {
                    yzm.innerHTML = '发送邮箱验证码'
                    yzm.disabled = false
                    clearInterval(timer)
                }
            }, 1000)
        }).catch(error => {
            console.error('发送失败', error)
        })
    }
}

// let bcontain = document.getElementById('b-container')
//重置密码
let formlink = document.querySelector('.form__link')
let czmm = document.getElementById('czmm')
let log = document.getElementById('log')

formlink.onclick = function () {
    czmm.style.display = 'flex'
    log.style.display = 'none'
    let s = document.querySelector('.signinn')
    let signemm = document.getElementById('sign-emm')
    var ipll = document.querySelector('.ipll')
    let f = 1
    signemm.onblur = function () {
        let regg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,5}$/
        if (!regg.test(signemm.value) && signemm.value != '') {
            f = 0
            ipll.innerHTML = '请输入正确格式的邮箱'
            ipll.style.display = 'block'
            setTimeout(() => {
                ipll.style.display = 'none'
            }, 2000)
        }
        else f = 1
    }
    let emyzmm = document.getElementById('em-yzmm')
    emyzmm.onblur = function () {
        let z = /^\d{6}$/
        if (!z.test(emyzmm.value) && emyzmm.value != '') {
            f = 0
            ipll.innerHTML = '验证码错误'
            ipll.style.display = 'block'
            setTimeout(() => {
                ipll.style.display = 'none'
            }, 2000)
        }
        else f = 1
    }
    let signpdd = document.getElementById('sign-pdd')
    signpdd.onblur = function () {
        let reg = /^[a-zA-Z0-9_]{6,16}$/
        if (!reg.test(signpdd.value) && signpdd.value != '') {
            f = 0
            ipll.innerHTML = '请输入正确的密码格式'
            ipll.style.display = 'block'
            setTimeout(() => {
                ipll.style.display = 'none'
            }, 2000)
        }
        else f = 1
    }
    let pdd = document.getElementById('pword11')
    pdd.onblur = function () {
        if (pdd.value != signpdd.value && pdd.value != '') {
            f = 0
            ipll.innerHTML = '两次密码不一致'
            ipll.style.display = 'block'
            setTimeout(() => {
                ipll.style.display = 'none'
            }, 2000)
        }
        else f = 1
    }
    let yzmm = document.querySelector('.yzmm')
    yzmm.onclick = function () {
        console.log("我点击了");
        if (signemm.value) {
            axios({
                url: 'http://49.234.190.148:8888/Login/sendCodeView/',
                method: 'POST',
                data: {
                    email: signemm.value
                }
            }).then(result => {

                yzmm.disabled = true;
                let num = 60
                let timer = setInterval(function () {
                    num--
                    yzmm.innerHTML = `${num}秒后重新获取`
                    if (num === 0) {
                        yzmm.innerHTML = '发送邮箱验证码'
                        yzmm.disabled = false
                        clearInterval(timer)
                    }
                }, 1000)
            }).catch(error => {
                console.error('发送失败', error)
            })
        }
    }
    s.onclick = function (e) {
        // console.log(signemm.value);
        // console.log(emyzmm.value);
        // console.log(signpdd.value);
        // console.log(pdd.value);
        if (pdd.value == '' || signpdd.value == '' || emyzmm.value == '' || signemm.value == '') {
            e.preventDefault()
            ipll.innerHTML = '请完整填写相关内容'
            ipll.style.display = 'block'
            setTimeout(() => {
                ipll.style.display = 'none'
            }, 2000)
        }
        axios({
            url: 'http://49.234.190.148:8888/Login/LoginAlterPasswordView/',
            method: 'POST',
            data: {
                email: signemm.value,
                code: emyzmm.value,
                password: signpdd.value,
                password_confirm: pdd.value
            }
        }).then(result => {
            // if (result.data.code >= 200 && result.data.code <= "300") {
            // if (f && pdd.value != '' && signpdd.value != '' && emyzmm.value != '' && signemm.value != '') {
            //     czmm.style.display = 'none'
            //     log.style.display = 'flex'
            // }

            console.log(result);
            console.log("重置成功");
            var motal1 = document.getElementById('motal3');
            motal1.style.display = 'block';
            setTimeout(function () {
                motal3.style.display = 'none'
            }, 3000);
            // }
        }).catch(error => {
            console.error("Error:", error);
        })



    }

}
let btnn = document.getElementById('zc')
btnn.onclick = function () {
    czmm.style.display = 'none'
    log.style.display = 'flex'
}

let b1 = document.getElementById('btnn')
b1.onclick = function () {
    let signem = document.getElementById('sign-em')
    let obj = JSON.parse(localStorage.getItem('yh'))
    console.log(obj)
    if (obj)
        signem.value = obj.eml;
}
    // function axios({
    //     url,
    //     method = 'POST',
    //     params = {},
    //     data={}
    // })
