import React from 'react';
import { BsPlus, BsSearch, BsGripVertical, BsBook } from 'react-icons/bs';
import LessonControlButtons from '../Modules/LessonControlButtons';

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-5">
      {/* Search and Control Buttons */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        {/* Search bar */}
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

      {/* Assignment Title */}
      <div className="d-flex justify-content-between align-items-center p-2 mb-3 bg-secondary rounded">
        <h3 id="wd-assignments-title" className="mb-0 text-white">
          <small>ASSIGNMENTS 40% of Total</small>
        </h3>
        <LessonControlButtons /> {/* Control buttons next to the title */}
      </div>

      {/* Assignment List */}
      <ul id="wd-assignment-list" className="list-group">
        {/* Assignment A1 */}
        <li className="list-group-item d-flex justify-content-between align-items-start wd-assignment-list-item position-relative">
          <div className="border-start border-3 border-success position-absolute start-0 h-100" />
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
              <small>Multiple Modules | <b>NOT available until</b> May 6 at 12:00am</small>
              <br />
              <small><b>Due</b> May 13 at 11:59pm | 100 points</small>
            </div>
          </div>
          <LessonControlButtons /> {/* Place buttons here */}
        </li>

        {/* Assignment A2 */}
        <li className="list-group-item d-flex justify-content-between align-items-start mt-3 wd-assignment-list-item position-relative">
          <div className="border-start border-3 border-success position-absolute start-0 h-100" />
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
              <small>Multiple Modules | <b>NOT available until</b> May 13 at 12:00am</small>
              <br />
              <small><b>Due</b> May 20 at 11:59pm | 100 points</small>
            </div>
          </div>
          <LessonControlButtons /> {/* Place buttons here */}
        </li>

        {/* Assignment A3 */}
        <li className="list-group-item d-flex justify-content-between align-items-start mt-3 wd-assignment-list-item position-relative">
          <div className="border-start border-3 border-success position-absolute start-0 h-100" />
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
              <small>Multiple Modules | <b>NOT available until</b> May 20 at 12:00am</small>
              <br />
              <small><b>Due</b> May 27 at 11:59pm | 100 points</small>
            </div>
          </div>
          <LessonControlButtons /> {/* Place buttons here */}
        </li>
      </ul>
    </div>
  );
}
