<template>
    <div class="container">
        <section class="term">
            <div class="title global_inform_title">
                <span>{{ number }} семестр</span>
            </div>
            <div class="white_title global_inform_title">
                <span>Оқытудың негiзгi мерзiмі</span>
            </div>

            <table class="term_table">
                <tr>
                    <th>Мерзім</th>
                    <th>Апта</th>
                    <th>Бастап</th>
                    <th>Дейін</th>
                </tr>
                <tr>
                    <td>Бағдар беру аптасы</td>
                    <td>2</td>
                    <td>02.09.2019</td>
                    <td>31.08.2019</td>
                </tr>
            </table>

            <div class="white_title second global_inform_title">
                <span>Модуль - {{ number }} ({{ number }} семестр)</span>
            </div>

            <table class="term_table">
                <tr>
                    <th>Мерзім</th>
                    <th>Апта</th>
                    <th>Бастап</th>
                    <th>Дейін</th>
                </tr>
                <tr>
                    <td>Бағдар беру аптасы</td>
                    <td>2</td>
                    <td>02.09.2019</td>
                    <td>31.08.2019</td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script>
export default {
    computed: {
        number() {
            return this.$route.params.number;
        },
    }
}
</script>

<style scoped lang="scss">
    .term {
        background-color: #FFFFFF;
        border: 1px solid #DCDCDC;
        box-shadow: 0px 0px 38px rgba(0, 0, 0, 0.05);
        border-radius: 37px;
        padding: 50px 34px 345px;

        background-image: url("/images/table_back.svg");
        background-repeat: no-repeat;
        background-position: right bottom;
    }

    .title {
        margin-bottom: 36px;
    }

    .white_title {
        background: #FFFFFF;
        padding-left: 16px;
        padding-right: 16px;

        span {
            color: #000000;
        }
        &.second {
            margin-top: 60px;
            margin-bottom: 26px;
        }
    }

    .term_table {
        margin-top: 18px;
        width: 100%;
        border-collapse: collapse;
        tr {
            border-bottom: 1px solid #DCDFE3; /* Граница между строками */
            th {
                padding: 12px 12px;
                text-align: left;
                font-weight: 700;
                font-size: 12px;
                color: #666E7D;
            }
        }
        td {
            padding: 16px;
            text-align: left;
            font-size: 14px;
        }
    }


</style>