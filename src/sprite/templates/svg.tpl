@mixin svg-sprite($file_name) {
  display: inline-block;
}

{{#shapes}}
@mixin {{selector_prefix}}{{name}} {
  @include svg-sprite('{{name}}');
  width: {{width.outer}}px;
  height: {{height.outer}}px;
}

{{/shapes}}

@mixin svg-icons-init() {
{{#shapes}}
    .{{selector_prefix}}{{name}} { @include {{selector_prefix}}{{name}}(); }
{{/shapes}}
}
