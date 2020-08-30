"use strict";

function openvideo() {
  window.open('file:///home/dinakar/Desktop/HTMLS/HOTSTARCLONE/gotintro.html');
}

var url = 'https://dinakarj78.github.io/cloneapi.github.io/Data.json';
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.send();

request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var Jsonobj = JSON.parse(this.responseText);
    var exp = Jsonobj.Movies[0].title;
    console.log(exp);
    setitle(Jsonobj);
  }
};

var titlearr = document.getElementsByClassName("title");
var genrearr = document.getElementsByClassName("genre");
var yeararr = document.getElementsByClassName("year");
var langarr = document.getElementsByClassName("language");
/*            thumbnail1(Jsonobj);
thumbnail2(Jsonobj);
thumbnail3(Jsonobj);
thumbnail4(Jsonobj);
thumbnail5(Jsonobj);
thumbnail6(Jsonobj);
thumbnail7(Jsonobj);
thumbnail9(Jsonobj);
named(Jsonobj);
thumbnail10(Jsonobj);
thumbnail11(Jsonobj);
thumbnail12(Jsonobj);
thumbnail13(Jsonobj);
thumbnail14(Jsonobj);
/*IIFE*/

/*(function(parseddata) {
            var title, genre, year, language;
            title = parseddata.Edgeoftomorrow.title;
            genre = parseddata.Edgeoftomorrow.category;
            year = parseddata.Edgeoftomorrow.yearofrelease;
            language = parseddata.Edgeoftomorrow.language;
            titlearr[8].innerText = title;
            genrearr[8].innerText = genre;
            yeararr[8].innerText = year;
            langarr[8].innerText = language;
            console.log(titlearr[8]);
        })(Jsonobj);
    }
}
/*event listeners*/

/*function alertuser() {
    alert("ADDED TO WATCH LIST");
}

var titlearr = document.getElementsByClassName("title");
var genrearr = document.getElementsByClassName("genre");
var yeararr = document.getElementsByClassName("year");
var langarr = document.getElementsByClassName("language");
console.log(titlearr);

function thumbnail1(parseddata) {
    var title, genre, year, language;
    title = parseddata.specialops.name;
    genre = parseddata.specialops.category;
    year = parseddata.specialops.yearofrelease;
    language = parseddata.specialops.language;
    titlearr[0].innerText = title;
    genrearr[0].innerText = genre;
    yeararr[0].innerText = year;
    langarr[0].innerText = language;
    console.log(titlearr[0]);
}

function thumbnail2(parseddata) {
    var title, genre, year, language;
    title = parseddata.reasonswhy.title;
    genre = parseddata.reasonswhy.category;
    year = parseddata.reasonswhy.yearofrelease;
    language = parseddata.reasonswhy.language;
    titlearr[1].innerText = title;
    genrearr[1].innerText = genre;
    yeararr[1].innerText = year;
    langarr[1].innerText = language;
    console.log(titlearr[1]);
}

function thumbnail3(parseddata) {
    var title, genre, year, language;
    title = parseddata.idiots.title;
    genre = parseddata.idiots.category;
    year = parseddata.idiots.yearofrelease;
    language = parseddata.idiots.language;
    titlearr[2].innerText = title;
    genrearr[2].innerText = genre;
    yeararr[2].innerText = year;
    langarr[2].innerText = language;
    console.log(titlearr[2]);
}

function thumbnail4(parseddata) {
    var title, genre, year, language;
    title = parseddata.gameofthrones.name;
    genre = parseddata.gameofthrones.category;
    year = parseddata.gameofthrones.yearofrelease;
    language = parseddata.gameofthrones.language;
    titlearr[3].innerText = title;
    genrearr[3].innerText = genre;
    yeararr[3].innerText = year;
    langarr[3].innerText = language;
    console.log(titlearr[3]);
}

function thumbnail5(parseddata) {
    var title, genre, year, language;
    title = parseddata.westworld.title;
    genre = parseddata.westworld.category;
    year = parseddata.westworld.yearofrelease;
    language = parseddata.westworld.language;
    titlearr[4].innerText = title;
    genrearr[4].innerText = genre;
    yeararr[4].innerText = year;
    langarr[4].innerText = language;
    console.log(titlearr[4]);

}

function thumbnail6(parseddata) {
    var title, genre, year, language;
    title = parseddata.gameofthrones.name;
    genre = parseddata.gameofthrones.category;
    year = parseddata.gameofthrones.yearofrelease;
    language = parseddata.gameofthrones.language;
    titlearr[5].innerText = title;
    genrearr[5].innerText = genre;
    yeararr[5].innerText = year;
    langarr[5].innerText = language;
    console.log(titlearr[5]);

}
/*anonymous function expression*/

