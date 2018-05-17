<template>
    <el-container class="app-container">
        <el-aside style="width:220px" v-show="sidebar.opened">
            <SidebarWrapper></SidebarWrapper>
        </el-aside>
        <el-container>
            <el-header style="height:90px">
                <HeaderWrapper></HeaderWrapper>
            </el-header>
            <el-main>
                <ContentWrapper></ContentWrapper>
            </el-main>
            <el-footer style="height:30px">
                <FooterWrapper></FooterWrapper>
            </el-footer>
        </el-container>
    </el-container>
</template>

<script>
/**
 * 默认后台的整体布局-主体容器
 * 我们采用一行一列，直接在一列里放入布局容器
 */
import { mapGetters } from "vuex";
import SidebarWrapper from './sidebar/sidebar-wrapper'
import HeaderWrapper from './main/header/header-wrapper'
import ContentWrapper from './main/content/content-wrapper'
import FooterWrapper from './main/footer/footer-wrapper'
// import ResizeMixin from './mixin/resize'

export default {
    components: {
        SidebarWrapper,
        HeaderWrapper,
        ContentWrapper,
        FooterWrapper
    },
    computed: {
        ...mapGetters(["sidebar"])
    },
    // mixins: [ResizeMixin]
};
</script>

<style scoped>
.app-container {
    height: calc(100vh);
}
.el-header {
    background: #ffffff;
}
.el-main {
    background: #f4f4f4;
}
.el-footer {
    background: #014545;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color:#e7e7e7;
}
</style>
<style>
a {
    text-decoration: none;
}
</style>