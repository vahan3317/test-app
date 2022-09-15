<template>
<div class="  xl:flex xl:justify-between    py-[70px] px-[57px]  ">
 <FirstCard>
  <template v-slot:header>
  
    <p class="text-[22px] mt-[16px]">Ваш баланс:</p>
  </template>
  <template v-slot:main>
   
      <div class="flex justify-center items-center text-[32px]">
        <img src="../assets/coin.png" alt="" class="w-[40px] pr-[4px]">
        <span>{{$route.params.coins}}</span>
        <img src="../assets/Mask group.png" alt="" class="w-[34px] pl-[4px] ">
      </div>
  </template>
 
  </FirstCard>
   <div class=" w-[245px] md:w-full lg:w-[800px] xl:w-[840px]  rounded-lg shadow-xl bg-[#6A6A6A] bg-opacity-[0.08]">
      <div class=" w-[245px] md:w-full mt-[8px] px-[12px] flex justify-between ">
        <div class="text-[9px]  md:text-[22px] mt-[8px] md:mt-0">Варианты обмена на скидку</div>
        <Modal />
      </div>
    <div  class=" md:w-full  mt-[12px]  pt-[12px] w-[245px]  md:flex md:justify-start md:px-[22px] xl:w-[845px] lg:w-[825px] lg:flex lg:justify-around xl:mt-0  lg:rounded-[12px] lg:pr-[32px]  lg:mb-[12px]">

      <SecondCard class="pb-[22px]" v-for="item in 5" :key="item" />
    </div>
  </div>
</div>


</template>
<script>
import FirstCard from './FirstCard.vue';
import SecondCard from './SecondCard.vue';
// import UserDetailsModal from './UserDetailsModal.vue';
import Modal from './Modal.vue';

export default{
    name: "UserDetails",
    data() {
        return {
            params: ["id", "coins"],
            totalVuePackages,
            show:false,
        };
    },
    components: { FirstCard, SecondCard, Modal },
    async created() {
  // GET request using fetch with async/await
  const response = await fetch("http://127.0.0.1:8000/api/products");
  const data = await response.json();
  this.totalVuePackages = data.total;
},methods:{

 

},
}

</script>