import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='blog-title'>Things That You Should Know</h1>
            <div className='blogs'>
                <p>What is the purpose of React Router?</p>
                <small>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                </small>
            </div> <br />
            <div className='blogs'>
                <p>How does context API works?</p>
                <small>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. 
                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. More information can be found on React's documentation page
                </small>
            </div> <br />
            <div className='blogs'>
                <p>Write about useRef hook that you know.</p>
                <small>
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
                </small>
            </div> <br />
        </div>
    );
};

export default Blogs;