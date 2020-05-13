<template>
    <div>
        <!-- Write template here -->

        <h1>Would You Rather?</h1>

        <div class="question-block">

            <label>negative</label>
            <input type="radio"> {{ radio1 }}
            <input type="radio"> {{ radio2 }}

        </div>

        <div class="question-block">

            <input id="q2" type="radio">

        </div>

        <div class="question-block">

            <input id="q3" type="radio">

        </div>

    </div>
</template>

<script>
export default {
    name: 'WouldYouRatherQuestion',
    data() {
        return {
            
            id: '',
            question: '',
            radio1: '',
            radio2: ''
        }
    },
    methods: {
        retrieveQuestion() {



            let thirty = { id: 0, question: this.question, radio1: this.radio1, radio2: this.radio2}
            this.$emit('test', thirty)
        }
    }

}
</script>

<style>

</style>