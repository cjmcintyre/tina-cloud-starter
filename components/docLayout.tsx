import React from 'react'
import { ScreenContainer } from './mdx/ScreenContainer'
import PageLayout from './mdx/PageLayout'
import { SiblingNav, SiblingNavLink, useSideNavPrevNext } from './mdx/SiblingNav'
import Article from './mdx/Article'
import SideNav from './mdx/SideNav'
import { TableOfContents } from './mdx/TableOfContents'
import { useRouter } from 'next/router'
import { trim } from '../components/utils/strUtils'

const SidebarDialog = ''

const Container = ''

const TocContainer = ''

const SidebarSticky = ''
const MenuButton = ''
/* 
function MobileSidebar({ children }) {
  const dialog = useDialogState({ animated: true })
  return (
    <>
      <Dialog {...dialog} as={SidebarDialog}>
        {children}
      </Dialog>
      <Portal>
        <DialogDisclosure {...dialog} as={MenuButton}>
          <VscChevronUp />
          <VscChevronUp />
        </DialogDisclosure>
      </Portal>
    </>
  )
} *//* 

function PrevNextLinks(props) {
  const router = useRouter()
  const pathname = trim(router.asPath)
  const { prev, next } = useSideNavPrevNext(props.navGroups, pathname)
  if (!prev && !next) return null

  return (
    <SiblingNav>
      {prev && (
        <SiblingNavLink type="previous" href={prev.slug}>
          {prev.title}
        </SiblingNavLink>
      )}
      {next && (
        <SiblingNavLink type="next" href={next.slug}>
          {next.title}
        </SiblingNavLink>
      )}
    </SiblingNav>
  )
} */

export default function DocLayout({ children, tableOfContents, editLink, navGroups, ...props }) {
  //const upMd = useUp('md')
  const sideNav = { navGroups }
  return (
      <div>
              {children}
    </div>
  )
}
