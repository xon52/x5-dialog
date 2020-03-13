<template>
  <transition name="x5-d-fade" mode="out-in">
    <div v-if="modal" class="x5-d-modal-wrapper x5-d-overlay" :style="`z-index:${zIndex}`" @click.self="overlayClick">
      <div :class="`x5-d-modal ${attention ? 'x5-d-attention' : ''}`" :style="`max-width:${modal.width}`">
        <x5-modal></x5-modal>
      </div>
    </div>
  </transition>
</template>

<script>
import x5Modal from './Modal.vue'

export default {
  name: 'x5-D-Component',
  components: { x5Modal },
  props: { zIndex: { type: [String, Number], default: 200 } },
  data: () => ({
    attention: false,
  }),
  computed: {
    modal() {
      return this.$store.getters['x5/d/modal']
    },
  },
  methods: {
    async overlayClick() {
      if (!this.modal.permanent) this.modal.close()
      else {
        this.attention = true
        setTimeout(() => (this.attention = false), 150)
      }
    },
  },
}
</script>
