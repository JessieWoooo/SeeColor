/**
 * Created by A_Jie on 2017/3/4.
 */
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);
var gameView = new createjs.Container();
stage.addChild(gameView);

var n = 2;
var level = 1;
function addRect(){
    var range = 140;
    var k = 33;
    var b = 15;
    var color = "#";
    var diffcolor = "#";
    var temp = Math.random() > 0.5 ? -parseInt(k/level + b) : parseInt(k/level + b);
    for(var i = 0; i < 3; i++){
        cl = parseInt(Math.random()*range) + 60;
        dl = cl + temp;
        cl = cl.toString(16);
        if(cl.length == 1){
            cl = "0" + cl;
        }
        color = color + cl;
        dl = dl.toString(16);
        if(dl.length == 1){
            dl = "0" + dl;
        }
        diffcolor = diffcolor + dl;
    }
/*    var cl1 =  parseInt(Math.random()*200);
    var cl2 =  parseInt(Math.random()*200);
    var cl3 =  parseInt(Math.random()*200);
/!*    var cl4 =  parseInt(Math.random()*16);
    var cl5 =  parseInt(Math.random()*16);
    var cl6 =  parseInt(Math.random()*16);*!/
    var color = "#" + cl1.toString(16) + cl2.toString(16) + cl3.toString(16);
    var temp = 40/level + 10;
    cl1 += temp;
    cl2 += temp;
    cl3 += temp;

    var diffcolor = "#" + cl1.toString(16) + cl2.toString(16) + cl3.toString(16);*/
    var x = parseInt(Math.random()*n);
    var y = parseInt(Math.random()*n);
    for(var indexX = 0; indexX < n; indexX++){
        for(var indexY = 0; indexY < n; indexY++){
            var r = new Rect(n, color, diffcolor);
            gameView.addChild(r);
            r.x = indexX;
            r.y = indexY;
            if(r.x == x && r.y == y){
                r.setRectType(2);
            }
            r.x = indexX*400/n;
            r.y = indexY*400/n;
            if(r.getRectType() == 2){
                r.addEventListener("click",function(){
                    level += 1;
                    document.getElementById("pid").innerHTML = "level : "+level;
                    if(n < 7){
                        ++n;
                    }
                    gameView.removeAllChildren();
                    addRect();
                })
            }
        }
    }
}
addRect();
