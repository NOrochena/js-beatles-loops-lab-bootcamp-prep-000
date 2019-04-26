// add solution here

function theBeatlesPlay(arrmusic, arrinstru) {
  var arr = [];
  
  for (var i = 0; i < arrmusic.length; i++){
    arr.push(arrmusic[i] + " plays " + arrinstru[i])
  }
  
  return arr
}