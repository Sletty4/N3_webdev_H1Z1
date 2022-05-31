let videos = [
	{
		name:"BigBuckBunny", // à compléter
		url:"video/BigBuckBunny_512kb.mp4",
		duration:"00:09:56", // à compléter
		format:"MP4"
	},
	{
		name:"Python",// à compléter
		url:"video/Python_512kb.mp4",
		duration:"00:01:36",// à compléter
		format:"MP4"
	},
	{
		name:"ed_hd",// à compléter
		url:"video/ed_hd_512kb.mp4",
		duration:"00:10:53",// à compléter
		format:"MP4"
	},
]

let e = 0;
let nom_video = document.getElementById("nom_video");
let duree_video = document.getElementById("duree_video");
let current_time_display = document.getElementById("current_time");
let myvideo = document.getElementById("myvideo");
let btplay = document.getElementById("btplay")
let btstop = document.getElementById("btstop")
let subtrack = document.getElementById("subtrack")
let btpause =  document.getElementById("btpause")
let btprec =  document.getElementById("btprec")
let btsuiv =  document.getElementById("btsuiv")


let btrewind = document.getElementById("btrewind")
let btforward = document.getElementById("btforward")

let btsave = document.getElementById("btsave")

let subtitles = document.getElementById("subtitles")

window.onTimeUpdate = (e) => {

	let current_time = new Date(Math.round(e.target.currentTime * 1000))
	current_time.setHours(current_time.getHours() -1)
	current_time_display.innerHTML = current_time.toLocaleTimeString("fr-FR")/* + " " +current_time.getMilliseconds()*/
    
};


btvid1.onclick = (e) => {
	change_video(0);
}
btvid2.onclick = (e) => {
	change_video(1);
}
btvid3.onclick = (e) => {
	change_video(2);
}

function change_video(n){
	nom_video.innerHTML = videos[n].name;
	duree_video.innerHTML = videos[n].duration;
	myvideo.src = videos[n].url;
	myvideo.load();
	myvideo.play();
}


btplay.onclick = (e) => {
	myvideo.play()
}

btpause.onclick = (e) => {
	myvideo.pause()	
}

btforward.onclick = (e) => {
	myvideo.currentTime = (myvideo.currentTime*1000 + 10000)/1000;
}

btrewind.onclick = (e) => {
	myvideo.currentTime = (myvideo.currentTime*1000 - 10000)/1000;
}

btstop.onclick = (e) => {
	myvideo.load()
}

btprec.onclick = (e) => {
	
}

btsuiv.onclick = (e) => {
	
}

btsave.onclick = (e) => {
	makeLink (subtitles.value)
}

//get current video time and put it in clipabord
function getCurrentVideoTime() {
	let current_time = new Date(Math.round(myvideo.currentTime * 1000))
	current_time.setHours(current_time.getHours() -1)
	//console.log(Math.round(e.target.currentTime * 1000));
	let time_string = current_time.toLocaleTimeString("fr-FR") + "," +current_time.getMilliseconds()
	//00:00:06,383 --> 00:00:09,427
	time_string = time_string + ' --> ' + current_time.toLocaleTimeString("fr-FR") + "," +current_time.getMilliseconds()
	
	return time_string
}

//Apply and make save link
function makeLink(trad_text){
	let blob = new Blob([trad_text], {type: 'text/plain'})
    , url = URL.createObjectURL(blob)
    , hf = document.getElementById('lnkdownload')
  ;
  hf.href = url;
  subtrack.src = url;
  hf.download = `subtitles`;
  hf.innerHTML = `download ${hf.download}`;

}





