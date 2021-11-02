


/**Rifare l'esercizio della to do list come fatto assieme in classe:
stampare in pagina un item per ogni elemento contenuto in un array
ogni item ha una "x" associata: cliccando su di essa, l'item viene 
rimosso dalla lista
predisporre un input per aggiungere un nuovo item alla lista: digitando 
il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista */



const app = new Vue({
    el: `#app`,
    data: {
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcOlzUYGV7KlCyvQ7qIjuQMsaK-s5LObEkzGO0lh5lqwEQKjITE_NqB_cyUtU0at5cw&usqp=CAU`,
        //nuva task
        newTask: ``,
        tasks: [
            `andare a lavoro`,
            `andare in palestra`,
            `imparare vuejs`,
        ],
        error: false,
    },
    methods: {
        //rimuovi la task 
        removeTask(i) {
            this.tasks.splice(i, 1)
        },
        addTask() {
            if (this.newTask != `` && this.newTask.length > 5) {
                this.tasks.push(this.newTask)
                this.error = false
            } else {
                this.error = true;
            }
            this.newTask = ``
        }
    }
})