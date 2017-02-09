var React = require("react");
var {Link} = require("react-router");

// var Example = React.createClass({
//     render: function () {
//         return (
//             <h3> Example component</h3>
//         )
//     }
//
// });
//siden denne funksjonen ikke innholder noen State, kan man bruke denne syntaxen
var Example =  (props) =>{
    return (
        <div>
        <h1 className="text-center page-title "> Example </h1>
        <p> Here are a few exsample locations to try out:</p>
            <ol>
            <li>
                <Link to="/?location=Ålesund">Ålesund, Ål</Link>
            </li>
            <li>
                <Link to="/?location=Høyanger">Høyanger, Hø</Link>
            </li>
            </ol>

        </div>
    )
}


module.exports = Example;