import React, { Component } from 'react';
import './App.css';
import Reset from './components/Reset';
import Colorpicker from './components/Colorpicker';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ColorItems: 'red',
      Fontsize: 12,
      textTransform: ''
    };
    this.onSetColor = this.onSetColor.bind(this);
    this.onSetFont = this.onSetFont.bind(this);
    this.onDefault = this.onDefault.bind(this);
    this.onChangeTexts = this.onChangeTexts.bind(this); //bind cho onSetColor de no hieu duoc this.setState la 1 function
  }
  onSetColor(params){
    this.setState({
      ColorItems: params //parms la du lieu color lay tu thang con thong qua ham setActiveColor
    })
  }
  onSetFont(value){
    this.setState({
      Fontsize: (this.state.Fontsize + value >= 8 && this.state.Fontsize + value <= 36) ? this.state.Fontsize + value : this.state.Fontsize
    })
  }
  onDefault(){
    this.setState({
      ColorItems: 'red',
      Fontsize: 12,
      textTransform: ''
    
    })
  }
  onChangeTexts(){
    this.setState({
      textTransform: 'uppercase'
    })
  }
  render() {
    return (
     <div className="container mt-5">
       <div className="row">
         <Colorpicker color={this.state.ColorItems} onReceviColor={this.onSetColor}/>
         <div className="col-sm-12 col-md-6 col-lg-6">
           <SizeSetting 
           size={this.state.Fontsize} 
           onReceviColor={this.onSetFont} 
           onChangeText={this.onChangeTexts}
           />
          <Reset default={this.onDefault}/>
         </div>
       </div>
       <div className="row">
        <Result color={this.state.ColorItems} size={this.state.Fontsize} text={this.state.textTransform}/>
       </div>
     </div>
    );
  }
}
export default App;
