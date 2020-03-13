<template>
  <div style="padding: 20px;">
    <h1>This is a custom modal from the main Vue instance</h1>
    <p>
      This will open another modal which when closed will return to this one:
      <button @click="extra()">Another</button>
    </p>
    <p>It is sent the close() method as a prop.</p>
    <p>
      It can be called without any value:
      <button @click="close()">close</button>
    </p>
    <p>
      Or with a value (
      <strong>"w00t!"</strong>):
      <button @click="close('w00t!')">close</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Custom',
  props: {
    close: { type: Function },
  },
  methods: {
    extra() {
      this.$alert('Another? Really?? 🧐')
    },
  },
}
</script>
