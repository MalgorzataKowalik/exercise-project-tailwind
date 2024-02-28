export function isNotEmptyString(text) {
  if (text.trim() === '') {
    return false
  }

  return true
}

export function isDateFromPast(dateFromInputString) {
 const dateFromInput = new Date(dateFromInputString)
 const today = getToday()

 if (dateFromInput.getTime() < today.getTime()) {
  return true
 }

 return false
}

function getToday() {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const day = currentDate.getDate()

  const string = [year.toString(), (month + 1).toString(), day.toString()].join('-')

  return new Date(string)
}