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

Park.prototype.removeBySpecies = function (species) {
  let keep = [];
  for (var dinosaur of this.collectionOfDinosaurs) {
    if (dinosaur.species !== species) {
      keep.push(dinosaur)
    }
  }
  this.collectionOfDinosaurs = keep
};

Park.prototype.dinosaurDiets = function () {
  let result = {};
  for (var dinosaur of this.collectionOfDinosaurs) {
    if (result[dinosaur.diet]) {
      result[dinosaur.diet] += 1
    } else {
      result[dinosaur.diet] = 1
    }
  }
  return result
};

module.exports = Park;
