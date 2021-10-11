var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var DialogPageUI=(function(_super){
		function DialogPageUI(){
			
		    this.dialogIn=null;
		    this.dialogOut=null;
		    this.Mask=null;
		    this.ticket=null;
		    this.starts=null;
		    this.start=null;
		    this.tabels=null;
		    this.labels=null;
		    this.error=null;
		    this.success=null;
		    this.buts=null;
		    this.but0=null;
		    this.but1=null;
		    this.but2=null;
		    this.but3=null;
		    this.nut4=null;
		    this.but5=null;
		    this.but6=null;
		    this.but7=null;
		    this.but8=null;
		    this.but9=null;
		    this.delete=null;

			DialogPageUI.__super.call(this);
		}

		CLASS$(DialogPageUI,'ui.test.DialogPageUI',_super);
		var __proto__=DialogPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(DialogPageUI.uiView);

		}

		DialogPageUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1280,"visible":false,"var":"Mask","skin":"sc6/mask.png","height":720,"alpha":0.8},"compId":42},{"type":"Box","props":{"y":360,"x":640,"anchorY":0.5,"anchorX":0.5},"compId":45,"child":[{"type":"Box","props":{"var":"ticket"},"child":[{"type":"Image","props":{"skin":"dialog/ticket.png"}},{"type":"Image","props":{"y":53,"x":212,"skin":"dialog/title.png"}},{"type":"Image","props":{"y":259,"x":322,"var":"starts","skin":"dialog/starts.png"}},{"type":"Image","props":{"y":259,"x":324,"visible":false,"var":"start","skin":"dialog/start.png"}},{"type":"Box","props":{"y":144,"x":212,"var":"tabels"},"child":[{"type":"Image","props":{"skin":"dialog/empty1.png"}},{"type":"Image","props":{"x":133,"skin":"dialog/empty1.png"}},{"type":"Image","props":{"x":270,"skin":"dialog/empty1.png"}},{"type":"Image","props":{"x":403,"skin":"dialog/empty1.png"}}]},{"type":"Box","props":{"y":144,"x":211,"var":"labels"},"child":[{"type":"Label","props":{"y":0,"x":0,"width":93,"valign":"middle","styleSkin":"comp/label.png","name":"item0","height":91,"fontSize":60,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":133,"width":93,"valign":"middle","styleSkin":"comp/label.png","name":"item1","height":91,"fontSize":60,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":271,"width":92,"valign":"middle","styleSkin":"comp/label.png","name":"item2","height":91,"fontSize":60,"color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":403,"width":93,"valign":"middle","styleSkin":"comp/label.png","name":"item3","height":91,"fontSize":60,"color":"#000000","align":"center"}}]},{"type":"Label","props":{"y":326,"x":215,"width":477,"visible":false,"var":"error","valign":"top","text":"正确答案1921年,请随我们一起重回百年征程","styleSkin":"comp/label.png","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ab351e","bold":true,"align":"center"}},{"type":"Label","props":{"y":327,"x":398,"width":107,"visible":false,"var":"success","valign":"top","text":"回答正确","styleSkin":"comp/label.png","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ab351e","bold":true,"align":"center"}}]},{"type":"Box","props":{"y":450,"x":178,"var":"buts"},"child":[{"type":"Button","props":{"y":98,"x":290,"width":85,"var":"but0","name":"0","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/0.png"}}]},{"type":"Button","props":{"y":1,"x":0,"width":85,"var":"but1","name":"1","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/1.png"}}]},{"type":"Button","props":{"y":0,"x":97,"width":85,"var":"but2","name":"2","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/2.png"}}]},{"type":"Button","props":{"y":0,"x":195,"width":85,"var":"but3","name":"3","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/3.png"}}]},{"type":"Button","props":{"y":0,"x":290,"width":85,"var":"nut4","name":"4","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/4.png"}}]},{"type":"Button","props":{"y":0,"x":388,"width":85,"var":"but5","name":"5","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/5.png"}}]},{"type":"Button","props":{"y":1,"x":483,"width":85,"var":"but6","name":"6","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/6.png"}}]},{"type":"Button","props":{"y":98,"x":1,"width":85,"var":"but7","name":"7","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/7.png"}}]},{"type":"Button","props":{"y":98,"x":97,"width":85,"var":"but8","name":"8","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/8.png"}}]},{"type":"Button","props":{"y":98,"x":195,"width":85,"var":"but9","name":"9","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/9.png"}}]},{"type":"Button","props":{"y":99,"x":388,"width":179,"var":"delete","name":"delete","height":83},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"dialog/delete.png"}}]}]}]}],"animations":[{"nodes":[{"target":45,"keyframes":{"y":[{"value":1048,"tweenMethod":"backOut","tween":true,"target":45,"label":null,"key":"y","index":0},{"value":360,"tweenMethod":"linearNone","tween":true,"target":45,"label":null,"key":"y","index":15}],"alpha":[{"value":0,"tweenMethod":"backOut","tween":true,"target":45,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":45,"key":"alpha","index":15}]}},{"target":42,"keyframes":{"alpha":[{"value":0,"tweenMethod":"cubicOut","tween":true,"target":42,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":42,"key":"alpha","index":15}]}}],"name":"dialogIn","id":1,"frameRate":24,"action":0},{"nodes":[{"target":45,"keyframes":{"y":[{"value":360,"tweenMethod":"backIn","tween":true,"target":45,"label":null,"key":"y","index":0},{"value":1048,"tweenMethod":"backOut","tween":true,"target":45,"label":null,"key":"y","index":15}],"alpha":[{"value":1,"tweenMethod":"backIn","tween":true,"target":45,"label":null,"key":"alpha","index":0},{"value":0,"tweenMethod":"backOut","tween":true,"target":45,"label":null,"key":"alpha","index":15}]}},{"target":42,"keyframes":{"alpha":[{"value":0.8,"tweenMethod":"cubicIn","tween":true,"target":42,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":42,"key":"alpha","index":15}]}}],"name":"dialogOut","id":1,"frameRate":24,"action":0}]};
		return DialogPageUI;
	})(View);
var LoadingPageUI=(function(_super){
		function LoadingPageUI(){
			
		    this.clear=null;
		    this.title1=null;
		    this.machine=null;
		    this.mac1=null;
		    this.card=null;
		    this.mac2=null;
		    this.progress=null;

			LoadingPageUI.__super.call(this);
		}

		CLASS$(LoadingPageUI,'ui.test.LoadingPageUI',_super);
		var __proto__=LoadingPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(LoadingPageUI.uiView);

		}

		LoadingPageUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":309,"x":638,"var":"title1","skin":"loading/title.png"}},{"type":"Box","props":{"y":258,"x":321,"var":"machine"},"compId":48,"child":[{"type":"Image","props":{"y":13,"x":0,"var":"mac1","skin":"loading/jq1.png"}},{"type":"Box","props":{"y":154,"x":89,"width":66,"height":248,"anchorY":1,"anchorX":0.5},"child":[{"type":"Image","props":{"y":238,"x":31.5,"skin":"loading/card.png","renderType":"mask","height":238,"anchorY":1,"anchorX":0.5}},{"type":"Image","props":{"y":271,"x":31.5,"var":"card","skin":"loading/card.png","anchorY":1,"anchorX":0.5}}]},{"type":"Image","props":{"y":32,"x":16,"var":"mac2","skin":"loading/jq2.png"}}]},{"type":"Label","props":{"y":449,"x":400,"var":"progress","valign":"middle","pivotX":25.02685546875,"fontSize":30,"color":"#823509","anchorY":0.5,"align":"center"},"compId":50}],"animations":[{"nodes":[{"target":48,"keyframes":{"width":[{"value":158,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":0},{"value":169,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":-1},{"value":158,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":0},{"value":158,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":0},{"value":158,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":0},{"value":158,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":0},{"value":158,"tweenMethod":"linearNone","tween":true,"target":48,"key":"width","index":0}],"height":[{"value":402,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":0},{"value":166,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":-1},{"value":402,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":0},{"value":402,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":0},{"value":402,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":0},{"value":402,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":0},{"value":402,"tweenMethod":"linearNone","tween":true,"target":48,"key":"height","index":0}],"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":-1},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":48,"key":"alpha","index":5}]}},{"target":50,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":50,"key":"alpha","index":5}]}}],"name":"clear","id":1,"frameRate":24,"action":0}]};
		return LoadingPageUI;
	})(View);
var PartPageUI=(function(_super){
		function PartPageUI(){
			
		    this.panelIn=null;
		    this.Mask=null;
		    this.close=null;
		    this.left_arrow=null;
		    this.right_arrow=null;
		    this.panel=null;
		    this.buts=null;
		    this.but1=null;
		    this.but2=null;
		    this.but3=null;
		    this.but4=null;
		    this.but5=null;
		    this.but6=null;
		    this.but7=null;
		    this.but8=null;

			PartPageUI.__super.call(this);
		}

		CLASS$(PartPageUI,'ui.test.PartPageUI',_super);
		var __proto__=PartPageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(PartPageUI.uiView);

		}

		PartPageUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1280,"visible":false,"var":"Mask","skin":"sc6/mask.png","height":720,"alpha":0.8},"compId":27},{"type":"Button","props":{"y":415,"x":1147,"width":69,"var":"close","height":70},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"part/cancel.png","alpha":0.5}}]},{"type":"Button","props":{"y":558,"x":24,"width":35,"var":"left_arrow","height":48},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"part/right_arrow.png","alpha":0.5}}]},{"type":"Button","props":{"y":558,"x":1226,"width":35,"var":"right_arrow","height":48},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"part/left_arrow.png","alpha":0.5}}]},{"type":"Panel","props":{"y":582,"x":640,"width":1117,"var":"panel","height":162,"anchorY":0.5,"anchorX":0.5},"compId":55,"child":[{"type":"Box","props":{"var":"buts"},"child":[{"type":"Button","props":{"y":0,"x":0,"width":272,"var":"but1","name":"1","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1.png","name":"p1_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"visible":false,"skin":"part/p1_hide.png","name":"p1_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":281,"width":272,"var":"but2","name":"2","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p2.png","name":"p3_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p2_hide.png","name":"p3_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":562,"width":272,"var":"but3","name":"3","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p3.png","name":"p2_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p3_hide.png","name":"p2_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":844,"width":272,"var":"but4","name":"4","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1.png","name":"p4_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1_hide.png","name":"p4_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":1127,"width":272,"var":"but5","name":"1","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1.png","name":"p1_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1_hide.png","name":"p1_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":1408,"width":272,"var":"but6","name":"2","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p2.png","name":"p3_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p2_hide.png","name":"p3_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":1689,"width":272,"var":"but7","name":"3","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p3.png","name":"p2_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p3_hide.png","name":"p2_hide","height":161}}]},{"type":"Button","props":{"y":0,"x":1971,"width":272,"var":"but8","name":"4","height":161},"child":[{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1.png","name":"p4_show","height":161}},{"type":"Image","props":{"y":0,"x":0,"width":272,"skin":"part/p1_hide.png","name":"p4_hide","height":161}}]}]}]}],"animations":[{"nodes":[{"target":55,"keyframes":{"y":[{"value":804,"tweenMethod":"sineOut","tween":true,"target":55,"label":null,"key":"y","index":0},{"value":582,"tweenMethod":"linearNone","tween":true,"target":55,"label":null,"key":"y","index":12}]}},{"target":27,"keyframes":{"alpha":[{"value":0,"tweenMethod":"sineOut","tween":true,"target":27,"key":"alpha","index":0},{"value":0.8,"tweenMethod":"linearNone","tween":true,"target":27,"key":"alpha","index":12}]}}],"name":"panelIn","id":1,"frameRate":24,"action":0}]};
		return PartPageUI;
	})(View);
