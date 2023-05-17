import React, { useContext, useEffect } from "react";
import AuthContext from "../../../../store/AuthContext";
import useFetch from "../../../hooks/useFetch";
import moment from "moment";
import { Table } from "flowbite-react";
import { Phonelink } from "@mui/icons-material";

function BuchungenAdmin() {
  
  const getUsersURL = import.meta.env.VITE_API_NEW_BUCHUNG;

  const { data: bookings, error: errorUsers } = useFetch(getUsersURL);
  const { state } = useContext(AuthContext);
  const user = state.user;


  return (
    <main>
      
     
      <section>
        <h1 className="text-4xl p-4">Buchungen</h1>
        <section className="border my-12 mx-4 lg:mx-48 py-12">
          <Phonelink className="text-red-500 mb-2" />
          <h2 className="text-2xl text-gray-600 mb-3">Buchungsdetails</h2>
          {bookings?.length === 0 && "Aktuell gibt es keine Buchung!"}

          <Table hoverable={true}>
            {bookings && (
              <Table.Head>
                <Table.HeadCell>Hotel Bild</Table.HeadCell>
                <Table.HeadCell>Hotel Name</Table.HeadCell>
                <Table.HeadCell>Hotel Stadt</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Konto</Table.HeadCell>
                <Table.HeadCell>Start Datum</Table.HeadCell>
                <Table.HeadCell>End Datum</Table.HeadCell>
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
                        <span>Erwachsene : {buchungDetails.options.adult}</span>
                        <span>
                          Kinder : {buchungDetails.options.children}
                        </span>
                        <span>Zimmer : {buchungDetails.options.room}</span>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                );
              })}
          </Table>
        </section>
      </section>
    </main>
  );
}

export default BuchungenAdmin;
