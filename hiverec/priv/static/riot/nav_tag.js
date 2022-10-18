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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left uk-margin-left"><a class="uk-navbar-item uk-logo" href="#">HiveRec</a><ul class="uk-navbar-nav"><li expr62="expr62"></li></ul></div><div class="uk-navbar-right uk-margin-right"><ul class="uk-navbar-nav"><li expr65="expr65"></li><li expr67="expr67"></li><li><a expr69="expr69">Logout</a></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr63="expr63"></a><a expr64="expr64"></a>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label,
      redundantAttribute: 'expr63',
      selector: '[expr63]',
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
      redundantAttribute: 'expr64',
      selector: '[expr64]',
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
    redundantAttribute: 'expr62',
    selector: '[expr62]',
    itemName: 'navitem',
    indexName: null,
    evaluate: _scope => _scope.context.data.navbar.navitems
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr65',
    selector: '[expr65]',
    template: template('<a expr66="expr66">EN</a>', [{
      redundantAttribute: 'expr66',
      selector: '[expr66]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr67',
    selector: '[expr67]',
    template: template('<a expr68="expr68">DE</a>', [{
      redundantAttribute: 'expr68',
      selector: '[expr68]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }, {
    redundantAttribute: 'expr69',
    selector: '[expr69]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.logout
    }]
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
