import Head from "next/head";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/antd.css";
import { AuthContextProvider } from "../hooks/useAuth";
import LoadingProvider from "../hooks/loadingContext";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
// import Layout from "../components/layout/Layout";
// import Header from "../components/landin/Header";
import DefaultLayout from "../layouts/DefaultLayout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  let CustomLayout = Component?.getLayout || DefaultLayout;
  return (
    <>
      <AuthContextProvider>
        <LoadingProvider>
          <Head>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <link
              href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            ></link>
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

// const DefaultLayout = ({ children }) => {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <main className="relative mx-auto w-full h-full snap-y scroll-delay">
//       <div className="bg-white shadow-sm sticky left-0 top-0 z-[999]">
//         <Header navOpen={navOpen} setNavOpen={setNavOpen} />
//       </div>
//       <div className="lg:mt-[80px]" onClick={()=>setNavOpen(false)}>{children}</div>
//     </main>
//   );
// };

export default MyApp;
