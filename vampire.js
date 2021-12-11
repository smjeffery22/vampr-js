class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberofVampires = 0;
    let creatorVampire = this.creator;

    while (creatorVampire) {
      numberofVampires++;
      creatorVampire = creatorVampire.creator;
    }

    return numberofVampires;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    // if this vampire is the root vampire => return true
    if (this.creator === null) {
      return true;
    }

    // if the other vampire is the root vampire => return false
    if (vampire.creator === null) {
      return false;
    }

    const numberOfVampires1 = this.numberOfVampiresFromOriginal;
    const numberOfVampires2 = vampire.numberOfVampiresFromOriginal;
    
    return numberOfVampires1 < numberOfVampires2 ? true : false;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {
    // // if this vampire is the root vampire => return root vampire name
    // if (this.creator === null) {
    //   return this;
    // }

    // // if the other vampire is the root vampire => return root vampire name
    // if (vampire.creator === null) {
    //   return vampire;
    // }
  }
}

module.exports = Vampire;

