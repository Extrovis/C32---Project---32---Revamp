class Box{

    constructor(x, y, width, height) {
        var properties = {
            isStatic: false
        }

        this.image = loadImage("Sprites/wood1.png")

        this.body = Bodies.rectangle(x, y, width, height, properties);

        this.width = width;
        this.height = height;

        this.visibility = 255;

        World.add(world, this.body);
    }

    score(){
        if (this.visibility < 255 && !this.visibility <= 0){
            score++;
        }
    }

    display() {

        if(this.body.speed < 2){

            var pos = this.body.position;

            push();
    
            imageMode(CENTER);
    
            translate(pos.x, pos.y);
    
            fill("white");
        
            image(this.image, 0, 0, this.width, this.height);

            //rect(0, 0, this.width, this.height);
    
            noFill();
    
            pop();

        }else {

            World.remove(world, this.body);

            push();

            if(frameCount % 2 == 0){

                this.visibility -= 10;

            }

            tint(255, this.visibility);

            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

            pop();

        }

    }

}