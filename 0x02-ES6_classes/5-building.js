class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  set sqft(newSqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('amount must be a number');
    }
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
export default Building;
