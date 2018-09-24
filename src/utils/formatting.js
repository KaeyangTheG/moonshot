export const capitalizeWord = (str='') =>
  str[0].toUpperCase() + str.slice(1)

export const capitalizePhrase = (str='') => (
  str.split(' ').map(capitalizeWord).join(' ')
)
