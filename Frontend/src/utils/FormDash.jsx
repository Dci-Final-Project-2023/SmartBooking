import { Alert, Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../store/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FormDash() {
  const { state } = useContext(AuthContext);
  const user = state.user;
  const URL = import.meta.env.VITE_API_USERS;
  const id = user._id;

  const defaultUser = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };

  const [newUser, setNewUser] = useState(defaultUser);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("");
  }, [newUser]);

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (newUser.password !== newUser.password2) {
        alert("Passwörter stimmen nicht überein");
        return;
      }
      const res = await axios.put(`${URL}/${id}`, newUser);
      setMessage(res.data.message);
    } catch (error) {
    }
  };

  return (
    <form
      className="flex flex-col gap-5 w-96 justify-center mx-auto my-6"
      onSubmit={handleSubmit}
    >
      <div>
        {message && <Alert className="my-3">{message}</Alert>}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Your username" />
          </div>

          <TextInput
            id="username"
            type="text"
            placeholder={user?.username}
            required={true}
            shadow={true}
            name="username"
            onChange={handleChange}
            value={newUser.username}
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="email2" value="Your email" />
        </div>
        <TextInput
          id="email2"
          type="email"
          placeholder={user?.email || "name@smartbooking.com"}
          required={true}
          shadow={true}
          name="email"
          onChange={handleChange}
          value={newUser.email}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          required={true}
          shadow={true}
          name="password"
          onChange={handleChange}
          value={newUser.password}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="repeat-password" value="Repeat password" />
        </div>
        <TextInput
          id="repeat-password"
          type="password"
          required={true}
          shadow={true}
          name="password2"
          onChange={handleChange}
          value={newUser.password2}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree">
          I agree with the{" "}
          <a
            href="/forms"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </a>
        </Label>
      </div>
      <Button type="submit">Speichern</Button>
    </form>
  );
}

export default FormDash;
