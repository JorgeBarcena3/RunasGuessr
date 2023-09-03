var IMAGE_PATH = "./images/";
var MAX_ANSWERS = 4;
var APP_NAME = "Runas Guessr"
var CONFIG = [
    {
        "Name": "Fehu",
        "Value": 1,
        "Image": "01-Fehu.png",
        "Response": "Bienestar, dinero, pérdidas",
        "Description": "La runa Fehu tiene el símbolo de la cabeza de una vaca con cuernos, un animal sagrado para el hinduismo y para otras muchas religiones milenarias. Por ello, Fehu representa las cualidades buenas y malas del ganado. Por un lado, simboliza riqueza, bienes materiales, fertilidad, maternidad y honor. No obstante, también representa aspectos no tan positivos como, el espíritu débil, lo manso, lo servil o lo torpe."
    },
    {
        "Name": "Uruz",
        "Value": 2,
        "Image": "02-Uruz.png",
        "Response": "Fuerza, salud, enfermedad",
        "Description": "La runa Uruz nos adelanta el comienzo de una nueva etapa diferente de lo que a día de hoy conocemos. Además, marca un nuevo ciclo en nuestra vida con una transformación personal necesaria. Es cierto que solemos rechazar los cambios. No obstante, esta nueva fase nos obligará a reinventarnos y a vivir mejor que como lo hemos hecho hasta ahora."
    },
    {
        "Name": "Thurisaz",
        "Value": 3,
        "Image": "03-Thurisaz.png",
        "Response": "Dolor, lucha, regeneración",
        "Description": "La runa Thurisaz está representada por un diente afilado que sugiere ideas de dolor o lucha. Por un lado, simboliza dolores físicos asociados con el crecimiento en la infancia. Por otro lado, también simboliza los dolores de carácter espiritual que se producen en la adultez. No obstante, su verdadero significado es la polaridad entre los bueno y lo malo o, más concretamente, entre la vida y la muerte. Es decir, simboliza la regeneración."
    },
    {
        "Name": "Ansuz",
        "Value": 4,
        "Image": "04-Ansuz.png",
        "Response": "Sabiduría, renovación, palabra",
        "Description": "El significado de la runa Ansuz es “boca”, “sabiduría” o, simplemente, palabra hablada. Por un lado, representa los conocimientos y la transmisión de mensajes. Además, todo lo que involucre a la palabra, desde el aprendizaje hasta la escritura y lectura, está simbolizado por Ansuz. Por otro lado, si sale en una tirada de runas, te estará invitando a renovarte y cambiar, a tomar nuevos caminos."
    },
    {
        "Name": "Raido",
        "Value": 5,
        "Image": "05-Raido.png",
        "Response": "Viaje, cambios, proceso",
        "Description": "La runa Raido simboliza la ruta de un viaje, cambios que se avecinan o toda clase de proceso transitorio. Por un lado, simboliza la lucha y la búsqueda propias del viaje evolutivo de cada individuo. Por otro lado, simboliza el esfuerzo interno que hay en el proceso de maduración desde la adolescencia hasta la adultez. En definitiva, la runa Raido está estrechamente vinculada con los procesos de cambio y transformación."
    },
    {
        "Name": "Kano",
        "Value": 6,
        "Image": "06-Kano.png",
        "Response": "Conocimiento, guía, renovación",
        "Description": "El significado de la runa Kano se vincula con el conocimiento y la inteligencia. Por ello, Kano simboliza una antorcha o una luz que disipa la ignorancia o la falta de ideas y proporciona sabiduría. Por otro lado, representa nuevos caminos, guía luminosa, renovación, recuperación y entendimiento entre dos personas. No obstante, la runa Kano invertida indica pérdida de relación y entendimiento entre personas o la aparición de sentimientos oscuros."
    },
    {
        "Name": "Gebo",
        "Value": 7,
        "Image": "07-Gebo.png",
        "Response": "Unión, alianzas, éxito",
        "Description": "La runa Gebo simboliza la unión o el punto donde convergen dos elementos. Su forma de equis representa el punto geométrico donde se unen dos segmentos de rectas, o caminos, diferentes con procedencias distintas. Por ello, la aparición de Gebo en una tirada de runas adelanta alianzas, asociaciones, contratos o uniones amorosas. Por lo tanto, es una runa de carácter beneficioso que avisa de la llegada de tiempos de éxito y abundancia."
    },
    {
        "Name": "Wunjo",
        "Value": 8,
        "Image": "08-Wunjo.png",
        "Response": "Conquista, éxito, realización",
        "Description": "La runa Wunjo simboliza conquista, éxito y esplendor. Es decir, se puede definir como la runa de la gloria obtenida tras superar desafíos, etapas o problemas.  Además, suele implicar una realización personal y un cumplimiento de sueños tras un período de crecimiento interior hasta alcanzar la cima.  No obstante, el lograr ese grado de satisfacción implica haber recorrido un duro camino llevando a cabo acciones de riesgo."
    },
    {
        "Name": "Hagalaz",
        "Value": 9,
        "Image": "09-Hagalaz.png",
        "Response": "Eventos no controlados, dificultades, necesidad",
        "Description": "La runa Hagalaz simboliza los eventos no controlados y que pueden ser, en cierta forma, negativos. Por ello, está asociada al granizo que destruye las cosechas y los árboles, dando lugar a tiempos de difíciles y de necesidad. Es decir, en una tirada de runas, Hagalaz anuncia la llegada de pérdidas materiales o espirituales, ya sea de manera involuntaria o por medio de renuncias premeditadas."
    },
    {
        "Name": "Nauthiz",
        "Value": 10,
        "Image": "10-Nauthiz.png",
        "Response": "Escasez, riesgo, autodiagnóstico",
        "Description": "En primer lugar, la runa Nauthiz advierte de una situación de escasez o riesgo. Es decir, cuando aparece en una tirada de runas significa que una sombra se aproxima a tu vida. Por ello, deberás realizar un autodiagnóstico para identificar y reconocer tus puntos débiles con la intención de reforzarlos cara a estas posibles adversidades.  Generalmente, el significado de Nauthiz está vinculado a traición, opresión, sufrimiento y rebelión."
    },
    {
        "Name": "Isa",
        "Value": 11,
        "Image": "11-Isa.png",
        "Response": "Congelación, inactividad, esperar",
        "Description": "El significado de la runa vikinga Isa está relacionado con congelar alguna situación y no arriesgar nada por el momento. Es decir, invita a llevar a cabo una inactividad en tus planes para dar tiempo a que se desarrollen los acontecimientos sin ser interrumpidos. Por ello, esta es la runa del hielo y te recomienda no “mover ficha” en este momento y esperar bajo resguardo como si de un vendaval de hielo y escarcha se tratara."
    },
    {
        "Name": "Jera",
        "Value": 12,
        "Image": "12-Jera.png",
        "Response": "Cosecha, paciencia, resultados",
        "Description": "En primer lugar, la runa Jera representa a todo aquello que nos da alimento, en particular a las cosechas que se recogen tras un año de esfuerzo y paciencia. Por ello, Jera no se trata de una runa que transmita prisa sino que pide tiempo para que se completen los ciclos correctamente. Por otro lado, Jera nos indica que el trabajo ya se ha concluido y que ahora debemos de ser pacientes para recibir los resultados."
    },
    {
        "Name": "Eihwaz",
        "Value": 13,
        "Image": "13-Eihwaz.png",
        "Response": "Estabilidad, madurez, aguante",
        "Description": "La runa Eihwaz simboliza estabilidad, madurez, temple y aguante. Además, esta runa vikinga nos habla de la obtención de logros gracias a la paciencia y a tomar decisiones con seguridad y confianza. Es decir, Eihwaz es sinónimo de actuar con madurez y responsabilidad, aceptando nuestro pasado y mirando hacia el futuro. Por otro lado, en una tirada de runas vikingas nos avisa de que vamos a sufrir ataques y posibles derrotas."
    },
    {
        "Name": "Perth",
        "Value": 14,
        "Image": "14-Perth.png",
        "Response": "Nuevo inicio, revelación, misterio",
        "Description": "La runa Perth simboliza el nacimiento de algo nuevo en tu vida o el inicio de un proyecto que puede llegar de forma esperada o por sorpresa. Además, también representa el hallazgo de objetos perdidos, la llegada de noticias inesperadas, la aparición de gratas sorpresas o la declaración de un amor. En definitiva, la runa vikinga Perth te adelanta que un misterio se va a desvelar próximamente."
    },
    {
        "Name": "Algiz",
        "Value": 15,
        "Image": "15-Algiz.png",
        "Response": "Protección, valores, espiritualidad",
        "Description": "La runa Algiz simboliza al espíritu de la preservación y protección de los verdaderos valores y de todo aquello relacionado con lo natural y lo puro. Por ello, se trata de la protección de la vida en todas sus formas, en especial de los bosques, y del ámbito del hogar. Además, la runa está vinculada con la defensa y protección de la amistad, la fortuna, el éxito, la salud y la familia."
    },
    {
        "Name": "Sowelu",
        "Value": 16,
        "Image": "16-Sowelu.png",
        "Response": "Preparación, acción, renovación",
        "Description": "La runa Sowelu (también llamada Sigel) nos avisa de que todo está preparado para pasar a la acción y comenzar a llevar a cabo aquellas acciones que teníamos pendientes. Por lo tanto, ármate de valor, acumula fuerzas y comienza a actuar hoy mismo si es posible. Además, la runa Sigel te invita e impulsa a admitir aquello que durante mucho tiempo has negado y a comenzar una nueva etapa de renovación mental."
    },
    {
        "Name": "Teiwaz",
        "Value": 17,
        "Image": "17-Teiwaz.png",
        "Response": "Coraje, éxito, justicia",
        "Description": "Para empezar, la runa Teiwaz es sinónimo de coraje, motivación, fuerza de voluntad y justicia. Además, si aparece en una tirada de runas nos adelanta la llegada de victorias o éxitos producto de nuestro trabajo duro y honesto. Por ello, la runa vikinga Teiwaz representa una lanza, símbolo de resistencia, valor y victoria."
    },
    {
        "Name": "Berkana",
        "Value": 18,
        "Image": "18-Berkana.png",
        "Response": "Fecundidad, nacimiento, relaciones",
        "Description": "La runa Berkana está vinculada con la fecundidad y el nacimiento, ya sea de un nuevo bebé o de aspectos de carácter emocional como amistades o relaciones amorosas. Es decir, Berkana está relacionada con la maternidad, el parto, el ambiente familiar, el resguardo del hogar y los inicios de profundas amistades o relaciones."
    },
    {
        "Name": "Ehwaz",
        "Value": 19,
        "Image": "19-Ehwaz.png",
        "Response": "Movimiento, oportunidades, cambios",
        "Description": "La runa Ehwaz está asociada a movimientos físicos o psicológicos hacia nuevos lugares u oportunidades. En ocasiones, Ehwaz se identifica como la runa del nuevo amanecer en el que grandes oportunidades te están esperando. A su vez, simboliza transformación y cambios de todo tipo tales como mudanzas, mejoras de actitud, nuevas relaciones o redefiniciones de los negocios."
    },
    {
        "Name": "Mannaz",
        "Value": 20,
        "Image": "20-Mannaz.png",
        "Response": "Humildad, prudencia, concentración",
        "Description": "La runa Mannaz está asociada con la humildad y la prudencia a la hora de actuar. Es decir, la runa recomienda actuar y proceder de forma concentrada sin esperar obtener algo a cambio. Además, nos dice que esto se debería de convertir en una filosofía de vida en el que las expectativas y el orgullo ya no forman parte de tus valores fundamentales."
    },
    {
        "Name": "Laguz",
        "Value": 21,
        "Image": "21-Laguz.png",
        "Response": "Inconsciente, intuición, mejora",
        "Description": "La runa Laguz está estrechamente vinculada con el mundo del inconsciente, de la intuición y de los sentimientos escondidos en nuestro interior más profundo. Además, refleja nuestro rechazo hacia lo desconocido y la hostilidad con la que tratamos a todo lo nuevo que no nos inspira confianza. No obstante, Laguz nos invita a trabajar nuestro interior y a mejorar en las facetas más profundas y espirituales."
    },
    {
        "Name": "Inguz",
        "Value": 22,
        "Image": "22-Inguz.png",
        "Response": "Creatividad, realización, emprendimiento",
        "Description": "La runa Inguz te indica que estás entrando en una fase de creatividad, realización, felicidad e inercia hacia un nuevo ciclo en tu vida. Es decir, sugiere que vas a emerger de un estado hermético hacia un nuevo camino de emprendimiento y apertura social. Por ello, la aparición de Inguz en una tirada de runas confirma que tienes la fuerza y capacidad suficiente para iniciar un nuevo proyecto o para solucionar un problema del pasado."
    },
    {
        "Name": "Dagaz",
        "Value": 23,
        "Image": "23-Dagaz.png",
        "Response": "Revelación, transformación, prosperidad",
        "Description": "La runa Dagaz es de carácter revelador, sincero y esclarecedor. Por ello, se la relaciona con el día o con la luz solar que ilumina de forma natural y cálida. Generalmente, esta runa vikinga está vinculada con procesos de renovación o transformación en los que se inicia un nuevo ciclo en la vida cargado de prosperidad y logros."
    },
    {
        "Name": "Othila",
        "Value": 24,
        "Image": "24-Othila.png",
        "Response": "Ciclo vital, prosperidad, herencia",
        "Description": "La runa Othila está vinculada con el ciclo vital del ser humano y con los valores y deseos más representativos. Por ejemplo, simboliza prosperidad, familia, patria, nobleza y buena posición social. No obstante, no solo habla de prosperidad material, también hace alusión a bienestar anímico y mental. Por otro lado, la runa vikinga Othila representa a las herencias tanto materiales como inmateriales."
    },
    {
        "Name": "Odín",
        "Value": 25,
        "Image": "25-Odin.png",
        "Response": "Impredecible, desconocido, central",
        "Description": "La Runa de Odín, o también conocida como Runa en Blanco o Runa Blanca, simboliza todo lo impredecible y lo que nos resulta desconocido. Para empezar, debemos de tener en cuenta que, en una tirada de runas vikingas, debe de ser considerada el centro de la lectura ya que se trata de la runa más importante de todas."
    }
]
