
var FirstLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var recordItem = new cc.MenuItemFont("记录",function(){
            var ls = cc.sys.localStorage;
            ls.setItem("curretScore",this.score);
            if(this.score > ls.getItem("bestScore")){
                ls.setItem('"bestScore',this.score);
            }
            cc.director.runScene(new SecondScene());
        },this);

        recordItem.setFontSize(80);
        recordItem.setColor(cc.color.ORANGE);

        var menu = new cc.Menu(recordItem);
        menu.y = size.height*0.5;
        this.addChild(menu);

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

