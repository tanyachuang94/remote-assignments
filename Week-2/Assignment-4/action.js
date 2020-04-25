const banner = document.getElementById('banner');
const headline = document.getElementById('headline');

banner.addEventListener('click', () => {
    document.querySelector('headline').innerHTML = `
  <h1>Have a Good Time!</h1>`;

}