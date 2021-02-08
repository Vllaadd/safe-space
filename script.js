$(document).ready(function () {


    //IMAGE CONTAINER
        $('#get-image').click(function () {
            var userInput = $('#user-input').val();
            var apiKey = '18310078-72a2f7e072a362d9cdc81c6c9';
            var queryUrl = 'https://pixabay.com/api/?key=' + apiKey + '&q=' + userInput + '&image_type=photo';
    
    
    
            $.ajax({
                url: queryUrl,
                type: 'GET',
            }).then(function (data) {
                $('#image').empty();
                var imgLink = data.hits[4].largeImageURL;
                var imgTag = $('<img>').attr('src', imgLink).addClass('img-fluid');
                var imgDisplay = $('#image').append(imgTag);
            })
    
        })
    
    
    // LOCAL STORAGE
        var userText = document.querySelector('#journal-text');
                                     
    
        setInterval(function(){ 
            localStorage.setItem('journal-text', userText.value); 
        }, 1000);
    
    //RANDOM INSPIRATIONAL QUOTES CONTAINER
    //add on-click event to get quote button id quote-button
        $("#quote-button").click(function () {
    
            $.ajax({
                url: "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?",
                data: {
                    method: 'getQuote',
                    lang: "en",
                    format: "json"
                },
                success: function (response) {
                    console.log(response);
    
                    $("#random-quote").empty();
                    $("#author").empty();
                    //grab quote text and author
                    var quoteText = response.quoteText;
                    console.log(quoteText);
    
                    var quoteAuthor = "-- " + response.quoteAuthor;
                    console.log(quoteAuthor);
    
                    //append to container
                    $("#random-quote").append(quoteText);
                    $("#author").append(quoteAuthor);
    
                }
    
            });
        });
    
        //
    
    
    })