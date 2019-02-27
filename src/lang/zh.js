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
    details: '封样详细信息'
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
      status: '状态',
      task_deadlines: '任务最后期限'
    },
    submitted: {
      taskName: '任务名',
      material_number: '物料编号',
      material_name: '物料名称',
      model_specification: '型号规格',
      item_code: '项目代号',
      fmd: 'FMD',
      msds: 'MSDS/专利证明',
      rohs: 'RoHS',
      hf: 'HF',
      reach: 'REACH',
      others: '其他',
      customer_Special_Needs: '客户特殊需求',
      environmental_attributes: '环保属性'
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
      number: '编号',
      name: '名称',
      version: '版本',
      material_name: '物料名称',
      model_specification: '型号规格',
      supplier: '供应商',
      manufacturer: '生产厂家',
      time: '环保创建时时间',
      result: '物料环保搜索结果'
    },
    escapeClause: {
      title: '选择RoHS豁免条款',
      number: '豁免条款编号',
      category: '豁免条款类别',
      describe: '豁免条款描述',
      range: '失效范围',
      result: '豁免条款搜索结果'
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
    submitSample: '待提交物料封样'
  },
  state: {
    REWORK: '驳回',
    INWORK: '正在工作',
    SAMPLE_EXPIRE: '封样到期'
  },
  formButton: {
    cancel: '取消',
    submit: '提交',
    edit: '编辑'
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
      lq_desc: '说明'
    }
  }
}
