import {webCamOptions} from '../constants'

const RENDER_INTERVAL = 42;

export default {
  stream: null,
  failed: null,
  start: function (options={}) {
    return getUserMedia({...webCamOptions, ...options})
      .then(stream => {
        this.stream = stream
      })
      .catch((e) => {
        this.failed = true
        throw new Error(e)
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
    catch(e) {
      this.stream = null;
    }
  },
  initialize: function (video, canvas, predictionCanvas) {
    if (!this.stream) {
      return this.start()
        .then(this.initialize.bind(this, video, canvas, predictionCanvas))
    }
    return new Promise((resolve, reject) => {
      video.srcObject = this.stream
      video.onloadedmetadata = e => {
        setTimeout(drawToCanvas, RENDER_INTERVAL)
        resolve()
      }
    })

    function drawToCanvas () {
      const ctx = canvas.getContext('2d')
      const ctxP = predictionCanvas.getContext('2d')

      const {videoWidth, videoHeight} = video;
      const {width:canvasWidth, height:canvasHeight} = canvas;

      const canvasRatio = canvasWidth / canvasHeight;
      const sWidth = videoHeight * canvasRatio;
      const sx = (videoWidth - sWidth) / 2;
      const sy = 0;
      const dx = 0;
      const dy = 0;

      ctx.drawImage(video, sx, sy, sWidth, videoHeight, dx, dy, canvasWidth, canvasHeight);

      const imgSize = 224;
      const sxP = (videoWidth - imgSize) / 2;
      const syP = (videoHeight - imgSize) / 2;

      ctxP.drawImage(video, sxP, syP, imgSize, imgSize, 0, 0, imgSize, imgSize);

      if (video.srcObject && video.srcObject.active) {
        setTimeout(drawToCanvas, RENDER_INTERVAL)
      }
    }
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
