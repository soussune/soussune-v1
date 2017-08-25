# 🎙soussune.fm

https://soussune.com/

# Quick Start

**1. Choose a ruby flavor version to install**

```bash
rbenv install 2.3.3
```

**2. Rehash rbenv shims (run this after installing binaries)**

```bash
rbenv rehash
```

**3. Set the global Ruby version and install bundler globally**

```bash
rbenv global 2.3.3
gem install bundler
rbenv rehash
```

**4. Clone down the site**

```
git clone https://github.com/soussune/soussune.github.io.git
```

**5. Install site dependencies**

```
bundle install --path vendor/bundle
```

**6. Run site on your local computer**

```
bundle exec jekyll serve
```

Open your browser to http://0.0.0.0:4000/

Powered by [yattecast](https://r7kamura.github.io/yattecast/)
