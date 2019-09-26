const assert = require('chai').assert;
const logic = require('../server/logic');

addNumbers = logic(5, 5);

describe('Logic', () => {
  describe('addNumbers', () => {
    it('addNumbers should be above 5', () => {
      assert.isAbove(addNumbers, 5);
    });

    it('addNumbers should be typeof number', () => {
      assert.typeOf(addNumbers, 'number');
    });
  });
});