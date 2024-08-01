import React from 'react'
import Menu from './Menu'

function Head() {
  return (
    <>
       <link href="/css/bootstrap.min.css" rel="stylesheet" />
      <link
        href="/plugins/revolution/css/settings.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* REVOLUTION SETTINGS STYLES */}
      <link
        href="/plugins/revolution/css/layers.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* REVOLUTION LAYERS STYLES */}
      <link
        href="/plugins/revolution/css/navigation.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* REVOLUTION NAVIGATION STYLES */}
      <link href="/css/style.css" rel="stylesheet" />
      <link
        rel="shortcut icon"
        href="images/favicon.png"
        type="image/x-icon"
      />
      <link rel="icon" href="/images/favicon.png" type="image/x-icon" />
      {/* Responsive */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      {/* Main Header*/}
      <Menu />
        {/*Main Slider*/}
    </>
  )
}

export default Head
