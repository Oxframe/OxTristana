<template>
    <div class="sider-tool">
        <img src="../../assets/avatar.png" alt="GcsSloop logo" class="header"/>
        <h1 class="title">Tristana</h1>
        <span class="subtitle">Just do IT later.</span>
        <hr class="divider"/>
        <p class="description">嗨，我是 Tristana，一名来自2.5次元的魔法师，Android自定义View系列文章作者，非著名程序员。</p>
        <hr class="divider bottom"/>
        <p class="description">欢迎来到我的魔法世界!</p>
        <Navigation :show-content="showContent"></Navigation>
    </div>
</template>

<script>
    import Navigation from "@/components/sider/Navigation";

    export default {
        name: "Content",
        components: {
            Navigation
        },

        props: {
            showContent: {
                type: Function
            },
        },
    }
</script>

<style scoped>
    .sider-tool .header {
        width: 90px;
        border-radius: 50%;
        border: 3px solid #FFF;
        box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.5);
    }

    .sider-tool .title {
        margin: 0 0 5px 0;
        font-size: 2.5em;
        letter-spacing: 4px;
        color: #FFF;
    }

    .sider-tool .subtitle {
        font-family: "ff-tisa-web-pro-1", "ff-tisa-web-pro-2", "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        font-size: 1.2em;
        font-weight: lighter;
        letter-spacing: 3px;
        color: #CCCCCC;
        -webkit-font-smoothing: antialiased;
    }

    .sider-tool .divider {
        width: 50%;
        margin: 20px auto;
        border-top: 1px solid rgba(255, 255, 255, 0.14);
    }

    .sider-tool .bottom {
        width: 15%;
    }

    .sider-tool .description {
        margin: 0 30px;
    }

</style>