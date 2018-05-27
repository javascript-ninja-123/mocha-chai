import {expect} from 'chai';
import helloWord from '../src/hello';
import bankAccount from '../src/bankAccount';

describe('index.js', () => {

  describe('#init()', () => {
      it('should return hello world', () => {
        expect(helloWord.init()).to.equal('hello world');
      })
  })

})



describe('bank account feature', () => {
  it('should return the balance of the account', async () => {
    const id = 1;
    const account = new bankAccount(id)
    const {userId} = await account.balance();
    expect(userId).to.equal(1);
  })
})
