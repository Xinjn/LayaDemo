//Dialog界面
function DialogUI(onplay) {
    DialogUI.super(this);
    console.log("运行Dialog界面")

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


    var that = this;

    //蒙版
    var Mask = this.Mask;
    Mask.visible = true;

    //进场动画
    this.dialogIn.play(0, false)

    var ticket = this.ticket;
    //声明数字按钮
    var buts = this.buts;
    //监听按钮
    buts.on(Laya.Event.MOUSE_DOWN, this, onClick);
    //输入列表
    var list = this.labels._childs;
    //触发点击事件
    function onClick(e) {
        var value = e.target.name
        if (value) {
            //传入输入展示
            onLabs(value)
        }
    };

    //声明数值
    var number = '';
    //声明星星
    var start = this.start;
    //声明正确回答
    var success = this.success;
    //声明错误提示
    var error = this.error;
    //输入展示函数
    function onLabs(value) {
        //输入逻辑
        if (value === "delete") {
            console.log("点击删除");
            //触发圆圈sk动画
            skeleton.pos(844, 635);
            skeleton.play(0, false);
            //逻辑
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

                //出场动画
                that.dialogOut.play(0, false);
                //监听出场动画完成事件
                that.dialogOut.on(Laya.Event.COMPLETE, this, onDialogOut)

                function onDialogOut() {
                    //回调函数：继续播放动画
                    onplay();

                    // 移除自身
                    that.removeSelf();
                    skeleton.removeSelf();
                }

            } else {
                console.log("正确答案1921年,请随我们一起重回百年征程");
                //展示错误提示
                error.visible = true;
                //出场动画
                that.dialogOut.play(0, false);
                //监听出场动画完成事件
                that.dialogOut.on(Laya.Event.COMPLETE, this, onDialogOut)

                function onDialogOut() {
                    //回调函数：继续播放动画
                    onplay();

                    // 移除自身
                    that.removeSelf();
                    skeleton.removeSelf();
                }
            }

        }
    }
}
Laya.class(DialogUI, "DialogUI", DialogPageUI)