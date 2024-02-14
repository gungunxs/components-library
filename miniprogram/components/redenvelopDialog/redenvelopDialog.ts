// components/redenvelopDialog/redenvelopDialog.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 红包的状态
    isSuccess: {
      type: String,
      value: "existence"
      // existence存在，inexistence不存在，repeat重复
    },
    // 标题
    title: {
      type: String,
      value: "恭喜你触发惊喜红包获得"
    },
    // 副标题文本
    subtitleText: {
      type: String,
      value: "枚徽章"
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
      value: "探索小程序更多功能，发现惊喜红包～"
    },
    // 是否显示
    showRedenvelop: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    redenvelopCoverUrl: "https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/72c207c1-redenvelopCover.svg",
    redBadgeUrl: "https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/ab996085-badge_red.svg",
    blingUrl: "https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/6822ad67-bling.svg",
    animationName: "elastic",
    badgeAnimationName: "upInDown",
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 用于防止像父组件冒泡事件
    catch() {
    },
    // 用于防止页面滑动
    true() {

    },
    // 点击蒙版不可关闭
    tapMask() {

    },
    // 根据isSuccess改变
    changeRedEnvelopState() {
      let isSuccess = this.properties.isSuccess
      let title = this.properties.title
      let subtitleText = this.properties.subtitleText
      let buttonLabel = this.properties.buttonLabel
      if (isSuccess == 'existence') {
        title = '恭喜你触发惊喜红包获得'
        subtitleText = '枚徽章'
        buttonLabel = '立即领取'
      } else if (isSuccess == 'inexistence') {
        title = '来晚一步，红包被抢光了'
        subtitleText = '下次再来吧～'
        buttonLabel = '我知道了o(╥﹏╥)o'
      } else {
        title = '你已经领取过啦~\n感谢参与！'
        subtitleText = '更多惊喜敬请期待~'
        buttonLabel = '我知道了'
      }
      this.setData({
        title,
        subtitleText,
        buttonLabel
      })
    },
    // 点击按钮关闭弹窗
    close() {
      this.setData({
        showRedenvelop: false,
      })
      if (this.properties.isSuccess == 'existence') {
        // 抛出自定义事件
        this.triggerEvent("custom")
      }
    }
  },
  // 监听数据的变化
  observers: {
    // 监听isSuccess的变化
    'isSuccess': function () {
      this.changeRedEnvelopState()
    }
  },
  // 启用插槽功能
  options: {
    multipleSlots: true
  },
})
