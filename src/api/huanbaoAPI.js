/**
 * Created by heganxin on 2019/2/15.
 */
import request from '@/utils/request'
import Qs from 'qs'
import store from '../stores'
// 查看到期任务
export function expiredSealedSampleTasks () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'expiredSealedSampleTasks',
      username: store.getters.userInfo.username
    }
  })
}
// 正在审阅信息接口
export function getReviewedSealDoc () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/SealSample_Review.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getReviewedSealDoc',
      username: store.getters.userInfo.username
    }
  })
}
// 获取用户信息
export function userInfo () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'userInfo',
      username: store.getters.userInfo.username
    }
  })
}
// 获取环保待提交任务
export function showEnvProtectionTasks () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showEnvProtectionTasks',
      username: store.getters.userInfo.username
    }
  })
}
// 第三方到期任务
export function expiredEnvProtectionTasks () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'expiredEnvProtectionTasks',
      username: store.getters.userInfo.username
    }
  })
}
// 环保搜索
export function searchEnvprotection (e, counts) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchEnvprotection.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchEnvprotection',
      username: store.getters.userInfo.username,
      searchDateFrom: e.searchDateFrom,
      searchDateTo: e.searchDateTo,
      materialCode: e.materialCode,
      materialName: e.materialName,
      exemptionForm: e.exemptionForm,
      status: e.status,
      casno: e.casno,
      nowPage: counts.nowPage,
      pageSize: counts.pageCount
    }
  })
}
// 封样搜索
export function searchSealedSample (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchSealedSample.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchSealedSample',
      username: store.getters.userInfo.username,
      searchDateFrom: e.serchItems.searchDateFrom,
      searchDateTo: e.serchItems.searchDateTo,
      partNumber: e.serchItems.partNumber,
      partName: e.serchItems.partName,
      LQ_CLASS_CATEGORY: e.serchItems.LQ_CLASS_CATEGORY,
      status: e.serchItems.status,
      nowPage: e.counts.nowPage,
      pageSize: e.counts.pageSize
    }
  })
}
// 环保任务详细
export function showEnvprotectionTask (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showEnvprotectionTask',
      oid: e
    }
  })
}
export function updateUser (userInfo) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/common.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'updateUser',
      username: store.getters.userInfo.username,
      userJson: JSON.stringify(userInfo)
    }
  })
}
// 获取封样详细信息
export function showTaskDetails (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showTaskDetails',
      username: store.getters.userInfo.username,
      oid: oid
    }
  })
}
// 编辑封样任务详细信息接口
export function editSealedSampleDocInfo (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editSealedSampleDocInfo',
      username: store.getters.userInfo.username,
      oid: oid
    }
  })
}
// 物料类别下拉框调用
export function lqClassCategory () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'lq_class_category',
      internalName: 'lq_class_category'
    }
  })
}
// 供应商等级下拉框调用
export function lqSupplierRank () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'lq_supplier_rank',
      internalName: 'lq_supplier_rank'
    }
  })
}
// 编辑封样详细信息后保存接口
export function editSealedDocInfo (data, oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editSealedSampleDocInfo',
      jsonData: JSON.stringify(data),
      oid: oid
    }
  })
}
// getEnvpState 获取物料环保搜索页面查询条件中物料环保状态下拉框的值
export function getEnvpState () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchEnvprotection.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getEnvpState'
    }
  })
}
// selectRoHSExemption 获取RoHS豁免条款
export function selectRoHSExemption (e, counts) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchEnvprotection.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectRoHSExemption',
      RoHSNumber: e.RoHSNumber,
      RoHSType: e.RoHSType,
      startDate: e.startDate,
      endDate: e.endDate,
      RoHSDescription: e.RoHSDescription,
      nowPage: counts.nowPage,
      pageSize: counts.pageCount
    }
  })
}
// selectFMD  展示环保条目  FMD条目
export function selectFMD (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectFMD',
      oid: e
    }
  })
}
// 展示环保条目  MSDS条目
export function selectMSDS (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectMSDS',
      oid: e
    }
  })
}
// 展示环保条目  RoHS条目
export function selectRoHS (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectRoHS',
      oid: e
    }
  })
}
// 展示环保条目   HF条目
export function selectHF (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectHF',
      oid: e
    }
  })
}
// HF条目详细信息展示   HF条目
export function getHFTable (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvprotectionHF.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getHFTable',
      itemOid: e
    }
  })
}
// 展示环保条目   REACH条目
export function selectREACH (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectREACH',
      oid: e
    }
  })
}
// 展示环保条目    客户特殊需求申报条目
export function selectOTHER (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectOTHER',
      oid: e
    }
  })
}
// 展示环保条目    客户特殊需求申报条目
export function selectOTHER2 (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvironmental.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'selectOTHER2',
      oid: e
    }
  })
}

