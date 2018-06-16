import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet()
		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
		const styleTags = sheet.getStyleElement()
		return { ...page, styleTags }
	}

	render () {
		return (
			<html>
			<Head>
				<title>My page</title>
				{this.props.styleTags}
				<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
			</Head>
			<body>
			<Main />
			<NextScript />
			</body>
			</html>
		)
	}
}