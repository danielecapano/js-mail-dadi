const mailList = [
  "daniele@gmail.com",
  "giuseppe@tiscali.it",
  "francesco@alice.it",
  "pincopallino@mail.com",
  "saretta@virgilio.it",
  "mammina@casa.com",
  "paparino@ufficio.com",
];

const userName = prompt("Inserisci il tuo nome");
const userMail = prompt("Inserisci la tua mail");
let isMailFound = false;

for (let i = 0; i < mailList.length; i++) {
  const validMail = mailList[i];
  if (userMail === validMail) {
    isMailFound = true;
  }
}

if (isMailFound) {
  const userPoint = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(`Punteggio dadi ${userName}: ${userPoint}`);

  const computerPoint = Math.floor(Math.random() * (6 - 1) + 1);
  console.log(`Punteggio dadi PC: ${computerPoint}`);

  if (userPoint > computerPoint) {
    console.log(`Comlimenti ${userName}, hai vinto`);
  } else if (userPoint < computerPoint) {
    console.log(`Mi dispiace ${userName}, hai perso`);
  } else {
    console.log("La partita è finita in parità");
  }
} else {
  console.log("Accesso non consentito, inserire una mail valida");
}
