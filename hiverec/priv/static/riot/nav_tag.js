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
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left uk-margin-left"><a class="uk-navbar-item uk-logo" href="#">HiveRec</a><ul class="uk-navbar-nav"><li expr0="expr0"></li></ul></div><div class="uk-navbar-right uk-margin-right"><ul class="uk-navbar-nav"><li expr9="expr9"></li><li expr11="expr11"></li><li><a expr13="expr13">Logout</a></li></ul></div></nav>', [{
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<a expr1="expr1"></a><a expr2="expr2"></a><a expr3="expr3" href="#"></a><a expr4="expr4" href="#"></a><div expr5="expr5" class="uk-navbar-dropdown uk-navbar-dropdown-width-2"></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'class',
        evaluate: _scope => _scope.navitem.is_active ? 'uk-active' : null
      }]
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label && !_scope.navitem.dropdown_items,
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
      evaluate: _scope => _scope.navitem.label_msgid && !_scope.navitem.dropdown_items,
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
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label && _scope.navitem.dropdown_items,
      redundantAttribute: 'expr3',
      selector: '[expr3]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.navitem.label
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.label_msgid && _scope.navitem.dropdown_items,
      redundantAttribute: 'expr4',
      selector: '[expr4]',
      template: template(' ', [{
        expressions: [{
          type: expressionTypes.TEXT,
          childNodeIndex: 0,
          evaluate: _scope => _scope.context.data.translations[_scope.navitem.label_msgid]
        }]
      }])
    }, {
      type: bindingTypes.IF,
      evaluate: _scope => _scope.navitem.dropdown_items,
      redundantAttribute: 'expr5',
      selector: '[expr5]',
      template: template('<ul class="uk-nav uk-navbar-dropdown-nav"><li expr6="expr6"></li></ul>', [{
        type: bindingTypes.EACH,
        getKey: null,
        condition: null,
        template: template(' <a expr7="expr7"></a><a expr8="expr8"></a>', [{
          expressions: [{
            type: expressionTypes.TEXT,
            childNodeIndex: 0,
            evaluate: _scope => [_scope.dropitem.is_header ? _scope.dropitem.label : ''].join('')
          }, {
            type: expressionTypes.ATTRIBUTE,
            name: 'class',
            evaluate: _scope => _scope.dropitem.is_header ? 'uk-nav-header' : null
          }, {
            type: expressionTypes.ATTRIBUTE,
            name: 'uk-toggle',
            evaluate: _scope => 'target: .uk-navbar-dropdown'
          }]
        }, {
          type: bindingTypes.IF,
          evaluate: _scope => _scope.dropitem.label && !_scope.dropitem.is_header,
          redundantAttribute: 'expr7',
          selector: '[expr7]',
          template: template(' ', [{
            expressions: [{
              type: expressionTypes.TEXT,
              childNodeIndex: 0,
              evaluate: _scope => _scope.dropitem.label
            }, {
              type: expressionTypes.ATTRIBUTE,
              name: 'href',
              evaluate: _scope => _scope.dropitem.url
            }, {
              type: expressionTypes.EVENT,
              name: 'onclick',
              evaluate: _scope => e => _scope.changeNav(e, _scope.dropitem.data_url)
            }]
          }])
        }, {
          type: bindingTypes.IF,
          evaluate: _scope => _scope.dropitem.label_msgid && !_scope.dropitem.is_header,
          redundantAttribute: 'expr8',
          selector: '[expr8]',
          template: template(' ', [{
            expressions: [{
              type: expressionTypes.TEXT,
              childNodeIndex: 0,
              evaluate: _scope => _scope.context.data.translations[_scope.dropitem.label_msgid]
            }, {
              type: expressionTypes.ATTRIBUTE,
              name: 'href',
              evaluate: _scope => _scope.dropitem.url
            }, {
              type: expressionTypes.EVENT,
              name: 'onclick',
              evaluate: _scope => e => _scope.changeNav(e, _scope.dropitem.data_url)
            }]
          }])
        }]),
        redundantAttribute: 'expr6',
        selector: '[expr6]',
        itemName: 'dropitem',
        indexName: null,
        evaluate: _scope => _scope.navitem.dropdown_items
      }])
    }]),
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    itemName: 'navitem',
    indexName: 'index',
    evaluate: _scope => _scope.context.data.navbar.navitems
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    template: template('<a expr10="expr10">EN</a>', [{
      redundantAttribute: 'expr10',
      selector: '[expr10]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    template: template('<a expr12="expr12">DE</a>', [{
      redundantAttribute: 'expr12',
      selector: '[expr12]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }, {
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.logout
    }]
  }]),
  name: 'nav-tag'
};

export { nav_tag as default };
