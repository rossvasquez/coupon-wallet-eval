<template>
    <div class="w-screen min-h-screen bg-cyan-50">
        <div>
            <slot />
        </div>
        <header class="flex flex-row fixed top-0 bg-slate-50 w-screen h-24 shadow-md pt-3 z-50">
            <font-awesome-icon class="text-sky-800 mt-2 ml-6 md:ml-12 text-5xl" :icon="['fas', 'wallet']" />
            <!-- <h1 class="text-slate-900 ml-4 mt-3 text-4xl font-semibold text-center">Coupons</h1> -->
            <font-awesome-icon class="absolute right-0 mr-6 md:mr-12 text-5xl mt-3 text-slate-400" :icon="['far', 'circle-user']" />
        </header>
    </div>
</template>