{% assign page = include.page %}{% if page.is_post %}{% include post_description.inc post=page %}{% else %}{{ site.description }}{% endif %}
