const express = require('express');
const router = express.Router();

router
  .get('/', (req, res) => {
    res.send(users);
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);

    if (user) {
      res.send(user);
    } else {
      res.status(404)
        .send(`User ${id} not found`)
    }
  })
  .delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(user => user.id == id);

    if (index > -1) {
      users.splice(index, 1);
      res.sendStatus(200);
    } else {
      res.status(404)
        .send(`User ${id} not found`)
    }
  });

module.exports = router;

var users = [{
  "id": 1,
  "first_name": "Evelyn",
  "last_name": "Clark",
  "email": "eclark0@nsw.gov.au",
  "gender": "Female",
  "ip_address": "129.0.200.51"
}, {
  "id": 2,
  "first_name": "Joshua",
  "last_name": "Gutierrez",
  "email": "jgutierrez1@mashable.com",
  "gender": "Male",
  "ip_address": "10.97.235.24"
}, {
  "id": 3,
  "first_name": "Frank",
  "last_name": "Chapman",
  "email": "fchapman2@addtoany.com",
  "gender": "Male",
  "ip_address": "247.99.69.110"
}, {
  "id": 4,
  "first_name": "Janet",
  "last_name": "Dixon",
  "email": "jdixon3@merriam-webster.com",
  "gender": "Female",
  "ip_address": "163.241.226.1"
}, {
  "id": 5,
  "first_name": "Shirley",
  "last_name": "Owens",
  "email": "sowens4@last.fm",
  "gender": "Female",
  "ip_address": "216.250.155.60"
}, {
  "id": 6,
  "first_name": "Terry",
  "last_name": "Simmons",
  "email": "tsimmons5@amazon.co.uk",
  "gender": "Male",
  "ip_address": "33.180.17.169"
}, {
  "id": 7,
  "first_name": "Anthony",
  "last_name": "Wells",
  "email": "awells6@prlog.org",
  "gender": "Male",
  "ip_address": "117.110.67.185"
}, {
  "id": 8,
  "first_name": "Alice",
  "last_name": "Martin",
  "email": "amartin7@topsy.com",
  "gender": "Female",
  "ip_address": "165.86.89.253"
}, {
  "id": 9,
  "first_name": "Kenneth",
  "last_name": "Lawson",
  "email": "klawson8@newyorker.com",
  "gender": "Male",
  "ip_address": "217.182.23.196"
}, {
  "id": 10,
  "first_name": "Peter",
  "last_name": "Carroll",
  "email": "pcarroll9@vimeo.com",
  "gender": "Male",
  "ip_address": "112.50.235.38"
}, {
  "id": 11,
  "first_name": "Carl",
  "last_name": "Thomas",
  "email": "cthomasa@chronoengine.com",
  "gender": "Male",
  "ip_address": "229.1.166.9"
}, {
  "id": 12,
  "first_name": "Gregory",
  "last_name": "Meyer",
  "email": "gmeyerb@loc.gov",
  "gender": "Male",
  "ip_address": "27.130.220.86"
}, {
  "id": 13,
  "first_name": "Andrea",
  "last_name": "Weaver",
  "email": "aweaverc@ibm.com",
  "gender": "Female",
  "ip_address": "221.31.77.216"
}, {
  "id": 14,
  "first_name": "Katherine",
  "last_name": "Nguyen",
  "email": "knguyend@narod.ru",
  "gender": "Female",
  "ip_address": "189.201.36.53"
}, {
  "id": 15,
  "first_name": "Scott",
  "last_name": "Gonzales",
  "email": "sgonzalese@smugmug.com",
  "gender": "Male",
  "ip_address": "175.222.186.243"
}, {
  "id": 16,
  "first_name": "Martin",
  "last_name": "Peters",
  "email": "mpetersf@census.gov",
  "gender": "Male",
  "ip_address": "95.62.186.105"
}, {
  "id": 17,
  "first_name": "Bonnie",
  "last_name": "Armstrong",
  "email": "barmstrongg@nih.gov",
  "gender": "Female",
  "ip_address": "34.78.224.241"
}, {
  "id": 18,
  "first_name": "Stephanie",
  "last_name": "Webb",
  "email": "swebbh@plala.or.jp",
  "gender": "Female",
  "ip_address": "123.82.242.85"
}, {
  "id": 19,
  "first_name": "Roger",
  "last_name": "Nichols",
  "email": "rnicholsi@techcrunch.com",
  "gender": "Male",
  "ip_address": "0.249.100.145"
}, {
  "id": 20,
  "first_name": "Lois",
  "last_name": "Martin",
  "email": "lmartinj@sfgate.com",
  "gender": "Female",
  "ip_address": "232.99.19.110"
}];
