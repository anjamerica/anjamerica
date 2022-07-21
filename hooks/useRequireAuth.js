import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import { useAuth } from "./useAuth";


// hooks
export const useProtectRouteAuth = () => {
    let auth = useAuth();
    let router = useRouter();
    let [pathName, setPathName] = useState(null);
    
    useEffect(() => {
        setPathName(router.pathname);
        if (["/", "/login"].includes(router.pathname)) {
            return;
        }
        if (!localStorage) return;
        setTimeout(auth?.checkLogedIn, 700)
    }, [router.pathname])

    if (auth?.isAuthenticated === false && !["/"].includes(router.pathname)) {
        return router.push("/login");
    }

    return auth;
}


export const useAuthPageHook = () => {
    let auth = useAuth();
    let [loading, setLoading] = useState(true);
    let router = useRouter();

    function loadingTimer() {
        setTimeout(() => {
            setLoading(false);
        }, 700);
    }

    useEffect(() => {
        if (!localStorage) return;

        loadingTimer();
        auth?.checkLogedIn();
        return () => setLoading(true);
    }, [router.pathname])



    if (auth?.isAuthenticated) {
        return router.push("/home");
    }

    return auth;
}