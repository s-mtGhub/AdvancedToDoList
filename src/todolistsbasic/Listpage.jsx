import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import ToDolists from "./toDolists";
import "../index.css";
import { useParams } from "react-router-dom";
import Rxn from "./Rxn";

const Listpage = () => {
  var reloaded = 0;
  const { title } = useParams();
  const [len, setlen] = useState("🤔😃");
  var [inputlist, setinput] = useState([]);
  const [itm, enter_val] = useState("");

  const Add = () => {
    if (itm === "") return;
    setinput([...inputlist, itm]);
    var rxn = inputlist.length;
    setlen(Rxn(rxn, 0));
    enter_val("");
  };

  const Item = (e) => {
    enter_val(e.target.value);
  };

  const del = (id) => {
    console.log(id);
    var rxn = inputlist.length;
    setlen(Rxn(rxn, 2));
    setinput((inputlist) => {
      return inputlist.filter((arrElem, indx) => {
        return indx !== id;
      });
    });
  };

  const check = (e) => {
    if (e.key === "Enter") Add();
  };

  const clear = () => {
    setinput([]);
    setlen("🤔😃");
  };
  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    async function UserData() {
      console.log("1", title, inputlist);

      const res = await fetch(
        "https://advanced-todolist.herokuapp.com/addingtothelist",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            lists: inputlist,
          }),
        }
      );

      const data = await res.json();
      console.log(data);
      if ((data.status >= 400 && data.status < 500) || !data) {
        window.alert("Something went wrong");
        console.log("something went wrong");
      } else {
        console.log("added");
      }
    }
    UserData();
  }, [inputlist]);

  useEffect(() => {
    async function savedData() {
      console.log(title);
      const res = await fetch(
        `https://advanced-todolist.herokuapp.com/addingtothelist`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      // console.log(data);
      const id = data.filter((arr, indx) => {
        return title === data[indx].title;
      });
      setinput(id[0].lists);

      var rxn = id[0].lists.length;
      setlen(Rxn(rxn, 0));
      console.log(id[0].lists);
      reloaded = 1;
    }
    savedData();
  }, [title]);

  return (
    <>
      <div className="pageBody">
        <div className="main_div">
          <div className="title">
            <h1>{title}</h1>
            <p style={{ color: "rgb(172, 228, 20)" }}>
              [ Change Heading by Renaming the "{title}" in web Link ]
            </p>
          </div>
          <div className="list">
            <div className="headline">Tasks</div>
            <div className="inputfield">
              <input type="hidden" name="title" value={title} />
              <input type="hidden" name="lists" value={inputlist} />
              <input
                className="cin"
                type="text"
                placeholder="Add a Item"
                onChange={Item}
                onKeyUp={check}
                value={itm}
                name="item"
              />

              <button className="addbtn" onClick={Add} title="Add to list">
                <i className="fas fa-solid fa-plus"></i>
              </button>
            </div>
            <div className="emoji"> {len}</div>
            <ol>
              {inputlist.map((itmval, indx) => {
                return (
                  <ToDolists
                    key={indx}
                    id={indx}
                    text={itmval}
                    onSelect={del}
                  />
                );
              })}
            </ol>
            {inputlist.length !== 0 ? (
              <div className="clearall" onClick={clear}>
                Clear All
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Listpage;
