import React from 'react'

const SidebarDialog = ''
const Container = ''
const TocContainer = ''
const SidebarSticky = ''
const MenuButton = ''

export default function DocLayout({ children, tableOfContents, editLink, navGroups, ...props }) {
  
  const sideNav = { navGroups }
  return (
      <div>
              {children}
    </div>
  )
}
