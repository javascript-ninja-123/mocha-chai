import axios from 'axios';

class BankAccount{
  constructor(id){
    this.id = id;
  }
  async balance(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const result = data.find(todo => todo.id === this.id);
    return result
  }
}


export default BankAccount;
