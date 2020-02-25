<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="modal"
      :class="`x5-d-modal-wrapper ${options.overlay?'x5-d-overlay':''}`"
      @click.self="overlayClick"
    >
      <div
        :class="`x5-d-modal ${attention?'x5-d-attention':''} ${options.class}`"
        :style="`max-width:${options.width}px ${options.style}`"
      >
        <!-- TODO: Better transition for modals swapping -->
        <transition name="fade" mode="out-in">
          <component
            v-if="modal.component"
            :is="modal.component"
            :close="close"
            :options="options"
          />
          <x5-dialog v-else :close="close" :options="options"></x5-dialog>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import x5Dialog from "./Dialog.vue"

export default {
  name: "x5-D-App",
  components: { x5Dialog },
  data: () => ({
    attention: false
  }),
  computed: {
    modal() {
      return this.$root.modals[0]
    },
    options() {
      return this.modal.options
    }
  },
  methods: {
    close(val) {
      if (this.options.onClose) this.options.onClose(val)
      this.modal.resolve(val)
      this.$root.remove()
    },
    // TODO: Change to transition/animation
    async overlayClick() {
      if (this.options.overlay && !this.options.permanent) this.close()
      else {
        this.attention = true
        setTimeout(() => (this.attention = false), 150)
      }
    }
  }
}
</script>
