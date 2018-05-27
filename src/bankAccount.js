import axios from 'axios';

class BankAccount{
  constructor(id){
    this.id = id;
  }
  async balance(url){
    try{
      const {data} = await axios.get(url);
      const result = data.find(todo => todo.id === this.id);
      return result
    }
    catch(err){
      return null
    }
  }
}


export default BankAccount;
