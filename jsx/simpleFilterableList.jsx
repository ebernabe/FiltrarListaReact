import React from "react"
import SimpleList from "./simpleList.jsx"


export default class SimpleFilterableList extends React.Component {
	constructor(props){
		super(props)
		this.state = {userInput:""}
	}

	updateUserInput(input){
			this.setState({userInput : input.target.value})		
	}

	render(){
		return <div>
		<input type='text' placeholder='Filtrar...' onChange={this.updateUserInput.bind(this)}></input>
		<SimpleList url={this.props.url} userInput={this.state.userInput}/>
		</div>	}
}



 