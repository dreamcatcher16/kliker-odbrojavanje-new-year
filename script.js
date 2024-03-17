days = document.getElementById('days')
hours = document.getElementById('hours')
minutes = document.getElementById('minutes')
seconds = document.getElementById('seconds')
countdown = document.getElementById('countdown')
year = document.getElementById('year')
loading = document.getElementById('loading')

// tekuća godina
currentYear = new Date().getFullYear()
year.innerText = currentYear + 1

newYearTime = new Date(`1.1.${currentYear + 1} 00:00:00`)


function updateCountdown() {
  // trenutno vreme
  currentTime = new Date()
  // razlika između trenutnog datuma i datuma Nove godine (u milisekundama)
  diff = newYearTime - currentTime

  // na matematički način dobijamo dane, sate, minute i sekunde
  d = Math.floor(diff / 1000 / 60 / 60 / 24)
  h = Math.floor(diff / 1000 / 60 / 60) % 24 // vodimo računa da ne bude više od 24 sata (% 24) 
  m = Math.floor(diff / 1000 / 60) % 60 // vodimo računa da ne bude više od 60 minuta (% 60) 
  s = Math.floor(diff / 1000) % 60 // vodimo računa da ne bude više od 60 sekundi (% 60) 

  // postavljamo vrednosti u okviru stranice
  days.innerText = d
  // ukoliko je broj sati/minuta/sekundi manji od 10, dodaćemo 0 ispred vremena (npr. 07)
  hours.innerText = h < 10 ? '0' + h : h
  minutes.innerText = m < 10 ? '0' + m : m
  seconds.innerText = s < 10 ? '0' + s : s
}

// kada se stranica učita, nakon jedne sekunde (1000 milisekundi)
// uklonićemo spinner i prikazaćemo vreme
setTimeout(() => {
  loading.remove()
  countdown.style.display = 'flex'
}, 1000)

// svake sekunde osvežavamo vrednosti na ekranu, odnosno pozivamo updateCountdown funkciju
setInterval(updateCountdown, 1000)
