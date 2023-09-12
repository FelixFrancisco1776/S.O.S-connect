import { Link } from 'react-router-dom';


//  change all thoughts to checkLists
const checkLists = ({ checkLists, title }) => {
  if (!checkLists?.length) {
    return <h3>No Thoughts Yet</h3>;
  }
// change the routing to add this list to the pages 
  return (
    <div>
      <h3>{title}</h3>
      {checkLists &&
        checkLists.map((checkLists) => (
          <div key={checkLists._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {checkLists.userId} <br />
              <span style={{ fontSize: '1rem' }}>
                had this checkLists on {checkLists.createdAt}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{checkLists.title}</p>

              <ul>
                {
                  checkLists.items.map(item => {
                    return <li>{item.text}</li>
                  })
                }

              </ul>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/checkLists/${checkLists._id}`}
            >
              Join the discussion on this thought.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default checkLists;

