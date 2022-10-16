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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left uk-margin-left"><a class="uk-navbar-item uk-logo" href="#">HiveRec</a><ul class="uk-navbar-nav"><li expr42="expr42"></li></ul></div><div class="uk-navbar-right uk-margin-right"><ul class="uk-navbar-nav"><li expr45="expr45"></li><li expr47="expr47"></li><li><a expr49="expr49">Logout</a></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr43="expr43"></a><a expr44="expr44"></a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label,
      redundantAttribute: 'expr43',
      selector: '[expr43]',
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
      redundantAttribute: 'expr44',
      selector: '[expr44]',
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
    redundantAttribute: 'expr42',
    selector: '[expr42]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr45',
    selector: '[expr45]',
    template: template('<a expr46="expr46">EN</a>', [{
      redundantAttribute: 'expr46',
      selector: '[expr46]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr47',
    selector: '[expr47]',
    template: template('<a expr48="expr48">DE</a>', [{
      redundantAttribute: 'expr48',
      selector: '[expr48]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }, {
    redundantAttribute: 'expr49',
    selector: '[expr49]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.logout
    }]
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
