    //加载界面
    function Loading(value) {
        Loading.super(this);

        //声明所有资源
        var resBag = [
            "res/atlas/sc5.atlas",
            "res/atlas/sc6.atlas",
            "res/atlas/dialog.atlas",
            "res/atlas/part.atlas",
        ];

        //设置progress Handler的第4个参数默认为true，根据加载文件个数获取加载进度,设置false则展示加载进度
        Laya.loader.load(resBag, null, Laya.Handler.create(this, onLoad, null, false));

        function onLoad(value) {
            var number = Math.floor(value * 100)
            console.log("进度:" + number);
            this.card.y = 310
            this.card.y -= number

            //设置IDE进度文本
            this.progress.text = number + "%";

            //加载完成执行回调
            if (number === 100) {
                console.log("加载完成");

                //播放船票飞
                skeleton.play(0, false);
                //隐藏船票
                this.clear.play(0, false);
            }
        }

        //船票飞出动画
        // 加载sk文件
        var templet;
        var skeleton;
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
                //加载sc1界面
                //实例LoadingUI界面
                //将加载页面插入到舞台
                Laya.stage.addChild(new SC1UI());
                // Laya.stage.addChild(new SC6UI());

                //移除自身
                setTimeout(() => {
                    this.removeSelf()
                }, 3000)


            }
        }
    };
    Laya.class(Loading, "Loading", LoadingPageUI);