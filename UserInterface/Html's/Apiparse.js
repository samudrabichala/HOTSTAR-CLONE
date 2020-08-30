var genrearr = document.getElementsByClassName("genre");
var yeararr = document.getElementsByClassName("year");
var langarr = document.getElementsByClassName("language");

var url = 'https://dinakarj78.github.io/cloneapi.github.io/Data.json';
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var Jsonobj = JSON.parse(this.responseText);
        setdescription(Jsonobj);
        (function(parseddata) {
            var titlearr = document.getElementsByClassName("title");
            var titles = [];
            var totallength = Object.keys(parseddata.Movies).length;
            for (let i = 0; i < totallength; i++) {
                titles[i] = parseddata.Movies[i].title;
                titlearr[i].innerHTML = titles[i];

            }
        })(Jsonobj);
    }

}

function setdescription(parseddata) {
    var genres = [];
    var lang = [];
    var totallength = Object.keys(parseddata.Movies).length;
    for (let i = 0; i < totallength; i++) {
        lang[i] = parseddata.Movies[i].language;
        genres[i] = parseddata.Movies[i].category;
        genrearr[i].innerHTML = genres[i];
        langarr[i].innerHTML = lang[i];
    }
}