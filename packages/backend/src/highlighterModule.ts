import {Module} from '@nestjs/common'
import {BUNDLED_THEMES, getHighlighter} from 'shiki'
import {HighlighterController} from './highlighterController'
import {HighlighterService} from './highlighterService'
import VBulletinRenderer from './vBulletinRenderer'
import * as path from 'path'

export const DATA_PATH = path.join(__dirname)

@Module({
  imports: [],
  controllers: [HighlighterController],
  providers: [
    HighlighterService,
    {
      provide: 'Renderer',
      useClass: VBulletinRenderer
    },
    {
      provide: 'Highlighter',
      useFactory: async () => await getHighlighter({
        themes: [...BUNDLED_THEMES, 'darcula'],
        paths: {
          themes: path.join(DATA_PATH, 'themes/'),
          languages: path.join(DATA_PATH, 'languages/')
        }
      })
    }
  ],
})
export class HighlighterModule {}
