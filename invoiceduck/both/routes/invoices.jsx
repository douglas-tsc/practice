const invoiceRoutes = FlowRouter.group({
    name: 'invoices'
});

invoiceRoutes.route('/invoices', {
    name: 'invoices',
    action(){
        ReactLayout.render(App, { yield: <invoiceList/> });
    }
});

invoiceRoutes.route('/invoices/:id', {
    name: 'invoice',
    action(params) {
        ReactLayout.render(App, {yield: <Invoice invoice={param.id}/> });
    }
});
