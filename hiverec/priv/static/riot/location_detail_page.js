var location_detail_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    editLocation() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.location_detail.get_location_update_data_url);
    },
    addHive() {
      this.context.refreshDataGet(this.context.data.pages.location_detail.get_hive_add_data_url);
    },
    detailHive(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_hive_detail_data_url);
    },
    deleteHive(event, item) {
      this.context.refreshDataPost(item.post_hive_delete_data_url, item.csrf_token);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr0="expr0"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr1="expr1" class="uk-width-2-5"> </th><th></th></tr></thead><tbody><tr><td class="uk-table-link"><a expr2="expr2" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr3="expr3" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td></tr></tbody></table><h2 expr4="expr4"> </h2><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr5="expr5" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr6="expr6" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr7="expr7"></tr></tbody></table><div expr11="expr11" uk-modal></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => [_scope.context.data.translations['Location'], ': ', _scope.context.data.pages.location_detail.location.name].join('')
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
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.location_detail.location.name
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editLocation
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editLocation
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Edit Location']
    }]
  }, {
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Hives']
    }]
  }, {
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.addHive
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Add Hive']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td class="uk-table-link"><a expr8="expr8" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr9="expr9" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr10="expr10" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: file-edit"></span></button></td>', [{
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.hive.name
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.detailHive(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr9',
      selector: '[expr9]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-hive-really-delete-', _scope.item.hive.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Hive']
      }]
    }, {
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.detailHive(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Hive Detail']
      }]
    }]),
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_detail.hive_list_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr12="expr12" class="uk-modal-title"> </h2><p expr13="expr13"> </p><p class="uk-text-center"><button expr14="expr14" class="uk-button uk-button-default uk-modal-close"> </button><button expr15="expr15" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-hive-really-delete-', _scope.item.hive.id].join('')
      }]
    }, {
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Hive']
      }]
    }, {
      redundantAttribute: 'expr13',
      selector: '[expr13]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Hive?']
      }]
    }, {
      redundantAttribute: 'expr14',
      selector: '[expr14]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr15',
      selector: '[expr15]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Delete']].join('')
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.deleteHive(e, _scope.item)
      }]
    }]),
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_detail.hive_list_items
  }]),
  name: 'location-detail-page'
};

export { location_detail_page as default };
