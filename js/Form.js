class Form {
  constructor() {
    this.input = createInput("").attribute("placeBoulder","Enter Your Name");
    this.playButton = createButton("PLAY");
    this.titleImg = createImg("assets/title.png","gameTitle");
    this.greeting = createElement("h2")
  }

  setElementPositions(){
    this.titleImg.position(120,50);
    this.input.position(width/2-110, height/2-80);
    this.playButton.position(width/2-90, height/2-20);
    this.greeting.position(width/2-300, height/2-100);
  }

  setElementStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput")
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide(){
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide();
      this.playButton.hide();
      var message = `
      hello${this.input.value()}
      </br> wait for another player to join`;
      this.greeting.html(message);
    })
  }

  display(){
    this.setElementPositions();
    this.setElementStyle();
    this.handleMousePressed();

  }
}
