'use strict';

const React = require('react');
const ExpandableElement = require('../expandable-element');
const Factory = require('./factory');

/**
 * Component for array types.
 */
class ArrayElement extends React.Component {

  /**
   * Render an array element.
   */
  render() {
    return React.createElement(ExpandableElement, {
      elements: Factory.elements(this.props.value),
      field: this.props.field,
      value: this.props.value,
      type: this.props.type,
      label: `${ this.props.type }[${ this.props.value.length }]` });
  }
}

ArrayElement.displayName = 'ArrayElement';

module.exports = ArrayElement;