var React = require("react");
var {Link, IndexLink} = require("react-router");

// var Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <h2>nav component</h2>
//                 <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
//                 <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
//                 <Link to="/example" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Example</Link>
//             </div>
//
//         );
//     }
// });


//siden denne funksjonen ikke innholder noen State, kan man bruke denne syntaxen

var Nav =  (props) =>{
    return (
        <div>
            <h2>nav component</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Example</Link>
        </div>

    );
}

module.exports = Nav;