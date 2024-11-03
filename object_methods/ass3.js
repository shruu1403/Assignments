let details={
    data:[],
    add :function(name,quantity,price)
    {
        obj={}
        obj.name=name
        obj.quantity=quantity
        obj.price=price
        this.data.push(obj)
    },
    print:function()
    {
        console.log(this.data)
    },
    total:function()
        {
            let sum=0
            for(let i=0;i<this.data.length;i++)
            {
                let tot=this.data[i].quantity*this.data[i].price
                sum=sum+tot
            }   
            console.log(sum)
        }
}
details.add("rice",2,60)
details.add("dal",3,50)
details.add("salt",1,20)
// details.print()
details.total()
