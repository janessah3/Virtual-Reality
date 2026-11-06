class Cloud{
  constructor(x,y,z){ 
    this.obj = document.createElement("a-entity");

   let cloud = document.createElement("a-sphere");
   cloud.setAttribute("color", "grey");
   cloud.setAttribute("position", "5 10 -5 ");
   cloud.setAttribute("radius", 0.20);
   this.obj.append( cloud );

   let cloud2 = document.createElement("a-sphere");
   cloud2.setAttribute("color", "grey");
   cloud2.setAttribute("position", "5 10 -5.3 ");
   cloud2.setAttribute("radius", 0.20);
   this.obj.append( cloud2 );

   let cloud3 = document.createElement("a-sphere");
   cloud3.setAttribute("color", "grey");
   cloud3.setAttribute("position", "5 10 -5.2 ");
   cloud3.setAttribute("radius", 0.20);
   this.obj.append( cloud3 );

  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}