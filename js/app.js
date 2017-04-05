document.addEventListener("DOMContentLoaded", function(){
	
	var pl_flag = document.querySelector('#pl');
	var en_flag = document.querySelector('#en');
	
	var hatemel = document.getElementsByTagName('html');
	
	var education = document.querySelector('#education');
	var coderslab_info = document.querySelector('#coderslab_info');
	var politechnika = document.querySelector('#politechnika');
	var inz_biomed = document.querySelector('#inz_biomed');
	var biotech_farma = document.querySelector('#biotech_farma');
	var biotech = document.querySelector('#biotech');
	var expierence = document.querySelector('#expierence');
	var exp_1_date = document.querySelector('#exp_1_date');
	var exp_1 = document.querySelector('#exp_1');
	var exp_2 = document.querySelector('#exp_2');
	var exp_3 = document.querySelector('#exp_3');
	var visit_me = document.querySelector('#visit_me');
	var profile = document.querySelector('#profile');
	var profile_info = document.querySelector('#profile_info');
	var skills = document.querySelector('#skills');
	var english = document.querySelector('#english');
	var contact = document.querySelector('#contact');
	var adress = document.querySelector('#adress');
	var clause = document.querySelector('#clause');
	
	pl_flag.addEventListener("click", function(){
		education.innerHTML = 'edukacja';
		coderslab_info.innerHTML = '04.2017: kurs Front-end';
		politechnika.innerHTML = 'politechnika wrocławska';
		inz_biomed.innerHTML = '04.2015: Inżynieria Biomedyczna (st. inżynierskie)';
		biotech_farma.innerHTML = '07.2012: Biotechnologia Farmaceutyczna (st. magisterskie)';
		biotech.innerHTML = '01.2011: Biotechnologia (st. inżynierskie)';
		expierence.innerHTML = 'doświadczenie';
		exp_1_date.innerHTML = '01.12.2014 - obecnie';
		exp_1.innerHTML = '<strong>Asystent w Katedrze Kinezjologii na Akademii Wychowania Fizycznego we Wrocławiu</strong><br>(analiza danych MRI, dydaktyka)';
		exp_2.innerHTML = '<strong>Referent techniczny w Katedrze Kinezjologii na Akademii Wychowania Fizycznego we Wrocławiu</strong><br>(zarządzanie sprzętem i oprogramowaniem biomedycznym)';
		exp_3.innerHTML = '<strong>Administrator biurowy w Przedszkolu Niepublicznym Nr 2 w Zgorzelcu</strong><br>(utrzymywanie dokomuentacji biurowej)';
		visit_me.innerHTML = 'odwiedź mnie';
		profile.innerHTML = 'profil';
		profile_info.innerHTML = 'Witam!<br>Jestem pasjonatem kodu, który niedawno ukończył kurs Front-end od Coders Lab i jest zdeterminowany by przejść do branży IT zaczynając pracę jako junior front-end developer.';
		skills.innerHTML = 'umiejętności';
		english.innerHTML = 'j. angielski (B2 - acert)';
		contact.innerHTML = "kontakt";
		adress.innerHTML = 'Wrocław';
		clause.innerHTML = 'Wyrażam zgodę na przetwarzanie moich danych osobowych w celach rekrutacji, zgodnie z ustawą o ochronie danych osobowych z dnia 29.08.1997 (Dz.U.133 Poz.883).';
		
	});
	
	en_flag.addEventListener("click", function(){
		education.innerHTML = "education";
		coderslab_info.innerHTML = "04.2017: Front-end Bootcamp";
		politechnika.innerHTML = "wroclaw university of technology and science";
		inz_biomed.innerHTML = "04.2015 : Biomedical Engineering (Engineer's degree";
		biotech_farma.innerHTML = "07.2012 : Pharmaceutic Biotechnology (Master's degree)";
		biotech.innerHTML = "01.2011 : Biotechnology (Engineer's degree)";
		expierence.innerHTML = "expierence";
		exp_1_date.innerHTML = "01.12.2014 - present";
		exp_1.innerHTML = "<strong>Assistant at Kinesiology Cathedral in Wroclaw Univeristy of Physical Education</strong><br>(MRI data analysis, teaching students)";
		exp_2.innerHTML = "<strong>Technical referent at Kinesiology Cathedralin Wroclaw Univeristy of Physical Education</strong><br>(biomedical hardware and software management)";
		exp_3.innerHTML = "<strong>Office administrator at Non-public Kindergarten No. 2 in Zgorzelec</strong><br>(office documentation maintenance)";
		visit_me.innerHTML = "visit me";
		profile.innerHTML = "profile";
		profile_info.innerHTML = "Hi! I'm an ambitious code passionate who recently graduated Coders Lab front-end bootcamp and is determinated to start in IT industry working as a junior front-end developer.";
		skills.innerHTML = "skills";
		english.innerHTML = "English (B2 - acert)";
		contact.innerHTML = "contact";
		adress.innerHTML = "Wroclaw";
		clause.innerHTML = "I hereby agree to the processing of my personal data for recruitment purposes, in accordance with the Personal Data Protection Act of 29.08.1997 (OJ133, No.883).";

	});
	
});