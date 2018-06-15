
var SecondLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;


        return true;
    }
});

var SecondScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});

