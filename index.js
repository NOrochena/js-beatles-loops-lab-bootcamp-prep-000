// add solution here

function theBeatlesPlay(arrmusic, arrinstru) {
  var arr = [];
  
  for (var i = 0; i < arrmusic.length; i++){
    arr.push(arrmusic[i] + " plays " + arrinstru[i])
  }
  
  return arr
}

function johnLennonFacts(arr){
  var arr2 = []
  var countup = 0
  while (countup < arr.length) {
    arr2.push(arr[countup] + "!!!")
    countup++
  }
  return arr2
}

function iLoveTheBeatles(num){
  var arr = []
  
  function increment(){
    return num + 1  
  }
  do {
    arr.push("I love the Beatles!")
  } while ( increment() < 15)
  
  return arr
}