AFRAME.registerComponent("game-play",{
    schema:{
        elementId: {
            type:"string",
            default:"#ring1"
        }
    },
    update:function(){
        this.isCollided(this.data.elementId);
    },
    isCollided: function(elementId){
        const element= document.querySelector(elementId);
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                console.log(elementId + " collision")
            }
            else if(elementId.includes("#hurdle")){
                console.log(elementId + " collision")
            }
        })
        
    },
    const element = document.querySelector(elementId);
    element.addEventListener("collide", e=> {
        if (elementId.includes("#coin")) {
            element.setAttribute("visible", false);
            console.log("ring collision")
        }
    }),
    coinEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius: 2
    })
})
