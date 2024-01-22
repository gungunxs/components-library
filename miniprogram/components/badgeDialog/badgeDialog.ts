// components/badgeDialog/badgeDialog.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 是否领取成功
    isSuccess: {
      type: Boolean,
      value: true,
    },
    // 标题文字
    title: {
      type: String,
      value: "领取成功",
    },
    // 徽章个数
    badgesNum: {
      type: Number,
      value: 2,
    },
    // 副标题文字
    subtitleText: {
      type: String,
      value: "徽章已被领完了\n下次再来吧~"
    },
    // 描述文字
    description: {
      type: String,
      value: "前往“南李鹿徽章”即可查看您的徽章",
    },
    // button文本
    buttonLabel: {
      type: String,
      value: "我知道了(*^▽^*)"
    },
    // 是否显示
    showBadgeDialog: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    backgroundBadgeUrl:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/346976cc-badge_green.svg",
    happyIconUrl:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/bd314356-party.svg",
    sadIconUrl:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/de00862d-tears.svg",
    animationName:"elastic3d"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 防止屏幕滑动
    catch(){

    },
    // 防止父组件冒泡事件
    true(){

    },
    // 关闭弹窗
    close(){
      this.setData({
        showBadgeDialog:false
      })
    },
    // 点击蒙版不可关闭
    tapMask(){

    }
  },
  // 启用插槽功能
  options: {
    multipleSlots:true
  },
})
