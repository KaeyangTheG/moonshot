import axios from 'axios'
import sharedDetectionContainer from '../context/detection-container'

const API_INTERVAL = 700;
const IMAGE_QUALITY = 1.0;

const processDataUrl = str => (
  `/${str.split('/').slice(2).join('/')}`
)

const predict = (image) => {
  return axios.post('/api/predict', {image}, {
    header: {
      'Content-Type': 'application/json'
    }
  })
}

export default {
  interval: null,
  start: function (canvas) {
    if (this.interval !== null) {
      return
    }
    this.interval = window.setInterval(
      fetchPrediction.bind(null, canvas), API_INTERVAL
    )
  },
  stop: function () {
    if (this.interval == null) {
      return
    }
    window.clearInterval(this.interval)
    this.interval = null
  }
}

function fetchPrediction (canvas) {
  const imageDataURL = canvas.toDataURL('image/jpeg', IMAGE_QUALITY);
  return predict(processDataUrl(imageDataURL))
    .then(({data}) => {
      if (data && data.label) {
        sharedDetectionContainer.setLabel(data.label.toLowerCase())
      }
    })
}
