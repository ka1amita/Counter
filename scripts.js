console.log('Hello Word')
$('.increase').click(() => {
    console.log('clicked increase')
    let EventListener = $('h2').text()
    console.log(EventListener) 
    $('h2').text(parseInt(EventListener)+1)
})

$('.decrease').click(() => {
    console.log('clicked decrease')
    let EventListener = $('h2').text()
    console.log(EventListener) 
    $('h2').text(parseInt(EventListener)-1)
})
