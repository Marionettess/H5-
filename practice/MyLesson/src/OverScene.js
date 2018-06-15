var OverLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        var size = cc.winSize;
        //this.addChild(new cc.LayerColor(cc.color.BLUE));
        var bg = new cc.Sprite(res.JieShuBeiJing_jpg);
        bg.x = size.width/2;
        bg.y = size.height/2;
        this.addChild(bg);

        var scoreLabel = new cc.LabelTTF("","",size.width/12);
        scoreLabel.x = size.width*0.46;
        scoreLabel.y = size.height*1.02;
        scoreLabel.setFontFillColor(cc.color.YELLOW);
        kuang.addChild(scoreLabel);

        var score = cc.sys.localStorage.getItem("currentScore");
        scoreLabel.setString(score);
        scoreLabel.scale = 0;
        var scaleAction = cc.scaleTo(0.5,1.0).easing((cc.easeElasticOut(0.5)));
        var seq = cc.sequence(cc.delayTime(0.2),scaleAction);
        scoreLabel.runAction(seq);
        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});