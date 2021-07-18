import React from 'react'

import {HomeSlide} from './HomeSlide'


 const Home = () =>{
    return (
        <main className='container'>
            <section>


                <h1>HOME</h1>
                <h2>Welcome to CSC 506 Web and Internet Programming</h2>
                <HomeSlide />
            <div class="media-body">
                                <h3>Brief History of the Internet</h3>
                                <p>As far back as the early stirrings of the Cold War, the concept of a network connecting
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
                <form action="/html/tags/html_form_tag_action.cfm" method="post">
                  <div>
                  <textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">
                  Hey... say something!
                  </textarea>
                  </div>
                  <input type="submit" value="Submit">
                 </form>
            </section>
        
        </main>
    )
}

export default Home
