new Vue({
    el: '#app',
    data: {
        iniciar: true,
        jogador: '100%',
        monstro: '100%',
        jTotal: 100,
        mTotal: 100
    },
    methods: {
        ataque(novo, velho) {
            console.log(novo, velho)
            let j = (Math.random()) * 10
            let m = (Math.random()) * 10
            this.jTotal = this.jTotal - j
            this.mTotal = this.mTotal - m
            this.jogador = `${this.jTotal}%`
            this.monstro = `${this.mTotal}%`
        },
        ataqueEspecial(novo, velho) {
            let j = (Math.random()) * 5
            let m = (Math.random()) * 5
            this.jTotal = this.jTotal - (j - 1)
            this.mTotal = this.mTotal - (m + 1)
            this.jogador = `${this.jTotal - (j - 1)}%`
            this.monstro = `${this.mTotal - (m + 1)}%`
        },
        cura(novo, velho) {
            let j = (Math.random()) * 5
            let m = (Math.random()) * 5
            this.jTotal = this.jTotal + (j - 1)
            this.jTotal = this.jTotal - (j - 1)
            this.jogador = `${this.jTotal + (j - 1)}%`
        }
    },
})