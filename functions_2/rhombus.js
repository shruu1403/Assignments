function printRhombus(n) 
{
    let middle = (n+1)/2
    // upper half
    for (let i = 1; i <= middle; i++) 
    {
        let line=""
        // spaces
        for (let s = 1; s <= (middle - i); s++) 
        {
            line += " "
        }
        // stars
        for (let j = 1; j <= (2 * i) - 1; j++) 
        {
            line += "*"
        }
        console.log(line)
    }
    // lower half
    for (let i = 1; i <=(middle-1); i++) 
    {
        let line=""
        // spaces
        for (let s = 1; s <=i; s++) 
        {
            line += " "
        }
        // stars
        for (let j = 1; j <= 2*(middle-i)-1; j++) 
        {
            line += "*"
        }
        console.log(line)
    }
}

printRhombus(9);


