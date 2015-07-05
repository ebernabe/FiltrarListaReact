import React from "react"


export default class SimpleListRowLi extends React.Component{
	render(){
		
		return <li>{this.props.current}</li>
	}
}