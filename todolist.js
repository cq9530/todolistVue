Vue.component('item', {
    template: '\
    <li>\
        <input type=\"checkbox\" :checked="data.hasdone" v-on:click=\"click\"/>\
        {{ data.thing }}\
    </li>\
    ',
    props: ['data', 'click']
})
new Vue({
    el: '#todolist',
    data: {
        newTodoText: '',
        seen: true,
        things: [{
            thing: 'Do the dishes',
            hasdone: false
        }, {
            thing: 'Take out the trash',
            hasdone: false
        }, {
            thing: 'Mow the lawn',
            hasdone: false
        }]
    },
    computed: {
        todos: function() {
            var todos = []
            for (var i = 0; i < this.things.length; i++) {
                if (this.things[i].hasdone !== true) {
                    todos.push(this.things[i])
                }
            }
            return todos
        },
        dones: function() {
            var dones = []
            for (var i = 0; i < this.things.length; i++) {
                if (this.things[i].hasdone === true) {
                    dones.push(this.things[i])
                }
            }
            return dones
        }
    },
    methods: {
        addNewTodo: function() {
            this.todos.push(this.newTodoText);
            this.newTodoText = '';
        },
        togger: function(item) {
            item.hasdone = !item.hasdone;
        },
        toggerDones: function() {
            this.seen = !this.seen;
        }
    }
})