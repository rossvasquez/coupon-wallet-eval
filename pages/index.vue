<template>
    <div class="flex flex-col justify-center w-screen max-w-4xl h-auto bg-cyan-50 mx-auto pt-16 mt-24 sm:pt-7">
        <p class="text-5xl sm:text-6xl font-bold text-slate-400 text-center tracking-wide leading-tight">ONE WALLET</p>
        <font-awesome-icon :icon="['fas', 'infinity']" class="text-8xl text-center text-sky-800 md:mt-4"/>
        <p class="text-7xl sm:text-8xl font-bold tracking-tight text-center text-slate-800">SAVINGS</p>    
        <form class="relative flex flex-col w-full mx-auto mt-20 md:mt-4 p-4">
            <input type="text" placeholder="Username" class="text-slate-800 placeholder-slate-400 focus:outline-slate-400 w-full max-w-xs mx-auto h-14 pl-4 pb-1 rounded-xl text-xl logIn shadow-inner font-semibold placeholder:font-normal">
            <input type="password" placeholder="Password" class="text-slate-800 placeholder-slate-400 w-full max-w-xs mx-auto h-14 pl-4 pb-1 rounded-xl text-xl logIn shadow-inner mt-3 focus:outline-slate-400 font-semibold placeholder:font-normal">
            <button type="submit" class="w-full widthy mx-auto h-12 mx-auto mt-3 text-xl font-semibold rounded-xl bg-gradient-to-r from-sky-800 to-slate-900 hover:to-sky-800 text-slate-50 pb-1">Log In</button>
            <button class="w-full widthy mx-auto h-12 mx-auto mt-2 text-xl rounded-xl border-2 border-slate-400 text-slate-400 hover:border-slate-500 hover:text-slate-500 hover:font-semibold pb-1">Sign Up</button>
        </form>
    </div>
</template>

<style lang="scss">
    .logIn {
        box-shadow: 0px 0px 25px 3px rgba(0, 0, 0, 0.1);
    }

    .widthy {
        max-width: 19.9rem;
    }
</style>

<script setup>
    definePageMeta({
        layout: 'log-in'
    })
</script>