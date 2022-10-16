var location_detail_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    editLocation() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.location_detail.get_location_update_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr16="expr16"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr17="expr17" class="uk-width-2-5"> </th><th></th></tr></thead><tbody><tr><td class="uk-table-link"><a expr18="expr18" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr19="expr19" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td></tr></tbody></table>', [{
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => [_scope.context.data.translations['Location'], ': ', _scope.context.data.pages.location_detail.location.name].join('')
    }]
  }, {
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr18',
    selector: '[expr18]',
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
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editLocation
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Edit Location']
    }]
  }]),
  name: 'location-list-page'
};

export { location_detail_page as default };
