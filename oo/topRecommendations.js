// 轮播
$('.topRecommendations').on('click', '.next', function() {
    var $parent = $(this).closest('.topRecommendations');
    var $card = $parent.find('.card');
    var lastCard = $parent.find(".card-list .card").length - 1;
    var prependList = function() {
        if ($card.hasClass('activeNow')) {
            var $slicedCard = $card.slice(lastCard).removeClass('transformThis activeNow');
            $parent.find('.card-list').prepend($slicedCard);
        }
    };
    $parent.find('li').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
    setTimeout(function() {
        prependList();
    }, 150);
    return false;
});
$('.topRecommendations').on('click', '.prev', function() {
    var $parent = $(this).closest('.topRecommendations');
    var $card = $parent.find('.card');
    var appendToList = function() {
        if ($card.hasClass('activeNow')) {
            var $slicedCard = $card.slice(0, 1).addClass('transformPrev');
            $parent.find('.card-list').append($slicedCard);
        }
    };

    $parent.find('li').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
    setTimeout(function() {
        appendToList();
    }, 150);
    return false;
});
// 分类
var classes = document.querySelectorAll('.class');
var topRecommendations = document.querySelectorAll('.topRecommendations');

classes.forEach(function(element, index) {
    element.addEventListener('click', function() {
        topRecommendations.forEach(function(item, i) {
            if (index === i) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
// 推荐
function fetchAndFillRecommendations() {
    var loadingDiv = document.querySelector('.loading');
    loadingDiv.style.display = 'block';
    document.querySelector('.change img').style.animation = 'spin 1s infinite linear';
    document.querySelector('.loading img').style.animation = 'spin 3s infinite linear';
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://49.234.190.148:8888/course/recommendationView/', true);
    xhr.setRequestHeader('token', localStorage.getItem('token'));
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var responseData = JSON.parse(xhr.responseText);
            var recomBody = document.querySelector('.recom-body');
            recomBody.innerHTML = ''; 
            
            if (responseData.msg instanceof Array) {
                fillRecommendations(responseData.msg, recomBody);
            } else {
                for (var key in responseData.msg) {
                    if (responseData.msg.hasOwnProperty(key)) {
                        fillRecommendations(responseData.msg[key], recomBody);
                    }
                }
            }
  
            loadingDiv.style.display = 'none';
            document.querySelector('.change img').style.animation = '';
            document.querySelector('.loading img').style.animation = ''; 
        }
    };
    xhr.send();
}


function fillRecommendations(data, container) {
  data.forEach(item => {
      var recomDiv = document.createElement('div');
      recomDiv.classList.add('recom');

      var recomNameDiv = document.createElement('div');
      recomNameDiv.classList.add('recom_name');
      recomNameDiv.textContent = item.exam_name || item.work_name;
      recomDiv.appendChild(recomNameDiv);

      if (item.exam_id && item.exam_type) {
          var recomTypeDiv = document.createElement('div');
          recomTypeDiv.classList.add('recom_type');
          recomTypeDiv.textContent = item.exam_type;
      
          recomDiv.addEventListener('click', function() {
              window.location.href = `../oo/exam/exam/test/html/exam_id_${item.exam_id}.html`;
          });
      
          recomDiv.appendChild(recomTypeDiv);
      } else if (item.work_id && item.work_name) {
          var recomTypeDiv = document.createElement('div');
          recomTypeDiv.classList.add('recom_type');
          recomTypeDiv.textContent = '作业';
      
          recomDiv.addEventListener('click', function() {
              window.location.href = `../oo/exam/exam/test/html/work_id_${item.work_id}.html`;
          });
      
          recomDiv.appendChild(recomTypeDiv);
      }

      container.appendChild(recomDiv);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchAndFillRecommendations();
});

document.querySelector('.change').addEventListener('click', function() {
  fetchAndFillRecommendations();
});

//   搜索
  var searchButton = document.getElementById("searchButton");
  var searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", function() {
    search();
  });

  searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      search();
    }
  });
  function search() {
    var searchTerm = searchInput.value.trim();
    if (searchTerm !== "") {
      var searchURL = "../personal/jqueryCygzsmoban/search.html?q=" + encodeURIComponent(searchTerm); 
      window.location.href = searchURL;
    }
  }