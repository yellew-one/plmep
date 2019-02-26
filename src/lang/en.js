/**
 * Created by heganxin on 2019/2/15.
 */
export default {
  error: {
    username_not_exist: 'account is not exist',
    password_error: 'password error',
    required: 'is required'
  },
  table: {
    name: 'Name',
    theme: 'Theme',
    state: 'State',
    tasksType: 'Type',
    context: 'Context',
    role: 'Role',
    allocated: 'Already allocated',
    task_name: 'Task name',
    material_name: 'Material name',
    material_number: 'Material number',
    model_specification: 'Model specification',
    project_name: 'Project name',
    sission_deadline: 'Mission deadline'
  },
  fengyangRoute: {
    myTasks: 'Materials to be submitted',
    under_review: 'Under review',
    sealed_Sample: 'Sealed Sample',
    ypdq_task: 'Sample Maturity Task',
    fengyang_seacher: 'Search for Material Seal Samples',
    details: 'Sample details'
  },
  huanbaoRoute: {
    myTasks: 'My Tasks',
    third_report: 'Third party report due task',
    Material_submitted: 'Material to be submitted',
    Material_Search: 'Material Environmental Search',
    details: 'Detailed Information'
  },
  huanbaoTable: {
    third: {
      taskName: 'TaskName',
      theme: 'Theme',
      status: 'Status',
      task_deadlines: 'Task Deadlines'
    },
    submitted: {
      taskName: 'TaskName',
      material_number: 'Material Number',
      material_name: 'Material Name',
      model_specification: 'Model Specification',
      item_code: 'Item Code',
      fmd: 'FMD',
      msds: 'MSDS/Patent',
      rohs: 'RoHS',
      hf: 'HF',
      reach: 'REACH',
      others: 'Other',
      customer_Special_Needs: 'Customer Special Needs',
      environmental_attributes: 'Environmental Attributes'
    },
    search: {
      platform: 'Platform',
      applying_for: 'Applying For',
      bom_number: 'Bom Number',
      material_number: 'Material Number',
      escape_clause: 'Escape Clause',
      bom_classify: 'Bom Classify',
      status: 'Status',
      cas_no: 'CAS No.',
      search: 'Search',
      mail: 'E-mail',
      number: 'Number',
      name: 'Name',
      version: 'Version',
      material_name: 'Material Name',
      model_specification: 'Model Specification',
      supplier: 'Supplier',
      manufacturer: 'Manufacturer',
      time: 'Create Time',
      result: 'Material Environmental Search Results'
    },
    escapeClause: {
      title: 'Optional RoHS exemption clause',
      number: 'Number',
      category: 'Categories ',
      describe: 'Description ',
      range: 'Failure scope',
      result: 'Search results for exemption clauses'
    }
  },
  tagsView: {
    close: 'Close',
    closeother: 'Close Other',
    closeall: 'Close All'
  },
  m: {
    music: 'Music',
    login: 'Login',
    loginTitle: 'Environmental Protection',
    homepage: 'Home Page',
    Logout: 'Logout',
    back_home: 'Back to home page',
    editUserInfo: 'Editing  Person Information'
  },
  placeholder: {
    date: 'select date',
    username: 'account',
    password: 'password'
  },
  validate: {
    username: 'Please enter your login account',
    password: 'Please enter your login password'
  },
  editUserInfo: {
    Supplier: 'Supplier',
    User_name: 'User name',
    Password: ' Password',
    Verify_password: ' Verify password',
    Name: 'Name of interface person',
    Email: 'Interface person Email',
    Telephone: 'Interface Personal Office Telephone',
    Handset: 'Interface Personal handset',
    Manager_name: "Manager's name",
    Manager_email: "Manager's email",
    Manager_telephone: "Manager's telephone",
    Manager_handset: "Manager's handset"
  },
  taskName: {
    submitSample: 'submitSample'
  },
  state: {
    REWORK: 'REWORK',
    INWORK: 'INWORK',
    SAMPLE_EXPIRE: 'SAMPLE_EXPIRE'
  },
  formButton: {
    cancel: 'Cancel',
    submit: 'Submit'
  },
  fengyangTable: {
    detail: {
      version: 'Version',
      materialNumber: 'Material Number',
      materialName: 'Material Name',
      lq_classification: 'Material Type',
      lq_project: 'Application Project',
      lq_model_name: 'Specification Type',
      lq_request_cause: 'Application Reason',
      lq_manufacturer: 'Manufacturer',
      lq_supplier: 'Supplier',
      lq_supplier_number: 'Supplier Number',
      lq_environmental_protection_status: 'Environmental attributes',
      approveddate: 'Seal recognition time',
      lq_supplier_rank: 'Supplier Level',
      lq_class_category: 'Material category',
      lq_size: 'Dimensions (length * width * height unit: mm, tolerance *)',
      lq_monomers_weight: 'Net weight of monomer (g, tolerance (+3%)',
      lq_fiction_preston: 'Fiction maker',
      lq_fiction_time: 'Tentative date',
      lq_reviewer: 'Auditor',
      lq_review_time: 'Audit date',
      lq_approve: 'Approval',
      lq_approve_time: 'Approval date',
      lq_courier_number: 'Courier number',
      lq_courier_number_time: 'Express Delivery Date',
      lq_sender: 'Sender',
      lq_tel: 'Telephone',
      lq_deadline_sign: 'Deadline marking'}
  }
}
