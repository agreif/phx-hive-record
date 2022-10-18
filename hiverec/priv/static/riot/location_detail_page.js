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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr31="expr31"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr32="expr32" class="uk-width-2-5"> </th><th></th></tr></thead><tbody><tr><td class="uk-table-link"><a expr33="expr33" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr34="expr34" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td></tr></tbody></table><h2 expr35="expr35"> </h2><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr36="expr36" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr37="expr37" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr38="expr38"></tr></tbody></table><div expr42="expr42" uk-modal></div>', [{
    redundantAttribute: 'expr31',
    selector: '[expr31]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => [_scope.context.data.translations['Location'], ': ', _scope.context.data.pages.location_detail.location.name].join('')
    }]
  }, {
    redundantAttribute: 'expr32',
    selector: '[expr32]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr33',
    selector: '[expr33]',
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
    redundantAttribute: 'expr34',
    selector: '[expr34]',
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
    redundantAttribute: 'expr35',
    selector: '[expr35]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Hives']
    }]
  }, {
    redundantAttribute: 'expr36',
    selector: '[expr36]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr37',
    selector: '[expr37]',
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
    template: template('<td class="uk-table-link"><a expr39="expr39" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr40="expr40" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr41="expr41" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: file-edit"></span></button></td>', [{
      redundantAttribute: 'expr39',
      selector: '[expr39]',
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
      redundantAttribute: 'expr40',
      selector: '[expr40]',
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
      redundantAttribute: 'expr41',
      selector: '[expr41]',
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
    redundantAttribute: 'expr38',
    selector: '[expr38]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_detail.hive_list_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr43="expr43" class="uk-modal-title"> </h2><p expr44="expr44"> </p><p class="uk-text-center"><button expr45="expr45" class="uk-button uk-button-default uk-modal-close"> </button><button expr46="expr46" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-hive-really-delete-', _scope.item.hive.id].join('')
      }]
    }, {
      redundantAttribute: 'expr43',
      selector: '[expr43]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Hive']
      }]
    }, {
      redundantAttribute: 'expr44',
      selector: '[expr44]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Hive?']
      }]
    }, {
      redundantAttribute: 'expr45',
      selector: '[expr45]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr46',
      selector: '[expr46]',
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
    redundantAttribute: 'expr42',
    selector: '[expr42]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_detail.hive_list_items
  }]),
  name: 'location-detail-page'
};

export { location_detail_page as default };
