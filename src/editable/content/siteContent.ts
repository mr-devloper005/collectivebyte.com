import { globalContent } from './global.content'
import { pagesContent } from './pages.content'
import { taskIntroCopy, taskPageMetadata } from '@/config/site.content'

export { globalContent, pagesContent, taskIntroCopy, taskPageMetadata }

export const siteContent = {
  navbar: globalContent.nav,
  footer: globalContent.footer,
  hero: pagesContent.home.hero,
  home: {
    metadata: pagesContent.home.metadata,
    introBadge: pagesContent.home.intro.badge,
    introTitle: pagesContent.home.intro.title,
    introParagraphs: pagesContent.home.intro.paragraphs,
    sideBadge: pagesContent.home.intro.sideBadge,
    sidePoints: pagesContent.home.intro.sidePoints,
    primaryLink: pagesContent.home.intro.primaryLink,
    secondaryLink: pagesContent.home.intro.secondaryLink,
  },
  cta: pagesContent.home.cta,
  taskSectionHeading: pagesContent.home.taskSection.heading,
  taskSectionDescriptionSuffix: pagesContent.home.taskSection.descriptionSuffix,
  about: pagesContent.about,
  contact: pagesContent.contact,
  detailPages: pagesContent.detailPages,
} as const
