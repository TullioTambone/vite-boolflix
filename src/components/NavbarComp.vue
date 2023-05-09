<script>
    export default{
        name:'NavbarComp'
    }
</script>

<template>
    <nav>
        <div class="logo">
            <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="">
        </div>

        <div>
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" name="" id="">
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    height: 10vh;
    background: rgb(41,41,41);
    background: linear-gradient(0deg, rgba(41,41,41,1) 0%, rgba(0,0,0,1) 100%);
    .logo{
        width: 150px;
        img{
            width: 100%;
            display: block;
        }
    }
    div{
        display: flex;
        align-items: center;
        i{
            cursor: pointer;
            color: white;
        }
        input{
            background-color: transparent;
            border: 1px solid white;
            margin-left: 5px;
        }
    }
}
</style>