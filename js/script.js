let songdata = {
    songTitle: "The Truth Untold",
    songArtist: "BTS",
    songImage: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjJxsyCmqXnAhVEJTQIHeboAbAQjRx6BAgBEAQ&url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSEC1ihcXegp1-DOra8NPcBToXGs_uMsh2Z5L7cxfpM_KBDHSWv&psig=AOvVaw0WBjJ4orNwgs5J-h6AVp1k&ust=1580263390421573",
    songLength: "",
    songLink: "https://www.youtube.com/watch?v=eRNJGMZ_zpw",

}
let songs = [songdata, ]
$("#add").click(function() {
    songs.forEach (function(song){
    $("#songs").append("<p> songTitle: "+song["songTitle"]+"</p>");
$("#songs").append("<p> songArtists: "+song["songArtist"]+"</p>");
$("#songs").append("<p> songImage: "+song["songImage"]+"</p>");
$("#songs").append("<p> songLength: "+song["songLength"]+"</p>");
$("#songs").append("<p> songLink: "+song["songLink"]+"</p>");
    })
})
songs.forEach(function(songs) {
    $("#songs").append(`<p> I want to listen to "${songs}" </p>`)
})
let songArtists = ["BTS", "Chris Brown"]
songArtists.forEach(function(songs) {
    $("#songartists").append(`<p> The artists are "${songs}"`)
})
let songImage = ["https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjJxsyCmqXnAhVEJTQIHeboAbAQjRx6BAgBEAQ&url=http%3A%2F%2Ft0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSEC1ihcXegp1-DOra8NPcBToXGs_uMsh2Z5L7cxfpM_KBDHSWv&psig=AOvVaw0WBjJ4orNwgs5J-h6AVp1k&ust=1580263390421573"]
songImage.forEach(function(songs) { 
    $("#songImage").append(`<p> This is how the artists look like" "${songs}" </p>`)
})
let songLink = ["https://www.youtube.com/watch?v=8JVytJm8X2g", "https://www.youtube.com/watch?v=eRNJGMZ_zpw", "https://www.youtube.com/watch?v=B1jiZ8-JLo0", "https://www.youtube.com/watch?v=_JkFoQmuJpE"]
songLink.forEach(function(songs) {
    $("#songLink").append(`<p> The link for the songs are "${songs}" </p>`)
})
let songLength = ["BTS", "Chris Brown"]
songLength.forEach(function(songs) {
    $("#songLength").append(`<p> The artists are "${songs}"`)
})
$("#add").click(function()
{let songName = $("#song").val();
songs.push (songName)
songs.forEach(function(song) {
    console.log (song)
    $("#songs").append(`<p> I want to listen to "${song}" </p>`)
})
}) 
let songs
let songArtists
let songImage
let songLink
let songLength

