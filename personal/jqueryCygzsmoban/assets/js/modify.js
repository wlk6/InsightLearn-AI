
var chos=document.querySelectorAll(".cho");
var infos=document.querySelectorAll('.info-details');
// console.log(token);
// 切换start
chos[0].onclick=function(){
    infos[0].style.display="block";
    infos[1].style.display="none";
    chos[0].classList.add('active');
    chos[1].classList.remove('active')
}
let yzm = document.querySelector('#sendyzm')
yzm.onclick = function () {
    console.log("我点击了");
    if(yx.value){
        axios({
            url:'http://49.234.190.148:8888/Login/sendCodeView/',
            method:'POST',
            data:{
                email: yx.value
            }
        }).then(result=>{
            yzm.disabled=true;
            let num = 60
            let timer = setInterval(function () {
            num--
            yzm.innerHTML = `${num}秒后重新获取`
            if (num === 0) {
            yzm.innerHTML='发送邮箱验证码：'
            yzm.disabled=false
            clearInterval(timer)
            }
            },1000)
        }).catch(error=>{
            console.error('发送失败',error)
        })
    }
}
chos[1].onclick=function(){
    infos[1].style.display="block";
    infos[0].style.display="none";
    chos[1].classList.add('active');
    chos[0].classList.remove('active')
// 验证码发送start
let yxx=document.getElementById('pwdem')
let yzmm = document.querySelector('#sendyzmm')
    yzmm.onclick = function () {
        console.log("我点击了哈哈");
        console.log(yxx.value)
        if(yxx.value){
            axios({
                url:'http://49.234.190.148:8888/Login/sendCodeView/',
                method:'POST',
                data:{
                    email: yxx.value
                }
            }).then(result=>{
                yzmm.disabled=true;
                let num = 60
                let timer = setInterval(function () {
                num--
                yzmm.innerHTML = `${num}秒后重新获取`
                if (num === 0) {
                yzmm.innerHTML='发送邮箱验证码：'
                yzmm.disabled=false
                clearInterval(timer)
                }
                },1000)
            }).catch(error=>{
                console.error('发送失败',error)
            })
        }
    }
    // 验证码发送end
    var next1=document.getElementById('next1');
    var next3=document.getElementById('next3');
    var stepdet1=document.getElementById('stepdet1');
    var stepdet2=document.getElementById('stepdet2');
    var stepdet3=document.getElementById('stepdet3');

    //第一步请求要传送验证码验证
    var userData = JSON.parse(localStorage.getItem('yh'));
    document.getElementById("pwdem").value = userData.eml;
    // 点击下一步（第一步）
    next1.onclick=function(){
        var pwdyzm=document.getElementById('pwdyzm');
                stepdet1.style.display='none';
    stepdet2.style.display='block';
    var img1=document.getElementById("img1");
    img1.style.filter="invert(90%) sepia(30%) saturate(6699%) hue-rotate(306deg) brightness(100%) contrast(87%)";
    var text1=document.getElementById("text1");
    text1.style.color="#ee8686";
    var pgs1=document.getElementById('pgs1');
    pgs1.style.background='-webkit-linear-gradient(90deg, #ee8686,#f96c6c)';
    pgs1.style.background='linear-gradient(90deg, #ee8686,#f96c6c)';

    //第二步
    var newpwd=document.getElementById('newpwd');
    var concernpwd=document.getElementById('concernpwd');
    function newpd() {
        if (!reg.test(newpwd.value)&&newpwd.value!='') {
             altFn4('请输入正确的密码格式')
             return false
         }
            return true 
    }    
    newpwd.onblur = function () {
        newpd()
        setTimeout(() => {
            ipl4.style.display = 'none'
        }, 2000)
    }
    function verpwd() {
        if (newpwd.value != concernpwd.value&&newpwd.value!='')
        {
            altFn5('两次密码不一致')
            return false
        }
        return true
    }
    concernpwd.onblur = function () {
        verpwd()
        setTimeout(() => {
            ipl5.style.display = 'none'
        },2000)
    }

}
next3.onclick=function(){
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    localStorage.removeItem('isLoggedIn');
    window.location.href = "../../../../login/log/log.html";
}
}
//弹窗警告start
var ipl1 = document.querySelector('#ipl1')
var ipl2 = document.querySelector('#ipl2')
var ipl3 = document.querySelector('#ipl3')
var ipl4 = document.querySelector('#ipl4')
var ipl5 = document.querySelector('#ipl5')
var ipl6 = document.querySelector('#ipl6')
function altFn1(msg) {
    ipl1.innerHTML = msg;
    ipl1.style.display = 'block';
}
function altFn2(msg) {
    ipl2.innerHTML = msg;
    ipl2.style.display = 'block';
}
function altFn3(msg) {
    ipl3.innerHTML = msg;
    ipl3.style.display = 'block';
}
function altFn4(msg) {
    ipl4.innerHTML = msg;
    ipl4.style.display = 'block';
}
function altFn5(msg) {
    ipl5.innerHTML = msg;
    ipl5.style.display = 'block';
}
function altFn6(msg) {
    ipl6.innerHTML = msg;
    ipl6.style.display = 'block';
}
// 弹窗警告end
//邮箱验证start
let reg = /^[a-zA-Z0-9_]{6,16}$/
let yx=document.getElementById('nickem');
function veremal() {
    let regg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9_.-]+\.[a-zA-Z]{2,5}$/
    if (!regg.test(yx.value)&&yx.value!='') {
        altFn2('请输入正确的邮箱格式')
        return false
    }
    return true
}
yx.onblur = function () {
    veremal()
    setTimeout(() => {
        ipl2.style.display = 'none'
    }, 2000)
}
// 邮箱验证end
//手机号验证start
let ph = document.getElementById('nicktel')
    function verpho() {
        
        let rreg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
        if (!rreg.test(ph.value)&&ph.value!='') {
            altFn1('请输入正确的手机号')
            return false
        }
        return true
    }
    ph.onblur = function () {
        verpho()
        setTimeout(() => {
            ipl1.style.display = 'none'
        }, 2000)
    }
    // 手机号验证end
