import React from "react";
import Greetings from "./Greetings";

// const SimpleForm = () => (
//     <div>
//         <input type='text' name="first"/>
//         <Greetings first="Lunca"/>
//     </div>
// ) ================JSX=============//


class SimpleForm extends React.Component {
    state = {
        first: '',
    }

    onFirstNameChange = event => this.setState({
        first: event.target.value
    });

    render() {
        return (
            <div>
                <input type='text' name="first" onChange={this.onFirstNameChange}/>

                <Greetings first = {this.state.first}/>
            </div>
        );
    }
}

export default SimpleForm