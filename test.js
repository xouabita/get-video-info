import test from 'ava'
import getVideoInfo from '.'

test(`It should raise an error if the file doesn't exist`, async (t) => {
  t.plan(2)
  try {
    await getVideoInfo('sorry bro...')
  } catch (e) {
    t.is(e.message, 'sorry bro... is not a valid path')
    t.pass()
  }
})

test(`It should work with webm`, async (t) => {
  var info = await getVideoInfo('./samples/test.webm')

  t.is(info.streams[0].codec_name, 'vp9')
  t.is(info.streams[0].width, 1920)
  t.is(info.streams[0].height, 1080)
  t.is(info.format.duration, '10.007000')
})
