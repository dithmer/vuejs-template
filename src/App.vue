<template lang="pug">
div(class="h-full flex flex-col justify-center items-center")
    h1(
        class="text-2xl"
    ) Vue.js 3 Template
    p(class="w-full ml-12") Including
    ul(class="w-full list-disc ml-24")
        li Pug
        li Typescript
        li scss in Components
        li Fontawesome
        li Tailwind
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const App = defineComponent({
  name: 'App',
})

export default App
</script>

<style lang="scss"></style>
