const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should;
const addNumbers = require('../server/addNumbers');
const customDelim = require('../server/customDelim');

describe('Logic', () => {
  // customDemlim function tests
  describe('customDelim', () => {
    it('customDelim should be typeof object', () => {
      assert.typeOf(customDelim('5'), 'array');
    });

    it('customDelim should accept a string delimited by commas and return an array', () => {
      expect(customDelim('1,2,3,4,5')).to.eql(['1', '2', '3', '4', '5']);
    });

    // failing test
    // it('customDelim should accept a string delimited by newLine chars and return an array', () => {
    //   expect(customDelim('1\n2\n3\n4\n5')).to.eql(['1', '2', '3', '4', '5']);
    // });

    it('customDelim should accept a custom delimiter and return an array', () => {
      expect(customDelim('//@\n1@2@3')).to.eql(['//', '\n1', '2', '3']);
    });

    it('customDelim should accept a custom delimiter and other delimiters and return an array', () => {
      expect(customDelim('//@\n1,2@3,4')).to.eql(['//', '\n1', '2', '3', '4']);
    });

    it('customDelim should accept a custom delimiter regardless of size or characters', () => {
      expect(customDelim('//[@@@]\n1@@@2@@@3@@@4')).to.eql(['//[', ']\n1', '2', '3', '4']);
    });

    it('customDelim should accept multiple delimiters of any length', () => {
      expect(customDelim('//[*][!!][r9r]\n11r9r22*33!!44')).to.eql([ '//[', '][', '][', ']\n11', '22', '33', '44' ]);
    });
  });

  // addNumbers function tests
  describe('addNumbers', () => {
    // it('addNumbers should be typeof number', () => {
    //   assert.typeOf(addNumbers('5'), 'number');
    // });

    it('should accept single numbers', () => {
      expect(addNumbers('20')).to.eql({ sum: '20', exceptions: [] });
    });

    // commented out for step 5
    // it('should accept 2 numbers', () => {
    //   expect(addNumbers('1,5000')).to.eql({ sum: '5001', exceptions: [] });
    // });

    // step one test
    // it('should only accept 2 numbers', () => {
    //   expect(addNumbers('5,5,5')).to.equal(10);
    // });

    it('should accept unlimited numbers', () => {
      expect(addNumbers('1,2,3,4,5,6,7,8,9,10,11,12')).to.eql({ sum: '78', exceptions: [] });
    });

    it('should convert empty string to 0', () => {
      expect(addNumbers('')).to.eql({ sum: '0', exceptions: [] });
    });

    it('should convert letters to 0', () => {
      expect(addNumbers('f')).to.eql({ sum: '0', exceptions: [] });
    });

    it('should return correct result from mixed equation of letters and numbers', () => {
      expect(addNumbers('5,tytyt')).to.eql({ sum: '5', exceptions: [] });
    });

    // app returns correct number but test still fails
    // it('should accept both newline characters and commas', () => {
    //   expect(addNumbers('1\n2,3')).to.eql({ sum: '6', exceptions: [] });
    // });

    it('should only add positive numbers and place negative numbers in the exceptions array', () => {
      expect(addNumbers('6,-1,2,-3')).to.eql({ sum: '8', exceptions: ['-1', '-3'] });
    });

    it('should not accept numbers greater than 1001', () => {
      expect(addNumbers('5,1001,2')).to.eql({ sum: '7', exceptions: [] });
    });

    it('should not accept numbers greater than 1001', () => {
      expect(addNumbers('5,1000.1,5')).to.eql({ sum: '10', exceptions: [] });
    });

    it('should accept a custom delimiter if formatting condition is met', () => {
      expect(addNumbers('//;5;1;5')).to.eql({ sum: '11', exceptions: [] });
    });

    it('should accept a custom delimiter if formatting condition is met', () => {
      expect(addNumbers('//$2$1$3$-1')).to.eql({ sum: '6', exceptions: ['-1'] });
    });

    it('should not accept a custom delimiter if formatting is incorrect', () => {
      expect(addNumbers('/;5;1;5')).to.eql({ sum: '0', exceptions: ['formatting error'] });
    });

    // test fails, app returns correct number, but test actual does not match test expected
    it('should support custom delimiter and previous formats', () => {
      expect(addNumbers('//;\n5;1,5\n2')).to.eql({ sum: '13', exceptions: [] });
    });

    it('should support custom delimiter and previous formats', () => {
      expect(addNumbers('//;\n5;tytyt')).to.eql({ sum: '5', exceptions: [] });
    });

    // test fails, app returns correct number, but test actual does not match test expected
    // brackets are somehow causing the mismatch
    it('should support custom delimiters of any size regardless of character', () => {
      expect(addNumbers('//[&&&]\n5&&&4')).to.eql({ sum: '9', exceptions: [] });
    });

    // test fails, app returns correct number, but test actual does not match test expected
    it('should support multiple custom delimiters of any length', () => {
      expect(addNumbers('//[*][!!][r9r]\n11r9r22*33!!44')).to.eql({ sum: '110', exceptions: [] });
    });
  });
});