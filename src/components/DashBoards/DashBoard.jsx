import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { useSelector } from "react-redux";
import Card from "../User-Cards/User-Card";
import "./DashBoard.css";
const DashView = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );
  return (
    selectedData && (
      <div className="dashContainer" style={{ display: "flex", justifyContent: "space-between" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} style={{ flex: 1, margin: '0 5px' }} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <DiCodeigniter />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{ width: "15px", height: "15px", display : 'inline-block' }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrFf1hKkxZRtq0MOd2FGDHgyhIm_GLJswQw&usqp=CAU"
                            alt="UserImage"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card id={elem.id} title={elem.title} tag={elem.tag} />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashView;
