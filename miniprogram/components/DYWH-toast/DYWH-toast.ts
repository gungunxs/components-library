// components/DYWH-toast/DYWH-toast.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 提示文字
    Message: {
      type:String,
      value:""
    },
    // 主题文字
    Caption: {
      type:String,
      value:""
    },
    // 显示Icon
    Icon: {
      type:Boolean,
      value:true
    },
    // 显示Caption
    showCaption: {
      type:Boolean,
      value:false
    },
    // 
    Iconpath: {
      type:String,
      value:"loading"
    },
    //显示蒙版
    showMask: {
      type:Boolean,
      value:false
    },
    // 背景颜色
    bgColor:{
      type:String,
      value:"--Foreground-White"
    },
    // 字体颜色
    messageColor:{
      type:String,
      value:"--Foreground-High"
    },
    // 提示文字字体颜色
    captionColor:{
      type:String,
      value:"--Foreground-Medium"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    animationName:"fadeInGrow",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * mask禁止用户触摸操作
     */
    true() {

    },
    /**
     * 关闭弹窗
     */
    hiddenToast: function () {
      var that = this;
      this.setData({
        animationName:"fadeOutShrink"
      })
      setTimeout(() => {
        that.setData({
          showToast: false
        })
      }, 0.2 * 1000)
    },
    /**
     * 打开弹窗
     */
    showToast: function (message:string, caption:string,image:string) {
      if (message) {
        if(caption) {
          this.setData({
            showCaption:true
          })
        }
        this.setData({
          Message: message,
          Caption:caption,
          Iconpath: image,
          animationName:"fadeInGrow",
          showToast: true
        })
      } else {
        console.log("title is must not bu null!")
      }
    },
    /**
     * 打开弹窗（自动关闭，第三个参数为自动关闭的时间，单位为s,最后一个为回调函数）
     */
    showToastAuto: function (message:string, caption:string, image:string,duration:number, seccess:Function) {
      if (message) {
        var that = this;
        if(caption) {
          this.setData({
            showCaption:true
          })
        }
        if (!duration) {
          duration = 2;
        }
        this.setData({
          Message: message,
          Caption:caption,
          Iconpath: image,
          animationName:"fadeInGrow",
          showToast: true
        }, function () {
          setTimeout(() => {
            that.hiddenToast();
            if(seccess != undefined && seccess != null){
              seccess();
            }
          }, duration * 1000)
        })
      } else {
        console.log("title is must not bu null!")
      }
    }
  },
  }
)