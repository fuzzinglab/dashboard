<template>
  <nav
    :class="`${small ? 'w-16' : 'w-48'} bg-primary transition-all duration-500`"
  >
    <ul class="flex flex-col justify-center h-full">
      <li class="px-3 py-1 mb-auto"></li>
      <li
        v-for="route in routes"
        :key="route.path"
        class="mx-3 my-1 rounded text-left whitespace-no-wrap overflow-hidden text-white cursor-pointer hover:bg-secondary flex items-center"
      >
        <v-icon
          :name="route.meta.icon"
          class="inline-flex items-center w-8 m-1 stroke-1 flex-shrink-0"
        />
        <span class="ml-2">{{ route.meta.name }}</span>
      </li>
      <li class="px-3 py-1 mt-auto text-right">
        <button @click="small = !small">
          <v-icon
            :name="small ? 'chevrons-right' : 'chevrons-left'"
            class="w-8 rounded p-1 box-content stroke-1 text-white cursor-pointer hover:bg-secondary"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      small: true
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  }
};
</script>
