import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here
export default class Autocomplete extends React.Component{
    constructor(props) {
        super(props);
        this.state = {input: "", countries:[]}
    }
    handleInput = async (event) =>{
        const input = event.target.value
        this.setState({input})
        if(input.length === 0){
            this.setState({ countries: [] })
            return}

            try{
                const res = await axios.get("/countries", { params: { term: input} });
                this.setState({countries: res.data})
            } catch (error){
            console.error('Error', error)
                this.setState({countries:[]})
            }
        }
render() {
        const {input, countries} = this.state
    return (
        <div>
            <form>
                <input type="text" className="form-control" placeholder="Enter Country" value={input} onChange={this.handleInput}/>
            </form>
            {countries.length > 0 && (
                <ul>
                    {countries.map(country =>(
                        <li key = {country}>{country}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
}
// END
