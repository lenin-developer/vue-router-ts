<template>
    <div class="layout-auth">
        <div class="layout-auth__welcomen">
            <h1>!Bienvenido!</h1>
        </div>
        <div class="layout-auth__auth">
            <div class="auth__menu">
                <RouterLink :to="{ name: 'login' }">login</RouterLink>
                <RouterLink :to="{ name: 'register' }">register</RouterLink>
            </div>
            <div class="auth__conten">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<style scoped lang="postcss">
.layout-auth {
    height: inherit;
    width: inherit;
    display: flex;
}

.layout-auth__welcomen {
    flex-basis: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(57, 104, 88);

    :where(& > h1) {
        font-weight: 800;
    }
}

.layout-auth__auth {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
}

.auth__menu {
    display: flex;
    gap: 16px;

    :where(& > a) {
        color: aliceblue;
        text-decoration: none;
    }
}

.auth__conten {
    width: 100%;
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0px;
}
</style>