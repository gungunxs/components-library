// components/TDS-card/TDS-card.ts
var app = getApp() as IAppOption
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    theme: {
      type: String,
      value: app.globalData.themeMode
    },
    // shadow
    ShadowType: {
      type: String,
      value: "" // default theme 空
    },
    // 是否显示封面图片 默认不显示
    showCoverImg: {
      type: Boolean,
      value: false
    },
    // 封面图片url 默认为gungunxs头像图片
    CoverImgUrl: {
      type: String,
      value: "http://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/56d8e1ce-微信图片_20211229141800.jpg"
    },
    // 是否展示一级标题区域
    showTitleList1: {
      type: Boolean,
      value: true
    },
    // 是否显示Text1
    showText1: {
      type: Boolean,
      value: true
    },
    // Text1颜色
    Text1Color: {
      type: String,
      value: "--Primary"
    },
    // 标题文字text1 该元素宽度固定 用于展示序号 最多三位数
    Text1: {
      type: String,
      value: "01"
    },
    // 是否显示Text2
    showText2: {
      type: Boolean,
      value: true
    },
    // 标题文字Text2
    Text2: {
      type: String,
      value: "棍棍先生棍棍先生"
    },
    // 是否展示二级标题区域
    showTitleList2: {
      type: Boolean,
      value: false
    },
    showTitle2Text1: {
      type: Boolean,
      value: false
    },
    // Text1颜色
    Title2Text1Color: {
      type: String,
      value: "--Primary"
    },
    // 标题文字text1 该元素宽度固定 用于展示序号 最多三位数
    Title2Text1: {
      type: String,
      value: "01"
    },
    // 标题文字text1 该元素宽度固定 用于展示序号 最多三位数
    Title2Text2: {
      type: String,
      value: "这是二级标题这是二级标题这是二级标题这是二级标题这是二级标题这是二级标题这是二级标题这是二级标题这是二级标题"
    },
    // 是否显示副标题 默认不显示
    showSubTitle: {
      type: Boolean,
      value: false
    },
    // 副标题问题 
    SubTitle: {
      type: String,
      value: "这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题"
    },
    // 是否显示副标题中的图片
    showSubImg: {
      type: Boolean,
      value: false
    },
    // 副标题中的图片url
    SubImgUrl: {
      type: String,
      value: "http://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/56d8e1ce-微信图片_20211229141800.jpg"
    },
    // 副标题2为无限制文本区域
    // 是否显示副标题2 默认不显示
    showSubTitle2: {
      type: Boolean,
      value: false
    },
    // 副标题2文本 
    SubTitle2: {
      type: String,
      value: "这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题"
    },
    // 是否显示副标题2中的图片
    showSubImg2: {
      type: Boolean,
      value: false
    },
    // 副标题2中的图片url
    SubImgUrl2: {
      type: String,
      value: "http://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/56d8e1ce-微信图片_20211229141800.jpg"
    },
    // 卡片边框颜色
    borderType: {
      type: String,
      value: ""
    },
    // 有限制标题Title2的Text2字体变化
    title1Text2Typography: {
      type: String,
      value: "Button-Label"
    },
    // 无限制的Title2的Text2字体变化
    title2Text2Typography: {
      type: String,
      value: "Button-Label"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    theme: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
    * 点击副标题区域触发 不会触发整体卡片的事件 使用时用catch:sub
    */
    tapSubTitle() {
      wx.reportEvent("tds_card_tap", {
        "card_text2": this.properties.Text2,
        "card_subtitle": this.properties.SubTitle
      })
      this.triggerEvent('sub')
    },
    /**
     * 点击整个卡片区域触发 不会触发单个按钮事件 使用时用bind:title
     */
    tapTitle() {
      wx.reportEvent("tds_card_tap", {
        "card_text2": this.properties.Text2,
        "card_subtitle": this.properties.SubTitle
      })
      this.triggerEvent('title')
    },

    /**
     * 获取元素信息（计算 Text2 最大宽度）
     */
    getDomCalculatedWidth() {
      const query = this.createSelectorQuery()
      query.selectAll('.compute-dom').boundingClientRect();
      query.exec((res)=> {
        let arr = res[0];
        // 算上间隙距离
        let textWidth = -20;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id == "all") {
            textWidth += arr[i].width;
          } else {
            textWidth -= arr[i].width;
          }
        }
        this.setData({
          textWidth
        })
      })
    }
  },
  // 启用插槽功能
  options: {
    multipleSlots: true
  },
  lifetimes: {
    attached() {
      this.setData({
        theme: app.globalData.themeMode
      })
    },

    ready() {
      this.getDomCalculatedWidth()
    }
  }
})