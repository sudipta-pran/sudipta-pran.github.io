const clockElement = document.querySelector('.clock')
const upDate = function(){
    let time = new Date().toLocaleTimeString().replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1")
    clockElement.innerHTML = time
}

setInterval(
    upDate,
    1000
)