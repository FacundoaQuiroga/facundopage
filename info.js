let info = {
  name: "Facundo Quiroga",
  logo_name: "Facu",
  flat_picture: require("./src/assets/dancing.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "¡Hola! Soy Facundo, un desarrollador con dos años de experiencia. Me especializo en tecnologías de desarrollo web, como Laravel, Vue.js, Bootstrap y JavaScript. Me apasiona crear soluciones web elegantes y eficientes, y a través de mi portafolio, espero demostrar mis habilidades y mi dedicación para entregar proyectos de calidad. ¡Gracias por visitar mi portafolio!",
  links: {
    linkedin: "https://www.linkedin.com/in/facundo-quiroga-519341224/",
    github: "https://github.com/FacundoaQuiroga",
    resume: "https://drive.google.com/file/d/1W0pzOo1Gb-W70BYKehOfZ4qaJt7m1_7O/view?usp=sharing",
  },
  education: [
    {
      name: "Centro de Formación Técnica Inacap",
      place: "Puerto Montt, Chile",
      date: "Mar, 2019 - Ago 2021",
      degree: "Tecnico de Nivel Superior Analista Programador",
      gpa: "Titulado",
      description:
        "",
      skills: [
        "Software Engineering",
        "web programming",
        "UI/UX design",
        "Back-end developing",
        
      ]
    },
  ],
  experience: [
    {
      name: "Cabañas Sierrahuacha",
      place: "Futaleufu, Chile",
      date: "1,jul, 2018 - Actualidad",
      position: "web developer",
      description:
        "",
      skills: ["HTML5", "CSS3", "Bootstrap", "Jquery", "Json", "JavaSript", "PHP", "Laravel", "Ajax", "Mysql", "Git", "Eloquent"]
    },
    {
      name: "Practica Analista Programador",
      place: "Futaleufu, Chile",
      date: "ago, 2021 - nov, 2021",
      position: "Junior developer",
      description: "Desarrollo de Intranet utilizando framework Laravel",
      skills: ["Laravel", "Mysql", "PHP", "Javascript", "Git", "Bootstrap", "Jquery", "eloquent", "HTML5", "CSS3"]
    },
    {
      name: "VulcanoPro",
      place: "Santiago, Chile",
      date: "Dic 2021 - Actualidad",
      position: "Backend and Frontend Developer",
      description: "Durante mi año de trabajo en VulcanoPro, fui responsable de desarrollar y mantener el software, que permite la creación, publicación y exhibición de servicios en canales como cometo.cl. El software también permite la creación de servicios con fotos, descripciones, fechas de reserva y temporadas con precios variables. Además, se pueden crear páginas y gestionarlas bajo un dominio propio. ",
      skills: ["Laravel", "Mysql", "PHP", "Javascript", "Git", "Bootstrap", "Jquery", "Vue.js", "HTML5", "CSS3", "Eventos Laravel", "Json"]
    },
  ],
  skills: [
    {
      title: "web technologies",
      info: ["Vue","Node","Laravel","Git","Jquery","Wordpress"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Language",
      info: [
        "PHP","Javascript","Java","C#"],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","Es6","Tailwind CSS"],
      icon: "fa fa-cubes"
    },
    {
      title: "UX/UI Design",
      info: ["Figma", "Photoshop"],
      icon: "fa fa-pencil-square-o"
    },
  ],
  portfolio_design: [
    {
      name: "Keep it Green",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/Keep it green/cover.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/Keep it green/show.png"),
          title: "show"
        },
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Jan, 2022",
      visit: "",
      description:
        ""
    },
    {
      name: "Digital agency website",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/digital agency/1. start.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/2. about.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/3. Our services.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/4. latest project.png"),
          title: "App Elements"
        },
        {
          img: require("./src/assets/designs/digital agency/5. Contact us.png"),
          title: "App Elements"
        },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description:
        ""
    },
    {
      name: "Credit card design",
      title: "Illustration",
      pictures: [
        {
          img: require("./src/assets/designs/credit/degisning.png"),
          title: "Degisning"
        },
        {
          img: require("./src/assets/designs/credit/Dual tune.png"),
          title: "Dual tune"
        },
        {
          img: require("./src/assets/designs/credit/Glassmorphism.png"),
          title: "Glassmorphism"
        },
        {
          img: require("./src/assets/designs/credit/Gradiant.png"),
          title: "Gradiant"
        },
        {
          img: require("./src/assets/designs/credit/Monochrome.png"),
          title: "Monochrome"
        },
        {
          img: require("./src/assets/designs/credit/Neumorphism.png"),
          title: "Neumorphism"
        },
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Dec, 2021",
      visit: "",
      description:
        ""
    },
    {
      name: "BOOKSI",
      title: "E-Book library - UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/booksi/login.png"),
          title: "login"
        },
        {
          img: require("./src/assets/designs/booksi/register.png"),
          title: "register"
        },
        {
          img: require("./src/assets/designs/booksi/home page.png"),
          title: "homepage"
        },
        {
          img: require("./src/assets/designs/booksi/For you.png"),
          title: "just for you"
        }
      ],
      technologies: ["Figma", "Photoshop"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description:
        " BOOKSI is Ebook android app for easy read books."
    },
    {
      name: "Quiet Weather",
      title: "UI/UX Design",
      pictures: [
        {
          img: require("./src/assets/designs/weather/Wooden Hand iPhone 12 Pro.png"),
          title: "MoodBoard"
        },
        {
          img: require("./src/assets/designs/weather/artboard.png"),
          title: "show"
        },
        {
          img: require("./src/assets/designs/weather/weather app react native.png"),
          title: "components"
        },
      ],
      technologies: ["Figma", "Illustration"],
      category: "Visual Design",
      github: "",
      date: "Nov, 2021",
      visit: "",
      description:
        "Quiet Weather is a react native app by openweathermap api, i designed the ui/ux and coding it in react native, enjoy it!"
    },
    {
      name: "Pill Reminder",
      title: "Pill Reminder - Mockup Design",
      pictures: [
        {
          img: require("./src/assets/designs/pill reminder/Web 1.png"),
          title: "Moodboard"
        },
        {
          img: require("./src/assets/designs/pill reminder/1.png"),
          title: "Mockups 1"
        },
        {
          img: require("./src/assets/designs/pill reminder/2.png"),
          title: "Mockups 2"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Visual Design",
      github: "",
      date: "Apr, 2021",
      visit: "",
      description:
        "pill reminder app for nessecary drugs for the day."
    },
  ],
  portfolio: [
    {
      name: "Cabañas Sierrahuacha",
      pictures: [
        {
          img: require("./src/assets/portfolio/sierrahuacha/home.png")
        },
        {
          img: require("./src/assets/portfolio/sierrahuacha/contact.png")
        },
        {
          img: require("./src/assets/portfolio/sierrahuacha/location.png")
        },
        {
          img: require("./src/assets/portfolio/sierrahuacha/galery.png")
        },
      ],
      technologies: ["HTML5", "CSS3", "Bootstrap", "Jquery", "Json", "Javascript", "PHP", "Laravel", "Ajax", "Mysql", "Git", "Eloquent"],
      category: "Web App",
      date: "Ago, 2018 - Actualidad",
      github:
        "https://github.com/FacundoaQuiroga",
      visit: "https://www.sierrahuacha.cl/",
      description:
        " Sitio web de cabañas en Chile. Ofrece alojamiento rodeado de naturaleza, actividades al aire libre y tranquilidad. "
    },
    {
      name: "Venta de propiedades Victor",
      pictures: [
        {
          img: require("./src/assets/portfolio/online examination/exam (1).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (2).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (3).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (4).png")
        },
        {
          img: require("./src/assets/portfolio/online examination/exam (5).png")
        }
      ],
      technologies: ["HTML", "CSS","JavaSript","JQuery", "PHP", "MySQL"],
      category: "Web App",
      date: "Dic, 2022 - Actualidad",
      github: "https://github.com/FacundoaQuiroga",
      visit: "VictorPropiedadesAR.com",
      description:
        "un sitio WordPress de bienes raíces en Comodoro Rivadavia, Argentina, dirigido por Victor Massenlli. Ofrece propiedades en venta y alquiler, con búsqueda fácil e información detallada."
    },
    // {
    //   name: "MyFlix.com",
    //   pictures: [
    //     {
    //       img: require("./src/assets/portfolio/myflix.com/1.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/myflix.com/2.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/myflix.com/3.png")
    //     },
    //     {
    //       img: require("./src/assets/portfolio/myflix.com/4.png")
    //     },
    //   ],
    //   technologies: ["react", "css", "TMDB"],
    //   category: "Web App",
    //   date: "Aug, 2021 - 10 days",
    //   github:
    //     "https://github.com/mahy209/MyFlix-react-app.git",
    //   visit: "https://github.com/mahy209/MyFlix-react-app.git",
    //   description:
    //     " flix.com is a netflix clone using React JS and TMDB with courusal and search engine. "
    // },
  ],
};

export default info;
