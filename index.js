'use strict';

var React = require('react');

module.exports = safeRender;

var style = {
  color: '#a94442',
  backgroundColor: '#f2dede',
  padding: 15,
  marginBottom: 20,
  borderWidth: 1,
  borderRadius: 4
};

function safeRender(base, name, desc) {
  var handler = undefined;
  if (arguments.length < 3) {
    handler = base;
    return decorator;
  } else {
    handler = function (e) {
      return React.createElement('div', { style: style }, 'Error: ', e.message);
    };
    return decorator(base, name, desc);
  }
  function decorator(base, name, desc) {
    var value = desc.value;

    if (name !== 'render') {
      throw new Error('safe-render only decorates the render method');
    }

    desc.value = function () {
      try {
        return value.apply(this, arguments);
      } catch (e) {
        return handler(e);
      }
    };

    return desc;
  }
}

