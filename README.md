# get-video-info [![Build Status](https://travis-ci.org/xouabita/get-video-info.svg?branch=master)](https://travis-ci.org/xouabita/get-video-info)

:video_camera: Get informations from a video in nodejs (dimension, duration, codec, etc...)

---

## Install

~~~sh
npm i -S get-video-info
~~~

## Usage

~~~js
const getVideoInfo = require('get-video-info')

getVideoInfo('./samples/test.webm').then(info => {
  console.log(info.format.duration) // => 10.007000
})
~~~
