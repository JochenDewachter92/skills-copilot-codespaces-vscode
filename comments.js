// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var port = 3000;
var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true);
  var path = urlObj.pathname;
  var query = urlObj.query;
  //console.log(urlObj);
  if (path === '/') {
    //readFile: Asynchronously reads the entire contents of a file.
    fs.readFile('./comments.html', function(err, data) {
      if (err) {
        console.log(err);
        res.end('read file error');
      } else {
        res.end(data);
      }
    });
  } else if (path === '/getComments') {
    var comments = [
      'It is a good day',
      'Do you like it?',
      'Yes, I like it!'
    ];
    res.end(JSON.stringify(comments));
  }
});
server.listen(port, function() {
  console.log('Server is listening on port ' + port);
});
// Open your browser and visit http://localhost:3000/, you will see an empty page.
// Then open the console, you will see the comments in the console.
// This is because we have just sent the comments in the server side, but we haven't used them in the client side.
// In the next step, we will use the comments in the client side. 
// open the comments.html file, add the following code to it.
// <script>
//   function loadComments() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '/getComments');
//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var comments = JSON.parse(xhr.responseText);
//         console.log(comments);
//       }
//     };
//     xhr.send();
//   }
//   loadComments();
// </script>
// Save the file and refresh the page, you will see the comments in the console. 
// Now we have successfully used the comments in the client side. 
// Next, we will display the comments in the page. 
// open the comments.html file, add the following code to it.
// <script>
//   function loadComments() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', '/getComments');
//     xhr.onreadystatechange = function()