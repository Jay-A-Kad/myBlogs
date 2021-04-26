import {useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title , setTitle] =useState('');
    const [body , setBody] =useState('');
    const [author , setAuthor] =useState('kelpie');
    const [isPending ,  setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit= (e) => {
        e.preventDefault();
        const blog ={ title, body,author };

        setIsPending(true);

        fetch(' http://localhost:8000/blogs',{
            method :'POST',
            headers : { "Content-type": "application/json"},
            body: JSON.stringify(blog)

        }).then(() =>{
            console.log("blog added");
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })

    }
    return ( 
        <div className="create">
            <h1>Add a new blog</h1> 
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body: </label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog author: </label>
                <select value={author}
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="kelpie">kelpie</option>
                    <option value="jay">Jay</option>
                </select>

               {!isPending && <button>Add Blog</button>}
               { isPending && <button disabled>Addding blog...</button>}
            </form>   
        </div>
     );
}
 
export default Create;