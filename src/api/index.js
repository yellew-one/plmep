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
// 封样待提交任务
export function showSealedSampleTasks () {
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
      operation: 'showSealedSampleTasks',
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
export function selectRoHSExemption (e) {
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
      RoHSDescription: e.RoHSDescription
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
export function envpDataCheck (e) {
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
      envpNumber: e
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
export function completeEnvp (oid) {
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
      comment: '',
      routing: 'Supply'
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
