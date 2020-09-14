import React from 'react';
import Card from "../Components/Card"
class Konversi2 extends React.Component{
    constructor(){
        super() // memanggil constructor milik superclass
        this.state = {
            oktal: 0,
            option: 10,
            result: 0
        }
    }
    bind = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    convertBiner = () => {
        let oktal = this.state.oktal
        let option = this.state.option

        let hasil = parseInt(oktal,8).toString(option)
        this.setState({ result: hasil})
    }
    render(){
        return (
            <div className="container">
                <Card title="Konversi oktal" tipe="info">
                    oktal
                    <input type="number" value={this.state.oktal} name="oktal" onChange={this.bind} className="form-control" />
                    <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
                        <option value="10">Desimal</option>
                        <option value="2">Biner</option>
                        <option value="16">Hexa</option>
                    </select>
                    <button className="btn btn-danger btn-block" onClick={this.convertoktal}>
                        Convert</button>
                    <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
                </Card>
            </div>
        )
    }
}

export default Konversi2