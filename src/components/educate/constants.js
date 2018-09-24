import tv from '../../assets/tv.svg'
import microwave from '../../assets/microwave.svg'
import lightbulb from '../../assets/lightbulb.svg'
import iceland from '../../assets/iceland.svg'
import minion from '../../assets/minion.svg'
import water from '../../assets/water.svg'
import canBadge from '../../assets/images/can-badge.png'
import bananaBadge from '../../assets/images/banana-badge.png'

export const educateData = {
  can: {
    label: `Aluminum can`,
    verdict: `You can recycle it!`,
    instructions: `Be sure to place your
      can in a recycling bin or recycling center
      nearby.`,
    pledge: `Help take the pledge to recycle every can you see.`,
    badge: canBadge
  },
  banana: {
    label: 'Banana',
    verdict: `You can compost it!`,
    instructions: `Be sure to compost your banana in a green bin nearby.`,
    pledge: `Help take the pledge to compost every banana you eat & see.`,
    badge: bananaBadge
  }
}

export const didYouKnowData = {
  can: [{
    regular: 'A lightbulb for',
    bolded: '2.5 hours',
    src: lightbulb
  }, {
    regular: 'A television for',
    bolded: '2 hours',
    src: tv,
  }, {
    regular: 'A microwave for',
    bolded: '18 minutes',
    src: microwave
  }],
  banana: [{
    regular: `The scientific name for banana is musa sapientum, which means`,
    bolded: `"fruit of the wise men"`,
    src: minion
  }, {
    regular: 'Bananas float in water like apples',
    src: water,
  }, {
    regular: `Iceland is home to the biggest banana plantation
      in Northern Europe`,
    src: iceland
  }],

}
