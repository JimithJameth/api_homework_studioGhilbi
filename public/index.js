var app = function () {
  var url = "https://ghibliapi.herokuapp.com/films";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url,callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load',callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var films = JSON.parse(jsonString);
  populateList(films);
}

var populateList = function(films){
  var ul = document.getElementById('films');

  films.forEach(function(film){
    var li = document.createElement('li');
    var li2 = document.createElement('li2');
    li.innerText = film.title;
    li2.innterText = film.description;
 
  ul.appendChild(li);
  ul.appendChild(li2);
 });
}


window.addEventListener('load', app);
