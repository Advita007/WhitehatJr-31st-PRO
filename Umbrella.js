class Umbrella{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
			friction :0.1,
			density:1.2
			}
		this.x=x;
		this.y=y;
        this.r=r
		this.image= loadImage("images/Walking Frame/walking_1.png")
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+25,300,300);
 }
}