/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

const PostCard = ({$id , title , featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-24 h-24 md:h-full md:w-full bg-gray-100 rounded-xl p-4 shadow-custom'>
            <div className='w-full justify-center mb-4 '>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
                className='rounded-xl'/>
            </div>
            <h4 className='text-sm md:text-2xl font-bold'>{title}</h4>
        </div>
    
     </Link>
  )
}

export default PostCard