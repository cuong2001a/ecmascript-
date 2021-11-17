import Header from '../component/header'
import Footer from '../component/footer'
const AboutPage = {
    render() {
        return `
            ${Header.render()}
                <section>
                    <div class="bg-blue-100 container-fluid  mx-5 mb-24 py-3 text-center">
                    <span class="text-gray-400"><a href="/#/">Home</a> / About us</span> 
                    </div>
                    <div class="container mx-auto text-center">
                        <div class="my-6">
                            <h3 class="text-6xl ">Our Story</h3>
                        </div>
                        <div class="text-content text-center mx-24">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                        
                        <img class=" w-6/12 mx-auto my-6 h-full" src="https://firebasestorage.googleapis.com/v0/b/ecmascript-14405.appspot.com/o/images%2Fabout2.png?alt=media&token=1bf7578b-844d-4899-aea5-bc50f11dff9b">
                        
                        
                    </div>
                </section>
            ${Footer.render()}
        `
    }
}
export default AboutPage