<template>
    <footer class="container">
        <div class="first">
            <span>Univer 3.0</span>

            <img src="/images/SocialMedia.png" alt="SocialMedia">
        </div>

        <div class="line"></div>

        <p>© Copyright Әл-Фараби атындағы Қазақ Ұлттық Университеті Ақпараттық Технологиялар факультеті</p>
    </footer>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
    footer {
        margin-top: 80px;
    }

    .first {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 33px;

        span {
            font-weight: 600;
            font-size: 28px;
            line-height: 2.43;
            color: #000000;
        }

        img {
            cursor: pointer;
        }
    }

    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 142.5%;
        color: rgba(0, 0, 0, 0.3);
        margin-top: 24px;
    }

    .line {
        width: 100%;
        height: 1px;
        background: #D9D9D9;
    }
</style>