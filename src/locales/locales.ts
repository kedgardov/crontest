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
    me_alt: {
        en: "me",
        es: "yo",
    },
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
        es: "Full Stack Developer",
    },
    my_description: {
        en: "Five years experience with Next.js, FastAPI, FlightPHP, Docker, SQL, OpenAPI, Typescript, Python, PHP, GO, Bash, TailwindCss, CI/CD, Caddy, Git, UI/UX, Linux",
        es: "Cinco años de experiencia en Next.js, FastAPI, FlightPHP, Docker, SQL, OpenAPI, Typescript, Python, PHP, GO, Bash, TailwindCss, CI/CD, Caddy, Git, UI/UX, Linux"        
    },
    view_projects: {
        en: "VIEW PROJECTS",
        es: "VER PROYECTOS"
    },
    //contact
    kevin_trejo: {
        en: "Kevin Trejo",
        es: "Kevin Trejo",
    },
    my_email: {
        en: "kevintrejo4b@gmail.com",
        es: "kevintrejo4b@gmail.com"
    },
    message_sent: {
        en: "Message sent!",
        es: "Mensaje enviado",
    },
    message_not_sent: {
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
    name: {
        en: "Name",
        es: "Nombre",
    },
    email: {
        en: "Email",
        es: "Email",
    },
    message: {
        en: "Write your message",
        es: "Escriba su mensaje",
    },
    //about
    education: {
        en: "Education",
        es: "Educación",
    },
    college: {
        en: "College",
        es: "Universidad",
    },
    uach: {
        en: "UACH - Chihuahua",
        es: "UACH - Chihuahua"
    },
    nmsu: {
        en: "NMSU - New Mexico",
        es: "NMSU - New Mexico",
    },
    degrees: {
        en: "Degrees",
        es: "Títulos",
    },
    ae_eng: {
        en: "Aerospace Engineering",
        es: "Ingeniería Aeroespacial"
    },
    m_eng: {
        en: "Mechanical Engineering",
        es: "Ingeniería Mecánica",
    },
    hobbies: {
        en: "Hobbies",
        es: "Pasatiempos",
    },
    hiking: {
        en: "Hiking",
        es: "Senderismo",
    },
    chess: {
        en: "Chess",
        es: "Ajedrez",
    },
    basketball: {
        en: "Basketball",
        es: "Básquetbol",
    },
    mountain_biking: {
        en: "Mountain Biking",
        es: "Ciclismo de Montaña",
    },
    math_challenges: {
        en: "Math Challenges",
        es: "Desafíos Matemáticos",
    },
    skills: {
        en: "Skills",
        es: "Habilidades",
    },
    technologies: {
        en: "Technologies",
        es: "Tecnologías",
    },
    techs: {
        en: "Next.js, FastAPI, FlightPHP, SQL, OpenAPI, Docker, Git, Linux",
        es: "Next.js, FastAPI, FlightPHP, SQL, OpenAPI, Docker, Git, Linux",
    },
    languages: {
        en: "Languages",
        es: "Lenguajes",
    },
    langs: {
        en: "Spanish, English, Typescript, Python, PHP, Go, Bash",
        es: "Spanish, English, Typescript, Python, PHP, Go, Bash",
    },
    nmsu_alt: {
        en: "nmsu",
        es: "nmsu",
    },
    hobby_alt: {
        en: "my_hobby",
        es: "mi_pasatiempo",
    },
    skills_alt: {
        en: "my_youtube",
        es: "mi_youtube",
    },
    //projects
    work_experience: {
        en: "Work Experience",
        es: "Experiencia Laboral",
    },
    techs_label: {
        en: "Techs:",
        es: "Tecnologías:",
    },
    langs_label: {
        en: "Langs:",
        es: "Lenguajes:",
    },
    sofia_title: {
        en: "SOFIA",
        es: "SOFIA",
    },
    sofia_desc: {
        en: "CIAD’s Academic Intelligence Platform designed to support curriculum design, thesis tracking and analysis, research trend mapping, and the center’s alignment with Mexico’s strategic development programs.",
        es: "Plataforma de Inteligencia Académica del CIAD diseñada para apoyar el diseño curricular, el seguimiento y análisis de tesis, el mapeo de tendencias de investigación y la alineación del centro con los programas estratégicos de desarrollo de México.",
    },
    sofia_techs: {
        en: "Next.js, FastAPI, FlightPHP, OpenAPI, Docker, OAuth 2.0, Linux, Git",
        es: "Next.js, FastAPI, FlightPHP, OpenAPI, Docker, OAuth 2.0, Linux, Git",
    },
    sofia_langs: {
        en: "Typescript, Python, PHP, Bash",
        es: "Typescript, Python, PHP, Bash",
    },
    sofia_alt: {
        en: "Screenshot of SOFIA platform",
        es: "Captura de la plataforma SOFIA",
    },
    cryptobot_title: {
        en: "CRYPTO BOT",
        es: "CRYPTO BOT",
    },
    cryptobot_desc: {
        en: "A 24/7 cryptocurrency monitoring and trading system. Cryptobot calculates real-time market indicators, evaluates trading strategies, and issues automated buy/sell signals. It adapts to market trends, optimizing decision-making and portfolio performance.",
        es: "Sistema 24/7 de monitoreo y trading de criptomonedas. Calcula indicadores en tiempo real, evalúa estrategias y emite señales automáticas de compra/venta. Se adapta a las tendencias del mercado optimizando decisiones y rendimiento del portafolio.",
    },
    cryptobot_techs: {
        en: "Next.js, OpenAPI, Gin, WebSockets, Docker, Linux, Git",
        es: "Next.js, OpenAPI, Gin, WebSockets, Docker, Linux, Git",
    },
        cryptobot_langs: {
        en: "Typescript, Go, Bash",
        es: "Typescript, Go, Bash",
    },
    cryptobot_alt: {
        en: "Dashboard of the crypto trading bot",
        es: "Panel del bot de trading cripto",
    },
    cpa_title: {
        en: "CPA REPORTS",
        es: "REPORTES CPA",
    },
        cpa_desc: {
        en: "The CIAD analytics platform for alumni and faculty insights. CPA Reports automates the generation of key institutional metrics including graduate outcomes, dropout rates, faculty activity, course popularity, and research. Designed for administrative efficiency, it enables staff to create customized reports that integrate seamlessly into existing workflows.",
        es: "Plataforma analítica del CIAD para información de egresados y docentes. Automatiza métricas clave como resultados de egreso, deserción, actividad docente, popularidad de cursos e investigación. Diseñada para la eficiencia administrativa, permite crear reportes personalizados que se integran fácilmente al flujo de trabajo.",
    },
    cpa_techs: {
        en: "Next.js, OpenAPI, Docker, Linux, Git",
        es: "Next.js, OpenAPI, Docker, Linux, Git",
    },
    cpa_langs: {
        en: "Typescript, Bash",
        es: "Typescript, Bash",
    },
    cpa_alt: {
        en: "CPA Reports analytics dashboards",
        es: "Tableros analíticos de Reportes CPA",
    },
    maria_title: {
        en: "MARIA",
        es: "MARIA",
    },
    maria_desc: {
        en: "CIAD’s intelligent assistant for curriculum modernization. Built on ChatGPT, MARIA supports teachers in course design by aligning content with XXI-century competencies and objectives. It tracks instructional theory, assists in drafting theoretical frameworks for new courses, and refines syllabi. The system integrates securely with SOFIA via OAuth 2.0 to retrieve course data automatically.",
        es: "Asistente inteligente del CIAD para la modernización curricular. Basada en ChatGPT, MARIA apoya el diseño de cursos alineando el contenido con competencias y objetivos del siglo XXI. Supervisa la teoría instruccional, ayuda a redactar marcos teóricos y refina programas. Se integra de forma segura con SOFIA mediante OAuth 2.0 para obtener datos automáticamente.",
    },
    maria_techs: {
        en: "OpenAPI, OAuth 2.0",
        es: "OpenAPI, OAuth 2.0",
    },
    maria_langs: {
        en: "JSON format",
        es: "Formato JSON",
    },
    maria_alt: {
        en: "MARIA assistant interface",
        es: "Interfaz del asistente MARIA",
    },
}