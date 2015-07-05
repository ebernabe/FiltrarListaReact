import React from "react"
import SimpleListRowLi from "./simpleListRowLi.jsx"


export default class SimpleListRow extends React.Component{


	render(){
		let rows = this.props.simpleList
		let filterBy = this.props.filterBy
			return <ol>{
				rows.map(
						function(element){
							// debugger
							if(element.row.toLowerCase().search(filterBy.toLowerCase()) > -1){

									return	<SimpleListRowLi key={element.id} current={element.row}/>
							}
						}

					)}
			</ol>;
	}
}