var location_add_update_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.location_add_update.form.post_url, this.context.data.pages.location_add_update.csrf_token, '#location-add-update');
    },
    cancel(event) {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.location_add_update.get_location_list_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr8="expr8" class="uk-card-title"> </h2><form id="location-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr9="expr9" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr10="expr10" type="text" name="name" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr11="expr11"></li></ul></div></div><div class="uk-text-center"><button expr13="expr13" class="uk-button uk-button-default" type="button"> </button><button expr14="expr14" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr8',
    selector: '[expr8]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.location_add_update.title_msgid]
    }]
  }, {
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.location_add_update.form.params.name
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr12="expr12" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_add_update.form.errors.name
  }, {
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Cancel']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.cancel
    }]
  }, {
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Save']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.add
    }]
  }]),
  name: 'location-add-update-page'
};

export { location_add_update_page as default };
