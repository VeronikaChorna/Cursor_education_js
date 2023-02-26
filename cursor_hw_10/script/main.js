const seasons = {
  "rain": 'url("./images/rain_forest.jpg")',
  "heavy-rain": 'url("./images/heavy_rain.jpg")',
  "thunder": 'url("./images/thunder.jpg"',
  "birds": 'url("./images/birds.png"',
  "forest": 'url("./images/night_forest.jpg"',
}

function updatePage(valueId) {
  let link = document.getElementById('container');
  link.style.background = seasons[valueId];
  link.style.backgroundSize = 'cover';
  document.querySelectorAll('audio').forEach(element => {
    element.pause();
  });
  document.getElementById('sound-' + valueId).play();
}

document.addEventListener("keydown", (e) => {
  if(e.code === "KeyA") {
    updatePage('rain');
  } else if(e.code === "KeyS"){
    updatePage('heavy-rain');
  } else if(e.code === "KeyD"){
    updatePage('thunder');
  } else if(e.code === "KeyF"){
    updatePage('birds');
  } else if(e.code === "KeyG"){
    updatePage('forest');
  } 
});


