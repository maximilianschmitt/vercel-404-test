import NotFoundError from '../../errors/NotFoundError'

Page.getInitialProps = async function getInitialProps({ query }) {
	if (query.slug === '404') {
		throw new NotFoundError()
	}

	return query
}

export default function Page({ slug }) {
	return <div>Hello page {slug}</div>
}
