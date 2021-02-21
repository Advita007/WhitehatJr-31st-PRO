class Drops{
	constructor(x,y,r)
	{
		var options={
			//isStatic:true,
			restitution :0,
			friction :0.001,
	
			
			}
		this.x=x;
		this.y=y;
        this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r+10, options)
		World.add(world, this.body);
	}

	display()
	{
	
		
	   fill("blue")
	   ellipseMode(RADIUS);
       ellipse(this.body.position.x,this.body.position.y,this.r, this.r)
		
		
		if(this.body.position.y > height){
			Matter.Body.setPosition(this.body,{x:random(0,600), y:random(0,600)})
		}
 }
}