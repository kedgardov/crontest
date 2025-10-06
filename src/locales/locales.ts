export type LocaleKeys = keyof typeof locales;
export type SupportedLangs = "en" | "es";

export const locales = {
    home: {
        en:"HOME",
        es:"INICIO",
    },
    projects: {
        en: "PROJECTS",
        es: "PROYECTOS",
    },
    contact: {
        en: "CONTACT",
        es: "CONTACTO",
    },
    about: {
        en: "ABOUT",
        es: "ACERCA",
    },
    meta_description: {
        en: "Kevin Trejo project's portfolio",
        es: "Portafolio de proyectos de Kevin Trejo",
    },
    hi_im_kevin: {
        en: "HI, I'm Kevin",
        es: "Hola, soy Kevin",
    },
}

export function getLocale(): SupportedLangs{
    const n = navigator;
    if ( !n ) {
        return 'en';
    }
    const l = n.language.split('-')[0];
    if ( l === 'es' ) {
        return 'es';
    }
    return 'en';
}