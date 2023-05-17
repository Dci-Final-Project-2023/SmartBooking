import React, { useContext } from "react";
import useFetch from "../../../hooks/useFetch";
import AuthContext from "../../../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
import moment from "moment";
import { Phonelink } from "@mui/icons-material";

export default function Buchungen() {
    
  const getHotelsURL = import.meta.env.VITE_API_NEW_BUCHUNG;
  const { data: bookings, error: errorHotels } = useFetch(getHotelsURL);
  const { state } = useContext(AuthContext);
  const user = state.user;

  if(errorHotels) {
    return <div className="text-center mt-4 text-lg">errorHotels</div>
    }

  return (
    <div className="text-center my-6 flex flex-col justify-center lg:mx-64 mx-2 md:mx-8 ">
      <h1 className="text-3xl text-gray-600 my-4">Buchungen</h1>

        <Table hoverable={true}>
        {bookings && (
              <Table.Head>
                <Table.HeadCell>Hotel Picture</Table.HeadCell>
                <Table.HeadCell>Hotel Name</Table.HeadCell>
                <Table.HeadCell>Hotel City</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Account</Table.HeadCell>
                <Table.HeadCell>Start Date</Table.HeadCell>
                <Table.HeadCell>End Date</Table.HeadCell>
                <Table.HeadCell>Details</Table.HeadCell>
              </Table.Head>
            )}
        

        {bookings &&
              bookings.map((booking) => {
                const { hotel, buchungDetails, user } = booking;
                return (
                  <Table.Body
                    className="text-sm text-gray-600 mt-12 text-left"
                    key={crypto.randomUUID()}
                  >
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                      <Table.Cell>
                        <img
                          className="w-12 h-12 rounded-full"
                          src={hotel.photos[0]}
                          alt="hotel-img"
                        />
                      </Table.Cell>

                      <Table.Cell className="">{hotel.name}</Table.Cell>

                      <Table.Cell className="">{hotel.city}</Table.Cell>
                      <Table.Cell className="">{user.username}</Table.Cell>
                      <Table.Cell className="">{user.email}</Table.Cell>
                      <Table.Cell className="">
                        {moment(buchungDetails.dates[0].startDate).format(
                          "DD.MM.YYYY"
                        )}
                      </Table.Cell>
                      <Table.Cell className="">
                        {moment(buchungDetails.dates[0].endDate).format(
                          "DD.MM.YYYY"
                        )}
                      </Table.Cell>
                      <Table.Cell className="space-x-2">
                        <span>adult : {buchungDetails.options.adult}</span>
                        <span>
                          children : {buchungDetails.options.children}
                        </span>
                        <span>room : {buchungDetails.options.room}</span>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                );
              })}
        
        </Table>
    </div>
  );
}

