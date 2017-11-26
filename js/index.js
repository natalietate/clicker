window.addEventListener('load', function() {
  var elements = {
    txtMarble: document.querySelector("#marbles"),

    txtMosaicEndless: document.querySelector("#endless-sky"),
    btnMosaicEndless: document.querySelector("#build-endless-sky"),

    txtMosaicUndersea: document.querySelector("#undersea"),
    btnMosaicUndersea: document.querySelector("#build-undersea"),

    txtMosaicSequined: document.querySelector("#sequined"),
    btnMosaicSequined: document.querySelector("#build-sequined"),

    txtMosaicGlow: document.querySelector("#glow-dark"),
    btnMosaicGlow: document.querySelector("#build-glow-dark")
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

});
