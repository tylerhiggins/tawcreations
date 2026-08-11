module.exports = {
  // ... your existing configurations like root or env
    env: {
    browser: true,
    node: true // Add this line to define global variables like 'process'
  },
  extends: [
    'plugin:vue/vue3-essential', // The rule you updated earlier
    'eslint:recommended'
  ],
  rules: {
    // Add this exact line to turn off the multi-word component name requirement
    'vue/multi-word-component-names': 'off'
  }
}

