import {useParams} from "react-router-dom";

const Article = () =>{
    // const [params] = useSearchParams();
    const p =  useParams()
    // const id = params.get('id')
    // const name = params.get('name')

    return <div>我是文章页{p.id}</div>
}

export default Article;