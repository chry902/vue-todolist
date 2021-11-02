


/**Rifare l'esercizio della to do list come fatto assieme in classe:
stampare in pagina un item per ogni elemento contenuto in un array
ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista */



const app = new Vue({
    el: `#app`,
    data: {
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