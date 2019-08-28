import React from 'react';

class Result extends React.Component {

    setColor(){
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.size,
            textTransform: this.props.text
        }
    }
    // setSize(){
    //     return {
    //         fontSize: this.props.size
    //     }
    // }
    
    render() {
        return (
            <div className="col-sm-12 col-md-12 col-lg-12">
                <p>Color : {this.props.color} - Fontsize : {this.props.size}px</p>
                 {/* {{color: this.props.color}} */}
                <div id="content" style={this.setColor()}> 
                    Nội dung setting
        </div>
            </div>
        );
    }
}

export default Result;
