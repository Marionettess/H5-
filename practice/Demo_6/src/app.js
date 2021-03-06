
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    //index:0,
    ctor:function () {

        this._super();
        var size = cc.winSize;

        /*var labelTTF = new cc.LabelTTF('玩家:'+ this.index,'',64);
        labelTTF.x = 50;
        labelTTF.y = size.height-50;
        labelTTF.setAnchorPoint(0,1);
        this.addChild(labelTTF);
        this.label = labelTTF;
        this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,1);*/

        var startMenuItem = new cc.MenuItemFont("开始",function(){
            cc.log("开始按钮点击了！");
        },this);

        var setMenuItem = new cc.MenuItemFont("设置",function(){
            cc.log("设置按钮点击了！");
        },this);

        var ttfLabel = new cc.LabelTTF("其他","",30);
        ttfLabel.setFontFillColor(cc.color.RED);
        ttfLabel.enableStroke(cc.color.YELLOW,2);
        ttfLabel.enableShadow(cc.color.WHITE,15,15,15);

        var otherMenuItem = new cc.MenuItemLabel(ttfLabel,function(){
            cc.log("其他按钮点击了！");
        },this);

        var menu = new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        //菜单位置设置方案一
        menu.alignItemsHorizontally();
        // menu.alignItemsHorizontallyWithPadding(size.width*0.3);
        //menu.alignItemsVertically();
        //menu.alignItemsVerticallyWithPadding(50);
        this.addChild(menu);
        menu.y = size.height*0.3;

        
        //菜单位置设置方案二
        //menu.setPosition(cc.p(0,0));
        // menu.x = 0;
        // menu.y = 0;

        // startMenuItem.x = size.width*0.5;
        // startMenuItem.y = size.height*0.5;
        //
        // setMenuItem.x = size.width*0.2;
        // setMenuItem.y = size.height*0.3;
        //
        // otherMenuItem.x = size.width*0.8;
        // otherMenuItem.y = size.height*0.7;


        return true;
    }
    /*myTimer:function(dt){
       /* if(this.index == 60){
            this.pn = -1;
        }
        this.index+=1;
        this.label.setString('玩家:'+this.index);
    }*/
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

