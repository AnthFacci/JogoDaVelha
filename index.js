const regions = ["0.0", "0.1", "0.2","1.0","1.1","1.2","2.0","2.1","2.2"]
const start = document.getElementById('start')
const turnPlayer = document.getElementById('turnPlayer')
const board = document.getElementById('gameBoard')
const switchT = document.getElementById('switchBtn')

start.addEventListener('click', function(){
    const player1 = document.getElementById('player1').value  
    turnPlayer.innerText = player1 
    
   

})





switchT.addEventListener('click',function(ev){
    ev.preventDefault()
    const player1 = document.getElementById('player1').value
    const player2 = document.getElementById('player2').value
    if(switchT.dataset.turn === 'P2'){
        turnPlayer.innerText = player1
        board.dataset.turn === "P1"
     }else{
        turnPlayer.innerText = player2
        board.dataset.turn === "P2"
     }
})



start.addEventListener('mouse')






