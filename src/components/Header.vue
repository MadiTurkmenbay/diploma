<template>
    <header class="container">
        <div class="logo">
            <img class="logo_img" src="/images/logo.png" alt="logo">
            <p>Campus 1.0</p>
        </div>

        <lang-switcher v-if="!isAuth"></lang-switcher>

        <nav-bar v-else></nav-bar>
    </header>

    <section class="block1">
        <div class="container">
            <div class="blue">
                Хабарламалар
            </div>
            <p>Назар аударыңыз! Аттестациядағы бағалар жаңартылды немесе қосылды.</p>
        </div>
    </section>
</template>

<script>
import LangSwitcher from './LangSwitcher.vue';
import NavBar from './NavBar.vue';
import { mapState } from 'vuex'

export default {
    components: {
        LangSwitcher,
        NavBar,
    },
    computed: {
		...mapState(['isAuth']),
        requiresAuth() {
            return this.$route.meta?.requiresAuth;
        }
    }
}
</script>

<style lang="scss" scoped>
    .block1 {
        padding-top: 95px;
        padding-bottom: 58px;

        .container {
            background: rgba(0, 0, 0, 0.03);
            border-radius: 14px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        .blue {
            background: #0075FF;
            border: 1px solid #DCDCDC;
            border-radius: 14px;
            margin-right: 27px;
            padding: 16px 40px;

            font-weight: 500;
            font-size: 16px;
            color: #FFFFFF;
        }

        p {
            font-style: normal;
            font-weight: 300;
            font-size: 16px;
            color: #000000;
        }
    }
    .logo_img {
        width: 95px;
        height: 95px;
        filter: drop-shadow(0px 7px 25px rgba(0, 0, 0, 0.25));
    }
    header {
        display: flex;
        justify-content: space-between;
    }

    .logo {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    p {
        font-weight: 500;
        font-size: 22px;
        color: #000000;
        margin-left: 33px;
    }
</style>