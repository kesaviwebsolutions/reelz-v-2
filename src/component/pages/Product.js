import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillHandbagFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import nftdemo from "../Image/nftdemo.jpg";

function Product() {
  return (
    <>
      <div className='container-kws'>
        <div className='section '>
          <div className='f-s-2 f-w-600 m-b-2'>Product</div>
       
        <div className=''>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 m-y-1'>
              <div className="slider-item">
                <div className="sc-product style1">
                  <div className="top m-b-1">
                    <Link to="/product-details" className="tag">
                      Archetype #588
                    </Link>
                    <div className="wish-list">
                      <Link to="#" className="heart-icon"><AiFillHeart className='b-c-t' /></Link>
                    </div>
                  </div>
                  <div className="features">
                    <div className="product-media">
                      <img src={nftdemo} alt="images" />
                    </div>

                  </div>
                  <div className="bottom">
                    <div className="product-button">
                      <Link to="/product-details" className="tf-button">
                        {" "}
                        <button className="secondary-btn"><BsFillHandbagFill className="b-c-t bag-icon" /> &nbsp;Buy Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 m-y-1'>
            <div className="slider-item">
              <div className="sc-product style1">
                <div className="top m-b-1">
                  <Link to="/product-details" className="tag">
                    Archetype #588
                  </Link>
                  <div className="wish-list">
                    <Link to="#" className="heart-icon"><AiFillHeart className='b-c-t' /></Link>
                  </div>
                </div>
                <div className="features">
                  <div className="product-media">
                    <img src={nftdemo} alt="images" />
                  </div>

                </div>
                <div className="bottom">
                  <div className="product-button">
                    <Link to="/product-details" className="tf-button">
                      {" "}
                      <button className="secondary-btn"><BsFillHandbagFill className="b-c-t bag-icon" /> &nbsp;Buy Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 m-y-1'>
          <div className="slider-item">
            <div className="sc-product style1">
              <div className="top m-b-1">
                <Link to="/product-details" className="tag">
                  Archetype #588
                </Link>
                <div className="wish-list">
                  <Link to="#" className="heart-icon"><AiFillHeart className='b-c-t' /></Link>
                </div>
              </div>
              <div className="features">
                <div className="product-media">
                  <img src={nftdemo} alt="images" />
                </div>

              </div>
              <div className="bottom">
                <div className="product-button">
                  <Link to="/product-details" className="tf-button">
                    {" "}
                    <button className="secondary-btn"><BsFillHandbagFill className="b-c-t bag-icon" /> &nbsp;Buy Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 m-y-1'>
        <div className="slider-item">
          <div className="sc-product style1">
            <div className="top m-b-1">
              <Link to="/product-details" className="tag">
                Archetype #588
              </Link>
              <div className="wish-list">
                <Link to="#" className="heart-icon"><AiFillHeart className='b-c-t' /></Link>
              </div>
            </div>
            <div className="features">
              <div className="product-media">
                <img src={nftdemo} alt="images" />
              </div>

            </div>
            <div className="bottom">
              <div className="product-button">
                <Link to="/product-details" className="tf-button">
                  {" "}
                  <button className="secondary-btn"><BsFillHandbagFill className="b-c-t bag-icon" /> &nbsp;Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 m-y-1'>
      <div className="slider-item">
        <div className="sc-product style1">
          <div className="top m-b-1">
            <Link to="/product-details" className="tag">
              Archetype #588
            </Link>
            <div className="wish-list">
              <Link to="#" className="heart-icon"><AiFillHeart className='b-c-t' /></Link>
            </div>
          </div>
          <div className="features">
            <div className="product-media">
              <img src={nftdemo} alt="images" />
            </div>

          </div>
          <div className="bottom">
            <div className="product-button">
              <Link to="/product-details" className="tf-button">
                {" "}
                <button className="secondary-btn"><BsFillHandbagFill className="b-c-t bag-icon" /> &nbsp;Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Product