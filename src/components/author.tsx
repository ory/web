import React from 'react'

interface Profile {
  fullname: string
  github: string
}

const authors: { [key: string]: Profile } = {
  aeneasr: {
    fullname: 'Aeneas Rekkas',
    github: 'http://github.com/aeneasr'
  },
  zepatrik: {
    fullname: 'Patrik Neu',
    github: 'https://github.com/zepatrik'
  },
  vinckr: {
    fullname: 'Vincent Kraus',
    github: 'https://github.com/vinckr'
  },
  radekg: {
    fullname: 'Radek Gruchalski',
    github: 'https://github.com/radekg'
  },
  k9ert: {
    fullname: 'Kim Neunert',
    github: 'https://github.com/k9ert'
  }
}

const AuthorName = ({
  name,
  className
}: {
  name: string
  className: string
}) => <span className={className}>{authors[name]?.fullname ?? name}</span>

const AuthorLink = ({
  name,
  className
}: {
  name: string
  className?: string
}) => {
  const profile = authors[name]
  if (!profile) {
    return <span className={className}>{name}</span>
  }

  return (
    <a href={profile.github} className={className}>
      {profile.fullname}
    </a>
  )
}

export { AuthorLink, AuthorName }
