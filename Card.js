import React from 'react';
class Card extends React.Component{
    render(){
        return(
            <div className = 'card'>
                <div className ={"card-header bg-primary text-white"}>
                    <h2 align="center"> HARGA AKHIR</h2>
                </div>
                <div className ='card-body'>
                    {this.props.children}
                </div>
                <div className ='card-footer'>
                    
                </div>
            </div>
        )
    }
}
export default Card;