var register_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    register(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.register.form.post_data_url, this.context.data.pages.register.csrf_token, '#register');
    },
    showLoginPage() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.register.get_login_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-flex uk-flex-middle"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 expr0="expr0" class="uk-card-title uk-text-center"> </h3><form id="register"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr1="expr1"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input expr3="expr3" type="text" name="email" class="uk-input uk-form-large" placeholder="Email"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr4="expr4"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr6="expr6" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr7="expr7"></li></ul></div><div class="uk-margin"><button expr9="expr9" class="uk-button uk-button-primary uk-button-large uk-width-1-1"> </button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr10="expr10">Log in</a>\n\t\t  |\n\t\t  <a href="#">Forgot your password</a></div></form></div></div></div></div></div></div>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr2="expr2" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr2',
      selector: '[expr2]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.login
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.VALUE,
      evaluate: _scope => _scope.context.data.pages.register.form.params.email
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr5="expr5" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr5',
      selector: '[expr5]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.email
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr8="expr8" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr8',
      selector: '[expr8]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.register.form.errors.password
  }, {
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.register
    }]
  }, {
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'href',
      evaluate: _scope => _scope.context.data.pages.register.login_url
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.showLoginPage
    }]
  }]),
  name: 'register-page'
};

export { register_page as default };
