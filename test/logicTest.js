const assert = require('chai').assert;
const expect = require('chai').expect;
const logic = require('../server/logic');

const addNumbers = logic;

describe('Logic', () => {
  describe('addNumbers', () => {
    it('addNumbers should be typeof number', () => {
      assert.typeOf(addNumbers('5'), 'number');
    });

    it('addNumbers should accept single numbers', () => {
      expect(addNumbers('20')).to.equal(20);
    });

    it('addNumbers should accept 2 numbers', () => {
      expect(addNumbers('1,5000')).to.equal(5001);
    });

    it('addNumbers should only accept 2 numbers', () => {
      expect(addNumbers('5,5,5')).to.equal(10);
    });

    it('addNumbers should convert empty string to 0', () => {
      expect(addNumbers('')).to.equal(0);
    });

    it('addNumbers should convert letters to 0', () => {
      expect(addNumbers('f')).to.equal(0);
    });

    it('addNumbers should return correct result from mixed equation of letters and numbers', () => {
      expect(addNumbers('5,tytyt')).to.equal(5);
    });

    it('addNumbers should accept numbers with decimals', () => {
      expect(addNumbers('1.5,2.3')).to.equal(3.8);
    });
  });
});
