// components/fmin-topbar/fmin-topbar.ts
/**
 * 注意:使用topbar组件时,需要将topbar标签包裹住页面所有元素(背景请不要包括进来,否则会自动被占元素挤下去).
 * xxx.json 需要设置    "navigationStyle": "custom",
 * 如:
 *    <view class="bg"></view>
 *    <topbar title="主标签" immersion="{{true}}" Threshold="0.2">
 *      <view> <!-- page页面 -->
 *          xxxxxxxxxxx
 *      </view>
 *    </topbar>
 * 若要设置非沉浸时，topbar的颜色，可以这样设置，其中bgColor为rgb，格式为r,g,b
 *  如:
 *    <view class="bg"></view>
 *    <topbar title="主标签" bgColor='255,255,255'></topbar>
 *      <view> <!-- page页面 -->
 *          xxxxxxxxxxx
 *      </view>
 *    
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,  //属性类型
      value: ''  // 默认值
    },
    immersion:{ // 是否为沉浸式
      type:Boolean,
      value:false
    },
    Threshold:{ // 自动取消沉浸的阈值
      type:Number,
      value:0.3
    },
    speed:{ // 自动取消沉浸的速度
      type:Number,
      value:1
    },
    bgColor:{ // 非沉浸时的颜色
      type:String,
      value:'255,255,255'
    },
    customReturn:{
      type:Boolean,
      value:false
    },
    titleColor:{ // 标题颜色
      type:String,
      value:"--Foreground-Black" // 默认为黑色，采用全部变量颜色
    },
    BackIcon:{ // 返回icon
      type:String,
      value:"/static/svg/direction/back.svg"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    BackIcon:"/static/svg/direction/back.svg",
    rgba:"0",
    screenHeight:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 返回事件
     */
    returnPage() {
      if(this.data.customReturn) {
        this.triggerEvent("return") // 触发自定义事件
      } else {
        wx.navigateBack()
      }
    },
    /**
     * 滑动监听事件
     */
    scroll(e:any){
      var heighTop = e.detail.scrollTop;
      var rgba = this.data.rgba;
      var screenHeight = this.data.screenHeight;
      var myShow =  (parseInt(heighTop)/parseInt(screenHeight as unknown as string));
      // console.log(myShow)
      if(myShow > this.data.Threshold){
        rgba = myShow * (2 * this.data.speed) as unknown as string;
      }else{
        rgba = "0";
      }
      if(parseFloat(rgba) >1){rgba = "1"}
      this.setData({
        rgba : rgba
      })
    },
    /**
     * 自动获得当前手机信息(高度等)
     */
    getTarHeighgt() {
      // 获取胶囊的信息
      const menuButton = wx.getMenuButtonBoundingClientRect()
      const menuButtonHeight = menuButton.height;
      const menuButtonWidth = menuButton.width;
      const menuButtonTop = menuButton.top;
      // 获取设备的信息  
      let systemInfo = wx.getSystemInfoSync()
      // 获得屏幕高度
      let screenHeight = systemInfo['screenHeight'];
      // 获取信号区高度
      let statusBarHeight = systemInfo['statusBarHeight']
      // 设置胶囊行的高度
      const capsuleBoxHeight = menuButtonHeight + (menuButtonTop - statusBarHeight)*2;
      /* 
      根据我的测验，实际的信号区高度在真机上表现与于实际的不服，所以我们这里还需要根据不同的设备进行调整
      开发工具 = 获取的高度
      安卓真机 = 获取的高度 + 1
      苹果真机 = 获取的高度 - 1
      我本人这里也只测试了iPhonex 华为和小米手机，
      如果有出入根据实际情况进行调整就行了
      */
      if (systemInfo.model === 'andorid') {
        statusBarHeight = statusBarHeight + 1
      } else if (systemInfo.platform === 'ios') {
        statusBarHeight = statusBarHeight - 2
      } else {
        statusBarHeight = statusBarHeight
      }
      this.setData({
        capsuleBoxHeight,
        statusBarHeight,
        screenHeight,
        menuButtonWidth
      })

    },
  },
  pageLifetimes: {
    /**
     * 生命周期函数
     */
    show(){
      this.getTarHeighgt();
    }
  }
})