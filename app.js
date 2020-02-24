Vue.component('tasks-wrapper', {
    template: `
    
        <div class="tasksWrapper">
            <div class="task" v-for="task in listOfTasks">
                <p class="task__title">{{task.name}}</p>
                <button class="task__doneButton"><i class="fas fa-check doneButton__icon"></i></button>
            </div>
            <div class="app__inputWrapper">
            <input type="text" class="app__input" placeholder="Add task">
            <button class="app__addButton"><i class="fa fa-plus addButton__icon"></i></button>
        </div>
        </div>
    `,
    data(){
        return{
            listOfTasks: [
                {name: 'some task', completed: false, id: Math.random()},
            ]
        }
    }

})
var app = new Vue({
    el: '#app',

})