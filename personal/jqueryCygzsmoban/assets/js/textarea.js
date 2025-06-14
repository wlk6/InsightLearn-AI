
var el = document.getElementById('abstract');
el.addEventListener('input',function () {
var len =  txtCount(this);
var countElement=document.getElementById('textCount');
countElement.innerHTML = len;
if (len > 50) {
    countElement.style.color='#f75959'
  }else{
    countElement.style.color='#aaa'
  }
});
function txtCount(el) {
var val = el.value; 
var eLen = val.length; 
return eLen;
}
