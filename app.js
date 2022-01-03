console.log("Let's get this party started!");



//javascript, jQuery
const section = document.getElementById('section');
const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=UcA2QBIbWiL3tNbfNPwZjXRQvpQKZeFg&limit=1");
xhr.done(function(data) { console.log("success got data", data); 
console.log(data.data[0].url)
//return data.data[0].url;
const img = document.createElement('img');
section.append(img);
//console.log(data.url)
});



            