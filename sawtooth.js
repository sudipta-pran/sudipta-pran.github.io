//Fourier in Vanilla JS
//Sudipta
const canvas = document.getElementById("canvas2")
canvas.width = 700
canvas.height = 400
const context = canvas.getContext('2d')
let angle = 0
let wave = []
const slideElement2 = document.getElementById("slider2")
let slider2 = slideElement2.value

function update2(){
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = "#000000"
    context.fillRect(0, 0, canvas.width, canvas.height)

    let x = 180
    let y = 200 
    context.strokeStyle = "#ffffff"   

    for(let i = 0; i < slider2; i++){
        let prevx = x
        let prevy = y
        let n = i + 1
        let radius = 100 * ( 2/(n * Math.PI * Math.pow(-1,n) ) )
        x += radius  * Math.cos(n * angle)
        y += radius  * Math.sin(n * angle)
        
        context.beginPath()
        context.arc(prevx, prevy, Math.abs(radius), 0, 2 * Math.PI)
        context.stroke()
        
        context.beginPath()
        context.moveTo(x, y)
        context.lineTo(prevx, prevy)
        context.stroke()        
    }
    console.log(y)
    wave.unshift(y)

    context.beginPath()
    context.moveTo(x, y)
    context.lineTo(380, wave[0])
    context.stroke()    
    
    context.fillStyle = "#ffffff"
    for(let i = 0; i < wave.length; i++){
        context.fillRect(380 + i, wave[i], 2, 2)
    }
    
    if(wave.length > 300){
        wave.pop()
    }
    angle -= 0.05
    window.requestAnimationFrame(update2)
}
update2()

slideElement2.addEventListener('change', function(){
    slider2 = slideElement2.value
})