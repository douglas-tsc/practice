const express = require('express');
const app = express();

app
// // super basic using template strings
//   .get('/', (req, res) => {
//     var title = 'something something'
//     var tweets = ['tweet', 'another tweet', 'last tweet']
//     var tweetsHTML = tweets.reduce((html, tweet) => `${html}<li>${tweet}</li>`, '')
//
//     res.send(`
//       <html>
//         <body>
//           <h1>${title}</h1>
//           <ul>
//             ${tweetsHTML}
//           </ul>
//         </body>
//       </html>
//       `)
//   })

  // using hjs views engine, much like handlebars
  .set('views', __dirname + '/views')
  .set('view engine', 'hjs')
  .get('/', (req, res) => {
    var title = 'some other title';
    var tweets = ['tweet', 'another tweet', 'last tweet'];

    res.render('index', {
      title: title,
      tweets: tweets,
      showTweets: true,
      partials: { tweets: 'tweets' }
    });
  });

app.listen(3000);
