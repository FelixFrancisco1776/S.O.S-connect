import { Link } from 'react-router-dom';



const ThoughtList = ({
  thoughts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!thoughts.length) {
    return <h2 style={{color:"#e1e1e1"}}>Please make a List</h2>;
  }
// const orderedList = (text) => {
// const endTitle = text.indexOf(":")
//   const title = text.slice(0, endTitle)
// console.log(title)
// return (
//   <div>
// <h1> {title}: </h1>
// <ol> {}.</ol>
// </div>
// )
// }
// // ol li
  return (
    <div >
      {showTitle && <h3>{title}</h3>}
      {thoughts &&
        thoughts.map((thought) => (
          <div key={thought._id} className="card mb-3"
          
          >
            <h4 className="card-header bg-primary text-light p-2 m-0"
            >
              {showUsername ? (
                <Link
                  className="text-light"
                  
                  to={`/profiles/${thought.thoughtAuthor}`}
                >
                  {thought.thoughtAuthor} <br />
                  <span style={{ fontSize: '1.5rem'}}>
                    created the list on {thought.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '2rem' }}>
                    You created the list on {thought.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body p-2">
              <p> {thought.thoughtText} </p>
            </div>
            <Link
              className="btn btn-primary"
              to={`/thoughts/${thought._id}`}
              style={{fontSize:"1.5rem"}}
            >
              Comment on the list above.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;
