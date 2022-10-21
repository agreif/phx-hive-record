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
    newString(value) {
      switch (value) {
        case undefined:
          return "";
        default:
          return new String(value);
      }
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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<div><unauth-nav-tag expr0="expr0"></unauth-nav-tag><nav-tag expr1="expr1"></nav-tag><breadcrumb-tag expr2="expr2"></breadcrumb-tag><div class="uk-container"><register-page expr3="expr3"></register-page><login-page expr4="expr4"></login-page><error-page expr5="expr5"></error-page><location-list-page expr6="expr6"></location-list-page><location-add-update-page expr7="expr7"></location-add-update-page><location-detail-page expr8="expr8"></location-detail-page><hive-add-update-page expr9="expr9"></hive-add-update-page><hive-detail-page expr10="expr10"></hive-detail-page></div></div>', [{
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
    evaluate: _scope => _scope.data.breadcrumb,
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'breadcrumb-tag',
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
    redundantAttribute: 'expr3',
    selector: '[expr3]',
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
    redundantAttribute: 'expr4',
    selector: '[expr4]',
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
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.data.pages.error,
    redundantAttribute: 'expr5',
    selector: '[expr5]',
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
    redundantAttribute: 'expr6',
    selector: '[expr6]',
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
    redundantAttribute: 'expr7',
    selector: '[expr7]',
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
    redundantAttribute: 'expr8',
    selector: '[expr8]',
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
    redundantAttribute: 'expr9',
    selector: '[expr9]',
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
    evaluate: _scope => _scope.data.pages.hive_detail,
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    template: template(null, [{
      type: bindingTypes.TAG,
      getComponent: getComponent,
      evaluate: _scope => 'hive-detail-page',
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
