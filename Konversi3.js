import React from 'react';
import Card from "../Components/Card"
class Konversi3 extends React.Component{
    constructor(){
        super() // memanggil constructor milik superclass
        this.state = {
            Hexa: 0,
            option: 10,
            result: 0
        }
    }
    bind = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    convertHexa = () => {
        let Hexa = this.state.Hexa
        let option = this.state.option

        let hasil = parseInt(Hexa,16).toString(option)
        this.setState({ result: hasil})
    }
    render(){
        return (
            <div className="container">
                <Card title="Konversi Hexa" tipe="info">
                Hexa
                    <input type="number" value={this.state.Hexa} name="Hexa" onChange={this.bind} className="form-control" />
                    <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
                        <option value="10">Desimal</option>
                        <option value="2">Biner</option>
                        <option value="8">Oktal</option>
                    </select>
                    <button className="btn btn-danger btn-block" onClick={this.convertHexa}>
                        Convert</button>
                    <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
                </Card>
            </div>
        )
    }
}

export default Konversi3