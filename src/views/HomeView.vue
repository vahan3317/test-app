<template>
  <div class="home">
   <VTable
    :users_data="USERS"
    :data ="data"
    />
   
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex"
import VTable from "@/components/v-table.vue"


export default {
  name: 'Home',
  components: {
    VTable,
    
},
  data:() =>{
    return{}
  },
  computed:{
    ...mapGetters([
      'USERS'
    ])
  },
  methods:{
    ...mapActions([
      'GET_USERS_FROM_API'
    ])
  },
  mounted(){
    this.GET_USERS_FROM_API()
  }

}
</script>
