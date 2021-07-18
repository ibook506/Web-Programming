import React,{useState, useEffect} from 'react'

import {HomeSlide} from './HomeSlide'
import Post from './Post/CreatePost'
import {getPosts} from '../../api'


 const Home = () =>{
  const [posts, setPosts] = useState([])

  useEffect(()=>{
      const fetchPosts = async () =>{
          const posts = await getPosts()
          setPosts(posts)
      }

      fetchPosts()

   }, [])

   console.log(posts)

    return (
        <>
        <main className='container'>
            <section>


                
                <h2 className="text-warning center" >Welcome to CSC 506 Web and Internet Programming</h2>
                <Post />
                <HomeSlide />
                

                <div className="text-light">
                                <h3>Brief History of the Internet</h3>
                                <p className="white">As far back as the early stirrings of the Cold War, the concept of a network connecting
                            computers was under development by both government and university researchers looking
                            for a better means to communicate and share research. The military at the time relied in
                            part on microwave transmission technology for communications. An unexpected attack on
                            some of these towers demonstrated how susceptible the technology was to failure of even
                            small portions of the transmission path. This led the military to seek a method of commu-
                            nicating that could withstand attack. At the same time, university researchers were trying
                            to share their work between campuses, and were struggling with similar problems when
                            their transmissions suffered drops in signal. Parties from both groups ended up at the same
                            conference with presentations, and decided to collaborate in order to further their work.
                            At the time, computers were far from what we know them as today. A single computer
                            was a large, immobile assortment of equipment that took up an entire room. Data entry was
                            done by using punched cards of paper, or the newest method of the time, magnetic tapes.
                            Interacting with the computer meant reserving time on the equipment and traveling to
                            where it was. Most machines were owned by universities, large corporations, or government
                            organizations due to the staffing demands, size, and cost to acquire and maintain them. The
                            image below depicts the UNIVAC 1, a system used by the United States Census Bureau
                            and other large organizations like universities.</p>
                    </div>         
               </section>   
               
        </main>

        <div class="input-group input-group-lg">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroup-sizing-lg">Comment</span>
  </div>
  <input type="text" name="comment" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="comment" />
</div>
        </>
    )
}

export default Home
