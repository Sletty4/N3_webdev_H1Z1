let videos = [
	{
		name:"BigBuckBunny", // à compléter
		url:"video/BigBuckBunny_512kb.mp4",
		duration:"00:09:56", // à compléter
		format:"MP4",
		subtitle:""
	},
	{
		name:"Python",// à compléter
		url:"video/Python_512kb.mp4",
		duration:"00:01:36",// à compléter
		format:"MP4",
		subtitle:"video/ed_hd_512kb.fr.vtt"
	},
	{
		name:"ed_hd",// à compléter
		url:"video/ed_hd_512kb.mp4",
		duration:"00:10:53",// à compléter
		format:"MP4",
		subtitle:""
	},
]

let video_num;
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
/*let btappliquer = document.getElementById("btappliquer")*/

let btload =  document.getElementById("btcharger")

let subtitles = document.getElementById("subtitles")



let btplus = document.getElementById("btplus")
let table = document.getElementById("table_stbis")



//***************
     //recuperation des soustritre du tableau
	  var x = document.getElementById("table_st").rows[2].cells;
	  var longueur= document.getElementById("table_st").rows[2].length;
	  var lastbarsoustitre=document.getElementById("lastbarsoustitre").rows[0].cells;
	  //*********************

window.onTimeUpdate = (e) => {

	let current_time = new Date(Math.round(e.target.currentTime * 1000))
	current_time.setHours(current_time.getHours() -1)
	current_time_display.innerHTML = current_time.toLocaleTimeString("fr-FR")/* + " " +current_time.getMilliseconds()*/
    
	
	var chars = videos[video_num].duration.split(":");
     //convertion en seconde
	 var intime = current_time_display.innerHTML.split(":");
	
    
	var totalsecond=parseInt(chars[0]*60*60)+parseInt(chars[1]*60)+parseInt(chars[2]);
   
    var totalsecondactuel=parseInt(intime[0]*60*60)+parseInt(intime[1]*60)+parseInt(intime[2]);
	//alert(totalsecondactuel);
		
	//avance avec la video
	speed=886/totalsecond*totalsecondactuel;
	
	
	
	//********************************************************************detection de soustitres
	 for (let i = 0; i < 2; i++) {
		  
		  var y = document.getElementById("table_st").rows[i].cells;
		  
		 
     //convertion en seconde
	 var currentimesecondestr = current_time_display.innerHTML.split(":");
	 //on prend la premiere partie du tableau pour avec la position du soustitre dans le temps
	 var subtitlesecondestr = y[0].innerHTML.split(":");

   
    var totalsecondactuel=parseInt(currentimesecondestr[0]*60*60)+parseInt(currentimesecondestr[1]*60)+parseInt(currentimesecondestr[2]);
	
	
	var totalseconddusoustitre=parseInt(subtitlesecondestr[0]*60*60)+parseInt(subtitlesecondestr[1]*60)+parseInt(subtitlesecondestr[2]);
	 if (isNaN(totalseconddusoustitre)) {
  totalseconddusoustitre=0;
  }else{
	  	if(totalsecondactuel==totalseconddusoustitre){
		
				for (let k = 0; k <3; k++) {
					
					
					lastbarsoustitre[k].innerHTML=y[k].innerHTML;
			
				}
		
		
	}
  }

	

	
	  }
};


btvid1.onclick = (e) => {
	video_num = 0;
	change_video();
}
btvid2.onclick = (e) => {
	video_num = 1;
	change_video();
}
btvid3.onclick = (e) => {
	video_num = 2;
	change_video();
	
}




	

	  
	 
	  
	  
	  //recupere les donnees du tableau pour la sauvegarde dans un fichier
	  function savetabletofile(){
		  
	
			 for (let i = 0; i < 3; i++) {
		  
		  var z = document.getElementById("table_st").rows[i].cells;
		  
	  subtitles.innerHTML=subtitles.innerHTML+z[0].innerHTML+"   "+z[1].innerHTML+"   "+z[2].innerHTML+"\n";
			 }
		
	  }
	  
	  
	

	  
function change_video(){
	
	
	
	//pour avoir le temps pour le timeline
    TimelineDuration.innerHTML = videos[video_num].duration;
	
	
	nom_video.innerHTML = videos[video_num].name;
	duree_video.innerHTML = videos[video_num].duration;
	myvideo.src = videos[video_num].url;

	    
	
 savetabletofile();
	
	
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
	myvideo.load(video_num)
}

btprec.onclick = (e) => {
	video_num = video_num - 1;
	if (video_num == -1) video_num = 2
	change_video();
}

btsuiv.onclick = (e) => {
	video_num = video_num + 1;
	if (video_num == 3) video_num = 0
	change_video();
}

btload.onclick = (e) => {
	 var loadfile = document.getElementById("fileLoader");
      loadfile.click();
	//loadsubtitles();
}

btsave.onclick = (e) => {
	makeLink (subtitles.value);
}
/*
btappliquer.onclick = (e) => {
	makeLink (subtitles.value);
}/*

/*
btsauvegarder.onclick=(e)=>{
	
	makeLink (table_st.value);
}
*/
btplus.onclick = (e) => {
	var nouvelleLigne = table.insertRow(table.rows.length);
	var Temps = document.getElementById('Temps').value;
	var Durée = document.getElementById('Durée').value;
	var Texte = document.getElementById('Texte').value;
    var nouvelleCellule = nouvelleLigne.insertCell(0);
	var nouveauTexte = document.createTextNode(Temps);
    nouvelleCellule.appendChild(nouveauTexte);
    var nouvelleCellule = nouvelleLigne.insertCell(1);
	var nouveauTexte = document.createTextNode(Durée);
    nouvelleCellule.appendChild(nouveauTexte);
    var nouvelleCellule = nouvelleLigne.insertCell(2);
	var nouveauTexte = document.createTextNode(Texte);
    nouvelleCellule.appendChild(nouveauTexte);
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

function loadsubtitles(){
	subtitles.innerHTML = fetch(videos[video_num].subtitle);
}

//pour choisir un fichier a partir de l explorateur
/*
function openfileDialog() {
    $("#fileLoader").click();
}
*/

//gestion du canva
var canvas,ctx
let posx = 0
let speed = 0; // controlée par les boutons
let rectWidth = 11;
let mousex, mousey;
/*
function caculatespeed(){
	

	speed=(myvideo.duration*1000)/886;
	
	
}*/

function init(){
	
	
	// récupération de l'objet canvas par son id et apres qu'il ait été chargé
	canvas = document.getElementById("Timelinebar1");
	ctx = canvas.getContext("2d");
		canvas.onmousemove=(e) => {
		mousex = e.offsetX;
		mousey = e.offsetY;
		};
	
	window.requestAnimationFrame(gameLoop);

}

 //fonction de dessin appelée en boucle
 function draw() {
	
	
	posx = speed	
	if(posx >= canvas.width-rectWidth){
		posx = canvas.width-rectWidth
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillRect(posx,0,rectWidth,16);
	/*drawMouseCoordinates();*/
 }
 


function gameLoop(timeStamp) {
	
	draw()
	
	window.requestAnimationFrame(gameLoop);
}
window.onload = init
