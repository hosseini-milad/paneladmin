import { useEffect ,useRef} from 'react';
import ReactToPrint from "react-to-print";
function Sample(){
  var contentRef = useRef<HTMLDivElement>(null);
    return(
      <div>
        <ReactToPrint
          trigger={() => {
            return <a href="#">Print Now!</a>;
          }}
          content={() => contentRef}
        />
        <div ref={el => (contentRef = el)} >
          <small>Here</small>
          </div>
      </div>
    )
}
export default Sample