var login_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    sp: " ",
    login(event) {
      event.preventDefault();
      this.context.postForm(this.context.data.pages.login.form.post_data_url, this.context.data.pages.login.csrf_token, '#login', this.showErrorOrRedirectCallback);
    },
    showErrorOrRedirectCallback(data) {
      if (data.pages && data.pages.login) {
        this.context.updateData(data);
        this.context.updateHistory(data);
      } else {
        window.location.href = '/';
      }
    },
    showRegisterPage() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.login.get_register_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div class="uk-flex uk-flex-middle uk-margin-top"><div class="uk-width-1-1"><div class="uk-container"><div class="uk-grid-margin uk-grid uk-grid-stack" uk-grid><div class="uk-width-1-1@m"><div class="uk-margin uk-width-large uk-margin-auto uk-card uk-card-default uk-card-body uk-box-shadow-large"><h3 class="uk-card-title uk-text-center">Login</h3><form id="login"><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: user"></span><input type="text" name="login" class="uk-input uk-form-large" placeholder="Login"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr59="expr59"></li></ul></div><div class="uk-margin"><div class="uk-inline uk-width-1-1"><span class="uk-form-icon" uk-icon="icon: lock"></span><input expr61="expr61" type="password" name="password" class="uk-input uk-form-large"/></div><ul class="uk-list uk-list-collapse uk-margin-remove-top"><li expr62="expr62"></li></ul></div><ul class="uk-list uk-list-collapse"><li expr64="expr64"></li></ul><div class="uk-margin"><button expr66="expr66" class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button></div><div class="uk-text-small uk-text-center uk-margin-top"><a expr67="expr67"> </a>\n\t\t  |\n\t\t  <a expr68="expr68" href="#"> </a></div></form></div></div></div></div></div></div>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr60="expr60" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr60',
      selector: '[expr60]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr59',
    selector: '[expr59]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.login
  }, {
    redundantAttribute: 'expr61',
    selector: '[expr61]',
    expressions: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'placeholder',
      evaluate: _scope => _scope.context.data.translations['Password']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr63="expr63" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr63',
      selector: '[expr63]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr62',
    selector: '[expr62]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.password
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<span expr65="expr65" class="uk-text-danger"> </span>', [{
      redundantAttribute: 'expr65',
      selector: '[expr65]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.msg
      }]
    }]),
    redundantAttribute: 'expr64',
    selector: '[expr64]',
    itemName: 'msg',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.login.form.errors.misc
  }, {
    redundantAttribute: 'expr66',
    selector: '[expr66]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.login
    }]
  }, {
    redundantAttribute: 'expr67',
    selector: '[expr67]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Register']
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'href',
      evaluate: _scope => _scope.context.data.pages.login.register_url
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.showRegisterPage
    }]
  }, {
    redundantAttribute: 'expr68',
    selector: '[expr68]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Forgot your password']
    }]
  }]),
  name: 'login-page'
};

export { login_page as default };