var SC1PageUI=(function(_super){
		function SC1PageUI(){
			
		    this.blackIn=null;
		    this.blackOut=null;
		    this.black=null;

			SC1PageUI.__super.call(this);
		}

		CLASS$(SC1PageUI,'ui.test.SC1PageUI',_super);
		var __proto__=SC1PageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SC1PageUI.uiView);

		}

		SC1PageUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1280,"var":"black","skin":"xh/black.png","height":720},"compId":3}],"animations":[{"nodes":[{"target":3,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"key":"alpha","index":10}]}}],"name":"blackIn","id":1,"frameRate":24,"action":0},{"nodes":[{"target":3,"keyframes":{"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":3,"label":null,"key":"alpha","index":10}]}}],"name":"blackOut","id":1,"frameRate":24,"action":0}]};
		return SC1PageUI;
	})(View);
var SC5PageUI=(function(_super){
		function SC5PageUI(){
			
		    this.blackIn=null;
		    this.ticketAni=null;
		    this.ticket=null;
		    this.start=null;
		    this.tabels=null;
		    this.labels=null;
		    this.title1=null;
		    this.title2=null;
		    this.success=null;
		    this.error=null;
		    this.poster=null;
		    this.buts=null;
		    this.but1=null;
		    this.but2=null;
		    this.delete=null;
		    this.but9=null;
		    this.but0=null;
		    this.but3=null;
		    this.but4=null;
		    this.but5=null;
		    this.but6=null;
		    this.but7=null;
		    this.but8=null;
		    this.go=null;

			SC5PageUI.__super.call(this);
		}

		CLASS$(SC5PageUI,'ui.test.SC5PageUI',_super);
		var __proto__=SC5PageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SC5PageUI.uiView);

		}

		SC5PageUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":52,"x":214,"width":866,"var":"ticket","height":388},"compId":3,"child":[{"type":"Image","props":{"skin":"sc5/shareBorder.png"}},{"type":"Image","props":{"y":240,"x":296,"skin":"sc5/starts.png"}},{"type":"Image","props":{"y":240,"x":298,"visible":false,"var":"start","skin":"sc5/start.png","name":"start"}},{"type":"Box","props":{"y":124,"x":207,"var":"tabels"},"child":[{"type":"Image","props":{"y":1,"skin":"sc5/empty1.png"}},{"type":"Image","props":{"x":123,"skin":"sc5/empty1.png"}},{"type":"Image","props":{"x":248,"skin":"sc5/empty1.png"}},{"type":"Image","props":{"x":370,"skin":"sc5/empty1.png"}}]},{"type":"Box","props":{"y":127,"x":207,"var":"labels"},"child":[{"type":"Label","props":{"width":94,"valign":"middle","styleSkin":"comp/label.png","name":"item0","height":91,"fontSize":60,"color":"#000000","align":"center"}},{"type":"Label","props":{"x":123,"width":94,"valign":"middle","styleSkin":"comp/label.png","name":"item1","height":91,"fontSize":60,"color":"#000000","align":"center"}},{"type":"Label","props":{"x":248,"width":94,"valign":"middle","styleSkin":"comp/label.png","name":"item2","height":91,"fontSize":60,"color":"#000000","align":"center"}},{"type":"Label","props":{"x":369,"width":94,"valign":"middle","styleSkin":"comp/label.png","name":"item3","height":91,"fontSize":60,"color":"#000000","align":"center"}}]},{"type":"Image","props":{"y":79,"x":269,"var":"title1","skin":"sc5/title1.png"}},{"type":"Image","props":{"y":75,"x":266,"visible":false,"var":"title2","skin":"sc5/title2.png"}},{"type":"Label","props":{"y":296,"x":386,"width":107,"visible":false,"var":"success","valign":"top","text":"回答正确","styleSkin":"comp/label.png","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ab351e","bold":true,"align":"center"}},{"type":"Label","props":{"y":295,"x":203,"width":477,"visible":false,"var":"error","valign":"top","text":"正确答案1921年,请随我们一起重回百年征程","styleSkin":"comp/label.png","height":32,"fontSize":24,"font":"Microsoft YaHei","color":"#ab351e","bold":true,"align":"center"}},{"type":"Image","props":{"y":39,"x":178,"visible":false,"var":"poster","skin":"sc5/fm.png"},"compId":29}]},{"type":"Box","props":{"y":495,"x":368,"var":"buts"},"compId":14,"child":[{"type":"Button","props":{"y":0,"x":0,"width":87,"var":"but1","name":"1","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/1.png"}}]},{"type":"Button","props":{"y":0,"x":94,"width":87,"var":"but2","name":"2","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/2.png"}}]},{"type":"Button","props":{"y":98,"x":386,"width":175,"var":"delete","name":"delete","height":81},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/delete.png"}}]},{"type":"Button","props":{"y":99,"x":193,"width":87,"var":"but9","name":"9","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/9.png","name":"9"}}]},{"type":"Button","props":{"y":98,"x":288,"width":87,"var":"but0","name":"0","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/0.png","name":"0"}}]},{"type":"Button","props":{"y":0,"x":193,"width":87,"var":"but3","name":"3","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/3.png","name":"3"}}]},{"type":"Button","props":{"y":0,"x":288,"width":87,"var":"but4","name":"4","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/4.png","name":"4"}}]},{"type":"Button","props":{"y":1,"x":386,"width":87,"var":"but5","name":"5","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/5.png","name":"5"}}]},{"type":"Button","props":{"y":1,"x":480,"width":87,"var":"but6","name":"6","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/6.png","name":"6"}}]},{"type":"Button","props":{"y":99,"x":2,"width":87,"var":"but7","name":"7","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/7.png","name":"7"}}]},{"type":"Button","props":{"y":100,"x":95,"width":87,"var":"but8","name":"8","height":87},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/8.png","name":"8"}}]}]},{"type":"Button","props":{"y":559,"x":562,"width":175,"visible":false,"var":"go","name":"go","height":82,"alpha":1},"compId":31,"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"sc5/go.png"}}]},{"type":"Image","props":{"y":0,"x":0,"width":1280,"skin":"xh/black.png","height":720,"alpha":1},"compId":51}],"animations":[{"nodes":[{"target":51,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":51,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":51,"key":"alpha","index":10}]}}],"name":"blackIn","id":1,"frameRate":24,"action":0},{"nodes":[{"target":3,"keyframes":{"y":[{"value":52,"tweenMethod":"sineInOut","tween":true,"target":3,"key":"y","index":0},{"value":120,"tweenMethod":"linearNone","tween":true,"target":3,"key":"y","index":20}]}},{"target":29,"keyframes":{"visible":[{"value":true,"tweenMethod":"linearNone","tween":false,"target":29,"key":"visible","index":0}],"alpha":[{"value":0,"tweenMethod":"sineInOut","tween":true,"target":29,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":29,"key":"alpha","index":20}]}},{"target":31,"keyframes":{"alpha":[{"value":0,"tweenMethod":"sineInOut","tween":true,"target":31,"key":"alpha","index":0},{"value":0,"tweenMethod":"sineInOut","tween":true,"target":31,"label":null,"key":"alpha","index":10},{"value":1,"tweenMethod":"linearNone","tween":true,"target":31,"key":"alpha","index":20}]}},{"target":14,"keyframes":{"alpha":[{"value":1,"tweenMethod":"sineInOut","tween":true,"target":14,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":14,"key":"alpha","index":10}]}}],"name":"ticketAni","id":3,"frameRate":24,"action":0}]};
		return SC5PageUI;
	})(View);
