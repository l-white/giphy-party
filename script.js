const imageSection = document.getElementById('addImages');
const form = document.querySelector('form');
const button = document.getElementById('remove');

form.addEventListener('submit', async function(event){
  event.preventDefault();
  const input = document.getElementById('search').value;
  console.log(input);
  input.value = "";
  const res = await axios.get(`http://api.giphy.com/v1/gifs/search`, {
    params: {
      q: input,
      api_key: "UcA2QBIbWiL3tNbfNPwZjXRQvpQKZeFg"
    }
  })
  const img = document.createElement('img');
  img.src = res.data.data[0].url;
  imageSection.append(img);
});

button.addEventListener('click', function(){
  imageSection.innerHTML = "";
})