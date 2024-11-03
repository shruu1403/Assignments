// function printDiamond(size) 
// {
//     let middle = (size + 1) / 2 // Middle row index

//     for (let i = 1; i <= size; i++) 
//     {
//         let line = ''
//         let start=0

//         // Determine the number of digits to be printed
//         if (i <= middle) 
//         {
//             start = i;  // Ascending part
//         } 
//         else 
//         {
//             start = (size - i) + 1  // Descending part
//         }

//         // Calculate and add leading spaces
//         let spaces = middle - start
//         for (let s = 1; s <= spaces; s++) 
//         {
//             line += ' '
//         }

//         // Add numbers in ascending order from zero
//         for (let num = 0; num < start; num++) 
//         {
//             line += num
//         }

//         // Add numbers in descending order
//         for (let num = start - 2; num >= 0; num--) 
//         {
//             line += num
//         }
//         console.log(line)
//     }
// }

// let size =9
// printDiamond(size)
function printDiamond(size) {
    const middle = (size + 1) / 2; // Middle row index, without using ceil or abs

    for (let i = 1; i <= size; i++) {
        let line = '';
        let numCount;

        // Calculate the number of leading spaces
        if (i <= middle) {
            numCount = i;
        } else {
            numCount = size - i + 1;
        }

        // Calculate and add leading spaces
        const spaces = middle - numCount;
        for (let s = 1; s <= spaces; s++) {
            line += ' ';
        }

        // Add numbers in ascending order
        for (let num = 1; num <= numCount; num++) {
            line += num;
        }

        // Add numbers in descending order
        for (let num = numCount - 1; num >= 1; num--) {
            line += num;
        }

        console.log(line);
    }
}

// Example usage
const size = 7;
printDiamond(size);



