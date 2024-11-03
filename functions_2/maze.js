function maze(s) {
    let obj=
    {
        x:0,
        y:0
    };
    for(let i=0;i<s.length;i++)
    {
        let comm=s[i]
        if(comm==="L")
        {
            obj.x=obj.x-1
        }
        if(comm==="R")
        {
            obj.x=obj.x+1
        }
        if(comm=="U")
        {
            obj.y=obj.y+1
        }
        if(comm=="D")
        {
            obj.y=obj.y-1
        }
        }
        console.log(obj.x , obj.y)
    }
    maze("LLRDDR")
    