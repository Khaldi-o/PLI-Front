const test = document.getElementById('test');
const test1 = document.getElementById('test1');
//test.textContent = "123124";

var map = L.map('map').setView([51.505, -0.09], 3.2);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: '1nonym/ckyeawjh603ny14qp8zyg4mb9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiMW5vbnltIiwiYSI6ImNreWRwNTRrMjAxZWQzM3Q2a2h0cmJkZ3UifQ.Bp62vSarL8SfLoUzvMIjmw'
}).addTo(map);



marker1 = L.marker([26.696361500000002, 30.246486000000004]).addTo(map);
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
