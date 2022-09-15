<template>
 <div class="w-[245px]  h-[242px] bg-[#6A6A6A]  shadow-xl rounded-[6px]   text-black bg-opacity-[0.08] text-center ">
   <header>
   <slot name="header" class=""></slot>
 </header>
 <main>
   <slot name="main"></slot>
 </main>
 
</div>

</template>
<script>
export default{
 

}
</script>
