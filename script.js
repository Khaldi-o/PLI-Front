fetch("pli_db_beau.json")
  .then(res=>res.json())
  .then(pli_db_beau=>console.log(pli_db_beau))


const test = document.getElementById('test');
const test1 = document.getElementById('test1');
//test.textContent = "123124";

var map = L.map('map', {
  center: [23.715227, 18.264239],
  zoom: 5,
  zoomControl: false,
  scrollWheelZoom: false
});
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: '1nonym/ckyeawjh603ny14qp8zyg4mb9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiMW5vbnltIiwiYSI6ImNreWRwNTRrMjAxZWQzM3Q2a2h0cmJkZ3UifQ.Bp62vSarL8SfLoUzvMIjmw'
}).addTo(map);



marker1 = L.marker([26.696361500000002, 30.246486000000004]).addTo(map);
marker1.on('click', function(leafletEvent) {
  window.location = "\countries/index.html";
});

marker2 = L.marker([33.5130695, 36.3095814]).addTo(map);
marker3 = L.marker([33.8439408, 9.400138]).addTo(map);
marker4 = L.marker([36.7753606, 3.0601882]).addTo(map);
marker5 = L.marker([34.0261951, -5.0231849]).addTo(map);
marker6 = L.marker([21.420847, 39.826869]).addTo(map);

function testFunction() {
  map.closePopup();
  marker1.bindPopup("<b>Spiderman</b><br>Cairo, Egypt").openPopup();
  
}

function testFunction2() {
  map.closePopup();
  marker2.bindPopup("<b>Hulk</b><br>Damas, Syria").openPopup();
}

function testFunction3() {
  map.closePopup();
  marker3.bindPopup("<b>Wolverine</b><br>Tunis, Tunisia").openPopup();
}

function testFunction4() {
  map.closePopup();

  marker4.bindPopup("<b>Wolverine</b><br>Alger, Algeria").openPopup();
}

function testFunction5() {
  map.closePopup();
  marker5.bindPopup("<b>Wolverine</b><br>Fez, Morocco").openPopup();
}

function testFunction6() {
  map.closePopup();
  marker6.bindPopup("<b>Wolverine</b><br>Makkah, Saoudi Arabia").openPopup();
}

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});




/*RECUPERER MODAL POP UP */

var modal = document.getElementById('simpleModal');
var modal2= document.getElementById('simpleModal2');
var modal3= document.getElementById('simpleModal3'); 
var modal4= document.getElementById('simpleModal4'); 
var modal5= document.getElementById('simpleModal5'); 

var modalBtn = document.getElementById('modalBtn'); // get button détails
var modalBtn2 = document.getElementById('modalBtn2');
var modalBtn3 = document.getElementById('modalBtn3');
var modalBtn4 = document.getElementById('modalBtn4');
var modalBtn5 = document.getElementById('modalBtn5');

var closeBtn = document.getElementById('Btnclose'); //get close button
var closeBtn2 = document.getElementById('Btnclose2');
var closeBtn3 = document.getElementById('Btnclose3');
var closeBtn4 = document.getElementById('Btnclose4');
var closeBtn5 = document.getElementById('Btnclose5');


modalBtn.addEventListener('click', openModal); // ouvrir click
modalBtn2.addEventListener('click', openModal2);
modalBtn3.addEventListener('click', openModal3);
modalBtn4.addEventListener('click', openModal4);
modalBtn5.addEventListener('click', openModal5);


closeBtn.addEventListener('click', closeModal); // fermer click
closeBtn2.addEventListener('click', closeModal2);
closeBtn3.addEventListener('click', closeModal3);
closeBtn4.addEventListener('click', closeModal4);
closeBtn5.addEventListener('click', closeModal5);


window.addEventListener('click', clickOutside);

/*fonction open mdal*/
function openModal(){
    modal.style.display= 'block';
    document.body.style.overflow = "hidden";
}

function openModal2(){
    modal2.style.display= 'block';
    document.body.style.overflow = "hidden";
}

function openModal3(){
    modal3.style.display= 'block';
    document.body.style.overflow = "hidden";
}

function openModal4(){
    modal4.style.display= 'block';
    document.body.style.overflow = "hidden";
}

function openModal5(){
    modal5.style.display= 'block';
    document.body.style.overflow = "hidden";
}
/*fonction close modal*/
function closeModal(){
    modal.style.display= 'none';
    document.body.style.overflow = "auto";
}

function closeModal2(){
    modal2.style.display= 'none';
    document.body.style.overflow = "auto";
}

function closeModal3(){
    modal3.style.display= 'none';
    document.body.style.overflow = "auto";
}

function closeModal4(){
    modal4.style.display= 'none';
    document.body.style.overflow = "auto";
}

function closeModal5(){
    modal5.style.display= 'none';
    document.body.style.overflow = "auto";
}
/*fonction clicker outside modal*/
function clickOutside(e){
    if(e.target == modal || e.target == modal2 || e.target == modal3 || e.target ==modal4 || e.target == modal5){
        modal.style.display='none';
        modal2.style.display='none';
        modal3.style.display='none';
        modal4.style.display='none';
        modal5.style.display='none';

        document.body.style.overflow = "auto";
    }
}