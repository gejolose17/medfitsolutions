const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.specialists": "Especialistas",
    "nav.contact": "Contacto",

    "hero.tag": "Atención de excelencia 24/7",
    "hero.title": "Innovación médica para cuidar lo más importante: tu salud",
    "hero.subtitle": "Diagnóstico avanzado, especialistas certificados y trato humano en un solo lugar.",
    "hero.cta1": "Agendar cita",
    "hero.cta2": "Ver servicios",
    "hero.cardTitle": "¿Necesitas atención inmediata?",
    "hero.cardText": "Nuestro equipo está disponible para emergencias y consultas prioritarias.",
    "hero.cardBtn": "Contactar ahora",

    "services.title": "Nuestros servicios",
    "services.card1.title": "Exámenes físicos adaptados a las necesidades de tu lugar de trabajo",
    "services.card1.text": "Exámenes ocupacionales personalizados por industria y puesto para mantener seguridad, cumplimiento y personal apto para laborar.",
    "services.card2.title": "Exámenes físicos DOT",
    "services.card2.text": "Evaluaciones DOT con examinador certificado para verificar visión, audición, presión arterial y condición general según FMCSA.",
    "services.card3.title": "Pruebas de drogas (DOT y No-DOT: paneles 5, 8 y 10)",
    "services.card3.text": "Pruebas de drogas DOT y No-DOT (paneles 5, 8 y 10) para procesos pre-empleo, aleatorios, post-accidente y retorno.",
    "services.card4.title": "Pruebas instantáneas de drogas",
    "services.card4.text": "Resultados rápidos en sitio con pruebas de orina; no negativos pueden confirmarse en laboratorio certificado.",
    "services.card5.title": "Pruebas de alcohol en aliento (DOT y No-DOT)",
    "services.card5.text": "Pruebas de alcohol en aliento con equipos aprobados para escenarios pre-empleo, aleatorios y post-accidente.",

    "specialists.title": "Equipo de especialistas",
    "specialists.subtitle": "Profesionales con experiencia internacional comprometidos con tu bienestar.",

    "contact.title": "Contáctenos",
    "contact.address.line1": "6990 NO 37.ª AVE",
    "contact.address.line2": "Miami, Florida 33147",
    "contact.email": "Admin@medfitmiami.com",
    "contact.schedule.weekday": "Lunes a viernes de 7:30 a 17:00 horas",
    "contact.schedule.saturday": "Sábado cerrado",
    "contact.schedule.sunday": "Domingo cerrado",
    "contact.mapBtn": "Abrir en Google Maps",

    "chat.toggle": "Chat",
    "chat.title": "Asistente Virtual",
    "chat.welcome": "¡Hola! ¿Cómo podemos ayudarte hoy?",
    "chat.q.hours": "Horarios",
    "chat.q.location": "Ubicación",
    "chat.q.appointment": "Cita",
    "chat.input": "Escribe tu pregunta...",
    "chat.send": "Enviar",

    "form.name": "Nombre completo",
    "form.email": "Correo electrónico",
    "form.message": "Cuéntanos tu necesidad",
    "form.submit": "Enviar",

    "footer.copy": "© 2026 MedNova Medical Center. Todos los derechos reservados."
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.specialists": "Specialists",
    "nav.contact": "Contact",

    "hero.tag": "Excellence in care 24/7",
    "hero.title": "Medical innovation to protect what matters most: your health",
    "hero.subtitle": "Advanced diagnostics, certified specialists, and compassionate care in one place.",
    "hero.cta1": "Book appointment",
    "hero.cta2": "View services",
    "hero.cardTitle": "Need immediate care?",
    "hero.cardText": "Our team is available for emergencies and priority consultations.",
    "hero.cardBtn": "Contact now",

    "services.title": "Our services",
    "services.card1.title": "Physicals Tailored to Your Workplace Needs",
    "services.card1.text": "Custom workplace physicals by role and industry to support safety, compliance, and fit-for-duty decisions.",
    "services.card2.title": "DOT Physicals",
    "services.card2.text": "Certified DOT exams that assess vision, hearing, blood pressure, and overall health per FMCSA standards.",
    "services.card3.title": "Drug Test (DOT & Non-DOT: 5, 8 & 10 Panel)",
    "services.card3.text": "DOT and Non-DOT urine drug testing for pre-employment, random, post-accident, and return-to-duty programs.",
    "services.card4.title": "Instant Drug Testing",
    "services.card4.text": "Fast on-site screening with optional certified lab confirmation for non-negative results when required.",
    "services.card5.title": "DOT & Breath Alcohol Testing",
    "services.card5.text": "Accurate breath alcohol testing with approved devices for pre-employment, random, and post-accident cases.",

    "specialists.title": "Specialist team",
    "specialists.subtitle": "Professionals with international experience committed to your well-being.",

    "contact.title": "Contact us",
    "contact.address.line1": "6990 NW 37th Ave",
    "contact.address.line2": "Miami, Florida 33147",
    "contact.email": "Admin@medfitmiami.com",
    "contact.schedule.weekday": "Monday to Friday from 7:30 AM to 5:00 PM",
    "contact.schedule.saturday": "Saturday closed",
    "contact.schedule.sunday": "Sunday closed",
    "contact.mapBtn": "Open in Google Maps",

    "chat.toggle": "Chat",
    "chat.title": "Virtual Assistant",
    "chat.welcome": "Hello! How can we help you today?",
    "chat.q.hours": "Hours",
    "chat.q.location": "Location",
    "chat.q.appointment": "Appointment",
    "chat.input": "Type your question...",
    "chat.send": "Send",

    "form.name": "Full name",
    "form.email": "Email address",
    "form.message": "Tell us your needs",
    "form.submit": "Send",

    "footer.copy": "© 2026 MedNova Medical Center. All rights reserved."
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const i18nElements = document.querySelectorAll("[data-i18n]");
const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

