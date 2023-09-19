let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  cursor: "<span style='color: ##ffd938;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#ffd938;">Desarrollo sitios web y plataformas personalizadas para satisfacer tus necesidades específica')
  .pauseFor(200)
  .deleteChars(10)
  .start();
