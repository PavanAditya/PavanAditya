
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
let sessionId = "";

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal() {
  await delay(200);
  createText("MSP's Terminal welcomes you 😁");
  createText("This is a terminal version of Pavan Aditya's profile.");
  createText("For a detailed portfolio, you can visit: <a href='https://profile.pavanaditya.com' target='_blank'>profile.pavanaditya.com</a>");
  createText("");
  await delay(700);
  createSpan("Creating a Session");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  await delay(600);
  createSpan(".");
  let ip = {};
  let response = {};
  if (localStorage.getItem('ip') === null) {
    response = await fetch(`https://ipinfo.io?token=6744bd6f45089d`, function (data) {
      return data;
    });
    ip = await response.json();
    localStorage.setItem('ip', JSON.stringify(ip));
  } else {
    response = { status: 200 };
    ip = JSON.parse(localStorage.getItem('ip'));
  }
  if (response.status === 200) {
    console.log(ip);
    sessionId = `${ip.loc.split(",")[0]}.${ip.loc.split(",")[1]}.${Math.floor(100 + Math.random() * 900)}`;
    createText(`Session Created. Your IP is: <span class="ip">${ip.ip}</span><br/> Session ID is: <span class="ip">${sessionId}</span>`);
  } else {
    sessionId = `${Math.floor(1000 + Math.random() * 9000)}.89.${Math.floor(1000 + Math.random() * 9000)}.686`;
    createText(`Session Created. Your Session ID is: ${sessionId}`);
  }
  await delay(1500);

  createText("You can run several commands:");
  createText(`<span class="help-command">help</span> ~ <span style="font-size: 13px">See all commands.</span>`);
  createText(`<span class="help-command">about me</span> ~ <span style="font-size: 13px">Who am i and what do i do.</span>`);
  createText(`<span class="help-command">social -a</span> ~ <span style="font-size: 13px">Get my social network profiles.</span>`);

  await delay(500);
  new_line();
}


