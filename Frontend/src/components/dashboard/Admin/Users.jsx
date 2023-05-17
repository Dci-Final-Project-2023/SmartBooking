import React, { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import { Table } from "flowbite-react";

function Users() {
  const getUsersURL = import.meta.env.VITE_API_USERS;
  const {
    data: users,
    setData,
    error: errorUsers,
    loading,
  } = useFetch(getUsersURL);

  if (errorUsers) {
    return <div>{errorUsers}</div>;
  }

  return (
    <div className="text-center my-6 flex flex-col justify-center lg:mx-64 mx-2 md:mx-8 ">
      <h1 className="text-3xl text-center text-gray-500 my-5">Users</h1>

      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Profile Picture</Table.HeadCell>
          <Table.HeadCell>Username</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Role</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>

        {users &&
          users.map((user) => {
            return (
              <Table.Body className="" key={user._id}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{user._id.slice(0, 4)}</Table.Cell>
                  <Table.Cell>
                    <img
                      className="w-12 h-12 rounded-full"
                      src={user.profilePicture}
                      alt="profile-picture"
                    />{" "}
                  </Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {user.isAdmin === true ? "admin" : "user"}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
    </div>
  );
}

export default Users;
