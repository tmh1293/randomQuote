import React, {Component} from 'react';
import axios from 'axios';
import './TagPicker.css'
class TagPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status:'idle',
            tags: null,
            activeTag:[],
        }
    }

    async componentDidMount() {
        console.log('call API');
        try{
            this.setState({status:"loading"});
            const res = await axios.get('https://api.quotable.io/tags');
            const tag = res.data;
            this.setState({
                tags:tag,
                status:"done"
            })
        }catch(err){
            this.setState({status:"error"});
        }
        
    }

    fetchTag = async () => {
        try{
            this.setState({status:"loading"});
            const res = await axios.get('https://api.quotable.io/tags');
            const tag = res.data;
            this.setState({
                tags:tag,
                status:"done"
            })
        }catch(err){
            this.setState({status:"error"});
        }
    }

    handleTagPicker = (id) => {
        const {activeTag} = this.state;
        if(activeTag.includes(id)){
            const filterItem = activeTag.filter(item => item !== id)
            console.log(filterItem + "+" + id)
            this.setState({
                activeTag:[...filterItem]
            })
            return;
        }
        this.setState({
            activeTag:[...this.state.activeTag,id]
        })
    }

    renderTag = () =>{
        const {status, tags, activeTag } = this.state;
        if(status === 'loading' || status == 'idle'){
            return <div>Loading...</div>
        }

        if (status === 'error'){
            return <div>Something went wrong</div>
        }

        return (
            <>
                {tags.map(item=>{ 
                    
                    const cls = activeTag.includes(item._id) ? "Tag-Item active" : "Tag-Item";
                    return (
                        <span key={item.name} className={cls} onClick={()=>this.handleTagPicker(item._id)}>
                            {item.name}
                            </span>
                    )
                })}
            </>
        )       
    }

    render(){
        return (
            <div>{this.renderTag()}</div>
        )
    }
}

export default TagPicker;