<script setup lang="ts">
    import { RouterView } from 'vue-router';
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
</script>

<template>
    <Header></Header>

    <RouterView />

    <Footer></Footer>
</template>

<style lang="scss">
    .term_link {
        width: calc(calc(100% - 40px) / 2);
        background: rgba(255, 255, 255, 0.19);
        border: 1px solid #DCDCDC;
        border-radius: 8px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding-left: 25px;
        height: 37px;
        position: relative;

        span {
            color: rgba(0, 0, 0, 0.48);
        }

        .arrow {
            background: #0075FF;
            box-shadow: 0px 4px 17px 6px rgba(0, 0, 0, 0.05);
            border-radius: 7px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 0;
            width: 45px;
            height: 100%;
        }

        &:nth-child(even) {
            margin-left: 40px;
        }
        &:not(:last-child):not(:nth-last-child(2)) {
            margin-bottom: 30px;
        }
    }

    .inform_line {
        display: flex;
        justify-content: space-between;
        align-self: stretch;
        align-items: center;
        color: #000000;
        & + .inform_line {
            margin-top: 14px;
        }

        h3 {
            font-weight: 500;
            font-size: 15px;
            line-height: 1.3;
        }

        .content {
            background: #FFFFFF;
            border: 1px solid #DCDCDC;
            border-radius: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 255px;
            span {
                font-weight: 300;
                font-size: 15px;
                line-height: 18px;
            }
        }
    }
</style>
