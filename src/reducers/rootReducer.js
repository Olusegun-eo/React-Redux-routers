const initState = {
  posts: [ 
  {userId: 1, id: 1, title: "Squirtle Laid an Egg", body: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
   {userId: 1, id: 2, title: "Charmander Laid an Egg", body: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
   {userId: 1, id: 3, title: "A Helix Fossil was found", body: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"}
  ]
}
const rootReducer = (state=initState, action) => {
  return state;
}

export default rootReducer;