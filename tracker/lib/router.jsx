FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        ReactLayout.render(App, {
            content: <Dashboard/>,
            nav: <Nav/>
        });
    }
});

FlowRouter.route('/request', {
    name: 'RequestForm',
    action() {
        ReactLayout.render(App, {
            content: <RequestForm/>,
            nav: <Nav/>
})
    }
});
