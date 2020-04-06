<template>
  <div class="wrapper">
    <img class="logo" src="./logo.svg" width="300" />
    <h1 class="title">x5-Dialog Example</h1>
    <!-- Dialogs -->
    <h2>Normal Dialogs</h2>
    <div class="row">
      <textarea id="text-input" v-model="text" rows="2" cols="40"></textarea>
    </div>
    <div class="row">
      <button class="button" @click="alert">Alert</button>
      <button class="button" @click="confirm">Confirm</button>
      <button class="button" @click="prompt">Prompt</button>
    </div>
    <!-- Custom Modal -->
    <h2>Custom Modal</h2>
    <div class="row">
      <button class="button" @click="custom">Open</button>
    </div>
    <div class="line">------------------------</div>
    <!-- Output -->
    <h2>Output / Return Value</h2>
    <p>This is the output / return value from the dialog boxes.</p>
    <p>They all return promises and have callback property functions for each interaction and event.</p>
    <div>
      <span :class="`output ${output ? 'output-active' : ''}`">{{ output ? output : 'Nothing returned yet.' }}</span>
    </div>
    <!-- Plugin Component -->
    <x5-dialog></x5-dialog>
  </div>
</template>

<script>
import Custom from './Custom'

export default {
  name: 'Example-App',
  data: () => ({
    text: 'This is some example text you can change.',
    output: '',
  }),
  methods: {
    alert() {
      this.$alert(this.text, {
        title: 'This is an alert dialog',
      }).then(res => {
        if (res) this.output = 'You pressed OK'
        else this.output = 'You cancelled'
      })
    },
    confirm() {
      this.$confirm(this.text, {
        title: 'This is a confirm dialog',
      }).then(res => {
        if (res) this.output = 'You pressed OK'
        else this.output = 'You cancelled'
      })
    },
    prompt() {
      this.$prompt(this.text, {
        title: 'This is a prompt dialog',
        rules: [v => (v && v.length > 3) || 'Length must be >3.'],
        permanent: true,
      }).then(res => {
        if (res) this.output = res
        else this.output = 'You cancelled'
      })
    },
    custom() {
      this.$modal(Custom, {
        permanent: true,
      }).then(res => {
        if (res) this.output = res
      })
    },
  },
}
</script>

<style scoped>
.wrapper {
  text-align: center;
}
.row {
  position: relative;
  margin-bottom: 10px;
}
.line {
  margin: 30px 0;
}
button {
  padding: 10px;
  min-width: 100px;
}
.output {
  border: 2px ridge silver;
  padding: 10px;
  font-size: 20px;
}
.output-active {
  color: aliceblue;
  background: dodgerblue;
}
</style>
