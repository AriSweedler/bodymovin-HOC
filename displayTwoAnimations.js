var animNumber = 0;

function createNewAnimBlock() {
    let homeBlock = document.getElementById("home");
    let myAnimationBlock = document.createElement("div");
    myAnimationBlock.setAttribute("class", "bodymovinHost"); 
    myAnimationBlock.setAttribute("id", "bodymovin_" + animNumber); 
    homeBlock.appendChild(myAnimationBlock);
}

function doAnimation(myPath){
    createNewAnimBlock();
    var anim;
    var animData = {
        container: document.getElementById("bodymovin_" + animNumber),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        autoloadSegments: true,
        rendererSettings: {
            progressiveLoad:false
        },
        path: "animations/" + myPath + ".json"
    };
    anim = bodymovin.loadAnimation(animData);
    animNumber++;
}

doAnimation('first');
doAnimation('second');