<script>
// @ is an alias to /src
import Count from '@/components/Count.vue';

export default {
  name: 'Home',
  components: {
    Count
  }
}
</script>

<template>
  <div class="home">
    <Count />
  </div>
</template>
