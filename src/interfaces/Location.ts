export interface IState {
	location: {
		name: string,
		type: string,
		dimension: string,
		residents: Array<string>
	},
	errors: string
}