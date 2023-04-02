import React from "react";
import "../CSS/RestAdminCss.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleHealthAdmin = () => {
  const obj = {
    Title: "",
    Title_URL: "",
    Image: "",
    rating: "",
    place: "",
    Tag: "",
    price: "",
    bought: "",
    originalprice: "",
  };

  const [detail, setdetail] = React.useState(obj);

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  const handlechange = (e) => {
    setdetail({ ...detail, [e.target.name]: e.target.value });
  };

  const postcompany = () => {
    fetch(`https://good-puce-hummingbird-garb.cyclic.app/health/update/${id}`, {
      method: "PATCH",
      body: JSON.stringify(detail),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log("err"));
  };

  const addNewCompany = () => {
    postcompany();
    setdetail(obj);
    navigate("/admin");
  };

  const {
    Title,
    Title_URL,
    Image,
    rating,
    place,
    Tag,
    price,
    bought,
    originalprice,
  } = detail;

  return (
    <div className="container">
      <div className="maindiv">
        <h1 className="heading">Restaurant Admin Section</h1>

        <label className="label">
          Title{" "}
          <input
            type="text"
            className="input"
            name="Title"
            value={Title}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Title_URL{" "}
          <input
            type="text"
            className="input"
            name="Title_URL"
            value={Title_URL}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Image{" "}
          <input
            type="text"
            className="input"
            name="Image"
            value={Image}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Rating{" "}
          <input
            type="text"
            className="input"
            name="rating"
            value={rating}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Place{" "}
          <input
            type="text"
            className="input"
            name="place"
            value={place}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Tag{" "}
          <input
            type="text"
            className="input"
            name="Tag"
            value={Tag}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Price{" "}
          <input
            type="text"
            className="input"
            name="price"
            value={price}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          Bought{" "}
          <input
            type="text"
            className="input"
            name="bought"
            value={bought}
            onChange={handlechange}
          />
        </label>
        <br />
        <label className="label">
          OriginalPrice{" "}
          <input
            type="text"
            className="input"
            name="originalprice"
            value={originalprice}
            onChange={handlechange}
          />
        </label>
        <br />
        <button className="btn" onClick={addNewCompany}>
          Update Company
        </button>
      </div>
    </div>
  );
};

export default SingleHealthAdmin;
