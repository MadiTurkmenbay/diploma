<template>
    <div class="profile_top">
            <div class="left">
                <div class="avatar_wrap">
                    <img v-if="role === 'ROLE_TEACHER'" src="/images/default_user.png" alt="default_user">
                </div>
                <div class="text">
					<h3 v-if="role === 'ROLE_TEACHER'" class="name">Нарбаева Салтанат</h3>
                    <h3 v-else class="name">{{ user.firstName }} {{ user.lastName}}</h3>
                    <span class="degree">{{user.degree}}</span>
                </div>
            </div>
            <div class="right">
                <div class="buttons">
                    <button class="grey_border"><span>Фонды ауыстыру</span></button>
                    <button><span>Редакциялау</span></button>
                </div>
            </div>
        </div>
</template>

<script>
import {mapState} from "vuex";

export default {
	computed: {
		...mapState(['isAuth', 'user']),
		role() {
			return this?.user?.roles[0].name;
		},
	},
}
</script>

<style scoped lang="scss">

.left {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    position: relative;

    .text {
        position: absolute;
        bottom: -39px;
        left: 165px;
        white-space: nowrap;

        color: #0075FF;
        .name {
            font-weight: 600;
            font-size: 30px;
            line-height: 1.2;
        }
        .degree {
            margin-top: 5px;
            font-weight: 500;
            line-height: 1.2;

            opacity: 0.7;
        }
    }
}

.right {
    align-self: stretch;
    position: relative;
    .buttons {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 120%;
    }
    button {
        align-self: stretch;
        background: #FFFFFF;
        border: 1px solid #0075FF;
        border-radius: 10px;
        padding: 12px 14px;
        cursor: pointer;
        min-width: 174px;
        span {
            font-weight: 500;
            font-size: 16px;
            line-height: 1.2;
            color: #0075FF;
        }
        &:not(.grey_border) {
            margin-bottom: -20px;
        }
        &.grey_border {
            border-color: #ABABAB;
            margin-bottom: 75px;
        }
        &:hover {
            background: #ecf5fb;
        }
    }
}
.profile_top {
    padding: 0 54px 78px;
    display: flex;
    justify-content: space-between;

    .avatar_wrap {
        border-radius: 50%;
        overflow: hidden;
        background-color: #DCDCDC;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #DCDCDC;
        width: 180px;
        height: 180px;
    }
    img {
        width: 100%;
        height: 100%;
    }
}
</style>