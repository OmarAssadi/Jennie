import {Body, Controller, HttpCode, Post} from '@nestjs/common'
import {HighlighterService} from './highlighterService'
import HighlightResult from './highlightResult'
import HighlightCommand from './highlightCommand'
import {ModelOperations} from '@vscode/vscode-languagedetection'
import {ApiResponse} from '@nestjs/swagger'

const modelOperations = new ModelOperations()

@Controller()
export class HighlighterController {

  constructor(private readonly highlighterService: HighlighterService) {}

  @Post('highlight')
  @HttpCode(200)
  @ApiResponse({ status: 200, type: HighlightResult, description: 'Highlights a snippet of code' })
  async highlightText(@Body() highlightCommand: HighlightCommand): Promise<HighlightResult> {
    const {theme, defaultColor, includeTokens, includeCodeTags, input} = highlightCommand
    const language = highlightCommand.language ?? await modelOperations.runModel(input).then(result => result[0].languageId)
    return this.highlighterService.highlight(input, language, theme ?? 'darcula', {defaultColor, includeTokens, includeCodeTags})
  }
}
