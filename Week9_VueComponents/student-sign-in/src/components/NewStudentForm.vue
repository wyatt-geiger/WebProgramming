<template>
    <div>
    <div class="alert alert-danger" v-show="errors.length > 0">
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </div>

        
        <div class="card add-student m-2 p-2">
            <form>
                <h4 class="card-title">Add new student</h4>

                 <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" class="form-control" v-model.trim="newStudentName"> <!-- v-model attribute to each input. trim to remove whitespace -->
        </div>
        <div class="form-group">
            <label for="starID">Star ID</label>
            <input id="starID" class="form-control" v-model.trim="newStarID">
        </div>

            <!-- TODO v-on:click event handler, prevents default form submit
            so Vue can handle the event instead -->
        <button class="btn btn-primary" v-on:click.prevent="addStudent">Add</button>
            </form>
        </div>
    </div>
</template>

<script>
    // Create and export component here
    export default {
        name: 'NewStudentForm',
        data() {
            return {
                newStudentName: '',
                newStarID: '',
                errors: []
            }
        },
        methods: {
            addStudent() {
                this.errors = []
                if (this.newStudentName && this.newStarID) {
                    let student = { name: this.newStudentName, starID: this.newStarID, present: false }
                    this.$emit('student-added', student) // emit message to parent with new student
                    this.newStudentName = ''
                    this.newStarID = ''
                } else {
                    this.errors.push('Name and StarID are required.')
                }
            }
        }
    }
</script>

<style>
    /* write any styles for this component here */
</style>