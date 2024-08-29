import React from 'react'


const CommentData = [
  {
    name:"John",
    text:"I'm looking forward to more videos from this channel.",
    replies:[
      {
        name:"Gracy",
        text:"Me too! They have great content!!",
        replies:[
          {
            name:"Jacob",
            text:"I hope they keep making videos.",
            replies:[]
             
          }
        ],

      }
    ],
  },
  {
    name:"Sam",
    text:"This is very informative youtube video.",
    replies:[
      {
        name:"Ben",
        text:" I agree! It's so informative.",
        replies:[
          
          {
            name:"Lily",
            text:"I've learned so much from this.",
            replies:[],
          }

        ],
  
        
      }
    ],
  },
  {
    name:"Olivia",
    text:"I'm a huge fan of him. This video was right up my alley.",
    replies:[
      {
        
          name:"Sophia",
          text:"Me too! Have you checked out his other videos?.",
          replies:[
            {
              
                name:"Tim",
                text:" I'm also a big fan. What's your favorite video?.",
                replies:[],
              
            }
          ],


      }
    ],
  },
  {
    name:"Jonathan",
    text:"I love the editing in this video. It's so well done.",
    replies:[
      {
        name:"Isabella",
        text:"The editing is definitely a highlight.",
        replies:[],

      },
      
    ],
  },

]

const Comment = ({data}) =>{
  const{name,text,replies} = data ; 
  return <div className='w-9/12 flex mt-4 bg-gray-100 rounded-lg p-2'>
    <img className='w-7 h-7' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt="user" 
    />
    <div className='px-3 '>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
    </div>
  
  </div>
}

const CommentList = ({comments}) =>{
  return comments.map((comment,index) =>  (
  <div>
    <Comment key={index} data={comment}/>
    <div className='pl-5  ml-5 w-9/12'>
    <CommentList comments={comment.replies}/>
    </div>
  </div>
  ));
    
  
}

const Comments = ({data}) => {
  return (
    <div className='m-5 p-2 '>
        <h1 className='text-2xl font-semibold'>Comments:</h1>
        <CommentList comments={CommentData}/>
    </div>
  )
}

export default Comments