import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import helloWord from '../src/hello';
import bankAccount from '../src/bankAccount';
import server from '../src/index';
chai.use(chaiHttp);

describe('index.js', () => {

  describe('#init()', () => {
      it('should return hello world', () => {
        expect(helloWord.init()).to.equal('hello world');
      })
  })

})


//test promise
describe('bank account feature', () => {
  it('should return the balance of the account', async () => {
    const id = 1;
    const account = new bankAccount(id)
    const {userId} = await account.balance('https://jsonplaceholder.typicode.com/todos');
    expect(userId).to.equal(1);
  })
  it('should fail and return null', async () => {
    const id = 1;
    const account = new bankAccount(id)
    const result = await account.balance('https://.typicode.com/todos');
    expect(result).to.equal(null);
  })
})



//test restful API
//https://github.com/chaijs/chai-http check this git repo
describe('/GET', () => {
  it('returns msg', (done) => {
    chai.request('http://localhost:8080')
    .get('/')
    .then(res => {
      expect(res).to.have.status(200)
      expect(res.body).to.have.property('message');
      expect(res.body.message).to.equal('hi')
      done();
    })
  })
  it('should fail / request', (done) => {
    chai.request('http://localhost:8080')
    .get('/404')
    .then((res) => {
      expect(res).to.have.status(500)
      done();
    })
  })
})
