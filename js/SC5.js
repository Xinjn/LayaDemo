//sc5界面（登录页面）
function SC5UI() {
    SC5UI.super(this);

    //设置层级
    this.blackIn.zOrder = 0;
    //过渡动画
    this.blackIn.play(0, false)

    //圆圈位置哈希表
    var hash = {
        0: [699, 636],
        1: [412, 539],
        2: [505, 538],
        3: [604, 538],
        4: [698, 538],
        5: [797, 539],
        6: [890, 538],
        7: [413, 637],
        8: [506, 637],
        9: [605, 636],
    };
    //圆圈sk
    var skeleton = this.skeleton
    skeleton = new Laya.Skeleton();
    Laya.stage.addChild(skeleton)
    skeleton.load("res/sk/quan.sk", Laya.Handler.create(this, onComplete), 1)

    function onComplete() {
        skeleton.zOrder = 1;
        skeleton.paused()
    }

    //背景动画
    //实例化Animation
    this.xhAni = new Laya.Animation();
    //加载Animation
    this.xhAni.loadAnimation("ani/xh_bg.ani"); //注意引入路径和后缀名称
    //设置位置
    this.xhAni.pos(200, 200);
    //设置层级
    this.xhAni.zOrder = -1;
    //播放动画
    this.xhAni.play();
    //背景动画插入到LoadingUI
    this.addChild(this.xhAni);

    //声明数字按钮
    var buts = this.buts;
    //监听按钮
    buts.on(Laya.Event.MOUSE_DOWN, this, onClick);
    //获取展示总列表
    var list = this.labels._childs;
    //触发点击事件
    function onClick(e) {
        var value = e.target.name
        if (value) {
            //传入输入展示
            onLabs(value)
        }
    }

    //声明数值
    var number = '';
    //声明星星
    var start = this.start;
    //声明正确回答
    var success = this.success;
    //声明错误提示
    var error = this.error;
    //声明出发
    var go = this.go;
    //声明出发动画
    var ticketAni = this.ticketAni;
    //输入展示函数
    function onLabs(value) {
        //输入逻辑
        if (value === "delete") {
            console.log("点击删除");
            //触发圆圈sk动画
            skeleton.pos(844, 635);
            skeleton.play(0, false);
            if (number.length > 0) {
                var newValue = number.split('');
                newValue.pop();
                number = newValue.join("");
                //UI删除展示:倒叙遍历
                for (let i = list.length - 1; i < list.length; i--) {
                    if (list[i].text) {
                        list[i].text = ''
                        return
                    }
                }

            } else {
                return console.log("无数字")
            }

        } else {
            console.log("输入数字", value);
            //触发圆圈sk动画
            skeleton.pos(hash[value][0], hash[value][1]);
            skeleton.play(0, false)
            number += value;
            //UI展示:遍历
            for (var i = 0; i < list.length; i++) {
                if (!list[i].text) {
                    list[i].text = value
                    break
                }
            }

        }

        console.log("number:", number);

        //验证逻辑
        if (number.length === 4) {
            console.log("开启验证")
            if (number === "1921") {
                console.log("回答正确");
                //展示星星
                start.visible = true;
                //展示正确回答
                success.visible = true;

                setTimeout(() => {
                    //展示出发
                    go.visible = true;
                    //展示出发动画
                    ticketAni.play(0, false);
                }, 1000)
            } else {
                console.log("正确答案1921年,请随我们一起重回百年征程");
                //展示错误提示
                error.visible = true;

                setTimeout(() => {
                    //展示出发
                    go.visible = true;
                    //展示出发动画
                    ticketAni.play(0, false);
                }, 1000)
            }

        }

    };

    //声明出发按钮
    var go = this.go;
    //监听触发事件
    go.on(Laya.Event.MOUSE_DOWN, this, onGo);
    //回调函数：进入下一场景
    function onGo() {
        console.log("出发");
        //触发圆圈sk动画
        //设置位置
        skeleton.pos(650, 600);
        skeleton.play(0, false)

        //进入下一场景
        setTimeout(() => {
            //加载sc6界面
            //实例sc6界面
            this.SC6UI = new SC6UI();
            //将sc6插入到舞台
            Laya.stage.addChild(this.SC6UI);

            //移除自身
            skeleton.removeSelf();

            //移除舞台
            console.log("移除舞台");
            this.removeSelf();
        }, 500)
    }

}
Laya.class(SC5UI, "SC5UI", SC5PageUI)