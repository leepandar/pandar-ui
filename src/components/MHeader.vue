<template>
    <div class="w-[100%] flex justify-between items-center">
        <div class="flex items-center ml-4 cursor-pointer" @click="logoClick()">
            <img class="w-[35px] h-[35px]" src="../assets/logo.png" />
            <span class="logo-text">Pandar</span>
        </div>
        <div class="flex items-center">
            <a-space>
                <!-- 租户切换 -->
                <template v-if="getCookie(CHANGE_TENANT_ALLOW)">
                    <a-select v-model="tenantId" placeholder="租户切换" class="min-w-[18em]" allow-clear @change="tenantChange">
                        <template v-for="(d, index) in dicts[proxy.DICT.tenantList]" :key="index">
                            <!-- 将系统租户隐藏，因为默认就是系统租户 -->
                            <a-option  :value="d.dictKey" :label="d.dictValue" v-if="d.dictKey !== 0" />
                        </template>
                    </a-select>
                </template>
                <!-- 全屏 -->
                <a-button shape="circle" size="small" @click="toggle">
                    <template #icon>
                        <icon-fullscreen-exit v-if="isFullscreen" />
                        <icon-fullscreen v-else />
                    </template>
                </a-button>
                <!-- 切换主题 -->
                <a-button shape="circle" size="small" @click="themeChange">
                    <template #icon>
                        <icon-sun-fill v-if="theme" />
                        <icon-moon-fill v-else />
                    </template>
                </a-button>
                <!-- 用户头像 下拉菜单 -->
                <div class="mr-3 cursor-pointer">
                    <a-dropdown @select="dropdownSelect">
                        <a-avatar :size="40" class="bg-blue-300">
                            <template v-if="sysStore.user?.userAvatar">
                                <img :src="sysStore.user.userAvatar" alt="头像" />
                            </template>
                            <template v-else>
                                <img src="../assets/default-avatar.jpg" alt="头像" />
                            </template>
                        </a-avatar>
                        <template #content>
                            <a-doption value="userSetting">
                                <template #icon>
                                    <icon-settings />
                                </template>
                                <template #default>用户设置</template>
                            </a-doption>
                            <a-divider class="mt-0 mb-0" />
                            <a-doption value="logout">
                                <template #icon>
                                    <icon-poweroff />
                                </template>
                                <template #default>退出系统</template>
                            </a-doption>
                        </template>
                    </a-dropdown>
                </div>
            </a-space>
        </div>
    </div>
</template>
<script setup>
import {ref, getCurrentInstance, onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import { logoutApi } from "~/api/user.js";
import { useSysStore } from '~/store/module/sys-store.js'
import { useCookies } from '@vueuse/integrations/useCookies'
import {CHANGE_TENANT_ALLOW, CHANGE_TENANT_ID, CHANGE_TENANT_ID_BASE64, getCookie} from "~/utils/cookie.js";
import {Modal} from "@arco-design/web-vue";
//cookie
const cookie = useCookies()
//路由
const router = useRouter()
//缓存
const sysStore = useSysStore()
//全局实例
const {proxy} = getCurrentInstance()
//加载字典
const dicts = proxy.LoadDicts([proxy.DICT.tenantList])

//主题2种模式，true白天，false黑夜
const theme = ref(true)
//切换主题
const themeChange = () => {
    theme.value = !theme.value
    if (theme.value) {
        // 恢复亮色主题
        document.body.removeAttribute('arco-theme');
    } else {
        // 设置为暗黑主题
        document.body.setAttribute('arco-theme', 'dark')
    }
}
//vue use isFullscreen: 是否全屏，toggle: 切换全屏
const { isFullscreen, toggle } = useFullscreen()
//退出系统loading
const logoutLoading = ref(false)
//下拉菜单
const dropdownSelect = (val) => {
    //用户设置
    if (val === 'userSetting') {
        //跳转到用户设置页
        router.push('/user/setting')
    }
    //退出系统
    if (val === 'logout') {
        Modal.confirm({
            title: '提示',
            content: '是否退出系统？',
            okLoading: logoutLoading.value,
            onBeforeOk: async () => {
                await logoutApi()
                //退出登录后续处理，清除登录信息
                sysStore.userLogoutHandler()
                //跳转到登录页
                await router.push('/login')
                return true
            }
        });
    }
}
//点击logo -> 跳转到首页
const logoClick = () => {
    router.push('/')
}
//超链接跳转
const skipLink = (url) => {
    window.open(url, '_blank')
}
//租户切换
const tenantId = ref()
//租户切换父组件函数
const emits = defineEmits(['tenantChange'])
const tenantChange = () => {
    if (!tenantId.value) {
        //清除cookie
        cookie.remove(CHANGE_TENANT_ID)
        cookie.remove(CHANGE_TENANT_ID_BASE64)
    } else {
        //设置cookie
        cookie.set(CHANGE_TENANT_ID, tenantId.value)
        //多存储一个base64数据，是因为Long类型cookie.get后会丢失精度，所以get时获取base64的数据后再解码拿到tenantId
        cookie.set(CHANGE_TENANT_ID_BASE64, btoa(tenantId.value))
    }
    //调用父组件租户切换处理
    emits('tenantChange')
}
onMounted(() => {
    //初始化时，如果cookie中有tenantId，则回显
    let tid = cookie.get(CHANGE_TENANT_ID_BASE64)
    if (tid) {
        tenantId.value = atob(tid)
    }
})
</script>
<style scoped>
.logo-text {
    font-size: 1.2rem;
    color: var(--color-text-1);
    margin-left: 0.5rem;
}
</style>
