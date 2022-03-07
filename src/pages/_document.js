import Document, {Html, Head, Main, NextScript} from "next/document";

class Doc extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
                    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                </body>
                <NextScript/>
            </Html>
        )
    }
}
export default Doc