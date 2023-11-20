import EncodingParametersInURLs from './EncodingParametersInURLs';
import WorkingWithArrays from './WorkingWithArrays';
import WorkingWithObjects from './WorkingWithObjects';

const Assignment5 = () => {
    return (
        <div className="container">
            <h1>Assignment 5</h1>
            <div className="list-group">
                <a href="http://localhost:4000/a5/welcome" className="list-group-item">
                    Welcome
                </a>
            </div>
            <h1>SimpleAPIExamples </h1>
            <EncodingParametersInURLs />
            <WorkingWithObjects />
            <WorkingWithArrays />
        </div>
    );
};
export default Assignment5;