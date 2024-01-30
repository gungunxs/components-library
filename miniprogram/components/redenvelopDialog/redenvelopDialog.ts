// components/redenvelopDialog/redenvelopDialog.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否还有红包
    isSuccess: {
      type: Boolean,
      value: true
    },
    // 标题
    title: {
      type: String,
      value: "恭喜你触发惊喜红包获得"
    },
    // 副标题文本
    subtitleText: {
      type: String,
      value: "下次再来吧～"
    },
    // 副标题徽章个数
    badgesNum: {
      type: Number,
      value: 2
    },
    // button颜色
    bgColor: {
      type: String,
      value: "--Foreground-Tertiary"
    },
    // button文本
    buttonLabel: {
      type: String,
      value: "立即领取"
    },
    // button文本颜色
    labelColor: {
      type: String,
      value: "--Foreground-High"
    },
    // 描述文字
    description: {
      type: String,
      value: "探索小程序更多功能，发现惊喜红包～发现惊"
    },
    // 是否显示
    showRedenvelop:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    redenvelopCoverUrl:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/72c207c1-redenvelopCover.svg",
    redBadgeUrl:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/ab996085-badge_red.svg",
    blingUrl:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/6822ad67-bling.svg",
    animationName: "elastic",
    badgeAnimationName: "upInDown",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 用于防止像父组件冒泡事件
    catch(){
    },
    // 用于防止页面滑动
    true(){

    },
    // 点击蒙版不可关闭
    tapMask(){

    },
    // 点击按钮关闭弹窗
    close(){
      this.setData({
        showRedenvelop:false,
      })
      if(this.properties.isSuccess) {
        // 抛出自定义事件
        this.triggerEvent("custom")
      }
    }
  },
  // 监听是否显示
  observers: {
    
  },
  // 启用插槽功能
  options: {
    multipleSlots:true
  },
})
