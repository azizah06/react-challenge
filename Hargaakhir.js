import React from 'react';
import Card from "../Components/Card"

class Hargaakhir extends React.Component{
    constructor(){
        super();
        this.state = {
            harga: null,
            diskon: null,
            ppn: null,
            hitung: null
        }
    }
    hitung = (a) => {
        a.preventDefault();
        const harga = parseInt(this.refs.harga.value);
        const ppn = parseInt(this.refs.ppn.value)/100;
        const diskon = parseInt(this.refs.diskon.value)/100;
        let hitung;
        hitung = harga + (harga*ppn) - (harga*diskon);
        console.log(hitung);

        this.setState({
            harga,ppn,diskon,hitung});
        this.refs.harga.value = null;
        this.refs.ppn.value = null;
        this.refs.diskon.value = null;
    }
    render(){
        return(
            <div>
                <center>
                <Card title="Body Mass Index" tipe="info">
             
                <form onSubmit={this.hitung}>
                    <label>Harga Awal : </label>
                    <input type="number" ref="harga"></input>
                    <br/>
                    <label>PPN : </label>
                    <input type="number" ref="ppn"></input>
                    <br/>
                    <label>Diskon % : </label>
                    <input type="number" ref="diskon"></input>
                    <br/>
                    <button type="submit" class="btn btn-primary">hitung</button>
                </form>
                <p>{this.state.hitung}</p>
                </Card>
                </center>
            </div>
        )
    }
}
export default Hargaakhir; 