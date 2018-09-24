import tv from '../../assets/tv.svg'
import microwave from '../../assets/microwave.svg'
import lightbulb from '../../assets/lightbulb.svg'
import canBadge from '../../assets/images/can-badge.png'

export const educateData = {
  can: {
    label: `Aluminum can`,
    verdict: `You can recycle it!`,
    instructions: `Be sure to place your
      can in a recycling bin or recycling center
      nearby.`,
    pledge: `Help take the pledge to recycle every can you see.`,
    badge: canBadge
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
  }]
}
