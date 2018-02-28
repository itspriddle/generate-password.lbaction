$:.unshift File.expand_path("#{__dir__}/../Resources/keepass-password-generator-0.1.1/lib/")

require "json"
require "keepass/password"

begin
  password = KeePass::Password.generate(ARGV.first)
  json = { success: true, message: password }.to_json
  puts json
rescue => e
  json = { success: false, message: e.message }.to_json
  puts json
end
