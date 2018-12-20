//Fourier in Vanilla JS
//Sudipta
const canvas1 = document.getElementById("canvas1")
canvas1.width = 700
canvas1.height = 400
const ctx = canvas1.getContext('2d')
let angle1 = 0
let wave1 = []
const slideElement1 = document.getElementById("slider1")
let slider1 = slideElement1.value

function update(){
    ctx.clearRect(0, 0, canvas1.width, canvas1.height)
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas1.width, canvas1.height)

    let x = 180
    let y = 200 
    ctx.strokeStyle = "#ffffff"   

    for(let i = 0; i < slider1; i++){
        let prevx = x
        let prevy = y
        let n = 2*i + 1
        let radius = 75 * (4/(n * Math.PI))
        x += radius  * Math.cos(n * angle1)
        y += radius  * Math.sin(n * angle1)
        
        ctx.beginPath()
        ctx.arc(prevx, prevy, radius, 0, 2 * Math.PI)
        ctx.stroke()
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(prevx, prevy)
        ctx.stroke()        
    }
    wave1.unshift(y)

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(380, wave1[0])
    ctx.stroke()    
    
    ctx.fillStyle = "#ffffff"
    for(let i = 0; i < wave1.length; i++){
        ctx.fillRect(380 + i, wave1[i], 2, 2)
    }
    
    if(wave1.length > 300){
        wave1.pop()
    }
    angle1 -= 0.05
    window.requestAnimationFrame(update)
}
update()

slideElement1.addEventListener('change', function(){
    slider1 = slideElement1.value
})