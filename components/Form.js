import { useState } from "react";

const Form = ({ setRender }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pow, setPow] = useState("");

  const [validate, setValidate] = useState("");

  const submit = () => {
    // const object = { name, id, pow };
    // console.log(object);
    var numbers = /^[0-9]+$/;
    if (pow.trim().match(numbers) && name.trim() != "" && id.trim() != "") {
      setValidate("");
      submitProduct();
    }
    if (!pow.trim().match(numbers)) {
      setValidate("Power must be a number");
    }
    if (name.trim() == "" && id.trim() == "") {
      setValidate("Name and ID must not be blank");
    }
    if (!pow.trim().match(numbers) && !name.trim() != "" && !id.trim() != "") {
      setValidate("Name and ID must not be blank / Power must be a number");
    }
    if (pow.trim().match(numbers) && (!name.trim() != "" || !id.trim() != "")) {
      setValidate("Name and ID must not be blank");
    }
    if (!pow.trim().match(numbers) && (name.trim() != "" || id.trim() != "")) {
      setValidate("Name and ID must not be blank / Power must be a number");
    }

    if (!pow.trim().match(numbers) && name.trim() != "" && id.trim() != "") {
      setValidate("Power must be a number");
    }
  };

  const submitProduct = async () => {
    const power = parseFloat(pow);
    const response = await fetch("http://localhost:3001/add", {
      // mode: "no-cors",
      method: "POST",
      body: JSON.stringify({ name, id, power }),

      headers: {
        "Content-type": "application/json",
      },
    });
    // const data = await response.json();
    // console.log({ name, id, power });
    setRender(Math.random);
  };
  return (
    <div className="db__form">
      <form
      // action="http://localhost:3001/add" method="post"
      >
        <div className="db__form-wrapper">
          <input
            required
            className="db__form-input"
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="db__form-wrapper">
          <input
            required
            className="db__form-input"
            placeholder="ID"
            type="text"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </div>
        <div className="db__form-wrapper">
          <input
            required
            className="db__form-input"
            placeholder="Power"
            type="text"
            name="power"
            id="power"
            value={pow}
            onChange={(e) => setPow(e.target.value)}
          ></input>
          <div className="db__form-alert" id="db__form-alert">
            {validate}
          </div>
        </div>

        <div className="db__form-button-wrapper form-action-buttons">
          <input
            className="db__form-button"
            type="button"
            value="ADD DEVICE"
            onClick={submit}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default Form;
