import axios from 'axios'
import sharedDetectionContainer from '../context/detection-container'

const API_INTERVAL = 700;

const predict = (image) =>
  return axios.post('/api/predict', {image}, {
    header: {
      'Content-Type': 'application/json'
    }
  })
)

export default {
  interval: null,
  start: function (canvas) {
    if (this.interval !== null) {
      return
    }
    this.interval = window.setInterval(
      fetchPrediction.bind(canvas), API_INTERVAL
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
  const imageDataURL = canvas.toDataURL('image/jpeg', 0.5);
  return predict(imageDataURL)
    .then(({data}) => console.log(data))
}
