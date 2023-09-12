// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_THOUGHT } from '../utils/queries';

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { thoughtId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
    // pass URL parameter
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3"
    style={{backgroundColor:"#edede9", opacity:"0.8", borderRadius:"65px"}}>
      <h3 className="card-header p-2 m-0">
        {thought.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          made this list on {thought.createdAt}
        </span>
      </h3>
      <div className= "py-4"
      style={{
        backgroundColor:"#10527b"
      }}>
        <blockquote
          className="p-4"
          style={{
            color:"#e3f2fd",
            fontSize: '1.5rem',
            fontWeight:"bold",
            lineHeight: '1.5',
          }}
        >
          {thought.thoughtText}
        </blockquote>
      </div>

      <div className="my-5">
        <CommentList comments={thought.comments} />
      </div>
      <div className="m-3 p-4">
        <CommentForm thoughtId={thought._id} />
      </div>
    </div>
  );
};

export default SingleThought;
