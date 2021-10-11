//程序入口
Laya.init(1280, 720, Laya.WebGL);

//预备加载资源
Laya.loader.load(
    [
        "res/atlas/xh.atlas",
        "res/atlas/loading.atlas",
        "res/atlas/comp.atlas",
        "res/atlas/sc5.atlas",
        "res/atlas/sc6.atlas",
        "res/atlas/dialog.atlas",
        "res/atlas/part.atlas"
    ],
    Laya.Handler.create(null, onLoaded),
    Laya.Handler.create(this, onLoading, null, false)
);

//加载界面
function LoadingUI(value) {
    LoadingUI.super(this);

    //背景动画
    //实例化Animation
    this.xhAni = new Laya.Animation();
    //加载Animation
    this.xhAni.loadAnimation("ani/xh_bg.ani"); //注意引入路径和后缀名称
    //设置位置
    this.xhAni.pos(200, 200)
        //设置层级
    this.xhAni.zOrder = -1
        //播放动画
    this.xhAni.play()
        //背景动画插入到LoadingUI
    this.addChild(this.xhAni)


    //船票飞出动画
    // 加载sk文件
    var templet
    var skeleton
        //实例动画模版
    templet = new Laya.Templet();
    //加载sk文件
    templet.loadAni("res/sk/loading.sk");
    //监听sk加载完成事件
    templet.on(Laya.Event.COMPLETE, this, onComplete);
    //触发完成事件
    function onComplete() {
        //生成Skeleton实例
        skeleton = new Laya.Skeleton(templet, 1)
            //插入到LoadingUI中
        this.addChild(skeleton)
            //设置帧速率
        skeleton.playbackRate(0.5)
            //设置位置
        skeleton.pos(660, 720 / 2);
        //监听Skeleton播放完成事件
        skeleton.on(Laya.Event.STOPPED, this, completeHandler);
        //触发Skeleton播放完成事件
        function completeHandler() {
            //移除自身界面(1s后)
            setTimeout(() => {
                this.removeSelf()
            }, 1000)

            //加载sc1界面
            //实例LoadingUI界面
            this.SC1UI = new SC1UI()
                //将加载页面插入到舞台
            Laya.stage.addChild(this.SC1UI);
        }
    }

    //进度条动画
    var index = 0
        //进度条文本
    this.progress.text = index + "%"
        //定时器
    var timer
    timer = setInterval(() => {
        index++
        if (index > 99) {
            //播放船票飞
            skeleton.play(0, false)
                //隐藏船票
            this.clear.play(0, false)
                //清除定时器
            clearInterval(timer)
        }
        this.progress.text = index + "%"
    }, 1)
}
Laya.class(LoadingUI, "LoadingUI", LoadingPageUI)

