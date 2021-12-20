import {Inject, Injectable} from '@nestjs/common'
import {HighlighterOptions} from './highlighterOptions'
import {Renderer} from './renderer'
import {Highlighter} from 'shiki'
import HighlightResult from './highlightResult'

@Injectable()
export class HighlighterService {

  constructor(@Inject('Highlighter') private readonly highlighter: Highlighter, @Inject('Renderer') private readonly renderer: Renderer) {}

  public async highlight(input: string, language: string, theme?: string, options?: HighlighterOptions): Promise<HighlightResult> {
    const tokens = this.highlighter.codeToThemedTokens(input, language, theme)
    const highlightedText = await this.renderer.highlight(tokens, options ?? {defaultColor: '#FFFFFF', includeTokens: false})
    const dark = this.highlighter.getTheme(theme).type === 'dark'
    return new HighlightResult(dark, language, highlightedText, options.includeTokens ? tokens : null)
  }
}
