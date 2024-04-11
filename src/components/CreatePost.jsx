// create posts here with a form 
import Header from './Header'
import { useState } from 'react';

function CreatePost() {
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData);
      
      fetch(`http://localhost:3000/blog/post`, {
        method: 'Post', 
        headers: {
          'Authorization': `${localStorage.getItem('SavedToken')}`,
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((response) => {
        setMessage(response);
        
      })
      .catch((err) => {
        setMessage(err.toString());
      });
    }

    return (
      <>
        <Header ></Header>
        {/* if user is logged in */}
        <form method="POST" onSubmit={handleSubmit}>
            <label htmlFor="name"> Name </label>
            <input type="text" name='name' placeholder='name'/> <br />
            <label htmlFor="title"> Title </label>
            <input type="text" name='title' placeholder='title'/> <br />
            <label htmlFor="text"> Text </label>
            <input type="text" name='text' placeholder='text'/> <br />
            <label htmlFor="published"> Published </label>
            <input type="checkbox" name='published'/> <br />
            <button>Post</button>
        </form>
        <p>{message}</p>
      </>
    )
  }
  
  export default CreatePost