function SortRow({ activeSort, setActiveSort }) {
    return (
      <div className="fd-sort-row">
        <p className="fd-sort-label">Sort By</p>
        <button
          type="button"
          className={'fd-sort-btn' + (activeSort === 'next' ? ' fd-sort-active' : '')}
          onClick={() => setActiveSort('next')}
        >
          Next Available
        </button>
        <button
          type="button"
          className={'fd-sort-btn' + (activeSort === 'distance' ? ' fd-sort-active' : '')}
          onClick={() => setActiveSort('distance')}
        >
          Distance
        </button>
      </div>
    );
  }
  
  export default SortRow;