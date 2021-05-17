const API_URL = 'http://localhost:3000/'
Vue.component('tasks-wrapper', {
    template: `
    
        <div class="tasksWrapper">
            <p v-if="!listOfTasks.length" class="noTasksMessage">No tasks have been created</p>
            <div class="task bounceIn" v-for="task in listOfTasks" :key="task.id" :class="{'task--done': task.completed}" :data-id="task.id">
                <p class="task__title">{{task.name}}</p>
                <button class="task__doneButton" :class="{'task__doneButton--disabled': task.completed}" :disabled="task.completed == 1"  @click="finishTask(task.id)"><i class="fas fa-check doneButton__icon"></i></button>
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
    mounted() {
        this.loadTasks()
    },
    methods: {
        async loadTasks() {
            this.listOfTasks = []
            let response = await fetch(API_URL)
            response = await response.json();
            let todos = [...response]
            if (todos.length) todos.forEach(todo => this.listOfTasks.push(todo))
        },
        addTask() {
            if (this.taskName === null || this.taskName === undefined || this.taskName === "") return 
            if (!this.taskName.replace(/\s/g, '').length || this.taskName.length >= 53) return 
            fetch(API_URL, {
                method: 'POST',
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    'name': this.taskName
                })
            })
            .then(res => res.json())
            .then(data => this.listOfTasks.push(data[0]))

            this.taskName = ''
        },
        finishTask(id) {
            this.listOfTasks.forEach(task => {
                if(task.id === id) task.completed = 1
            })
        }
    }
})
var app = new Vue({
    el: '#app'
})