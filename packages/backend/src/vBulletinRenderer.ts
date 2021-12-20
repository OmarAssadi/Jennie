import {Renderer} from './renderer'
import {IThemedToken} from 'shiki'
import {HighlighterOptions} from './highlighterOptions'
import Color from 'color'
import {Injectable} from '@nestjs/common'

const characterEscapes: readonly string[] = ['[', ']']

@Injectable()
export default class VBulletinRenderer implements Renderer {

  private escapeText(input: string): string {
    return input.split('$').map(content => {
      return content.split('').map(char => characterEscapes.includes(char) ? `${char}` : char).join('')
    }).join('$')
  }

  public async highlight(tokens: IThemedToken[][], options: HighlighterOptions): Promise<string> {
    const defaultColor = options.defaultColor ?? '#FFFFFF'
    const highlightedText = tokens.map(line => line.map(({color, content}) => {
      const escaped = this.escapeText(content)
      if (escaped.match(/^\s*$/) !== null) {
        return escaped
      }
      const normalizedColor = Color(color ?? defaultColor).hex().slice(1)
      return `[color="#${normalizedColor}"]${this.escapeText(content)}[/color]`
    }).join('')).join('\n')
    return `[code]${highlightedText}[/code]`
  }
}
