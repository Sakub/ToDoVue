Vue.component('tasks-wrapper', {
    template: `
    
        <div class="tasksWrapper">
            <div class="task" v-for="task in listOfTasks" :key="task.id">
                <p class="task__title">{{task.name}}</p>
                <button class="task__doneButton"><i class="fas fa-check doneButton__icon"></i></button>
            </div>
            <div class="app__inputWrapper">
            <input type="text" class="app__input" placeholder="Add task" v-model="taskName">
            <button class="app__addButton" @click="test"><i class="fa fa-plus addButton__icon"></i></button>
        </div>
        </div>
    `,
    data() {
        return {
            taskName:null,
            listOfTasks: [
                {
                    name: 'some task',
                    completed: true,
                    id: Math.random()
                },
                {
                    name: 'some task 2',
                    completed: false,
                    id: Math.random()
                }
            ]
        }
    },
    methods:{
        test(){
            this.listOfTasks.push({
                name: this.taskName,
                completed: false,
                id: Math.random()
            })
        }
    }
})
var app = new Vue({
    el: '#app',

})