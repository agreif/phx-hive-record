var demo1_add_update_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.demo1_add_update.form.post_url, this.context.data.pages.demo1_add_update.csrf_token, '#demo1-add-update');
    },
    cancel(event) {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.demo1_add_update.get_demo1_list_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr65="expr65" class="uk-card-title"> </h2><form id="demo1-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr66="expr66" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr67="expr67" type="text" name="attr1" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr68="expr68"></li></ul></div></div><div class="uk-margin"><label expr70="expr70" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr71="expr71" type="text" name="attr2" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr72="expr72"></li></ul></div></div><div class="uk-text-center"><button expr74="expr74" class="uk-button uk-button-default" type="button"> </button><button expr75="expr75" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr65',
    selector: '[expr65]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.demo1_add_update.title_msgid]
    }]
  }, {
    redundantAttribute: 'expr66',
    selector: '[expr66]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 1']
    }]
  }, {
    redundantAttribute: 'expr67',
    selector: '[expr67]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.params.attr1
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr69="expr69" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr69',
      selector: '[expr69]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr68',
    selector: '[expr68]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.errors.attr1
  }, {
    redundantAttribute: 'expr70',
    selector: '[expr70]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Attribute 2']
    }]
  }, {
    redundantAttribute: 'expr71',
    selector: '[expr71]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.params.attr2
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr73="expr73" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr73',
      selector: '[expr73]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr72',
    selector: '[expr72]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.demo1_add_update.form.errors.attr2
  }, {
    redundantAttribute: 'expr74',
    selector: '[expr74]',
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
    redundantAttribute: 'expr75',
    selector: '[expr75]',
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
  name: 'demo1-add-update-page'
};

export { demo1_add_update_page as default };
