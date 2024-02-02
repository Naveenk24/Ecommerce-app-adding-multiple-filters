import './index.css'
import {FaSearch} from 'react-icons/fa'

const FiltersGroup = props => {
  const {onChangeSearchInput, onPressEnter, onClearFilterBtn} = props

  const renderSearchInput = () => {
    const {searchQuery} = props

    console.log(searchQuery)

    const onChangeInput = event => {
      onChangeSearchInput(event.target.value)
    }

    const onKeydownFunction = event => {
      console.log(event.key)
      if (event.key === 'Enter') {
        onPressEnter()
      }
    }

    const {searchInput} = props

    return (
      <div className="input-field-container">
        <input
          type="search"
          value={searchInput}
          className="filter-input"
          onChange={onChangeInput}
          onKeyDown={onKeydownFunction}
          placeholder="Search products"
        />
        <FaSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoryHead = () => <h1 className="category-head">Category</h1>

  const renderCategoryList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(eachItem => {
      const {onChangeCategory, isActiveCategoryId} = props
      const onClickChangeCategory = () => onChangeCategory(eachItem.categoryId)
      const isActive = eachItem.categoryId === isActiveCategoryId
      const isActiveClassName = isActive
        ? 'active-class-name'
        : 'not-active-class-name'

      return (
        <li
          className="category-list-item"
          key={eachItem.categoryId}
          onClick={onClickChangeCategory}
        >
          <p className={isActiveClassName}>{eachItem.name}</p>
        </li>
      )
    })
  }

  const renderRatingCategoryList = () => {
    const {ratingsList} = props
    return ratingsList.map(eachItem => {
      const {onChangeRating} = props
      const onClickRating = () => onChangeRating(eachItem.ratingId)
      return (
        <li
          className="rating-list-item"
          key={eachItem.ratingId}
          onClick={onClickRating}
        >
          <img
            className="rating-img"
            src={eachItem.imageUrl}
            alt={`rating ${eachItem.ratingId}`}
          />
          <p className="rating-para">& UP</p>
        </li>
      )
    })
  }

  const renderClearFilter = () => {
    const onClickClearBtn = () => {
      onClearFilterBtn()
    }
    return (
      <div className="clear-btn-container">
        <button
          type="button"
          className="clear-button"
          onClick={onClickClearBtn}
        >
          Clear Filters
        </button>
      </div>
    )
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      <div>
        {renderCategoryHead()}
        {renderCategoryList()}
      </div>
      {renderRatingCategoryList()}
      {renderClearFilter()}
    </div>
  )
}

export default FiltersGroup
