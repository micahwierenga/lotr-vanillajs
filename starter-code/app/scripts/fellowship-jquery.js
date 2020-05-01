console.log("linked");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const lands = ['The Shire', 'Rivendell', 'Mordor'];
const $body = $('body');


// Part 1

function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  // for each land, create an article tag
  // add an id to each article and the value of each id is the name of the land
  // in each article, create an h1 element whose text is the land name
  // inside each article tag include an h1 with the name of the land
  // append each article to the middle earth section
  // append the middle earth section to your document body
  const $midEarth = $('<section>');
  $midEarth.attr('id', 'middle-earth');

  for(let i = 0; i < lands.length; i++) {
    const $landArticle = $('<article>');
    const $landTitle = $('<h1>');
    $landTitle.text(lands[i]);
    $landArticle.append($landTitle);
    $midEarth.append($landArticle);
  }
  $body.append($midEarth);
}


// Part 2

function makeHobbits() {
  // display an unordered list from the hobbits array inside the shire article tag
  // (this is the first article tag on the page)
  // give each hobbit a class of hobbit and set the text of each list item to each hobbit's name
  const $ul = $('<ul>');

  const $shire = $('article').eq(0);
//   const $shire = $('article').first();
  for(let i = 0; i < hobbits.length; i++) {
    const $li = $('<li>')
    $li.text(hobbits[i]);
    $li.addClass('hobbit');
    $ul.append($li);
  }

  $shire.append($ul);
}


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech 
  // function (provided) is invoked
  // add the ring as a child of Frodo
  const $div = $('<div>');
  $div.attr('id', 'the-ring');
  $div.addClass('magic-imbued-jewelry');
  $div.on('click', nazgulScreech)

  const frodo = $('.hobbit').eq(0);
  frodo.append($div);
}

function nazgulScreech(){
  $('#nazgul-screech').get(0).play();
}


// Part 4

function makeBuddies() {
  // create an aside tag
  // attach an unordered list from the buddies array in the aside
  // append the buddy list inside the rivendell article element

}


// Part 5

function beautifulStranger() {
  // change the text 'Strider' to 'Aragorn'
  // (search the buddies ul and find strider)
  
}


// Part 6

function leaveTheShire() {
  // move the hobbits list inside the rivendell article
  
}


// Part 7

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within the rivendell article
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  // (after you've completed this function, you may want to comment out the alert)
  
}


// Part 8

function theBalrog() {
  // change the 'Gandalf the Grey' textNode to 'Gandalf the White'
  // apply style to the element by making the background 'white' and adding a grey border
  
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // (you may want to comment this out after you've completed this function)
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on Boromir's name
  // remove Boromir from the Fellowship
  
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to the mordor article
  // add a div with an id of 'mount-doom' to Mordor
  
}


// Part 11

function weWantsIt() {
  // create a div with an id of 'gollum' and add it to the mordor article
  // remove the ring from Frodo and give it to Gollum
  // move Gollum into Mount Doom
  
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // move all the hobbits back to the shire
  
}

$('#makeMiddleEarth').on('click', makeMiddleEarth)
$('#makeHobbits').on('click', makeHobbits)
$('#keepItSecretKeepItSafe').on('click', keepItSecretKeepItSafe)
$('#makeBuddies').on('click', makeBuddies)
$('#beautifulStranger').on('click', beautifulStranger)
$('#leaveTheShire').on('click', leaveTheShire)
$('#forgeTheFellowShip').on('click', forgeTheFellowShip)
$('#theBalrog').on('click', theBalrog)
$('#hornOfGondor').on('click', hornOfGondor)
$('#itsDangerousToGoAlone').on('click', itsDangerousToGoAlone)
$('#weWantsIt').on('click', weWantsIt)
$('#thereAndBackAgain').on('click', thereAndBackAgain)

$('#clickAll').on('click', function(e) {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBuddies();
  beautifulStranger();
  leaveTheShire();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});