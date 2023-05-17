import React, { useContext } from "react";
import FeautureDash from "../../../utils/FeautureDash";
import { Phonelink } from "@mui/icons-material";
import useFetch from "../../../hooks/useFetch";
import { Table } from "flowbite-react";
import AuthContext from "../../../../store/AuthContext";
import moment from "moment";
import BuchungenAdmin from "../Admin/BuchungenAdmin";

function Buchungen() {
  const { state } = useContext(AuthContext);
  const id = state?.user?._id;

  const getUserURL = `${import.meta.env.VITE_API_NEW_BUCHUNG}/${id}`;
  
  const { data: users, error: errorUsers } = useFetch(getUserURL);


  if (errorUsers) {
    return <div>{errorUsers}</div>;
  }
  return (
    <main className="text-center p-2 mb-12">
      {state?.user?.isAdmin ? (
        <section>
          <BuchungenAdmin />
        </section>
      ) : (
        <section>
          <h1 className="text-4xl p-4">Meine Buchungen</h1>
          <section className="border my-12 mx-4 lg:mx-48 py-12">
            <Phonelink className="text-red-500 mb-2" />
            <h2 className="text-2xl text-gray-600 mb-3">Buchungsdetails</h2>
            {users?.length === 0 && (
              "Aktuell hast Du keine Reisen geplant."
            )}

            <Table hoverable={true}>
              {users?.length > 0 && (
                <Table.Head>
                  <Table.HeadCell>Hotel Bild</Table.HeadCell>
                  <Table.HeadCell>Name</Table.HeadCell>
                  <Table.HeadCell>Typ</Table.HeadCell>
                  <Table.HeadCell>Stadt</Table.HeadCell>

                  <Table.HeadCell>Start Datum</Table.HeadCell>
                  <Table.HeadCell>End Datum</Table.HeadCell>
                  <Table.HeadCell>Details</Table.HeadCell>

                </Table.Head>
              )}

              {users &&
                users.map((buchung) => {
                  const { hotel,buchungDetails } = buchung;
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

                        <Table.Cell className="">
                          {hotel.name}
                        </Table.Cell>
                        <Table.Cell className="">
                          {hotel.type}
                        </Table.Cell>
                        <Table.Cell className="">
                          {hotel.city}
                        </Table.Cell>
                        <Table.Cell className="">
                          {moment(
                            buchungDetails.dates[0].startDate
                          ).format("DD.MM.YYYY")}
                        </Table.Cell>
                        <Table.Cell className="">
                          {moment(
                            buchungDetails.dates[0].endDate
                          ).format("DD.MM.YYYY")}
                        </Table.Cell>
                        <Table.Cell className="space-x-2">
                          <span>
                            Erwachsene:{" "}
                            {buchungDetails.options.adult}
                          </span>
                          <span>
                            Kinder:{" "}
                            {buchungDetails.options.children}
                          </span>
                          <span>
                            Zimmer:{" "}
                            {buchungDetails.options.room}
                          </span>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  );
                })}


            </Table>
          </section>
        </section>
      )}

      <FeautureDash />
    </main>
  );
}

export default Buchungen;
