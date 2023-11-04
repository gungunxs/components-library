// components/DYWH-qacard/DYWH-qacard.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    // 时间
    Time: {
      type:String,
      value:"3分钟之前"
    },
     // 书本信息
     Book: {
      type:String,
      value:"《660》P23·45题"
    },
    // 内容
    Content: {
      type:String,
      value: "挑战也不可忽视。我们需要制定合适的政策和法规来引导人工智能的发展，确保其在同时尊重隐私权和安全性的前提下，造福人类社会。另外，随着人工智能在各个领域的广泛应用，一些人表达了对于人工智能可能取代人类工作岗位的担忧。另外，随着人工智能在各个领域的广泛应用，一些人表达了对于人工智能可能取代人类工作岗位的担忧。挑战也不可忽视。我们需要制定合适的政策和法规来引导人工智能的发展，确保其在同时尊重隐私权和安全性的前提下，造福人类社会。另外，随着人工智能在各个领域的广泛应用，一些人表达了对于人工智能可能取代人类工作岗位的担忧。另外，随着人工智能在各个领域的广泛应用，一些人表达了对于人工智能可能取代人类工作岗位的担忧。"
    },
    // 内容是否展示
    showContent: {
      type:Boolean,
      value:true
    },
    // 卡片类型
     Type: {
      type:String,
      value:"answer", // question:问题卡片
    },
    // photo的数据
    Photo:{
      type:String,
      value:""
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