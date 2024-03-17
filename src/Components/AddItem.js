import search from "./../Assets/search-normal.png";
import save from "./../Assets/save.png"
import URL from "./../rootUrl"
import Cookies from "universal-cookie";
import { useState } from "react";
import dashPic1 from "./../Assets/Group 47732.png";

export default function AddItem(props) {

    let cookes = new Cookies();
    let token = cookes.get("token");

    if(!token)
    window.location = "/"

    const stringWithoutQuotes = token && token.replace(/"/g, "");

    const [formData, setFormData] = useState({
        category: '',
        item: '',
        eta: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${URL}/api/v1/items/createItem`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${stringWithoutQuotes}`,
            
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert("Data posted")
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };


    return (
        <>
        <div className="add-outer">

        <div className="add-i1">
        <div className="input-cont">
            <img className="input-logo1" src={search} />
            <input
              className="search-input"
              placeholder="Search"
              type="text"
            />
            </div>
          <img className="dash-pic-1" src={dashPic1} />
        </div>


        

            <p className="menu-p">Menu Details</p>
            <div className="add-inner">
                <p className="add-menu-p">Add Your Menu</p>

                <div className="add-inner-2">

                    <div className="add-inner-2-1">
                    {/* <p></p> */}

                    <label className="pink" for="category">Category</label>

                    <select name="category" className="add-category" defaultValue="Category" onChange={handleChange}>
                    <option value="Category" disabled hidden>Category</option>
                        <option value="Non-veg starter">Non-veg starter</option>
                        <option value="Veg-starter">Veg-starter</option>
                        <option value="Main-course">Main-course</option>
                        <option value="Soup">Soup</option>
                    </select>
                    </div>
                    
                <div className="add-inner-2-2">
                    <p className="pink">Item Name</p>

                    <input type="text" placeholder="Enter Item Name" name="item" onChange={handleChange} className="add-item"/>
                </div>
                    
                <div className="add-inner-2-3">
                    <p className="pink">ETA</p>

                    <input type="number" placeholder="Enter ETA" name="eta" onChange={handleChange} className="add-item"/>
                </div>

                </div>
                <button className="add-save" onClick={handleSubmit}>Save</button>
            </div>
        </div>
        </>
    )
}