// 封样文档三级分类下了框调用
export function lqThirdLevel () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'lq_third_level',
      internalName: 'lq_third_level'
    }
  })
}
// 搜索封样文档接口
export function searchSealedDocs (number, name, thirdLevel) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchSealedDocs',
      username: store.getters.userInfo.username,
      number: number,
      name: name,
      lq_third_level: thirdLevel
    }
  })
}
// addDoc  勾选物料封养文档，点击“确定“将物料封样和物料封样文档关联
export function addDoc (oid, oids) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'addDoc',
      username: store.getters.userInfo.username,
      oid: oid,
      oids: oids
    }
  })
}
// getReuseReports： 第三方报告复用数据查询
export function searchReuseReport (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/reuseReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'searchReuseReport',
      selectedDocumentType: e.selectedDocumentType,
      selectedMaterial: e.selectedMaterial,
      envpNumber: e.envpNumber
    }
  })
}
// envpDataCheck：物料环保资料完整性校验
export function checkData (e, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/reuseReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'checkData',
      envpNumber: e,
      locale: locale
    }
  })
}
// getMaterialName：用于原材料名称下拉框
export function getMaterialName (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/reuseReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getMaterial',
      envpNumber: e
    }
  })
}
// reuseReportsExecute：第三方报告复用页面提交事件处理。
export function reuseReportsExecute (reports, attachs, e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/reuseReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'execute',
      reports: reports,
      attachs: attachs,
      envpNumber: e
    }
  })
}
// processHistory：封样和环保任务审批日志
export function processHistory (type, e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/processHistory.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'processHistory',
      type: type,
      number: e
    }
  })
}
// envpComments:物料环保审批意见
export function envpComments (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/processHistory.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'comments',
      envpNum: e
    }
  })
}
// MSDS条目详细信息接口
export function getMSDSInfo (type, e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvprotectionMSDS.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getMSDSTable',
      attachmentType: type,
      msdsOid: e
    }
  })
}

// 封样信息信息页面加载完成后展示关联的物料封样文档接口
export function showRelatedWLFYDocs (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'showRelatedWLFYDocs',
      oid: oid
    }
  })
}

// 封样信息信息页面移除相关物料封样文档
export function removeRelatedWLFYDocs (oid, oids) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'removeRelatedWLFYDocs',
      oid: oid,
      oids: oids
    }
  })
}

// 编辑MSDS条目上传文件
export function editMSDSTable (type, envprotectionDocumentOid, path, oid, attachmentOid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvprotectionMSDS.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editMSDSTable',
      attachmentType: type,
      envprotectionDocumentOid: envprotectionDocumentOid,
      filePath: path,
      msdsOid: oid,
      attachmentOid: attachmentOid
    }
  })
}
// completeEnvp 环保任务完成
export function completeEnvp (oid, comment, routing) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/processHistory.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'completeEnvp',
      oid: oid,
      comment: comment,
      routing: routing
    }
  })
}

// 获取物料状态枚举值
export function getSealedSampleStatus () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchSealedSample.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getSealedSampleStatus',
      username: store.getters.userInfo.username
    }
  })
}

