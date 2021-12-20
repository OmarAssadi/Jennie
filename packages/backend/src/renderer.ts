import {IThemedToken} from 'shiki'
import {HighlighterOptions} from './highlighterOptions'

export interface Renderer {
  highlight(tokens: IThemedToken[][], options: HighlighterOptions): Promise<string>
}
