
  let state = {
       profilePage: {
        posts: [
          {id: 0, news: "I am the First", likes: '1'},
          {id: 1, news: "I am the Second", likes: '21'},
          {id: 2, news: "I am the Third", likes: '12'},
        ],
        
      },
      dialoguesPage: {
        dialogues: [
          { id: 0, name: "Andrey" },
          { id: 1, name: "Bakhadir" },
          { id: 2, name: "Vladilen" },
          { id: 3, name: "Aleksey" },
          { id: 4, name: "Sergey" },
        ],
        messages: [
          { id: 0, message: "Hi man," },
          { id: 1, message: "Hello bro," },
          { id: 2, message: "How are you" },
          { id: 3, message: "How do you do?" },
          { id: 4, message: "Good day" },
        ]
      }
       
  }
  
  export let addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 0
    }
    state.profilePage.posts.push(newPost);

  }

  export default state;