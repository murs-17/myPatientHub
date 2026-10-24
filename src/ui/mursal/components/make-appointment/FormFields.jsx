import { useState } from 'react';
import { NAVY, RADIO_ON, INNER } from './shared';

export function Radio({ name, checked, onChange, label }) {
  return (
    <label className="mr-4 mb-0.5 -ml-[11px] inline-flex cursor-pointer items-center">
      <span
        className={
          'relative mr-[5px] inline-flex h-[22px] w-[22px] items-center justify-center rounded-full border ' +
          (checked ? RADIO_ON : 'border-[rgb(222,226,230)] bg-white')
        }
      >
        <input
          type="radio"
          name={name}
          checked={checked}
          onChange={onChange}
          className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
        />
        {checked && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
      <span className={'ml-1 inline-block text-sm font-bold leading-[14px] tracking-[0.13132px] ' + NAVY}>
        {label}
      </span>
    </label>
  );
}

export function RadioGroup({ title, name, value, onChange, options }) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      onFocus={function () {
        setFocused(true);
      }}
      onBlur={function (e) {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setFocused(false);
        }
      }}
    >
      {title && (
        <span
          className={
            'mb-1 text-xl font-normal leading-[28.75px] tracking-[0.1876px] ' +
            (focused ? 'text-[rgb(203,12,159)]' : 'text-[rgb(52,71,103)]')
          }
        >
          {title}
        </span>
      )}
      <div className="flex flex-wrap">
        {options.map(function (o) {
          return (
            <Radio
              key={o[0]}
              name={name}
              checked={value === o[0]}
              onChange={() => onChange(o[0])}
              label={o[1]}
            />
          );
        })}
      </div>
    </div>
  );
}

export function TextField({ label, value, onChange, placeholder, type, multiline, className }) {
  return (
    <label className={'block min-w-0 ' + (className || '')}>
      <span
        className={
          'mb-2 ml-1 block pt-[9.5px] text-xs font-bold capitalize leading-[15px] tracking-[0.39996px] ' + NAVY
        }
      >
        {label}
      </span>
      <div
        className={
          'grid rounded-lg border border-[rgb(210,214,218)] bg-white px-3 text-sm leading-[19.6px] tracking-[0.13132px] text-[rgb(73,80,87)] focus-within:border-[rgb(53,209,245)] focus-within:shadow-[0_0_0_2px_rgba(53,209,245,0.3)] ' +
          (multiline ? 'py-2.5' : 'py-2')
        }
      >
        {multiline ? (
          <textarea
            className={INNER + ' h-[60px] resize-none'}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            type={type || 'text'}
            className={INNER + ' h-[22px]'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </label>
  );
}

/* آیتم گرید: padding 16px 0 0 16px */
export function Item({ w, children }) {
  return <div className={'w-full pt-4 pl-4 ' + (w || '')}>{children}</div>;
}