function new_line() {

  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/pavanaditya-ms";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();

}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {

  const value = document.querySelector("input").value;
  if (value === "help") {
    trueValue(value);
    createText(`<span class="help-command">projects</span> ~ <span style="font-size: 13px">My reputed projects and their links. ;)</span>`);
    createText(`<span class="help-command">about me</span> ~ <span style="font-size: 13px">Who am i and what do i do.</span>`);
    createText(`<span class="help-command">social -a</span> ~ <span style="font-size: 13px">All my social networks profiles.</span>`);
    createText(`<span class="help-command">social -{any}</span> ~ <span style="font-size: 13px">Mention one from [fb, instagram, github, linkedin]. Ex: social -fb</span>`);
    createText(`<span class="help-command">contact</span> ~ <span style="font-size: 13px">To get my contact details.</span>`);
    createText(`<span class="help-command">cls</span> ~ <span style="font-size: 13px">Clean the terminal.</span>`);
    createText(`<span class="help-command">exit</span> ~ <span style="font-size: 13px">Exit the terminal.</span>`);
  } else if (value === "projects") {
    // ? Command >> "projects"
    trueValue(value);
    createText(`Some of my awesome personal projects:`);
    createText("MEAN Project - <a href='https://sellmobiles.pavanaditya.com' target='_blank'>sellmobiles.pavanaditya.com</a>");
    createText("MERN Project - <a href='https://packurbags.pavanaditya.com' target='_blank'>packurbags.pavanaditya.com</a>");
    createText("Vue Js App - <a href='https://getmyweather.pavanaditya.com' target='_blank'>getmyweather.pavanaditya.com</a>");
    createText("Plain HTML/CSS - <a href='https://perspective.pavanaditya.com' target='_blank'>perspective.pavanaditya.com</a>");
    createText("React-Native App - <a href='https://play.google.com/store/apps/details?id=com.msppeekaboo&hl=en&gl=US' target='_blank'>Google Playstore | Peek-A-Boo</a>");
    createText(`Get more at:`);
    createText("<a href='https://profile.pavanaditya.com/projects.html' target='_blank'><i class='fab-icons fa fa-user white'></i>profile.pavanaditya.com</a>");
    createText("<a href='https://github.com/PavanAditya' target='_blank'><i class='fab-icons fab fa-github white'></i>github.com/PavanAditya</a>");
  } else if (value === "about me") {
    // ? Command >> "about me"
    trueValue(value);
    createText(`Hi, I am <span class="coral">Pavan Aditya M S</span>. I am a Full Stack Developer.`);
    createText(`I work at <span style="font-size: 18px">Amazon<i class='fab-icons fab fa-amazon orange'></i></span>`);
    createText(`I'm a well trained Javascript Fullstack developer.<br/> Experienced using stacks like<br/> <span class='blue' style="font-size: 15px">M.E.A.N ~ MongoDB ExpressJs Angular Node </span><br/> <span class='blue' style="font-size: 15px">M.E.R.N ~ MongoDB ExpressJs React Node </span>`);
    createText("For more details, you can visit: <a href='https://profile.pavanaditya.com' target='_blank'><i class='fab-icons fa fa-user white'></i>profile.pavanaditya.com</a>");
  } else if (value === "social -a") {
    // ? Command >> "social -a"
    trueValue(value);
    createText("<a href='https://github.com/PavanAditya' target='_blank'><i class='fab-icons fab fa-github white'></i>github.com/PavanAditya</a>");
    createText("<a href='https://www.linkedin.com/in/pavanaditya-ms/' target='_blank'><i class='fab-icons fab fa-linkedin-in white'></i>linkedin.com/in/pavanaditya-ms</a>");
    createText("<a href='https://www.facebook.com/pavanaditya.ms/' target='_blank'><i class='fab-icons fab fa-facebook-square white'></i>facebook.com/pavanaditya.ms</a>");
    createText("<a href='https://www.instagram.com/pavan_aditya/' target='_blank'><i class='fab-icons fab fa-instagram white'></i>instagram.com/pavan_aditya</a>");
    createText("<a href='https://twitter.com/ms_pavanaditya' target='_blank'><i class='fab-icons fab fa-twitter white'></i>twitter.com/ms_pavanaditya</a>");
  } else if (value === "social -github") {
    // ? Command >> "social -github"
    trueValue(value);
    createText("<a href='https://github.com/PavanAditya' target='_blank'><i class='fab-icons fab fa-github white'></i>github.com/PavanAditya</a>");
  } else if (value === "social -linkedin") {
    // ? Command >> "social -linkedin"
    trueValue(value);
    createText("<a href='https://www.linkedin.com/in/pavanaditya-ms/' target='_blank'><i class='fab-icons fab fa-linkedin-in white'></i>linkedin.com/in/pavanaditya-ms</a>");
  } else if (value === "social -fb") {
    // ? Command >> "social -fb"
    trueValue(value);
    createText("<a href='https://www.facebook.com/pavanaditya.ms/' target='_blank'><i class='fab-icons fab fa-facebook-square white'></i>facebook.com/pavanaditya.ms</a>");
  } else if (value === "social -instagram") {
    // ? Command >> "social -instagram"
    trueValue(value);
    createText("<a href='https://www.instagram.com/pavan_aditya/' target='_blank'><i class='fab-icons fab fa-instagram white'></i>instagram.com/pavan_aditya</a>");
  } else if (value === "social -twitter") {
    // ? Command >> "social -twitter"
    trueValue(value);
    createText("<a href='https://twitter.com/ms_pavanaditya' target='_blank'><i class='fab-icons fab fa-twitter white'></i>twitter.com/ms_pavanaditya</a>");
  } else if (value.startsWith("social")) {
    // ? Command >> "social""
    trueValue(value);
    createText("Didn't you mean: social -a? If not mention the particular. Ex: social -github")
  } else if (value === "cls") {
    // ? Command >> "cls"
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("span").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  } else if (value === "portfolio") {
    // ? Command >> "portfolio"
    trueValue(value);
    createText("<a href='https://profile.pavanaditya.com' target='_blank'><i class='fab-icons fa fa-user white'></i>profile.pavanaditya.com</a>");
  } else if (value === "contact") {
    // ? Command >> "contact"
    trueValue(value);
    createText("Call me at: <a href='tel:+917386557597' target='_blank'>+91 738-6557-597</a>");
    createText("Mail me at: <a href='mailto:pavanaditya.ms@gmail.com' target='_blank'>pavanaditya.ms@gmail.com</a>");
  } else if (value === "exit") {
    // ? Command >> "exit"
    await delay(600);
    createSpan("Ending the Session", sessionId);
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(600);
    createSpan(".");
    await delay(800);
    createSpan(".");
    await delay(800);
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("span").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    createText(`Session Ended.`);
    createText(`Thank you for using this terminal 😊`);
    createText(`Pls do Comeback or just reload now itself to interact with me again. Bye! 👋`);
    removeInput();
  } else {
    falseValue(value);
    createText(`Command not found: <span class="help-command">${value}</span>`);
    createText(`As this is a terminal, commands are case sensitive and should only be written in lowercase. Please try again.`);
    createText(`Try typing <span class="help-command">help</span> to see the list of commands.`);
  }
}

function trueValue(value) {

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.setAttribute("class", (text.includes("<a")) ? "link" : "");
  p.innerHTML = text;
  app.appendChild(p);
}

function createSpan(text, classname) {
  const span = document.createElement("span");

  span.innerHTML = text;
  app.appendChild(span);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
    `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();