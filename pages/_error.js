import ErrorPage from 'next/error'

async function getInitialProps({ err, res }) {
	const statusCode = err?.statusCode ?? 500

	if (res) {
		res.statusCode = statusCode
	}

	return { err, statusCode }
}

function MyErrorPage({ statusCode }) {
	return <ErrorPage statusCode={statusCode} />
}

MyErrorPage.getInitialProps = getInitialProps

export default MyErrorPage
