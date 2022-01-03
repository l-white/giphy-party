const imageSection = document.getElementById('addImages');
const form = document.querySelector('form');
const button = document.getElementById('remove');

function generateRandomNum(){
  return Math.floor(Math.random(10) * 24);
}

form.addEventListener('submit', async function(event){
  event.preventDefault();
  const input = document.getElementById('search').value;
  input.value = "";
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: {
      q: input,
      api_key: "UcA2QBIbWiL3tNbfNPwZjXRQvpQKZeFg"
    }
  })
  const img = document.createElement('img');
  const randomIndexNum = generateRandomNum();
  img.setAttribute("height", 300);
  img.setAttribute("width", 300);
  img.style.margin = "10px";
  img.src = res.data.data[randomIndexNum].images.original.url;
  imageSection.append(img);
});

button.addEventListener('click', function(){
  imageSection.innerHTML = "";
});