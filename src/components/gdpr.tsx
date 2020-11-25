import React from 'react'
import { CookieBanner } from '@palmabit/react-cookie-law'

const getCookie = (cname: string) => {
  const name = cname + '='
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const setCookie = (name: string, value: string, keep: number) => {
  const d = new Date()
  d.setTime(d.getTime() + keep * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + d.toUTCString()
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

const GDPR = () => (
  <CookieBanner
    message="Please select your cookie preferences"
    wholeDomain={true}
    policyLink={'/privacy'}
    onAcceptStatistics={() => {
      if (getCookie('gdpr_cookie_analytics') !== 'true') {
        setCookie('gdpr_cookie_analytics', 'true', 365)
        setTimeout(() => window.location.reload(), 10)
      }
    }}
    showMarketingOption={false}
    showPreferencesOption={false}
    styles={{
      dialog: {
        bottom: 0,
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 100000,
        backgroundColor: '#19191D',
        padding: '16px 8px'
      },
      container: {
        maxWidth: 1080,
        margin: '0 auto',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      message: {
        fontSize: 12,
        color: 'white',
        flexShrink: 2
      },
      selectPane: {
        flexGrow: 1,
        margin: '0 8px'
      },
      checkbox: {
        width: 14,
        height: 14
      },
      optionLabel: {
        fontSize: 12,
        color: 'white',
        display: 'inline-block',
        padding: '0 0 0 4px',
        position: 'relative',
        top: 0,
        left: 0,
        zIndex: 1,
        cursor: 'default',
        verticalAlign: 'middle'
      },
      policy: {
        marginRight: 8,
        textDecoration: 'underline',
        color: 'white',
        fontSize: 12
      },
      button: {
        border: 'none',
        outline: 'none',
        display: 'inline-block',
        backgroundColor: 'rgb(85, 40, 255)',
        padding: '10px 14px',
        minWidth: 80,
        color: 'rgb(255, 255, 255)',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: 500,
        margin: 0,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        cursor: 'pointer'
      }
    }}
  />
)

export default GDPR
