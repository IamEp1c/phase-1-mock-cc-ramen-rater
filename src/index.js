// do your fetch

fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => {
    // console.log(data)
    renderRamen(data)
    
})

// fetch('http://localhost:3000/ramens/:id')
// .then(resp => resp.json())
// .then(data => {
//     console.log(data)
//     ramenForm(data)
// })


//  ** FIRST DELIVERABLE ** 
// See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

// grab the elements I need

// ** SECOND DELIVERABLE ** 
// Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
const ramenMenu = document.querySelector('#ramen-menu')

function renderRamen(data){
    data.forEach(ramens => {
        // console.log(ramens)
        const img = document.createElement('img')
        img.src = ramens.image

        ramenMenu.append(img)


        img.addEventListener('click', (e) =>{
            e.preventDefault();
          const detailImage = document.querySelector('.detail-image') // already have my src tag
          
          detailImage.src = ramens.image
         
          const name = document.querySelector('.name')
          name.textContent = ramens.name

          const restaurant = document.querySelector('.restaurant')
          restaurant.textContent = ramens.restaurant

          const ratingDisplay = document.querySelector('#rating-display')
          ratingDisplay.textContent = ramens.rating
          const commentDisplay = document.querySelector('#comment-display')
          commentDisplay.textContent = ramens.comment



          const form = document.querySelector('#new-ramen')

          // grab the elements you need to grab a value from it
          // those elements then have to be appended to the global variable you created 'ramenMenu'
          const nameInput = document.querySelector('#new-name')
          const restaurantInput = document.querySelector('#new-restaurant')
          const newImageInput = document.querySelector('#new-image')
          const newRatingInput = document.querySelector('#new-rating')
          const newCommentInput = document.querySelector('#new-comment')
      
          form.addEventListener('submit', (e) => {
              e.preventDefault();
            const newRamen = {
                name: nameInput.value, 
                restaurant: restaurantInput.value, 
                image: newImageInput.value,
                rating: newRatingInput.value, 
                comment: newCommentInput.value
            }
            renderRamen([newRamen])
      
       
          })
        })
    })
} // end of renderRamen 


// working on form

// Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.














































// function ramenForm(){
    
//         // console.log(ramens)

//         // grab form
// const form = document.querySelector('#new-ramen')
// // this is a name input value 
// const newName = document.querySelector('#new-name')

// // all input values
// // const newRestaurant = document.querySelector('#new-restaurant')
// const newImage = document.querySelector('#new-image')
// const newRating = document.querySelector('#new-rating')
// const newComment = document.querySelector('#new-comment')
// // grab elements
// const ratingDisplay = document.querySelector('#rating-display') // WHERE I HAVE TO APPEND
// const commentDisplay = document.querySelector('#comment-display')


// form.addEventListener('submit' , (e) => {
//     e.preventDefault();
//     // const newName = document.querySelector('#new-name')
//     const createName = document.createElement('p')
//     createName.innerText = newName.value
    

//     // const restaurantName = document.createElement('p')
//     const newRestaurant = document.querySelector('#new-restaurant').value
//     // restaurantName.textContent = newRestaurant.value

//     const img = document.createElement('img')
//     img.src = newImage.value

//     img.rating
//     const rating = document.createElement('p')
//     rating.textContent = newRating.value


//     ramenMenu.append(createName, newRestaurant, img)
//     ratingDisplay.appendChild(rating)


// })



// } // end of ramenForm 
