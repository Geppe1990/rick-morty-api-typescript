export interface IState{
	character: {
		image: string,
		name: string,
		status: string,
		species: string,
		type: string,
		gender: string,
		episode: [],
		location: {
			name: string,
			url: string
		},
		origin: {
			name: string,
			url: string,
		}
	},
	errors: string
}