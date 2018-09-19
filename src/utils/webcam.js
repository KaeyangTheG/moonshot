import {webCamOptions} from '../constants'

export default {
  stream: null,
  start: function (options={}) {
    return getUserMedia({...webCamOptions, ...options})
      .then(stream => {
        this.stream = stream
      });
  },
  stop: function () {
    if (!this.stream) {
      return;
    }
    try {
      this.stream.getTracks()[0].stop();
      this.stream = null;
    }
    catch(e) {}
  },
  initialize: function (video) {
    if (!this.stream) {
      return Promise.reject(new Error(`no stream from which to initialize webcam.
        Try resolving start() first`))
    }
    return new Promise(resolve => {
      video.srcObject = this.stream
      video.onloadedmetadata = e => {
        video.play()
        resolve()
      }
    })
  }
}

function getUserMedia (options) {
  if (navigator && navigator.mediaDevices
    && navigator.mediaDevices.getUserMedia) {
    return navigator.mediaDevices.getUserMedia(options);
  } else if (navigator.getUserMedia) {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia(
        options,
        stream => resolve(stream),
        error => reject(error)
      )
    })
  } else {
    return Promise.reject(new Error('Webcam api not found'))
  }
}
