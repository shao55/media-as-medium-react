import logo from './logo.svg';
import index_1 from './img/index_1.png';
import index_2 from './img/index_2.png';
import index_3 from './img/index_3.png';
import img from './img/Img.png';
import icon from './img/Icon.png';
import './media_as_medium.css';

const media_as_medium = () => {
  return (
    <body>
      <header>  
        <div className="container">
              <div class="header_nav">
                  <a href="./index.html">medium alike</a>
              </div>
              <div class="header_title">
                  <h1>Hello, world!</h1>
              </div>
          </div>
      </header>
      <main>
        <div className='container'>
          <div className='main_content' id="articles">
            <div className='content_element'>
              <div className='element_text'>
                <div className='text_header'>
                  <div class="avatar">
                    <img src={img} alt="Logo"/>
                  </div>
                  <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
                </div>
                <div className='text_main'>
                  <h2 id="title">7 Practical CSS Tips</h2>
                  <p id="summary">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                </div>
                <div className='text_footer'>
                  <div class="footer_left">
                    <button class="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
                  </div>
                  <div class="footer_right">
                    <img className='tags_img' src={icon} alt=""/>
                    <img className='tags_img' src={icon} alt=""/>
                    <img className='tags_img' src={icon} alt=""/>
                  </div>
                </div>
              </div>
              <div className='element_img'>
                <img src={index_1} alt="article"/>
              </div>
            </div>
            <div className='content_element'>
              <div className='element_text'>
                <div className='text_header'>
                  <div class="avatar">
                    <img src={img} alt="Logo"/>
                  </div>
                  <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
                </div>
                <div className='text_main'>
                  <h2 id="title">7 Practical CSS Tips</h2>
                  <p id="summary">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                                You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
                </div>
                <div className='text_footer'>
                  <div class="footer_left">
                    <button class="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
                  </div>
                  <div class="footer_right">
                    <img className='tags_img' src={icon} alt=""/>
                    <img className='tags_img' src={icon} alt=""/>
                    <img className='tags_img' src={icon} alt=""/>
                  </div>
                </div>
              </div>
              <div className='element_img'>
                <img src={index_2} alt="article"/>
              </div>
            </div>
            <div className='content_element'>
              <div className='element_text'>
                <div className='text_header'>
                  <div class="avatar">
                    <img src={img} alt="Logo"/>
                  </div>
                  <a href="#">Authors name</a> <span>&nbsp;in&nbsp;</span><a href="#">Topics Name</a>&nbsp;· <span>&nbsp;7 july</span>
                </div>
                <div className='text_main'>
                  <h2 id="title">7 Practical CSS Tips</h2>
                  <p id="summary">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced.
                                You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
                </div>
                <div className='text_footer'>
                  <div class="footer_left">
                    <button class="tag">Java Script</button><span>&nbsp;12 min read&nbsp;</span>  · <span>&nbsp;Selected for you&nbsp;</span>
                  </div>
                  <div class="footer_right">
                    <img className='tags_img' src={icon} alt=""/>
                    <img className='tags_img' src={icon} alt=""/>
                    <img className='tags_img' src={icon} alt=""/>
                  </div>
                </div>
              </div>
              <div className='element_img'>
                <img src={index_3} alt="article"/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div class="container">
            <div class="footer_main">
                <div class="footer_description">
                  <p class="footer_description_text">Credits: photos from <a href="https://unsplash.com/@surface" class="footer_description_text_links">Unsplash.com</a>, icons from <a href="https://icons8.com/" class="footer_description_text_links">Icons8</a>, graphics from <a href="https://craftwork.design/checkout/purchase-confirmation/?payment_key=a3ba0d28aa30dfd691cd535acb1f4228" class="footer_description_text_links">craftwork.design</a>.</p>	
                </div>
                <div class="footer_end">
                  <p class="footer_end_text">Made with ✨❤️ at nFactorial in 2022.</p>
              </div>
            </div>
        </div>
    </footer>
    </body>
  );
}

export default media_as_medium;