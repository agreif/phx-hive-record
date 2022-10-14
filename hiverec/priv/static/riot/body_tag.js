var body_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.data = {
        pages: {}
      };
    },
    uikit() {
      return UIkit;
    },
    updateData(newData) {
      this.data = newData;
      this.update();
    },
    updateHistory(newData) {
      if (newData.history_state && (!window.history.state || !window.history.state.data_url || window.history.state.data_url && window.history.state.data_url != newData.data_url)) {
        window.history.pushState({
          data_url: newData.data_url
        }, newData.history_state.title, newData.history_state.url);
      }
    },
    refreshDataGet(dataUrl) {
      fetch(dataUrl).then(res => res.json()).then(newData => {
        this.updateData(newData);
        this.updateHistory(newData);
      }).catch(err => console.error(err));
    },
    refreshDataPost(postUrl, csrfToken) {
      this.postRequest(postUrl, csrfToken, {});
    },
    postRequest(postUrl, csrfToken, json, callbackFun) {
      fetch(postUrl, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-csrf-token': csrfToken
        },
        body: JSON.stringify(json)
      }).then(async rawResponse => {
        var newData = await rawResponse.json();
        if (typeof callbackFun === 'function') {
          callbackFun(newData);
        } else {
          this.updateData(newData);
          this.updateHistory(newData);
        }
      });
    },
    postForm(url, csrfToken, formSelector, callbackFun) {
      const formData = new FormData(this.$(formSelector));
      const formJson = Object.fromEntries(formData.entries());
      this.postRequest(url, csrfToken, formJson, callbackFun);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div><unauth-nav-tag expr14="expr14"></unauth-nav-tag><nav-tag expr15="expr15"></nav-tag><div class="uk-container"><error-page expr16="expr16"></error-page><demo1-list-page expr17="expr17"></demo1-list-page><demo1-add-update-page expr18="expr18"></demo1-add-update-page><register-page expr19="expr19"></register-page><login-page expr20="expr20"></login-page></div></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.register || _scope.data.pages.login,
    redundantAttribute: 'expr14',
    selector: '[expr14]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'unauth-nav-tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.navbar,
    redundantAttribute: 'expr15',
    selector: '[expr15]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'nav-tag',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.error,
    redundantAttribute: 'expr16',
    selector: '[expr16]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'error-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.demo1_list,
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo1-list-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.demo1_add_update,
    redundantAttribute: 'expr18',
    selector: '[expr18]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'demo1-add-update-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.register,
    redundantAttribute: 'expr19',
    selector: '[expr19]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'register-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.login,
    redundantAttribute: 'expr20',
    selector: '[expr20]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'login-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }]),
  name: 'body-tag'
};

export { body_tag as default };
