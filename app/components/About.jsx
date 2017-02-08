var React = require("react");
//var {Link} = require("react-router");
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
                <h1 className="text-center"> About </h1>
                <p> This is a simple weather application made by Gard Engen</p>
                <ol>
                    <li>
                        <a href="https://facebook.github.io/react">React</a> - This was the javaScript framework used.
                    </li>
                    <li>
                        <a href="https://github.com/GardEngen/ReactWeather">GitHub Repo</a> - You can find the project here
                    </li>
                    <li>
                        <a href="http://openweathermap.org/api">Weather API</a> - The API i used in this project
                    </li>
                </ol>

            </div>
            )
}

module.exports = About;