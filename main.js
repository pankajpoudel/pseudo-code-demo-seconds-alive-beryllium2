
let birthMonth = prompt("what is your month of birth?")
let birthYear = prompt("what is your year of birth?")
let currentMonth = new Date().getMonth()+1
let currentYear =new Date().getFullYear()
let secsInMonth = 60*60*24*30
let secsInYear = (secsInMonth*12)
let secsInBirthYear = secsInMonth * (12 - birthMonth)
let secsInCurrentYear =(secsInMonth * currentMonth)
let secsInBetweenYear = secsInYear * (currentYear - birthYear - 2)
let secsSinceBirth =(secsInBirthYear + secsInCurrentYear + secsInBetweenYear)
document.write("  I spend total "+ secsSinceBirth + " seconds.")