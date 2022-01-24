import React from 'react'
import './Hostel_info.css'
import Carousal from './Carousal'

export default function Hostel_info() {
  return (
    <>
      <div className="container mb-3" style={{padding: 50 }}>
        <h1 style={{color: '#c81d1d'}}>Girls Hostel</h1>
        <div className="border1 col-xs-6 col-sm-6 col-md-4 mb-10"></div>
        <div className="border2 col-xs-6 col-sm-6 col-md-8 mb-10"></div><br></br>
        <p className='mb-3'>Government College of Engineering and Research, Avasari Khurd has one girls hostel in college campus near to Principal quarter having 230 students capacity for all four year .The area of hostel is 3200 sq. meter and having  4 floors, 48 rooms, 4 computer hall, 3 recreation hall, waiting area on each floor and lots of space for study. Girls hostel has very airy and healthy environment. Ragging is prohibited in girls hostel.</p><br></br>
        
        <h2 style={{color: '#c81d1d'}}>Admission Process</h2>
        <p className='mb-3'>The hostel admissions are purely on merit basis and according to the reservation rules by Government of Maharashtra and availability of seats in hostel. The admission fees for one year per student is Rs. 550/- (Government Fee) and Rs. 600/- (Non Government Fee) excluding the mess charges.</p>
        <a href="https://www.gcoeara.ac.in/admission/AY2019-20/Hostel%20Seat%20Distribution%202019-20%20new.pdf" class="badge badge-info text-dark"><p>Hostel Seat Distribution</p></a>
        <a href="https://www.gcoeara.ac.in/admission/AY2019-20/hostel_admission_form2019-20.pdf" class="badge badge-info text-dark"><p>Hostel Admission form</p></a><br></br>
        
        <br></br><h2 style={{color: '#c81d1d'}}>Hostel Facilities</h2>
        
        {/*Hostel facilities accordion*/}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <h4 style={{color: '#0b95dc' }}>Security and Maintenance</h4>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <p>24*7 hrs security is available.
              <br></br>Maintenance of hostel premises is monitored by student committee.
              </p></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <h4 style={{color: '#0b95dc' }}>Mess</h4>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" >
              <p>Mess is available and compulsory for all students staying in college hostel.</p> 
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <h4 style={{color: '#0b95dc' }}>Amenities</h4>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
               <p><strong>Gymnasium:</strong> Gymnasium: A well equipped gym is available for all girls with Power Bike, Personal Home Gym, Multifunctional Trade Mill, Dumbbells, Weight Lifting Set, Aerobic s Kit, Power Steps, Yoga Mats etc. The total cost of all equipments in gym is Rs. 1,78,915/-
               <br></br><strong>TV:</strong> One LCD TV is available for all girls in common room with DTH connection.
               <br></br><strong>Furniture:</strong> 4 students stay in each room. For every student 1 cot, 1 chair, 1 table, and a wall mounted cupboard is available in room.
               <br></br><strong>Newspaper:</strong> Newspapers like Lokamat, Sakal, Indian Express, Times of India are provided to upgrade the current knowledge.
                </p>
              </div>
            </div>
          </div>
        </div><br></br>
        
        {/*Rector Info*/}
        <div className='table-responsive'>
          <table className='table table-bordered border-info '>
            <tr>
              <th><h4>Rector, Girls Hostel</h4></th>
              <td  rowSpan={3} ><p><strong>Smt. Dr. K. V. Thakur </strong><br/>Email-id : <a href='mailto: kirti79@gmail.com'>kirti79@gmail.com</a> </p></td>
            </tr>
          </table>
        </div><br></br>

        {/*Image Gallery*/}
        <h2 style={{color: '#c81d1d'}}>Image Gallery</h2><br></br>        
        <Carousal/><br></br>
          
        
      </div>
    </>
  )
}
