$(document).ready( function() {
  var cards = []
  

  $('#add').on('click', function (){
    var flashCardInfo = (question, answer) => {
    return {question, answer};
  }
    
    var card = prompt("please enter a flash card question")
    var answer = prompt("what is the answer?")
    var flashCard = flashCardInfo(card, answer)
    cards.push(flashCard)
    
    $('#cards').append('<button class="destroy">x</button>' + '<button>' + card + '</button>')
    $('.destroy').on('click', function (){
    (this).remove()
    })
    console.log(cards)
  })

})


// $('#answers').text(answer)