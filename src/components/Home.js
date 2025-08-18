import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "./Banner";
import Card from "./Card";
import "./Home.css";
import { listListings } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, listings, error } = listingList;

  useEffect(() => {
    dispatch(listListings());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
            <div className="home_section">
              <Card
          src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-105665-media_library/original/2dbc75ca-aa53-45b6-9080-26e64487c4b6.jpeg?im_w=1920"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
            />
            </div>
      )}
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-105665-media_library/original/2dbc75ca-aa53-45b6-9080-26e64487c4b6.jpeg?im_w=1920"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1025206498994795956/original/7dd747f9-11ea-4130-a3cc-0c967165c8bb.jpeg?im_w=720"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep "
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-949044744316926333/original/3df3f02c-647c-4642-a1ec-a774fa0d9d72.jpeg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>

      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Mzk3OTc5NTQ%3D/original/5f03017d-7fd0-40ab-9201-d5d9ed202a26.jpeg?im_w=1200"
          title="Tiny home in Stellenbosch, South Africa"
          description="2 guests 1 bedroom  bed 1bath"
          price="R3,255 ZAR"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-1312838515401942234/original/c3053104-43ce-44a6-b028-c278ca5a76f2.jpeg?im_w=1200"
          title="Farm stay in Tierpoort, South Africa"
          description="4 guests 2bedrooms  2beds 2baths"
          price="R4,150 ZAR"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-584788471325096420/original/cdf60bab-3f58-4e9d-8746-5f4c8f50c304.jpeg?im_w=1200"
          title="Entire home in Overstrand Local Municipality, South Africa"
          description="6 guests 3bedrooms  4beds 3.5baths"
          price="R3,255 ZAR"
        />
      </div>

      <div className="home_section"></div>
    </div>
  );
};

export default Home;
