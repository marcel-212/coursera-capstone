import TestimonialCard from '../components/TestimonialCard'


const Testimonials = () => {
    return ( 
        <section className="testimonials">
            <div className="box">
                <TestimonialCard img='public/testimonials/avatar.png' name='Emily Carter' description='The pierogi were incredible — rich, comforting, and clearly handmade. I’ll definitely be back.'/>
                <div></div>
                <TestimonialCard img='public/testimonials/avatar.png' name='James Wilson' description='Great food and a warm atmosphere. Everything tasted fresh and thoughtfully prepared.'/>
                <div></div>
                <TestimonialCard img='public/testimonials/avatar.png' name='Olivia Bennett' description='Lovely place for a relaxed meal. The desserts were especially good.'/>
                <div></div>
            </div>
        </section>
     );
}
 
export default Testimonials;