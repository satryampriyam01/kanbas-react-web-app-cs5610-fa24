export default function Assignments(){
    return (
        <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A1 - ENV + HTML
          </a>
           Multiple Modules | <b>NOT available untill</b> May 6 at 12:00am | <br/>
          <b>Due</b> May 13 at 11:59 | 100pts
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - CSS + BOOTSTRAP
          </a>

           Multiple Modules | <b>NOT available untill</b> May 13 at 12:00am | <br/>
          <b>Due</b> May 20 at 11:59 | 100pts
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/123">
            A2 - JAVASCRIPT + REACT
            </a>
           Multiple Modules | <b>NOT available untill</b> May 20 at 12:00am | <br/>
          <b>Due</b> May 27 at 11:59 | 100pts
          
        </li>
      </ul>
    </div>

    );
}