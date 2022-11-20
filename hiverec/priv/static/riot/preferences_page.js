var preferences_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    addInsparamtype() {
      this.context.refreshDataGet(this.context.data.pages.preferences.get_insparamtype_add_data_url);
    },
    deleteInsparamtype(event, item) {
      this.context.refreshDataPost(item.post_insparamtype_delete_data_url, item.csrf_token);
    },
    editInsparamtype(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_insparamtype_update_data_url);
    },
    moveSortPosUp(event, item) {
      this.context.refreshDataPost(item.post_insparamtype_sortposup_data_url, item.csrf_token);
    },
    moveSortPosDown(event, item) {
      this.context.refreshDataPost(item.post_insparamtype_sortposdown_data_url, item.csrf_token);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h2 expr0="expr0"> </h2><div><div uk-grid><div class="uk-width-auto@m"><ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fast"><li><a expr1="expr1" href="#"> </a></li><li><a href="#">Item</a></li><li><a href="#">Item</a></li></ul></div><div class="uk-width-expand@m"><ul id="component-tab-left" class="uk-switcher"><li><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr2="expr2" class> </th><th expr3="expr3" class> </th><th expr4="expr4" class> </th><th expr5="expr5" class> </th><th class="uk-align-right"><button expr6="expr6" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr7="expr7"></tr></tbody></table><div expr17="expr17" uk-modal></div></li><li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li><li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.</li></ul></div></div></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Preferences']
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Inspection Params']
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Type']
    }]
  }, {
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Options']
    }]
  }, {
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Sort Index']
    }]
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.addInsparamtype
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Add Inspection Param']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td class="uk-table-link"><a expr8="expr8" class="uk-link-reset"> </a></td><td class="uk-table-link"><a expr9="expr9" class="uk-link-reset"> </a></td><td class="uk-table-link"><a expr10="expr10" class="uk-link-reset"><span expr11="expr11" class="textarea-wrap"> </span></a></td><td class="uk-table-link"><a expr12="expr12" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr13="expr13" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr14="expr14" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button><button expr15="expr15" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: arrow-down"></span></button><button expr16="expr16" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: arrow-up"></span></button></td>', [{
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.insparamtype.name
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInsparamtype(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr9',
      selector: '[expr9]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations[_scope.item.insparamtype.type]
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInsparamtype(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInsparamtype(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr11',
      selector: '[expr11]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.insparamtype.options ? _scope.item.insparamtype.options.values.join('\n') : ""
      }]
    }, {
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.insparamtype.sort_index
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInsparamtype(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr13',
      selector: '[expr13]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-insparamtype-really-delete-', _scope.item.insparamtype.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Inspection Param']
      }]
    }, {
      redundantAttribute: 'expr14',
      selector: '[expr14]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInsparamtype(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Edit Inspection Param']
      }]
    }, {
      redundantAttribute: 'expr15',
      selector: '[expr15]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.moveSortPosDown(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Move Sort Position Down']
      }]
    }, {
      redundantAttribute: 'expr16',
      selector: '[expr16]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.moveSortPosUp(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Move Sort Position Up']
      }]
    }]),
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.preferences.insparamtype_list_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr18="expr18" class="uk-modal-title"> </h2><p expr19="expr19"> </p><p class="uk-text-center"><button expr20="expr20" class="uk-button uk-button-default uk-modal-close"> </button><button expr21="expr21" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-insparamtype-really-delete-', _scope.item.insparamtype.id].join('')
      }]
    }, {
      redundantAttribute: 'expr18',
      selector: '[expr18]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Inspection Param']
      }]
    }, {
      redundantAttribute: 'expr19',
      selector: '[expr19]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Inspection Param?']
      }]
    }, {
      redundantAttribute: 'expr20',
      selector: '[expr20]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr21',
      selector: '[expr21]',
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
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.preferences.insparamtype_list_items
  }]),
  name: 'preferences-page'
};

export { preferences_page as default };
