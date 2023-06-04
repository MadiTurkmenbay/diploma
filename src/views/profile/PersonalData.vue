<template>
    <div class="container">
        <div class="profile">
            <Profile></Profile>

            <div class="title global_inform_title">Байланысу мәліметтері</div>
            <div class="profile_body">
                <div class="block lines">
                    <div class="inform_line">
                        <h3>Елі</h3>
                        <div class="content">
                            <span>Қазақстан</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Елдi мекенінің статусы</h3>
                        <div class="content">
                            <span>Қала</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Тұрақты облысы</h3>
                        <div class="content">
                            <span>Алматы қаласы</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Аудан</h3>
                        <div class="content">
                            <span>Алатау ауданы</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Туған жерi (қала, елі)</h3>
                        <div class="content">
                            <span>Астана қаласы</span>
                        </div>
                    </div>
                </div>
                <div class="block lines">
                    <div class="inform_line">
                        <h3>Студент өмiр сүрiп жатқан жер</h3>
                        <div class="content">
                            <span>Алматы қаласы</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Жатақхана керек пе</h3>
                        <div class="content">
                            <span>Жоқ</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Студенттің нөмірі</h3>
                        <div class="content">
                            <span>+77077771234</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Ата-ана нөмірі</h3>
                        <div class="content">
                            <span>+77077771234</span>
                        </div>
                    </div>
                    <div class="inform_line">
                        <h3>Мекен-жай</h3>
                        <div class="content">
                            <span>Абай даңғылы, 45</span>
                        </div>
                    </div>
                </div>
            </div>
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
    .profile_body {
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    .block {
        width: calc(calc(100% - 25px) / 2);
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
    }
</style>