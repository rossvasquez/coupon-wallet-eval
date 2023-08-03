<template>
    <div class="flex justify-center items-center w-screen max-w-4xl h-24 bg-cyan-50 mx-auto mt-24">
        <h2 class="text-3xl font-semibold text-slate-500 tracking-wide uppercase">{{ fName }}'S ACCOUNT</h2>
    </div>
    <div class="w-screen max-w-4xl h-[.5px] bg-slate-900 mx-auto opacity-30"></div>
    <div class="flex flex-col justify-center w-screen max-w-4xl h-auto mx-auto mt-7">
        <font-awesome-icon class="text-6xl text-sky-900 mt-0.5" :icon="['fas', 'building']" />
        <p class="mt-2 text-3xl text-slate-400 text-center font-normal">CONNECTED BUSINESSES</p>
    </div>
    <div class="w-screen max-w-4xl mx-auto pt-8 mb-7">
        <div v-for="(coupon, index) in bizArr" :key="index" class="relative w-11/12 h-28 bg-sky-900 mx-auto rounded-xl shadow-md pt-3 mb-4">
            <p class="ml-4 text-2xl text-slate-50 font-semibold textShadow">{{ coupon.name }}</p>
            <button v-if="coupon.delete" v-on:click="coupon.delete = false, coupon.confirm = true" class="absolute right-3 md:right-5 bottom-3 md:bottom-5 bg-cyan-500 shadow-md w-24 h-10 rounded-lg pb-0.5 font-semibold text-white">Remove</button>
            <button v-if="coupon.confirm" v-on:click="bizArr.splice(index, 1)" class="absolute right-3 md:right-5 bottom-3 md:bottom-5 bg-red-500 shadow-md w-24 h-10 rounded-lg pb-0.5 font-semibold text-white">Confirm</button>
        </div>
    </div>
    <div class="w-screen max-w-4xl h-[.5px] bg-slate-900 mx-auto opacity-30"></div>
    <button v-on:click="logOut" class="flex justify-center items-center w-10/12 max-w-md h-14 rounded-xl shadow-sm border-2 border-sky-900 mx-auto mt-7 mb-7 text-xl text-sky-900 font-semibold">Log Out</button>
</template>

<style lang="scss">

    .textShadow {
          text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
        }

</style>

<script setup>
    const user = useSupabaseUser();
    
    let fName = ref('');

    let bizArr = ref([]);

    const client = useSupabaseClient()
    const { users } = await useAsyncData('users', async () => {
      const { data } = await client.from('users').select('first_name, businesses').eq('email', user.value.email);
      fName.value = data[0].first_name;
      const biz = data[0].businesses;
      for (let i=0;i<biz.length;i++) {
        bizArr.value.push({
          name: biz[i].Name,
          delete: true, 
          confirm: false,
        });
      }
    });

    definePageMeta({
        layout: 'account'
    })
</script>

<script>
    export default defineComponent ({
        data() {  
        return {
            
            };
        },
        methods: {
            async logOut() {
                const user = useSupabaseUser();
                const client = useSupabaseAuthClient();
                const router = useRouter();
                const { error } = await client.auth.signOut()
                if (error) {
                    
                } else {
                    localStorage.setItem('initial', null)
                    return router.push('/');
                }
            }
        }
    });
</script>