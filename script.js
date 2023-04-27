// Example function to fetch artists from a database and display them on the website
function fetchArtists() {
    fetch('/api/artists')
      .then(response => response.json())
      .then(data => {
        const artistList = document.getElementById('artist-list');
        data.forEach(artist => {
          const li = document.createElement('li');
          li.textContent = artist.name;
          artistList.appendChild(li);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Example function to play a music track
  function playMusic(trackId) {
    const audioPlayer = document.getElementById('audio-player');
    const trackUrl = `/music/${trackId}.mp3`;
    audioPlayer.src = trackUrl;
    audioPlayer.play();
  }
  
  // Example event listener for a form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // Send form data to a server using fetch() or XMLHttpRequest
  });