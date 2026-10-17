(() => {
  const $ = s => document.querySelector(s);
  const btn = $('#menu-toggle');
  const nav = $('#main-nav');
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open'); btn.setAttribute('aria-expanded','false');
  }));
  const fr = {
    topLocation:'9 rue Farj Gaâloul, Tunis',topHours:'Lun–Sam 08h–18h',
    navServices:'Services',navAbout:'Le garage',navWork:'Nos réalisations',navReviews:'Avis clients',navContact:'Contact',navBook:'Prendre RDV',
    heroKicker:'VOTRE GARAGE AUTOMOBILE À TUNIS',heroTitle:'LA MÉCANIQUE<br>QUI FAIT <em>LA DIFFÉRENCE.</em>',heroLead:'Un diagnostic juste. Un travail soigné. Des conseils honnêtes. Confiez votre véhicule à une équipe qui aime vraiment la mécanique.',heroBook:'Prendre rendez-vous',heroExplore:'Explorer nos services',heroProof:'76 avis clients publiés',heroTag1:'Diagnostic expert',heroTag2:'Précision à chaque étape',heroScroll:'SCROLL POUR DÉCOUVRIR',
    trust1:'Diagnostic précis',trust2:'Interventions soignées',trust3:'Conseils transparents',trust4:'Véhicules multimarques',
    serviceKicker:'CE QUE NOUS FAISONS',serviceTitle:'DES SOLUTIONS POUR <span>CHAQUE PROBLÈME.</span>',serviceIntro:'De la panne difficile à l’entretien du quotidien, des interventions pensées pour reprendre la route en toute confiance.',serviceAsk:'Demander un devis',
    s1title:'Diagnostic électronique',s1body:'Recherche de pannes, lecture des calculateurs, voyants moteur, capteurs et systèmes embarqués.',s2title:'Mécanique générale',s2body:'Moteur, embrayage, transmission, freinage, suspension, direction et réparations mécaniques.',s3title:'Entretien & révision',s3body:'Vidange, filtres, courroies, niveaux, vérifications et entretien régulier de votre véhicule.',s4title:'Performance & projets',s4body:'Préparation mécanique et accompagnement de projets automobiles selon vos besoins.',s5title:'Contrôle avant achat',s5body:'Inspection des points essentiels et diagnostic pour acheter votre prochaine voiture sereinement.',s6title:'Conseil achat & vente',s6body:'Un regard technique pour vous orienter lors de l’achat ou de la vente d’un véhicule d’occasion.',
    aboutKicker:'LA PASSION DU MÉTIER',aboutTitle:'PAS SEULEMENT RÉPARER.<br><span>COMPRENDRE.</span>',aboutLead:'Chez GRM Garage Rezgui Mohamed, chaque véhicule mérite une vraie recherche de la cause, pas simplement un remplacement de pièces.',aboutBody:'Notre approche : écouter, diagnostiquer, expliquer l’intervention et prendre soin de votre voiture comme si c’était la nôtre.',v1title:'Identifier la cause',v1body:'Une approche méthodique avant chaque réparation.',v2title:'Expliquer clairement',v2body:'Des réponses compréhensibles, sans surprise.',v3title:'Travailler avec précision',v3body:'Le souci du détail, du début à la fin.',aboutVisit:'Nous rendre visite',
    workKicker:'SUR LE TERRAIN',workTitle:'L’EXPERTISE <span>EN ACTION.</span>',workFollow:'Voir les interventions sur Facebook',workCat1:'RECHERCHE DE PANNE',workName1:'Diagnostic & électronique',workCat2:'SAVOIR-FAIRE',workName2:'Interventions moteur',workCat3:'PRÉVENTION',workName3:'Entretien & fiabilité',workNote:'Illustrations de nos domaines d’intervention. Pour les photos et vidéos réelles du garage, consultez notre page Facebook.',
    reviewKicker:'LA PAROLE À NOS CLIENTS',reviewTitle:'LA CONFIANCE <span>SE GAGNE.</span>',reviewCount:'76 avis publics',reviewVerified:'Avis client public',reviewMore:'Consulter les avis sur Google Maps',
    bookingKicker:'PARLONS DE VOTRE VÉHICULE',bookingTitle:'UN SOUCI AUTO ?<br><span>ON S’EN OCCUPE.</span>',bookingLead:'Décrivez votre besoin. Votre demande s’ouvre directement dans WhatsApp, sans compte ni formulaire compliqué.',bookingCall:'OU APPELEZ-NOUS DIRECTEMENT',formTitle:'Demander un rendez-vous',formName:'Votre nom *',formNameP:'Nom et prénom',formPhone:'Téléphone *',formPhoneP:'Votre numéro',formCar:'Véhicule',formCarP:'Ex. Golf 7, 2016',formService:'Service souhaité',serviceOpt1:'Diagnostic électronique',serviceOpt2:'Mécanique générale',serviceOpt3:'Entretien & révision',serviceOpt4:'Performance & projets',serviceOpt5:'Contrôle avant achat',serviceOpt6:'Autre demande',formDetails:'Décrivez le problème',formDetailsP:'Votre message...',formSend:'Envoyer via WhatsApp',formPrivacy:'Aucune donnée n’est enregistrée sur ce site. WhatsApp s’ouvre pour envoyer votre message.',
    contactKicker:'CONTACT & ACCÈS',contactTitle:'ON VOUS ATTEND <span>À TUNIS.</span>',contactIntro:'Besoin d’un diagnostic, d’un conseil ou d’un rendez-vous ? Contactez-nous ou passez au garage.',contactAddress:'ADRESSE',contactDirections:'Itinéraire Google Maps ↗',contactTel:'TÉLÉPHONE / WHATSAPP',contactChat:'Nous écrire sur WhatsApp ↗',contactSchedule:'HORAIRES INDICATIFS',contactWeek:'Lundi – Samedi : 08h00 – 18h00',contactSunday:'Dimanche : 08h00 – 13h00',contactHoursNote:'Confirmez les horaires avant de vous déplacer.',mapOpen:'Ouvrir l’itinéraire',footerPhrase:'La passion de l’automobile. Le respect de votre confiance.',footerRights:'Tous droits réservés.',footerTop:'Retour en haut ↑'
  };
  const ar = {
    topLocation:'9 نهج فرج قالول، تونس',topHours:'الاثنين–السبت 08:00–18:00',
    navServices:'خدماتنا',navAbout:'عن الورشة',navWork:'أعمالنا',navReviews:'آراء الحرفاء',navContact:'اتصل بنا',navBook:'احجز موعدًا',
    heroKicker:'ورشتك لصيانة السيارات في تونس',heroTitle:'ميكانيك السيارات<br>بكل <em>إتقان وثقة.</em>',heroLead:'تشخيص دقيق. عمل متقن. نصائح واضحة. سيارتك بين أيدي محترفين يعشقون عالم الميكانيك.',heroBook:'احجز موعدًا',heroExplore:'اكتشف خدماتنا',heroProof:'76 تقييمًا من الحرفاء',heroTag1:'تشخيص متخصص',heroTag2:'الدقة في كل مرحلة',heroScroll:'اكتشف المزيد',
    trust1:'تشخيص دقيق',trust2:'إصلاحات متقنة',trust3:'نصائح شفافة',trust4:'مختلف أنواع السيارات',
    serviceKicker:'ماذا نقدم لك',serviceTitle:'حلول مناسبة <span>لكل عطل.</span>',serviceIntro:'من أصعب الأعطال إلى الصيانة الدورية، نساعدك على العودة إلى الطريق بثقة.',serviceAsk:'اطلب عرض سعر',
    s1title:'التشخيص الإلكتروني',s1body:'كشف الأعطال، قراءة أخطاء الحاسوب، لمبات التحذير، الحساسات والأنظمة الإلكترونية.',s2title:'الميكانيك العام',s2body:'المحرك، القابض، ناقل الحركة، المكابح، نظام التعليق والتوجيه والإصلاحات الميكانيكية.',s3title:'الصيانة الدورية',s3body:'تغيير الزيت والفلاتر، السيور، فحص السوائل والصيانة المنتظمة للسيارة.',s4title:'الأداء والمشاريع',s4body:'تحسين الأداء والمرافقة الفنية للمشاريع الميكانيكية حسب احتياجك.',s5title:'فحص قبل الشراء',s5body:'معاينة السيارة وتشخيص نقاطها الأساسية قبل اتخاذ قرار الشراء.',s6title:'استشارة بيع وشراء',s6body:'مرافقة تقنية عند شراء أو بيع سيارة مستعملة.',
    aboutKicker:'شغفنا بالميكانيك',aboutTitle:'لا نصلح العطل فقط.<br><span>بل نفهم سببه.</span>',aboutLead:'في ورشة GRM Garage Rezgui Mohamed نبحث عن السبب الحقيقي للعطل قبل التفكير في تغيير القطع.',aboutBody:'نستمع إليك، نفحص السيارة، نشرح التدخل ونعتني بها بعناية واهتمام.',v1title:'فهم سبب العطل',v1body:'تشخيص منهجي قبل أي تدخل.',v2title:'شرح واضح',v2body:'معلومات مفهومة دون مفاجآت.',v3title:'العمل بدقة',v3body:'اهتمام بالتفاصيل من البداية إلى النهاية.',aboutVisit:'تعال لزيارتنا',
    workKicker:'من داخل الورشة',workTitle:'خبرتنا <span>في الميدان.</span>',workFollow:'شاهد الأعمال على فيسبوك',workCat1:'كشف الأعطال',workName1:'التشخيص والإلكترونيك',workCat2:'خبرة فنية',workName2:'إصلاحات المحرك',workCat3:'الصيانة الوقائية',workName3:'صيانة واعتمادية',workNote:'هذه صور توضيحية لمجالات عملنا. شاهد الصور والفيديوهات الحقيقية عبر صفحتنا على فيسبوك.',
    reviewKicker:'آراء حرفائنا',reviewTitle:'ثقتكم <span>هي الأهم.</span>',reviewCount:'76 تقييمًا منشورًا',reviewVerified:'تقييم علني من حريف',reviewMore:'شاهد التقييمات على خرائط Google',
    bookingKicker:'لنتحدث عن سيارتك',bookingTitle:'مشكلة في السيارة؟<br><span>نحن هنا للمساعدة.</span>',bookingLead:'صف لنا ما تحتاجه. سنفتح طلبك في واتساب مباشرة، دون حساب أو إجراءات معقدة.',bookingCall:'أو اتصل بنا مباشرة',formTitle:'اطلب موعدًا',formName:'الاسم *',formNameP:'الاسم واللقب',formPhone:'رقم الهاتف *',formPhoneP:'رقم هاتفك',formCar:'السيارة',formCarP:'مثال: Golf 7، 2016',formService:'نوع الخدمة',serviceOpt1:'التشخيص الإلكتروني',serviceOpt2:'الميكانيك العام',serviceOpt3:'الصيانة الدورية',serviceOpt4:'الأداء والمشاريع',serviceOpt5:'فحص قبل الشراء',serviceOpt6:'طلب آخر',formDetails:'اشرح المشكلة',formDetailsP:'رسالتك...',formSend:'إرسال عبر واتساب',formPrivacy:'لا نخزن أي بيانات على الموقع. تُفتح واتساب لإرسال الرسالة.',
    contactKicker:'اتصل بنا وزرنا',contactTitle:'نستقبلكم <span>في تونس.</span>',contactIntro:'تحتاج تشخيصًا أو نصيحة أو موعدًا؟ اتصل بنا أو تفضل بزيارة الورشة.',contactAddress:'العنوان',contactDirections:'افتح الاتجاهات على Google Maps ↗',contactTel:'الهاتف / واتساب',contactChat:'راسلنا على واتساب ↗',contactSchedule:'التوقيت التقريبي',contactWeek:'الاثنين – السبت: 08:00 – 18:00',contactSunday:'الأحد: 08:00 – 13:00',contactHoursNote:'يرجى تأكيد التوقيت قبل الزيارة.',mapOpen:'افتح الاتجاهات',footerPhrase:'شغف السيارات. وثقتكم مسؤوليتنا.',footerRights:'جميع الحقوق محفوظة.',footerTop:'العودة إلى الأعلى ↑'
  };
  // Review quotes are preserved verbatim in French because they were publicly posted in French.
  let lang = 'fr';
  function setLanguage(next) {
    lang=next; const dict=next==='ar'?ar:fr;
    document.documentElement.lang=next;
    document.documentElement.dir=next==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(dict[k]!==undefined)el.textContent=dict[k]});
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{const k=el.dataset.i18nHtml;if(dict[k]!==undefined)el.innerHTML=dict[k]});
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(dict[k]!==undefined)el.placeholder=dict[k]});
    $('#lang-label').textContent=next==='fr'?'العربية':'Français';
    $('#lang-btn').setAttribute('aria-label',next==='fr'?'Passer en arabe':'تغيير اللغة إلى الفرنسية');
    localStorage.setItem('grm-language',next);
  }
  $('#lang-btn').addEventListener('click',()=>setLanguage(lang==='fr'?'ar':'fr'));
  try { if(localStorage.getItem('grm-language')==='ar')setLanguage('ar'); }catch(e){}
  $('#year').textContent=new Date().getFullYear();
  $('#appointment-form').addEventListener('submit',e=>{
    e.preventDefault();const f=e.currentTarget;
    if(!f.reportValidity())return;
    const v=new FormData(f);
    const s=f.querySelector('[name="service"]');
    const service=s.options[s.selectedIndex].textContent;
    const msg=lang==='fr'
      ? `Bonjour GRM Garage, je souhaite demander un rendez-vous.\n\nNom : ${v.get('name')}\nTéléphone : ${v.get('phone')}\nVéhicule : ${v.get('car')||'Non précisé'}\nService : ${service}\nProblème : ${v.get('details')||'À préciser'}\n\nMerci de me confirmer vos disponibilités.`
      : `السلام عليكم، أود حجز موعد في ورشة GRM.\n\nالاسم: ${v.get('name')}\nالهاتف: ${v.get('phone')}\nالسيارة: ${v.get('car')||'غير محددة'}\nالخدمة: ${service}\nوصف المشكلة: ${v.get('details')||'سأوضحها لاحقاً'}\n\nشكراً، يرجى إعلامي بالمواعيد المتاحة.`;
    window.open(`https://wa.me/21623740708?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');
  });
})();
