const sounds = ["bang", "boo", "cinematic", "flutter", "applause"];
sounds.forEach(sound => { 
const btn = document.createElement("button");
btn.innerText = sound;
document.body.append(btn);
});
const audio = document.querySelectorAll("audio");
btn.addEventListener ('click', () => {
console.log('click');


})




