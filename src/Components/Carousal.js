import React from 'react'
import hostel from '../img/hostel_bldg.jpg'
import common from '../img/Common.jpg'
import Gym1 from '../img/Gymn_Sessions.jpg'
import Gym2 from '../img/Gym2.jpg'
import Mess from '../img/Mess.jpg'
import News from '../img/News.jpg'
import Yoga1 from '../img/Yoga Sessions.jpg'
import Yoga2 from '../img/Yoga2.jpg'
import TV from '../img/TV.jpg'
import Room from '../img/Room.jpg'
import Room2 from '../img/Room2.jpg'

export default function Carousal() {
  return (
    <div className='container' >
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
          </div>
          <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100 img-fluid"  src={hostel} alt="First slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}}>Hostel Building</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={common} alt="Second slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >Common area for prayer and recreational activities</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Gym1} alt="Third slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >Multifunctional Home Gym and warm-up</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Gym2} alt="Fourth slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Mess} alt="Fifth slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >Mess/Dining Area</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={News} alt="Sixth slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >Newspaper Corner</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Yoga1} alt="Seventh slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >Yoga Sessions</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Yoga2} alt="Eigth slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={TV} alt="Ninth slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >TV Hall</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Room} alt="Tenth slide"/>
                  <div class="carousel-caption d-none d-md-block">
                    <h3 style={{backgroundColor: '#333'}} >Room Facilities</h3 >
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100 img-fluid"  src={Room2} alt="Eleventh slide"/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>
        
        
    </div>
  )
}
