import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          avatar={faker.internet.avatar()}
          userName={faker.internet.userName()}
          comment={faker.lorem.sentence()}
        />
      </ApprovalCard>
      
      <CommentDetail 
        avatar={faker.internet.avatar()}
        userName={faker.internet.userName()}
        comment={faker.lorem.sentence()}
      />
      <CommentDetail 
        avatar={faker.internet.avatar()}
        userName={faker.internet.userName()}
        comment={faker.lorem.sentence()}
      />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
