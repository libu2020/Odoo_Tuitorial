{
    'name': 'Sale Quotation',
    'version': '14.0.2.1.0',
    'summary': 'Sale Quotation',
    'sequence': 10,
    'description': """Sale Quotation""",
    'category': 'Tutorials',


    'license': 'AGPL-3',
    'depends': ['sale'
    ],
    'data': [

        'views/assets.xml',
        'views/sales_inherit.xml',
        'report/sales_template.xml'


    ],
    'demo': [],
    'qweb': ["static/src/xml/tree_button.xml"],

    'installable': True,
    'application': True,
    'auto_install': False,
}