// 获取物料类别枚举值
export function getLqClassCateGory () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/searchSealedSample.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'get_LQ_CLASS_CATEGORY',
      username: store.getters.userInfo.username
    }
  })
}

// 编辑物料封样文档接口
export function editWLFYDoc (number, filePath, lqThirdLevel, description) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editWLFYDoc',
      username: store.getters.userInfo.username,
      number: number,
      filePath: filePath,
      lq_third_level: lqThirdLevel,
      description: description
    }
  })
}

// 提交封样资料任务完成接口
export function completeSealedTask (oid, comment, route) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'completeSealedTask',
      username: store.getters.userInfo.username,
      oid: oid,
      comment: comment,
      route: route
    }
  })
}

// 创建物料封样文档接口
export function createWLFYDoc (oid, lqThirdLevel, description, ftpFilePath) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'createWLFYDoc',
      username: store.getters.userInfo.username,
      oid: oid,
      lqThirdLevel: lqThirdLevel,
      description: description,
      ftpFilePath: ftpFilePath
    }
  })
}

// 编辑物料封样文档时点击“移除”按钮移除原有的附件
export function removeAttachment (number, fileName) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'removeAttachment',
      username: store.getters.userInfo.username,
      number: number,
      fileName: fileName
    }
  })
}

// RoHS条目详细信息及编辑
export function viewRohs (rohsItemOid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/rohsItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'viewRohs',
      rohsItemOid: rohsItemOid
    }
  })
}

// RoHS条目编辑确认
export function execute (oid, temp, removeOid, addOid, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/rohsItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'execute',
      oid: oid,
      pb: temp.pb,
      cd: temp.cd,
      hg: temp.hg,
      cr6p: temp.cr6p,
      pbbs: temp.pbbs,
      pbdes: temp.pbdes,
      dehp: temp.dehp,
      bbp: temp.bbp,
      dbp: temp.dbp,
      dibp: temp.dibp,
      exemption: temp.exemptions,
      remark: temp.remark,
      removeOid: removeOid,
      addOid: addOid,
      locale: locale
    }
  })
}

// 查看编辑环保总报告
export function envpFinalReport (oid, docType) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'envpFinalReport',
      oid: oid,
      docType: docType
    }
  })
}
// // 附件链接接口
export function attachmentLink (number, fileName) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskDetails.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'attachmentLink',
      number: number,
      fileName: fileName
    }
  })
}

// 上传环保fmd数据
export function executeUploadFMDData (oid, uploadPath, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/uploadEnvpData.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeUploadFMDData',
      oid: oid,
      uploadPath: uploadPath,
      locale: locale
    }
  })
}
// 上传环保ROHS数据
export function executeUploadItemData (oid, uploadPath, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/uploadEnvpData.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeUploadItemData',
      oid: oid,
      uploadPath: uploadPath,
      locale: locale
    }
  })
}
// FMD原材料条目编辑
export function editMaterial (e, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editMaterial',
      oid: e.fmdOid,
      materialGroup: e.materialGroup,
      manufacturer: e.manufacturer,
      locale: locale
    }
  })
}
// FMD子物质编辑
export function editSubstance (e, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editSubstance',
      oid: e.fmdOid,
      casNumber: e.casNo,
      substanceWeight: e.substanceWeight,
      exemptionNameInput: e.exemptions,
      substanceName: e.subMaterialName,
      locale: locale
    }
  })
}
// FMD条目删除
export function deleteFmdItem (e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'deleteFmdItem',
      oid: e.fmdOid
    }
  })
}
// 新增环保报告
export function addReport (oid, data, isFinal, type, filePath, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'addReport',
      reportType: data.reportType,
      reportDate: data.reportDate,
      reportNum: data.reportNumber,
      examUnit: data.examUnit,
      isFinal: isFinal,
      oid: oid,
      documentType: type,
      filePath: filePath,
      locale: locale
    }
  })
}
// 环保检测单位
export function examUnit () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'examUnit'
    }
  })
}
// 编辑环保报告
export function editReport (data, isFinal, filePath, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editReport',
      reportOid: data.reportOid,
      reportType: data.reportType,
      reportDate: data.reportDate,
      reportNum: data.reportNumber,
      examUnit: data.examUnit,
      isFinal: isFinal,
      filePath: filePath,
      locale: locale
    }
  })
}
// 总报告编辑完成按钮处理
export function saveFinalReport (docType, isFinal, oid, removeOid, addOid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'saveFinalReport',
      docType: docType,
      isFinal: isFinal,
      oid: oid,
      removeOid: removeOid,
      addOid: addOid

    }
  })
}
// 环保其他文件展示
export function attachmentInfo (type, oid, documentType) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpAttachmentOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'attachmentInfo',
      attachmentType: type,
      oid: oid,
      documentType: documentType

    }
  })
}
/**
 * @param oid 物料环保对象oid
 * @param addDel 添加总声明文件路径，以“;"分隔
 * @param removeDel 删除总声明文件路径，以“;"分隔，若删除的不是临时声明则使用声明oid
 */
