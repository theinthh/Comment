import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {

    return (



        <div className="ui continer comments">


            <div>
                <ApprovalCard >
                    <CommentDetail author="Sam" time="9" comment="Helllo" avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard >
                    <CommentDetail author="Andy" time="4" comment="Hiii" avatar={faker.image.avatar()} />
                </ApprovalCard>
                <ApprovalCard >
                <CommentDetail author="Mick" time="5" comment="Heyy" avatar={faker.image.avatar()} />
                </ApprovalCard>
            </div>

        </div>
    )
};

ReactDOM.render(<App />,
    document.querySelector('#root')
);
