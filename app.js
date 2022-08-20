document.addEventListener('DOMContentLoaded',()=>{console.log('Lets Get Ready To Party with JQ!!')})

$('img').addClass('image-center')

$('p').eq($('p').length-1).remove()

const headerSize = Math.floor(Math.random()*100+1)
$('h1').css('font-size',`${headerSize}px`)

$('ol').append('<li> Self Service Checkouts should give you a discount </li>')

$("aside").empty().append('<p> Sorry for the list </p>')

$(".form-control").on('keyup blur change',()=>{
    let red = $('.form-control').eq(0).val()
    let blue = $('.form-control').eq(1).val()
    let green = $('.form-control').eq(2).val()
    console.log(red,blue,green)
    $('body').css("background-color",`rgb(${red},${blue},${green})`)
})

$('img').on('click',(event)=>{event.target.remove()})

