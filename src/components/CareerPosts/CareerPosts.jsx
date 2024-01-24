import React, { useState } from "react";

const CareerPost = () => {
  const [open, setOpen] = useState(false);
  const handelAccordion = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="post-item">
        <div className="post-header d-flex justify-content-between align-items-center">
          <i className="fa-solid fa-user-tie"></i>
          <div className="left">
            <h4>Project Manager</h4>
            <p>
              Ability to communicate effectively with clients, understand their
              requirements, and manage their expectations.
            </p>
          </div>
          <div className="right" onClick={handelAccordion}>
            <i className={`fa-solid fa-${open ? "minus" : "plus"}`}></i>
          </div>
        </div>
        <div className={`post-content row ${open ? "show" : ""}`}>
          <div className="col-md-6">
            <div className="post-requirment">
              <h5>Requirements</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Bachelor's or
                  Master's degree in a relevant field such as Computer Science,
                  Information Technology, Business Administration, or Project
                  Management.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Experience in
                  managing full project lifecycle from initiation to closure.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Understanding of
                  quality assurance processes to deliver high-quality IT
                  solutions.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Experience in
                  creating and managing project budgets.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>Financial acumen
                  to ensure projects are delivered within budget constraints.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Proficient in
                  creating project documentation, including project plans,
                  status reports, and other relevant documents.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="post-requirment benefits">
              <h5>Benefits with us</h5>
              <ul>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Lorem ipsum dolor
                  sit amet, consectetur
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Lorem ipsum dolor
                  sit amet, consectetur
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Lorem ipsum dolor
                  sit amet, consectetur
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Lorem ipsum dolor
                  sit amet, consectetur
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Lorem ipsum dolor
                  sit amet, consectetur
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i> Lorem ipsum dolor
                  sit amet, consectetur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerPost;
