const { createApp } = Vue

createApp({
	data() {
		return {
			mail: 'Genera nuova mail',
			mails: [],
		}
	},
	methods: {
		fetchMail() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					// res  = risposta del resrver
					// res.data = dati contenuti nella risposta
					console.log(res.data.response)
					this.mails.push(res.data.response)
				})
		},
	},
	mounted() {
		for (let i = 0; i < 10; i++) {
			this.fetchMail()
		}
	},
}).mount('#app')
