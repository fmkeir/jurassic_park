const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('t-rex', 'carnivore', 30);
    dinosaur3 = new Dinosaur('Pachycephalosaurus ', 'herbivore', 1000);
    dinosaurs = [dinosaur1, dinosaur2, dinosaur3];

    park = new Park('Newrassic Park', 10, dinosaurs);
  })

  it('should have a name', function(){
    assert.strictEqual(park.name, 'Newrassic Park')
  });

  it('should have a ticket price', function(){
    assert.strictEqual(park.ticketPrice, 10)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual(park.collectionOfDinosaurs, dinosaurs)
  });

  it('should be able to add a dinosaur to its collection', function(){
    newDinosaur = new Dinosaur('Triceratops', 'herbivore', 1)
    park.addDinosaurToCollection(newDinosaur)
    assert.deepStrictEqual(park.collectionOfDinosaurs, [dinosaur1, dinosaur2, dinosaur3, newDinosaur])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurFromCollection(dinosaur1)
    assert.deepStrictEqual(park.collectionOfDinosaurs, [dinosaur2, dinosaur3])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    assert.deepStrictEqual(park.bestDinosaur(), dinosaur3)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    assert.deepStrictEqual(park.findBySpecies("t-rex"), [dinosaur1, dinosaur2])
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
