var React = require('react/addons');
var PanelGroup = require('./PanelGroup');

var Accordion = React.createClass({
  render: function () {
    return (
      <PanelGroup {...this.props} accordion={true}>
        {this.props.children}
      </PanelGroup>
    );
  }
});

module.exports = Accordion;