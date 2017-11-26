window.addEventListener('load', function() {
  var elements = {
    txtMarble: document.querySelector("#marbles"),

    txtMosaicEndless: document.querySelector("#endless-sky"),
    btnMosaicEndless: document.querySelector("#build-endless-sky"),

    txtMosaicUndersea: document.querySelector("#undersea"),
    btnMosaicUndersea: document.querySelector("#build-undersea"),

    txtMosaicSequined: document.querySelector("#sequined"),
    btnMosaicSequined: document.querySelector("#build-sequined"),

    txtMosaicGlow: document.querySelector("#glow"),
    btnMosaicGlow: document.querySelector("#build-glow")
  };

  var numMarble = 0;
  var mosaicEndless = {
    count: 0,
    cost: 10,
    marble: 1
  };
  var mosaicUndersea = {
    count: 0,
    cost: 250,
    marble: 10
  };
  var mosaicSequined = {
    count: 0,
    cost: 500,
    marble: 25
  };
  var mosaicGlow = {
    count: 0,
    cost: 1000,
    marble: 50
  };

  document.querySelector("#gather-marble").addEventListener('click', function(evt) {
    numMarble++;
    updateMarbleText();
  });

  document.querySelector("#build-endless-sky").addEventListener('click', function(evt) {
    if (numMarble < mosaicEndless.cost) return;

    mosaicEndless.count += 1;
    numMarble -= mosaicEndless.cost;
    mosaicEndless.cost = Math.ceil(mosaicEndless.cost * 1.25);
    updateEndlessSkyText();
    updateMarbleText();
  });

  document.querySelector("#build-undersea").addEventListener('click', function(evt) {
    if (numMarble < mosaicUndersea.cost) return;

    mosaicUndersea.count += 1;
    numMarble -= mosaicUndersea.cost;
    mosaicUndersea.cost = Math.ceil(mosaicUndersea.cost * 1.25);
    updateUnderseaText();
    updateMarbleText();
  });

  document.querySelector("#build-sequined").addEventListener('click', function(evt) {
    if (numMarble < mosaicSequined.cost) return;

    mosaicSequined.count += 1;
    numMarble -= mosaicSequined.cost;
    mosaicSequined.cost = Math.ceil(mosaicSequined.cost * 1.5);
    updateSequinedText();
    updateMarbleText();
  });

  document.querySelector("#build-glow").addEventListener('click', function(evt) {
    if (numMarble < mosaicGlow.cost) return;

    mosaicGlow.count += 1;
    numMarble -= mosaicGlow.cost;
    mosaicGlow.cost = Math.ceil(mosaicGlow.cost * 2);
    updateGlowText();
    updateMarbleText();
  });

  function updateMarbleText() {
    elements.txtMarble.innerHTML = numMarble;
  }

  function updateEndlessSkyText() {
    elements.txtMosaicEndless.innerHTML = mosaicEndless.count;
    elements.btnMosaicEndless.innerHTML = "Build (" + mosaicEndless.cost + ")";
  }

  function updateUnderseaText() {
    elements.txtMosaicUndersea.innerHTML = mosaicUndersea.count;
    elements.btnMosaicUndersea.innerHTML = "Build (" + mosaicUndersea.cost + ")";
  }

  function updateSequinedText() {
    elements.txtMosaicSequined.innerHTML = mosaicSequined.count;
    elements.btnMosaicSequined.innerHTML = "Build (" + mosaicSequined.cost + ")";
  }

  function updateGlowText() {
    elements.txtMosaicGlow.innerHTML = mosaicGlow.count;
    elements.btnMosaicGlow.innerHTML = "Build (" + mosaicGlow.cost + ")";
  }

  function gameLoop() {
    numMarble += Math.ceil(mosaicEndless.count * mosaicEndless.marble);
    numMarble += Math.ceil(mosaicUndersea.count * mosaicUndersea.marble);
    numMarble += Math.ceil(mosaicSequined.count * mosaicSequined.marble);
    numMarble += Math.ceil(mosaicGlow.count * mosaicGlow.marble);
    updateMarbleText();
    window.setTimeout(gameLoop, 1000);
  }

  gameLoop();

});
