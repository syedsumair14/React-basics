import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const style = {
    color: 'dodgerblue',
    backgroundColor: 'gold',
    paddingLeft: '50%'
}

const App = () => {
    return (
    <div>
        <h1 style={style}>Comments</h1>
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail 
                image={faker.image.avatar()} 
                author="Sumair" 
                timeAgo="Today at 2:00PM" 
                commentText="That's awesome!" />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                image={faker.image.avatar()} 
                author="Syed" 
                timeAgo="Yesterday at 6:30AM" 
                commentText="Way to go!" />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail 
                image={faker.image.avatar()} 
                author="Stephan" 
                timeAgo="Today at 12:04PM" 
                commentText="No way." />
        </ApprovalCard>

        <ApprovalCard>    
            <CommentDetail 
                image={faker.image.avatar()} 
                author="Grider" 
                timeAgo="Yesterday at 11:09AM" 
                commentText="Unbeleivable" />
        </ApprovalCard>

        </div>
    </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))