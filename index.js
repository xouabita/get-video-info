const exec    = require('mz/child_process').exec
const co      = require('co')
const exists  = require('path-exists')
const ffprobe = require('ffprobe-static').path

function getVideoInfo (video) {
  return co(function* () {
    if (!(yield exists(video)))
      throw new Error(`${video} is not a valid path`)

    var out = yield exec(`${ffprobe} -v quiet -print_format json -show_format -show_streams ${video}`)
    return JSON.parse(out[0])
  })
}

module.exports = getVideoInfo
