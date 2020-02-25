<template>
  <div class="x5-d-dialog">
    <div v-if="options.title" class="x5-d-header">
      {{options.title}}
      <span v-if="!options.permanent" class="x5-d-close" @click.self="cancel">❌</span>
    </div>
    <div class="x5-d-content">
      <p v-if="options.text">{{options.text}}</p>
      <div v-if="isPrompt">
        <input v-model="input" />
        <p class="x5-d-errors">{{errors[0]}}</p>
      </div>
    </div>
    <div class="x5-d-footer">
      <button v-if="!isAlert" @click="cancel">{{options.labelCancel}}</button>
      <button class="x5-d-ok" :disabled="errors.length>0" @click="submit">{{options.labelOK}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "x5-D-Dialog",
  props: ["close", "options"],
  data() {
    return {
      input: null,
      isAlert: this.options.type === "alert",
      isConfirm: this.options.type === "confirm",
      isPrompt: this.options.type === "prompt"
    }
  },
  computed: {
    errors() {
      if (!this.isPrompt || !this.options.rules) return []
      return this.options.rules.map(e => e(this.input)).filter(e => e !== true)
    }
  },
  methods: {
    async cancel() {
      if (this.options.onCancel) this.options.onCancel()
      this.close()
    },
    async submit() {
      if (this.options.onOK) this.options.onOK()
      this.close(this.isPrompt ? this.input : true)
    }
  }
}
</script>
