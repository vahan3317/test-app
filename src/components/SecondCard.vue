<template>
 <div class="  w-[245] md:w-full hover:bg-[#6A6A6A]   hover:shadow-xl hover:rounded-[6px]   text-black hover:bg-opacity-[0.08] text-center cursor-pointer">
  <div class="flex justify-center items-center text-[22px]  ">
                    <img src="../assets/coin.png" alt="" class="w-[20px] pr-[4px]">
                    <span>50</span>
                    <img src="../assets/Mask group.png" alt="" class="w-[24px] pl-[4px] ">
                  </div> 
                  <div><img src="../assets/phone1.png" class="w-[30px] mx-auto"></div>
                  
                 <div class="flex justify-center items-center text-[12px]">
                    <img src="../assets/50%.png" alt="" class="w-[28px] pr-[4px]">
                    <span class="mt-[3px]">на звонки ST (x2)</span>
                  </div>
                    <button v-if="show" class="mt-[5.74px]  mx-auto w-[135px] bg-[#00CD52] rounded-[5px] flex justify-center items-center hover:shadow-xl" @click="show = !show">Уже использовано</button>
                    <button v-if="!show" class="mt-[5.74px] mx-auto w-[135px] bg-[#FECE00] rounded-[5px] flex justify-center items-center" @click="show = !show" >Использовать скидку</button>
                  
  </div>

</template>
<script>
export default{
  data(){
    return{
      show:false
    }
  }

}
</script>

