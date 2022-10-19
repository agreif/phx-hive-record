var breadcrumb_tag = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<ul class="uk-breadcrumb uk-align-right"><li><a href="#">Bread</a></li><li><a href="#">Crumb</a></li><li class="uk-disabled"><a>Comming</a></li><li><span>soon</span></li></ul>', []),
  name: 'breadcrumb-tag'
};

export { breadcrumb_tag as default };
