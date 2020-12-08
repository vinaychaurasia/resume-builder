import React from 'react';
import template1 from "../../static/public/images/template1.png";
import template2 from "../../static/public/images/template2.png";
import template3 from "../../static/public/images/template3.png";
import template4 from "../../static/public/images/template4.png";
import { Link } from "react-router-dom";

function SelectTempPage() {
    return (
        <div>
            <h1 className="center">Select a resume template to get started</h1>
            <h4 className="fadeIn center">You'll be able to edit and change this template later!</h4>
            <div className="templateContainer">
                <div className="imgContainer">
                    <img className="tempalteImg" src={template1} alt="template image" ></img>
                    <Link>
                        <button className="tempbtn btn white started" >Use Template</button>
                    </Link>
                </div>
                <div className="imgContainer">
                    <img className="tempalteImg" src={template2} alt="template image" ></img>
                    <Link>
                        <button className="tempbtn btn white started">Use Template</button>
                    </Link>
                </div>
                <div className="imgContainer">
                    <img className="tempalteImg" src={template3} alt="template image" ></img>
                    <Link>
                        <button className="tempbtn btn white started">Use Template</button>
                    </Link>
                </div>
                <div className="imgContainer">
                    <img className="tempalteImg" src={template4} alt="template image" ></img>
                    <Link>
                        <button className="tempbtn btn white started">Use Template</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SelectTempPage;