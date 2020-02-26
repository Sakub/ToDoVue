Vue.component('tasks-wrapper', {
    template: `
    
        <div class="tasksWrapper">
            <p v-if="!listOfTasks.length" class="noTasksMessage">No tasks have been created</p>
            <div class="task bounceIn" v-for="task in listOfTasks" :key="task.id" :class="{'task--done': task.completed}">
                <p class="task__title">{{task.name}}</p>
                <button class="task__doneButton" :class="{'task__doneButton--disabled': task.completed}" :disabled="task.completed" @click="finishTask(task.id)"><i class="fas fa-check doneButton__icon"></i></button>
            </div>
            <div class="app__inputWrapper">
            <input type="text" class="app__input" placeholder="Add task" v-model="taskName">
            <button class="app__addButton" @click="addTask"><i class="fa fa-plus addButton__icon"></i></button>
        </div>
        </div>
    `,
    data() {
        return {
            taskName: null,
            listOfTasks: []
        }
    },
    methods: {
        addTask() {
            if (this.taskName === null || this.taskName === undefined || this.taskName === "") {
                return false
            } else {
                if (!this.taskName.replace(/\s/g, '').length || this.taskName.length >= 53) {
                    return false
                } else {
                    this.listOfTasks.push({
                        name: this.taskName,
                        completed: false,
                        id: this.listOfTasks.length
                    })
                    this.taskName = null
                }

            }

        },
        finishTask(id) {
            for (let i = 0; i < this.listOfTasks.length; i++) {
                if (this.listOfTasks[i].id === id) {
                    this.listOfTasks[i].completed = true
                }
            }
        }
    }
})
var app = new Vue({
    el: '#app',

})