let currentLang = "es";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  i18nElements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  i18nPlaceholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  langButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => menu.classList.remove("open"));
});

const chatToggle = document.getElementById("chatToggle");
const chatWidget = document.getElementById("chatWidget");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");
const quickButtons = document.querySelectorAll(".chat-quick");

const botReplies = {
  en: {
    hours: "We are open Monday to Friday from 7:30 AM to 5:00 PM. Saturday and Sunday closed.",
    location: "We are located at 6990 NW 37th Ave, Miami, Florida 33147.",
    appointment: "You can request an appointment from the contact form or email us at Admin@medfitmiami.com.",
    default: "Thanks for your message. Our team will contact you shortly."
  },
  es: {
    hours: "Estamos abiertos de lunes a viernes de 7:30 AM a 5:00 PM. Sábado y domingo cerrado.",
    location: "Estamos ubicados en 6990 NW 37th Ave, Miami, Florida 33147.",
    appointment: "Puedes solicitar una cita en el formulario de contacto o escribir a Admin@medfitmiami.com.",
    default: "Gracias por tu mensaje. Nuestro equipo te contactará pronto."
  }
};

function addMessage(text, sender = "bot") {
  const bubble = document.createElement("div");
  bubble.className = sender === "user" ? "chat-user" : "chat-bot";
  bubble.textContent = text;
  if (chatMessages) {
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function getReply(input) {
  const text = input.toLowerCase();
  if (text.includes("hour") || text.includes("horario")) return botReplies[currentLang].hours;
  if (text.includes("locat") || text.includes("dirección") || text.includes("direccion") || text.includes("map")) return botReplies[currentLang].location;
  if (text.includes("appoint") || text.includes("cita")) return botReplies[currentLang].appointment;
  return botReplies[currentLang].default;
}

if (chatToggle && chatWidget && chatClose && chatMessages && chatInput && chatSend) {
  chatToggle.addEventListener("click", () => chatWidget.classList.toggle("open"));
  chatClose.addEventListener("click", () => chatWidget.classList.remove("open"));

  chatSend.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (!message) return;
    addMessage(message, "user");
    addMessage(getReply(message), "bot");
    chatInput.value = "";
  });

  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      chatSend.click();
    }
  });

  quickButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.question;
      addMessage(btn.textContent, "user");
      addMessage(botReplies[currentLang][key] || botReplies[currentLang].default, "bot");
    });
  });
}

setLanguage("en");
