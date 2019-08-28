import React from 'react';

class Reset extends React.Component {
 
  
setDefault = ()=>{
  this.props.default();
}
  render(){
    return (
        <button type="button" className="btn btn-primary ml-2 float-left mt-2" onClick={this.setDefault}>Reset</button>
        );
  }
}

export default Reset;