//sc1界面
function SC1UI() {
    SC1UI.super(this);
    //生成Skeleton实例
    this.skeleton = new Laya.Skeleton();
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

//sc5界面
function SC5UI() {
    SC5UI.super(this);

    //圆圈sk
    var skeleton = this.skeleton
    skeleton = new Laya.Skeleton();
    Laya.stage.addChild(skeleton)
    skeleton.load("res/sk/quan.sk", Laya.Handler.create(this, onComplete), 1)

    function onComplete() {
        skeleton.zOrder = 10
            //设置位置
        skeleton.pos(650, 520);
        skeleton.paused()
    }


    //背景动画
    //实例化Animation
    this.xhAni = new Laya.Animation();
    //加载Animation
    this.xhAni.loadAnimation("ani/xh_bg.ani"); //注意引入路径和后缀名称
    //设置位置
    this.xhAni.pos(200, 200)
        //设置层级
    this.xhAni.zOrder = -1
        //播放动画
    this.xhAni.play()
        //背景动画插入到LoadingUI
    this.addChild(this.xhAni)

    //声明数字按钮
    var buts = this.buts
        //监听按钮
    buts.on(Laya.Event.MOUSE_DOWN, this, onClick)
        //输入列表
    var list = this.labels._childs
        //触发点击事件
    function onClick(e) {
        var value = e.target.name
            //传入输入展示
        onLabs(value)
    }

    //声明数值
    var number = ''
        //声明星星
    var start = this.start
        //声明出发
    var go = this.go
        //输入展示函数
    function onLabs(value) {
        //转换为字符串
        value = value.toString()

        //存入数值
        number = number + value
        console.log('number:', number)

        //开启验证
        if (number.length === 4) {
            console.log("开启验证")
            if (number === "1921") {
                console.log("回答正确")
                    //展示星星
                start.visible = true
                    //展示出发
                go.visible = true
                    //隐藏数字键盘
                buts.visible = false
            } else {
                console.log("回答错误")
            }
        }

        //输入展示
        for (var i = 0; i < list.length; i++) {
            //输入展示
            if (value === "delete") { //删除
                //倒叙遍历
                for (let j = list.length - 1; j < list.length; j--) {
                    //保底：如果第一项不存在直接返回
                    if (!list[0].text) { return }
                    if (list[j].text) {
                        list[j].text = ''
                        return
                    }
                }
            } else { //数字
                if (!list[i].text) {
                    list[i].text = value
                    return
                }
            }
        }
    }

    //声明出发按钮
    var go = this.go
        //监听触发事件
    go.on(Laya.Event.MOUSE_DOWN, this, onGo)

    function onGo() {
        console.log("出发")
            //触发圆圈sk动画
        skeleton.play(0, false)
    }
    skeleton.on(Laya.Event.STOPPED, this, completeHandler);
    //移除自身
    function completeHandler() {
        //移除自身
        skeleton.removeSelf()
            //移除舞台(1s后)
        setTimeout(() => {
            console.log("移除舞台")
            this.removeSelf()
        }, 1000)

        //加载sc6界面
        //实例sc6界面
        this.SC6UI = new SC6UI();
        //将sc6插入到舞台
        Laya.stage.addChild(this.SC6UI);

    }
}
Laya.class(SC5UI, "SC5UI", SC5PageUI)

//sc6界面
function SC6UI() {
    SC6UI.super(this);
    console.log("进入sc6界面")

    //哈希表(特定动画跳转)
    var obj = {
        1: "0",
        2: "200",
        3: "400",
        4: "0"
    }

    //船底波纹
    this.ripple.play()
        //旗帜进入
    this.flag_in.play(0, false)
        //前进/暂停开关
    var toggle = false
        //获取flag属性
    var flag = this.flag
        //获取flag前进属性
    var forward = this.forward
        //获取flag暂停属性
    var suspend = this.suspend
        //监听点击事件
    flag.on(Laya.Event.MOUSE_DOWN, this, onFlag)
        //记录当前帧
    var index = 0
        //获取动画
    var move = this.move

    //触发点击事件：前进/暂停动画
    function onFlag() {
        toggle = !toggle
        if (toggle) {
            console.log("前进");
            //记录当前帧
            index = move.index
                //播放
            move.play(index, false);
            //切换title
            forward.visible = false
            suspend.visible = true

        } else {
            console.log("暂停");
            //暂停
            move.stop()
                //记录当前帧
            index = move.index
                //切换title
            forward.visible = true
            suspend.visible = false

            //将PartPageUI插入到舞台
            console.log("将PartPageUI插入到舞台")
                //实例化PartPageUI页面
            this.PartUI = new PartUI(onplay)
            Laya.stage.addChild(this.PartUI)
        }
    }

    //监听标签事件
    move.on(Laya.Event.LABEL, this, onLabel)
        //触发标签事件
    function onLabel(label) { //注意传参数
        if (label === "tip") {
            console.log("触发标签:" + label)
                //切换开关
                // toggle = !toggle
                //暂停
            move.stop()
                //记录当前帧
            index = 260
                //切换title
            forward.visible = true
            suspend.visible = false

            //dialog界面
            //将dialog页面插入到舞台
            Laya.stage.addChild(new DialogUI(onplay));
        }
    }

    //继续播放 / 播放特定动画
    function onplay(part) {
        console.log("继续播放")
            //切换开关
        toggle = !toggle
            //切换title
        forward.visible = false
        suspend.visible = true

        //index必须+1不然标签事件会循环触发
        index++

        if (part) { //播放特定动画
            console.log("跳转到" + part + "帧数" + parseInt(obj[part]))
            move.play(parseInt(obj[part]), false);
        } else { //继续播放
            move.play(index, false);
        }
    }
}
Laya.class(SC6UI, "SC6UI", SC6PageUI)

//Dialog界面
function DialogUI(onplay) {
    DialogUI.super(this);
    console.log("运行Dialog界面")

    var that = this

    //蒙版
    var Mask = this.Mask
    Mask.visible = true

    var ticket = this.ticket
        //声明数字按钮
    var buts = this.buts
        //监听按钮
    buts.on(Laya.Event.MOUSE_DOWN, this, onClick)
        //输入列表
    var list = this.labels._childs
        //触发点击事件
    function onClick(e) {
        var value = e.target.name

        //传入输入展示
        onLabs(value)
    }

    //声明数值
    var number = ''
        //声明星星
    var start = this.start
        //输入展示函数
    function onLabs(value) {
        //转换为字符串
        value = value.toString()

        //存入数值
        number = number + value
        console.log('number:', number)

        //开启验证
        if (number.length === 4) {
            console.log("开启验证")
            if (number === "1921") {
                console.log("回答正确")
                    //展示星星
                start.visible = true;

                // 移除自身
                that.removeSelf() //删除
                    // that.destroy()//销毁

                //回调函数：继续播放动画
                onplay()
            } else {
                console.log("回答错误")
            }

        }

        //输入展示
        for (var i = 0; i < list.length; i++) {
            //输入展示
            if (value === "delete") { //删除
                //倒叙遍历
                for (let j = list.length - 1; j < list.length; j--) {
                    //保底：如果第一项不存在直接返回
                    if (!list[0].text) { return }
                    if (list[j].text) {
                        list[j].text = ''
                        return
                    }
                }
            } else { //数字
                if (!list[i].text) {
                    list[i].text = value
                    return
                }
            }
        }
    }
}
Laya.class(DialogUI, "DialogUI", DialogPageUI)

//Part界面
function PartUI(onplay) {
    PartUI.super(this);

    //蒙版
    this.Mask.visible = true
        //声明数字按钮
    var buts = this.buts
        //监听按钮
    buts.on(Laya.Event.MOUSE_DOWN, this, onClick)
        //获取总列表
    var list = buts._childs
        //触发点击事件
    function onClick(e) {
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

    //监听关闭事件
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

//资源加载进度
function onLoading(value) {
    // console.log("进度: " + Math.floor(value * 100));
    if (Math.floor(value * 100) === 100) {
        console.log("加载完成")
        onLoaded()
    }
}

//加载完成执行回调函数
function onLoaded() {
    console.log("执行回调")
        //加载界面
        //实例LoadingUI界面
    this.loadingUi = new LoadingUI()
        //将加载页面插入到舞台
    Laya.stage.addChild(this.loadingUi);
}