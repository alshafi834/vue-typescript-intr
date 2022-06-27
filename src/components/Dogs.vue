<template>
   <ul v-for="(dog, index) in dogs" :key="index">
       <li>{{ dog.age }}</li>
   </ul>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { Dog, getGoodDogs } from "@/store"

export default defineComponent({
    name: 'Dogs',
    data() {
        return {
            dogs: [] as Array<Dog>
        }
    },
    mounted() {
        this.dogs = getGoodDogs()
    }
})
</script>

<style>

</style>