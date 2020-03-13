<template>
  <div class="x5-d-dialog">
    <div v-if="text" v-html="text"></div>
    <div v-if="type === 'prompt'">
      <input v-model="input" @input="$emit('input', input)" />
      <p class="x5-d-errors">{{ input ? error : '' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'x5-D-Dialog',
  props: ['error', 'text', 'type'],
  data: () => ({
    input: null,
  }),
}
</script>
