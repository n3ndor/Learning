import { useRef, useState } from 'react';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <>
      <h2>Home Page</h2>
      <hr />
      <p>test: <a href="http://localhost:3000/api/feedback">http://localhost:3000/api/feedback</a>  </p>
      <p>or: <a href="http://localhost:3000/feedback">http://localhost:3000/feedback</a></p>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <br />
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <br />
          <textarea id="feedback" rows="5" ref={feedbackInputRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <ul>
        {feedbackItems.map(item =>
          <li key={item.id}>{item.text}</li>
        )}
      </ul>
      <hr />
    </>
  )
}

export default HomePage;