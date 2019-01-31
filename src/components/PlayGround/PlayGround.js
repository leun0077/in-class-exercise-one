export default {
  name: 'PlayGround',
  computed: {
    // check if its more than 50
    inlineValidatetionClass() {
      return this.inputValue.length > 50
    },
    // Show red text if more than 50
    inputValidatationClass() {
      return this.inputValue.length > 50 ? 'red-border' : ''
    },
    // Disable button
    isButtonDisabled() {
      return this.inputValue.length > 50 || this.inputValue.length === 0
    }
  },

  data() {
    return {
      inputValue: ''
    }
  }
}
