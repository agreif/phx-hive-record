var nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    changeNav(event, dataUrl) {
      event.preventDefault();
      this.context.refreshDataGet(dataUrl);
    },
    changeLocale(event, locale) {
      this.context.refreshDataGet(this.context.data.data_url + "?locale=" + locale);
    },
    logout() {
      event.preventDefault();
      this.context.postRequest(this.context.data.logout.post_url, this.context.data.logout.csrf_token, {}, this.redirectCallback);
    },
    redirectCallback(data) {
      window.location.href = '/';
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left uk-margin-left"><a class="uk-navbar-item uk-logo" href="#">HiveRec</a><ul class="uk-navbar-nav"><li expr0="expr0"></li></ul></div><div class="uk-navbar-right uk-margin-right"><ul class="uk-navbar-nav"><li expr3="expr3"></li><li expr5="expr5"></li><li><a expr7="expr7">Logout</a></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr1="expr1"></a><a expr2="expr2"></a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label,
      redundantAttribute: 'expr1',
      selector: '[expr1]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.navitem.label
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'href',
          evaluate: _scope => _scope.navitem.url
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => e => _scope.changeNav(e, _scope.navitem.data_url)
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label_msgid,
      redundantAttribute: 'expr2',
      selector: '[expr2]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.context.data.translations[_scope.navitem.label_msgid]
        }, {
          type: expressionTypes.ATTRIBUTE,
          name: 'href',
          evaluate: _scope => _scope.navitem.url
        }, {
          type: expressionTypes.EVENT,
          name: 'onclick',
          evaluate: _scope => e => _scope.changeNav(e, _scope.navitem.data_url)
        }]
      }])
    }]),
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    template: template('<a expr4="expr4">EN</a>', [{
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr5',
    selector: '[expr5]',
    template: template('<a expr6="expr6">DE</a>', [{
      redundantAttribute: 'expr6',
      selector: '[expr6]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }, {
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.logout
    }]
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
