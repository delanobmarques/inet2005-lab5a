import React from 'react';

const MyForm = () => {
    return (
        <div className="container">
          <form className="form-signin">
              <h3>Post Id: </h3>
              <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input 
                      type="text" 
                      className="form-control" 
                      id="title" 
                      name="title" 
                      placeholder="Enter post title" 
                      
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="inputBody2">Body</label>
                  <textarea 
                      className="form-control" 
                      id="body" 
                      name="body"
                      rows="5"
                      placeholder="Enter post body"
  
                  >
                  </textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
    )
}

export default MyForm