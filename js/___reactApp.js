class SimpleList extends React.Component{
constructor(props){
	super(props);
	this.state = {simpleList=[{row="Cargando...."}]}
}
componentDidMount(){
	 $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function(data) {
              this.setState({simpleList: data});
          }.bind(this),
             error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString())
          }.bind(this)
    });
}
	render(){
		return(<span><p><strong>pasos para dominar un nuevo lenguaje de programacion</strong></p></span>);
	}

} 

class SimpleListRow extends React.Component{
	render(){
		var rows = this.props.simpleList;
			return (<ol><li>{element.row}</li></ol>);
	}
}

React.render(<SimpleList url="simpleList_data.json"/>,document.getElementById("simpleList"))