import React from 'react'


const PostsListFilters = () => {
  return (
<div className="PostsList__filters-container">
      <div className="PostsList__filters-title">Types</div>
      <hr/>
      <div className="PostsList__filters PostsList__filters-types">
    <input type="checkbox" /> Films<br />
    <input type="checkbox" /> Livres<br />
    <input type="checkbox" /> Documentaires <br />
    <input type="checkbox" /> Bandes-dessinées <br />
    <input type="checkbox" /> Films d'animation <br />
    <input type="checkbox" /> Vidéos<br />
    <input type="checkbox" /> Séries <br />
    <input type="checkbox" /> Articles <br />  
      </div>
      
      <div className="PostsList__filters-title">Catégories</div>
      <hr/>
      <div className="PostsList__filters PostsList__filters-genres">
    <input type="checkbox" /> Action<br />
    <input type="checkbox" /> Aventure<br />
    <input type="checkbox" /> Science-Fiction <br />
    <input type="checkbox" /> Comédie<br />
    <input type="checkbox" /> Drame<br />
    <input type="checkbox" /> Historique <br />
    <input type="checkbox" /> Philosophique <br />  
      </div>
   

    <div className="PostsList__filters-title">Whish Lists</div>
    <hr/>
    <div className="PostsList__filters PostsList__filters-whishLists">
  <input type="checkbox" /> À regarder plus tard <br />
  <input type="checkbox" /> Mes posts préférés <br />
    </div>

</div>

  )
}

export default PostsListFilters
