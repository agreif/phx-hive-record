var insparamtype_list_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    addInsparamtype() {
      this.context.refreshDataGet(this.context.data.pages.insparamtype_list.get_insparamtype_add_data_url);
    },
    detailInsparamtype(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_insparamtype_detail_data_url);
    },
    deleteInsparamtype(event, item) {
      this.context.refreshDataPost(item.post_insparamtype_delete_data_url, item.csrf_token);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr0="expr0"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr1="expr1" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr2="expr2" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr3="expr3"></tr></tbody></table><div expr7="expr7" uk-modal></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Insparamtypes']
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.addInsparamtype
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Add Insparamtype']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td class="uk-table-link"><a expr4="expr4" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr5="expr5" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr6="expr6" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: file-edit"></span></button></td>', [{
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.insparamtype.name
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.detailInsparamtype(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr5',
      selector: '[expr5]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-insparamtype-really-delete-', _scope.item.insparamtype.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Insparamtype']
      }]
    }, {
      redundantAttribute: 'expr6',
      selector: '[expr6]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.detailInsparamtype(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Insparamtype Detail']
      }]
    }]),
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.insparamtype_list.insparamtype_list_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr8="expr8" class="uk-modal-title"> </h2><p expr9="expr9"> </p><p class="uk-text-center"><button expr10="expr10" class="uk-button uk-button-default uk-modal-close"> </button><button expr11="expr11" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-insparamtype-really-delete-', _scope.item.insparamtype.id].join('')
      }]
    }, {
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Insparamtype']
      }]
    }, {
      redundantAttribute: 'expr9',
      selector: '[expr9]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Insparamtype?']
      }]
    }, {
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr11',
      selector: '[expr11]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Delete']].join('')
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.deleteInsparamtype(e, _scope.item)
      }]
    }]),
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.insparamtype_list.insparamtype_list_items
  }]),
  name: 'insparamtype-list-page'
};

export { insparamtype_list_page as default };
