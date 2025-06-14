$(document).ready(function() {
    function performSearch(searchTerm) {
        var searchBody = document.querySelector('.search-body');
        searchBody.innerHTML = '';
        console.log('Performing search for term:', searchTerm);
        $.ajax({
            url: "http://49.234.190.148:8888/course/SearchView/",
            type: "POST",
            data: { keyword: searchTerm },
            beforeSend: function(xhr) {
                var token = localStorage.getItem('token');
                if (token) {
                    xhr.setRequestHeader('token', token);
                }
            },
            success: function(responseData) {
                console.log('Received search response:', responseData);
                if (responseData.msg && responseData.msg.length > 0) {
                    fillRecommendations(responseData.msg, searchBody);

                    var newURL = window.location.href.split('?')[0] + '?q=' + encodeURIComponent(searchTerm);
                    window.history.pushState({ path: newURL }, '', newURL);
                } else{
                    searchBody.innerHTML = "没有找到相关结果,换个关键词试试..."; 
                }
            },
            error: function(xhr, status, error) {
                console.error("Error fetching search results:", error);
            }
        });
    }

    function fillRecommendations(data, container) {
        if (data) {
            console.log('Filling recommendations with data:', data);
            data.forEach(item => {
                var recomDiv = document.createElement('div');
                recomDiv.classList.add('searc');

                var recomNameDiv = document.createElement('div');
                recomNameDiv.classList.add('searc-name');
                recomNameDiv.textContent = item.exam_name || item.work_name;
                var recomTypeDiv = document.createElement('div');
                recomTypeDiv.classList.add('searc-type');
                recomTypeDiv.textContent = item.exam_type || item.work_type || "";
                if (item.exam_id && item.exam_type) {
                    recomDiv.addEventListener('click', function() {
                        window.location.href = `../../../../oo/exam/exam/test/html/exam_id_${item.exam_id}.html`;
                    });
                
                    recomDiv.appendChild(recomTypeDiv);
                } else if (item.work_id && item.work_name) {
                    recomDiv.addEventListener('click', function() {
                        window.location.href = `../../../../oo/exam/exam/test/html/work_id_${item.work_id}.html`;
                    });
                
                    recomDiv.appendChild(recomTypeDiv);
                }
                recomDiv.appendChild(recomNameDiv);
                recomDiv.appendChild(recomTypeDiv);

                container.appendChild(recomDiv);
            });
        }
    }

    $("#searchButton").click(function() {
        var searchTerm = $("#searchInput").val().trim();
        if (searchTerm !== "") {
            performSearch(searchTerm);
        }
    });

    $("#searchInput").keypress(function(event) {
        if (event.which === 13) {
            var searchTerm = $("#searchInput").val().trim();
            if (searchTerm !== "") {
                performSearch(searchTerm);
            }
        }
    });

    var urlParams = new URLSearchParams(window.location.search);
    var searchTermFromURL = urlParams.get('q');
    if (searchTermFromURL) {
        $("#searchInput").val(searchTermFromURL);
        performSearch(searchTermFromURL);
    }
});
