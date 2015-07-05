var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){SimpleList[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;SimpleList.prototype=Object.create(____SuperProtoOf____Class0);SimpleList.prototype.constructor=SimpleList;SimpleList.__superConstructor__=____Class0;
		function SimpleList(props){"use strict";
			____Class0.call(this,props)
			this.state = {simpleList:[{row:"Cargando...."}]}
		}
		Object.defineProperty(SimpleList.prototype,"componentDidMount",{writable:true,configurable:true,value:function(){"use strict";
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
		}});
		Object.defineProperty(SimpleList.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
			return(React.createElement("span", null, React.createElement("p", null, React.createElement("strong", null, "pasos para dominar un nuevo lenguaje de programacion"))));
		}});

 

var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){SimpleListRow[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;SimpleListRow.prototype=Object.create(____SuperProtoOf____Class1);SimpleListRow.prototype.constructor=SimpleListRow;SimpleListRow.__superConstructor__=____Class1;function SimpleListRow(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
	Object.defineProperty(SimpleListRow.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
		var rows = this.props.simpleList;
			return (React.createElement("ol", null, React.createElement("li", null, element.row)));
	}});


React.render(React.createElement(SimpleList, {url: "simpleList_data.json"}),document.getElementById("simpleList"))