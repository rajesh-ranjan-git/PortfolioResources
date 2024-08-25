// import favicon1 from "/TitlebarIcons/title_pic_circular.png";
// import favicon2 from "/TitlebarIcons/namaste.png";

export const handleTitle = () => {
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState == "hidden") {
      document.title = "Come back to portfolio";
      // document.getElementsByTagName("link")[0].href = favicon2;
    } else {
      document.title = "Rajesh Ranjan | Software Developer Portfolio";
      // document.getElementsByTagName("link")[0].href = favicon1;
    }
  });
};
