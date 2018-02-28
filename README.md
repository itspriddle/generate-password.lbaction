# Generate Password LaunchBar Action

This is a [LaunchBar 6][] Action to generate secure passwords and copy them to
the system clipboard.

It uses the [KeePass Password Generator][] to allow you to specify a character
set for the generated password. This functionality is provided by an included
copy of the [keepass-password-generator RubyGem][] -- no external dependencies
are required.

[LaunchBar 6]: https://www.obdev.at/products/launchbar/index.html
[KeePass Password Generator]: https://keepass.info/help/base/pwgenerator.html
[keepass-password-generator RubyGem]: https://github.com/johnbintz/keepass-password-generator

## Installation

Grab "Generate.Password.zip" from the latest release at
<https://github.com/itspriddle/generate-password.lbaction/releases>. Unzip and
open "Generate Password.lbaction" to install it.

## Usage

To generate a password, invoke LaunchBar and select "Generate Password". After
running the action, the newly generated password is copied to the system
clipboard.

By default, this Action will generate a 20 character password using
`L{9}d{9}s{9}` as the KeePass character set. This will generate a password
with 9 mixes-case letters, 9 digits, and 2 special characters.

To specify a different character set, press `Space` after selecting the Action
from LaunchBar and type in the desired character set, eg: `S{30}`.

## Preferences

If you want to use a different default character set, you can create or edit
`~/Library/Application Support/LaunchBar/Action Support/io.github.itspriddle.LaunchBar.action.GeneratePassword/Preferences.plist`
and set `defaultFormat`.

For example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>defaultFormat</key>
	<string>S{30}</string>
</dict>
</plist>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
<https://github.com/itspriddle/generate-password.lbaction>

## License

Released under the MIT license:

Copyright (c) 2018 Joshua Priddle <jpriddle@me.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
