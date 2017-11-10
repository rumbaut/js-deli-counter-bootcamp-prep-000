//var katzDeli = [];

function takeANumber(katzDeli, name){
  katzDeli.push(name);

  return "Welcome, " + name + ". You are number " + katzDeli.length + " in line.";
}
function nowServing(deliLine){
  if(deliLine.length == 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    var ret = deliLine.shift();
    return 'Currently serving '+ ret +'.'
  }
}

function currentLine(line){
  if(line.length == 0){
    return 'There is nobody waiting to be served!';
  }
  else{
    var ret = deliLine.shift();
    return 'Currently serving '+ ret +'.'
  }
}
