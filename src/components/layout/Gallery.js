import React from "react";

import img1 from "../../images/gallery-img-01.jpg";
import img2 from "../../images/gallery-img-02.jpg";
import img3 from "../../images/gallery-img-03.jpg";
import img4 from "../../images/gallery-img-04.jpg";
import img5 from "../../images/gallery-img-05.jpg";
import img6 from "../../images/gallery-img-06.jpg";

const Gallery = () => {
  return (
    <div className="gallery-box">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-title text-center">
              <h2>Gallery</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </p>
            </div>
          </div>
        </div>
        <div className="tz-gallery">
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img className="img-fluid" src={img1} alt="Gallery Images" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <img className="img-fluid" src={img2} alt="Gallery Images" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <img className="img-fluid" src={img3} alt="Gallery Images" />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4">
              <img className="img-fluid" src={img4} alt="Gallery Images" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <img className="img-fluid" src={img5} alt="Gallery Images" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <img className="img-fluid" src={img6} alt="Gallery Images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
