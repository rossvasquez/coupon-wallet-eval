<template>
    <div class="w-screen min-h-screen bg-cyan-50">
        <div>
            <slot />
        </div>
        <header class="flex flex-row fixed top-0 bg-slate-50 w-screen h-24 shadow-md pt-3">
            <font-awesome-icon class="text-sky-800 mt-2 ml-6 md:ml-12 text-5xl" :icon="['fas', 'wallet']" />
        </header>
    </div>
</template>