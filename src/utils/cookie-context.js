import React, {useState} from "react";
import {Cookies} from "react-cookie-consent";

export const CookieContext = React.createContext(false)

const Provider = props => {
    const [consent, setConsent] = useState(Cookies.get("mirco_poretti_blog") === "true");

    return (
        <CookieContext.Provider value={{
            consent,
            setConsent: () => setConsent(!consent)
        }}>
            {props.children}
        </CookieContext.Provider>
    )
};

export default ({ element }) => (
    <Provider>
        {element}
    </Provider>
);

