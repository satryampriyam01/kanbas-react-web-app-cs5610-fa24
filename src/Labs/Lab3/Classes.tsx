import './Classes.css';
const dangerous = true;
export default function Classes() {
  return (
    <div>
      <h2>Classes</h2>
      <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                     wd-fg-black wd-padding-10px`}>
       Dangerous background
     </div>
      <div className="wd-bg-yellow wd-fg-black wd-padding-10px">
        Yellow background  </div>
      <div className="wd-bg-blue wd-fg-black wd-padding-10px">
        Blue background    </div>
      <div className="wd-bg-red wd-fg-black wd-padding-10px">
        Red background     </div><hr/>
    </div> ) };