$(document).ready(function(){
    $.getJSON("https://us-central1-elevated-cargo-355220.cloudfunctions.net/backend-function", function(data){
        $("#visitor-count").text(data.currentVisitor);
        $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 1000
        });
    }).fail(function(){
        console.log("An error has occurred while fetching the visitor count.");
    });
});