export function executeFinalDel (oid, addDel, removeDel) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpAttachmentOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeFinalDel',
      oid: oid,
      documentType: 'REACH',
      addDel: addDel,
      removeDel: removeDel
    }
  })
}
/**
 * HF条目编辑完成处理
 * @param oid
 * @param e
 * @param removeOid
 * @param addOid
 */
export function executeEditHFItem (oid, e, removeOid, addOid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeEditHFItem',
      oid: oid,
      cl: e.cl,
      br: e.br,
      isFireRetardant: e.fileRetardant,
      remark: e.remake,
      removeOid: removeOid,
      addOid: addOid
    }
  })
}
/**
 * 环保分报告展示数据接口
 * @param oid
 * @param itemReport 环保条目oid
 */
export function itemReport (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'itemReport',
      oid: oid
    }
  })
}
/**
 * REACH条目编辑完成处理
 * @param oid reach条目oid
 * @param addFile 添加的申报物质报告路径
 * @param removeFile 删除的oid
 * @param addReport 添加的分报告oid
 * @param removeReport 删除的分报告oid
 */
export function executeEditReachItem (oid, addFile, removeFile, addReport, removeReport) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeEditReachItem',
      oid: oid,
      addFile: addFile,
      removeFile: removeFile,
      addReport: addReport,
      removeReport: removeReport
    }
  })
}
/**
 * 编辑客户特殊需求申报条目
 * @param oid 对象oid
 * @param filePath 06为联想，07为索尼
 * @param attachmentType
 * @param attachmentOid
 */
export function editOther2 (oid, filePath, attachmentType, attachmentOid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/taskEnvprotectionOther2.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'editOther2',
      envprotectionDocumentOid: oid,
      filePath: filePath,
      attachmentType: attachmentType,
      attachmentOid: attachmentOid
    }
  })
}
/**
 * 过期任务信息展示
 * @param oid
 */
export function getExpiringReportInfo (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/thirdReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getExpiringReportInfo',
      oid: oid
    }
  })
}
/**
 * 其他物质含量展示
 * @param oid 物料环保其他条目oid
 */
export function itemMaterialInfo (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'itemMaterialInfo',
      oid: oid
    }
  })
}
/**
 * OTHER条目编辑完成处理
 * @param oid
 * @param e
 * @param removeOid 删除报告oid
 * @param addOid 添加报告oid
 * @param removeMaterialOid 删除自定义管控物质oid
 * @param addMaterialOid 添加自定义管控物质
 */
export function executeEditOtherItem (oid, e, removeOid, addOid, removeMaterialOid, addMaterialOid, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeEditOtherItem',
      oid: oid,
      ni: e.ni,
      pahs: e.pahs,
      didp: e.didp,
      dinp: e.dinp,
      dnhp: e.dnhp,
      sccp: e.sccp,
      be: e.be,
      sb: e.sb,
      remark: e.remark,
      removeOid: removeOid,
      addOid: addOid,
      removeMaterialOid: removeMaterialOid,
      addMaterialOid: addMaterialOid,
      locale: locale
    }
  })
}
/**
 * 环保报告类型信息接口
 * @param oid 环保条目oid
 */
