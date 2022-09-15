<template>
 <div class=" w-[200px] pl-[30px] mt-[37px] md:mt-[57px] md:pl-[70px]  font-['Open_Sans'] ">
    
    <form class="w-[231px] md:w-[251px] lg:w-[331px]  " >
      <div class="flex items-center bg-[#5A5C66] py-2 rounded-lg shadow-xl ">
         <input  v-model="search" class= "pl-[12px] appearance-none bg-[#5A5C66] border-none w-full  text-white  py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Поиск " >
         <button class="flex-shrink-0 text-sm text-white py-1 px-4 rounded" type="button">
           <img :src="mySVG" class="" />
          </button>
   
      </div>
    </form>
      <div v-if="!show" class="  rounded-xl mt-[20px]  w-[270px] md:w-[372px] lg:w-[472px] border-none    ">
        <div class="border-none rounded-xl bg-[#6A6A6A] bg-opacity-[0.08] text-[23px]  flex border-px cursor-pointer  items-center  leading-[19.28px]  font-[138%] shadow-lg mt-[12px] hover:shadow-2xl  " @click="goTodetail(row.id,row.coins)" v-for="row in  resultQuery" :key="row.id" >
            <div class="w-[110px] h-[87px] text-center   flex justify-center items-center ">{{ row.id }}.</div>
            <div class="w-[529px] h-[87px] text-center   flex justify-center items-center">{{ row.name }}</div>
            <div class="w-[529px] h-[87px] text-center   flex justify-center items-center "><img src="../assets/coin.png" alt="" width="18">{{row.coins }}</div>

         </div>
      </div>
      <div else></div>
      <div class="pt-[22px] cursor-pointer">
          <p @click="show=!show" v-if="!show" class="w-[120px] h-[30px] flex justify-center  text-white rounded shadow hover:shadow-xl bg-[#5A5C66] ">Закрыть</p>
          <p @click="show=!show" v-if="show" class=" w-[120px] h-[30px] flex justify-center  text-white rounded shadow hover:shadow-xl bg-[#5A5C66] ">Oткрыть список</p>
      </div>  
  </div>
</template>

<script>



export default {
    name: "v-table",
    props: {
        users_data: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data() {
        return {
          show:true,
         search: null,
         usersPerPage:10,
         pageNumber:1,
         mySVG: require('../assets/Search.png'),
        

           
        };
    },
    
   computed:{
     resultQuery:function() {
      if (this.search !== null) {
      const a =this.users_data.filter(post => post.name.toLowerCase().includes(this.search.toLowerCase()));
      if(a){
       return a
      }
      } else {
       let from = (this.pageNumber -1) * this.usersPerPage;
    let to =from + this.usersPerPage;
    return this.users_data.slice(from,to);
      }
      
     },
     
    filteredUsers(){
     return this.users_data.filter(post =>
        post.body.toLowerCase().includes(this.search.toLowerCase()))
   },
  
   
    
  
  
   
  
 },
  methods:{
    
    goTodetail(pid,lcoins) {
    this.$router.push({href:'/users/:id', name:'UserDetails',params:{id:pid,coins:lcoins}})
  },
 },
    components: {  }
}
</script>

