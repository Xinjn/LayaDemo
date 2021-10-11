//初始化引擎
Laya.init(1280, 720, Laya.WebGL);
Laya.stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;

//声明音频
var SoundManager = Laya.SoundManager;
console.log("播放音乐");
SoundManager.playMusic("res/sounds/bgm1.mp3", 1, new Laya.Handler(this, onComplete));

function onComplete() {
    console.log("播放完成");
}

//设置舞台stage颜色
// Laya.stage.bgColor = "#ffcccc";

//背景静态（保底）
var ape = new Laya.Sprite();
ape.loadImage("library/xh1.png");
ape.pos(0, 0);
ape.zOrder = -1
Laya.stage.addChild(ape);

//背景动态
//背景资源
var bgBag = "res/atlas/xh.atlas";
//加载完背景资源执行onProBg方法
Laya.loader.load(bgBag, Laya.Handler.create(this, onBgBag));
//回调函数：背景动画
function onBgBag() {
    //实例化Animation
    var xhAni = new Laya.Animation();
    //背景动画
    //实例化Animation
    var xhAni = new Laya.Animation();
    //加载Animation
    xhAni.loadAnimation("ani/xh_bg.ani"); //注意引入路径和后缀名称
    //设置位置
    xhAni.pos(200, 200);
    //设置层级
    xhAni.zOrder = -1;
    //播放动画
    xhAni.play();
    //背景动画插入到LoadingUI
    Laya.stage.addChild(xhAni);
}

//加载页资源
var loadBag = "res/atlas/loading.atlas";
//加载完背景资源执行onProBg方法
Laya.loader.load(loadBag, Laya.Handler.create(this, onLoadBag));
//回调函数：加载页
function onLoadBag() {

    //加载界面
    //实例LoadingUI界面
    //将加载页面插入到舞台
    Laya.stage.addChild(new Loading());

}