{% assign post = include.post %}
{% if post.description %}
{{ post.description }}
{% else %}
{{
  post.actor_ids | join: 'と'
}}{%
  if 1 < post.actor_ids.size
%}の{{ post.actor_ids.size}}人で{%
  else
%}が{%
  endif
%}、{{
  post.topics | join: '、'
}}{%
  if 1 < post.topics.size
%}など{%
  endif
%}について話しました。
{% endif %}