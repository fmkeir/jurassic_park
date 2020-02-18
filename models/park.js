const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaurToCollection = function(newDinosaur){
  this.collectionOfDinosaurs.push(newDinosaur)
}

module.exports = Park;
