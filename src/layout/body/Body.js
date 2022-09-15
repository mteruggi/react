import Banner from '../bannerComponent/Banner';
import TextBanner from '../textBannerComponent/TextBanner';
import SliderBanner from '../sliderBannerComponent/SliderBanner'
import BrandCarousel from '../brandCarousel/BrandCarousel';

import Functions from '../functions/Functions'


function Body() {
    return (
        <section className='App-body'>
            <Banner
                styleClass='component-Banner-Hero'
                title='Seek Reinvention'
                subTitle='We deliver transformation through technology. We are behind some of the world’s most innovative organizations, disrupting industries for the better.'
                link='Watch now'
                linkAddress='www.google.com'
            />

            <Banner
                styleClass='component-Banner-small container'
                title='We are reinventing consulting.'
                subTitle='No more copy paste solutions, no more endless talk with no real actions.'
                link='WATCH THE VIDEOS'
                linkAddress='www.google.com'
            />

            <TextBanner
                styleClass='text-banner container'
                title='Client Reinvention Stories'
                content='As people and as brands, we are always growing, changing, evolving. At Globant, we’re reinventing the professional services industry, creating solutions that move our clients forward. Explore the power of reinvention with us and learn about our most transformative client stories.'
            />

            <SliderBanner
                styleClass='slider-banner container'
                title='futuro slider banner'
            />

            <BrandCarousel 
                styleClass='brand-carousel'
                title='Some of the clients we work with'
                content="We're proud of what we do and who we do it with. That's why we say when you succeed, we succeed."
                Id="Carousel"

            />

            <Functions />
        </section>
        
    );
}

export default Body;