class NotFoundError extends Error {
	constructor() {
		super('Not found')
		this.statusCode = 404
	}
}

export default NotFoundError
