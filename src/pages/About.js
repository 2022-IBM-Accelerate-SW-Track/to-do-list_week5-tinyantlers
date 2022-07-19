import React, { Component } from "react";
import "./About.css";
import pfp from "../assets/pfp.jpg";
import { Button, ListItemButton, TextField } from "@mui/material";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img className="profile_image" src={pfp} alt="Profile Pic"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title"> Hi, I am Alex! </div>
            <div className="brief_description">
              I am a computer science student at UNLV. I love to read and I make
              websites. Software engineering student but hardware enthusiast.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
