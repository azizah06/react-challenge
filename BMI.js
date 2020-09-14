import React from 'react'
import Card from "../Components/Card"
class BMI extends React.Component{
    constructor(){
        super();
        this.state = {
            BMI: null,
            tinggi: null,
            berat: null,
            ket: ""
        }
    }
    hitung = (e) => {
        e.preventDefault();
        const tinggi = parseInt(this.refs.tinggi.value)/100;
        const berat = parseInt(this.refs.berat.value);
        let BMI;
        let ket
        BMI = berat / Math.pow(tinggi,2);
        console.log(BMI);

        if (BMI >= 30.0) {
            ket = "OBESITAS"
        } else if (BMI >= 25.0) {
            ket = "GEMUK"
        } else if (BMI >= 18.5) {
            ket = "IDEAL"
        } else {
            ket = "KURUS"
        }

        this.setState({
            tinggi, berat, BMI, ket
        });

        this.refs.tinggi.value = null;
        this.refs.berat.value = null;
    }
    render(){
        return(
            <div className ="container">
                <center>
                <Card title="Body Mass Index" tipe="info">
                Body Mass Index
                <form onSubmit={this.hitung}>
                    <label>Tinggi:  </label>
                    <input type="number" ref="tinggi"  ></input>
                    <br/>
                    <label>Berat:  </label>
                    <input type="number" ref="berat" ></input>
                    <br/>
                    <button type="submit" class="btn btn-primary">HITUNG</button>
                </form>
                <br/> <h5>Hasil</h5>
                <p >{this.state.ket}</p>
                </Card>
                </center>
                </div>
          
                
        )
    }

}
export default BMI;