<template>
    <div class="container">
        <section class="academy">
            <div class="title global_inform_title">
                <span>Академиялық күнтізбе</span>
            </div>

            <div class="blocks">
                <div class="block lines">
                    <div class="inform_line">
                        <h3>Оқыту түрі</h3>
                        <div class="content">
                            <span>Күндізгі</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Оқыту деңгейі/бағыты</h3>
                        <div class="content">
                            <span>Бiрiншi жоғары бiлiм</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Семестрлер мөлшері</h3>
                        <div class="content">
                            <span>8</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Мамандығы</h3>
                        <div class="content">
                            <span>6B06102 Ақпараттық жүйелер</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Оқуға түскен жылы</h3>
                        <div class="content">
                            <span>2019</span>
                        </div>
                    </div>
                </div>
                <div class="block terms">
                    <router-link :to="{name: 'term', params: {number: n}}" v-for="n in 8" :key="n" class="term_link">
                        <span>{{ n }}-ші семестр</span>
                        <div class="arrow">
                            <img src="/images/white_path.svg" alt="right">
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    .academy {
        background: #FFFFFF;
        border: 1px solid #DCDCDC;
        box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.05);
        border-radius: 37px;
        padding: 50px 34px;
    }

    .title {
        margin-bottom: 40px;
    }

    .blocks {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .block {
        width: calc(calc(100% - 45px) / 2);
        padding: 30px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid #DCDCDC;
        box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
        border-radius: 19px;
        display: flex;

        &.lines {
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        &.terms {
            flex-wrap: wrap;
        }
    }

</style>