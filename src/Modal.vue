<template>
  <div>
    <div v-if="modal.title" class="x5-d-header">
      <div v-html="modal.title"></div>
      <span v-if="!modal.permanent" class="x5-d-close" @click.self="cancel">❌</span>
    </div>
    <div class="x5-d-content">
      <transition name="x5-d-fade" mode="out-in">
        <component
          :close="modal.close"
          :data="modal.data"
          :is="modal.component"
          @input="val = $event"
          @valid="valid = $event"
          v-if="modal.component"
        />
        <x5-dialog v-else :error="error" :text="modal.text" :type="modal.type" @input="val = $event"></x5-dialog>
      </transition>
    </div>
    <div v-if="modal.buttons" class="x5-d-footer">
      <button v-if="hasCancel" @click="cancel" :disabled="working">{{ modal.cancelText }}</button>
      <button v-if="hasOK" class="x5-d-ok" :disabled="error || !valid || working" @click="ok">
        {{ modal.okText }}
      </button>
    </div>
  </div>
</template>

<script>
import x5Dialog from './Dialog.vue'

export default {
  name: 'x5-D-Modal',
  components: { x5Dialog },
  data: () => ({
    val: null,
    valid: true,
    working: false,
  }),
  computed: {
    modal() {
      return this.$store.getters['x5/d/modal']
    },
    hasCancel() {
      return this.modal.buttons.includes('Cancel')
    },
    hasOK() {
      return this.modal.buttons.includes('OK')
    },
    error() {
      if (!this.modal.rules) return null
      return this.modal.rules.map(e => e(this.val)).find(e => e !== true)
    },
  },
  methods: {
    async cancel() {
      if (this.modal.onCancel) await this.modal.onCancel()
      this.modal.close(this.modal.cancelDefault)
    },
    async ok() {
      this.working = true
      await this.modal.onOK(this.val)
      this.working = false
      this.modal.close(this.val || this.modal.okDefault)
    },
  },
}
</script>
