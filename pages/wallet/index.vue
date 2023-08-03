<template>

    <div class="flex justify-center items-center w-screen max-w-4xl h-24 bg-cyan-50 mx-auto mt-24">
        <h2 class="text-3xl font-semibold text-slate-500 tracking-wide">ACTIVE OFFERS</h2>
    </div>

    <div class="w-screen max-w-4xl h-[.5px] bg-slate-900 mx-auto opacity-30 mb-8"></div>

    <div class="mx-auto w-screen max-w-4xl h-auto bg-cyan-50 walletWrapper">

    <div class="relative h-64 bg-transparent mx-auto w-11/12 rounded-xl z-10"></div>
      
      <template v-for="(coupon, index) in offerArr" :key="index" >
        <div v-if="!coupon.redeemed" :class="{'pullAnimation': coupon.showBackdrop && !coupon.hideBackdrop, 'closeAnimation': coupon.hideBackdrop && coupon.showBackdrop }" v-on:click=toggleAnimation(coupon) class="relative textShadow cardHeight bg-gradient-to-b from-sky-600 via-slate-400 via-1% to-sky-900 mx-auto w-11/12 rounded-xl pl-4 pr-4 pt-3.5 pb-1 shadow-[0px_-5px_25px_-10px_rgba(0,0,0,0.4)] z-10 -mt-64">
            <p class="relative text-[1.6rem] font-medium text-slate-50 w-full pr-9 z-10 textShadow overflow-hidden truncate">{{ coupon.name }}</p>
            <div :class="{'fadeInClose': showBackdrop && !hideBackdrop, 'fadeOutClose': hideBackdrop && showBackdrop}" class="absolute right-5 top-[1.2rem] z-20" v-on:click=closeAnimation(coupon) v-if="coupon.showBackdrop"><font-awesome-icon :icon="['far', 'circle-xmark']" class="text-slate-900 text-3xl"/></div>
            <img :src="coupon.image" class="absolute left-0 h-full pb-1 w-full opacity-30 top-1 rounded-xl cardImage"/>
            <div class="relative h-0.5 w-full bg-slate-900 mt-5"></div>
            <p class="relative mt-3 text-3xl text-slate-50 font-semibold textShadow">{{ coupon.offer }}</p>
            <p class="relative mt-2 text-slate-50 text-bold textShadow">After selecting redeem, present your coupon code to the merchant for use.</p>
            <div class="absolute bottom-5 w-full flex flex-col items-center pr-8" v-if="!coupon.redeem">
              <button v-on:click=showVoucher(coupon) class="mx-auto h-12 rounded-lg w-3/5 bg-sky-600 shadow-lg text-slate-50 text-lg font-semibold pb-1">REDEEM</button>
              <p class="mt-2 text-right text-sm text-slate-300">Expires {{ coupon.expiration }}</p>
            </div>
            <div v-if="coupon.redeem" class="relative flex items-center justify-center mt-8 mb-8 w-56 h-56 bg-white mx-auto rounded-md"><img src="https://uqjrkgdwnsoeohmpxcjf.supabase.co/storage/v1/object/sign/coupon-eval-bucket/qrcode.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb3Vwb24tZXZhbC1idWNrZXQvcXJjb2RlLnBuZyIsImlhdCI6MTY4NDMxMTM5MCwiZXhwIjoxNzE1ODQ3MzkwfQ.EpclMSCCzmhEkfJzvT8TnB6x2EXWMX9Od_U-CDhJtNQ&t=2023-05-17T08%3A16%3A30.520Z"/></div>
        </div>
      </template>

      <template ref="walletTop" :class="wallet" class="relative flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-slate-900 to-sky-800 rounded-xl shadow-md p-2 walletCover overflow-hidden z-30">
        <p class="text-slate-400 text-center text-3xl font-semibold tracking-wide leading-relaxed"><span class="text-slate-50 text-4xl uppercase font-bold">{{ fName }}'s</span><br>COUPON WALLET</p>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-0 -mb-1 -mr-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-[4.19rem] -mr-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-[8.65rem] -mr-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-[13.1rem] -mr-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-0 -mb-1 -ml-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-[4.19rem] -ml-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-[8.65rem] -ml-7"/>
        <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-[13.1rem] -ml-7"/>
      </template>
    </div>
    <div :class="{'fadeIn': showBackdrop && !hideBackdrop, 'fadeOut': hideBackdrop && showBackdrop}" v-show="showBackdrop" class="fixed top-0 h-screen w-screen bg-slate-900 z-30"></div>
