const dayValue = document.querySelector('.input__day')
const monthValue = document.querySelector('.input__month')
const yearValue = document.querySelector('.input__year')
const yearNum = document.querySelector('.year_num')
const monthNum = document.querySelector('.month_num')
const dayNum = document.querySelector('.day_num')
const btn = document.querySelector('.svg')
const inputBox = document.querySelectorAll('.inputBox')
const labelBox = document.querySelectorAll('.labelBox')
const emptyText = document.querySelectorAll('.empty__text')

let ageYear = ''
let ageMonth = ''
let ageDate = '' 

btn.addEventListener('click', function () {
    btn.style.backgroundColor = 'black'
    if (dayValue.value === '' || monthValue.value === '' || yearValue.value === '') {
        for (let i = 0; i < inputBox.length; i++) {
            inputBox[i].classList.add('inputBoxH')
        }
        for (let i = 0; i < labelBox.length; i++) {
        labelBox[i].classList.add('labelBoxH')
        }

        for (let i = 0; i < emptyText.length; i++) {
            emptyText[i].classList.remove('hidden')
            }
    } else if (dayValue.value > 31 && monthValue.value > 12 || yearValue.value > 9999) {
        for (let i = 0; i < inputBox.length; i++) {
            inputBox[i].classList.add('inputBoxH')
        }
        for (let i = 0; i < labelBox.length; i++) {
        labelBox[i].classList.add('labelBoxH')
        }
        for (let i = 0; i < emptyText.length; i++) {
            emptyText[0].textContent = 'must be a valid day'
            emptyText[1].textContent = 'must be a valid month'
            emptyText[2].textContent = 'must be a valid year'
            emptyText[i].classList.remove('hidden')
            }
    }
    else {
    const currentYear = new Date().getFullYear() 
    console.log(currentYear)
    const currentMonth = new Date().getMonth() 
    console.log(currentMonth)
    const currentDay = new Date().getDate() 
    if (currentMonth === 1 || 3 || 5 || 7 || 8 || 10 || 12) {
        if (dayValue.value > 31) {
            for (let i = 0; i < emptyText.length; i++) {
                emptyText[0].textContent = 'must be a valid date'
                emptyText[1].textContent = ''
                emptyText[2].textContent = ''
                emptyText[i].classList.remove('hidden')
                }
        } else {
            console.log(currentDay)
            ageYear = currentYear - yearValue.value 
            ageMonth = currentMonth - monthValue.value 
            if (monthValue.value > currentMonth) {
                monthNum.textContent = `${currentMonth + (12 - monthValue.value)}`
                yearNum.textContent = `${ageYear - 1}`
            } else {
                monthNum.textContent = `${ageMonth}`
                yearNum.textContent = `${ageYear}`
            }
            ageDate = `${currentDay}`
            dayNum.textContent = `${ageDate}`
        }
    } else if (currentMonth === 2 || 4 || 6 || 9 || 11) {
        if (dayValue.value > 30) {
            for (let i = 0; i < emptyText.length; i++) {
                emptyText[0].textContent = 'must be a valid date'
                emptyText[1].textContent = ''
                emptyText[2].textContent = ''
                emptyText[i].classList.remove('hidden')
                }
        } else {
            console.log(currentDay)
            ageYear = currentYear - yearValue.value 
            ageMonth = currentMonth - monthValue.value 
            if (monthValue.value > currentMonth) {
                monthNum.textContent = `${currentMonth + (12 - monthValue.value)}`
                yearNum.textContent = `${ageYear - 1}`
            } else {
                monthNum.textContent = `${ageMonth}`
                yearNum.textContent = `${ageYear}`
            }
            ageDate = `${currentDay}`
            dayNum.textContent = `${ageDate}`
        }
    } 
    }
})


// const currentYear = new Date().getFullYear() 
// console.log(currentYear)
