import { useRef, useState } from 'react'; import { specialtyOptions, genderOptions, conditionOptions, languageOptions, ageOptions, } from '../../data/doctors';
const CHEVRON_PATH = 'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z';
function CheckItem({ label, checked, onChange }) { return ( <label className="fd-check"> <input type="checkbox" className="fd-check-input" checked={checked} onChange={onChange} /> <span className={'fd-check-box' + (checked ? ' fd-check-on' : '')}> {checked && ( <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"> <path
d="M5 12.5l4.5 4.5L19 7.5"
fill="none"
stroke="#ffffff"
strokeWidth="3"
strokeLinecap="round"
strokeLinejoin="round"
/> </svg> )} </span> <span className="fd-check-text">{label}</span> </label> ); }
function FilterSelect({ placeholder, options, value, onChange, searchable }) { const [open, setOpen] = useState(false); const [text, setText] = useState(''); const inputRef = useRef(null);
const shown = options.filter(function (option) { return option.toLowerCase().includes(text.toLowerCase()); });
function choose(option) { onChange(value === option ? '' : option); setText(''); setOpen(false); }
function handleBlur() { setOpen(false); setText(''); }
function handleMouseDown(event) { if (open) { event.preventDefault(); setOpen(false); setText(''); if (inputRef.current) inputRef.current.blur(); } else { setOpen(true); } }
return ( <div className="fd-select-wrap"> <div className={'fd-select' + (open ? ' fd-select-open' : '')}> {text === '' && value !== '' && <span className="fd-select-single">{value}</span>} {text === '' && value === '' && ( <span className="fd-select-placeholder">{placeholder}</span> )}
    <input
      ref={inputRef}
      type="text"
      className="fd-select-input"
      aria-label={placeholder}
      value={text}
      readOnly={!searchable}
      onChange={function (event) {
        setText(event.target.value);
        setOpen(true);
      }}
      onFocus={function () {
        setOpen(true);
      }}
      onMouseDown={handleMouseDown}
      onBlur={handleBlur}
    />

    <div className="fd-select-arrow">
      <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
        <path d={CHEVRON_PATH} />
      </svg>
    </div>
  </div>

  {open && (
    <div className="fd-menu">
      {shown.map(function (option) {
        return (
          <div
            key={option}
            className="fd-option"
            onMouseDown={function (event) {
              event.preventDefault();
              choose(option);
            }}
          >
            {option}
          </div>
        );
      })}
    </div>
  )}
</div>
); }
function FilterPanel({ searchText, setSearchText, zipText, setZipText, specialty, setSpecialty, gender, setGender, condition, setCondition, language, setLanguage, ages, toggleAge, onlineOnly, setOnlineOnly, primaryOnly, setPrimaryOnly, }) { return ( <div className="fd-card"> <div className="fd-card"> <form className="fd-form" onSubmit={(event) => event.preventDefault()}> <div className="fd-box-16"> <div className="fd-input"> <input type="text" placeholder="Primary Care" value={searchText} onChange={(event) => setSearchText(event.target.value)} /> </div> </div>
      <div className="fd-box-16">
        <div className="fd-input">
          <input
            type="text"
            placeholder="Zip code or Neighborhood"
            value={zipText}
            onChange={(event) => setZipText(event.target.value)}
          />
        </div>
      </div>
    </form>
  </div>

  <div className="fd-card fd-card-second">
    <form className="fd-form" onSubmit={(event) => event.preventDefault()}>
      <div className="fd-box-8">
        <p className="fd-label">Filter By</p>
      </div>

      <div className="fd-box-8">
        <FilterSelect
          placeholder="Specialty"
          options={specialtyOptions}
          value={specialty}
          onChange={setSpecialty}
          searchable={true}
        />
      </div>

      <div className="fd-box-8">
        <FilterSelect
          placeholder="Gender"
          options={genderOptions}
          value={gender}
          onChange={setGender}
          searchable={false}
        />
      </div>

      <div className="fd-box-8">
        <FilterSelect
          placeholder="Condition"
          options={conditionOptions}
          value={condition}
          onChange={setCondition}
          searchable={true}
        />
      </div>

      <div className="fd-box-16">
        <FilterSelect
          placeholder="languages"
          options={languageOptions}
          value={language}
          onChange={setLanguage}
          searchable={true}
        />
      </div>

      <div className="fd-box-8">
        <p className="fd-label">Providers Who Treat</p>
        <div>
          {ageOptions.map(function (age) {
            return (
              <CheckItem
                key={age}
                label={age}
                checked={ages.includes(age)}
                onChange={() => toggleAge(age)}
              />
            );
          })}
        </div>
      </div>

      <div className="fd-box-8">
        <hr className="fd-divider" />
        <p className="fd-label">View Only</p>
        <div>
          <CheckItem
            label="Online Scheduling"
            checked={onlineOnly}
            onChange={() => setOnlineOnly(!onlineOnly)}
          />
          <CheckItem
            label="Primary Care"
            checked={primaryOnly}
            onChange={() => setPrimaryOnly(!primaryOnly)}
          />
        </div>
      </div>
    </form>
  </div>
</div>
); }
export default FilterPanel;