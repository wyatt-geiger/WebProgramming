<template>
  <div id="app">
    
    <WouldYouRatherQuestion v-for="question in questions" :key="question.value"></WouldYouRatherQuestion>

  </div>
</template>

<script>
import WouldYouRatherQuestion from './components/WouldYouRatherQuestion.vue'

export default {
  name: 'app',
  data() {
    return {
      
      questions: [

        {
          id: 0,
          question: 'test',
          radio1: 'test',
          radio2: 'test'
        },
        {
          id: 1,
          question: '',
          radio1: '',
          radio2: ''
        },
        {
          id: 2,
          question: '',
          radio1: '',
          radio2: ''
        },
      ]

    }
  },
  components: {
    WouldYouRatherQuestion
  },
  methods: {
    importQuestions(thirty) {
      
    }
  }

}
</script>

<style>
#app {
  
}
</style>
