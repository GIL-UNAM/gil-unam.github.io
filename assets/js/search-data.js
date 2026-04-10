
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
          title: "🕭 Noticias",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-proyectos",
          title: "🖯 Proyectos",
          description: "",
          section: "Menú de navegación",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-︎-información",
          title: "📚︎ Información",
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
        id: 'social-cv',
        title: 'CV',
        section: 'Redes Sociales',
        handler: () => {
          window.open("/assets/pdf/es-mx//assets/pdf/[LANG]/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Enviar email',
        section: 'Redes Sociales',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Redes Sociales',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Redes Sociales',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
