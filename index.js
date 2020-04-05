const { exec } = require('child_process');

arcoreimg.command = 'arcoreimg';
arcoreimg.shell = '/bin/bash';

function arcoreimg(input, cb) {
  const isUrl = /^(https?|file):\/\//.test(input);

  if (!input || isUrl) {
    cb({error: 'Invalid file path'});
    return;
  }

  let args = [arcoreimg.command];
      args.push('eval-img');
      args.push(`--input_image_path=${input}`)


  let execProcess = exec(args.join(' '), (err, stdout, stderr) => {
    if (err || stderr) {
      cb(err)
      return
    }

    cb(null, {
      value: stdout
    })
  });

  process.on('exit',  () => {
    execProcess.kill();
  });

}

module.exports = arcoreimg;
