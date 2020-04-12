<template>
  <main class="p-3 w-full">
    <div class="flex flex-row justify-around">
      <statistic class="text-green-500" name="running" value="10" />
      <statistic class="text-blue-500" name="memory" value="1G" />
      <statistic class="text-yellow-500" name="cpu" value="1G" />
    </div>
    <widget>
      <table class="table text-left w-full">
        <thead>
          <tr class="border-primary border-b-2">
            <th>Name</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <router-link
                to="/fuzzer/test"
                class="text-blue-500 hover:text-blue-800"
              >
                Test
              </router-link>
            </td>
            <td>
              Test Project
            </td>
          </tr>
          <tr>
            <td>
              <router-link
                to="/fuzzer/test2"
                class="text-blue-500 hover:text-blue-800"
              >
                Test 2
              </router-link>
            </td>
            <td>
              Test Project
            </td>
          </tr>
        </tbody>
      </table>
    </widget>
  </main>
</template>

<script>
import Widget from "@/components/Widget";
import Statistic from "@/components/Statistic";

export default {
  components: {
    Widget,
    Statistic
  }
};
</script>

<style>
.table tr td,
th {
  @apply p-1;
}

.table tbody tr:not(:last-child) {
  @apply border-b;
}
</style>
