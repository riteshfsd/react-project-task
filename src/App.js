import React from "react";
import Icons from "../src/components/Icons";
import ToastNotifications from "../src/components/ToastNotifications";
import ModalExamples from "../src/components/ModalExamples";
import ToolTips from "../src/components/ToolTips";
import CounterUp from "../src/components/CounterUp";
import IdleTimerContainer from "../src/components/IdleTimerContainer";
import ColorPicker from "../src/components/ColorPicker";
import CrediCardExample from "../src/components/CrediCardExample";
import DateColor from "../src/components/DateColor";

import "./App.css";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div className="router-main-container">
            <div className="router-left-menu-section">
              <h6 style={{ marginBottom: "1px" }}>React Project Basic Task</h6>
              <div>
                <Link to="/Icons">
                  1.Icons Examples
                </Link>
              </div>
              <div>
                <Link to="/ToastNotifications">
                  2.Toast Examples
                </Link>
              </div>
              <div>
                <Link to="/ModalExamples">
                  3.Modal Examples
                </Link>
              </div>
              <div>
                <Link to="/ToolTips">
                  4.ToolTips Examples
                </Link>
              </div>
              <div>
                <Link to="/CounterUp">
                  5.Counter UP Examples
                </Link>
              </div>
              <div>
                <Link to="/IdleTimerContainer">
                  6.IdleTimer Examples
                </Link>
              </div>
              <div>
                <Link to="/ColorPicker">
                  7.Color Picker Examples
                </Link>
              </div>
              <div>
                <Link to="/CrediCardExample">
                  8.Credi Card Example Examples
                </Link>
              </div>
              <div>
                <Link to="/DateColor">
                  9.Date Picker Examples
                </Link>
              </div>
              <h6 style={{ marginBottom: "1px" }}>React Project Advanced Task</h6>
              <div>
                <Link to="/HookCounterTwo">Example 1 </Link>
              </div>
            </div>
            <div className="router-right-menu-section">
              <Switch>
                <Route
                  exact
                  path="/Icons"
                  component={Icons}
                ></Route>
                <Route
                  exact
                  path="/ToastNotifications"
                  component={ToastNotifications}
                ></Route>
                <Route
                  exact
                  path="/ModalExamples"
                  component={ModalExamples}
                ></Route>
                <Route
                  exact
                  path="/ToolTips"
                  component={ToolTips}
                ></Route>
                <Route
                  exact
                  path="/CounterUp"
                  component={CounterUp}
                ></Route>
                <Route
                  exact
                  path="/IdleTimerContainer"
                  component={IdleTimerContainer}
                ></Route>
                <Route
                  exact
                  path="/ColorPicker"
                  component={ColorPicker}
                ></Route>
                <Route
                  exact
                  path="/CrediCardExample"
                  component={CrediCardExample}
                ></Route>
                <Route
                  exact
                  path="/DateColor"
                  component={DateColor}
                ></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