var SC6PageUI=(function(_super){
		function SC6PageUI(){
			
		    this.move=null;
		    this.ripple=null;
		    this.flag_in=null;
		    this.cloudAni=null;
		    this.blackIn=null;
		    this.flag_shake=null;
		    this.flag_static=null;
		    this.sc2Ani=null;
		    this.move_font=null;
		    this.view=null;
		    this.line1=null;
		    this.line2=null;
		    this.line3=null;
		    this.line5=null;
		    this.line6=null;
		    this.line7=null;
		    this.line8=null;
		    this.cloud2=null;
		    this.cloud1=null;
		    this.ripple=null;
		    this.item0=null;
		    this.item1=null;
		    this.item2=null;
		    this.boat2=null;
		    this.flag=null;
		    this.Pole=null;
		    this.forward=null;
		    this.suspend=null;
		    this.Mask=null;
		    this.black=null;
		    this.bigTitle=null;
		    this.smallTitle=null;

			SC6PageUI.__super.call(this);
		}

		CLASS$(SC6PageUI,'ui.test.SC6PageUI',_super);
		var __proto__=SC6PageUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SC6PageUI.uiView);

		}

		SC6PageUI.uiView={"type":"View","props":{"width":1280,"height":720},"child":[{"type":"Box","props":{"y":346,"var":"view","name":"view","anchorY":0.5},"compId":49,"child":[{"type":"Box","props":{},"child":[{"type":"Image","props":{"y":6,"x":1459,"width":1587,"skin":"sc6/img_ncqy.jpg","height":729}},{"type":"Image","props":{"y":123,"x":2527,"width":274,"skin":"sc6/img_renshou.png","rotation":-9.571428571428571,"pivotY":94,"pivotX":61,"height":101},"compId":11},{"type":"Image","props":{"x":1655,"skin":"sc6/img_renmen.png","alpha":1}},{"type":"Box","props":{"y":57,"x":3388,"width":694,"height":23,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"x":-2282,"var":"line1","skin":"sc6/img_line.png"},"compId":67},{"type":"Image","props":{"y":38,"x":-2282,"var":"line2","skin":"sc6/img_line.png"},"compId":69},{"type":"Image","props":{"y":106,"x":-2,"var":"line3","skin":"sc6/img_line.png"},"compId":70},{"type":"Image","props":{"y":240,"x":-1598,"var":"line5","skin":"sc6/img_line.png"},"compId":72},{"type":"Image","props":{"y":282,"x":-230,"var":"line6","skin":"sc6/img_line.png"},"compId":73},{"type":"Image","props":{"y":323,"x":-2,"var":"line7","skin":"sc6/img_line.png"},"compId":74},{"type":"Image","props":{"y":414,"x":-2168,"var":"line8","skin":"sc6/img_line.png"},"compId":75}]},{"type":"Image","props":{"y":182,"x":1277,"width":1881,"skin":"sc6/img_yunkuang2.png","height":433,"alpha":1}},{"type":"Image","props":{"y":2,"width":1457,"skin":"sc6/img_hchy.png","height":684}},{"type":"Image","props":{"y":1,"x":3046,"width":1329,"skin":"sc6/img_jgshs.png","height":746,"alpha":1}},{"type":"Image","props":{"y":53,"x":3604,"width":225,"skin":"sc6/img_jianggangshanren.png","height":437,"alpha":1}}]},{"type":"Box","props":{"y":12.47213595499958,"x":1149,"var":"cloud2"},"compId":64,"child":[{"type":"Image","props":{"y":2,"x":2910,"width":628,"skin":"sc6/img_yun1.png","height":587,"alpha":1}},{"type":"Image","props":{"x":1586,"width":628,"skin":"sc6/img_yun1.png","height":587,"alpha":1}},{"type":"Image","props":{"y":14,"width":628,"skin":"sc6/img_yun1.png","height":587,"alpha":1}}]},{"type":"Box","props":{"y":435.85942352531276,"x":0,"var":"cloud1"},"compId":38,"child":[{"type":"Image","props":{"y":6,"skin":"sc6/img_yun_01.png","alpha":1}},{"type":"Image","props":{"y":6,"x":701,"skin":"sc6/img_yun_02.png","alpha":1}},{"type":"Image","props":{"y":6,"x":1403,"skin":"sc6/img_yun_03.png","alpha":1}},{"type":"Image","props":{"y":3,"x":2103,"skin":"sc6/img_yun_01.png","alpha":1}},{"type":"Image","props":{"y":3,"x":2804,"skin":"sc6/img_yun_02.png","alpha":1}},{"type":"Image","props":{"y":3,"x":3506,"skin":"sc6/img_yun_03.png","alpha":1}},{"type":"Image","props":{"x":4206,"skin":"sc6/img_yun_01.png","alpha":1}}]},{"type":"Box","props":{"y":588},"child":[{"type":"Image","props":{"skin":"sc6/img_shui.png","name":"item0"}},{"type":"Image","props":{"x":1479,"skin":"sc6/img_shui.png","name":"item1"}},{"type":"Image","props":{"x":2958,"skin":"sc6/img_shui.png","name":"item2"}},{"type":"Image","props":{"y":39,"x":0,"skin":"sc6/img_shuiyan.png","alpha":0.3}},{"type":"Image","props":{"y":39,"x":1600,"skin":"sc6/img_shuiyan.png","alpha":0.3}},{"type":"Image","props":{"y":39,"x":3200,"skin":"sc6/img_shuiyan.png","alpha":0.3}}]}]},{"type":"Box","props":{"y":469,"x":599,"width":662,"height":174},"child":[{"type":"Box","props":{"y":138,"x":330,"width":660,"var":"ripple","height":36,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":23,"x":329,"width":658,"var":"item0","skin":"sc6/img_shuihua.png","height":35,"anchorY":0.5,"anchorX":0.5},"compId":43},{"type":"Image","props":{"y":23,"x":329,"width":658,"var":"item1","skin":"sc6/img_shuihua.png","height":35,"anchorY":0.5,"anchorX":0.5},"compId":51},{"type":"Image","props":{"y":23,"x":329,"width":658,"var":"item2","skin":"sc6/img_shuihua.png","height":35,"anchorY":0.5,"anchorX":0.5},"compId":52}]},{"type":"Image","props":{"y":143,"x":346,"width":468,"var":"boat2","skin":"sc6/img_chuan.png","scaleY":-1,"height":93,"anchorY":1,"anchorX":0.5,"alpha":0.3}},{"type":"Image","props":{"x":111,"width":468,"skin":"sc6/img_chuan.png","height":148}}]},{"type":"Box","props":{"y":346,"x":0,"width":4907,"height":748,"anchorY":0.5},"compId":121,"child":[{"type":"Image","props":{"y":522,"x":3431,"skin":"sc6/img_cz_qian.png"}},{"type":"Image","props":{"y":146,"x":1309,"skin":"sc6/img_ren.png"}}]},{"type":"Box","props":{"y":719.6755555555555,"x":171,"width":236,"var":"flag","pivotY":153,"pivotX":171,"height":155},"compId":6,"child":[{"type":"Image","props":{"y":179,"x":200,"width":233,"var":"Pole","skin":"sc6/flag.png","scaleX":1,"pivotY":179,"pivotX":200,"height":175}},{"type":"Image","props":{"y":52,"x":77,"var":"forward","skin":"sc6/goto.png"}},{"type":"Image","props":{"y":43,"x":81,"width":90,"visible":false,"var":"suspend","skin":"sc6/pause.png","height":78}}]},{"type":"Image","props":{"y":0,"x":0,"width":1280,"visible":false,"var":"Mask","skin":"sc6/mask.png","height":720,"alpha":0.8}},{"type":"Image","props":{"y":0,"x":0,"width":1280,"var":"black","skin":"xh/black.png","height":720},"compId":65},{"type":"Label","props":{"y":641,"x":640,"var":"bigTitle","text":"开天劈地大事变","strokeColor":"#ffffff","stroke":3,"fontSize":30,"color":"#000000","bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Label","props":{"y":683,"x":640,"var":"smallTitle","text":"1921年，中国共产党诞生。此时距你出生还有74年","fontSize":30,"font":"SimHei","color":"#ffffff","anchorY":0.5,"anchorX":0.5,"align":"center"}}],"animations":[{"nodes":[{"target":49,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":0},{"value":-580.3125,"tweenMethod":"linearNone","tween":true,"target":49,"label":"title2","key":"x","index":75},{"value":-1895.6875,"tweenMethod":"linearNone","tween":true,"target":49,"label":"tip","key":"x","index":245},{"value":-2170.9285714285716,"tweenMethod":"linearNone","tween":true,"target":49,"label":"title3","key":"x","index":280},{"value":-3095,"tweenMethod":"linearNone","tween":true,"target":49,"key":"x","index":400}]}}],"name":"move","id":1,"frameRate":24,"action":0},{"nodes":[{"target":43,"keyframes":{"width":[{"value":345,"tweenMethod":"linearNone","tween":true,"target":43,"key":"width","index":0},{"value":658,"tweenMethod":"linearNone","tween":true,"target":43,"label":null,"key":"width","index":30}],"height":[{"value":18,"tweenMethod":"linearNone","tween":true,"target":43,"key":"height","index":0},{"value":35,"tweenMethod":"linearNone","tween":true,"target":43,"label":null,"key":"height","index":30}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":0},{"value":1,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":15},{"value":0,"tweenMethod":"linearNone","tween":true,"target":43,"key":"alpha","index":30}]}},{"target":51,"keyframes":{"width":[{"value":345,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"width","index":0},{"value":345,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"width","index":15},{"value":658,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"width","index":45}],"height":[{"value":18,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"height","index":0},{"value":18,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"height","index":15},{"value":35,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"height","index":45}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"alpha","index":15},{"value":1,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"alpha","index":30},{"value":0,"tweenMethod":"linearNone","tween":true,"target":51,"label":null,"key":"alpha","index":45}]}},{"target":52,"keyframes":{"x":[{"value":329,"tweenMethod":"linearNone","tween":true,"target":52,"key":"x","index":0}],"width":[{"value":345,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"width","index":0},{"value":345,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"width","index":30},{"value":658,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"width","index":60}],"height":[{"value":18,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"height","index":0},{"value":18,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"height","index":30},{"value":35,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"height","index":60}],"alpha":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"alpha","index":30},{"value":1,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"alpha","index":45},{"value":0,"tweenMethod":"linearNone","tween":true,"target":52,"label":null,"key":"alpha","index":60}]}}],"name":"ripple","id":1,"frameRate":24,"action":0},{"nodes":[{"target":6,"keyframes":{"y":[{"value":871,"tweenMethod":"quadOut","tween":true,"target":6,"label":null,"key":"y","index":0},{"value":719,"tweenMethod":"linearNone","tween":true,"target":6,"label":null,"key":"y","index":20}],"rotation":[{"value":8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":20}]}}],"name":"flag_in","id":2,"frameRate":24,"action":0},{"nodes":[{"target":38,"keyframes":{"y":[{"value":435,"tweenMethod":"sineInOut","tween":true,"target":38,"key":"y","index":0},{"value":444,"tweenMethod":"linearNone","tween":true,"target":38,"key":"y","index":30},{"value":435,"tweenMethod":"linearNone","tween":true,"target":38,"label":null,"key":"y","index":60}],"var":[{"value":"cloud1","tweenMethod":"linearNone","tween":false,"target":38,"key":"var","index":0}]}},{"target":64,"keyframes":{"y":[{"value":14,"tweenMethod":"sineInOut","tween":true,"target":64,"key":"y","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":64,"key":"y","index":30},{"value":14,"tweenMethod":"linearNone","tween":true,"target":64,"label":null,"key":"y","index":60}],"var":[{"value":"cloud2","tweenMethod":"linearNone","tween":false,"target":64,"key":"var","index":0},{"value":"cloud2","tweenMethod":"linearNone","tween":false,"target":64,"label":null,"key":"var","index":60}]}}],"name":"cloudAni","id":3,"frameRate":24,"action":2},{"nodes":[{"target":65,"keyframes":{"alpha":[{"value":1,"tweenMethod":"linearNone","tween":true,"target":65,"key":"alpha","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":65,"key":"alpha","index":10}]}}],"name":"blackIn","id":4,"frameRate":24,"action":0},{"nodes":[{"target":6,"keyframes":{"rotation":[{"value":-8,"tweenMethod":"linearInOut","tween":true,"target":6,"label":null,"key":"rotation","index":0},{"value":8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":40},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":80}]}}],"name":"flag_shake","id":2,"frameRate":24,"action":0},{"nodes":[{"target":6,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":6,"key":"rotation","index":0}]}}],"name":"flag_static","id":2,"frameRate":24,"action":0},{"nodes":[{"target":11,"keyframes":{"rotation":[{"value":-25,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":0},{"value":-5,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"rotation","index":35},{"value":-25,"tweenMethod":"linearNone","tween":true,"target":11,"label":null,"key":"rotation","index":70}]}},{"target":67,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":67,"key":"x","index":0},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":67,"key":"x","index":20},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":67,"label":null,"key":"x","index":34},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":67,"label":null,"key":"x","index":35},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":67,"label":null,"key":"x","index":55}]}},{"target":69,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":69,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":69,"label":null,"key":"x","index":5},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":69,"label":null,"key":"x","index":25},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":69,"label":null,"key":"x","index":39},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":69,"label":null,"key":"x","index":40},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":69,"label":null,"key":"x","index":60}]}},{"target":70,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":70,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"x","index":30},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":70,"label":null,"key":"x","index":50}]}},{"target":72,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":72,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":72,"label":null,"key":"x","index":13},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":72,"label":null,"key":"x","index":33}]}},{"target":73,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":73,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":73,"label":null,"key":"x","index":25},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":73,"label":null,"key":"x","index":45}]}},{"target":74,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":74,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":74,"label":null,"key":"x","index":35},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":74,"label":null,"key":"x","index":55}]}},{"target":75,"keyframes":{"x":[{"value":-2,"tweenMethod":"linearNone","tween":true,"target":75,"key":"x","index":0},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":75,"label":null,"key":"x","index":8},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":75,"label":null,"key":"x","index":28},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":75,"label":null,"key":"x","index":49},{"value":-2,"tweenMethod":"linearNone","tween":true,"target":75,"label":null,"key":"x","index":50},{"value":-2282,"tweenMethod":"linearNone","tween":true,"target":75,"label":null,"key":"x","index":70}]}}],"name":"sc2Ani","id":1,"frameRate":24,"action":2},{"nodes":[{"target":121,"keyframes":{"x":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":121,"key":"x","index":0},{"value":-464.25,"tweenMethod":"linearNone","tween":true,"target":121,"label":"laba","key":"x","index":60},{"value":-619,"tweenMethod":"linearNone","tween":true,"target":121,"label":"biu","key":"x","index":80},{"value":-3095,"tweenMethod":"linearNone","tween":true,"target":121,"key":"x","index":400}]}}],"name":"move_font","id":1,"frameRate":24,"action":0}]};
		return SC6PageUI;
	})(View);