/**
 * Created by heganxin on 2019/2/15.
 */
export default {
  error: {
    username_not_exist: 'account is not exist',
    password_error: 'password error',
    required: 'is required'
  },
  success: {
    update_success: 'update info success'
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
      state: 'Status',
      specification: 'Task Deadlines'
    },
    submitted: {
      taskName: 'TaskName',
      materialNumber: 'Material Number',
      materialName: 'Material Name',
      specification: 'Model Specification',
      projectNumber: 'Item Code',
      FMD: 'FMD',
      MSDS: 'MSDS/Patent',
      RoHS: 'RoHS',
      HF: 'HF',
      REACH: 'REACH',
      OTHER: 'Other',
      OTHER2: 'Customer Special Needs',
      envProtectionStatus: 'Environmental Attributes'
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
      name: 'Name',
      version: 'Version',
      material_name: 'Material Name',
      model_specification: 'Model Specification',
      supplier: 'Supplier',
      manufacturer: 'Manufacturer',
      time: 'Create Time',
      result: 'Material Environmental Search Results',
      eNumber: 'Environmental number',
      eName: 'Environmental Name',
      eStatus: 'Environmental state',
      createDate: 'CreateDate'
    },
    escapeClause: {
      title: 'Optional RoHS exemption clause',
      number: 'Number',
      category: 'Categories ',
      describe: 'Description ',
      range: 'Failure scope',
      result: 'Search results for exemption clauses',
      ensure: 'Ensure',
      cancel: 'Cancel'
    },
    detailTable: {
      materialNumber: 'Material Number',
      materialName: 'Material Name',
      modelName: 'Specification',
      envProtectionStatus: 'EnvProtection Type',
      supplierNumber: 'Supplier',
      requestProject: 'Project',
      manufacturer: 'Manufacturer',
      requestCause: 'Reason',
      version: 'Version',
      number: 'Number',
      name: 'Name',
      state: 'State'
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
    editUserInfo: 'Editing  Person Information',
    SealedInfoEdit: 'Sealed Info Edit'
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
    submitSample: 'submitSample',
    submitEnvironmentalInformation: 'Submit Information',
    changeExpirationReport: 'Update Report'
  },
  state: {
    REWORK: 'REWORK',
    INWORK: 'INWORK',
    SAMPLE_EXPIRE: 'SAMPLE_EXPIRE'
  },
  formButton: {
    cancel: 'Cancel',
    submit: 'Submit',
    edit: 'Edit'
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
      lq_monomers_weight: 'This Net weight of monomer ( g, tolerance (+3%) )',
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
      lq_deadline_sign: 'Deadline marking',
      title_attribute: 'Attribute',
      title_Sealed_document: 'Sealed document',
      lq_desc: 'Explain',
      Supply: 'Supply',
      unSupply: 'No Supply'
    }
  },
  app_enum: {
    lqClassCategory: {
      MATERIALCATEGOR1: 'Standard structural material',
      MATERIALCATEGORY2: 'Shell structure',
      MATERIALCATEGORY3: 'Auxiliary material',
      MATERIALCATEGORY4: 'General structural material',
      MATERIALCATEGORY5: 'Antenna',
      MATERIALCATEGORY6: 'Component',
      MATERIALCATEGORY7: 'electroacoustic device',
      MATERIALCATEGORY8: 'Electromechanical material',
      MATERIALCATEGORY9: 'Wrapping material(except for accessories)',
      MATERIALCATEGORY10: 'Wrapping material(accessories)',
      MATERIALCATEGORY11: 'Safety device',
      MATERIALCATEGORY12: 'PCB',
      MATERIALCATEGORY13: 'After-sale excipients'
    },
    lq_supplier_rank: {
      FORONE: 'One supply',
      FORTWO: 'Tow supply',
      FORCUSTOMERS: 'Customer supply'
    }
  },
  TableTile: {
    files: {
      number: 'number',
      version: 'version',
      name: 'name',
      status: 'status',
      type3: 'Three level classification',
      approval: 'approval',
      attachment: 'Sample enclosure document attachment'
    }
  }
}
