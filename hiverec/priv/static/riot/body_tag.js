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
    refreshDataPost(dataUrl, csrfToken) {
      this.postRequest(dataUrl, csrfToken, {});
    },
    postRequest(dataUrl, csrfToken, json, callbackFun) {
      fetch(dataUrl, {
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
    postForm(dataUrl, csrfToken, formSelector, callbackFun) {
      const formData = new FormData(this.$(formSelector));
      const formJson = Object.fromEntries(formData.entries());
      this.postRequest(dataUrl, csrfToken, formJson, callbackFun);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div><unauth-nav-tag expr0="expr0"></unauth-nav-tag><nav-tag expr1="expr1"></nav-tag><div class="uk-container"><error-page expr2="expr2"></error-page><location-list-page expr3="expr3"></location-list-page><location-add-update-page expr4="expr4"></location-add-update-page><location-detail-page expr5="expr5"></location-detail-page><hive-add-update-page expr6="expr6"></hive-add-update-page><register-page expr7="expr7"></register-page><login-page expr8="expr8"></login-page></div></div>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.register || _scope.data.pages.login,
    redundantAttribute: 'expr0',
    selector: '[expr0]',
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
    redundantAttribute: 'expr1',
    selector: '[expr1]',
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
    redundantAttribute: 'expr2',
    selector: '[expr2]',
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
    evaluate: _scope => _scope.data.pages.location_list,
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'location-list-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.location_add_update,
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'location-add-update-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.location_detail,
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'location-detail-page',
      slots: [],
      attributes: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'context',
        evaluate: _scope => _scope
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.hive_add_update,
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'hive-add-update-page',
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
    redundantAttribute: 'expr7',
    selector: '[expr7]',
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
    redundantAttribute: 'expr8',
    selector: '[expr8]',
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
