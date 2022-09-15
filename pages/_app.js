import Head from "next/head";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthContextProvider } from "../hooks/useAuth";
import LoadingProvider from "../hooks/loadingContext";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/landin/Header";

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
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                duration: 5000,
              }}
            />
            <Component {...pageProps} />
          </CustomLayout>
        </LoadingProvider>
      </AuthContextProvider>
    </>
  );
}

const DefaultLayout = ({ children }) => {
  return (
    <main className="relative mx-auto w-full h-full snap-y scroll-delay">
      <div className="w-full h-fit bg-white shadow-sm sticky left-0 top-0 z-[999]">
        <Header />
      </div>
      <div className="lg:mt-[80px]">{children}</div>
    </main>
  );
};

export default MyApp;
