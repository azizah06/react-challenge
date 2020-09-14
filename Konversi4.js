import React from 'react';
import Card from "../Components/Card"
class Konversi4 extends React.Component{
    constructor(){
        super() // memanggil constructor milik superclass
        this.state = {
            Desimal: 0,
            option: 10,
            result: 0
        }
    }
    bind = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    convertDesimal = () => {
        let Desimal = this.state.Desimal
        let option = this.state.option

        let hasil = parseInt(Desimal,10).toString(option)
        this.setState({ result: hasil})
    }
    render(){
        return (
            <div className="container">
                <Card title="Konversi Desimal" tipe="info">
                Desimal
                    <input type="number" value={this.state.Desimal} name="Desimal" onChange={this.bind} className="form-control" />
                    <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
                        <option value="2">Biner</option>
                        <option value="8">Oktal</option>
                        <option value="16">Hexa</option>
                    </select>
                    <button className="btn btn-danger btn-block" onClick={this.convertDesimal}>
                        Convert</button>
                    <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
                </Card>
            </div>
        )
    }
}

export default Konversi4