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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr0="expr0" class="uk-card-title"> </h2><form id="hive-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr1="expr1" class="uk-form-label"> </label><div class="uk-form-controls"><input expr2="expr2" type="text" name="name" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr3="expr3"></li></ul><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr5="expr5"></li></ul></div><label expr7="expr7" class="uk-form-label"> </label><div class="uk-form-controls"><input expr8="expr8" type="text" name="queen_year" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr9="expr9"></li></ul></div><label expr11="expr11" class="uk-form-label" for="is_queen_marked"> </label><div class="uk-form-controls"><input expr12="expr12" id="is_queen_marked" type="checkbox" class="uk-checkbox" name="is_queen_marked" value="true"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr13="expr13"></li></ul></div><label expr15="expr15" class="uk-form-label"> </label><div class="uk-form-controls"><textarea expr16="expr16" class="uk-textarea" rows="5" name="notes"> </textarea><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr17="expr17"></li></ul></div></div><div class="uk-text-center"><button expr19="expr19" class="uk-button uk-button-default" type="button"> </button><button expr20="expr20" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
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
      evaluate: _scope => _scope.context.newString(_scope.context.data.pages.hive_add_update.form.params.name)
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
      evaluate: _scope => _scope.context.data.translations['Queen Year']
    }]
  }, {
    redundantAttribute: 'expr8',
    selector: '[expr8]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.hive_add_update.form.params.queen_year
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr10="expr10" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_add_update.form.errors.queen_year
  }, {
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Is Queen Marked?']
    }]
  }, {
    redundantAttribute: 'expr12',
    selector: '[expr12]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'checked',
      evaluate: _scope => _scope.context.data.pages.hive_add_update.form.params.is_queen_marked
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr14="expr14" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr14',
      selector: '[expr14]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_add_update.form.errors.is_queen_marked
  }, {
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Notes']
    }]
  }, {
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.hive_add_update.form.params.notes
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr18="expr18" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr18',
      selector: '[expr18]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_add_update.form.errors.notes
  }, {
    redundantAttribute: 'expr19',
    selector: '[expr19]',
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
    redundantAttribute: 'expr20',
    selector: '[expr20]',
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
