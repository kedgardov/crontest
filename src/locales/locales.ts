export type LocaleKeys = keyof typeof locales;
export type SupportedLangs = "en" | "es";

export const locales = {
    //navbar
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
    //home
    meta_description: {
        en: "Kevin Trejo project's portfolio",
        es: "Portafolio de proyectos de Kevin Trejo",
    },
    hi_im_kevin: {
        en: "HI, I'm Kevin",
        es: "Hola, soy Kevin",
    },
    full_stack_developer: {
        en: "Full Stack Developer",
        es: "Developer Full Stack",
    },
    my_description: {
        en: "I’m a fullstack developer who thrives on building end-to-end web solutions, handling everything from front-end interfaces to back-end APIs, database design, and server architecture. With experience in Next.js, FastAPI, FlightPHP, Docker, MySQL, Python, Bash, and TailwindCSS, I design and deploy robust, scalable systems, including load balancers (Caddy, Nginx), CI/CD pipelines, automated workflows, and containerized deployments, ensuring reliable production environments.",
        es:"Soy un desarrollador fullstack que disfruta construyendo soluciones web de extremo a extremo, manejando todo, desde las interfaces de front-end hasta las APIs de back-end, el diseño de bases de datos y la arquitectura de servidores. Con experiencia en Next.js, FastAPI, FlightPHP, Docker, MySQL, Python, Bash y TailwindCSS, diseño y despliego sistemas robustos y escalables, incluyendo balanceadores de carga (Caddy, Nginx), pipelines de CI/CD, flujos de trabajo automatizados y despliegues en contenedores, asegurando entornos de producción confiables."
    },
    view_projects: {
        en: "VIEW MY PROJECTS",
        es: "VER MIS PROYECTOS"
    },
    //contact
    message_sent: {
        en: "Message sent!",
        es: "Mensage enviado",
    },
    messate_not_sent: {
        en: "Something went wrong",
        es: "Algo salió mal",
    },
    cta: {
        en: "Leave a Message",
        es: "Deje un Mensaje",
    },
    send_message: {
        en: "Send Message",
        es: "Enviar Mensaje",
    },
}