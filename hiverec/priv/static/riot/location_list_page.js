var location_list_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    addLocation() {
      this.context.refreshDataGet(this.context.data.pages.location_list.get_location_add_data_url);
    },
    editLocation(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_location_update_data_url);
    },
    deleteLocation(event, item) {
      this.context.refreshDataPost(item.post_location_delete_data_url, item.csrf_token);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr15="expr15"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr16="expr16" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr17="expr17" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr18="expr18"></tr></tbody></table><div expr22="expr22" uk-modal></div>', [{
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Locations']
    }]
  }, {
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.addLocation
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Add Location']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td class="uk-table-link"><a expr19="expr19" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr20="expr20" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr21="expr21" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td>', [{
      redundantAttribute: 'expr19',
      selector: '[expr19]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.entity.name
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editLocation(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr20',
      selector: '[expr20]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-location-really-delete-', _scope.item.entity.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Location']
      }]
    }, {
      redundantAttribute: 'expr21',
      selector: '[expr21]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editLocation(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Edit Location']
      }]
    }]),
    redundantAttribute: 'expr18',
    selector: '[expr18]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_list.location_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr23="expr23" class="uk-modal-title"> </h2><p expr24="expr24"> </p><p class="uk-text-center"><button expr25="expr25" class="uk-button uk-button-default uk-modal-close"> </button><button expr26="expr26" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-location-really-delete-', _scope.item.entity.id].join('')
      }]
    }, {
      redundantAttribute: 'expr23',
      selector: '[expr23]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Location']
      }]
    }, {
      redundantAttribute: 'expr24',
      selector: '[expr24]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Location?']
      }]
    }, {
      redundantAttribute: 'expr25',
      selector: '[expr25]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr26',
      selector: '[expr26]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Delete']].join('')
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.deleteLocation(e, _scope.item)
      }]
    }]),
    redundantAttribute: 'expr22',
    selector: '[expr22]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_list.location_items
  }]),
  name: 'location-list-page'
};

export { location_list_page as default };
