let songs = ["Dope","The Truth Untold","Dimple","Jealous"]
songs.forEach(function(songs) {
    $("#songs").append(`<p> I want to listen to "${songs}" </p>`)
})
let songArtists = ["BTS", "Chris Brown"]
songArtists.forEach(function(songs) {
    $("#songartists").append(`<p> The artists are "${songs}"`)
})
let songImage = []
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
