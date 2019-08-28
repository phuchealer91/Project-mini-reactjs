import React from 'react';

class Colorpicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: ['red','green','yellow','#ccc']
        };
    }
    showColor(color){
            return {
                background: color
            }
        }
    setActiveColor = (color) =>{
        this.props.onReceviColor(color); //truyen color tu con den cha la onReceviColor
    }
    render() {
      var elements =  this.state.colors.map((color,index)=>{
                return <span 
                key={index} 
                style={this.showColor(color)}
                className={this.props.color === color ? 'active' : ''}
                onClick={() => this.setActiveColor(color)} //truyen co tham so pai dung arrow function
                    ></span>
        })
        return (
            <div className="col-sm-12 col-md-6 col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-left text-white">
                        Color-Picker
                     </div>
                    <div className="card-body">
                        {elements}
                    </div>
                </div>
            </div>
        );
    }
}

export default Colorpicker;
