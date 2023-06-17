
const sounds = ['Bang', 'Boo', 'Cinematic', 'Flutter','Appluase'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
      // console.log('check');
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').append(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        //console.log('click');
        song.pause();
        song.currentTime = 0;
    });
}