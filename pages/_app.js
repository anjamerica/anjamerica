import Head from "next/head";
import "../styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContextProvider } from "../hooks/useAuth";
import LoadingProvider from "../hooks/loadingContext";
import { Toaster } from "react-hot-toast";
import {useEffect} from "react"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  let CustomLayout = Component?.getLayout || DefaultLayout;
  return (
    <>
      <AuthContextProvider>
        <LoadingProvider>
          <Head>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <title>Anj America</title>
          </Head>
          <CustomLayout>
            <Toaster position="top-center" reverseOrder={false} />
            <Component {...pageProps} />
          </CustomLayout>
        </LoadingProvider>
      </AuthContextProvider>
    </>
  );
}

const DefaultLayout = ({ children }) => {
  return <>{children}</>;
};

export default MyApp;
