AFRAME.registerComponent("coin",{
    init: function(){
     for(var i = 1; i<20; i++){
        var id = `coin${i}`
        var posX = (Math.random() * 3000 + (-1000))
        var posY = (Math.random() * 2 + (-10))
        var posZ = (Math.random() * 3000 + (-1000))

        var position ={
           x:posX,
           y:posY,
           z:posZ 
        }
        this.summoncoin(id, position);


     }   
    },
    summoncoin : function(id,position){
        var terrainEl = document.querySelector('#terrain')
        var coinEl = document.createElement("a-entity");
        coinEl.setAttribute("id",id)
        coindEl.setAttribute("position", position)
        coinEl.setAttribute("gltf-model","./assets\models\coins\scene.gltf")
        coinEl.setAttribute("scale", {x:500, y:500,z:500})
        coinEl.setAttribute("animation-mixer",{})
        terrainEl.appendChild(coinEl);

    }
})