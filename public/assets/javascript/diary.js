console.log("this is linked");

$("#cms").on("submit", function(event) {
    event.preventDefault() 
    var post = {
        author: $("#author").val().trim(),
        body: $("#body").val().trim(),
        resultsOne: "test",
        resultsOneDes: "test"
    };
console.log(post);
$.post("/api/post", post).then(function(serverRes) {
    console.log(serverRes);
})
})
