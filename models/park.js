const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaurToCollection = function(dinosaur){
  this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurFromCollection = function(dinosaur){
  for (let i=0; i < this.collectionOfDinosaurs.length; i++) {
    if (this.collectionOfDinosaurs[i] === dinosaur) {
      this.collectionOfDinosaurs.splice(i, 1);
    }
  }
}

Park.prototype.bestDinosaur = function(){
  let result = this.collectionOfDinosaurs[0];
  for (var dinosaur of this.collectionOfDinosaurs){
    if (dinosaur.guestsAttractedPerDay > result.guestsAttractedPerDay){
      result = dinosaur
    }
  }
  return result
}

module.exports = Park;
