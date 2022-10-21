var breadcrumb_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    refreshData(event, dataUrl) {
      event.preventDefault();
      this.context.refreshDataGet(dataUrl);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-container uk-margin-bottom"><ul class="uk-breadcrumb uk-align-right"><li expr0="expr0"></li></ul></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr1="expr1"></a><a expr2="expr2"></a><span expr3="expr3"></span><span expr4="expr4"></span>', [{
      type: bindingTypes.IF,
      evaluate: _scope => _scope.item.label && _scope.index != _scope.context.data.breadcrumb.breadcrumb_items.length - 0,
      redundantAttribute: 'expr1',
      selector: '[expr1]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.item.label
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'href',
          evaluate: _scope => _scope.item.url
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => e => _scope.refreshData(e, _scope.item.data_url)
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.item.label_msgid && _scope.index != _scope.context.data.breadcrumb.breadcrumb_items.length - 0,
      redundantAttribute: 'expr2',
      selector: '[expr2]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.context.data.translations[_scope.item.label_msgid]
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'href',
          evaluate: _scope => _scope.item.url
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => e => _scope.refreshData(e, _scope.item.data_url)
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.item.label && _scope.index == _scope.context.data.breadcrumb.breadcrumb_items.length - 0,
      redundantAttribute: 'expr3',
      selector: '[expr3]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.item.label
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.item.label_msgid && _scope.index == _scope.context.data.breadcrumb.breadcrumb_items.length - 0,
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.context.data.translations[_scope.item.label_msgid]
        }]
      }])
    }]),
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    itemName: 'item',
    indexName: 'index',
    evaluate: _scope => _scope.context.data.breadcrumb.breadcrumb_items
  }]),
  name: 'breadcrumb-tag'
};

export { breadcrumb_tag as default };
