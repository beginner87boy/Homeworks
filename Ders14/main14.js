
// function checkParam (width,height)
//  {
//     if (width === 0 && height === 0)
//     { 
//         console.log (0)
//     }

// else if     (width === height && width&&height>0)
// {

//     console.log (`kvadratdir ve cemi ${width * 4}`);

// }
// else (width&&height>0) {
// console.log (`duzbucaqlidir ${(width + height) * 2}`);
// }
// }
// console.log ()




// checkParam(0,1)


const getArray = (arry) => {
    let newArray = []
    let firstItem = arry[0];
    let lastItem = arry[arry.lenght-1];
    newArray.push(firstItem);
    newArray.push(lastItem);

    return newArray
}

let arry = [25, 56, 85, 50];
console.log(getArray(arry));
