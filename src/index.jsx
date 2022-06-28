import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import i18n from 'i18next';
import languageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import FlagIconFactory from 'react-flag-icon-css';

i18n
    .use(initReactI18next)
    .use(languageDetector)
    .use(HttpApi)
    .init({
        fallbackLng: "uz",
        supportedLngs: ["en", "uz", "ru"],
        detection: {
            order: ["cookie", "htmlTag", "localStorage", "subdomain", "path"],
            caches: ["cookie"]
        },
        backend: {
            loadPath: "/Assets/Locales/{{lng}}/translation.json",
        },
        react: { useSuspense: false }
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode >
        <App />
    </React.StrictMode>
);
