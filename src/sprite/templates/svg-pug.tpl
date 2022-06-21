
doctype html
html(lang="ru")
    head
    block head
    title SVG иконки
    meta(content="width=device-width, initial-scale=1" name="viewport")
    meta(charset="utf-8")
    meta(content="ie=edge" http-equiv="x-ua-compatible")
    link(rel="stylesheet" href="/styles/basic.css")
    link(rel="stylesheet" href="/styles/for-svg-icons.css")
    include /pages/components/mixins
    body
      .svg-wrapper
        div.d-flex.flex-wrap.row-svg
            {{#shapes}}
            div.svg-col.col-svg
                +svg-icon('{{name}}', '24','24')
                br
                br
                | {{name}}
            {{/shapes}}

