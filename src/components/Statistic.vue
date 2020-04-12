<template>
  <widget class="text-center leading-none">
    <span class="text-6xl">{{ value }}</span>
    <h2 class="font-bold uppercase text-black">{{ name }}</h2>
  </widget>
</template>

<script>
import Widget from "./Widget";

export default {
  props: ["name", "value"],
  components: {
    Widget
  }
};
</script>
