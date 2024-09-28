import React from "react";
import { BsPlus, BsSearch, BsGripVertical, BsBook } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <span className="input-group-text" id="wd-search-assignment-icon">
            <BsSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
            aria-label="Search"
            id="wd-search-assignment"
          />
        </div>

        {/* Group and Assignment buttons */}
        <div>
          <button className="btn btn-light me-2" id="wd-add-assignment-group">
            <BsPlus /> Group
          </button>
          <button className="btn btn-danger" id="wd-add-assignment">
            <BsPlus /> Assignment
          </button>
        </div>
      </div>

      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            {/* Title Section */}
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <h3 id="wd-assignments-title" className="mb-0 text-white">
                <small>ASSIGNMENTS</small>
              </h3>
            </div>

            {/* Right-side Section with 40%, Plus Icon, and Lesson Control */}
            <div className="d-flex align-items-center">
              <span className="badge bg-light text-dark rounded-3 me-2">
                40% of Total
              </span>
              <BsPlus className="me-3" />
              <LessonControlButtons />
            </div>
          </div>

          {/* Assignment List */}
          <ul className="wd-lessons list-group rounded-0 position-relative">
            <div className="border-start border-3 border-success position-absolute start-0 h-100" />

            {/* Assignment A1 */}
            <li
              className="wd-lesson list-group-item p-3 ps-1"
              id="wd-assignment-a1"
            >
              <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center ms-3">
                <BsBook className="text-success me-3 fs-4" />
                <div>
                  <a
                    className="wd-assignment-link h5 mb-1"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1 - ENV + HTML
                  </a>
                  <br />
                  <small>
                    Multiple Modules | <b>NOT available until</b> May 6 at
                    12:00am
                  </small>
                  <br />
                  <small>
                    <b>Due</b> May 13 at 11:59pm | 100 points
                  </small>
                </div>
                </div>
                <LessonControlButtons />
              </div>
            </li>

            {/* Assignment A2 */}
            <li
              className="wd-lesson list-group-item p-3 ps-1 mt-3"
              id="wd-assignment-a2"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center ms-3">
                  <BsBook className="text-success me-3 fs-4" />
                  <div>
                    <a
                      className="wd-assignment-link h5 mb-1"
                      href="#/Kanbas/Courses/1234/Assignments/124"
                    >
                      A2 - CSS + BOOTSTRAP
                    </a>
                    <br />
                    <small>
                      Multiple Modules | <b>NOT available until</b> May 13 at
                      12:00am
                    </small>
                    <br />
                    <small>
                      <b>Due</b> May 20 at 11:59pm | 100 points
                    </small>
                  </div>
                </div>
                <LessonControlButtons />
              </div>
            </li>

            {/* Assignment A3 */}
            <li
              className="wd-lesson list-group-item p-3 ps-1 mt-3"
              id="wd-assignment-a3"
            >
              <div className="d-flex justify-content-between align-items-center">
                {/* Assignment details on the left */}
                <div className="d-flex align-items-center ms-3">
                  <BsBook className="text-success me-3 fs-4" />
                  <div>
                    <a
                      className="wd-assignment-link h5 mb-1"
                      href="#/Kanbas/Courses/1234/Assignments/125"
                    >
                      A3 - JAVASCRIPT + REACT
                    </a>
                    <br />
                    <small>
                      Multiple Modules | <b>NOT available until</b> May 20 at
                      12:00am
                    </small>
                    <br />
                    <small>
                      <b>Due</b> May 27 at 11:59pm | 100 points
                    </small>
                  </div>
                </div>

                {/* LessonControlButtons aligned on the right */}
                <LessonControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
