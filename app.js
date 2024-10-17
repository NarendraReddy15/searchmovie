let api='https://www.omdbapi.com/?apikey=1c98da11&t=';

let title = document.getElementById('title');
const ratings = document.getElementById('ratings');
const director = document.getElementById('director')
const genre = document.getElementById('genre')
const desc = document.getElementById('desc')
const awards = document.getElementById('awards')
const collection = document.getElementById('collection')
const date = document.getElementById('date')

let poster=document.getElementById('poster')

function searchkey(){
  let searched=document.getElementById('in');
let key=api+searched.value;
searched.value="";
fetch(key).then((data)=>{
return data.json();
}).then((data)=>{

  director.innerText=data.Director;

 
awards.innerText = data. Awards;
actors.innerText = data.Actors;
desc.innerText = data.Plot;
genre. innerText = data.Genre;
collection. innerText = data.BoxOffice;
ratings.innerText = data. imdbRating;
title.innerText = data.Title;
writer.innerText = data.Writer;
date.innerText=data.Released
poster.src= data.Poster


})

}