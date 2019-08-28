import React from 'react';
class SizeSetting extends React.Component {

  // onSetT = (size) =>{
  //   console.log(size);
  // }
  ChangeSize = (value)=>{
    this.props.onReceviColor(value);
  }
  ChangeText = () =>{
    this.props.onChangeText();
  }
  render(){
    return (
        <div className="card">
          <div className="card-header bg-danger text-left text-white">
            Size: {this.props.size}px
          </div>
          <div className="card-body justify-content-flex-start">
            <button type="button" className="btn btn-success" onClick={()=>this.ChangeSize(-2)}>GIAM</button>
            <button type="button" className="btn btn-success ml-2" onClick={()=>this.ChangeSize(+2)}>TANG</button>
            <button type="button" 
            className="btn btn-success ml-2" 
            onClick={()=>this.ChangeText()}>UPPERCASE</button>
            <button type="button" 
            className="btn btn-success ml-2" 
            onClick={()=>this.onEdit()}>EDIT</button>
          </div>
        </div>
    );
  }
}

export default SizeSetting;
