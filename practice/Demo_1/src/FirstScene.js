var FirstLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var spl = new cc.Sprite(res.Red_png);
        spl.x = 200;
        spl.y = 200;
        this.addChild(spl);

        return true;
    }
});

var FirstScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new FirstLayer();
        this.addChild(layer);
    }
});