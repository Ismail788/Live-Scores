import React, {Component} from 'react';


class Form extends Component{

  render(){
    return(
      <form>
      <h1>Football Items</h1>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
   <input type="submit" value="Submit" />
   </form>

    );
  }
}
export default Form;
