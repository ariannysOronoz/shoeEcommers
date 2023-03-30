import Payment from 'payment'

function clearNumber (value = '') {
  return value.replace(/\D+/g, '')
}

export function formatCreditCardNumber (value) {
  if (!value) {
    return value
  }
  const clearValue = clearNumber(value)
  let nextValue = clearValue.slice(0,4)+"\t"+
                  clearValue.slice(4,8)+"\t"+
                  clearValue.slice(8,12)+"\t"+
                  clearValue.slice(12,19)
  return nextValue
}

export function formatCVC (value, prevValue, allValues = {}) {
  const clearValue = clearNumber(value)
  let maxLength = 3

  if (allValues.number) {
    const issuer = Payment.fns.cardType(allValues.number)
  }

  return clearValue.slice(0, maxLength)
}

export function formatExpirationDate (value) {
  const clearValue = clearNumber(value)

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`
  }

  return clearValue
}
