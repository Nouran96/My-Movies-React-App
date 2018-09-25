import React, {Component} from 'react'

class Lists extends Component {

    state = {
        shelf: 'none'
    }

    render() {
        return (
            <div className="movies-lists">
                <article className="want-to-watch">
                    <h2>Want to Watch</h2>
                    <div className="movies-container">
                        {this.props.movies.length > 0 ? this.props.movies.map(movieData => {
                            return movieData.shelf === 'want-to-watch' && (
                                <div className="movie" key={movieData.id}>
                                <div className="image-container">
                                {movieData.poster_path !== null ? (
                                    <img src={`http://image.tmdb.org/t/p/w185/${movieData.poster_path}`} alt={movieData.title} />
                                ) : (
                                    <p className="image-replacement">No Image</p>
                                )}
                                </div>
                
                                <div className="lists-menu">
                
                                <select value={movieData.shelf || 'none'} onChange={(e) => {
                                    this.props.onChangingShelf(e, movieData)
                                    if(movieData.shelf === 'none')
                                        this.props.onRemovingMovie(movieData)
                                }}>
                                    <option disabled>Move to...</option>
                                    <option value="want-to-watch">Want to Watch</option>
                                    <option value="watched">Watched</option>
                                    <option value="none">None</option>
                                </select>
                
                                </div>
                                
                                <div className="movie-info">
                                <p className="movie-title">{movieData.title} {movieData.release_date ? (<span>({movieData.release_date.slice(0, 4)})</span>) : ''}</p>
                                </div>
                            </div>
                            )
                        }) : (
                            <p>No Movies yet</p>
                        )}
                    </div>
                </article>

                <article className="watched">
                    <h2>Watched</h2>
                    <div className="movies-container">
                        {this.props.movies.length > 0 ? this.props.movies.map(movieData => {
                            return movieData.shelf === 'watched' && (
                                <div className="movie" key={movieData.id}>
                                <div className="image-container">
                                {movieData.poster_path !== null ? (
                                    <img src={`http://image.tmdb.org/t/p/w185/${movieData.poster_path}`} alt={movieData.title} />
                                ) : (
                                    <p className="image-replacement">No Image</p>
                                )}
                                </div>
                
                                <div className="lists-menu">
                
                                <select value={movieData.shelf || 'none'} onChange={(e) => {
                                    this.props.onChangingShelf(e, movieData)
                                    if(movieData.shelf === 'none')
                                        this.props.onRemovingMovie(movieData)
                                }}>
                                    <option disabled>Move to...</option>
                                    <option value="want-to-watch">Want to Watch</option>
                                    <option value="watched">Watched</option>
                                    <option value="none">None</option>
                                </select>
                
                                </div>
                                
                                <div className="movie-info">
                                <p className="movie-title">{movieData.title} {movieData.release_date ? (<span>({movieData.release_date.slice(0, 4)})</span>) : ''}</p>
                                </div>
                            </div>
                            )
                        }) : (
                            <p>No Movies yet</p>
                        )}
                    </div>
                </article>
            </div>
        )
    }
}

export default Lists;