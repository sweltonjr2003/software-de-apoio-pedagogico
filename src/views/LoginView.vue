<script setup lang="ts">
function login() {
    localStorage.setItem('authorizated', 'true')
    window.location.href = '/'
}
</script>

<template>
    <div class="wrapper">
        <Card>
            <template #title>
                <img src="/img/logo.png" alt="Logo" />
                <h1>Bem Vindo</h1>
            </template>
            <template #subtitle>
                Introduza o seu numero do SIGA para entrar
            </template>
            <template #content>
                <form>
                    <InputText id="numeroSiga" placeholder="Numero do SIGA" />

                    <Button label="Entrar" @click="login" />
                </form>
            </template>
        </Card>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .p-card {
        max-width: 400px !important;
        margin: auto;
    }

    .p-card .p-card-title {
        width: 100% !important;
        text-align: center !important;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover;

            display: block;
            margin: auto;
        }

        h1 {
            font-weight: bold;
            text-align: center;
            font-size: 1.5rem;
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;

        gap: 16px;
    }

    form input::placeholder {
        text-align: center;
    }
}
</style>
