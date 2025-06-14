// var yourname=document.getElementById("yourname");
// var yourtel=document.getElementById("yourtel");
// var yourem=document.getElementById("yourem");
// if(localStorage.getItem('username')){
//   yourname.innerText=localStorage.getItem('username');
// }
// if(localStorage.getItem('userphone')){
//   yourtel.innerText=localStorage.getItem('userphone');
// }
// if(localStorage.getItem('userem')){
//   yourem.innerText=localStorage.getItem('userem');
// }
var userData = JSON.parse(localStorage.getItem('yh'));
document.getElementById("yourname").innerText = userData.uname;
document.getElementById("yourtel").innerText = userData.pho;
document.getElementById("yourem").innerText = userData.eml;

var avatarSrc = localStorage.getItem('lastAvatarUrl');
if (avatarSrc) {
    document.getElementById('bg_about').src = avatarSrc;
} else {
    fetch('url')
        .then(response => response.json())
        .then(data => {
            var avatarSrc = data.avatarSrc;
            document.getElementById('bg_about').src = avatarSrc;
            localStorage.setItem('avatarSrc', avatarSrc);
        })
        .catch(error => {
            console.error('Error occurred while fetching avatar:', error);
        });
}

