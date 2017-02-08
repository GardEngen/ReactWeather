var React = require("react");

// var WeatherMessage = React.createClass({
//     render: function () {
//         var location = this.props.location;
//         var temp = this.props.temp;
//         return (
//             <div>
//                 <h3>I {location} er det {temp} grader ut!</h3>
//             </div>
//         )
//     }
//
// });

//siden denne funksjonen ikke innholder noen State, kan man bruke denne syntaxen

var WeatherMessage =  ({temp, location}) =>{

  // var location = props.location;
   // var temp = props.temp;

   // var {temp, location} = props;
    return (
        <div>
            <h3 className="text-center">It's {temp} in {location}!</h3>
        </div>

    );
}



module.exports = WeatherMessage;