import React, { useState } from 'react';

// import Rating from "./component/rating";
const Rating = ({ maxRating, onChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(maxRating)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                onChange(ratingValue);
              }}
            />
            <i
              className="fa fa-star"
              style={{ color: ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9' }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
    </div>
  );
};

// import ReviewForm from "./component/reviewform";
const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

// import HandleSubmit from "./component/handleSubmit";
  const HandleSubmit = event => {
    event.preventDefault(); // to prevent the form from been summit
    
    onSubmit({ rating, review, name, email, comment });
    setRating(0);
    setReview('');
    setName('');
    setEmail('');
    setComment('');
  };

  
  return (
    <form onSubmit={HandleSubmit}>
      <h3>Leave a review</h3>
      <Rating maxRating={5} onChange={setRating} />
      <textarea
        rows="4"
        cols="50"
        value={review}
        onChange={event => setReview(event.target.value)}
      />
      <br />

      <h3>Enter a name</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <br />

      <h3>Enter your Email</h3>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br />

      <h3>Leave a comment</h3>

      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={event => setComment(event.target.value)}
      />
      <br />

      <button type="submit">Submit</button>

    </form>
  );
};

const ReviewsList = ({ reviews }) => (
  <>
    <h3>Reviews</h3>
    {reviews.map((review, index) => (
      <div key={index}>
        <p>Rating: {review.rating}</p>
        <p>Review: {review.review}</p>
        <p>Name: {review.name}</p>
        <p>Email: {review.email}</p>
        <p>Comment: {review.comment}</p>
      </div>
    ))}
  </>
);

const App = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = review => {
    // Submit the comment to the WordPress REST API
    const data = JSON.stringify({
      post: review.postId,
      author_name: review.name,
      author_email: review.email,
      content: review.comment,
    });

    // Replace ACTION_URL with the URL of your WordPress site
    fetch("http://localhost/wordpress/mysite/index.php/2023/06/21/hello-world/" ,{
      method: 'post',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok === true) {
          // Comment submitted successfully
          // Add the review to the list of reviews
          setReviews([...reviews, review]);
        }
        console.log(response);
        return response.json();
      })
      .then(object => {
        // Comment submission failed
        // Output `object.message` to see the error message
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewsList reviews={reviews} />
    </>
  );
};

export default App;



// import React, { useState } from "react";

// const App = () => {
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");

//   const handleRatingChange = (event) => {
//     setRating(event.target.value);
//   };

//   const handleReviewChange = (event) => {
//     setReview(event.target.value);
//   };

//   const HandleSubmit = (event) => {
//     event.preventDefault();


    
    
    
//     // Submit the rating and review to the server
//   };

//   return (
//     <form onSubmit={HandleSubmit}>
//       <label>
//         Rating:
//         <select value={rating} onChange={handleRatingChange}>
//           <option value={0}>Select a rating</option>
//           <option value={1}>1 star</option>
//           <option value={2}>2 stars</option>
//           <option value={3}>3 stars</option>
//           <option value={4}>4 stars</option>
//           <option value={5}>5 stars</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Review:
//         <textarea value={review} onChange={handleReviewChange} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default App;








