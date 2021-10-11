//Part界面
function PartUI(onplay) {
    PartUI.super(this);
    //蒙版
    this.Mask.visible = true;

    //进场动画
    this.panelIn.play(0,false);

    //设置滚动条
    this.panel.hScrollBarSkin = "";
    //橡皮筋效果
    this.panel.hScrollBar.elasticDistance = 200;
    this.panel.hScrollBar.elasticBackTime = 200;

    //声明数字按钮
    var buts = this.buts

	//定义一个开始时间和结束时间
    var firstTime = 0;
    var lastTime = 0;
	//定义一个开始时间和结束时间
    var key = false ;

    //监听点击事件
    buts.on(Laya.Event.MOUSE_DOWN,this,onDown)
    function onDown(){
        firstTime = new Date().getTime();
    }

    //移动事件会覆盖抬起事件，如果要同时监听，则监听上级（全局）的抬起事件
    //监听抬起事件
    buts.on(Laya.Event.MOUSE_UP, this, onUp);
    function onUp(e){
        lastTime = new Date().getTime();

        //如果这个时间差小于300  ，就把锁打开
        if( lastTime - firstTime < 300){//判定鼠标点击
            console.log("触发鼠标点击事件")
            key = true;
        }else{//判定鼠标移动
            console.log("触发鼠标移动事件")
            key = false;
        }        
    }

    //获取总列表
    var list = buts._childs
        //触发点击事件
    function onUp(e) {
        //获取目标
        var value = e.target.name
            //遍历总列表
        for (var i = 0; i < list.length; i++) {
            if (list[i].name === value) {
                //获取当前节点
                var el = list[i]
                    //获取当前节点子列表
                var imgList = el._childs
                    //设置图片
                imgList[1].visible = false

                console.log("关闭part")
                    //移除自身
                this.removeSelf()
                    //播放特定页面
                onplay(value)
            } else {
                //获取当前节点
                var el = list[i]
                    //获取当前节点子列表
                var imgList = el._childs
                    //设置图片
                imgList[1].visible = true
            }
        }
    }

    //监听关闭按钮
    this.close.on(Laya.Event.MOUSE_DOWN, this, onClose)
        //关闭part
    function onClose() {
        console.log("关闭part")
            //移除自身
        this.removeSelf()
            //回调函数：继续播放
        onplay()
    }
}
Laya.class(PartUI, "PartUI", PartPageUI)