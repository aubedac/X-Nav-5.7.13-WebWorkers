self.onmessage = function(event) {
  var n = 0;
  var counter = 0;
  var primeList = "";
  search: while (n < event.data) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primeList += " " + n;
    counter++;
    if(counter == 250){
      self.postMessage(primeList);
      counter = 0;
      primeList = "";
    }
  }
  self.postMessage(primeList);
};
