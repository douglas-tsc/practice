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
    });
    }
});

FlowRouter.route('/new-ninja', {
    name: 'NewNinja',
    action() {
        ReactLayout.render(App, {
            content: <NewNinja/>,
            nav: <Nav/>
    });
    }
});

FlowRouter.route('/ninjas', {
    name: 'NinjasList',
    action() {
        ReactLayout.render(App, {
            content: <NinjasList/>,
            nav: <Nav/>
    });
    }
});

FlowRouter.route('/login', {
    name: 'Login',
    action() {
        ReactLayout.render(App,{
            content: <Login/>,
        nav: <Nav/>
        });
    }
});
