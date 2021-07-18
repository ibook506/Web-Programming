import React from 'react'


 const Post = () =>{
    return (
        <main className='container'>
            <section>

        <div class="container mb-5">
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title:</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Post Title" />
          </div>
          <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="What's on your mind" ></textarea>
        <button type="button" class="btn btn-primary">Send Post</button>
          </div>
    </div>

            </section>
        
        </main>
    )
}

export default Post