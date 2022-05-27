import React from "react";
import Footer from "../../components/Footer/Footer";
import TopNavbar from "../../components/TopNavbar/TopNavbar";
import Chart from "../../components/Chart/Chart";

// images
import carImage from "../../img/img_car.png";
import checkMark from "../../img/check_mark.png";
import imgService from "../../img/img_service.png";

// css
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <TopNavbar />

      {/* hero section */}
      <section className="hero-section" id="home">
        <div className="row">
          <div className="col-md-6 px-5 py-5">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button type="button" className="btn btn-success">
              Mulai Sewa Mobil
            </button>
          </div>
          <div className="col-md-6">
            <img src={carImage} className="img-fluid" alt="" />
          </div>
        </div>
      </section>
      {/* end of hero section */}

      {/* our service section */}
      <section className="our-services px-5 py-5" id="our_services">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={imgService} className="img-fluid float-center" alt="" />
            </div>
            <div className="col-md-6">
              <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
              <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harganya lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <ul className="service-list">
                <li>
                  <span>
                    <img src={checkMark} alt="" />
                  </span>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </li>
                <li>
                  <span>
                    <img src={checkMark} alt="" />
                  </span>
                  Sewa Mobil Jangka Panjang Bulanan
                </li>
                <li>
                  <span>
                    <img src={checkMark} alt="" />
                  </span>
                  Sewa Mobil Lepas Kunci di Bali 24Jam
                </li>
                <li>
                  <span>
                    <img src={checkMark} alt="" />
                  </span>
                  Gratis Antar - Jemput Mobil diBandara
                </li>
                <li>
                  <span>
                    <img src={checkMark} alt="" />
                  </span>
                  Layanan Airport Transfer / Drop In Out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* end of our service section */}

      {/* chart section */}
      <Chart />
      {/* end of chart section */}

      {/* cta banner section */}
      <section className="cta-banner py-5 mx-auto" id="cta_banner">
        <div className="container">
          <h1 className="text-center py-3 text-light">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <p className="text-center py-3 text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis quas sequi nemo amet atque sed non laborum recusandae est quia velit provident fugit nesciunt voluptates, unde hic sapiente ut?
          </p>
          <div className="text-center">
            <button className="btn btn-success">Mulai sewa mobil</button>
          </div>
        </div>
      </section>
      {/* end of cta banner section */}

      {/* faq section */}
      <section className="faq my-5" id="faq">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <h1>Frequently Asked Questions</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sed recusandae libero? Quasi, sapiente? Tempora at expedita quod maxime ipsam, quos magni doloremque asperiores sint aut veniam adipisci id ea?</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                      Apa saja syarat yang dibutuhkan?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis in eius delectus, maxime vero dolor doloremque voluptatem, dignissimos error vel consequatur placeat corrupti aliquam inventore, tempore minus
                      impedit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                      Berapa hari minimal sewa mobil lepas kunci?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis in eius delectus, maxime vero dolor doloremque voluptatem, dignissimos error vel consequatur placeat corrupti aliquam inventore, tempore minus
                      impedit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                      Berapa hari sebelumnya sebaiknya booking sewa mobil?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis in eius delectus, maxime vero dolor doloremque voluptatem, dignissimos error vel consequatur placeat corrupti aliquam inventore, tempore minus
                      impedit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                      Apakah ada biaya antar-jemput?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis in eius delectus, maxime vero dolor doloremque voluptatem, dignissimos error vel consequatur placeat corrupti aliquam inventore, tempore minus
                      impedit veniam.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                      Bagaimana jika terjadi kecelakaan?
                    </button>
                  </h2>
                  <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                    <div className="accordion-body">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. A perferendis in eius delectus, maxime vero dolor doloremque voluptatem, dignissimos error vel consequatur placeat corrupti aliquam inventore, tempore minus
                      impedit veniam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of faq section */}

      <Footer />
    </div>
  );
};

export default LandingPage;