export function reportType (oid, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/envpReportOperation.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'reportType',
      oid: oid,
      locale: locale
    }
  })
}
/**
 * 到期第三方报告审批日志
 * @param oid
 */
export function getReportProcessingStatus (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/thirdReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'getReportProcessingStatus',
      oid: oid
    }
  })
}
/**
 * 到期报告编辑
 * @param oid
 * @param e
 */
export function executeReportImediately (oid, e) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/thirdReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeReportImediately',
      oid: oid,
      reportType: e.reportType,
      reportDate: e.reportDate,
      reportNumber: e.reportNumber,
      examUnit: e.examUnit,
      filePath: e.filePath
    }
  })
}
/**
 * 到期第三方报告任务完成
 * @param oid
 * @param comment 备注
 * @param routing 路由
 */
export function completeReportTask (oid, comment, routing) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/thirdReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'completeReportTask',
      oid: oid,
      comment: comment,
      routing: routing
    }
  })
}
/**
 * 环保文件下载
 * @param oid
 */
export function downloadAttach (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'downloadAttach',
      oid: oid
    }
  })
}
/**
 * 环保模板文件下载
 * @param type 下载模板类型，四种类型分别对应FMD模板，导入模板，IP Form模板，申报物质报告模板 FMD/ROHS/IPFORM/REACHREPORT
 *
 */
export function downloadEnvpTemplate (type) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'downloadEnvpTemplate',
      type: type
    }
  })
}
/**
 * MSDS条目编辑完成
 * @param addMsds 添加的MSDS文件路径
 * @param removeMsds 移除的MSDS，临时文件用路径，正式文件用oid
 * @param addPatent 添加的专利证明路径
 * @param removePatent 移除的转移证明，临时文件用路径，正式文件用oid
 * @param addIpform 添加的Ipform文件路径
 * @param removeIpform 移除的Ipform,临时文件用路径，正式文件用oid
 * @param oid MSDS条目oid
 */
export function executeEditMSDSItem (addMsds, removeMsds, addPatent, removePatent, addIpform, removeIpform, oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeEditMSDSItem',
      addMsds: addMsds,
      removeMsds: removeMsds,
      addPatent: addPatent,
      removePatent: removePatent,
      addIpform: addIpform,
      removeIpform: removeIpform,
      oid: oid
    }
  })
}
/**
 * 客户特殊需求条目编辑完成
 * @param addSony 添加的sony文件路径
 * @param removeSony 移除的sony文件，临时文件用路径，正式文件用oid
 * @param addLenove 添加的联想临时文件路径
 * @param removeLenove 移除的联想临时文件，临时文件用路径，正式文件用oid
 * @param oid 环保对象oid
 */
export function executeEditOther2Item (addSony, removeSony, addLenove, removeLenove, oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/fmdItem.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'executeEditOther2Item',
      addSony: addSony,
      removeSony: removeSony,
      addLenove: addLenove,
      removeLenove: removeLenove,
      oid: oid
    }
  })
}
/**
 * 环保条目编辑过滤
 * @param oid 物料环保oid
 */
export function itemEditAble (oid) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/processHistory.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'itemEditAble',
      oid: oid
    }
  })
}
/**
 * 待提交物料环保完成任务时物料属性更新校验(ps:此接口调用在完整性校验后）
 * @param oid 物料环保oid
 */
export function checkMaterialAttr (oid, locale) {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/processHistory.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'checkMaterialAttr',
      oid: oid,
      locale: locale
    }
  })
}
/**
 * 条目类型
 * @param oid
 * @param locale
 */
export function docType () {
  return request({
    url: '/Windchill/netmarkets/jsp/ext/longcheer/common/reuseReport.jsp',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function (data) {
      data = Qs.stringify(data)
      return data
    }],
    data: {
      operation: 'docType'
    }
  })
}
