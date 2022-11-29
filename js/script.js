const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            newTodo: "",
        }
    },
    created() {
        axios.get("server.php").then((resp) => {
            this.todoList = resp.data;
        })
    },
    methods: {
        addTodo() {
            const data = {
                newTodo: this.newTodo
            }

            axios.post("server.php", data, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((resp) => {
                this.todoList = resp.data;
                this.newTodo = "";
            })
        },
        changeDone(index) {
            const clickedTodo = this.todoList[index];

            axios.post("server.php", clickedTodo, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((resp) => {
                clickedTodo.done = !clickedTodo.done;
                
            })
        },
        removeTodo(index) {
            const cancelTodo = this.todoList[index];

            axios.post("server.php", cancelTodo, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((resp) => {
                this.todoList.splice(index, 1);
            })
        }
    }
}).mount("#app");