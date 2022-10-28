# from odoo import api, models
#
# class ParticularReport(models.AbstractModel):
#     _name = 'report.sales_quotation.export_in_pdf'
#
#     @api.model
#     def get_operations(self, name=False):
#         bom = self.env['sale.order'].browse(name)
#         print(bom)
#
#         values = {
#             'bom_id': bom,
#
#
#         }
#         return self.env.ref('sales_quotation.export_in_pdf')._render()