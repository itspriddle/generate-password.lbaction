// LaunchBar Action Script

function run(format) {
  if (Action.preferences.defaultFormat == undefined) {
    Action.preferences.defaultFormat = "L{9}d{9}s{2}"
  }

  if (format == undefined) {
    format = Action.preferences.defaultFormat;
  }

  var password = JSON.parse(LaunchBar.execute(
    "/usr/bin/ruby",
    "--disable=gems",
    "--disable=rubyopt",
    "-W0",
    "generate-password.rb",
    format
  ));

  if (password.success) {
    LaunchBar.setClipboardString(password.message);

    LaunchBar.displayNotification({ "string": "Password copied to clipboard!" });
  } else {
    LaunchBar.alert("Error generating password!", password.message);
  }
}
