var location_list_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    addLocation() {
      this.context.refreshDataGet(this.context.data.pages.location_list.get_location_add_data_url);
    },
    detailLocation(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_location_detail_data_url);
    },
    deleteLocation(event, item) {
      this.context.refreshDataPost(item.post_location_delete_data_url, item.csrf_token);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr47="expr47"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr48="expr48" class="uk-width-2-5"> </th><th class="uk-align-right"><button expr49="expr49" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr50="expr50"></tr></tbody></table><div expr54="expr54" uk-modal></div>', [{
    redundantAttribute: 'expr47',
    selector: '[expr47]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Locations']
    }]
  }, {
    redundantAttribute: 'expr48',
    selector: '[expr48]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr49',
    selector: '[expr49]',
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
    template: template('<td class="uk-table-link"><a expr51="expr51" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr52="expr52" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr53="expr53" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: file-edit"></span></button></td>', [{
      redundantAttribute: 'expr51',
      selector: '[expr51]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.location.name
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.detailLocation(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr52',
      selector: '[expr52]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-location-really-delete-', _scope.item.location.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Location']
      }]
    }, {
      redundantAttribute: 'expr53',
      selector: '[expr53]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.detailLocation(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Location Detail']
      }]
    }]),
    redundantAttribute: 'expr50',
    selector: '[expr50]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_list.location_list_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr55="expr55" class="uk-modal-title"> </h2><p expr56="expr56"> </p><p class="uk-text-center"><button expr57="expr57" class="uk-button uk-button-default uk-modal-close"> </button><button expr58="expr58" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-location-really-delete-', _scope.item.location.id].join('')
      }]
    }, {
      redundantAttribute: 'expr55',
      selector: '[expr55]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Location']
      }]
    }, {
      redundantAttribute: 'expr56',
      selector: '[expr56]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Location?']
      }]
    }, {
      redundantAttribute: 'expr57',
      selector: '[expr57]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr58',
      selector: '[expr58]',
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
    redundantAttribute: 'expr54',
    selector: '[expr54]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_list.location_list_items
  }]),
  name: 'location-list-page'
};

export { location_list_page as default };
