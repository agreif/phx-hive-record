var location_add_update_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.location_add_update.form.post_data_url, this.context.data.pages.location_add_update.csrf_token, '#location-add-update');
    },
    cancel(event) {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.location_add_update.form.cancel_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr24="expr24" class="uk-card-title"> </h2><form id="location-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr25="expr25" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr26="expr26" type="text" name="name" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr27="expr27"></li></ul></div></div><div class="uk-text-center"><button expr29="expr29" class="uk-button uk-button-default" type="button"> </button><button expr30="expr30" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr24',
    selector: '[expr24]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.location_add_update.title_msgid]
    }]
  }, {
    redundantAttribute: 'expr25',
    selector: '[expr25]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr26',
    selector: '[expr26]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.location_add_update.form.params.name
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr28="expr28" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr28',
      selector: '[expr28]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr27',
    selector: '[expr27]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.location_add_update.form.errors.name
  }, {
    redundantAttribute: 'expr29',
    selector: '[expr29]',
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
    redundantAttribute: 'expr30',
    selector: '[expr30]',
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
