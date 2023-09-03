var IMAGE_PATH = "./images/";

var MAX_ANSWERS = 4;
var APP_NAME = "Runas Guessr"
var CONFIG = [
    {
        "Name": "Fehu",
        "Value": 1,
        "Image": "01-Fehu.png",
        "Response": "Bienestar, dinero, pérdidas",
        "Description": "La runa Fehu representa la dualidad del ganado, simbolizando riqueza y bienestar, pero también espiritualidad débil. Su imagen de cabeza de vaca refleja la fertilidad y el honor, pero también la servidumbre y torpeza."
    },
    {
        "Name": "Uruz",
        "Value": 2,
        "Image": "02-Uruz.png",
        "Response": "Fuerza, salud, enfermedad",
        "Description": "Uruz marca transformación y nueva etapa, aunque los cambios pueden ser difíciles de aceptar. Simboliza fuerza, salud y un necesario reinventarse."
    },
    {
        "Name": "Thurisaz",
        "Value": 3,
        "Image": "03-Thurisaz.png",
        "Response": "Dolor, lucha, regeneración",
        "Description": "Thurisaz, con su forma de diente afilado, representa dolor y lucha, pero también regeneración y polaridad entre vida y muerte."
    },
    {
        "Name": "Ansuz",
        "Value": 4,
        "Image": "04-Ansuz.png",
        "Response": "Sabiduría, renovación, palabra",
        "Description": "Ansuz simboliza sabiduría, transmisión de mensajes y renovación. Invita al cambio y a tomar nuevos caminos."
    },
    {
        "Name": "Raido",
        "Value": 5,
        "Image": "05-Raido.png",
        "Response": "Viaje, cambios, proceso",
        "Description": "La runa Raido representa viaje, lucha y procesos de cambio y transformación en la vida."
    },
    {
        "Name": "Kano",
        "Value": 6,
        "Image": "06-Kano.png",
        "Response": "Conocimiento, guía, renovación",
        "Description": "Kano se relaciona con el conocimiento, la guía y la renovación. También indica entendimiento entre personas."
    },
    {
        "Name": "Gebo",
        "Value": 7,
        "Image": "07-Gebo.png",
        "Response": "Unión, alianzas, éxito",
        "Description": "Gebo simboliza la unión y alianzas, anuncia éxito y prosperidad en tiempos venideros."
    },
    {
        "Name": "Wunjo",
        "Value": 8,
        "Image": "08-Wunjo.png",
        "Response": "Conquista, éxito, realización",
        "Description": "Wunjo es la runa del éxito y la conquista después de superar desafíos y crecimiento interior."
    },
    {
        "Name": "Hagalaz",
        "Value": 9,
        "Image": "09-Hagalaz.png",
        "Response": "Eventos no controlados, dificultades, necesidad",
        "Description": "Hagalaz representa eventos no controlados, pérdidas materiales o espirituales y tiempos difíciles."
    },
    {
        "Name": "Nauthiz",
        "Value": 10,
        "Image": "10-Nauthiz.png",
        "Response": "Escasez, riesgo, autodiagnóstico",
        "Description": "Nauthiz advierte de escasez y riesgo, requiriendo autodiagnóstico y preparación para adversidades."
    },
    {
        "Name": "Isa",
        "Value": 11,
        "Image": "11-Isa.png",
        "Response": "Congelación, inactividad, esperar",
        "Description": "Isa sugiere inactividad y espera, como un vendaval de hielo y escarcha, para permitir que los acontecimientos se desarrollen sin interferencias."
    },
    {
        "Name": "Jera",
        "Value": 12,
        "Image": "12-Jera.png",
        "Response": "Cosecha, paciencia, resultados",
        "Description": "Jera simboliza cosecha, paciencia y la espera de resultados, sin apresurarse."
    },
    {
        "Name": "Eihwaz",
        "Value": 13,
        "Image": "13-Eihwaz.png",
        "Response": "Estabilidad, madurez, aguante",
        "Description": "Eihwaz representa estabilidad, madurez y logros obtenidos con paciencia, pero también alerta sobre posibles derrotas."
    },
    {
        "Name": "Perth",
        "Value": 14,
        "Image": "14-Perth.png",
        "Response": "Nuevo inicio, revelación, misterio",
        "Description": "Perth anuncia nuevos comienzos, revelaciones y misterios que se desvelarán en el futuro cercano."
    },
    {
        "Name": "Algiz",
        "Value": 15,
        "Image": "15-Algiz.png",
        "Response": "Protección, valores, espiritualidad",
        "Description": "Algiz simboliza protección de valores, vida en todas sus formas y defensa de la amistad, el éxito y la familia."
    },
    {
        "Name": "Sowelu",
        "Value": 16,
        "Image": "16-Sowelu.png",
        "Response": "Preparación, acción, renovación",
        "Description": "Sowelu insta a la acción y la renovación, a admitir lo negado durante mucho tiempo."
    },
    {
        "Name": "Teiwaz",
        "Value": 17,
        "Image": "17-Teiwaz.png",
        "Response": "Coraje, éxito, justicia",
        "Description": "Teiwaz es símbolo de coraje, motivación y victoria a través del trabajo duro y la justicia."
    },
    {
        "Name": "Berkana",
        "Value": 18,
        "Image": "18-Berkana.png",
        "Response": "Fecundidad, nacimiento, relaciones",
        "Description": "Berkana está vinculada con la fecundidad, el nacimiento y el inicio de relaciones emocionales."
    },
    {
        "Name": "Ehwaz",
        "Value": 19,
        "Image": "19-Ehwaz.png",
        "Response": "Movimiento, oportunidades, cambios",
        "Description": "Ehwaz representa movimiento, oportunidades y cambios, incluyendo mudanzas y redefiniciones."
    },
    {
        "Name": "Mannaz",
        "Value": 20,
        "Image": "20-Mannaz.png",
        "Response": "Humildad, prudencia, concentración",
        "Description": "Mannaz promueve la humildad y la concentración en la acción sin esperar recompensas ni orgullo."
    },
    {
        "Name": "Laguz",
        "Value": 21,
        "Image": "21-Laguz.png",
        "Response": "Intuición, emociones, fluidez",
        "Description": "Laguz está relacionada con el mundo inconsciente, la intuición y la mejora de las facetas espirituales."
    },
    {
        "Name": "Inguz",
        "Value": 22,
        "Image": "22-Ingwaz.png",
        "Response": "Fertilidad, gestación, logros",
        "Description": "Inguz indica una fase de creatividad, realización y emprendimiento, señalando la capacidad para iniciar nuevos proyectos o resolver problemas."
    },
    {
        "Name": "Dagaz",
        "Value": 23,
        "Image": "23-Dagaz.png",
        "Response": "Realización, claridad, transformación",
        "Description": "Dagaz revela la transformación y la prosperidad que acompañan a nuevos ciclos en la vida."
    },
    {
        "Name": "Othala",
        "Value": 24,
        "Image": "24-Othala.png",
        "Response": "Herencia, posesiones, legado",
        "Description": "Othala se relaciona con el ciclo vital, la prosperidad, la herencia y los valores fundamentales."
    },
    {
        "Name": "Odín",
        "Value": 25,
        "Image": "25-Odin.png",
        "Response": "Lo impredecible, lo desconocido, centralidad",
        "Description": "La Runa de Odín simboliza lo impredecible y desconocido, ocupando el lugar central en las lecturas de runas vikingas."
    }
]
