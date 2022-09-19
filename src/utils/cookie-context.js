import React, {useState} from "react";
import {Cookies} from "react-cookie-consent";

export const CookieContext = React.createContext(false)

const Provider = props => {
    const [consent, setConsent] = useState(Cookies.get("mirco_poretti_website") === "true");

    return (
        <CookieContext.Provider value={{
            consent,
            setConsent: (value) => setConsent(value)
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

