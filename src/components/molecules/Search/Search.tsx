import React, { useState } from 'react'
import './Search.css'

type Props = {
  placeholder?: string
  onSearch?: (value: string) => void
}

export default function Search({ placeholder = 'Search...', onSearch }: Props) {
  const [value, setValue] = useState('')

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault()
    onSearch?.(value)
  }

  return (
    <form className="search" onSubmit={submit} role="search" aria-label="Site search">
      <label className="search__label">
        <span className="visually-hidden">Search</span>
        <input
          className="search__input"
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button type="submit" className="search__button">Search</button>
    </form>
  )
}
