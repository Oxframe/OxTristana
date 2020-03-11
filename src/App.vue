<template>
    <a-layout style="height: 100%;width: 100%">
        <a-layout-sider v-model="collapsed" :trigger="null" width="100%" :collapsedWidth="collapsedWidth+'px'" style="height: 100%;transition: all 1s;">
            <div class="sider-board" :style="'width:' + collapsedWidth + 'px'">
                <div class="sider-box">
                    <div class="sider-content">
                        <SiderContent :show-content="showContent"></SiderContent>
                    </div>
                    <div class="sider-cover sider-mask"></div>
                </div>
            </div>
        </a-layout-sider>
        <a-layout-content style="height: 100%;background: #FDFDFD">
            <router-view>
                内容
            </router-view>
        </a-layout-content>
    </a-layout>
</template>

<script>

    import SiderContent from "@/components/sider/Content";

    export default {
        name: 'App',
        components: {
            SiderContent
        },
        data: function () {
            return {
                collapsed: false,
                collapsedWidth: 0,
                demo: "/demo",
                test: "/test"
            }
        },
        created: function () {
            this.collapsedWidth = document.documentElement.clientWidth;
        },
        method: function () {
            console.log("-----")
        },
        methods: {
            showContent: function () {
                console.log("-------");
                if (!this.collapsed) {
                    this.collapsed = !this.collapsed;
                    this.collapsedWidth = 560
                }
            },
            showDemo: function () {
                console.log("------")
            }
        }
    }
</script>

<style>
    @import "css/main.css";

</style>
