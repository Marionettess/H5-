
var HelloWorldLayer = cc.Layer.extend({
    ctor:function () {

        this._super();
        var size = cc.winSize;

        var layer1 = new cc.LayerColor(cc.color.RED,100,100);
        var layer2 = new cc.LayerColor(cc.color.YELLOW,100,100);
        var layer3 = new cc.LayerColor(cc.color.BLUE,100,100);
        layer1.ignoreAnchor = false;
        layer2.ignoreAnchor = false;
        layer3.ignoreAnchor = false;
        layer1.setAnchorPoint(0,0);
        layer2.setAnchorPoint(1,1);
        layer2.setAnchorPoint(1,0);


        layer1.setPosition(0,0);
        layer2.setPosition(size.width,size.height-100);
        layer3.setPosition(size.width-50,50);

        //layer1.rotation = 45;
        //layer2.rotation = 45;

        //layer1.setScale(0.5);
        //layer2.setScale(0.5,0.2);

        this.addChild(layer1);
        this.addChild(layer2);
        this.addChild(layer3);


        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

