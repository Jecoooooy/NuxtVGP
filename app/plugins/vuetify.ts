import { createVuetify } from 'vuetify'
import * as labs from 'vuetify/labs/components'
import 'vuetify/styles'
// Use this if you want only icons used by Vuetify components internally should be imported
// import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components: { ...labs },
		ssr: true,
		theme: {
			defaultTheme: 'light',
			themes: {
				light: {
					colors: {
						primary: '#607D8B',
						secondary: '#90A4AE',
						accent: '#FFAB91',
						background: '#F5F7FA',
						surface: '#FFFFFF',
						error: '#FF5252',
						info: '#2196F3',
						success: '#4CAF50',
						warning: '#FFC107',
					},
				},
				dark: {
					colors: {
						primary: '#78909C',
						secondary: '#B0BEC5',
						accent: '#FF8A65',
						background: '#263238',
						surface: '#37474F',
						error: '#FF8A80',
						info: '#64B5F6',
						success: '#81C784',
						warning: '#FFD54F',
					},
				},
			},
		},
	})

	nuxtApp.vueApp.use(vuetify)
})
