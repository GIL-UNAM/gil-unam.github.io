
const currentUrl = window.location.href;
const siteUrl = "https://gil-unam.github.io";
let updatedUrl = currentUrl.replace("https://gil-unam.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Menú de navegación",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-noticias",
          title: "Noticias",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-proyectos",
          title: "Proyectos",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-información",
          title: "Información",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/us/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Proyectos",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Proyectos",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-servicio-social-y-prácticas-profesionales",
          title: 'Servicio Social y Prácticas Profesionales',
          description: "Aquí podrás acercarte a uno de los principales grupos académicos en México dedicados al estudio del Procesamiento del Lenguaje Natural (PLN), uno de los campos más apasionantes de las ciencias de la computación. Conoce más sobre nuestros programas y las actividades por área.",
          section: "Proyectos",handler: () => {
              window.location.href = "/projects/reg_ss/";
            },},{
        id: 'social-email',
        title: 'Enviar email',
        section: 'Redes Sociales',
        handler: () => {
          window.open("mailto:%67%69%6C@%69%69%6E%67%65%6E.%75%6E%61%6D.%6D%78", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://facebook.com/ingenieriaLinguistica", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://github.com/GIL-UNAM", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://youtube.com/@gil_unam", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://linktr.ee/gil_unam", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Lenguajes',
          handler: () => {
            window.location.href = "/en-us" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambiar al tema claro',
      description: 'Cambiar el sitio web a modo claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambiar al tema oscuro',
      description: 'Cambiar el sitio web a modo oscuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Usa el tema por defecto',
      description: 'Cambiar el sitio web al tema por defecto del sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
