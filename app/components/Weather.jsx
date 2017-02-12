var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var openWeatherMap = require("openWeatherMap");
var ErrorModal = require("ErrorModal");

var Weather = React.createClass({
    getInitialState: function () {
        return{
            isLoading: false
        }
    },
    //når denne funksonen blir kalt, blir location to temp satt
    //til nye verdier.
    handleSearch: function (location) {

        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location : undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
            location: location,
            temp: temp,
            isLoading: false

        });
        }, function (e) {
                that.setState({
                    isLoading: false,
                    errorMessage: e.message

                });
            });
    },
    //Denne komponenten kjøres når komponenten har blitt mounta i browseren. Dette fører til at vi kan kalle
    //forskjellige funksjonen som blir automastisk kjørt når kompnenten lastes inn
    componentDidMount: function(){
        //Dette er en funksjon i render som gjør at vi kan hente ut location fra URL.
        var location = this.props.location.query.location;

        if(location && location.length > 0 ){
            this.handleSearch(location);
            //Denne kommandoen vil tilbakestille URL til standard.
            window.location.hash = "#/";
        }

    },
    //denne funksjonen vil bli kalt hver gang en Prop blir oppdatert
    componentWillReceiveProps: function(newProps) {
        var location = newProps.location.query.location;

        if(location && location.length > 0 ){
            this.handleSearch(location);
            //Denne kommandoen vil tilbakestille URL til standard.
            window.location.hash = "#/";
        }
    },
    render: function () {
        //henter ut verdiene man kan også skrive (ES-destruction)
        var {temp, location,isLoading,errorMessage} = this.state;
        // var temp = this.state.temp;
        // var location = this.state.location;
        // var isLoading = this.state.isLoading;
        // var errorMessage = this.state.errorMessage;


        function renderMessage(){
            if (isLoading){
               return <h3 className="text-center">Fetching weather...</h3>
            } else if(temp && location){
               return  <WeatherMessage temp = {temp} location = {location}/>
            }
        }

        function renderError(){
        if(typeof errorMessage === "string") {
            return (
                <ErrorModal message={errorMessage}/>
            )
        }
        }

        return (

            <div>
                <h1 className="text-center page-title"> Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }

});

module.exports = Weather;