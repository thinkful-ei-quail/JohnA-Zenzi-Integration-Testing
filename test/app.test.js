const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /frequency', () => {
  
  it('should count the occurance of each character', () => {
    
  });

  it('should throw an error if the string is undefined', () => {
    return request(app)
      .get('/frequency')
      .expect(400);
  });
  

  it('it should alphabetize characters if they tie', () => {

  });
});