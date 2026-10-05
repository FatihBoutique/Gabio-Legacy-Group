const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const header=$("#header"), progress=$("#progress"), menu=$("#menuToggle"), nav=$("#nav"), langCurrent=$("#langCurrent"), langMenu=$("#langMenu");
window.addEventListener("scroll",()=>{header.classList.toggle("scrolled",scrollY>30);const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+"%";},{passive:true});
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
$$('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

// Keep the header navigation visually in sync with the section currently in view.
const sections=$$('[id]').filter(el=>['home','group','companies','investments','vision','news','contact'].includes(el.id));
if('IntersectionObserver' in window){
  const sectionObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const link=$(`.nav a[href="#${entry.target.id}"]`);
        if(link){
          $$('.nav a').forEach(a=>a.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  },{rootMargin:'-35% 0px -55% 0px',threshold:0});
  sections.forEach(section=>sectionObserver.observe(section));
}

langCurrent?.addEventListener("click",()=>{const open=langMenu.classList.toggle("open");langCurrent.setAttribute("aria-expanded",String(open));});
document.addEventListener("click",e=>{if(!e.target.closest(".lang")){langMenu?.classList.remove("open");langCurrent?.setAttribute("aria-expanded","false");}});

const translations={
fr:{
"nav.home":"Accueil","nav.group":"Le Groupe","nav.companies":"Nos Sociétés","nav.investments":"Investissements","nav.vision":"Notre Vision","nav.news":"Actualités","nav.contact":"Contact","nav.cta":"Nous contacter",
"hero.location":"Siège social","hero.eyebrow":"GROUPE D’INVESTISSEMENT","hero.line1":"Investir aujourd’hui.","hero.line2":"Construire demain.","hero.lead":"Un groupe d’investissement qui identifie les opportunités, bâtit des entreprises et crée une valeur durable.","hero.discover":"Découvrir le Groupe","hero.companies":"Nos Sociétés",
"group.title":"Plus qu’un investissement.<br><em>Une vision à long terme.</em>","group.p1":"Gabio Legacy Group est un holding d’investissement basé à Kinshasa, en République démocratique du Congo.","group.p2":"Nous connectons capital, vision et opportunités afin de développer des entreprises capables de créer une valeur durable et responsable.","group.v1":"Notre vision","group.v1d":"Créer de la valeur durable","group.v2":"Notre mission","group.v2d":"Investir, développer, transmettre","group.v3":"Nos valeurs","group.v3d":"Intégrité · Excellence · Impact",
"companies.title":"Deux entreprises.<br><em>Une même vision.</em>","companies.lead":"Des sociétés complémentaires qui incarnent notre engagement envers l’innovation, la qualité et le développement durable.","companies.cta":"Découvrir nos sociétés","companies.creamy.sector":"Cream · Smoothies · Take Away","companies.creamy.desc":"Une expérience culinaire qui associe créativité, fraîcheur et solutions pratiques à emporter.","companies.infinity.sector":"Food · Pisciculture · Agriculture","companies.infinity.desc":"Des activités productives orientées vers l’alimentation, l’aquaculture et l’agriculture durable.","companies.more":"En savoir plus",
"invest.title":"Investissements<br><em>à impact durable.</em>","invest.lead":"Nous identifions les opportunités, mobilisons les ressources et accompagnons la croissance d’entreprises à fort potentiel.",
"process.1":"Identifier","process.1d":"Opportunités à fort potentiel.","process.2":"Investir","process.2d":"Capital et ressources stratégiques.","process.3":"Développer","process.3d":"Accompagnement et croissance.","process.4":"Transmettre","process.4d":"Construire une valeur durable.",
"vision.title":"Créer aujourd’hui<br><em>les entreprises qui compteront demain.</em>","vision.sub":"Capital · Vision · Héritage","presence.title":"Ancré à Kinshasa.<br><em>Ouvert sur l’avenir.</em>","presence.text":"Depuis la République démocratique du Congo, nous construisons des opportunités avec une perspective de long terme.",
"news.title":"Les dernières actualités<br><em>de Gabio Legacy Group.</em>","news.n1":"Une nouvelle étape pour Gabio Legacy Group","news.n1d":"Les prochaines annonces du groupe apparaîtront ici.","news.n2":"Soutien au développement agricole en RDC","news.n2d":"Suivez l’évolution de nos sociétés et de nos projets.","news.n3":"Creamy Mustache : l’extension de notre réseau","news.n3d":"Découvrez les étapes importantes de nos filiales.",
"contact.title":"Construisons<br><em>quelque chose de durable.</em>","contact.text":"Pour une opportunité d’investissement, un partenariat ou une demande générale, notre équipe est à votre écoute.","footer.tag":"Investir aujourd’hui. Construire demain."
},
en:{
"nav.home":"Home","nav.group":"The Group","nav.companies":"Our Companies","nav.investments":"Investments","nav.vision":"Our Vision","nav.news":"News","nav.contact":"Contact","nav.cta":"Contact us",
"hero.location":"Headquarters","hero.eyebrow":"INVESTMENT GROUP","hero.line1":"Investir aujourd’hui.","hero.line2":"Construire demain.","hero.lead":"An investment group that identifies opportunities, builds businesses and creates lasting value.","hero.discover":"Discover the Group","hero.companies":"Our Companies","hero.stat1":"Holding","hero.stat2":"Portfolio companies","hero.stat3":"Kinshasa · DRC",
"group.title":"More than an investment.<br><em>A long-term vision.</em>","group.p1":"Gabio Legacy Group is an investment holding company based in Kinshasa, Democratic Republic of the Congo.","group.p2":"We connect capital, vision and opportunity to develop businesses capable of creating sustainable, responsible value.","group.v1":"Our vision","group.v1d":"Create lasting value","group.v2":"Our mission","group.v2d":"Invest, develop, transfer","group.v3":"Our values","group.v3d":"Integrity · Excellence · Impact",
"companies.title":"A portfolio<br><em>of ambitious ventures.</em>","companies.lead":"Through its subsidiaries, Gabio Legacy Group invests in key sectors to help build a more prosperous future.","companies.cta":"Discover all our companies","companies.creamy.sector":"Cream · Smoothies · Take Away","companies.creamy.desc":"A culinary experience combining creativity, freshness and convenient take-away solutions.","companies.infinity.sector":"Food · Aquaculture · Agriculture","companies.infinity.desc":"Productive activities focused on food, aquaculture and sustainable agriculture.","companies.more":"Learn more",
"invest.title":"Investing in potential.<br><em>Developing what matters.</em>","invest.lead":"A structured approach to turning opportunities into lasting value.",
"process.1":"Identify","process.1d":"Find high-potential opportunities and understand their context.","process.2":"Invest","process.2d":"Deploy capital and resources where vision and potential meet.","process.3":"Develop","process.3d":"Support businesses through structure, execution and growth.","process.4":"Build Legacy","process.4d":"Create value designed to endure and be passed forward.",
"vision.title":"Building today the companies<br><em>that will matter tomorrow.</em>","vision.sub":"Capital · Vision · Legacy","presence.title":"Rooted in Kinshasa.<br><em>Open to the future.</em>","presence.text":"From the Democratic Republic of the Congo, we build opportunities with a long-term perspective.",
"news.title":"The Group’s next<br><em>chapters.</em>","news.lead":"A dedicated space for Gabio Legacy Group news, announcements and developments.","news.n1":"New opportunities and partnerships","news.n1d":"The group’s upcoming announcements will appear here.","news.n2":"Portfolio development","news.n2d":"Follow the evolution of our companies and projects.","news.n3":"Businesses in motion","news.n3d":"Discover important milestones across our subsidiaries.",
"contact.title":"Let’s build<br><em>something lasting.</em>","contact.text":"For an investment opportunity, partnership or general enquiry, our team is ready to connect.","footer.tag":"Invest today. Build tomorrow."
},
es:{
"nav.home":"Inicio","nav.group":"El Grupo","nav.companies":"Nuestras Empresas","nav.investments":"Inversiones","nav.vision":"Nuestra Visión","nav.news":"Actualidad","nav.contact":"Contacto","nav.cta":"Contáctenos",
"hero.location":"Sede social","hero.eyebrow":"GRUPO DE INVERSIÓN","hero.line1":"Investir aujourd’hui.","hero.line2":"Construire demain.","hero.lead":"Un grupo de inversión que identifica oportunidades, desarrolla empresas y crea valor sostenible.","hero.discover":"Descubrir el Grupo","hero.companies":"Nuestras Empresas","hero.stat1":"Holding","hero.stat2":"Empresas de cartera","hero.stat3":"Kinshasa · RDC",
"group.title":"Más que una inversión.<br><em>Una visión a largo plazo.</em>","group.p1":"Gabio Legacy Group es un holding de inversión con sede en Kinshasa, República Democrática del Congo.","group.p2":"Conectamos capital, visión y oportunidades para desarrollar empresas capaces de crear valor sostenible y responsable.","group.v1":"Nuestra visión","group.v1d":"Crear valor duradero","group.v2":"Nuestra misión","group.v2d":"Invertir, desarrollar, transmitir","group.v3":"Nuestros valores","group.v3d":"Integridad · Excelencia · Impacto",
"companies.title":"Una cartera<br><em>de proyectos ambiciosos.</em>","companies.lead":"A través de sus filiales, Gabio Legacy Group invierte en sectores clave para construir un futuro más próspero.","companies.cta":"Descubrir todas nuestras empresas","companies.creamy.sector":"Cream · Smoothies · Para llevar","companies.creamy.desc":"Una experiencia culinaria que combina creatividad, frescura y soluciones prácticas para llevar.","companies.infinity.sector":"Alimentación · Piscicultura · Agricultura","companies.infinity.desc":"Actividades productivas centradas en la alimentación, la acuicultura y la agricultura sostenible.","companies.more":"Saber más",
"invest.title":"Invertir en el potencial.<br><em>Desarrollar lo que importa.</em>","invest.lead":"Un enfoque estructurado para convertir oportunidades en valor duradero.",
"process.1":"Identificar","process.1d":"Detectar oportunidades de alto potencial y comprender su contexto.","process.2":"Invertir","process.2d":"Movilizar capital y recursos donde convergen visión y potencial.","process.3":"Desarrollar","process.3d":"Acompañar a las empresas en su estructura y crecimiento.","process.4":"Transmitir","process.4d":"Construir un valor capaz de perdurar y transmitirse.",
"vision.title":"Construir hoy las empresas<br><em>que importarán mañana.</em>","vision.sub":"Capital · Visión · Legado","presence.title":"Arraigados en Kinshasa.<br><em>Abiertos al futuro.</em>","presence.text":"Desde la República Democrática del Congo, construimos oportunidades con una perspectiva a largo plazo.",
"news.title":"Los próximos<br><em>capítulos del Grupo.</em>","news.lead":"Un espacio dedicado a las noticias, anuncios y desarrollos de Gabio Legacy Group.","news.n1":"Nuevas oportunidades y alianzas","news.n1d":"Aquí aparecerán los próximos anuncios del grupo.","news.n2":"Desarrollo de la cartera","news.n2d":"Siga la evolución de nuestras empresas y proyectos.","news.n3":"Empresas en movimiento","news.n3d":"Descubra los hitos importantes de nuestras filiales.",
"contact.title":"Construyamos<br><em>algo duradero.</em>","contact.text":"Para una oportunidad de inversión, una alianza o una consulta general, nuestro equipo está disponible.","footer.tag":"Invertir hoy. Construir mañana."
}};
function applyLang(lang){
  const dict=translations[lang]||translations.fr;
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(dict[key]!==undefined)el.innerHTML=dict[key];});
  langCurrent.innerHTML=lang.toUpperCase()+" <span>⌄</span>";
  localStorage.setItem("gabio-lang",lang);
  langMenu.classList.remove("open");langCurrent.setAttribute("aria-expanded","false");
}
$$("[data-lang]").forEach(b=>b.addEventListener("click",()=>applyLang(b.dataset.lang)));
const saved=localStorage.getItem("gabio-lang");applyLang(saved&&translations[saved]?saved:"fr");
$("#year").textContent=new Date().getFullYear();

const reveals=$$(".reveal");
if("IntersectionObserver" in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target);}}),{threshold:.1});reveals.forEach(x=>io.observe(x));}else reveals.forEach(x=>x.classList.add("visible"));
