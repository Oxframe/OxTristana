<template>
    <div class="navigation-wrapper">
        <nav class="cover-navigation cover-navigation--primary">
            <ul class="navigation">
                <li class="navigation__item">
                    <router-link :to="demo" @click.native="showContent">博客</router-link>
                </li>
                <li class="navigation__item">
                    <router-link :to="test">GitHub</router-link>
                </li>
                <li class="navigation__item">
                    <router-link :to="test" @click.native="showContent">目录</router-link>
                </li>
                <li class="navigation__item">
                    <router-link :to="test" @click.native="showContent">专栏</router-link>
                </li>
                <li class="navigation__item">
                    <router-link :to="test" @click.native="showContent">自定义控件</router-link>
                </li>
                <li class="navigation__item">
                    <router-link :to="test" @click.native="showContent">友链</router-link>
                </li>
            </ul>
        </nav>

        <nav class="cover-navigation navigation--social">
            <ul class="navigation">
                <!-- Weibo -->
                <li class="navigation__item">
                    <a href="http://weibo.com/GcsSloop" title="@GcsSloop 的微博" target="_blank">
                        <a-icon type="weibo-circle"/>
                        <span class="label">Weibo</span>
                    </a>
                </li>
                <!-- Github -->
                <li class="navigation__item">
                    <a href="https://github.com/GcsSloop" title="@GcsSloop 的 Github" target="_blank">
                        <a-icon type="github"/>
                        <span class="label">Github</span>
                    </a>
                </li>
                <!-- Twitter -->
                <li class="navigation__item">
                    <a href="http://twitter.com/GcsSloop" title="@GcsSloop" target="_blank">
                        <a-icon type="twitter"/>
                        <span class="label">Twitter</span>
                    </a>
                </li>
                <!-- Email -->
                <li class="navigation__item">
                    <a href="mailto:GcsSloop@gmail.com" title="WeChat">
                        <a-icon type="wechat"/>
                        <span class="label">WeChat</span>
                    </a>
                </li>
                <!-- Copyright -->
                <li class="navigation__item">
                    <a href="http://choosealicense.online" title="QQ" target="_blank">
                        <a-icon type="qq"/>
                        <span class="label">QQ</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navigation",
        props: {
            showContent: {
                type: Function
            },
        },
        data: function () {
            return {
                demo: "/demo",
                test: "/test"
            }
        }
    }
</script>

<style scoped>

    .cover-navigation {
        margin-top: 42px;
    }

    .navigation__item a {
        margin: 0 4px;
        padding: 10px 20px;
        border: 1px solid #DF9C81;
        border-radius: 20px;
        font-size: .9em;
        font-weight: bold;
        letter-spacing: 1px;
        text-shadow: none;
        color: #DF9C81;
        -webkit-font-smoothing: antialiased;
    }

    .navigation__item a:hover {
        color: #d06c44;
        border-color: #d06c44;
    }

    nav {
        display: inline-block;
        position: relative;
    }

    .navigation {
        display: inline-block;
        float: left;
        position: relative;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .navigation__item {
        display: inline-block;
        margin: 5px 1px 0 0;
        line-height: 1em;
    }

    .navigation__item a {
        display: block;
        position: relative;
        border-color: #FFF;
        color: #FFF;
        opacity: .8;
    }

    .navigation__item a:hover {
        color: #FFF;
        border-color: #FFF;
        opacity: 1;
    }

    .navigation--social a {
        border: 0px;
        padding: 6px 8px 6px 9px;
    }

    .navigation--social a .label {
        display: none;
    }

    .navigation--social a {
        display: block;
        font-size: 1.7em;
    }
</style>