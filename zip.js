// require modules
var fs = require('fs');
var archiver = require('archiver');

// create a file to stream archive data to.
var output = fs.createWriteStream(__dirname + '/weddinggram.zip');
var archive = archiver('zip', {
    store: true // Sets the compression method to STORE.
});

// listen for all archive data to be written
output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

// good practice to catch this error explicitly
archive.on('error', function(err) {
  throw err;
});

// pipe archive data to the file
archive.pipe(output);

// append files from a directory
archive.directory('/opt/atlassian/pipelines/agent/build/');

// finalize the archive (ie we are done appending files but streams have to finish yet)
archive.finalize();
