
const clock = document.querySelector(".clock")

const getHour = () => {
    const date = new Date()

    const time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }

    clock.innerHTML = `${time.hour} : ${time.minute} : ${time.second}`
}

setInterval(() => getHour(), 1000)