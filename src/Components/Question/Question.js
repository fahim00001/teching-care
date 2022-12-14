import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='container mt-5'>
            <div className='question-container'>
                <h3>Diffrence between props and state?</h3>
                <p>
                props vs state diffrence:
                 props ==)
                    <ol>
                        <li>props are read-only and immutable.</li>
                        <li>props are external and controlled by whatever renders the component.</li>
                        <li>stateless component can have props also props make components reusable</li>
                        <li>we can't change props inside the components</li>
                        <li>props can be changed by parent Component</li>
                    </ol>
                </p>
                <p>
                 state ==)              
                    <ol>
                        <li>State changes can be asynchronous and it is mutable.</li>
                        <li>States can be used for rendering dynamic changes with the component.</li>
                        <li>It also helps virtual dom to compare change and then virtual dom don't have to change whole dom. </li>
                        <li>state holds information about the components.</li>
                        <li>State can't change in the  child Components </li>
                    </ol>
                </p>
            </div>
            <div className='question-container mt-5' >
                <h3>How react dom works? </h3>
                <p>
                React is javascript library which creates user interface.React is  purely write in javascript language .
                But React have a language its call JSX that's javascriptXML.it's looks like html but it's not html .
                whatever we code in jsx balel will compile that code And that code will create React virtual dom.That's why react make his own virtual dom where he don't have to repaint  and also it will just work for js object and also don't have to think about browser rules .Just he will make simple row js object and make a replica of browser dom which is called virtual dom.Then virtual dom compare changes then it render.
                React virtual dom is so powerfull.It not render whole page.Rather it always compare previous and new changes then it render to browser
                dom .After that user will able to see .
                </p>
            </div>
        </div>
    );
};

export default Question;