<template>
  <a-spin class="w-[100%]" :size="35" :loading="spinLoading" tip="正在处理, 请稍候...">
    <a-descriptions :column="2" bordered>
      <a-descriptions-item label="操作模块">{{ form.title }}</a-descriptions-item>
      <a-descriptions-item label="操作人员">{{ form.operUserId }}</a-descriptions-item>
      <a-descriptions-item label="业务类型">
        <dict-convert :dict-data="dicts[proxy.DICT.businessType]" :dict-key="form.businessType"/>
      </a-descriptions-item>
      <a-descriptions-item label="请求方法">{{ form.method }}</a-descriptions-item>
      <a-descriptions-item label="请求方式">{{ form.requestMethod }}</a-descriptions-item>
      <a-descriptions-item label="请求url">{{ form.operUrl }}</a-descriptions-item>
      <a-descriptions-item label="操作地址">{{ form.operIp }}</a-descriptions-item>
      <a-descriptions-item label="操作地点">{{ form.operLocation }}</a-descriptions-item>
      <a-descriptions-item label="请求参数">{{ form.operParam }}</a-descriptions-item>
      <a-descriptions-item label="返回参数">{{ form.jsonResult }}</a-descriptions-item>
    </a-descriptions>
  </a-spin>
</template>
<script setup>
import {ref, reactive, getCurrentInstance, watch} from 'vue'
import {getOperlogByOperIdApi} from '~/api/operlog.js'

//全局实例
const {proxy} = getCurrentInstance()
//加载字典
const dicts = proxy.LoadDicts([proxy.DICT.businessType])
//加载中...
const spinLoading = ref(false)
//接收父组件参数
const props = defineProps({
  params: {
    type: Object,
    default: () => {
    }
  }
})
//表单
const form = reactive({
  //操作日志ID
  operId: null,
  //操作模块
  title: null,
  //业务类型
  businessType: null,
  //请求方法
  method: null,
  //请求方式
  requestMethod: null,
  //操作人员
  operUserId: null,
  //请求url
  operUrl: null,
  //操作地址
  operIp: null,
  //操作地点
  operLocation: null,
  //请求参数
  operParam: null,
  //返回参数
  jsonResult: null
})
//加载操作日志详细信息
const loadOperLogInfo = (operId) => {
  spinLoading.value = true
  getOperlogByOperIdApi(operId).then(res => {
    //数据赋值
    if (res) {
      for (let key in res) {
        if (form.hasOwnProperty(key)) {
          form[key] = res[key]
        }
      }
    }
  }).finally(() => {
    spinLoading.value = false
  })
}
//监听参数变化
watch(() => props.params, (newVal, oldVal) => {
  //岗位ID
  if (props.params.operId) {
    //查询数据
    loadOperLogInfo(props.params.operId)
  }
}, {deep: true, immediate: true})
</script>
<style scoped></style>
