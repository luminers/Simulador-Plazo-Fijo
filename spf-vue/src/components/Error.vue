<template>
  <div>
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <ul class="text-start">
        <li v-for="item in msg" :key="item.id">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorComponente",
  props: {
    msg: Array,
  },
};
</script>
