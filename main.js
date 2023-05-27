const form = document.querySelector("form")
const ratingnumber = document.querySelector(".btn-section")
const span = document.querySelectorAll("span")
const inputname = document.querySelector("input")
const inputfeedback = document.querySelector("#feedback")
const ul = document.querySelector("ul")
const button = document.querySelector(".btn-submit")
const h5 = document.createElement("h5")


span.forEach(number => {
    number.addEventListener("click" , (e) =>{
    e.preventDefault()

    h5.innerText = number.innerText

})
})

const submitform = ((e) => {
    e.preventDefault()

    const nameli = document.createElement("h2")

    nameli.innerText = inputname.value
    const feedbackli = document.createElement("h3")
    feedbackli.innerText = inputfeedback.value
    const newli = document.createElement("li")
    newli.appendChild(nameli)
    newli.appendChild(feedbackli)
    newli.appendChild(h5)
    ul.appendChild(newli)
    form.reset()
})


form.addEventListener("submit", submitform)

