var app = getApp() as IAppOption

Component({
  /**
   * 组件的属性列表
   */
  properties: {
		// rockIcon
		rockIcon:{
			type:String,
			value:"http://introduce.mcdd.top/fmin-min-26e962eb-yay_face_gray.svg"
		},
		// rock开关
		rockSwitch:{
			type:Boolean,
			value:false
		},
		// rock标题
		rockTitle:{
			type:String,
			value:"为他Rock"
		},
		// rock是否显示记录部分
		showRecord:{
			type:Boolean,
			value: true
		},
		// rock记录条数
		recordNum:{
			type:Number,
			value: 0
		},
		// rock记录姓名列表
		rockUser:{
			type:String,
			value:"xxx"
		},
		// rock记录姓名列表是否需要行数限制
		rockUserLimit:{
			type: Boolean,
			value: false
		},
		// rock记录姓名列表限制行数
		rockUserLimitNum:{
			type: Number,
			value: 3
		},
		theme:{
      type:String,
      value:app.globalData.themeMode
		},
  },

  /**
   * 组件的初始数据
   */
  data: {
    theme:""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  lifetimes:{
    attached() {
      this.setData({
        theme:app.globalData.themeMode
      })
    },
  }
})
