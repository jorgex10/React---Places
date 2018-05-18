function getPlaces() {
  return fetch("http://localhost:3001/places").then(data => {
    return data.json();
  }).catch(error => {
    console.log(error);
  })
}

function getPlace(slug) {
  return fetch("http://localhost:3001/places/" + slug).then(data => {
    return data.json();
  }).catch(error => {
    console.log(error);
  })
}

export { getPlaces, getPlace }

export default {
  places: [
    {
      imageUrl: '/images/place-3.jpeg',
      title: 'Desayunos el rey',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av Principal #20'
    },
    {
      imageUrl: '/images/place-1.jpeg',
      title: 'Starbucks Norte',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av Principal #21'
    },
    {
      imageUrl: '/images/place-2.jpeg',
      title: 'Pizza de amor',
      description: 'Starbucks Corporation is an American coffee company and coffeehouse chain.',
      address: 'Av Principal #22'
    }
  ]
}
