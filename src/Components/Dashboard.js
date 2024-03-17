import { useState, useEffect } from "react";
import dashPic1 from "./../Assets/Group 47732.png";
import del from "./../Assets/Delete.png";
import URL from "./../rootUrl";
import Cookies from "universal-cookie";
import search from "./../Assets/search-normal.png";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  let cookes = new Cookies();
  let token = cookes.get("token");
  // console.log(token)


  const [searchQuery, setSearchQuery] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");
  const [searchQuery3, setSearchQuery3] = useState("");
  const [searchQuery4, setSearchQuery4] = useState("");
  const [data, setData] = useState(null);
  const stringWithoutQuotes = token ? token.replace(/"/g, "") : window.location.replace("/");

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(`${URL}/api/v1/items/getItem`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${stringWithoutQuotes}`,
          },
        });
        
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [props.data, token]);
  
  if (!data) return <h2>No data or you are not signed in<br></br>click <Link to="https://pavan-assessment-frontend.onrender.com/">Login</Link> to login</h2>;

  
  const filteredData = data?.items?.filter((el) => {
    if (searchQuery2) {
      return el.category.toLowerCase().includes(searchQuery2.toLowerCase());
    }
    if (searchQuery3) {
      return el.item.toLowerCase().includes(searchQuery3.toLowerCase());
    }
    if (searchQuery4) {
      const etaString = el.eta.toString();
    return etaString.includes(searchQuery4);
    }

    return el.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
           el.item.toLowerCase().includes(searchQuery.toLowerCase());
  });




  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(`${URL}/api/v1/items/${itemId}/deleteItem`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${stringWithoutQuotes}`,
        },
      });
  
      if (response.ok) {
        // Item deleted successfully, you may want to update your UI accordingly
        console.log("Item deleted successfully");
        window.location.reload()
        // Perform any additional actions after successful deletion, such as updating state or refreshing data
      } else {
        // Handle error cases if deletion fails
        console.error("Failed to delete item");
        // Display error message or take appropriate action
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle network errors or other exceptions
    }
  };
  

  // console.log(filteredData)

  return (
    <>
      <div className="dash-outer">
        <div className="dash-i1">
          <div className="input-cont">
            <img className="input-logo1" src={search} />
            <input
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search"
              type="text"
            />
          </div>
          <img className="dash-pic-1" src={dashPic1} />
        </div>

        <p className="pink menu-p">Menu Dashboard</p>

        <div className="dash-i2">
          <div>
            <p className="pink pink2">Category</p>
            <input
            value={searchQuery2}
            onChange={(e) => setSearchQuery2(e.target.value)}
              className="dash-i2-input"
              placeholder="Enter category"
              type="text"
            />
          </div>

          <div>
            <p className="pink pink2">Item Name</p>
            <input
            value={searchQuery3}
            onChange={(e) => setSearchQuery3(e.target.value)}
              className="dash-i2-input"
              placeholder="Enter item name"
              type="text"
            />
          </div>

          <div>
            <p className="pink pink2">ETA</p>
            <input
            value={searchQuery4}
            onChange={(e) => setSearchQuery4(e.target.value)}
              className="dash-i2-input"
              placeholder="Enter ETA"
              type="text"
            />
          </div>
        </div>

        <div className="dash-i3">
          <div className="dash-i3-inner">
            <div className="dash-i3-inner-2">
              <p>Category</p>
              <p>Item Name</p>
              <p>ETA</p>
            </div>

            <div className="data-outer">
              {
                 filteredData && filteredData.length > 0 ? (
                filteredData?.map((el) => (
                  <div className="data">
                    <p>{el.category}</p>
                    <p>{el.item}</p>
                    <div className="eta">
                      <p>{el.eta}</p>
                      <img className="del-img" onClick={() => handleDelete(el._id)} src={del} />
                    </div>
                  </div>
                ))
                ) : (
                  <p>No matching data found.</p>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
