import React from "react";
import { ReactDOM } from "react";
import axios from "axios";

function App(){
    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="input-control" 
                        placeholder="Search For Books" 
                        autoComplete="off">
                     </input>
                </div>
                <button className="btn btn-danger"> Search</button>
            </form>
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement)