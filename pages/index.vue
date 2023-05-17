<template>
    <div class="flex flex-col justify-center w-screen max-w-4xl h-auto bg-cyan-50 mx-auto pt-16 mt-24 sm:pt-7">
        <p class="text-5xl sm:text-6xl md:mt-12 font-bold text-slate-400 text-center tracking-wide leading-tight">ONE WALLET</p>
        <font-awesome-icon :icon="['fas', 'infinity']" class="text-8xl text-center text-sky-800 md:mt-4"/>
        <p class="text-7xl sm:text-8xl font-bold tracking-tight text-center text-slate-800">SAVINGS</p>    
        <form class="relative flex flex-col w-full mx-auto pt-24 p-4" ref="form" @submit.prevent="login">
            <input required type="email" placeholder="E-Mail" id="email" name="email" v-model="email" class="text-slate-800 placeholder-slate-400 focus:outline-slate-400 w-full max-w-xs mx-auto h-14 pl-4 pb-1 rounded-xl text-xl logIn shadow-inner font-semibold placeholder:font-normal">
            <input required type="password" placeholder="Password" id="password" name="password" v-model="password" class="text-slate-800 placeholder-slate-400 w-full max-w-xs mx-auto h-14 pl-4 pb-1 rounded-xl text-xl logIn shadow-inner mt-3 focus:outline-slate-400 font-semibold placeholder:font-normal">
            <button type="submit" class="w-full widthy mx-auto h-12 mx-auto mt-3 text-xl font-semibold rounded-xl bg-gradient-to-r from-sky-700 to-sky-900 hover:to-sky-800 text-slate-50 pb-1">Login</button>
        </form>
        <button class="w-full widthy mx-auto h-12 mx-auto -mt-2 text-xl rounded-xl border-2 border-slate-400 text-slate-400 hover:border-slate-500 hover:text-slate-500 hover:font-semibold pb-1 mb-8">Sign Up</button>
        <p v-if="errMsg" class="mx-auto mt-8 text-xl font-semibold text-red-400">Invalid Login</p>
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

<script>
    export default defineComponent ({
        data() {  
        return {
            errMsg: false
        }
        },

        methods: {
            async login() {
                const client = useSupabaseAuthClient();
                const router = useRouter();
                const { error } = await client.auth.signInWithPassword({ 
                    email: this.email,
                    password: this.password,
                });
                if (error) {
                    this.errMsg = true;
                } else {
                    return router.push('/wallet');
                }
            }
        }
    })
</script>

<script setup>
    definePageMeta({
        layout: 'log-in',
    })

    if (process.client && !localStorage.getItem('initial')){
        localStorage.clear();
    }
</script>