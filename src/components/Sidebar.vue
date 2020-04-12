<template>
  <nav
    :class="`${small ? 'w-16' : 'w-48'} bg-primary transition-all duration-500`"
  >
    <ul class="flex flex-col justify-center h-full">
      <li class="px-3 py-1 mb-auto"></li>
      <li v-for="route in routes" :key="route.path" class="relative">
        <router-link
          :to="route"
          :exact="route.path === '/'"
          class="mx-3 my-1 rounded text-left whitespace-no-wrap overflow-hidden text-white cursor-pointer hover:bg-secondary flex items-center"
        >
          <v-icon
            :name="route.meta.icon"
            class="inline-flex items-center w-8 m-1 stroke-1 flex-shrink-0"
          />
          <span class="ml-2">{{ route.meta.name }}</span>
        </router-link>
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
      return this.$router.options.routes.filter(({ meta }) => meta);
    }
  }
};
</script>

<style>
.router-link-active::after {
  @apply text-background;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 5px 5px 0;
  border-color: transparent currentColor transparent transparent;
}
</style>
