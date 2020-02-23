Vue.component('tasks-wrapper', {
    template: `
    
        <div class="tasksWrapper">
            <div class="task">
                <p class="task__title">Some task</p>
                <button class="task__doneButton"><i class="fas fa-check doneButton__icon"></i></button>
            </div>
            <div class="app__inputWrapper">
            <input type="text" class="app__input" placeholder="Add task">
            <button class="app__addButton"><i class="fa fa-plus addButton__icon"></i></button>
        </div>
        </div>
    `

})
var app = new Vue({
    el: '#app',

})