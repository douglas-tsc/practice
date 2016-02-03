FlowRouter.route('/', {
    name: 'Dashboard',
    action() {
        ReactLayout.render(App, {
            content: <Dashboard/>,
            nav: <Nav/>
        });
    }
});

FlowRouter.route('/newGrunt', {
    name: 'NewGrunt',
    action() {
        ReactLayout.render(App, {
            content: <NewGrunt/>,
            nav: <Nav/>
        });
    }
});

FlowRouter.route('/grunts', {
    name: 'GruntList',
    action() {
        ReactLayout.render(App, {
            content: <GruntList/>,
            nav: <Nav/>
        });
    }
});

FlowRouter.route('/login', {
    name: 'Login',
    action() {
        ReactLayout.render(App,{
            content: <Login name="Login" />,
            nav: <Nav/>
        });
    }
});


FlowRouter.route('/register', {
      name: 'Register',
      action() {
        ReactLayout.render(App, {
          content: <Register name="Register"/>
  });
 }
});

FlowRouter.route('/checkout', {
      name: 'services',
      action: function() {
          BlazeLayout.render("services");
  }
});
