window.addEventListener('load', function() {
  var elements = {
    // Total number of marbles
    txtMarble: document.querySelector("#marbles"),

    // Text display and button display for each set
    txtMosaicEndless: document.querySelector("#endless-sky"),
    btnMosaicEndless: document.querySelector("#build-endless-sky"),

    txtMosaicUndersea: document.querySelector("#undersea"),
    btnMosaicUndersea: document.querySelector("#build-undersea"),

    txtMosaicSequined: document.querySelector("#sequined"),
    btnMosaicSequined: document.querySelector("#build-sequined"),

    txtMosaicGlow: document.querySelector("#glow"),
    btnMosaicGlow: document.querySelector("#build-glow")
  };

  // Starting Variables to be incremented
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

  // Grab the gather button and increment by 1
  document.querySelector("#gather-marble").addEventListener('click', function(evt) {
    numMarble++;
    updateMarbleText();
  });

  // The Endless Sky
  document.querySelector("#build-endless-sky").addEventListener('click', function(evt) {
    if (numMarble < mosaicEndless.cost) return; // Do nothing if you don't have enough marbles

    mosaicEndless.count += 1; // Increase owned count by 1
    numMarble -= mosaicEndless.cost; // Subtract the cost from total marbles
    mosaicEndless.cost = Math.ceil(mosaicEndless.cost * 1.25); // Increase cost accordingly
    updateEndlessSkyText(); // Update w/ new cost
    updateMarbleText(); // Update total number of marbles
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

  // Set the text to the total number of marbles
  function updateMarbleText() {
    elements.txtMarble.innerHTML = numMarble;
  }

  // Update the count and cost
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

  // Will increase the number of marbles per second based on above functions that have run on click
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
