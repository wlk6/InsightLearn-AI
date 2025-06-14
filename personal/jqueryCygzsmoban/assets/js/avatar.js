const token = localStorage.getItem('token');
const baseUrl = 'http://49.234.190.148:8888';
function setAvatar(avatarUrl) {
    const fullUrl = baseUrl + avatarUrl + '?timestamp=' + new Date().getTime();
    document.getElementById('previewImage').src = fullUrl;
    console.log(fullUrl);
    localStorage.setItem('lastAvatarUrl', fullUrl);
}

function setDefaultAvatar() {
    document.getElementById('previewImage').src = 'assets\\img\\avatar1.jpg';
}

var avat = document.getElementById('avat');
var inputAvatar = document.querySelector('.inputAvatar');
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('lastAvatarUrl')) {
        document.getElementById('previewImage').src = 'assets\\img\\avatar1.jpg';
    } else {
        document.getElementById('previewImage').src = localStorage.getItem('lastAvatarUrl');
    }
});
avat.onclick = function () {
    inputAvatar.style.display = 'block';
}

window.addEventListener('click', function (event) {
    if (event.target !== avat && !avat.contains(event.target) && event.target !== inputAvatar && !inputAvatar.contains(event.target)) {
        inputAvatar.style.display = 'none';
    }
});

function previewAvatar(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('previewImage').src = e.target.result;
            uploadAvatarToServer(e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function selectPresetAvatar(src) {
    fetch('assets/img/' + src)
        .then(response => response.blob())
        .then(blob => {
            var reader = new FileReader();
            reader.onload = function () {
                uploadAvatarToServer(reader.result);
            }
            reader.readAsDataURL(blob);
        })
        .catch(error => console.error('Error occurred while fetching preset avatar:', error));
}

function uploadAvatarToServer(avatarData) {
    var uploadingMessage = document.getElementById('uploadingMessage');
    uploadingMessage.style.display = 'block';

    if (avatarData.startsWith('data:image')) {
        fetch('http://49.234.190.148:8888/Login/changeAvatarView/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': token
            },
            body: JSON.stringify({ avatar: avatarData })
        })
            .then(response => response.json())
            .then(data => {
                if (data.code === 200) {
                    console.log('Avatar uploaded successfully');
                    setAvatar(data.data);
                    uploadingMessage.textContent = '已上传';
                    setTimeout(function () {
                        uploadingMessage.style.display = 'none'; 
                    }, 2000);
                } else {
                    console.error('Failed to upload avatar:', data.msg);
                }
            })
            .catch(error => {
                console.error('Error occurred while uploading avatar:', error);
            });
    } else {
        fetch(avatarData)
            .then(response => response.blob())
            .then(blob => {
                var reader = new FileReader();
                reader.onload = function () {
                    uploadAvatarToServer(reader.result);
                }
                reader.readAsDataURL(blob);
            })
            .catch(error => console.error('Error occurred while fetching preset avatar:', error));
    }
}
