var MainLayar = cc.Layer.extend({
    arr:[],
    ctor:function (){
        this._super();
        var size = cc.winSize;

        var bg = new cc.Sprite(res.bg1_jpg);
        bg.x = cc.winSize.width / 2;
        bg.y = cc.winSize.height / 2;
        this.addChild(bg);
        this.arr[0] = bg;
    }
});


var MainScene = cc.Scene.extend({
    onEnter:function (){
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});