</template>

<style lang="scss">
    .walletWrapper {
      min-height: 78vh;
    }
    .cardHeight {
      min-height: 20rem;
      height: fit-content;
    }
    .walletCover {
      width: 97%;
      height: 16rem;
    }
    .cardImage {
      object-fit: cover;
      object-position: top;
      overflow:hidden;
    }

    .textShadow {
      text-shadow: 0px 1px 3px black;
    }

    @keyframes myPullAnimation {
      0% {
        transform: translateY(0), rotate(0deg);
        z-index: 10;
      }
      50% {
        transform: translateY(-17rem) rotate(-5deg);
        z-index: 10;
      }
      70% {
        z-index: 40;
      }
      100% {
        transform: translateY(-5rem) rotate(0deg);
        z-index: 40;
      }
    }

    .pullAnimation {
      animation: myPullAnimation .7s forwards;
    }

    @keyframes myCloseAnimation {
      0% {
        transform: translateY(-5rem) rotate(0deg);
        z-index: 40;
      }
      30% {
        z-index: 40;
      }
      50% {
        transform: translateY(-17rem) rotate(-5deg);
        z-index: 10;
      }
      100% {
        transform: translateY(0), rotate(0deg);
        z-index: 10;
      }
    }

    .closeAnimation {
      animation: myCloseAnimation .7s forwards;
    }

    @keyframes myFadeIn {
      0% {
        opacity: 0;
      }
      80% {
        opacity: 0;
      }
      100% {
        opacity: 98%;
      }
    }

    .fadeIn {
      animation: myFadeIn .7s forwards;
    }

    @keyframes myFadeOut {
      0% {
        opacity: 98%;
      }
      20% {
        opacity: 0;
      }
      100% {
        opacity: 0%;
      }
    }

    .fadeOut {
      animation: myFadeOut .7s forwards;
    }

    @keyframes myFadeInClose {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 100%;
      }
    }

    .fadeInClose {
      animation: myFadeInClose .7s forwards;
    }

    @keyframes myFadeOutClose {
      0% {
        opacity: 100%;
      }
      50% {
        opacity: 100%;
      }
      100% {
        opacity: 0%;
      }
    }

    .fadeOutClose {
      animation: myFadeOutClose .7s forwards;
    }
</style>

<script setup>
import { ref } from 'vue';

  const user = useSupabaseUser();
  
  let fName = ref('');

  let offerArr = ref([]);

  const walletTop = ref(null);

  const client = useSupabaseClient()
  const { users } = await useAsyncData('users', async () => {
    const { data } = await client.from('users').select('first_name, coupons').eq('email', user.value.email);
    fName.value = data[0].first_name;
    const biz = data[0].coupons;
    for (let i=0;i<biz.length;i++) {
      offerArr.value.push({
        name: biz[i].business,
        offer: biz[i].offer,
        expiration: biz[i].expires,
        image: biz[i].image,
        showBackdrop: false, 
        redeem: false,
        redeemed: false,
        hideBackdrop: false,
      });
    }
  });

  if (process.client){
    location.reload();
  }

</script>

<script>
export default defineComponent ({
  data() {
    return {
      showBackdrop: false,
      hideBackdrop: false,
      wallet: ref({"-mt-64": true}),
    };
  },
  methods: {
    showVoucher(coupon) {
      coupon.redeem = true;
    },
    toggleAnimation(coupon) {
      coupon.showBackdrop = true;
      this.showBackdrop = true;
    },
    closeAnimation(coupon) {
      if (coupon.redeem) {
        coupon.redeemed = true;
      }
      coupon.hideBackdrop = true;
      this.hideBackdrop = true;
      coupon.redeem = false;
      setTimeout(() => {
        coupon.showBackdrop = false;
        this.showBackdrop = false;
        coupon.hideBackdrop = false;
        this.hideBackdrop = false;
      }, 700)
    },
  }
});

</script>