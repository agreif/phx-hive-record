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
    },
    addInspection() {
      this.context.refreshDataGet(this.context.data.pages.hive_detail.get_inspection_add_data_url);
    },
    deleteInspection(event, item) {
      this.context.refreshDataPost(item.post_inspection_delete_data_url, item.csrf_token);
    },
    editInspection(event, item) {
      this.context.refreshDataGet(item.get_inspection_update_data_url);
    }
  },
  template: (template, expressionTypes, bindingTypes, getComponent) => template('<h1 expr0="expr0"> </h1><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr1="expr1" class> </th><th expr2="expr2" class> </th><th expr3="expr3" class> </th><th></th></tr></thead><tbody><tr><td class="uk-table-link"><a expr4="expr4" class="uk-link-reset"> </a></td><td class="uk-table-link"><a expr5="expr5" class="uk-link-reset"><queen-dot-tag expr6="expr6" class="uk-margin-small-right"></queen-dot-tag> </a></td><td class="uk-table-link"><a expr7="expr7" class="uk-link-reset"><span expr8="expr8" class="textarea-wrap"> </span></a></td><td class="uk-width-small"><button expr9="expr9" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td></tr></tbody></table><h2 expr10="expr10"> </h2><table class="uk-table uk-table-small uk-table-divider uk-table-hover uk-background-muted"><thead><tr><th expr11="expr11" class> </th><th class="uk-align-right"><button expr12="expr12" class="uk-background-primary uk-light uk-padding-small modal-form-link uk-button uk-button-link" uk-tooltip><span uk-icon="icon: plus"></span></button></th></tr></thead><tbody><tr expr13="expr13"></tr></tbody></table><div expr17="expr17" uk-modal></div>', [{
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
      evaluate: _scope => _scope.context.data.translations['Notes']
    }]
  }, {
    redundantAttribute: 'expr4',
    selector: '[expr4]',
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
    redundantAttribute: 'expr5',
    selector: '[expr5]',
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
    redundantAttribute: 'expr6',
    selector: '[expr6]'
  }, {
    redundantAttribute: 'expr7',
    selector: '[expr7]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editHive
    }]
  }, {
    redundantAttribute: 'expr8',
    selector: '[expr8]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.pages.hive_detail.hive.notes
    }]
  }, {
    redundantAttribute: 'expr9',
    selector: '[expr9]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.editHive
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Edit Hive']
    }]
  }, {
    redundantAttribute: 'expr10',
    selector: '[expr10]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Inspections']
    }]
  }, {
    redundantAttribute: 'expr11',
    selector: '[expr11]',
    expressions: [{
      type: expressionTypes.TEXT,
      childNodeIndex: 0,
      evaluate: _scope => _scope.context.data.translations['Date']
    }]
  }, {
    redundantAttribute: 'expr12',
    selector: '[expr12]',
    expressions: [{
      type: expressionTypes.EVENT,
      name: 'onclick',
      evaluate: _scope => _scope.addInspection
    }, {
      type: expressionTypes.ATTRIBUTE,
      name: 'title',
      evaluate: _scope => _scope.context.data.translations['Add Inspection']
    }]
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<td class="uk-table-link"><a expr14="expr14" class="uk-link-reset"> </a></td><td class="uk-width-small"><button expr15="expr15" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: trash"></span></button><button expr16="expr16" class="uk-float-right uk-button uk-button-link" uk-tooltip><span uk-icon="icon: pencil"></span></button></td>', [{
      redundantAttribute: 'expr14',
      selector: '[expr14]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.item.inspection.date
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInspection(e, _scope.item)
      }]
    }, {
      redundantAttribute: 'expr15',
      selector: '[expr15]',
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'uk-toggle',
        evaluate: _scope => ['target: #modal-inspection-really-delete-', _scope.item.inspection.id].join('')
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Delete Inspection']
      }]
    }, {
      redundantAttribute: 'expr16',
      selector: '[expr16]',
      expressions: [{
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.editInspection(e, _scope.item)
      }, {
        type: expressionTypes.ATTRIBUTE,
        name: 'title',
        evaluate: _scope => _scope.context.data.translations['Edit Inspection']
      }]
    }]),
    redundantAttribute: 'expr13',
    selector: '[expr13]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_detail.inspection_list_items
  }, {
    type: bindingTypes.EACH,
    getKey: null,
    condition: null,
    template: template('<div class="uk-modal-dialog uk-modal-body"><h2 expr18="expr18" class="uk-modal-title"> </h2><p expr19="expr19"> </p><p class="uk-text-center"><button expr20="expr20" class="uk-button uk-button-default uk-modal-close"> </button><button expr21="expr21" class="uk-button uk-button-primary uk-modal-close"> </button></p></div>', [{
      expressions: [{
        type: expressionTypes.ATTRIBUTE,
        name: 'id',
        evaluate: _scope => ['modal-inspection-really-delete-', _scope.item.inspection.id].join('')
      }]
    }, {
      redundantAttribute: 'expr18',
      selector: '[expr18]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Delete Inspection']
      }]
    }, {
      redundantAttribute: 'expr19',
      selector: '[expr19]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => _scope.context.data.translations['Do you really want to delete this Inspection?']
      }]
    }, {
      redundantAttribute: 'expr20',
      selector: '[expr20]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Cancel']].join('')
      }]
    }, {
      redundantAttribute: 'expr21',
      selector: '[expr21]',
      expressions: [{
        type: expressionTypes.TEXT,
        childNodeIndex: 0,
        evaluate: _scope => [_scope.context.data.translations['Delete']].join('')
      }, {
        type: expressionTypes.EVENT,
        name: 'onclick',
        evaluate: _scope => e => _scope.deleteInspection(e, _scope.item)
      }]
    }]),
    redundantAttribute: 'expr17',
    selector: '[expr17]',
    itemName: 'item',
    indexName: null,
    evaluate: _scope => _scope.context.data.pages.hive_detail.inspection_list_items
  }]),
  name: 'hive-detail-page'
};

export { hive_detail_page as default };
