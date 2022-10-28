odoo.define('sales_quotation.tree_button', function (require) {
"use strict";
var ListController = require('web.ListController');
var ListView = require('web.ListView');
var viewRegistry = require('web.view_registry');
var rpc = require('web.rpc');
var ajax = require('web.ajax');
var TreeButton = ListController.extend({
   buttons_template: 'sales_quotation.buttons',

   events: _.extend({}, ListController.prototype.events, {
      'click .o_list_export_pdf': '_onClickPrint',
   }),


   _onClickPrint: function(){
        var self = this;
        var fields=this._getExportDialogWidget().defaultExportFields;
        console.log('ff',fields)
        let exported_fields = this._getExportDialogWidget().defaultExportFields.map(field => ({
            name: field,
            label: this._getExportDialogWidget().record.fields[field].string,
        }));
        let groupedBy = this.renderer.state.groupedBy;
        var length_field = Array.from(Array(fields.length).keys());
        var records=this._getExportDialogWidget().record.res_ids
        var data_len=Array.from(Array(records.length).keys());
        var group_length=Array.from(Array(self.renderer.state.groupsCount).keys());


         console.log('ff',exported_fields)
         console.log("bfbfsw",groupedBy)
         console.log("pp",length_field)
         console.log("records",records)
         console.log("datalen",data_len)
         console.log("group",group_length)






        var reportage = 'sales_quotation.export_in_pdf?docids='  +records+


                          '&report_type=qweb-pdf&model_name=sale.order';

        var action = {
            'type': 'ir.actions.report',
            'report_type': 'qweb-pdf',
            'report_name': reportage,
            'report_file': 'sales_quotation.export_in_pdf',

           };
        console.log("action",action)
        console.log("nn",this.do_action(action))
        return this.do_action(action);

    },

});
var SaleOrderListView = ListView.extend({
   config: _.extend({}, ListView.prototype.config, {
       Controller: TreeButton,

   }),
});


viewRegistry.add('button_in_tree', SaleOrderListView);
});
