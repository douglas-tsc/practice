const {
  List,
  AppBar
} = mui;

const ThemeManager = new mui.Styles.ThemeManager();

App = React.createClass({
  mixins: [ReactMeteorData],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getMeteorData () {
    return {
      jobs: Jobs.find({}).fetch()
    }
  },

  componentDidMount () {
      {this.loadJobs() }
  },

  loadJobs () {
    loadJobs = Meteor.call("loadJobs");
  },

  renderJobs () {
    return this.data.jobs.map((job) => {
      return <Job key={job._id} job={job} />
    });
  },

  render () {
    return (
      <div className='wrapper'>
        <AppBar title='Latest Jobs' showMenuIconButton={false}/>
        <div className='container'>
          <List subheader='Click on any job for details.'>
            {this.renderJobs()}
          </List>
        </div>
      </div>
    )
  }
})
