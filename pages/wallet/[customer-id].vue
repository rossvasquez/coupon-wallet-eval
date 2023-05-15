<template>
    <div class="flex justify-center items-center w-screen max-w-4xl h-32 bg-cyan-50 mx-auto mt-24">
        <h2 class="text-3xl font-semibold text-slate-400 tracking-wide">ACTIVE OFFERS</h2>
    </div>
    <div class="mx-auto w-screen max-w-4xl h-auto bg-slate-50 walletWrapper">
        <!-- <div class="relative mx-auto h-80 w-11/12 rounded-xl bg-gradient-to-t from-slate-400 via-red-400 to-red-400 pl-4 pr-4 pt-4 shadow-[0px_-5px_25px_-10px_rgba(0,0,0,0.4)] hover:z-50">
            <p class="relative text-2xl font-medium text-slate-50 z-10 textShadow">GOLDEN GYM & SPA</p>
            <img src="../../assets/gym.png" class="absolute left-0 h-full pb-1 w-full opacity-20 top-1 rounded-xl cardImage"/>
            <div class="relative h-0.5 w-full bg-slate-900 mt-5"></div>
            <p class="relative mt-3 text-3xl text-slate-50 font-semibold textShadow">35% OFF IN-HOUSE SUPPLEMENTS</p>
            <p class="relative mt-2 text-slate-50 text-bold textShadow">After selecting redeem, present your coupon code to the merchant for use.</p>
            <div class="absolute bottom-5 w-full flex flex-col items-center pr-8">
              <button class="mx-auto h-12 rounded-lg w-3/5 bg-slate-900 shadow-lg text-slate-50 text-lg font-semibold pb-1">REDEEM</button>
              <p class="mt-1 text-right text-xs">Expires 10/18/23</p>
            </div>
        </div>
        <div class="relative mx-auto h-80 w-11/12 rounded-xl bg-gradient-to-t from-slate-400 via-red-400 to-red-400 pl-4 pr-4 pt-4 -m-64 shadow-[0px_-5px_25px_-10px_rgba(0,0,0,0.4)] hover:z-50">
            <p class="relative text-2xl font-medium text-slate-50 z-10 textShadow w-full overflow-hidden truncate">GOLDEN GYM & SPA</p>
            <img src="../../assets/gym.png" class="absolute left-0 h-full pb-1 w-full opacity-20 top-1 rounded-xl cardImage"/>
            <div class="relative h-0.5 w-full bg-slate-900 mt-5"></div>
            <p class="relative mt-3 text-3xl text-slate-50 font-semibold textShadow">ONE DAY GUEST PASS</p>
            <p class="relative mt-2 text-slate-50 text-bold textShadow">After selecting redeem, present your coupon code to the merchant for use.</p>
            <div class="absolute bottom-5 w-full flex flex-col items-center pr-8">
              <button class="mx-auto h-12 rounded-lg w-3/5 bg-slate-900 shadow-lg text-slate-50 text-lg font-semibold pb-1">REDEEM</button>
              <p class="mt-1 text-right text-xs">Expires 11/26/23</p>
            </div>
        </div>
        <div class="relative mx-auto h-80 w-11/12 rounded-xl bg-gradient-to-t from-slate-400 via-blue-400 to-blue-400 pl-4 pr-4 pt-4 -m-64 shadow-[0px_-5px_25px_-10px_rgba(0,0,0,0.4)] hover:z-50">
            <p class="relative text-2xl font-medium text-slate-50 z-10 textShadow overflow-hidden truncate">ADVANCED AUTOBODY SPECIALISTS OF IOWA</p>
            <img src="../../assets/autobody.png" class="absolute left-0 h-full pb-1 w-full opacity-20 top-1 rounded-xl cardImage"/>
            <div class="relative h-0.5 w-full bg-slate-900 mt-5"></div>
            <p class="relative mt-3 text-3xl text-slate-50 font-semibold textShadow">25% OFF STANDARD OIL CHANGE</p>
            <p class="relative mt-2 text-slate-50 text-bold textShadow">After selecting redeem, present your coupon code to the merchant for use.</p>
            <div class="absolute bottom-5 w-full flex flex-col items-center pr-8">
              <button class="mx-auto h-12 rounded-lg w-3/5 bg-slate-900 shadow-lg text-slate-50 text-lg font-semibold pb-1">REDEEM</button>
              <p class="mt-1 text-right text-xs">Expires 7/12/23</p>
            </div>
        </div>
        <div :class="{'pullAnimation': showBackdrop && !hideBackdrop, 'closeAnimation': hideBackdrop && showBackdrop }" @click=toggleAnimation class="relative mx-auto cardHeight w-11/12 rounded-xl bg-gradient-to-t from-slate-400 via-green-400 to-green-400 pl-4 pr-4 pt-4 pb-1 -m-64 shadow-[0px_-5px_25px_-10px_rgba(0,0,0,0.4)]">
            <p class="relative text-2xl font-medium text-slate-50 z-10 textShadow">GREENS GALORE</p>
            <div class="absolute right-5 top-3.5 z-20" @click=closeAnimation v-if="showBackdrop"><font-awesome-icon :icon="['far', 'circle-xmark']" class="text-slate-900 text-4xl"/></div>
            <img src="../../assets/salad.png" class="absolute left-0 h-full pb-1 w-full opacity-20 top-1 rounded-xl cardImage"/>
            <div class="relative h-0.5 w-full bg-slate-900 mt-5"></div>
            <p class="relative mt-3 text-3xl text-slate-50 font-semibold textShadow">FREE JUICE SHOT WITH PURCHASE</p>
            <p class="relative mt-2 text-slate-50 text-bold textShadow">After selecting redeem, present your coupon code to the merchant for use.</p>
            <div class="absolute bottom-5 w-full flex flex-col items-center pr-8" v-if="!redeem">
              <button @click=showVoucher class="mx-auto h-12 rounded-lg w-3/5 bg-slate-900 shadow-lg text-slate-50 text-lg font-semibold pb-1">REDEEM</button>
              <p class="mt-1 text-right text-xs">Expires 08/26/23</p>
            </div>
            <div v-if="redeem" class="relative mt-8 mb-4 w-56 h-56 bg-white mx-auto"></div>
        </div> -->
        <div v-for="(item, index) in items" :key="index" :class="{'pullAnimation': item.showBackdrop && !item.hideBackdrop, 'closeAnimation': item.hideBackdrop && item.showBackdrop, ...item.mystyle }" @click=toggleAnimation(index) class="relative cardHeight mx-auto w-11/12 rounded-xl pl-4 pr-4 pt-4 pb-1 shadow-[0px_-5px_25px_-10px_rgba(0,0,0,0.4)] z-10">
            <p class="relative text-2xl font-medium text-slate-50 z-10 textShadow">{{ item.name }}</p>
            <div class="absolute right-5 top-3.5 z-20" @click=closeAnimation(index) v-if="item.showBackdrop"><font-awesome-icon :icon="['far', 'circle-xmark']" class="text-slate-900 text-4xl"/></div>
            <img :src="item.pic" class="absolute left-0 h-full pb-1 w-full opacity-20 top-1 rounded-xl cardImage"/>
            <div class="relative h-0.5 w-full bg-slate-900 mt-5"></div>
            <p class="relative mt-3 text-3xl text-slate-50 font-semibold textShadow">FREE JUICE SHOT WITH PURCHASE</p>
            <p class="relative mt-2 text-slate-50 text-bold textShadow">After selecting redeem, present your coupon code to the merchant for use.</p>
            <div class="absolute bottom-5 w-full flex flex-col items-center pr-8" v-if="!redeem">
              <button @click=showVoucher(index) class="mx-auto h-12 rounded-lg w-3/5 bg-slate-900 shadow-lg text-slate-50 text-lg font-semibold pb-1">REDEEM</button>
              <p class="mt-1 text-right text-xs">Expires 08/26/23</p>
            </div>
            <div v-if="item.redeem" class="relative mt-8 mb-4 w-56 h-56 bg-white mx-auto"></div>
        </div>
        <div class="relative flex flex-col items-center justify-center mx-auto bg-gradient-to-r from-slate-900 to-sky-800 rounded-xl shadow-md p-2 walletCover overflow-hidden z-30 -mt-64">
            <p class="text-slate-400 text-center text-3xl font-semibold tracking-wide leading-relaxed"><span class="text-slate-50 text-4xl font-serif">BRYNN'S</span><br>COUPON WALLET</p>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-0 -mb-1 -mr-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-[4.19rem] -mr-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-[8.65rem] -mr-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 right-0 bottom-[13.1rem] -mr-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-0 -mb-1 -ml-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-[4.19rem] -ml-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-[8.65rem] -ml-7"/>
            <img src="../../assets/dashed-line.png" class="absolute rotate-90 opacity-70 left-0 bottom-[13.1rem] -ml-7"/>
        </div>
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
        opacity: 95%;
      }
    }

    .fadeIn {
      animation: myFadeIn .7s forwards;
    }

    @keyframes myFadeOut {
      0% {
        opacity: 95%;
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
</style>

<script lang="ts">
import { defineComponent } from 'vue';

//Coupon Card Animation
export default defineComponent ({
  data() {
    return {
      items: [
        {name: "Jim's Gym", showBackdrop: false, redeem: false, hideBackdrop: false, mystyle: {'bg-gradient-to-t': true, 'from-slate-400': true, 'via-red-400': true, 'to-red-400': true}, pic: '../../assets/gym.png'},
        {name: "Jim's Gym", showBackdrop: false, redeem: false, hideBackdrop: false, mystyle: {'bg-gradient-to-t': true, 'from-slate-400': true, 'via-red-400': true, 'to-red-400': true, '-mt-64': true}, pic: "../../assets/gym.png"},
        {name: "Aaron's Autobody", showBackdrop: false, redeem: false, hideBackdrop: false, mystyle: {'bg-gradient-to-t': true, 'from-slate-400': true, 'via-blue-400': true, 'to-blue-400': true, '-mt-64': true}, pic: "../../assets/autobody.png"},
        {name: "Greens Galore", showBackdrop: false, redeem: false, hideBackdrop: false, mystyle: {'bg-gradient-to-t': true, 'from-slate-400': true, 'via-green-400': true, 'to-green-400': true, '-mt-64': true}, pic: "../../assets/salad.png"},
      ],
      showBackdrop: false,
      hideBackdrop: false,
      redeem: false,
    };
  },
  methods: {
    showVoucher(index: number) {
      this.items[index].redeem = true;
    },
    toggleAnimation(index: number) {
      this.items[index].showBackdrop = true;
      this.showBackdrop = true;
    },
    closeAnimation(index: number) {
      this.items[index].hideBackdrop = true;
      this.hideBackdrop = true;
      this.items[index].redeem = false;
      setTimeout(() => {
        this.items[index].showBackdrop = false;
        this.showBackdrop = false;
        this.items[index].hideBackdrop = false;
        this.hideBackdrop = false;
      }, 700)
    },
  }
});

</script>