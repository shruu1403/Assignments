let obj={
    length:20,
    width:30,
    area:function()
    {
        let a=this.length*this.width
        console.log(a)
    },
    perimeter:function()
    {
        let p=2*(this.length+this.width)
        console.log(p)
    }
}
obj.area()
obj.perimeter()
