import useFetch from './useFetch';
import { useHistory, useParams } from "react-router";

const Blogdetails = () => {
    const { id }  = useParams();
    const { data: blog , error , isPending} = useFetch(' http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch(' http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title} </h2>
                    <div>{blog.body}</div>
                    <p> Written by -{blog.author}</p>
                    <button onClick={handleClick}>Delete Me.</button>
                </article>
            )}
        </div>
    );
}
 
export default Blogdetails;