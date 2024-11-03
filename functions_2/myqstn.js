function printDiamond(size) {
    let noOfColumn = 1; // Start with 1 column
    let noOfSpaces = (size - 1) / 2; // Initial number of spaces

    for (let i = 1; i <= size; i++) 
    {
        let line = '';

        // Add leading spaces
        for (let j = 1; j <= noOfSpaces; j++) 
        {
            line += ' ';
        }
        //determine start
        let start=0
        let middle=(size+1)/2
        if(i<=middle)
        {
            start=i
        }
        else
        {
            start=(size-i)+1
        }
        // Add numbers
        for (let j = 1; j <= noOfColumn; j++) 
        {
            line += start
            if (j < (noOfColumn + 1) / 2) 
            {
                start--;
            } 
            else 
            {
                start++ ;
            }
        }

        console.log(line);

        // Update noOfColumn and noOfSpaces for the next row
        if (i < middle) 
        {
            noOfColumn += 2;
            noOfSpaces--;
        } 
        else 
        {
            noOfColumn -= 2;
            noOfSpaces++;
        }
    }
}
let x=7
printDiamond(x)
