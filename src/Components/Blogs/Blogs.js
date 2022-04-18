import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-center'>My Blogs</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        1. Authentication is used to identify the user.
                        Authorization is a process that gives the user access after verification. <br />
                        2. The Authirization process determines whether the users who made the claim are actual users.Authentication determines what users can and cannot access. <br />
                        3. Authentication is the first step to approval so it always comes first.Authorization is completed after successful authentication. <br />
                        4. Authentication requires a username and password. Authorization is not requires a username and password

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Firebase is Realtime database. By using this we can directly secure access to database of client side.
                        Some Alternative of firebase: <br />
                        Back4App <br />
                        AWS Amplify <br />
                        Kuzzle <br />
                        Couchbase <br />
                        NativeScript <br />
                        RxDB <br />
                        Flutter.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;