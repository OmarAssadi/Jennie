import {IThemedToken} from 'shiki'
import {ApiProperty} from '@nestjs/swagger'

export default class HighlightResult {

  @ApiProperty({
    description: 'Whether the theme used to highlight the input is considered a dark theme.',
    readOnly: true,
    required: true
  })
  public readonly darkTheme: boolean

  @ApiProperty({
    description: 'The language used for highlighting. Potentially useful when using auto-detection.',
    readOnly: true,
    required: true
  })
  public readonly language: string

  @ApiProperty({
    description: 'The highlighted result.',
    readOnly: true,
    required: true
  })
  public readonly highlightedText: string

  @ApiProperty({
    description: 'The raw themed-tokens used to render the bbcode.',
    default: null,
    readOnly: true,
    required: false
  })
  public readonly tokens?: IThemedToken[][]

  constructor(darkTheme: boolean, language: string,
    highlightedText: string, tokens?: IThemedToken[][]) {
    this.darkTheme = darkTheme
    this.language = language
    this.highlightedText = highlightedText
    this.tokens = tokens
  }
}
