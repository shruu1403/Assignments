let details={
    data:[],
    addStudent:function(name,english,maths,science)
    {
        obj={}
        obj.name=name
        obj.english=english
        obj.maths=maths
        obj.science=science
        this.data.push(obj)
    },
    print:function()
    {
        console.log(this.data)
    },
    maxmarks:function()
    {
        let max=-Infinity
        let maxstudent
        for(let i=0;i<this.data.length;i++)
        {
            let total=this.data[i].english+this.data[i].maths+this.data[i].science
            if(total>max)
            {
                max=total
                maxstudent=this.data[i].name
            }
        }
        console.log(maxstudent,max)
    }
}
details.addStudent("harsh",60,70,80)
details.addStudent("sneha",40,30,80)
details.addStudent("uday",20,70,90)
// details.print()
details.maxmarks()
