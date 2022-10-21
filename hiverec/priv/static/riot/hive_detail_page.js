var hive_detail_page = {
  css: null,
  exports: {
    onBeforeMount(props) {
      this.context = props.context;
    },
    editHive() {
      event.preventDefault();
      this.context.refreshDataGet(this.context.data.pages.hive_detail.get_hive_update_data_url);
    },
    addHive() {
      this.context.refreshDataGet(this.context.data.pages.hive_detail.get_hive_add_data_url);
    },
    detailHive(event, item) {
      event.preventDefault();
      this.context.refreshDataGet(item.get_hive_detail_data_url);
    },
    deleteHive(event, item) {
      this.context.refreshDataPost(item.post_hive_delete_data_url, item.csrf_token);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr0="expr0"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr1="expr1" class="uk-width-2-5"> </th><th expr2="expr2" class="uk-width-2-5"> </th><th></th></tr></thead><tbody><tr><td class="uk-table-link"><a expr3="expr3" class="uk-link-reset"> </a></td><td class="uk-table-link"><a expr4="expr4" class="uk-link-reset"><queen-dot-tag expr5="expr5" class="uk-margin-small-right"></queen-dot-tag> </a></td><td class="uk-width-small"><button expr6="expr6" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td></tr></tbody></table>', [{
    redundantAttribute: 'expr0',
    selector: '[expr0]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => [_scope.context.data.translations['Hive'], ': ', _scope.context.data.pages.hive_detail.hive.name].join('')
    }]
  }, {
    redundantAttribute: 'expr1',
    selector: '[expr1]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Name']
    }]
  }, {
    redundantAttribute: 'expr2',
    selector: '[expr2]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Queen']
    }]
  }, {
    redundantAttribute: 'expr3',
    selector: '[expr3]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.hive_detail.hive.name
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editHive
    }]
  }, {
    redundantAttribute: 'expr4',
    selector: '[expr4]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 1,
      evaluate: _scope => [_scope.context.data.pages.hive_detail.hive.queen_year].join('')
    }, {
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editHive
    }]
  }, {
    type: bindingTypes.TAG,
    getComponent: getComponent,
    evaluate: _scope => 'queen-dot-tag',
    slots: [],
    attributes: [{
      type: expressionTypes.ATTRIBUTE,
      name: 'isQueenMarked',
      evaluate: _scope => _scope.context.data.pages.hive_detail.hive.is_queen_marked
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'year',
      evaluate: _scope => _scope.context.data.pages.hive_detail.hive.queen_year
    }],
    redundantAttribute: 'expr5',
    selector: '[expr5]'
  }, {
    redundantAttribute: 'expr6',
    selector: '[expr6]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editHive
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Edit Hive']
    }]
  }]),
  name: 'hive-detail-page'
};

export { hive_detail_page as default };
