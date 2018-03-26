
var HelloWorldLayer = cc.Layer.extend({
    redLayer:null,
    redSprite:null,
    speed:-15,
    ctor:function () {

        this._super();
        var size = cc.winSize;

        var redLayer = new cc.LayerColor(cc.color.RED,100,100);
        redLayer.ignoreAnchor = false;
        redLayer.setAnchorPoint(0.5,0.5);
        redLayer.y = size.height/2;
        this.redLayer = redLayer;
        this.addChild(this.redLayer);


        var redSprite = new cc.LayerColor(cc.color.RED,50,50);
        redSprite.ignoreAnchor = false;
        redSprite.setAnchorPoint(0.5,0.5);
        redSprite.x = size.width/2;
        this.redSprite = redSprite;
        this.addChild(this.redSprite);
        //this.scheduleUpdate();
        this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,2);

        return true;
    },
    update:function(dt){
        /*cc.log(dt);
        if(this.redLayer.x>cc.winSize.width){
            this.direcr = -1;
        }*/
        this.redLayer.x+=1;
    },
    myCallBack:function () {
        /*this.redLayer.x+=1;
        if(this.redLayer.x>400){
            this.unschedule(this.myCallBack);
        }*/

        this.redSprite.y -= this.speed;
        if(this.redSprite.y <0){
            this.speed =-this.speed;
        }else{
            this.speed +=0.2;
        }
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

