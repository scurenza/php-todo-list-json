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
        // changeDone(index) {
        //     const clickedTodo = this.todoList[index];

        //     axios.post("server.php", clickedTodo, {
        //         headers: { "Content-Type": "multipart/form-data" }
        //     })
        //     .then((resp) => {
        //         clickedTodo.done = !clickedTodo.done;
        //         console.log(clickedTodo.done);
        //         console.log(resp.data[index]);
                
        //     })
        // },
        changeDone(index) {
            const data = {
                clickedTodo: index
            }

            axios.post("server.php", data, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            .then((resp) => {
                this.todoList = resp.data;
            })
        },
        removeTodo(index) {
            // const data = {
            //     cancelTodo: index
            // }

            // axios.post("server.php", data, {
            //     headers: { "Content-Type": "multipart/form-data" }
            // })
            // .then((resp) => {
            //     this.todoList = resp.data;
            // })
            const data = new FormData();
            data.append("cancelTodo", index);
            axios.post("server.php", data).then((resp) => {
                this.todoList = resp.data;
            })
        }
    }
}).mount("#app");