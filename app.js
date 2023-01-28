
console.log(document);
console.log(document.all);
console.log(document.all[2]);
console.log(document.all.length);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

let forms = document.forms;
console.log(forms);
console.log(forms.length);
let form = forms[0];
console.log(form);
console.log(form.id);
console.log(form.method);
console.log(form.action);

console.log(document.links);

let link = document.links[0];
console.log(link.id);
console.log(link.className);
console.log(link.classList);

let images = document.images;
console.log(images);

let scripts = document.scripts;
console.log(scripts);

// might error if you aren't running with vite
console.log(document.scripts[3].getAttribute('src'));

let scriptsArray = Array.from(scripts);

scriptsArray.forEach(function(script) {
  console.log(script.getAttribute('src'));
});
