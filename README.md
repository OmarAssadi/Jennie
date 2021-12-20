# Jennie

Jennie is a syntax highlighter targeted at older forum software whose operators either
cannot or will not add native highlighting support. 

Jennie was built with vBulletin in mind for [Rune-Server][r-s]. Other forum software 
may work, however vBulletin is relatively unique in that `[CODE]...[/CODE]` tags 
continue to parse and render inner bbcode, which allows us to simply wrap tokens 
in `[COLOR="#HEXCOLOR"][/COLOR]` tags and then insert the output into a `[CODE]` 
block for a native-feeling highlighted snippet.

Jennie supports standard Visual Studio Code themes and TextMate grammar, allowing Jennie
to understand and highlight any language which has either a corresponding VS Code 
extension or TextMate grammar.

Additionally, as Jennie uses the [same tokenizer][vs-textmate] as VS Code, given the
same blocks of text, the highlighted output will be more or less identical between
the two. The end result is often significantly better than what Prism or highlight.js 
would provide, particularly with complex embedded grammar, like those found in 
templating engines (e.g., Laravel's Blade and Microsoft's Razor templates) or 
embedded regular expressions and SQL statements.

Jennie also makes use of @Microsoft's [TypeScript port][vs-langdetect] of @yoeo's 
[guesslang][guesslang] for automatic programming language detection, allowing the user
to simply hit the REST endpoint with a block of text and, in the majority of cases, 
receive the correct highlighted output without needing to specify any information about
the input.

## Why Jennie?

![Talking about picking a name for the project][jennie-img]

## Demonstration

Below, you can find some screenshots of Jennie in action.

1. C, [Quake III's fast inverse square root][qrsqrt]
2. Laravel Blade with embedded PHP, regex, and SQL; [random "code"][blade-demo] 
for demonstration purposes.

### vBulletin ([Dark Plus][vscode-dark+] and [BlueFox][bluefox])

![Code demo vBulletin][rs-demo]

### NexusPHP ([Solarized Light][solarized-light])

![Code demo NexusPHP][u2-demo]

## Roadmap

- [x] Tokenize code with TextMate grammars
- [x] Parse VS Code themes and map tokens
- [x] Render bbcode from themed tokens
- [x] Automatically detect input language
- [ ] Some sort of frontend
- [ ] Pure clientside port
- [ ] Setup guide

## Acknowledgements

* [shikijs/shiki][shiki] - Used as a wrapper around [microsoft/vscode-textmate]
[vs-textmate]. Initially I wrote my own wrapper, but after discovering shiki, I
quickly switched as it already provided all the utilities I needed out of the box.
* [microsoft/vscode-language][vs-langdetect] - Used for automatic language detection
* [Spooky][spooky] - Inspiration for the project

## License

* Licensed under the [ISC](/LICENSE) license.

[r-s]: https://www.rune-server.ee/
[vs-textmate]: https://github.com/microsoft/vscode-textmate
[shiki]: https://github.com/shikijs/shiki
[vs-langdetect]: https://github.com/microsoft/vscode-languagedetection
[guesslang]: https://github.com/yoeo/guesslang
[jennie-img]: https://user-images.githubusercontent.com/23220162/146735197-35189344-cdb8-490d-8044-fdcaec6053bb.png
[vscode-dark+]: https://github.com/microsoft/vscode/blob/5155301ccab5d97035111eb4229914ac7548aa86/extensions/theme-defaults/themes/dark_plus.json
[solarized-light]: https://github.com/microsoft/vscode/blob/85694fcf4d4d5c5b90a3b9d0ea96e3765efd4472/extensions/theme-solarized-light/themes/solarized-light-color-theme.json
[bluefox]: http://www.vbstyles.com/bluefox-4x-vbulletin-theme-i12.html
[qrsqrt]: https://github.com/id-Software/Quake-III-Arena/blob/dbe4ddb10315479fc00086f08e25d968b4b43c49/code/game/q_math.c#L548
[blade-demo]: https://gist.github.com/OmarAssadi/8f9d0d40bc6a6e7c6e7c0ce28b3f7da9
[rs-demo]: https://user-images.githubusercontent.com/23220162/146766126-e8bf2fcf-ea67-4ea9-ac29-374bf32ea126.png
[u2-demo]: https://user-images.githubusercontent.com/23220162/146766207-568bb4a9-f486-42d3-9fda-c73e9ba9fb48.png
[spooky]: https://www.rune-server.ee/member.php?u=95295
