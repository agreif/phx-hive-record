var queen_dot_tag = {
  css: null,
  exports: {
    calcFill(year) {
      switch ((year - 2016) % 5) {
        case 0:
          return "white";
        case 1:
          return "yellow";
        case 2:
          return "red";
        case 3:
          return "lime";
        case 4:
          return "#0099ff";
        default:
          return "transparent";
      }
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<span expr0="expr0"></span><span expr2="expr2"></span>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.props.isQueenMarked && _scope.props.year,
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    template: template('<svg height="22" width="20"><circle expr1="expr1" cx="10" cy="10" r="8" stroke="black" stroke-width="2"/></svg>', [{
      redundantAttribute: 'expr1',
      selector: '[expr1]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'fill',
        evaluate: _scope => _scope.calcFill(_scope.props.year)
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => !_scope.props.isQueenMarked || !_scope.props.year,
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    template: template('<svg height="22" width="20"><circle cx="10" cy="10" r="8" stroke="red" stroke-width="5" fill="transparent" stroke-dasharray="1 2"/></svg>', [])
  }]),
  name: 'queen-dot-tag'
};

export { queen_dot_tag as default };
