import { globalContent, pagesContent, siteContent } from '@/editable/content/siteContent'
import { assertContract, isHttpUrl, isNonEmptyString, isNonEmptyText } from '../helpers/contract'

describe('editable content contract', () => {
  it('keeps required global content available', () => {
    assertContract([
      {
        name: 'globalContent.site.name is required',
        pass: isNonEmptyString(globalContent.site.name),
        expected: 'A non-empty site name string',
        actual: globalContent.site.name,
        hint: 'Restore site name source in src/editable/content/global.content.ts or src/editable/theme/brand.config.ts.',
        file: 'src/editable/content/global.content.ts',
      },
      {
        name: 'globalContent.site.baseUrl must be a URL',
        pass: isHttpUrl(globalContent.site.baseUrl),
        expected: 'A URL starting with http:// or https://',
        actual: globalContent.site.baseUrl,
        hint: 'Use the configured site base URL. Do not replace it with plain domain text.',
        file: 'src/editable/content/global.content.ts',
      },
      {
        name: 'Navigation must keep at least one primary link',
        pass: Array.isArray(globalContent.nav.primaryLinks) && globalContent.nav.primaryLinks.length > 0,
        expected: 'globalContent.nav.primaryLinks.length > 0',
        actual: globalContent.nav.primaryLinks,
        hint: 'Keep nav links in global.content.ts so users can move through the site.',
        file: 'src/editable/content/global.content.ts',
      },
      {
        name: 'Footer must keep at least one column',
        pass: Array.isArray(globalContent.footer.columns) && globalContent.footer.columns.length > 0,
        expected: 'globalContent.footer.columns.length > 0',
        actual: globalContent.footer.columns,
        hint: 'Footer columns can be restyled, but do not remove the footer link structure.',
        file: 'src/editable/content/global.content.ts',
      },
    ])
  })

  it('keeps homepage metadata and hero copy usable', () => {
    assertContract([
      {
        name: 'Homepage SEO title is required',
        pass: isNonEmptyString(pagesContent.home.metadata.title),
        expected: 'pagesContent.home.metadata.title is a non-empty string',
        actual: pagesContent.home.metadata.title,
        hint: 'Restore a meaningful SEO title for the homepage.',
        file: 'src/editable/content/pages.content.ts',
      },
      {
        name: 'Homepage SEO description is too short',
        pass: typeof pagesContent.home.metadata.description === 'string' && pagesContent.home.metadata.description.trim().length > 20,
        expected: 'At least 21 characters',
        actual: pagesContent.home.metadata.description,
        hint: 'Add a real SEO description. Very short descriptions hurt metadata and previews.',
        file: 'src/editable/content/pages.content.ts',
      },
      {
        name: 'Homepage hero title is required',
        pass: isNonEmptyText(pagesContent.home.hero.title),
        expected: 'pagesContent.home.hero.title is a non-empty string or non-empty string array',
        actual: pagesContent.home.hero.title,
        hint: 'The UI can change, but the homepage still needs a visible hero title.',
        file: 'src/editable/content/pages.content.ts',
      },
      {
        name: 'Homepage intro paragraphs are required',
        pass: Array.isArray(pagesContent.home.intro.paragraphs) && pagesContent.home.intro.paragraphs.length > 0,
        expected: 'At least one intro paragraph',
        actual: pagesContent.home.intro.paragraphs,
        hint: 'Keep at least one intro paragraph so page content does not render empty.',
        file: 'src/editable/content/pages.content.ts',
      },
    ])
  })

  it('keeps legacy siteContent aliases intact for page files', () => {
    assertContract([
      {
        name: 'siteContent.home metadata alias changed',
        pass: siteContent.home.metadata.title === pagesContent.home.metadata.title,
        expected: 'siteContent.home.metadata.title matches pagesContent.home.metadata.title',
        actual: siteContent.home.metadata.title,
        hint: 'Do not break siteContent aliases; existing editable page files depend on them.',
        file: 'src/editable/content/siteContent.ts',
      },
      {
        name: 'About page title alias is missing',
        pass: isNonEmptyString(siteContent.about.title),
        expected: 'siteContent.about.title is a non-empty string',
        actual: siteContent.about.title,
        hint: 'Restore about content mapping in siteContent.ts/pages.content.ts.',
        file: 'src/editable/content/siteContent.ts',
      },
      {
        name: 'Contact form title alias is missing',
        pass: isNonEmptyString(siteContent.contact.formTitle),
        expected: 'siteContent.contact.formTitle is a non-empty string',
        actual: siteContent.contact.formTitle,
        hint: 'Contact page needs formTitle to render the lead form section clearly.',
        file: 'src/editable/content/siteContent.ts',
      },
    ])
  })
})
