import Head from "next/head";
import "../styles/globals.css";
import { AuthContextProvider } from "../hooks/useAuth";
import LoadingProvider from "../hooks/loadingContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  let CustomLayout = Component?.getLayout || DefaultLayout;
  return (
    <>
      <AuthContextProvider>
        <LoadingProvider>
          <Head>
            <link rel="icon" type="image/png" href="/image.png" />
            <title>Niche Techies</title>
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
