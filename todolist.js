Vue.component('todoitem', {
    template: '\
    <li>\
      {{ title }}\
        <button v-on:click=\"complet\" > X </button>\
    </li>\
    ',
    props: ['title', 'complet']
})
new Vue({
    el: '#todolist',
    data: {
        newTodoText: '',
        todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
        ],
        dones: []
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText)
            this.newTodoText = ''
        },
        complet: function() {
            console.log(1)
        },
        todone: function() {

        }
    }
})