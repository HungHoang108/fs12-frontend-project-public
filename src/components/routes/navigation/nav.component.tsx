import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Cart from "../../cart/cart.component";
import { useAppSelector, useAppDispatch } from "../../../hooks/reduxHook";
import { isLogIn } from "../../../redux/loginStatus-reducer";
import { searchTagAction } from "../../../redux/search-tag-reducer";


import "./nav.component.style.scss";
import { log } from "console";

const Navigation = () => {
  const [status, setStatus] = useState(false);
  const [searchTag, setSearchTag] = useState("");

  const nav = useNavigate();
  const loginStatus = useAppSelector((state) => state.LoginReducer);
  const dispatch = useAppDispatch();

  const cartStatus = () => {
    setStatus(!status);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTag(e.target.value);
  };

  const searchForProduct = () => {
    dispatch(searchTagAction(searchTag))
    nav("/searchresult");
  };

  return (
    <div className="navBox">
      <div className="navBox-nav">
        <div>
          <Link to="">Home</Link>
          <Link to="productlist">Products</Link>
        </div>

        <div className="nav-icon">
          <div>
            <input type="text" placeholder="search" onChange={handleSearch} />
            <button onClick={searchForProduct}>Search</button>
          </div>

          <div>light</div>
          <div onClick={cartStatus} className="nav-icon_cart">
            cart
          </div>

          <div className="navBox-cart">
            <Cart />
          </div>
          <div>
            {loginStatus ? (
              <Link onClick={() => dispatch(isLogIn(false))} to="">
                LOG OUT
              </Link>
            ) : (
              <Link to="login">LOG IN</Link>
            )}
          </div>
          <div>{loginStatus && <Link to="newproduct">New Product</Link> }</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
