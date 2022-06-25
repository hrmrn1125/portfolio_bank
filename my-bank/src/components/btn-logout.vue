<template>
    <div>
        <div class="btn-wrap">
            <a href="#" type="button" class="btn-logout">
                ログアウト
            </a>
        </div>
        <div class="logout-img">
            <a href="#" type="button">
                <img :src="logout">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'btnLogout',
    data () {
        return {
            logout: require('@/assets/img/logout.svg'),
        };
    }
}
</script>

<style>
.btn-wrap {
    width: 111px;
    height: 40px;
    background: #BF0000;
    border-color: #bf0000;
    border-radius: 3px;
    margin-top: 4px;
}

.btn-wrap:hover {
    opacity: 0.6;
}

.btn-logout {
    color: #fff;
    line-height: 40px;
    padding: 0;
    text-decoration: none;
}

.btn-logout:hover {
    opacity: 0.6;
}

.logout-img {
    display: none;
}

@media screen and (min-width:768px) and (max-width:870px) {
    .btn-wrap {
        display: none;
    }

    .logout-img {
        display: block;
        height: 30px;
        width: 30px;
        margin-top: 9px;
    }
}
</style>