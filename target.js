// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables
        var posX = Math.random() * 3000 + (-1000);      
        var posY = Math.random() * 2 + (-1);
        var posZ = Math.random() * 3000 + -1000;
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    },
  
    coins: function(id,position) {
        
        //Get the terrain element
        var terrainEl = document.querySelector("#terrain");
        
        //creating the bird model entity
        var fishEl = document.createElement("a-entity");
        
        //Setting multiple attributes
        fishEl.setAttribute("id", id);
        
        fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", { x: 500, y: 500, z: 500 });
        
      fishEl.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");
  
      //set animation mixer of models with animation
      fishEl.setAttribute("animation-mixer", {});
      fishEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius: 5
      });
  
      coinEl.setAttribute("game-play", {
        elementId:`#${id}`
      })
          
      terrainEl.appendChild(coinEl);
    }
  });
  