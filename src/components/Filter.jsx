export default function Filter(){
    return(
        <div className="filter">
            <h2>Filter by:</h2>
            <select name="genres" id="">
                <option value="">All Genres</option>
                <option value="1">Genre 1</option>
                <option value="2">Genre 2</option>
                <option value="3">Genre 3</option>
                <option value="4">Genre 4</option>
            </select>
            <select name="updates" id="">
                <option value="">Recently Updated</option>
                <option value="popular">Most Popular</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    )
}