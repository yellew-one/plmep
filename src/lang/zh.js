/**
 * Created by heganxin on 2019/2/15.
 */
export default {
  error: {
    username_not_exist: '账号不存在',
    password_error: '密码错误',
    required: '必填'
  },
  success: {
    update_success: '修改成功'
  },
  table: {
    name: '名称',
    theme: '主题',
    state: '状态',
    tasksType: '状况',
    context: '上下文',
    role: '角色',
    allocated: '已分配',
    task_name: '任务名',
    material_number: '物料编号',
    material_name: '物料名称',
    model_specification: '型号规格',
    project_name: '项目名',
    sission_deadline: '任务期限'
  },
  fengyangRoute: {
    myTasks: '待提交物料封样',
    under_review: '正在审阅',
    sealed_Sample: '已封样',
    ypdq_task: '样品到期任务',
    fengyang_seacher: '物料封样搜索',
    details: '封样详细信息',
    ypdqdetails: '样品到期详细信息'
  },
  huanbaoRoute: {
    myTasks: '我的任务',
    third_report: '第三方报告到期任务',
    Material_submitted: '待提交物料环保',
    Material_Search: '物料环保搜索',
    details: '任务详情'
  },
  huanbaoTable: {
    third: {
      taskName: '任务名',
      theme: '主题',
      state: '状态',
      specification: '任务最后期限'
    },
    submitted: {
      taskName: '任务名',
      materialNumber: '物料编号',
      materialName: '物料名称',
      specification: '型号规格',
      projectNumber: '项目代号',
      FMD: 'FMD',
      MSDS: 'MSDS/专利证明',
      RoHS: 'RoHS',
      HF: 'HF',
      REACH: 'REACH',
      OTHER: '其他',
      OTHER2: '客户特殊需求',
      envProtectionStatus: '环保属性',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    search: {
      platform: '平台',
      applying_for: '申请项目',
      bom_number: 'BOM料号',
      material_number: '物料编号',
      escape_clause: '豁免条款',
      bom_classify: 'BOM分类',
      status: '状态',
      cas_no: 'CAS No.',
      search: '查询',
      mail: '催邮',
      name: '名称',
      version: '版本',
      material_name: '物料名称',
      model_specification: '型号规格',
      supplier: '供应商',
      manufacturer: '生产厂家',
      time: '环保创建时时间',
      result: '物料环保搜索结果',
      eNumber: '环保编号',
      eName: '环保名称',
      eStatus: '环保状态',
      createDate: '创建时间'
    },
    searchStatus: {
      TEMP: '临时',
      INWORK: '正在工作',
      UNDERREVIEW: '正在审阅',
      RELEASED: '已发布',
      REWORK: '驳回',
      CANCELLED: '已取消',
      DISABLE: '废弃'
    },
    escapeClause: {
      title: '选择RoHS豁免条款',
      RoHSNumber: '豁免条款编号',
      RoHSType: '豁免条款类别',
      RoHSDescription: '豁免条款描述',
      range: '失效范围',
      result: '豁免条款搜索结果',
      ensure: '确定',
      cancel: '取消'
    },
    detailTable: {
      version: '版本',
      materialNumber: '物料编码',
      materialName: '物料名称',
      modelName: '型号规格',
      supplierNumber: '供应商',
      requestProject: '申请项目',
      manufacturer: '生产厂家',
      envProtectionStatus: '环保属性',
      requestCause: '申请原因',
      number: '编号',
      name: '名称',
      state: '状态',
      document: '环保文档',
      Supply: '供货',
      unSupply: '不供货',
      remark: '备注',
      complete: '完成任务',
      approval: '审批日志'
    },
    approval: {
      state: '状态',
      linkName: '环节名称',
      role: '角色',
      approvers: '审批人员',
      router: '路由',
      remark: '备注',
      approvaltime: '审批时间'
    },
    FMD: {
      itemType: '条目类型',
      materialNumber: '物料编号',
      reportNumber: '报告编号',
      reportType: '报告类型',
      reportDate: '报告日期',
      createDate: '创建时间',
      lastDate: '上次修改时间',
      detectionUnit: '检测单位',
      third: '可复用的第三方报告',
      attribute: '详细信息',
      edit: '编辑',
      delete: '删除',
      download: '下载FMD模板',
      upload: '上传FMD模板',
      reuse: '第三方报告复用',
      materialName: '原材料名称',
      materialWeight: '原材料重量',
      materialGroup: '原材料组',
      manufacturer: '原材料制造商',
      subMaterialName: '子物质名称',
      casNo: 'casNo',
      substanceWeight: '子物质重量',
      contentRate: '含有率',
      exemptions: '豁免条款',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    MSDS: {
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      ipForm: 'Ipform',
      msds: '原材料MSDS',
      patentCert: '专利证明',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    ROHS: {
      materialName: '原材料名称',
      materialGroup: '原材料组',
      manufacturer: '原材料制造商',
      pb: 'pb',
      cd: 'cd',
      hg: 'hg',
      cr6p: 'cr6p',
      pbbs: 'pbbs',
      pbdes: 'pbdes',
      dehp: 'dehp',
      bbp: 'bbp',
      dbp: 'dbp',
      dibp: 'dibp',
      exemptions: '豁免条款',
      reportName1: 'RoHS报告',
      examUnit: '检测单位',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      metalSum: '金属物资总和',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    HF: {
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      cl: 'cl',
      br: 'br',
      clBr: 'clBr',
      fileRetardant: '是否阻燃剂',
      reportCount: 'HF报告',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    REACH: {
      materialName: '原材料名称',
      manufacturer: '原材料制造商',
      reportMaterialContained: '是否有申报物资',
      reportMaterialReport: '申报物资报告',
      reportCount: 'REACH报告',
      reportDate: '报告日期',
      reportNumber: '报告编号',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    },
    OTHER2: {
      fileName: '文件名',
      fileType: '资料类型',
      modifyTimestamp: '上次修改时间',
      state: '状态',
      RELEASED: '已发布',
      REWORK: '驳回',
      UNDERREVIEW: '正在审阅',
      INWORK: '正在工作'
    }
  },
  tagsView: {
    close: '关闭',
    closeother: '关闭其他',
    closeall: '关闭所有'
  },
  m: {
    music: '音乐',
    login: '登录',
    loginTitle: '环保封样系统',
    homepage: '首页',
    Logout: '注销',
    back_home: '返回首页',
    editUserInfo: '编辑接口人信息',
    SealedInfoEdit: '编辑封样详细信息'
  },
  placeholder: {
    date: '选择日期',
    username: '账号',
    password: '密码'
  },
  validate: {
    username: '请输入账号',
    password: '请输入密码'
  },
  editUserInfo: {
    Supplier: '供应商',
    User_name: '用户名',
    Password: ' 密码',
    Verify_password: ' 确认密码',
    Name: '接口人姓名',
    Email: '接口人邮箱',
    Telephone: '接口人办公电话',
    Handset: '接口人手机',
    Manager_name: '管理者姓名',
    Manager_email: '管理者邮箱',
    Manager_telephone: '管理者办公电话',
    Manager_handset: '管理者手机'
  },
  taskName: {
    submitSample: '待提交物料封样',
    submitEnvironmentalInformation: '提交环保资料',
    changeExpirationReport: '更新到期报告',
    submitExpiredSample: '样品到期提醒'
  },
  state: {
    REWORK: '驳回',
    INWORK: '正在工作',
    SAMPLE_EXPIRE: '封样到期',
    UNDERREVIEW: '正在审阅',
    RELEASED: '发布'
  },
  formButton: {
    cancel: '取消',
    submit: '提交',
    edit: '编辑',
    edit_k: '编辑快递信息',
    Approval: '审批',
    delete: '删除',
    check: '查看',
    ensure: '确定'
  },
  fengyangTable: {
    detail: {
      version: '版本',
      materialNumber: '物料编号',
      materialName: '物料名称',
      lq_classification: '物料分类',
      lq_project: '申请项目',
      lq_model_name: '规格型号',
      lq_request_cause: '申请原因',
      lq_manufacturer: '生产厂家',
      lq_supplier: '供应商',
      lq_supplier_number: '供应商编码',
      lq_environmental_protection_status: '环保属性',
      approveddate: '封样承认时间',
      lq_supplier_rank: '供应商等级',
      lq_class_category: '物料类别',
      lq_size: '尺寸(长*宽*高 单位：mm，公差±)',
      lq_monomers_weight: '单体净重(单位：g，公差±3%)',
      lq_fiction_preston: '拟制者',
      lq_fiction_time: '拟制日期',
      lq_reviewer: '审核者',
      lq_review_time: '审核日期',
      lq_approve: '批准',
      lq_approve_time: '批准日期',
      lq_courier_number: '快递单号',
      lq_courier_number_time: '快递发出日期',
      lq_sender: '发件人',
      lq_tel: '电话',
      lq_deadline_sign: '最后期限标识',
      title_attribute: '属性',
      title_Sealed_document: '封样文档',
      lq_desc: '说明',
      Supply: '供货',
      unSupply: '不供货'
    },
    seacher: {
      number: '编号',
      seacher_info: '查看信息',
      name: '名称',
      Specification_type: '规格型号',
      stauts: '状态',
      create_time: '创建时间',
      Material_category: '物料规格型号',
      Seal_recognition_time: '封样承认时间',
      doc_number: '文档编号',
      doc_name: '文档名称',
      type3: '三级分类',
      seach_result: '搜索结果',
      title: {
        Material_seacher: '物料封样搜索',
        add_doc: '添加文档'
      }
    }
  },
  app_enum: {
    lqClassCategory: {
      MATERIALCATEGOR1: '标准结构件',
      MATERIALCATEGORY2: '结构壳料',
      MATERIALCATEGORY3: '结构辅料',
      MATERIALCATEGORY4: '一般结构料',
      MATERIALCATEGORY5: '天线',
      MATERIALCATEGORY6: '组件',
      MATERIALCATEGORY7: '电声器件',
      MATERIALCATEGORY8: '机电料',
      MATERIALCATEGORY9: '包材料（除配件外）',
      MATERIALCATEGORY10: '包材料（配件）',
      MATERIALCATEGORY11: '安规器件',
      MATERIALCATEGORY12: 'PCB',
      MATERIALCATEGORY13: '售后辅料'
    },
    lq_supplier_rank: {
      FORONE: '一供',
      FORTWO: '二供',
      FORCUSTOMERS: '客供'
    },
    lqThirdLevel: {
      'PFMEA_Seq': 'PFMEA',
      'HF_ID_Seq': '其他限用物质成分调查表',
      'CP_Seq': 'CP',
      'CLCFB_ID_Seq': '材料成分表',
      'RZZS_ID_Seq': '3C认证证书',
      'YPBGLLB_ID_Seq': '样品变更覆历表',
      'FM_ID_Seq': '封面',
      'PLSCLLBG_ID_Seq': '批量生产良率报告',
      'WLBOMO_ID_Seq': '物料BOM清单',
      'GXTJ_ID_Seq': '成型条件',
      'ZJLCT_ID_Seq': '制造流程图',
      'QCCCLBG_ID_Seq': 'FAI全尺寸报告',
      'BZFS_ID_Seq': '包装方式',
      'AGBG_ID_Seq': '安规报告',
      'GCTZ_ID_Seq': '工程图面',
      'CPKBG_ID_Seq': 'CPK报告',
      'ROHS_ID_Seq': 'RoHS限用物质成份调查表',
      'KKXCSBG_ID_Seq': '可靠性测试报告',
      'QCGCT_ID_Seq': 'QC工程图',
      'YPTP_ID_Seq': '样品图片',
      'SPEC_ID_Seq': '规格书',
      'MSA_Seq': 'MSA',
      'DQJXXNCSBG_ID_Seq': '电气/机械性能测试报告/出货检验报告',
      'YPCQTP_ID_Seq': '样品拆解图片'
    }
  },
  TableTile: {
    files: {
      number: '编号',
      version: '版本',
      name: '名称',
      status: '状态',
      type3: '三级分类',
      approval: '审批',
      attachment: '封样文档附件'
    }
  }
}
