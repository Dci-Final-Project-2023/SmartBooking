import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import AuthContext from "../../../../store/AuthContext";
import { Alert, Table } from "flowbite-react";
import axios from "axios";

export default function Hotels() {
  const getHotelsURL = import.meta.env.VITE_API_HOTELS;
  const UpdateHotelURL = import.meta.env.VITE_API_HOTELS;
  const { state } = useContext(AuthContext);

  const {
    data: hotels,
    setData: setHotels,
    error: errorHotels,
    reFetch,
  } = useFetch(getHotelsURL);

  useEffect(() => {
    if (!state?.user?.isAdmin) {
      navigate("/dashboard");
    }
    reFetch();
  }, [hotels]);

  const [message, setMessage] = useState(null);
  const [hotelId, setHotelId] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const defaultHotel = {
    name: "",
    type: "",
    city: "",
    cheapestPrice: "",
  };

  const [singleHotel, setSingleHotel] = useState(defaultHotel);

  const handleEdit = (id) => {
    setShowAlert(true);
    setShowEdit(true);
    setHotelId(id);
    setSingleHotel(() => hotels.find((hotel) => hotel._id === id));
  };

  const changeHandler = (e) => {
    setSingleHotel({
      ...singleHotel,
      [e.target.name]: e.target.value,
    });
  };

  const formHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${UpdateHotelURL}/${hotelId}`, singleHotel);
      setMessage(res.data.message);
      setTimeout(() => {
        setMessage(null);
        setShowAlert(false);
      }, 2000);

      setShowEdit(false);
    } catch (error) {
      // setShowAlert(false);
    }
  };

  if (errorHotels) {
    return <div className="text-center mt-4 text-lg">{errorHotels}</div>;
  }

  return (
    <div className="text-center my-6 flex flex-col justify-center lg:mx-64 mx-2 md:mx-8 ">
      <h1 className="text-3xl text-gray-500 my-3">Hotels</h1>
      <div className="my-6">
        {message && <Alert className="my-3">{message}</Alert>}
        {showEdit && (
          <form
            className=" space-y-2 space-x-2"
            action=""
            onSubmit={formHandler}
          >
            <h3 className="text-start text-gray-500 ml-2">Edit Hotel</h3>
            <div className="py-5 px-5 my-2 mx-3 shadow-md bg-slate-100 text-sm grid md:grid-cols-2 md:grid-rows-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-start" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={singleHotel?.name}
                  onChange={changeHandler}
                  required
                  placeholder="Hotel Name"
                  className="w-full rounded-md border-none text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-start" htmlFor="type">
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  id="type"
                  value={singleHotel?.type}
                  onChange={changeHandler}
                  required
                  placeholder="Hotel Type"
                  className="w-full rounded-md border-none text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-start" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={singleHotel?.city}
                  onChange={changeHandler}
                  required
                  placeholder="Hotel City"
                  className="w-full rounded-md border-none text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-start" htmlFor="cheapestPrice">
                  Price
                </label>
                <input
                  type="text"
                  name="cheapestPrice"
                  id="cheapestPrice"
                  value={singleHotel?.cheapestPrice}
                  onChange={changeHandler}
                  required
                  placeholder="Hotel Price"
                  className="w-full rounded-md border-none text-sm"
                />
              </div>

              <button
                className="bg-green-400 px-3 py-2 text-white rounded-md flex w-24 text-sm justify-center items-center "
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        )}
      </div>

      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Photo</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>City</Table.HeadCell>
          <Table.HeadCell>Cheapest Price</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        {hotels &&
          hotels.map((hotel) => {
            return (
              <Table.Body className="" key={hotel._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{hotel._id.slice(20, 28)}</Table.Cell>
                  <Table.Cell>{hotel.name}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <img
                      className="w-16 h-16 rounded-full"
                      src={hotel.photos[0]}
                      alt="hotel-photo"
                    />
                  </Table.Cell>

                  <Table.Cell>{hotel.type}</Table.Cell>
                  <Table.Cell>{hotel.city}</Table.Cell>
                  <Table.Cell>{hotel.cheapestPrice}</Table.Cell>
                  <Table.Cell>
                    <button
                      onClick={() => handleEdit(hotel._id)}
                      className=" px-3 py-2 rounded-md text-sm bg-blue-400 text-white w-16 hover:bg-blue-500"
                    >
                      Edit
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
    </div>
  );
}
