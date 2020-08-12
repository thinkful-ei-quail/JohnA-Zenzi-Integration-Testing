const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../app');

describe('GET /frequency', () => {

  it('should return a message from GET /', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello Express!');
  });

  it('should count the occurance of each character', () => {
    return supertest(app)
      .get('/frequency')
      .query({ s: 'sss' })
      .expect(200)
      .then(res => {
        console.log(res.body)
        expect(res.body).to.deep.equal({
          's': 3,
          unique: 1,
          average: 3,
          highest: 's',
        });
      });


  });

  it('should throw an error if the string is undefined', () => {
    return supertest(app)
      .get('/frequency')
      .expect(400, 'Invalid request');
  });


  it('it should alphabetize characters if they tie', () => {
    return supertest(app)
      .get('/frequency')
      .query({ s: 'tarp' })
      .expect(200)
      .then(res => {
        console.log(res.body);
        expect(res.body).to.deep.equal({
          't': 1,
          'a': 1,
          'r': 1,
          'p': 1,
          unique: 4,
          average: 1,
          highest: 'a',
        });
      });
  });
});