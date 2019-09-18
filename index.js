let katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

let customerTotal=0
function takeANumber2(){
  
  customerTotal++

  console.log(`You are number ${customerTotal} in line.`)
}

takeANumber2()
takeANumber2()


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  let stringLine = 'The line is currently:'
  
  if(katzDeliLine.length ===0){
    return "The line is currently empty."
  }
  
  for (let i=0; i < katzDeliLine.length; i++){
    if (i === katzDeliLine.length-1){
    stringLine+= ` ${i+1}. ${katzDeliLine[i]}`
    } else {
    stringLine+= ` ${i+1}. ${katzDeliLine[i]},`
    }
  }
  
  return stringLine
}



//09.17.19
// let katzDeliLine = [];

// function takeANumber(katzDeliLine, name){
//   katzDeliLine.push(name)
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
// }

// function nowServing(katzDeliLine){
//   if(katzDeliLine.length === 0){
//     return "There is nobody waiting to be served!"
//   } else {
//     return `Currently serving ${katzDeliLine.shift()}.`
//   }
// }

// function currentLine(katzDeliLine){
//   let currentLineString= 'The line is currently: '
//   if(katzDeliLine.length === 0){
//     return "The line is currently empty."
//   } else {
//     for (let i=0;i<katzDeliLine.length-1; i++){
//       currentLineString+= `${i+1}. ${katzDeliLine[i]}, `
//       if (i === katzDeliLine.length-1){
//         currentLineString=+ (i+1)+". " + katzDeliLine[i]
//       }
//     }
    
//   }
// return `${currentLineString}${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
// }



// let katzDeliLine = [];

// function takeANumber(katzDeliLine, name){
//   katzDeliLine.push(name)
//   return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
// }

// function nowServing(katzDeliLine){
//   if(katzDeliLine.length===0){
//     return "There is nobody waiting to be served!"
//   }
//   return `Currently serving ${katzDeliLine.shift()}.`
// }

// function currentLine(katzDeliLine){
//   let currentLineString = 'The line is currently: '
//   if(katzDeliLine.length ===0){
//     return "The line is currently empty."
//   }
//   for(let i=0; i <katzDeliLine.length-1; i++){
//     currentLineString += `${i+1}. ${katzDeliLine[i]}, `
//   }
//   return currentLineString += `${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length-1]}`
// }


//below is my first time - took a while and lots of tries. above.. trying again. 
// function takeANumber (katzDeliLine, name){
//   katzDeliLine.push(name);
//   var welcome = `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
//   return welcome;
// }

// function nowServing (katzDeliLine){
// var length = katzDeliLine.length;
// var noOne = "There is nobody waiting to be served!";
//   if (length === 0){
//     return noOne;
//   } else while (length > 0){
//     var message= `Currently serving ${katzDeliLine[0]}.`;
//     katzDeliLine.shift(1);
//     length--;
//     return message;
//   } return noOne;
// }

// function currentLine (katzDeliLine){
//   var length = katzDeliLine.length;
//   var currentLine = [];
//   if (length === 0){
//     currentLine = "The line is currently empty."
//     return currentLine;
//     } else {
//       for (let i=0; i < length; i++){
//           currentLine[i]= ` ${i+1}. ${katzDeliLine[i]}`; 
//       } return `The line is currently:${currentLine.toString()}`;
//     } 
// }
    
  
