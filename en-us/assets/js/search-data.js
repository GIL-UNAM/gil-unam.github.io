
const currentUrl = window.location.href;
const siteUrl = "https://gil-unam.github.io";
let updatedUrl = currentUrl.replace("https://gil-unam.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("en-us".length > 0) {
  updatedUrl = updatedUrl.replace("/en-us", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/en-us/";
    },
  },{id: "nav-news",
          title: "📅 News",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/news/";
          },
        },{id: "nav-us",
          title: "👾 Us",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/en-us/us/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/en-us/books/the_godfather/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/2_project/";
            },},{id: "projects-servicio-social-y-prácticas-profesionales",
          title: 'Servicio Social y Prácticas Profesionales',
          description: "Aquí podrás acercarte a uno de los principales grupos académicos en México dedicados al estudio del Procesamiento del Lenguaje Natural (PLN), uno de los campos más apasionantes de las ciencias de la computación. Conoce más sobre nuestros programas y las actividades por área.",
          section: "Projects",handler: () => {
              window.location.href = "/en-us/projects/reg_ss/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%69%6C@%69%69%6E%67%65%6E.%75%6E%61%6D.%6D%78", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/ingenieriaLinguistica", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GIL-UNAM", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@gil_unam", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://linktr.ee/gil_unam", "_blank");
        },
      },{
          id: 'lang-es-mx',
          title: 'es-mx',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
