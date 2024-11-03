function hollowsquare(N) 
{
    for(let i=1;i<=N;i++)
    {
        let s=""
        if(i==1 || i==N)
        {
            for(let j=1;j<=N;j++)
            {
                s=s+"*"+" "
            }
            console.log(s)
        }
        else
        {
        s1=""
        for(let j=1;j<=N;j++)
        {
        if(j==1 || j==N)
        {
            s1=s1+"*"+" "
        }
        else
        {
            s1=s1+" "+" "
        }
        }
          console.log(s1)
        }
    }    
}

hollowsquare(5)

