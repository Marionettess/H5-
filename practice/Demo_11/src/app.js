
var HelloWorldLayer = cc.Layer.extend({
    sprites:[],
    runner:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var land = new cc.Sprite(res.land_png);
        land.setPosition(cc.p(size.width*0.5,size.height*0.2));
        land.setScaleX(1.5);
        this.addChild(land);
        //创建精灵数组
        /*for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }*/

        /*var action1 = new cc.Place(500,size.height*0.2);
        this.sprites[0].runAction(action1);

        this.sprites[1].runAction(cc.flipX(true));
        this.sprites[1].runAction(cc.flipY(true));

        this.sprites[2].runAction(cc.hide());

        this.sprites[2].runAction(cc.callFunc(function(){
            this.sprites[2].runAction(cc.show());
        },this));*/

        //var action2 = new cc.moveBy(5,200,0);
        //this.sprites[0].runAction(action2);
        //this.sprites[0].runAction(cc.moveBy(10.0,200,0));
        //this.sprites[1].runAction(cc.jumpBy(10.0,100,0,100,2));
        //this.sprites[2].runAction(cc.rotateBy(10.0,90,0));

        /*var node_1_MenuItem,node_2_MenuItem;
        var isPaused = false;
        node_1_MenuItem = new cc.MenuItemFont("Node1",function(){
            if(!isPaused){
                this.sprites[0].pause();
                isPaused=!isPaused;
                cc.log("pause sprites[0]");
            }else{
                this.sprites[0].resume();
                isPaused=!isPaused;
                cc.log("resume sprites[0]");
            }
        },this);*/

        /*node_2_MenuItem = new cc.MenuItemFont("Node2",function () {
            // this.sprites[1].stopAction();//需要传对应的action对象
            // this.sprites[1].stopActinByTag(tag);
            this.sprites[1].stopAllActions();
        },this);

        var menu = new cc.Menu(node_1_MenuItem,node_2_MenuItem);
        menu.y = size.height*0.5;
        menu.alignItemsHorizontallyWithPadding(50);
        this.addChild(menu);*/

        //间隔动作(ActionInterval)练习三 闪烁 进度条 颜色
        /*this.sprites[0].runAction(cc.blink(20.0,10));
        //this.sprites[0].runAction(cc.speed(cc.blink(20.0,10),5));//5倍速


        var timer = new cc.ProgressTimer(this.sprites[1]);
        timer.x = this.sprites[1].x+100;
        timer.y = this.sprites[1].y;
        this.addChild(timer);
        //timer.type = cc.ProgressTimer.TYPE_RADIAL;
        timer.type = cc.ProgressTimer.TYPE_BAR;
        timer.midPoint = cc.p(0,0);//控制变化起始点
        timer.barChangeRate = cc.p(0, 1);//控制x和y方向的变化率
        // timer.runAction(cc.progressFromTo(5.0,0,90));
        timer.runAction(cc.progressTo(5.0,50));

        this.sprites[2].runAction(cc.tintTo(5.0,128,0,0));
        //this.sprites[2].runAction(cc.tintBy(5.0,128,128,128));

        //变速 speed 与 ease
        this.sprites[1].runAction(cc.speed(cc.moveBy(20,300,0),5));//5倍速

        var tempAct = cc.moveBy(5.0,200,0);
        var tempEaseAction = tempAct.easing(cc.easeElasticInOut());//cc.easeBackIn();
        this.sprites[2].runAction(tempEaseAction);*/

        //reverse 动作组合
        //组合动画
        /*var action1 = cc.moveBy(2.0,100,0);
        var action2 = cc.rotateBy(2.0,90);
        //1.顺序执行
        this.sprites[0].runAction(cc.sequence(action1,action2));
        this.sprites[0].runAction(cc.sequence(action1,cc.callFunc(function(){
            cc.log("action1 执行完毕");
        },this)));
        //2.同步执行 注意不要用spawn和callFunc组合
        var action3 = cc.moveBy(2.0,200,0);
        var action4 = cc.rotateBy(2.0,-90);
        this.sprites[1].runAction(cc.spawn(action3,action4));
        //3.重复执行
        var action5 = cc.rotateBy(1.0,-90);
        this.sprites[2].runAction(cc.repeat(action5,5));
        this.sprites[2].runAction(cc.repeatForever(action5));
        //4.延迟执行
        this.sprites[0].runAction(cc.sequence(cc.delayTime(5.0),cc.rotateBy(5.0,180),cc.callFunc(function(){
            cc.log("action1 执行完毕");
        },this)));
        //5.反向执行
        var action6 = cc.moveBy(2.0,200,0);
        var action7 = action6.reverse();
        this.sprites[2].runAction(cc.sequence(action6,action7));*/



        //创建精灵数组
        /*for(var i=0;i<3;i++){
            this.sprites[i] = new cc.Sprite("res/sprite"+(i+1)+".png");
            this.sprites[i].x = size.width*0.2;
            this.sprites[i].y = size.height*(0.3*i+0.2);
            this.addChild(this.sprites[i]);
        }*/
        sp = new cc.Sprite(res["run_"+1+".png"]);
        sp.setPosition(cc.p(size.width*0.2,size.height*0.3));
        this.addChild(sp);

        //帧动画 方法一
        /*var animation = new cc.Animation();
        for (var i = 1; i < 15; i++) {
            //var frameName = "res/Animation/grossini_dance_" + ((i < 10) ? ("0" + i) : i) + ".png";
            var frameName = res["sp_animation_"+i];
            animation.addSpriteFrameWithFile(frameName);
        }

        //for (var i = 1; i < 7; i++) {
        //    var frameName = "res/Animation3/pao_" + i + ".png";
        //    animation.addSpriteFrameWithFile(frameName);
        //}

        animation.setDelayPerUnit(1 / 60);
        animation.setRestoreOriginalFrame(true);
        var animateAction = cc.animate(animation);
        sp.runAction(cc.repeatForever(animateAction));*/

        //帧动画 方法二
        cc.spriteFrameCache.addSpriteFrames(res.run_plist);

        this.runner = sp;
        var spriteFrames = [];
        for (var i = 1; i < 15; i++) {
            var frameName = "run_"+i+ ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(frameName);
            spriteFrames.push(frame);
        }
        var animation = new cc.Animation(spriteFrames);
        animation.setDelayPerUnit(1 / 30);
        animation.setRestoreOriginalFrame(true);
        var animateAction = cc.animate(animation);
        //sp.runAction(animateAction);
        sp.runAction(animateAction.repeatForever());





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

