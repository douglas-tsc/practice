Meteor.methods({
  loadJobs: function() {
    this.unblock();
    return Meteor.http.call("GET", "https://jobs.github.com/positions.json", function(error, result) {
      if (error) {
        console.log(error);
      }
      if (result) {
        return Meteor.call("writeJobs", result.data)
      }
    });
  },
  writeJobs: function(jobs) {
    var i, job, len, results;
    Jobs.remove({});
    results = [];
    for (i = 0, len = jobs.length; i < len; i++) {
      job = jobs[i];
      results.push(Jobs.insert(job))
    }
    return results;
  }
});
