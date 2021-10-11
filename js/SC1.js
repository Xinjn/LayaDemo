//sc1界面
function SC1UI() {
    SC1UI.super(this);

    //设置层级
    this.blackIn.zOrder = 0;
    this.blackIn.play(0, false)

    //声明音频
    var SoundManager = Laya.SoundManager;
    setTimeout(()=>{
        SoundManager.playSound("res/sounds/pj.mp3", 1);
    },500)
    setTimeout(()=>{
        SoundManager.playSound("res/sounds/pj.mp3", 1);
    },1000)

    //生成Skeleton实例
    this.skeleton = new Laya.Skeleton();
    //设置层级
    this.skeleton.zOrder = -1;
    //添加到SC1UI舞台
    this.addChild(this.skeleton);
    //加载sk文件
    this.skeleton.load("res/sk/sc1.sk", Laya.Handler.create(this, onComplete));
    //触发完成事件
    function onComplete() {

        //设置位置
        this.skeleton.pos(640, 360);
        //设置播放类型
        this.skeleton.play(0, false)
    }

    //监听Skeleton播放完成事件
    this.skeleton.on(Laya.Event.STOPPED, this, completeHandler);
    //触发Skeleton播放完成事件
    function completeHandler() {
        //移除自身界面(1s后)
        this.removeSelf()

        Laya.stage.addChild(new SC5UI());
    }


}
Laya.class(SC1UI, "SC1UI", SC1PageUI)