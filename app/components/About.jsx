var React = require("react");

// var About = React.createClass({
//     render: function () {
//         return (
//             <h3> About component</h3>
//         )
//     }
//
// });
//siden denne funksjonen ikke innholder noen State, kan man bruke denne syntaxen
var About =  (props) =>{
    return (
        // må ha div her fordi React can bare returnere en root component
        <div>
        <h3> About </h3>
        <p> Test</p>
        </div>
            )
}

module.exports = About;