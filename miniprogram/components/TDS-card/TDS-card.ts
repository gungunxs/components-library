// components/TDS-card/TDS-card.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 是否显示封面图片 默认不显示
    showCoverImg:{
      type:Boolean,
      value:false
    },
    // 封面图片url 默认为gungunxs头像图片
    CoverImgUrl:{
      type:String,
      value:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/56d8e1ce-微信图片_20211229141800.jpg"
    },
    // 是否显示Text2
    showText1:{
      type:Boolean,
      value:true
    },
    // 标题文字text1 该元素宽度固定 用于展示序号 最多三位数
    Text1:{
      type:String,
      value:"01"
    },
    // 是否显示Text2
    showText2:{
      type:Boolean,
      value:true
    },
    // 标题文字Text2
    Text2:{
      type:String,
      value:"棍棍先生棍棍先生棍棍"
    },
    // 是否显示副标题 默认不显示
    showSubTitle:{
      type:Boolean,
      value:false
    },
    // 副标题问题 
    SubTitle:{
      type:String,
      value:"这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题这是副标题"
    },
    // 是否显示副标题中的图片
    showImg:{
      type:Boolean,
      value:false
    },
    // 副标题中的图片url
    ImgUrl:{
      type:String,
      value:"https://fmin.oss-cn-hangzhou.aliyuncs.com/fmin-ad/56d8e1ce-微信图片_20211229141800.jpg"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  // 启用插槽功能
  options: {
    multipleSlots:true
  }
})