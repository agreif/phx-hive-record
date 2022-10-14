var todo = {
  css: null,
  exports: {
    onBeforeMount(props, state) {
      // initial state
      this.state = {
        items: props.items,
        text: ''
      };
    },
    edit(e) {
      // update only the text state
      this.update({
        text: e.target.value
      });
    },
    add(e) {
      e.preventDefault();
      if (this.state.text) {
        this.update({
          items: [...this.state.items,
          // add a new item
          {
            title: this.state.text
          }],
          text: ''
        });
      }
    },
    toggle(item) {
      item.done = !item.done;
      // trigger a component update
      this.update();
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h3 expr55="expr55"> </h3><ul><li expr56="expr56"></li></ul><form expr59="expr59"><input expr60="expr60"/><button expr61="expr61"> </button></form>', [{
    redundantAttribute: 'expr55',
    selector: '[expr55]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.props.title
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<label expr57="expr57"><input expr58="expr58" type="checkbox"/> </label>', [{
      redundantAttribute: 'expr57',
      selector: '[expr57]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 1,
        evaluate: _scope => [_scope.item.title].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.item.done ? 'completed' : null
      }]
    }, {
      redundantAttribute: 'expr58',
      selector: '[expr58]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'checked',
        evaluate: _scope => _scope.item.done
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => () => _scope.toggle(_scope.item)
      }]
    }]),
    redundantAttribute: 'expr56',
    selector: '[expr56]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.state.items
  }, {
    redundantAttribute: 'expr59',
    selector: '[expr59]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onsubmit',
      evaluate: _scope => _scope.add
    }]
  }, {
    redundantAttribute: 'expr60',
    selector: '[expr60]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onkeyup',
      evaluate: _scope => _scope.edit
    }, {
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.state.text
    }]
  }, {
    redundantAttribute: 'expr61',
    selector: '[expr61]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => ['Add #', _scope.state.items.length + 1].join('')
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'disabled',
      evaluate: _scope => !_scope.state.text
    }]
  }]),
  name: 'todo'
};

export { todo as default };
