var unauth_nav_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    changeLocale(event, locale) {
      this.context.refreshDataGet(this.context.data.data_url + "?locale=" + locale);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<nav class="uk-navbar-container uk-margin" uk-navbar><div class="uk-navbar-left uk-margin-left"><a class="uk-navbar-item uk-logo" href="#">HiveRec</a></div><div class="uk-navbar-right uk-margin-right"><ul class="uk-navbar-nav"><li expr61="expr61"></li><li expr63="expr63"></li></ul></div></nav>', [{
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'de',
    redundantAttribute: 'expr61',
    selector: '[expr61]',
    template: template('<a expr62="expr62">EN</a>', [{
      redundantAttribute: 'expr62',
      selector: '[expr62]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'en')
      }]
    }])
  }, {
    type: bindingTypes.IF,
    evaluate: _scope => _scope.context.data.locale == 'en',
    redundantAttribute: 'expr63',
    selector: '[expr63]',
    template: template('<a expr64="expr64">DE</a>', [{
      redundantAttribute: 'expr64',
      selector: '[expr64]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.changeLocale(e, 'de')
      }]
    }])
  }]),
  name: 'unauth-nav-tag'
};

export { unauth_nav_tag as default };
