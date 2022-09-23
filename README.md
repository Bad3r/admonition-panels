# Admonition Panels

adds admonition panels to Logseq.

![picture 1](images/7ff450734c6c823b0fe6dac18ac362ddc3feca749963dac196b10467041343ed.png)  


# Installation

From the market place, you can navigate to Plugins > Search "Admonition Panels" > Install.

# Usage

Panels will be registered to slash commands and will start with the word "Admon - " ... You can configure Admonition panels in two ways.. The first is storing all your content in the parent block, and the alternative is to use child blocks.

Approach 1:
```markdown
- #admon-warning Warning!
  Nested data goes here..
```

Approach 2:
```markdown
- #admon-warning Warning!
  - Nested data goes here..
```