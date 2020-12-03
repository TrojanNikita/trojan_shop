import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import '../styles/global.css';
import '../styles/themes.css';
import ThemeProvider from "../utils/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
    return await App.getInitialProps(appContext);
};

export default MyApp;
