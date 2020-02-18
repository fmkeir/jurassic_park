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

Park.prototype.findBySpecies = function (species) {
  let results = [];
  for (var dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species === species){
      results.push(dinosaur);
    }
  }
  return results
}

Park.prototype.totalVisitorsPerDay = function(){
  let result = 0;
  for (var dinosaur of this.collectionOfDinosaurs) {
    result += dinosaur.guestsAttractedPerDay;
  }
  return result
}

Park.prototype.totalVisitorsPerYear = function () {
  return this.totalVisitorsPerDay() * 365;
};

Park.prototype.totalRevenue = function () {
  return this.totalVisitorsPerYear() * this.ticketPrice;
};

module.exports = Park;
