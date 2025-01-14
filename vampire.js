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

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }

    for (const descendent of this.offspring) {
      const vampire = descendent.vampireWithName(name);
      // console.log(vampire);
      // console.log('----');
      if (vampire) {
        console.log(vampire);
        console.log('----');
        return vampire;
      }
    }

    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let allDescendent = 0;
    console.log(allDescendent);

    allDescendent += this.offspring.length;

    for (const descendent of this.offspring) {
      const countDescendent = descendent.totalDescendents;

      allDescendent += countDescendent;
    }

    return allDescendent;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    // Create an empty array
    // Go through the offsprings
    //  If yearConverted > 1980 ==> push to array
    let millenialVampires = [];
    // console.log(millenialVampires);
    // console.log('----');

    if (this.yearConverted > 1980) {
      // console.log(this);
      // console.log('////');
      millenialVampires.push(this);
      // console.log(millenialVampires);
      // console.log('0000');
    }

    for (const descendent of this.offspring) {
      // console.log(descendent);
      // console.log('0000');
      const millennialDescendent = descendent.allMillennialVampires;

      millenialVampires = millenialVampires.concat(millennialDescendent);
    }

    return millenialVampires;
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

