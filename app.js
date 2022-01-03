console.log("Let's get this party started!");
const section = document.getElementById('section');

const form = document.querySelector('form');
form.addEventListener('submit', async function(evt){
  evt.preventDefault();
  let search = document.getElementById('search').value;
  console.log(search);
  
  
  const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: search,
      api_key: "UcA2QBIbWiL3tNbfNPwZjXRQvpQKZeFg"
    }
  })
  let image = document.createElement('img');
  image.src = res.data.data[0].url;
  section.append(image);
  search.value = '';
});
form.reset();

const button = document.getElementById('remove');
button.addEventListener('click', function(){
  section.innerHTML = '';
});


            