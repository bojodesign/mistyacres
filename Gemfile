source "https://rubygems.org"

gem "jekyll", "~> 4.2.2"
gem "bundler"
gem "bundle-audit"
gem "faraday-retry"
gem "rake"
gem "html-proofer"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-data"
  gem "jekyll-default-layout"  
  gem "jekyll-feed"
  gem "jekyll-include-cache"
  gem "jekyll-link-attributes"
  gem "jekyll-optional-front-matter"
  gem "jekyll-paginate"
  gem "jekyll-relative-links"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"  
  gem "jekyll-sitemap"
  gem "jekyll-spaceship"
  gem "jekyll-titles-from-headings"
  gem "jemoji"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", :platforms => [:mingw, :x64_mingw, :mswin]

# For macOS
gem "webrick"

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "kramdown"
gem "kramdown-parser-gfm"
