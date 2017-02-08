var React = require("react");

var ErrorModal = React.createClass({
    componentDidMount: function () {
        debugger;
        var modal = new Foundation.Reveal($("#error-modal"));
        modal.open();
    },
    render: function () {
     <div id="error-modal" className="reveal tiny text-center" data-reveal="">
         <h4>Some title</h4>
         <p>Outr error</p>
         <p>
             <button className="button hollow" data-close="">
                 Ok
             </button>
         </p>
     </div>
    }
});

module.exports = ErrorModal;