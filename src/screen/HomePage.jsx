import React, { useMemo, useRef } from "react";
import { menuItems } from "../mock/menu";
import ItemCard from "../components/ItemCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { BASE_URL } from "../util/http";

const HomePage = () => {
  // following fetches data from mock file
  // const data = useMemo(() => menuItems, []);

  // fetch data from server
  const loaderData = useLoaderData();
  const searchInputRef = useRef();
  const navigate = useNavigate();

  const handleSearchForm = (e) => {
    e.preventDefault();
    const search = searchInputRef.current.value;
    const params = new URLSearchParams({ search: search });
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="min-h-[calc(100vh-5rem)]">
      <div
        className="w-full h-80 bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/images/food-home-img.jpg")' }}
      >
        <div className="z-10 flex flex-col gap-5 min-w-96 md:min-w-56 bg-gray-700 rounded-xl p-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-md md:text-xl lg:text-3xl text-white text-center font-bold uppercase">
            Delicious food at your doorstep
          </h3>
          <div>
            <p className="text-xs sm:text-sm text-white text-center max-w-96 mx-auto italic mb-2">
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious lunch or dinner at home.
            </p>
            <p className="text-xs sm:text-sm text-white text-center max-w-96 mx-auto italic">
              All our meals are cooked with high-quality ingredients,
              just-in-time and of course by experienced chefs!
            </p>
          </div>
        </div>

        <div className="absolute top-0 bottom-0 left-0 w-full p-5 bg-white bg-opacity-30"></div>
      </div>

      {/* menu item show */}
      <div className="px-5 md:px-32 lg:px-72 mt-5 md:mt-10 flex flex-col justify-center">
        <form onSubmit={handleSearchForm}>
          <input
            type="text"
            ref={searchInputRef}
            className="p-1 w-72 mx-auto mb-3 rounded-tl-lg rounded-bl-lg"
          />
          <button
            type="submit"
            className="p-1 text-white bg-red-950 border border-red-950 rounded-tr-lg rounded-br-lg"
          >
            Search
          </button>
        </form>
        <div className="bg-white rounded-lg p-2 md:p-5">
          {/* if mock data is used , than map over only data instead of loaderData */}
          {loaderData.data.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const loader = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const search = searchParams.get("search");
  let link = "";
  if (search) {
    link = `${BASE_URL}/v1/api/meal?search=${search}`;
  } else {
    link = `${BASE_URL}/v1/api/meal`;
  }
  console.log(link);
  const response = await fetch(link);
  return response.json();
};

export default HomePage;
