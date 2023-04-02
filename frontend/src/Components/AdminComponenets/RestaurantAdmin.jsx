import React from "react";
import "../../CSS/RestAdminCss.css";
import { useNavigate } from "react-router-dom";

const RestaurantAdmin = () => {
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
  const [company, setcompany] = React.useState([]);
  const [count, setcount] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    get();
  }, [count]);

  const get = () => {
    fetch("https://good-puce-hummingbird-garb.cyclic.app/restaurant/get", {
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setcompany(res.msg))
      .catch((err) => console.log("err"));
  };

  const handlechange = (e) => {
    setdetail({ ...detail, [e.target.name]: e.target.value });
  };

  const postcompany = () => {
    fetch(`https://good-puce-hummingbird-garb.cyclic.app/restaurant/add`, {
      method: "POST",
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
    setcount(count + 1);
  };

  const delitem = (id) => {
    fetch(
      `https://good-puce-hummingbird-garb.cyclic.app/restaurant/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log("err"));
  };

  const delfun = (id) => {
    delitem(id);
    setcount(count + 1);
  };

  const updatefun = (id) => {
    navigate(`/update/${id}`);
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
    <div className="container" id="restaurant">
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
          Add New Company
        </button>
      </div>

      <hr className="hr"></hr>

      <h1 className="midh1">For Update Or Delete Company</h1>

      <div className="mainmapdiv">
        {company.map((el) => {
          return (
            <div className="companydiv" key={el._id}>
              <div className="title">{el.Title}</div>
              <div className="btndiv">
                <button className="btn1" onClick={() => updatefun(el._id)}>
                  Update
                </button>
                <button className="btn1" onClick={() => delfun(el._id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantAdmin;
