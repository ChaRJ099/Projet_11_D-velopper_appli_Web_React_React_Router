import "../styles/Tags.css";
import "../styles/helpers.css";

function Tag(props) {
   
      return (
        <div className="tag">
          <span>{props.tag}</span>
        </div>
      );    
    }
    
    export default Tag;