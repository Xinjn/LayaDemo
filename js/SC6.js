//sc6界面
function SC6UI() {
    SC6UI.super(this);
    console.log("进入sc6界面")

    //声明音频
    var SoundManager = Laya.SoundManager;
    console.log("播放音乐");
    SoundManager.playMusic("res/sounds/bgm2.mp3", 1, new Laya.Handler(this, onComplete));
    function onComplete() {
        console.log("播放完成");
    };

    //设置层级
    this.blackIn.zOrder = 0;
    //过渡动画
    this.blackIn.play(0, false)

    //哈希表(设置特定动画跳转)
    var obj = {
        1: "0",
        2: "190",
        3: "400",
        4: "0"
    };

    //船底波纹
    this.ripple.play();

    //旗帜进入
    this.flag_in.play(0, false);
    //旗帜进入监听
    this.flag_in.on(Laya.Event.COMPLETE, this, onFlagIn);
    //切换旗帜摇晃动画
    function onFlagIn() {
        this.flag_shake.play(0, true);
    }

    //前进/暂停开关
    var toggle = false;

    //获取flag属性
    var flag = this.flag;
    //获取flag前进属性
    var forward = this.forward;
    //获取flag暂停属性
    var suspend = this.suspend;
    //获取背景动画
    var move = this.move;
    //获取前景动画
    var moveFont = this.move_font;
    //设置速度（加快制作时差动画），监听前景动画完成并暂停
    moveFont.interval = 39

    //记录当前帧
    var index = 0;

    //监听点击事件
    flag.on(Laya.Event.MOUSE_DOWN, this, onFlag);
    //触发点击事件：前进/暂停动画
    function onFlag() {
        //清除旗帜摇晃动画
        this.flag_shake.clear();
        //旗帜静止动画
        this.flag_static.play(0, false);

        //切换开关
        toggle = !toggle
        if (toggle) {
            console.log("前进");
            //记录当前帧
            index = move.index
                //播放
            move.play(index, false);
            moveFont.play(index, false);
            //切换title
            forward.visible = false
            suspend.visible = true

        } else {
            console.log("暂停");
            //暂停
            move.stop();
            moveFont.stop();
                //记录当前帧
            index = move.index;
                //切换title
            forward.visible = true;
            suspend.visible = false;

            //实例化PartPageUI页面
            this.PartUI = new PartUI(onplay);
            //将PartPageUI插入到舞台
            Laya.stage.addChild(this.PartUI);
        }
    }

    //监听特定标签事件
    move.on(Laya.Event.LABEL, this, onLabelMove);
    //触发标签事件
    function onLabelMove(label) { //注意传参数
        switch (label) {
            case "tip":
            console.log("触发标签:" + label)
                //切换开关
                // toggle = !toggle
                //暂停
            move.stop()
            moveFont.stop();
                //记录当前帧
                index = move.index
            //     //记录当前帧
            // index = 260
                //切换title
            forward.visible = true
            suspend.visible = false

            //dialog界面
            //将dialog页面插入到舞台
            Laya.stage.addChild(new DialogUI(onplay));
                break;
            case "title2":
            this.bigTitle.text = "第一枪"
            this.smallTitle.text = "1927年，南昌起义打响武装反抗国民党反动派的第一枪"
            break;
            case "title3":
            this.bigTitle.text = "星星之火，可以燎原"
            this.smallTitle.text = "1927年，首个农村革命根据地在井冈山建立"
            break;
            default:
                break;
        }
    }

    //监听特定标签事件
    moveFont.on(Laya.Event.LABEL, this, onLabelMoveFont);
    //触发标签事件
    function onLabelMoveFont(label){
        if(label === "laba"){
            SoundManager.playSound("res/sounds/laba.mp3", 1);
        }
        if(label === "biu"){
            SoundManager.playSound("res/sounds/biu.mp3", 1);
        }
    }

    //继续播放 / 播放特定动画
    function onplay(part) {
        console.log("继续播放")
        console.log(toggle);
        //打开开关
        // toggle = !toggle;
        toggle = true;
        //切换title
        forward.visible = false
        suspend.visible = true

        //index必须+1不然标签事件会循环触发
        index++

        if (part) { //播放特定动画
            console.log("跳转到" + part + "帧数" + parseInt(obj[part]))
            move.play(parseInt(obj[part]), false);
            moveFont.play(parseInt(obj[part]), false);
        } else { //继续播放
            move.play(index, false);
            moveFont.play(index, false);
        }
    }

    //监听前景动画
    moveFont.on(Laya.Event.COMPLETE,this,onComplete)
    function onComplete(){
        console.log("立即暂停")
        move.stop()
    }


}
Laya.class(SC6UI, "SC6UI", SC6PageUI)