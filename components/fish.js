AFRAME.registerComponent("fish",{
    init: function(){
     for(var i = 1; i<30; i++){
        var id = `fish${i}`
        var posX = (Math.random() * 3000 + (-1000))
        var posY = (Math.random() * 2 + (-10))
        var posZ = (Math.random() * 3000 + (-1000))

        var position ={
           x:posX,
           y:posY,
           z:posZ 
        }
        this.summonFish(id, position);


     }   
    },
    summonFish : function(id,position){
        var terrainEl = document.querySelector('#terrain')
        var fishEl = document.createElement("a-entity");
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position", position)
        fishEl.setAttribute("gltf-model","./assets\models\fish\scene.gltf")
        fishEl.setAttribute("scale", {x:500, y:500,z:500})
        fishEl.setAttribute("animation-mixer",{})
        terrainEl.appendChild(fishEl);

    }
})