// import ar from "../lang/ar.json" assert {type: 'json'};
// import en from "../lang/en.json" assert {type: 'json'};
en = {
	"title": "Welcome to this localization demo site",
	"description": "Software localization is the process of adapting software to both the culture and language of an end user, from standards of measurement to video and graphic design. It involves not only translation, but also design and UX changes to make software look and feel natural to the target user."
}
ar = {
	"title": "مرحبًا بك في هذا الموقع التجريبي للترجمة",
	"description": "طين البرامج هو عملية تكييف البرامج مع كل من ثقافة ولغة المستخدم النهائي ، من معايير القياس إلى الفيديو وتصميم الرسوم. لا يقتصر الأمر على الترجمة فحسب ، بل يشمل أيضًا تغييرات التصميم وتجربة المستخدم لجعل البرنامج يبدو طبيعيًا للمستخدم المستهدف."
  }
  fr = {
	"title": "french title",
	"description": "french body"
  }

const defaultLocale = navigator.language.split('-')[0];

let translations = {};

document.addEventListener('DOMContentLoaded', () => {
	setLocale(defaultLocale);
});

const switcher = document.getElementById('localization-switcher');
switcher.onchange = (e) => {
	setLocale(e.target.value);
	console.log("setLocale",e.target.value)
};

const setLocale = async (newLocale) => {
	translations = await fetchTranslationsFor(newLocale);
	translatePage();

	document.documentElement.dir = direction(newLocale);
};

const direction = (locale) => {
	console.log("local",locale)
	return locale === 'ar' ? 'rtl' : 'ltr';
};

async function fetchTranslationsFor(newLocale) {
	console.log("newLocale",newLocale)
	let newtest = newLocale + ".json"
	console.log("newtest",newtest)
	let url = `./lang/${newLocale}.json`
	console.log("url",url)

	if (newLocale == 'ar'){
		console.log(ar)
		return ar;
	}
	if (newLocale == 'en'){
		console.log(en)
		return en;
	}
	if (newLocale == 'fr'){
		console.log(fr)
		return fr;
	}
	// fetch(`/lang/ar.json`).then(response => {
  	// 	return response.json();
	// 	}).then(data => {
	// 	console.log(data);
	// 	}).catch(err => {
	// 	console.log("error",err)
	// 	});

	// const response = await fetch(`Users/User/OneDrive/Desktop/New%20folder/testDemo/lang/${newLocale}.json`);
	// console.log("response",response)
	// if (response.ok) {
	// 	console.log("get data")
	// }
	// if (!response.ok) {
	// 	console.log(`Could not fetch translations for locale ${newLocale}`);
	// }
	// return await response.json();
}

const translatePage = () => {
	document.querySelectorAll('[localization-key]').forEach((element) => {
		let key = element.getAttribute('localization-key');
		console.log("key",key)
		let translation = translations[key];
		console.log("translation",translation)
		element.innerText = translation;
	});
};
