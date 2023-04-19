console.log("testing");


// List Items

const artDirection = document.getElementById('art-direction');
const editorialDesign = document.getElementById('editorial-design');
const digitalMarketing = document.getElementById('digital-marketing');
const brandIdentity = document.getElementById('brand-identity');
const printWebDesign = document.getElementById('print-web-design');

// add art direction
artDirection.addEventListener('click', addArtDirection);

function addArtDirection(){
  artDirection.classList.add('art-direction');
 