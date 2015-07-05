import React from "react"
import $ from "jquery"
import uid from "uid"
import SimpleListRow from "./simpleListRow.jsx"
let sl = []

export default class SimpleList extends React.Component{
		constructor(props){
			super(props)
			this.state = {simpleList:[{row:"Cargando...."}]}
		}
		componentDidMount(){
			console.log("A")
			 $.ajax({
		          url: this.props.url,
		          dataType: 'json',
		          success: function(data) {

                      for(let i=0;i < data.length; i++){
							sl.push({"row":data[i].row,"id":uid()})
                      }
						

		              this.setState({simpleList: sl});
		          }.bind(this),
		             error: function(xhr, status, err) {
		              console.error(this.props.url, status, err.toString())
		          }.bind(this)
		    });
		}
		render(){
			 
			return  <SimpleListRow simpleList={this.state.simpleList} filterBy={this.props.userInput}/>
			 
		}

} 