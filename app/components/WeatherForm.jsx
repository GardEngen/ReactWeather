var React = require("react");

var WeatherForm = React.createClass({
    //e == event
    onFormSubmit: function (e) {
        //vil føre til at ikke siden blir reloaded
        e.preventDefault();

        var location = this.refs.location.value;


        //check if info is valid

        if(location.length > 0 ){

            this.refs.location.value = "";
            this.props.onSearch(location);

        }
    },
    render: function () {
        return (
            <div>
                {/*Hver gang man trykker på knappen, blir onFormSubmit kalt*/}
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="search" placeholder="Search weather by city" ref="location"/>
                    </div>
                    <button className="hollow button expanded">Get Weather</button>
                </form>
            </div>
        )
    }

});

module.exports = WeatherForm;