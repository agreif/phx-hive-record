var inspection_add_update_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    add(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.inspection_add_update.form.post_data_url, this.context.data.pages.inspection_add_update.csrf_token, '#inspection-add-update');
    },
    cancel(event) {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.inspection_add_update.form.cancel_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-card uk-card-default uk-card-body uk-card-hover"><h2 expr0="expr0" class="uk-card-title"> </h2><form id="inspection-add-update" class="uk-form-horizontal uk-margin-large"><div class="uk-margin"><label expr1="expr1" class="uk-form-label" for="form-field-date"> </label><div class="uk-form-controls"><input expr2="expr2" id="form-field-date" type="date" name="date" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr3="expr3"></li></ul></div></div><div expr5="expr5" class="uk-margin"></div><div class="uk-text-center"><button expr28="expr28" class="uk-button uk-button-default" type="button"> </button><button expr29="expr29" class="uk-button uk-button-primary" type="button"> </button></div></form></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations[_scope.context.data.pages.inspection_add_update.title_msgid]
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Date']
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.params.date
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
    evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.errors.date
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<label expr6="expr6" class="uk-form-label"> </label><div expr7="expr7" class="uk-form-controls"></div><div expr11="expr11" class="uk-form-controls"></div><div expr15="expr15" class="uk-form-controls"></div><div expr19="expr19" class="uk-form-controls"></div><div expr23="expr23" class="uk-form-controls"></div>', [{
      redundantAttribute: 'expr6',
      selector: '[expr6]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.formField.name
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'for',
        evaluate: _scope => _scope.formField.id
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.formField.type == 'string',
      redundantAttribute: 'expr7',
      selector: '[expr7]',
      template: template('<input expr8="expr8" type="text" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr9="expr9"></li></ul>', [{
        redundantAttribute: 'expr8',
        selector: '[expr8]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'name',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.VALUE,
          evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.params[_scope.formField.id]
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
        evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.errors[_scope.formField.id]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.formField.type == 'int',
      redundantAttribute: 'expr11',
      selector: '[expr11]',
      template: template('<input expr12="expr12" type="text" class="uk-input"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr13="expr13"></li></ul>', [{
        redundantAttribute: 'expr12',
        selector: '[expr12]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'name',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.VALUE,
          evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.params[_scope.formField.id]
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
        evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.errors[_scope.formField.id]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.formField.type == 'bool',
      redundantAttribute: 'expr15',
      selector: '[expr15]',
      template: template('<input expr16="expr16" type="checkbox" class="uk-checkbox"/><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr17="expr17"></li></ul>', [{
        redundantAttribute: 'expr16',
        selector: '[expr16]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'name',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'checked',
          evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.params[_scope.formField.id]
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
        evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.errors[_scope.formField.id]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.formField.type == 'text',
      redundantAttribute: 'expr19',
      selector: '[expr19]',
      template: template('<textarea expr20="expr20" class="uk-textarea" rows="5" placeholder="Textarea"> </textarea><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr21="expr21"></li></ul>', [{
        redundantAttribute: 'expr20',
        selector: '[expr20]',
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => [_scope.context.data.pages.inspection_add_update.form.params[_scope.formField.id]].join('')
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'name',
          evaluate: _scope => _scope.formField.id
        }]
      }, {
        type: bindingTypes.EACH,
        getKey: null,
        condition: null,
        template: template('<span expr22="expr22" class="uk-text-danger"> </span>', [{
          redundantAttribute: 'expr22',
          selector: '[expr22]',
          expressions: [{
            type: expressionTypes.TEXT,
            childNodeIndex: 0,
            evaluate: _scope => _scope.msg
          }]
        }]),
        redundantAttribute: 'expr21',
        selector: '[expr21]',
        itemName: 'msg',
        indexName: null,
        evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.errors[_scope.formField.id]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.formField.type == 'dropdown',
      redundantAttribute: 'expr23',
      selector: '[expr23]',
      template: template('<select expr24="expr24" class="uk-select"><option expr25="expr25"></option></select><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr26="expr26"></li></ul>', [{
        redundantAttribute: 'expr24',
        selector: '[expr24]',
        expressions: [{
          type: expressionTypes.ATTRIBUTE,
          name: 'id',
          evaluate: _scope => _scope.formField.id
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'name',
          evaluate: _scope => _scope.formField.id
        }]
      }, {
        type: bindingTypes.EACH,
        getKey: null,
        condition: null,
        template: template(' ', [{
          expressions: [{
            type: expressionTypes.TEXT,
            childNodeIndex: 0,
            evaluate: _scope => _scope.option
          }, {
            type: expressionTypes.ATTRIBUTE,
            name: 'selected',
            evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.params[_scope.formField.id] == _scope.option
          }]
        }]),
        redundantAttribute: 'expr25',
        selector: '[expr25]',
        itemName: 'option',
        indexName: null,
        evaluate: _scope => _scope.formField.options.values
      }, {
        type: bindingTypes.EACH,
        getKey: null,
        condition: null,
        template: template('<span expr27="expr27" class="uk-text-danger"> </span>', [{
          redundantAttribute: 'expr27',
          selector: '[expr27]',
          expressions: [{
            type: expressionTypes.TEXT,
            childNodeIndex: 0,
            evaluate: _scope => _scope.msg
          }]
        }]),
        redundantAttribute: 'expr26',
        selector: '[expr26]',
        itemName: 'msg',
        indexName: null,
        evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.errors[_scope.formField.id]
      }])
    }]),
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    itemName: 'formField',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.inspection_add_update.form.form_fields
  }, {
    redundantAttribute: 'expr28',
    selector: '[expr28]',
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
    redundantAttribute: 'expr29',
    selector: '[expr29]',
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
  name: 'inspection-add-update-page'
};

export { inspection_add_update_page as default };
