import {ApiProperty, ApiPropertyOptional} from '@nestjs/swagger'

export default class HighlightCommand {
  @ApiProperty({
    description: 'The theme to use when highlighting tokens.',
    default: 'darcula',
    required: false
  })
  public theme?: string = 'darcula'

  @ApiPropertyOptional({
    description: 'The programming language that is to be highlighted. Leave null for auto-detection.',
    example: 'java',
    default: null,
    required: false
  })
  public language?: string

  @ApiProperty({
    description: 'The color to use for non-themed tokens.',
    default: '#FFFFFF',
    required: false
  })
  public defaultColor?: string = '#FFFFFF'

  @ApiProperty({
    description: 'Whether to include the raw, themed tokens in addition to the rendered result.',
    default: false
  })
  public includeTokens?: boolean = false

  @ApiProperty({
    description: 'Whether the rendered result should be wrapped in [CODE][/CODE] tags.',
    default: true
  })
  public includeCodeTags?: boolean = true

  @ApiProperty({
    description: 'The input that is to be highlighted.',
    example: `
// LagHandler reduces lag
// omg even coded with tabs guyz
// by xerozcheez

public class LagHandler {

 	public static int reduceLag()  {
		return lagProcess();
	}

	public static int lagProcess() {
		return reduceLag();
	}
}`
  })
  public input: string
}
