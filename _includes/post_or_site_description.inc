{% assign page = include.page %}{% if page.is_post %}{% include post_description.inc post=page %}{% elsif page.description %}{{ page.description }}{% else %}{{ site.description }}{% endif %}