//用户名验证start
let nickname=document.querySelector("#nickname");
var save=document.querySelector('#save');
function veryhm() {
    if (nickname.value=='') {
        altFn3('用户名不能为空')
        return false
    }
    return true
}
nickname.onblur = function () {
    veryhm()
    setTimeout(() => {
        ipl3.style.display = 'none'
    }, 2000)
}
// 用户名验证end
var userData = JSON.parse(localStorage.getItem('yh'));
document.getElementById("nickname").value = userData.uname;
document.getElementById("nicktel").value = userData.pho
document.getElementById("nickem").value = userData.eml;
if (userData.gender === "male") {
    document.getElementById("contactChoice2").checked = true;
} else if (userData.gender === "female") { 
    document.getElementById("contactChoice1").checked = true;
} else {
    document.getElementById("contactChoice3").checked = true;
}
if(userData.birthday==null){
    document.getElementById("inputdate").value=null;
}
else{
    document.getElementById("inputdate").value = userData.birthday;
}
document.getElementById("province1").value = userData.province;
document.getElementById("city1").value = userData.city;
document.getElementById("district1").value = userData.country;
if(userData.introduce==null){
    document.getElementById("abstract").value=null;
}
else{
    document.getElementById("abstract").value = userData.introduce;
}
// 保存start
save.onclick=function(e){

    e.preventDefault();
    console.log("我点击了");
    if(!verpho()){
        e.preventDefault()   
    }if (!veremal()) {
        e.preventDefault()
    }if (!veryhm()) {
        e.preventDefault()
    }
    let obj = {
        uname: document.getElementById("nickname").value,
        pho: document.getElementById("nicktel").value,
        eml: document.getElementById("nickem").value,
        gender: document.querySelector('input[name="contact"]:checked').value,
    birthday: document.getElementById("inputdate").value,
    province: document.getElementById("province1").value,
    city: document.getElementById("city1").value,
    country: document.getElementById("district1").value,
    introduce: document.getElementById("abstract").value
    }
    var isModified = JSON.stringify(userData) !== JSON.stringify(obj);
    var ismodified=document.querySelector('.ismodified');
    if (!isModified) {
        ismodified.style.display='block';
        ismodified.innerText='您尚未做出任何修改！';
        setTimeout(function() {
            ismodified.style.display = "none";
        }, 1000);
        return;
    }
   
    axios({
        url: 'http://49.234.190.148:8888/Login/alterInformationView/',
        method: 'POST',
        headers: {
            'token': `${token}`
        },
        data: {
        username: document.getElementById("nickname").value,
        // phone: document.getElementById("nicktel").value,
        // email: document.getElementById("nickem").value,
        gender: document.querySelector('input[name="contact"]:checked').value,
        birthday: document.getElementById("inputdate").value,
        province: document.getElementById("province1").value,
        city: document.getElementById("city1").value,
        country: document.getElementById("district1").value,
        introduce: document.getElementById("abstract").value
        }
    }).then(result => {
        
        console.log(result)
        if (result.data.code >= 200 && result.data.code <= "300") {
           
            localStorage.setItem('yh', JSON.stringify(obj));
            console.log(result);
            ismodified.style.display='block';
            ismodified.innerText='保存成功';
            setTimeout(function() {
                ismodified.style.display = "none";
            }, 1000);
        }
    }).catch(error => {
        console.error("Error:",error);
    })
}