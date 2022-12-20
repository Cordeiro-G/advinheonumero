let result = prompt ("Advinhe o número em que estou pensando? Entre 0 e 10!")
const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1;

while( Number(result) != randomNumber) {
   result = prompt ("Erro, tente outro número: ")
   xAttempts++
}
alert(`O número no qual eu pensei foi ${randomNumber}! Parabéns você advinhou após ${xAttempts} tentativas!`)