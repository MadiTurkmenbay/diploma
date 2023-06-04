<template>
    <div class="container">
        <div class="profile">
            <Profile></Profile>

            <div class="title global_inform_title">Сертификат баллдары</div>

            <section class="table_wrap">
                <table>
                    <tr>
                        <th>Пән аты</th>
                        <th>Балл</th>
                    </tr>
                    <tr>
                        <td>Оқу сауаттылығы</td>
                        <td>20/20</td>
                    </tr>
                    <tr>
                        <td>Қазақстан тарихы</td>
                        <td>20/20</td>
                    </tr>
                    <tr>
                        <td>Математикалық сауаттылық</td>
                        <td>20/20</td>
                    </tr>
                    <tr>
                        <td>Оқу сауаттылығы</td>
                        <td>20/20</td>
                    </tr>
                </table>
            </section>
        </div>
    </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
    components: {Profile}
}
</script>

<style scoped lang="scss">
    .title {
        color: #FFFFFF;
        margin-bottom: 17px;
    }

    .table_wrap {
        padding: 28px 20px 40px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid #DCDCDC;
        box-shadow: 0px 4px 38px rgba(0, 0, 0, 0.05);
        border-radius: 19px;
    }

    table {
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