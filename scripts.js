const save = document.querySelector(".save")
const date = document.querySelector("#date")
const plan = document.querySelector(".plan")
const time = document.querySelector("#time")
const currentTime = moment().hour()
const hour = document.querySelectorAll(".blocks")
date.innerHTML = moment().format('dddd MMM Do YYYY');
time.innerHTML = moment().format('h:mm:ss a')

document.querySelector('.container').addEventListener("click", (event) => {
    console.log('clicking ....');
    if (event.target.className.includes('save')) {
        const data = JSON.parse(localStorage.getItem("data")) || []
        const element = event.target.closest('.blocks');
        const hours = element.getAttribute("moment")
        const text = element.querySelector('textarea').value;
        console.log(hours)
        const dataSheet = {
            hours: hours,
            text:text
        };
        data.push(dataSheet)
        console.log(data)
        localStorage.setItem("data", JSON.stringify(data));
    }
});
for (let i = 0; i < hour.length; i++) {
    const element = hour[i];
    const hours = element.getAttribute("moment")
    console.log(hours);
    console.log(element);
    if (hours > currentTime)
        element.classList.add("future")
    if (hours == currentTime)
        element.classList.add("present")
    if (hours < currentTime)
        element.classList.add("past")

}

const data = JSON.parse(localStorage.getItem("data")) || []

for (let index = 0; index < data.length; index++) {
    const target = data[index];
    const query = `[moment='${target.hours}']`;
    const block = document.querySelector(query)
    block.querySelector('textarea').value = target.text
    
    
}

console.log(plan)