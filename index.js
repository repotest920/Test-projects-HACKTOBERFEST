// run `node index.js` in the terminal
var ffmpeg = require('ffmpeg');

console.log(`Hello Node.js v${process.versions.node}!`);

try {
  new ffmpeg(
    '/home/projects/node-y5xznf/27461805-c06a-48c1-8c58-23d846ba98e4.guac',
    function (err, video) {
      if (!err) {
        console.log('The video is ready to be processed');
        console.log(video.metadata);
        // FFmpeg configuration
        console.log(video.info_configuration);
        video.save('/home/projects/node-y5xznf/test.mp4', (error, file) => {
          if (!error) console.log('Video file: ' + file);
          console.log('File', file);
        });
      } else {
        console.log('Error: ' + err);
      }
    }
  );
} catch (e) {
  console.log(e.code);
  console.log(e.msg);
}