/*var thumbnail7 = function(parseddata) {
        var title, genre, year, language;
        title = parseddata.saaho.title;
        genre = parseddata.saaho.category;
        year = parseddata.saaho.yearofrelease;
        language = parseddata.saaho.language;
        titlearr[6].innerText = title;
        genrearr[6].innerText = genre;
        yeararr[6].innerText = year;
        langarr[6].innerText = language;
        console.log(titlearr[6]);
    }
    /*named function expression*/

/*var named = function thumbnail8(parseddata) {
    var title, genre, year, language;
    title = parseddata.Moneyheist.title;
    genre = parseddata.Moneyheist.category;
    year = parseddata.Moneyheist.yearofrelease;
    language = parseddata.Moneyheist.language;
    titlearr[7].innerText = title;
    genrearr[7].innerText = genre;
    yeararr[7].innerText = year;
    langarr[7].innerText = language;
    console.log(titlearr[7]);
}

function thumbnail9(parseddata) {
    console.log('hi');
    var title, genre, year, language;
    title = parseddata.himiym.title;
    genre = parseddata.himiym.category;
    year = parseddata.himiym.yearofrelease;
    language = parseddata.himiym.language;
    titlearr[9].innerText = title;
    genrearr[9].innerText = genre;
    yeararr[9].innerText = year;
    langarr[9].innerText = language;
    console.log(titlearr[9]);

}

function thumbnail10(parseddata) {
    var title, genre, year, language;
    title = parseddata.baaghi.name;
    genre = parseddata.baaghi.category;
    year = parseddata.baaghi.yearofrelease;
    language = parseddata.baaghi.language;
    titlearr[12].innerText = title;
    genrearr[12].innerText = genre;
    yeararr[12].innerText = year;
    langarr[12].innerText = language;
    console.log(titlearr[12]);
}

function thumbnail11(parseddata) {
    var title, genre, year, language;
    title = parseddata.Goodachari.title;
    genre = parseddata.Goodachari.category;
    year = parseddata.Goodachari.yearofrelease;
    language = parseddata.Goodachari.language;
    titlearr[13].innerText = title;
    genrearr[13].innerText = genre;
    yeararr[13].innerText = year;
    langarr[13].innerText = language;
    console.log(titlearr[13]);
}



function thumbnail12(parseddata) {
    var title, genre, year, language;
    title = parseddata.bahubali.title;
    genre = parseddata.bahubali.category;
    year = parseddata.bahubali.yearofrelease;
    language = parseddata.bahubali.language;
    titlearr[14].innerText = title;
    genrearr[14].innerText = genre;
    yeararr[14].innerText = year;
    langarr[14].innerText = language;
    console.log(titlearr[14]);
}

function thumbnail13(parseddata) {
    var title, genre, year, language;
    title = parseddata.bahubali2.title;
    genre = parseddata.bahubali2.category;
    year = parseddata.bahubali2.yearofrelease;
    language = parseddata.bahubali2.language;
    titlearr[15].innerText = title;
    genrearr[15].innerText = genre;
    yeararr[15].innerText = year;
    langarr[15].innerText = language;
    console.log(titlearr[14]);
}

function thumbnail14(parseddata) {
    var title, genre, year, language;
    title = parseddata.missionimpossible6.title;
    genre = parseddata.missionimpossible6.category;
    year = parseddata.missionimpossible6.yearofrelease;
    language = parseddata.missionimpossible6.language;
    titlearr[16].innerText = title;
    genrearr[16].innerText = genre;
    yeararr[16].innerText = year;
    langarr[16].innerText = language;
    console.log(titlearr[14]);
}*/