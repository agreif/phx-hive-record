var hive_add_update_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.hive_add_update.form.post_data_url, this.context.data.pages.hive_add_update.csrf_token, '#hive-add-update');
    },
    cancel(event) {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.hive_add_update.form.cancel_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr0="expr0" class="uk-card-title"> </h2><form id="hive-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr1="expr1" class="uk-form-label" for="form-horizontal-text"> </label><div class="uk-form-controls"><input expr2="expr2" type="text" name="name" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr3="expr3"></li></ul><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr5="expr5"></li></ul></div></div><div class="uk-text-center"><button expr7="expr7" class="uk-button uk-button-default" type="button"> </button><button expr8="expr8" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.hive_add_update.title_msgid]
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
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.hive_add_update.form.params.name
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr4="expr4" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_add_update.form.errors.name
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr6="expr6" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr6',
      selector: '[expr6]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_add_update.form.errors.location_id
  }, {
    redundantAttribute: 'expr7',
    selector: '[expr7]',
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
    redundantAttribute: 'expr8',
    selector: '[expr8]',
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
  name: 'hive-add-update-page'
};

export { hive_add_update_page as default };
